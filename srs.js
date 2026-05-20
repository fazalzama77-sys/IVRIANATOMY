// =========================================================
// SPACED REPETITION SYSTEM (SRS) — Leitner Box Algorithm
// =========================================================
// 5-box system. Wrong answers drop a question to Box 1 (sees daily).
// Correct answers promote +1 box. Box 5 = mastered (review monthly).
// Intervals: B1 = 1d, B2 = 3d, B3 = 7d, B4 = 14d, B5 = 30d.
// =========================================================

const srs = {
    STORAGE_KEY: 'ivri-srs-state',

    // Interval table in DAYS for each Leitner box.
    intervals: { 1: 1, 2: 3, 3: 7, 4: 14, 5: 30 },

    // ---- STATE PERSISTENCE ----
    _load: () => {
        try { return JSON.parse(localStorage.getItem(srs.STORAGE_KEY)) || {}; }
        catch { return {}; }
    },
    _save: (state) => localStorage.setItem(srs.STORAGE_KEY, JSON.stringify(state)),

    // Build a stable question id from region/system/mode/index
    qid: (region, system, mode, index) => `${region}::${system}::${mode}::${index}`,

    // ---- RECORDING ANSWERS ----
    recordAnswer: (qid, isCorrect) => {
        const state = srs._load();
        const today = Date.now();
        const card = state[qid] || { box: 1, lastReview: null, history: [] };

        if (isCorrect) {
            card.box = Math.min(5, card.box + 1);
        } else {
            card.box = 1; // wrong answer → back to daily
        }
        card.lastReview = today;
        card.history.push({ t: today, c: isCorrect });
        // Keep history bounded
        if (card.history.length > 50) card.history = card.history.slice(-50);

        state[qid] = card;
        srs._save(state);
        return card;
    },

    // ---- DUE QUESTIONS ----
    isDue: (card) => {
        if (!card || !card.lastReview) return true; // never seen → due
        const daysElapsed = (Date.now() - card.lastReview) / (1000 * 60 * 60 * 24);
        return daysElapsed >= srs.intervals[card.box];
    },

    // Returns array of qids that are due for review (either never seen OR overdue)
    getDueQids: () => {
        const state = srs._load();
        return Object.keys(state).filter((qid) => srs.isDue(state[qid]));
    },

    // ---- BUILDING A SMART REVIEW SET ----
    // Priority order (HIGHEST → lowest):
    //   Tier 1: Wrong-answered cards in Box 1, due now    ← "your weak spots"
    //   Tier 2: Cards in Box 2-3, due now                  ← "still strengthening"
    //   Tier 3: Cards in Box 4-5, due now                  ← "long-term refresher"
    //   Tier 4: Never-seen questions                        ← only if deck not full
    //
    // Within each tier, results are SHUFFLED so the order is fresh every session.
    // Questions answered in the last `cooldownMins` minutes are EXCLUDED to avoid
    // showing the user a question they just saw.
    buildReviewSet: (mode = 'mcq', limit = 20, cooldownMins = 10) => {
        if (typeof quizBank === 'undefined') return [];

        const state = srs._load();
        const now = Date.now();
        const cooldownMs = cooldownMins * 60 * 1000;

        const tier1 = [];   // wrong (box 1, due)
        const tier2 = [];   // learning (box 2-3, due)
        const tier3 = [];   // mastered refresher (box 4-5, due)
        const tier4 = [];   // never seen

        Object.keys(quizBank).forEach((region) => {
            Object.keys(quizBank[region]).forEach((system) => {
                const sysData = quizBank[region][system];
                if (!sysData || !sysData[mode]) return;
                sysData[mode].forEach((q, idx) => {
                    const qid = srs.qid(region, system, mode, idx);
                    const card = state[qid];
                    const entry = { qid, region, system, mode, idx, q, card };

                    if (!card) { tier4.push(entry); return; }

                    // Cooldown: skip cards seen in last few minutes
                    if (card.lastReview && (now - card.lastReview) < cooldownMs) return;

                    if (!srs.isDue(card)) return;   // not due → skip entirely

                    if (card.box === 1) tier1.push(entry);
                    else if (card.box <= 3) tier2.push(entry);
                    else tier3.push(entry);
                });
            });
        });

        const shuffle = (arr) => {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        };

        return []
            .concat(shuffle(tier1))      // wrong-spots first
            .concat(shuffle(tier2))
            .concat(shuffle(tier3))
            .concat(shuffle(tier4))      // never-seen as filler
            .slice(0, limit);
    },

    // ---- WEAK-ONLY DECK ----
    // Returns ONLY Box-1 (wrong) cards, shuffled, with cooldown applied.
    // Used by "Drill Weak Topics" button on the dashboard.
    buildWeakSet: (mode = 'mcq', limit = 20, cooldownMins = 10) => {
        if (typeof quizBank === 'undefined') return [];
        const state = srs._load();
        const now = Date.now();
        const cooldownMs = cooldownMins * 60 * 1000;
        const weak = [];

        Object.keys(state).forEach((qid) => {
            const card = state[qid];
            if (!card || card.box !== 1) return;
            if (card.lastReview && (now - card.lastReview) < cooldownMs) return;

            const parts = qid.split('::');
            if (parts.length !== 4) return;
            const [region, system, qMode, idxStr] = parts;
            if (qMode !== mode) return;
            const idx = parseInt(idxStr, 10);

            const sysData = quizBank[region] && quizBank[region][system];
            const q = sysData && sysData[mode] && sysData[mode][idx];
            if (!q) return;

            weak.push({ qid, region, system, mode, idx, q, card });
        });

        for (let i = weak.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [weak[i], weak[j]] = [weak[j], weak[i]];
        }
        return weak.slice(0, limit);
    },

    // ---- HELPER: how many weak (wrong) cards are currently due ----
    getWeakDueCount: (mode = 'mcq', cooldownMins = 10) => {
        const state = srs._load();
        const now = Date.now();
        const cooldownMs = cooldownMins * 60 * 1000;
        let count = 0;
        Object.values(state).forEach((card) => {
            if (!card || card.box !== 1) return;
            if (card.lastReview && (now - card.lastReview) < cooldownMs) return;
            count++;
        });
        return count;
    },

    // ---- STATS ----
    getStats: () => {
        const state = srs._load();
        const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        let dueNow = 0;
        Object.values(state).forEach((card) => {
            counts[card.box] = (counts[card.box] || 0) + 1;
            if (srs.isDue(card)) dueNow++;
        });
        return {
            totalCards: Object.keys(state).length,
            byBox: counts,
            mastered: counts[5],
            dueNow
        };
    },

    // ---- RESET ----
    reset: () => {
        if (confirm('Reset all spaced-repetition progress? This cannot be undone.')) {
            localStorage.removeItem(srs.STORAGE_KEY);
            return true;
        }
        return false;
    }
};

// Expose for console debugging
if (typeof window !== 'undefined') window.srs = srs;
