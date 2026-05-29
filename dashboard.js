// =========================================================
// DASHBOARD & PERFORMANCE TRACKER
// Tracks quiz history, calculates strengths, renders charts
// =========================================================

const dashboard = {
  STORAGE_KEY: 'ivri-quiz-history',
  regions: [
    "Introduction",
    "Forelimb",
    "Head & Neck",
    "Thorax",
    "Abdomen",
    "Hindlimb & Pelvis",
    "Histology",
    "Embryology"
  ],
  systems: [
    { id: "General", label: "General", aliases: ["General Anatomy", "General Anatomy & Osteology"] },
    { id: "Osteology", label: "Osteo", aliases: ["Osteology", "Osteology & Arthrology", "General Anatomy & Osteology"] },
    { id: "Myology", label: "Myolo", aliases: ["Myology", "Myology & Arthrology", "Myology & Neurology", "Myology & Splanchnology"] },
    { id: "Arthrology", label: "Arthr", aliases: ["Arthrology", "Osteology & Arthrology", "Myology & Arthrology"] },
    { id: "Neurology", label: "Neuro", aliases: ["Neurology", "Neurology & Angiology", "Myology & Neurology", "Angiology & Neurology", "Neurology, Angiology & Clinical"] },
    { id: "Angiology", label: "Angio", aliases: ["Angiology", "Neurology & Angiology", "Angiology & Neurology", "Angiology & Splanchnology", "Neurology, Angiology & Clinical"] },
    { id: "Splanchnology", label: "Splan", aliases: ["Splanchnology", "Splanchnology & Clinical", "Splanchnology (Digestive)", "Splanchnology (Urogenital & Mammary)", "Myology & Splanchnology", "Angiology & Splanchnology"] },
    { id: "Clinical", label: "Clinical", aliases: ["Clinical Anatomy", "Splanchnology & Clinical", "Neurology, Angiology & Clinical"] },
    { id: "Histology", label: "Histo", regions: ["Histology"] },
    { id: "Embryology", label: "Embryo", regions: ["Embryology"] }
  ],

  // ==================== DATA PERSISTENCE ====================

  saveQuizResult: (data) => {
    const history = dashboard.getHistory();
    history.push({
      region: data.region || 'Unknown',
      system: data.system || 'Unknown',
      mode: data.mode || 'mcq',
      score: data.score || 0,
      total: data.total || 0,
      accuracy: data.total > 0 ? Math.round((data.score / data.total) * 100) : 0,
      timestamp: Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });
    localStorage.setItem(dashboard.STORAGE_KEY, JSON.stringify(history));
  },

  getHistory: () => {
    try {
      return JSON.parse(localStorage.getItem(dashboard.STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  },

  clearData: () => {
    if (confirm('Are you sure you want to clear all performance data? This cannot be undone.')) {
      localStorage.removeItem(dashboard.STORAGE_KEY);
      dashboard.render();
    }
  },

  // ==================== CALCULATIONS ====================

  getOverviewStats: () => {
    const history = dashboard.getHistory();
    if (history.length === 0) {
      return { totalQuizzes: 0, totalQuestions: 0, avgAccuracy: 0, bestAccuracy: 0, studyStreak: 0, totalCorrect: 0 };
    }

    const totalQuizzes = history.length;
    const totalQuestions = history.reduce((sum, h) => sum + h.total, 0);
    const totalCorrect = history.reduce((sum, h) => sum + h.score, 0);
    const avgAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    const bestAccuracy = Math.max(...history.map(h => h.accuracy));

    // Calculate study streak (consecutive days)
    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dates = [...new Set(history.map(h => {
      const d = new Date(h.timestamp);
      d.setHours(0, 0, 0, 0);
      return d.getTime();
    }))].sort((a, b) => b - a);

    for (let i = 0; i < dates.length; i++) {
      const expected = new Date(today);
      expected.setDate(expected.getDate() - i);
      expected.setHours(0, 0, 0, 0);
      if (dates[i] === expected.getTime()) {
        streak++;
      } else {
        break;
      }
    }

    return { totalQuizzes, totalQuestions, avgAccuracy, bestAccuracy, studyStreak: streak, totalCorrect };
  },

  getTopicStrengths: () => {
    const history = dashboard.getHistory();
    const map = {};

    history.forEach(h => {
      const systemIds = dashboard.getSystemIdsForEntry(h.region, h.system);
      systemIds.forEach(systemId => {
        const key = `${h.region}|${systemId}`;
        if (!map[key]) {
          map[key] = { region: h.region, system: systemId, sources: new Set(), totalScore: 0, totalQuestions: 0, attempts: 0 };
        }
        map[key].sources.add(h.system);
        map[key].totalScore += h.score;
        map[key].totalQuestions += h.total;
        map[key].attempts++;
      });
    });

    Object.values(map).forEach(entry => {
      entry.accuracy = entry.totalQuestions > 0
        ? Math.round((entry.totalScore / entry.totalQuestions) * 100)
        : 0;
      entry.sources = Array.from(entry.sources);
    });

    return map;
  },

  // ==================== RENDERING ====================

  _activeTab: 'analytics',

  switchTab: (tab) => {
    dashboard._activeTab = tab;
    const tabs = document.getElementById('dashboard-tabs');
    if (tabs) {
      const idx = ['analytics', 'planner'].indexOf(tab);
      tabs.dataset.active = String(Math.max(0, idx));
      tabs.querySelectorAll('.dash-tab').forEach(b => {
        b.classList.toggle('is-active', b.dataset.tab === tab);
      });
    }
    const analytics = document.getElementById('dash-analytics-content');
    const planner = document.getElementById('dash-planner-content');
    if (tab === 'analytics') {
      if (analytics) analytics.style.display = 'block';
      if (planner) planner.style.display = 'none';
      dashboard.render();
    } else {
      if (analytics) analytics.style.display = 'none';
      if (planner) planner.style.display = 'block';
      dashboard.renderPlanner();
    }
  },

  render: () => {
    // Sync tab switcher visuals
    const tabs = document.getElementById('dashboard-tabs');
    if (tabs) {
      const idx = ['analytics', 'planner'].indexOf(dashboard._activeTab);
      tabs.dataset.active = String(Math.max(0, idx));
      tabs.querySelectorAll('.dash-tab').forEach(b => {
        b.classList.toggle('is-active', b.dataset.tab === dashboard._activeTab);
      });
    }

    if (dashboard._activeTab === 'planner') {
      dashboard.renderPlanner();
      return;
    }

    const analytics = document.getElementById('dash-analytics-content');
    const planner = document.getElementById('dash-planner-content');
    if (analytics) analytics.style.display = 'block';
    if (planner) planner.style.display = 'none';

    dashboard.renderOverviewStats();
    dashboard.renderSrsPanel();      // Smart Review (Spaced Repetition)
    dashboard.renderAccuracyChart();
    dashboard.renderHeatmap();
    dashboard.renderHistory();
  },

  // Lightweight refresh — only re-renders the SRS panel (after a quiz answer).
  // Cheap; safe to call frequently.
  refreshSrsLive: () => {
    const panel = document.getElementById('dash-srs-panel');
    if (panel && panel.offsetParent !== null) {   // only if dashboard is visible
      dashboard.renderSrsPanel();
    }
  },

  // ============== SMART REVIEW (Spaced Repetition Panel) ==============
  renderSrsPanel: () => {
    const container = document.getElementById('dash-srs-panel');
    if (!container || typeof srs === 'undefined') return;

    const stats = srs.getStats();
    const dueQuestions = stats.dueNow;
    const total = stats.totalCards;
    const mastered = stats.mastered;
    const weakDue = (typeof srs.getWeakDueCount === 'function') ? srs.getWeakDueCount('mcq') : (stats.byBox[1] || 0);
    const masteryPct = total > 0 ? Math.round((mastered / total) * 100) : 0;

    // Per-box bar bits — Leitner 1..5
    const boxBars = [1, 2, 3, 4, 5].map(b => {
        const count = stats.byBox[b] || 0;
        const pct = total ? (count / total) * 100 : 0;
        const colors = { 1: '#ff6b6b', 2: '#ff9f43', 3: '#feca57', 4: '#48dbfb', 5: '#1dd1a1' };
        const labels = { 1: 'Wrong / new', 2: 'Learning', 3: 'Strengthening', 4: 'Knowing', 5: 'Mastered' };
        return `
          <div class="srs-box" title="Box ${b} — ${labels[b]} • ${count} card${count !== 1 ? 's' : ''} • next review in ${srs.intervals[b]} day${srs.intervals[b] > 1 ? 's' : ''}">
            <div class="srs-box-bar"><div class="srs-box-fill" style="height:${Math.max(pct, 4)}%; background:${colors[b]};"></div></div>
            <div class="srs-box-label">B${b}</div>
            <div class="srs-box-count">${count}</div>
          </div>`;
    }).join('');

    container.innerHTML = `
      <div class="srs-header">
        <div>
          <h3 class="srs-title"><i class="fas fa-brain"></i> Smart Review (Spaced Repetition)</h3>
          <p class="srs-sub">Wrong answers come back tomorrow. Right answers fade further apart (1d → 3d → 7d → 14d → 30d).</p>
        </div>
        <div class="srs-pill-group">
          ${weakDue > 0 ? `<div class="srs-due-pill weak-due" title="Box-1 cards (questions you got wrong) that are due now"><i class="fas fa-fire"></i> <strong>${weakDue}</strong> weak</div>` : ''}
          <div class="srs-due-pill ${dueQuestions > 0 ? 'has-due' : ''}" title="All cards due for review now">
            <i class="fas fa-clock"></i> <strong>${dueQuestions}</strong> due
          </div>
        </div>
      </div>

      <div class="srs-body">
        <div class="srs-stats-row">
          <div class="srs-mini-stat"><div class="lbl">Total Cards</div><div class="val">${total}</div></div>
          <div class="srs-mini-stat"><div class="lbl">Mastered (B5)</div><div class="val" style="color:#1dd1a1;">${mastered}</div></div>
          <div class="srs-mini-stat"><div class="lbl">Mastery</div><div class="val">${masteryPct}%</div></div>
        </div>
        <div class="srs-boxes">${boxBars}</div>
        <div class="srs-actions">
          <button class="srs-btn srs-btn-weak" onclick="dashboard.startWeakReview()" ${weakDue === 0 ? 'disabled' : ''}
                  title="Practise ONLY the questions you got wrong (Box 1). Best for fixing weak concepts.">
            <i class="fas fa-fire"></i> Drill weak topics ${weakDue > 0 ? `(${Math.min(weakDue, 20)})` : ''}
          </button>
          <button class="srs-btn srs-btn-primary" onclick="dashboard.startSmartReview()" ${dueQuestions === 0 && total === 0 ? 'disabled' : ''}
                  title="Mixed review — weak first, then learning cards, then mastered refreshers.">
            <i class="fas fa-play-circle"></i> ${dueQuestions > 0 ? `Smart review (${Math.min(dueQuestions, 20)})` : 'Practise mixed set'}
          </button>
          <button class="srs-btn srs-btn-ghost" onclick="dashboard.resetSrs()" title="Wipe all SRS progress">
            <i class="fas fa-redo"></i> Reset
          </button>
        </div>
        ${total === 0
            ? `<div class="srs-empty"><i class="fas fa-info-circle"></i> Take a few quiz questions to seed your review deck — every answer auto-feeds the SRS engine.</div>`
            : `<div class="srs-tip"><i class="fas fa-lightbulb"></i> Wrong answers stay in Box 1 and reappear tomorrow until you get them right. Each correct answer promotes the card to the next box and waits longer before re-asking.</div>`
        }
      </div>
    `;
  },

  startSmartReview: () => {
    if (typeof srs === 'undefined' || typeof quizApp === 'undefined') {
      alert('Quiz engine not available.');
      return;
    }
    const reviewSet = srs.buildReviewSet('mcq', 20);
    if (!reviewSet || reviewSet.length === 0) {
      alert('All caught up! No cards are due for review right now.\n\nTake some new quiz questions to add cards to your deck, or come back tomorrow.');
      return;
    }
    if (typeof quizApp.startSmartReview === 'function') {
      quizApp.startSmartReview(reviewSet, { mode: 'mixed' });
    } else {
      quizApp.openMenu();
    }
  },

  // Drill ONLY weak (Box-1) questions — the user's wrong-answer history
  startWeakReview: () => {
    if (typeof srs === 'undefined' || typeof quizApp === 'undefined') {
      alert('Quiz engine not available.');
      return;
    }
    const weakSet = srs.buildWeakSet('mcq', 20);
    if (!weakSet || weakSet.length === 0) {
      alert('No weak cards right now — you have no Box-1 questions due.\n\nEither all your wrong answers were promoted, or none answered yet.');
      return;
    }
    if (typeof quizApp.startSmartReview === 'function') {
      quizApp.startSmartReview(weakSet, { mode: 'weak' });
    } else {
      quizApp.openMenu();
    }
  },

  resetSrs: () => {
    if (typeof srs === 'undefined') return;
    if (srs.reset()) dashboard.renderSrsPanel();
  },

  renderOverviewStats: () => {
    const container = document.getElementById('dash-overview-stats');
    if (!container) return;

    const stats = dashboard.getOverviewStats();

    const cards = [
      { icon: 'fa-clipboard-check', label: 'Quizzes Taken', value: stats.totalQuizzes, color: '#bd93f9' },
      { icon: 'fa-question-circle', label: 'Questions Answered', value: stats.totalQuestions, color: 'var(--why-cyan)' },
      { icon: 'fa-bullseye', label: 'Average Accuracy', value: stats.avgAccuracy + '%', color: dashboard.getAccuracyColor(stats.avgAccuracy) },
      { icon: 'fa-trophy', label: 'Best Score', value: stats.bestAccuracy + '%', color: 'var(--atlas-gold)' },
      { icon: 'fa-fire', label: 'Study Streak', value: stats.studyStreak + ' days', color: '#ff7043' },
      { icon: 'fa-check', label: 'Correct Answers', value: stats.totalCorrect, color: '#00ff9d' }
    ];

    container.innerHTML = cards.map(card => `
      <div class="dash-stat-card">
        <div class="dash-stat-icon" style="color: ${card.color};">
          <i class="fas ${card.icon}"></i>
        </div>
        <div class="dash-stat-value" style="color: ${card.color};">${card.value}</div>
        <div class="dash-stat-label">${card.label}</div>
      </div>
    `).join('');
  },

  renderAccuracyChart: () => {
    const container = document.getElementById('dash-accuracy-chart');
    if (!container) return;

    const history = dashboard.getHistory();

    if (history.length === 0) {
      container.innerHTML = `
        <div class="dash-empty">
          <i class="fas fa-chart-line" style="font-size:2rem; margin-bottom:10px; opacity:0.3;"></i>
          <p>Complete quizzes to see your accuracy trend</p>
        </div>
      `;
      return;
    }

    // Destroy previous Chart instance to prevent memory leak on re-render
    if (dashboard._accuracyChart) {
      dashboard._accuracyChart.destroy();
      dashboard._accuracyChart = null;
    }

    const recent = history.slice(-20);
    const labels = recent.map((_, i) => `#${i + 1}`);
    const accuracies = recent.map(h => h.accuracy);
    const bgColors = recent.map(h => dashboard.getAccuracyColor(h.accuracy) + 'cc'); // 80% opacity
    const borderColors = recent.map(h => dashboard.getAccuracyColor(h.accuracy));

    const isPro = document.body.classList.contains('professional-mode');
    const gridColor = isPro ? 'rgba(0,0,0,0.08)' : 'rgba(100,120,160,0.25)';
    const tickColor = isPro ? '#546e7a' : '#8892b0';
    const labelColor = isPro ? '#37474f' : '#ccd6f6';

    // Calculate insights
    const recent5 = recent.slice(-5);
    const recentAvg = recent5.length > 0 ? Math.round(recent5.reduce((sum, h) => sum + h.accuracy, 0) / recent5.length) : 0;
    const bestRecent = recent.length > 0 ? Math.max(...recent.map(h => h.accuracy)) : 0;

    container.innerHTML = `
      <div class="dash-canvas-wrapper">
        <canvas id="dash-accuracy-canvas"></canvas>
      </div>
      <div class="dash-trend-insights">
        <div class="insight-box">
           <div class="insight-label">Recent Avg (Last 5)</div>
           <div class="insight-value" style="color: ${dashboard.getAccuracyColor(recentAvg)}">${recentAvg}%</div>
        </div>
        <div class="insight-box">
           <div class="insight-label">Best Recent Score</div>
           <div class="insight-value" style="color: ${dashboard.getAccuracyColor(bestRecent)}">${bestRecent}%</div>
        </div>
        <div class="insight-box">
           <div class="insight-label">Sessions Tracked</div>
           <div class="insight-value" style="color: var(--why-cyan)">${recent.length}</div>
        </div>
      </div>
    `;
    const ctx = document.getElementById('dash-accuracy-canvas').getContext('2d');

    dashboard._accuracyChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Accuracy %',
            data: accuracies,
            backgroundColor: bgColors,
            borderColor: borderColors,
            borderWidth: 2,
            borderRadius: 6,
            borderSkipped: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 800, easing: 'easeOutQuart' },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: (items) => {
                const h = recent[items[0].dataIndex];
                return `${h.region} — ${h.system}`;
              },
              label: (item) => ` Accuracy: ${item.raw}%`
            },
            backgroundColor: isPro ? 'rgba(255,255,255,0.97)' : 'rgba(10,20,45,0.95)',
            titleColor: isPro ? '#1565c0' : '#00f2ff',
            bodyColor: isPro ? '#263238' : '#ccd6f6',
            borderColor: isPro ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.15)',
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8
          }
        },
        scales: {
          y: {
            min: 0,
            max: 100,
            grid: { color: gridColor },
            ticks: {
              color: tickColor,
              callback: val => val + '%',
              font: { family: 'Inter', size: 11 }
            },
            title: { display: true, text: 'Accuracy (%)', color: labelColor, font: { family: 'Inter', size: 12 } }
          },
          x: {
            grid: { display: false },
            ticks: { color: tickColor, font: { family: 'Inter', size: 11 } },
            title: { display: true, text: 'Quiz Attempt', color: labelColor, font: { family: 'Inter', size: 12 } }
          }
        }
      }
    });
  },

  renderHeatmap: () => {
    const container = document.getElementById('dash-heatmap');
    if (!container) return;

    const strengths = dashboard.getTopicStrengths();
    const history = dashboard.getHistory();

    if (history.length === 0) {
      container.innerHTML = `
        <div class="dash-empty">
          <i class="fas fa-th" style="font-size:2rem; margin-bottom:10px; opacity:0.3;"></i>
          <p>Complete quizzes to see your topic strengths</p>
        </div>
      `;
      return;
    }

    const systems = dashboard.systems;
    const gridColumns = `150px repeat(${systems.length}, minmax(88px, 1fr))`;

    // Build heatmap grid
    let html = '<div class="dash-heatmap-grid">';

    // Header row
    html += '<div class="dash-hm-corner"></div>';
    systems.forEach(sys => {
      html += `<div class="dash-hm-header">${sys.label}</div>`;
    });

    // Data rows
    dashboard.regions.forEach(region => {
      html += `<div class="dash-hm-row-label">${region}</div>`;
      systems.forEach(sys => {
        const key = `${region}|${sys.id}`;
        const data = strengths[key];
        if (data) {
          const hex = dashboard.getAccuracyColor(data.accuracy);
          // Convert hex → rgba with opacity so text remains readable
          const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
          const opacity = Math.max(0.25, data.accuracy / 100);
          const sourceText = data.sources?.length ? ` (${data.sources.join(', ')})` : '';
          html += `
            <div class="dash-hm-cell" data-tip="${region} - ${sys.label}${sourceText}: ${data.accuracy}% (${data.attempts} attempt${data.attempts !== 1 ? 's' : ''})"
                 style="background: rgba(${r},${g},${b},${opacity}); border-color: rgba(${r},${g},${b},0.5);">
              <span>${data.accuracy}%</span>
            </div>
          `;
        } else {
          html += `<div class="dash-hm-cell empty" data-tip="${region} - ${sys.label}: Not attempted">-</div>`;
        }
      });
    });

    html += '</div>';

    // Legend
    html += `
      <div class="dash-hm-legend">
        <span><span class="dash-hm-legend-dot" style="background:#ff6b6b;"></span> &lt;60%</span>
        <span><span class="dash-hm-legend-dot" style="background:#ffd700;"></span> 60-79%</span>
        <span><span class="dash-hm-legend-dot" style="background:#00ff9d;"></span> ≥80%</span>
        <span><span class="dash-hm-legend-dot" style="background:var(--border);"></span> Not attempted</span>
      </div>
    `;

    container.innerHTML = html;
    const grid = container.querySelector('.dash-heatmap-grid');
    if (grid) grid.style.gridTemplateColumns = gridColumns;
  },

  renderHistory: () => {
    const container = document.getElementById('dash-history');
    if (!container) return;

    const history = dashboard.getHistory();

    if (history.length === 0) {
      container.innerHTML = `
        <div class="dash-empty">
          <i class="fas fa-history" style="font-size:2rem; margin-bottom:10px; opacity:0.3;"></i>
          <p>Your quiz sessions will appear here</p>
        </div>
      `;
      return;
    }

    const recent = history.slice().reverse().slice(0, 25);

    container.innerHTML = `
      <div class="dash-history-table">
        <div class="dash-ht-header">
          <div class="dash-ht-col">#</div>
          <div class="dash-ht-col wide">Region</div>
          <div class="dash-ht-col">System</div>
          <div class="dash-ht-col">Mode</div>
          <div class="dash-ht-col">Score</div>
          <div class="dash-ht-col">Accuracy</div>
          <div class="dash-ht-col">Date</div>
        </div>
        ${recent.map((h, i) => {
      const color = dashboard.getAccuracyColor(h.accuracy);
      return `
            <div class="dash-ht-row" style="animation-delay: ${i * 0.03}s;">
              <div class="dash-ht-col">${history.length - i}</div>
              <div class="dash-ht-col wide">${h.region}</div>
              <div class="dash-ht-col">${h.system}</div>
              <div class="dash-ht-col"><span class="dash-mode-tag">${h.mode.toUpperCase()}</span></div>
              <div class="dash-ht-col">${h.score}/${h.total}</div>
              <div class="dash-ht-col" style="color: ${color}; font-weight: 700;">${h.accuracy}%</div>
              <div class="dash-ht-col">${h.date}</div>
            </div>
          `;
    }).join('')}
      </div>
    `;
  },

  // ==================== UTILITIES ====================

  getAccuracyColor: (accuracy) => {
    if (accuracy >= 80) return '#00ff9d';
    if (accuracy >= 60) return '#ffd700';
    return '#ff6b6b';
  },

  getSystemIdsForEntry: (region, system) => {
    if (!region || region === 'Combined') return [];
    if (!system || system === 'Unknown') return [];
    if (system === 'Combined') return ['Combined'];

    const exactMatches = dashboard.systems
      .filter(sys => {
        if (sys.regions?.includes(region)) return true;
        return sys.aliases?.includes(system);
      })
      .map(sys => sys.id);

    if (exactMatches.length > 0) return [...new Set(exactMatches)];

    const normalized = String(system).toLowerCase();
    return dashboard.systems
      .filter(sys => {
        if (sys.regions?.includes(region)) return true;
        if (normalized.includes(sys.id.toLowerCase())) return true;
        return sys.aliases?.some(alias => normalized.includes(alias.toLowerCase()));
      })
      .map(sys => sys.id);
  },

  // ==================== VCI SYLLABUS TRACKER & EXAM PLANNER ====================
  _expandedRegions: {},

  toggleRegionDrawer: (region) => {
    dashboard._expandedRegions[region] = !dashboard._expandedRegions[region];
    dashboard.renderPlanner();
  },

  setExamDate: (dateVal) => {
    if (dateVal) {
      localStorage.setItem('ivri-exam-date', dateVal);
    } else {
      localStorage.removeItem('ivri-exam-date');
    }
    dashboard.renderPlanner();
  },

  // Find due review count across SRS and Flashcards
  getDueReviewCount: () => {
    let count = 0;
    if (typeof srs !== 'undefined') {
      count += srs.getStats().dueNow;
    }
    if (typeof app !== 'undefined' && typeof app._loadFlashcards === 'function') {
      const cards = app._loadFlashcards();
      count += cards.filter(c => c.nextReview <= Date.now()).length;
    }
    return count;
  },

  // Launcher session generates study path
  launchStudySession: () => {
    const recs = dashboard.getStudyRecommendations();
    if (recs.readRecs.length > 0) {
      const rec = recs.readRecs[0];
      if (typeof app !== 'undefined' && typeof app.openBookmark === 'function') {
        app.openBookmark(rec.region, rec.system, rec.index);
        showToast(`Opened recommended topic: ${rec.title}`, 'info');
      }
    } else if (recs.reviewCount > 0) {
      if (typeof app !== 'undefined' && typeof app.startFlashcardSession === 'function') {
        app.openLibrary('flashcards');
        app.startFlashcardSession();
      } else {
        dashboard.startSmartReview();
      }
    } else {
      const weakest = recs.weakestTopic;
      if (weakest && typeof quizApp !== 'undefined' && typeof quizApp.start === 'function') {
        quizApp.selectedRegion = weakest.region;
        quizApp.selectedSystem = weakest.system;
        quizApp.start('mcq');
        showToast(`Started MCQ on weakest area: ${weakest.region} (${weakest.system})`, 'info');
      } else {
        showToast('You are completely caught up! Take a free quiz.', 'success');
        if (typeof quizApp !== 'undefined') quizApp.openMenu();
      }
    }
  },

  getStudyRecommendations: () => {
    const readRecs = [];
    const totalDueReviews = dashboard.getDueReviewCount();

    if (typeof atlasData !== 'undefined' && typeof app !== 'undefined') {
      const readList = app._loadRead() || [];
      for (let r of dashboard.regions) {
        if (readRecs.length >= 2) break;
        if (!atlasData[r]) continue;
        for (let s of Object.keys(atlasData[r])) {
          if (readRecs.length >= 2) break;
          const structures = atlasData[r][s];
          for (let i = 0; i < structures.length; i++) {
            const id = app.bookmarkId(r, s, i);
            if (!readList.includes(id)) {
              readRecs.push({
                title: structures[i].title,
                region: r,
                system: s,
                index: i
              });
              if (readRecs.length >= 2) break;
            }
          }
        }
      }
    }

    const strengths = dashboard.getTopicStrengths();
    let weakestTopic = null;
    let lowestAcc = 101;
    Object.keys(strengths).forEach(k => {
      const entry = strengths[k];
      if (entry.totalQuestions > 0 && entry.accuracy < lowestAcc) {
        lowestAcc = entry.accuracy;
        weakestTopic = { region: entry.region, system: entry.sources?.[0] || 'Combined', accuracy: entry.accuracy };
      }
    });

    if (!weakestTopic) {
      weakestTopic = { region: 'Forelimb', system: 'Osteology', accuracy: 0 };
    }

    return {
      readRecs,
      reviewCount: totalDueReviews,
      weakestTopic
    };
  },

  renderPlanner: () => {
    const container = document.getElementById('dash-planner-content');
    if (!container) return;

    const savedDate = localStorage.getItem('ivri-exam-date') || '';
    let daysLeftText = '--';
    let paceClass = 'hm-empty';
    let paceLabel = 'UNKNOWN';
    let paceMessage = 'Set your upcoming exam date to begin visual pace tracking.';
    let daysLeft = null;
    let needleRotation = -90; // Default resting rotation

    let totalTopics = 0;
    let readTopics = 0;
    if (typeof atlasData !== 'undefined' && typeof app !== 'undefined') {
      dashboard.regions.forEach(r => {
        const stats = app.getRegionReadStats(r);
        totalTopics += stats.total;
        readTopics += stats.read;
      });
    }
    const overallProgress = totalTopics ? Math.round((readTopics / totalTopics) * 100) : 0;

    // Load streak / activity statistics
    let activeDays = 0;
    try {
      const activityState = JSON.parse(localStorage.getItem('ivri-activity') || '{}');
      activeDays = Object.keys(activityState).length;
    } catch(e) {}
    
    // Treat activeDays as at least 1 if topics have been read to avoid divide by zero
    const effectiveActiveDays = Math.max(1, activeDays);
    const currentVelocity = (readTopics / effectiveActiveDays).toFixed(1);
    
    let requiredVelocity = '0';
    let projectedFinishText = 'Establish velocity';
    let projectedColor = 'var(--text-mute)';
    let deviationText = '';
    let needleStatus = 'unknown'; // glow filter state: unknown, behind, ontrack, ahead

    if (overallProgress === 100) {
      daysLeftText = savedDate ? String(Math.max(0, Math.ceil((new Date(savedDate).getTime() - new Date().setHours(0,0,0,0)) / (1000 * 60 * 60 * 24)))) : '--';
      paceLabel = 'COMPLETED';
      paceClass = 'correct-box';
      paceMessage = 'Congratulations! You have completed 100% of the syllabus. You are ready for your exam!';
      needleRotation = 75;
      needleStatus = 'ahead';
      requiredVelocity = '0.0';
      projectedFinishText = 'Completed!';
      projectedColor = '#1dd1a1'; // Green
    } else if (savedDate) {
      const examTime = new Date(savedDate).getTime();
      const nowTime = new Date().setHours(0,0,0,0);
      daysLeft = Math.ceil((examTime - nowTime) / (1000 * 60 * 60 * 24));
      
      if (daysLeft < 0) {
        daysLeftText = '0';
        paceLabel = 'EXAM PASSED';
        paceClass = 'wrong-box';
        paceMessage = 'Your set exam date has passed. Great job finishing the semester!';
        needleRotation = -75;
        needleStatus = 'behind';
        requiredVelocity = '0.0';
      } else if (daysLeft === 0) {
        daysLeftText = '0';
        paceLabel = 'CRITICAL LAG';
        paceClass = 'wrong-box';
        paceMessage = `Exam is TODAY! You have completed ${overallProgress}% of the syllabus, leaving ${totalTopics - readTopics} topics unfinished.`;
        needleRotation = -75;
        needleStatus = 'behind';
        requiredVelocity = String(totalTopics - readTopics);
        deviationText = `-${100 - overallProgress}%`;
      } else {
        daysLeftText = String(daysLeft);
        // Dynamic target completion based on activeDays and remaining days
        const totalDuration = effectiveActiveDays + daysLeft;
        const targetCompletion = Math.min(100, Math.round((effectiveActiveDays / totalDuration) * 100));
        const diff = overallProgress - targetCompletion;
        
        // Speedometer needle rotation: cap between -75deg and +75deg
        needleRotation = Math.max(-75, Math.min(75, diff * 4));
        
        if (diff > 0) {
          deviationText = `+${diff}%`;
        } else if (diff < 0) {
          deviationText = `${diff}%`;
        } else {
          deviationText = '0%';
        }

        if (overallProgress >= targetCompletion + 5) {
          paceLabel = 'AHEAD OF PACE';
          paceClass = 'correct-box';
          paceMessage = `Excellent! You are at ${overallProgress}% completion, which is ahead of your recommended target of ${targetCompletion}% (Day ${effectiveActiveDays} of ${totalDuration} plan).`;
          needleStatus = 'ahead';
        } else if (overallProgress < targetCompletion - 5) {
          paceLabel = 'BEHIND PACE';
          paceClass = 'wrong-box';
          paceMessage = `Warning: You are at ${overallProgress}% completion. To be ready on time, we recommend hitting ${targetCompletion}% (Day ${effectiveActiveDays} of ${totalDuration} plan).`;
          needleStatus = 'behind';
        } else {
          paceLabel = 'ON TRACK';
          paceClass = 'accuracy-box';
          paceMessage = `Great pace! You are right on target to finish the remaining modules before your exam (target completion is ${targetCompletion}%).`;
          needleStatus = 'ontrack';
        }

        requiredVelocity = ((totalTopics - readTopics) / daysLeft).toFixed(1);
      }
    } else {
      needleRotation = -90;
      needleStatus = 'unknown';
    }

    // Projected finish date - works even without exam date!
    if (overallProgress < 100 && readTopics > 0) {
      const velocity = readTopics / effectiveActiveDays;
      const remaining = totalTopics - readTopics;
      const estDays = remaining / velocity;
      const estTime = Date.now() + estDays * 24 * 60 * 60 * 1000;
      const estDate = new Date(estTime);
      projectedFinishText = estDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      
      if (savedDate) {
        const examTime = new Date(savedDate).getTime();
        if (estTime <= examTime) {
          projectedColor = '#1dd1a1'; // Before exam
        } else {
          projectedColor = '#ff6b6b'; // After exam
        }
      } else {
        projectedColor = 'var(--why-cyan)'; // Informative
      }
    }

    const dashOffset = 126 * (90 - needleRotation) / 180;
    
    let needleColor = '#a0aec0'; // Gray (Unknown)
    if (needleStatus === 'behind') needleColor = '#ff6b6b'; // Red
    else if (needleStatus === 'ontrack') needleColor = '#ffd700'; // Yellow
    else if (needleStatus === 'ahead') needleColor = '#1dd1a1'; // Green

    const recs = dashboard.getStudyRecommendations();

    const roadmapHtml = dashboard.regions.map((region, idx) => {
      const isExpanded = !!dashboard._expandedRegions[region];
      let readStats = { read: 0, total: 0, percent: 0 };
      if (typeof app !== 'undefined') {
        readStats = app.getRegionReadStats(region);
      }

      const strengths = dashboard.getTopicStrengths();
      let totalQuestions = 0;
      let totalScore = 0;
      Object.keys(strengths).forEach(k => {
        if (k.startsWith(region + '|')) {
          totalQuestions += strengths[k].totalQuestions;
          totalScore += strengths[k].totalScore;
        }
      });
      const quizAccuracy = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : null;
      const accuracyText = quizAccuracy !== null ? `${quizAccuracy}%` : 'Not attempted';
      const accuracyColor = quizAccuracy !== null ? dashboard.getAccuracyColor(quizAccuracy) : 'var(--text-mute)';

      const radius = 18;
      const circumference = 2 * Math.PI * radius;
      const strokeDashoffset = circumference - (readStats.percent / 100) * circumference;

      // Priority status badge calculation
      let priorityClass = 'priority-high';
      let priorityText = 'RECOMMENDED';
      if (quizAccuracy !== null && quizAccuracy < 65 && readStats.percent < 60) {
        priorityClass = 'priority-critical';
        priorityText = 'CRITICAL FOCUS';
      } else if (readStats.percent < 45) {
        priorityClass = 'priority-high';
        priorityText = 'HIGH FOCUS';
      } else if (readStats.percent >= 90 && (quizAccuracy === null || quizAccuracy >= 80)) {
        priorityClass = 'priority-ontrack';
        priorityText = 'MASTERED';
      }

      let drawerHtml = '';
      if (isExpanded && typeof atlasData !== 'undefined' && atlasData[region]) {
        const systems = Object.keys(atlasData[region]);
        drawerHtml = `
          <div class="syllabus-card-drawer" style="animation: slideIn 0.3s ease;">
            ` + systems.map(sys => {
              const sysStats = app.getReadStats(region, sys);
              return `
                <div class="syllabus-drawer-item" onclick="app.openBookmark('${region.replace(/'/g, "\\'")}', '${sys.replace(/'/g, "\\'")}', 0)">
                  <div class="syllabus-drawer-item-title">
                    <span>${sys.toUpperCase()}</span>
                    <i class="fas fa-arrow-right"></i>
                  </div>
                  <div style="font-size: 0.72rem; color: var(--text-mute); display:flex; justify-content:space-between;">
                    <span>Read ${sysStats.read}/${sysStats.total}</span>
                    <span>${sysStats.percent}%</span>
                  </div>
                  <div class="syllabus-drawer-item-progress">
                    <div class="syllabus-drawer-item-fill" style="width: ${sysStats.percent}%;"></div>
                  </div>
                </div>
              `;
            }).join('') + `
          </div>
        `;
      }

      return `
        <div class="syllabus-card ${isExpanded ? 'is-expanded' : ''}">
          <div class="syllabus-card-header" onclick="dashboard.toggleRegionDrawer('${region}')">
            <div class="syllabus-card-left">
              <div class="syllabus-card-title" style="display:flex; align-items:center; gap:10px;">
                <span>UNIT ${idx + 1}: ${region.toUpperCase()}</span>
                <span class="priority-badge ${priorityClass}">${priorityText}</span>
              </div>
              <div class="syllabus-card-meta" style="display:flex; align-items:center; gap:12px; margin-top:4px;">
                <span>Quiz Avg: <span style="color: ${accuracyColor}; font-weight:700;">${accuracyText}</span></span>
                <button class="srs-btn srs-btn-ghost" style="padding: 2px 8px; font-size: 0.65rem; border-radius: 4px; display:inline-flex; align-items:center; gap:4px; height:18px; border-style:dashed;" onclick="event.stopPropagation(); dashboard.testUnit('${region.replace(/'/g, "\\'")}')">
                  <i class="fas fa-vial" style="font-size:0.6rem;"></i> Test Unit
                </button>
              </div>
            </div>
            <div class="syllabus-card-progress">
              <div style="font-family: var(--font-code); font-size: 0.8rem; text-align:right;">
                <span style="color:#ffffff; font-weight:700;">${readStats.percent}%</span><br>
                <span style="color:var(--text-mute); font-size:0.68rem;">${readStats.read}/${readStats.total} Read</span>
              </div>
              <div class="syllabus-card-ring">
                <svg width="48" height="48" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="${radius}" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="3" />
                  <circle cx="24" cy="24" r="${radius}" fill="none" stroke="var(--why-cyan)" stroke-width="3"
                          stroke-dasharray="${circumference}"
                          stroke-dashoffset="${strokeDashoffset}"
                          transform="rotate(-90 24 24)"
                          stroke-linecap="round" />
                </svg>
              </div>
              <i class="fas fa-chevron-down syllabus-card-chevron"></i>
            </div>
          </div>
          ${drawerHtml}
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="planner-pacing-grid" style="animation: slideIn 0.3s ease;">
        
        <!-- COUNTDOWN & PACING SPEEDOMETER WIDGET -->
        <div class="planner-widget">
          <div>
            <div class="planner-widget-title">
              <i class="fas fa-gauge-high"></i> Pacing Telemetry &amp; Velocity
            </div>
            
            <div class="speedometer-container">
              <svg class="speedometer-svg" width="130" height="75" viewBox="0 0 100 55">
                <!-- Outer Ticks (spaced 30 degrees from 180 to 0) -->
                <line x1="9" y1="50" x2="5" y2="50" class="speedometer-tick" stroke-width="1" />
                <line x1="14.5" y1="29.5" x2="11.0" y2="27.5" class="speedometer-tick" stroke-width="1" />
                <line x1="29.5" y1="14.5" x2="27.5" y2="11.0" class="speedometer-tick" stroke-width="1" />
                <line x1="50" y1="9" x2="50" y2="5" class="speedometer-tick" stroke-width="1" />
                <line x1="70.5" y1="14.5" x2="72.5" y2="11.0" class="speedometer-tick" stroke-width="1" />
                <line x1="85.5" y1="29.5" x2="89.0" y2="27.5" class="speedometer-tick" stroke-width="1" />
                <line x1="91" y1="50" x2="95" y2="50" class="speedometer-tick" stroke-width="1" />

                <!-- Background Arc -->
                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="8" stroke-linecap="round" />
                <!-- Colored Pacing Arc -->
                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="url(#speedometer-gradient)" stroke-width="8" stroke-linecap="round" stroke-dasharray="126" stroke-dashoffset="${dashOffset}" style="transition: stroke-dashoffset 1s ease;" />
                
                <!-- Center Pin Ring -->
                <circle cx="50" cy="50" r="6" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
                <!-- Gauge Needle -->
                <line x1="50" y1="50" x2="50" y2="15" stroke="${needleColor}" stroke-width="3.5" stroke-linecap="round" transform="rotate(${needleRotation} 50 50)" filter="url(#needle-glow-${needleStatus})" style="transition: transform 1.2s cubic-bezier(0.18, 0.89, 0.32, 1.28), stroke 0.5s;" />
                <!-- Center Pin Core Hub -->
                <circle cx="50" cy="50" r="4.5" fill="${needleColor}" style="transition: fill 0.5s;" />
                <circle cx="50" cy="50" r="1.5" fill="#ffffff" />
                
                <!-- Gradient and Glow definitions -->
                <defs>
                  <linearGradient id="speedometer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#ff6b6b" />    <!-- Behind (Red) -->
                    <stop offset="50%" stop-color="#ffd700" />   <!-- On Track (Yellow) -->
                    <stop offset="100%" stop-color="#1dd1a1" />  <!-- Ahead (Green) -->
                  </linearGradient>
                  
                  <filter id="needle-glow-behind" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#ff6b6b" flood-opacity="0.8"/>
                  </filter>
                  <filter id="needle-glow-ontrack" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#ffd700" flood-opacity="0.8"/>
                  </filter>
                  <filter id="needle-glow-ahead" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="0" stdDeviation="1.5" flood-color="#1dd1a1" flood-opacity="0.8"/>
                  </filter>
                  <filter id="needle-glow-unknown" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="0" stdDeviation="1" flood-color="#a0aec0" flood-opacity="0.4"/>
                  </filter>
                </defs>
              </svg>
              <div class="speedometer-value" style="color:${needleColor}">${paceLabel}</div>
              ${deviationText ? `<div class="speedometer-deviation ${paceClass}">${deviationText} vs Target</div>` : ''}
            </div>
          </div>

          <div style="margin: 10px 0; padding: 12px; border-radius:10px; background:rgba(0,0,0,0.15);" class="${paceClass}">
            <div style="font-size:0.76rem; line-height:1.4;">${paceMessage}</div>
          </div>

          <div style="margin: 5px 0 10px 0;">
            <div class="telemetry-row">
              <span>Exam Countdown</span>
              <span class="val">${daysLeftText} Days</span>
            </div>
            <div class="telemetry-row">
              <span>Active Study Days</span>
              <span class="val">${activeDays} days</span>
            </div>
            <div class="telemetry-row">
              <span>Your Reading Velocity</span>
              <span class="val">${currentVelocity} topics/day</span>
            </div>
            <div class="telemetry-row">
              <span>Required Velocity</span>
              <span class="val">${requiredVelocity} topics/day</span>
            </div>
            <div class="telemetry-row" style="border-bottom:none;">
              <span>Projected Syllabus Finish</span>
              <span class="val" style="color:${projectedColor}">${projectedFinishText}</span>
            </div>
          </div>

          <div class="planner-date-picker-row">
            <span style="font-size: 0.68rem; color:var(--text-mute); font-family:var(--font-code); text-transform:uppercase; letter-spacing:0.5px;">Target Date:</span>
            <div style="display:flex; gap:6px; flex:1; align-items:center;">
              <input type="date" class="planner-date-input" value="${savedDate}" onchange="dashboard.setExamDate(this.value)" style="flex:1;">
              ${savedDate ? `
                <button class="srs-btn srs-btn-ghost clear-date-btn" style="padding: 0 10px; font-size: 0.7rem; border-radius: 8px; height: 32px; min-width:32px; display:flex; align-items:center; justify-content:center;" onclick="dashboard.setExamDate('')" title="Clear target date">
                  <i class="fas fa-times"></i>
                </button>
              ` : ''}
            </div>
          </div>
        </div>
 
        <!-- DYNAMIC STUDY SESSION LAUNCHER -->
        <div class="session-launcher">
          <div class="session-launcher-glow"></div>
          <div>
            <div class="planner-widget-title" style="color: var(--why-cyan);">
              <i class="fas fa-magic-wand-sparkles"></i> Recommended Study Path
            </div>
            <div style="font-size: 0.8rem; color: var(--text-mute); margin-bottom:15px; line-height:1.4;">
              Our algorithms analyze your reading history, memory retention logs, and quiz performance to plan today's review session.
            </div>
          </div>

          <div class="launcher-recs">
            ` + recs.readRecs.map(r => `
              <div class="launcher-rec-item" onclick="app.openBookmark('${r.region.replace(/'/g, "\\'")}', '${r.system.replace(/'/g, "\\'")}', ${r.index})">
                <i class="far fa-circle" style="color:var(--atlas-gold);"></i>
                <span>Read: <b>${r.title}</b> (${r.region} ${r.system.split(' ')[0]})</span>
                <span class="badge">READ</span>
              </div>
            `).join('') + `

            ${recs.reviewCount > 0 ? `
              <div class="launcher-rec-item" onclick="app.openLibrary('flashcards')">
                <i class="fas fa-circle-play" style="color:#ff6b6b;"></i>
                <span>Review: <b>${recs.reviewCount} flashcards/srs</b> due now</span>
                <span class="badge" style="border-color:#ff6b6b; color:#ff6b6b;">REVIEW</span>
              </div>
            ` : ''}

            <div class="launcher-rec-item" onclick="dashboard.testUnit('${recs.weakestTopic.region}')">
              <i class="fas fa-fire" style="color:#ffd700;"></i>
              <span>Test: <b>${recs.weakestTopic.region} (${recs.weakestTopic.system})</b></span>
              <span class="badge" style="border-color:#ffd700; color:#ffd700;">DRILL</span>
            </div>
          </div>

          <button class="launcher-btn-glow" onclick="dashboard.openStudySessionModal()">
            <i class="fas fa-play-circle"></i> Launch Daily Session
          </button>
        </div>

      </div>

      <div style="background: rgba(255, 255, 255, 0.03); border:1px solid var(--border); border-radius: 16px; padding: 20px; margin-top:20px;">
        <div class="planner-widget-title" style="margin-bottom:20px; border-bottom:1px solid var(--border); padding-bottom:10px;">
          <i class="fas fa-sitemap"></i> VCI UNIT ROADMAP &amp; SYLLABUS PROGRESSION
        </div>
        <div class="syllabus-roadmap">
          ${roadmapHtml}
        </div>
      </div>
    `;
  },

  testUnit: (region) => {
    if (typeof quizApp === 'undefined') {
      showToast('Quiz engine not available.', 'error');
      return;
    }
    const overlay = document.getElementById('quiz-overlay');
    const modal = document.querySelector('.quiz-modal');
    if (overlay) overlay.style.display = 'flex';
    if (modal) modal.classList.remove('review-mode');
    document.body.classList.add('body-modal-open');
    quizApp.selectedRegion = region;
    quizApp.selectedSystem = 'Combined';
    quizApp.start('mcq');
    showToast(`Started MCQ quiz for ${region}`, 'success', 'fa-check');
  },

  // ========== LIGHTWEIGHT SELF-CONTAINED CANVAS CONFETTI ENGINE ==========
  triggerConfetti: () => {
    if (document.getElementById('confetti-canvas')) {
      document.getElementById('confetti-canvas').remove();
    }
    const canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '99999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#00f2ff', '#bd93f9', '#ffd700', '#ff6b6b', '#1dd1a1'];
    const particles = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * canvas.height,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 5,
        tiltAngleIncremental: Math.random() * 0.07 + 0.02,
        tiltAngle: 0
      });
    }

    let animationFrameId;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let remaining = false;

      particles.forEach((p) => {
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.x += Math.sin(p.tiltAngle);
        p.tilt = Math.sin(p.tiltAngle - p.r / 2) * 15;

        if (p.y < canvas.height) {
          remaining = true;
        }

        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.stroke();
      });

      if (remaining) {
        animationFrameId = requestAnimationFrame(draw);
      } else {
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      }
    }

    draw();
    setTimeout(() => {
      if (document.getElementById('confetti-canvas')) {
        cancelAnimationFrame(animationFrameId);
        const canvasEl = document.getElementById('confetti-canvas');
        if (canvasEl && canvasEl.parentNode) canvasEl.parentNode.removeChild(canvasEl);
      }
    }, 6000);
  },

  // ========== STUDY SESSION WIZARD STATE & IMPLEMENTATION ==========
  _sessionState: {
    overlay: null,
    step: 1,
    recs: null,
    readIndex: 0,
    reviewQueue: [],
    reviewIndex: 0,
    quizQueue: [],
    quizIndex: 0,
    quizScore: 0,
    answersRated: 0,
    topicsMarked: 0
  },

  openStudySessionModal: () => {
    const recs = dashboard.getStudyRecommendations();
    
    // Step 2: Custom flashcards due
    const customCards = (typeof app !== 'undefined' && typeof app._loadFlashcards === 'function') ? app._loadFlashcards() : [];
    const dueCustom = customCards.filter(c => c.nextReview <= Date.now()).slice(0, 3);
    
    // Step 2: Spaced Repetition quiz items due
    const dueSrs = (typeof srs !== 'undefined') ? srs.buildReviewSet('mcq', 2) : [];
    
    const reviewQueue = [
      ...dueCustom.map(c => ({ type: 'custom', data: c })),
      ...dueSrs.map(c => ({ type: 'srs', data: c }))
    ];
    
    // Step 3: Weakness drill MCQs (up to 3)
    const weakPool = (typeof quizBank !== 'undefined' && quizBank[recs.weakestTopic.region] && quizBank[recs.weakestTopic.region][recs.weakestTopic.system])
      ? quizBank[recs.weakestTopic.region][recs.weakestTopic.system].mcq || []
      : [];
    let quizQueue = [...weakPool].sort(() => Math.random() - 0.5).slice(0, 3);
    
    if (quizQueue.length === 0 && typeof quizBank !== 'undefined') {
      const reg = recs.weakestTopic.region;
      if (quizBank[reg]) {
        const sysList = Object.keys(quizBank[reg]);
        for (let sys of sysList) {
          const pool = quizBank[reg][sys].mcq || [];
          if (pool.length > 0) {
            quizQueue = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
            break;
          }
        }
      }
    }
    
    dashboard._sessionState = {
      step: 1,
      recs: recs,
      readIndex: 0,
      reviewQueue: reviewQueue,
      reviewIndex: 0,
      quizQueue: quizQueue,
      quizIndex: 0,
      quizScore: 0,
      answersRated: 0,
      topicsMarked: 0
    };
    
    if (document.getElementById('study-session-modal')) {
      document.getElementById('study-session-modal').remove();
    }
    
    const overlay = document.createElement('div');
    overlay.id = 'study-session-modal';
    overlay.className = 'session-modal-overlay';
    
    overlay.innerHTML = `
      <div class="session-modal-container">
        <div class="session-modal-header">
          <div class="session-modal-title">
            <i class="fas fa-magic-wand-sparkles"></i>
            <span>VCI SMART STUDY SESSION</span>
          </div>
          <button class="session-close-btn" onclick="dashboard.closeStudySessionModal()" title="Exit session">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="session-progress-tracker">
          <div class="session-progress-step active" id="sess-step-1">
            <span class="step-num">1</span>
            <span>Concept Mastery</span>
          </div>
          <div class="session-progress-step" id="sess-step-2">
            <span class="step-num">2</span>
            <span>Active Review</span>
          </div>
          <div class="session-progress-step" id="sess-step-3">
            <span class="step-num">3</span>
            <span>Gap Check</span>
          </div>
        </div>
        
        <div class="session-modal-body" id="session-modal-body-content"></div>
        
        <div class="session-modal-footer">
          <button class="srs-btn srs-btn-ghost" id="session-btn-prev" onclick="dashboard.prevSessionStep()" style="visibility: hidden;">
            <i class="fas fa-arrow-left"></i> Back
          </button>
          <button class="srs-btn srs-btn-primary" id="session-btn-next" onclick="dashboard.nextSessionStep()" disabled>
            Next Step <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(overlay);
    dashboard._sessionState.overlay = overlay;
    dashboard.renderSessionStep();
  },
  
  closeStudySessionModal: () => {
    if (confirm('Are you sure you want to exit the study session? Your accomplishments so far will be preserved.')) {
      const overlay = document.getElementById('study-session-modal');
      if (overlay) overlay.remove();
      dashboard.renderPlanner();
    }
  },
  
  renderSessionStep: () => {
    const state = dashboard._sessionState;
    const body = document.getElementById('session-modal-body-content');
    const nextBtn = document.getElementById('session-btn-next');
    const prevBtn = document.getElementById('session-btn-prev');
    if (!body) return;
    
    document.getElementById('sess-step-1').className = 'session-progress-step' + (state.step === 1 ? ' active' : (state.step > 1 ? ' completed' : ''));
    document.getElementById('sess-step-2').className = 'session-progress-step' + (state.step === 2 ? ' active' : (state.step > 2 ? ' completed' : ''));
    document.getElementById('sess-step-3').className = 'session-progress-step' + (state.step === 3 ? ' active' : (state.step > 3 ? ' completed' : ''));
    
    prevBtn.style.visibility = (state.step > 1) ? 'visible' : 'hidden';
    
    if (state.step === 1) {
      const unreadList = state.recs.readRecs;
      if (unreadList.length === 0 || state.readIndex >= unreadList.length) {
        body.innerHTML = `
          <div style="text-align:center; margin:auto; max-width:500px; padding:30px;">
            <i class="fas fa-check-circle" style="font-size:4rem; color:#1dd1a1; margin-bottom:20px;"></i>
            <h3 style="color:#fff; margin-bottom:10px;">CONCEPT READING COMPLETED</h3>
            <p style="color:var(--text-mute); font-size:0.88rem; line-height:1.5;">You have completed all active reading recommendations for today! Proceed to the next step to review your retention deck.</p>
          </div>
        `;
        nextBtn.disabled = false;
        nextBtn.innerHTML = `Next Step <i class="fas fa-arrow-right"></i>`;
      } else {
        const rec = unreadList[state.readIndex];
        const topic = (typeof atlasData !== 'undefined' && atlasData[rec.region] && atlasData[rec.region][rec.system]) 
          ? atlasData[rec.region][rec.system][rec.index] 
          : null;
        
        if (!topic) {
          body.innerHTML = `<div style="color:#fff; text-align:center; padding:50px;">Error loading topic details. Click Next Step to proceed.</div>`;
          nextBtn.disabled = false;
          nextBtn.innerHTML = `Next Step <i class="fas fa-arrow-right"></i>`;
        } else {
          const comparativeHtml = topic.comparative ? `
            <div style="margin-top:15px; border-top:1px dashed rgba(255,255,255,0.08); padding-top:12px;">
              <h5 style="color:var(--atlas-gold); margin-bottom:6px; font-size:0.8rem; text-transform:uppercase; margin-top:0;">Comparative Anatomy Notes:</h5>
              <ul style="padding-left:16px; margin:0; font-size:0.78rem; color:var(--text-mute); line-height:1.4;">
                ${topic.comparative.map(c => `<li><b>${c.species}:</b> ${c.note}</li>`).join('')}
              </ul>
            </div>
          ` : '';
          
          body.innerHTML = `
            <div class="session-split-pane">
              <div class="session-pane-left">
                <h4 style="font-family:var(--font-code); color:var(--text-mute); font-size:0.8rem; margin-bottom:4px; letter-spacing:0.5px;">UNIT ${dashboard.regions.indexOf(rec.region) + 1}: ${rec.region.toUpperCase()}</h4>
                <h3 style="color:var(--why-cyan); margin:0 0 10px 0; font-size:1.35rem; font-weight:800;">${rec.system} — ${topic.title}</h3>
                <div style="font-size:0.85rem; color:#d1d7e0; line-height:1.5;">
                  ${topic.eliteDesc || topic.desc}
                </div>
                ${topic.img ? `<img src="${topic.img}" style="width:100%; border-radius:12px; border:1px solid var(--border); margin-top:15px;" alt="${topic.imgAlt || ''}">` : ''}
                ${comparativeHtml}
              </div>
              
              <div class="session-pane-right">
                <div>
                  <h3 style="color:var(--atlas-gold); font-size:1.05rem; margin-top:0; display:flex; align-items:center; gap:8px; font-family:var(--font-code);">
                    <i class="fas fa-brain"></i> Active Recall Summary
                  </h3>
                  <p style="font-size:0.75rem; color:var(--text-mute); line-height:1.4; margin-bottom:12px;">
                    Summarize the key bovine landmarks, structures, and differences for this element in your own words.
                  </p>
                  <label for="session-recall-input" style="display:none;">Recall Summary</label>
                  <textarea class="recall-textarea" id="session-recall-input" placeholder="Type your active recall notes here... (e.g. Scapula has S-shaped spine in ox, ends in acromion...)"></textarea>
                </div>
                <button class="srs-btn srs-btn-primary" style="justify-content:center; width:100%; padding:12px;" onclick="dashboard.completeConceptRecall(${state.readIndex})">
                  <i class="fas fa-check-circle"></i> Save Recall &amp; Mark Read
                </button>
              </div>
            </div>
          `;
          nextBtn.disabled = true; 
          nextBtn.innerHTML = `Log recall to continue`;
        }
      }
    } else if (state.step === 2) {
      const queue = state.reviewQueue;
      if (queue.length === 0 || state.reviewIndex >= queue.length) {
        body.innerHTML = `
          <div style="text-align:center; margin:auto; max-width:500px; padding:30px;">
            <i class="fas fa-check-circle" style="font-size:4rem; color:#1dd1a1; margin-bottom:20px;"></i>
            <h3 style="color:#fff; margin-bottom:10px;">RETENTION DRILLS COMPLETED</h3>
            <p style="color:var(--text-mute); font-size:0.88rem; line-height:1.5;">Your review deck is completely clear for the day! You have reviewed all scheduled items. Click Next to check your concept gaps.</p>
          </div>
        `;
        nextBtn.disabled = false;
        nextBtn.innerHTML = `Next Step <i class="fas fa-arrow-right"></i>`;
      } else {
        const item = queue[state.reviewIndex];
        nextBtn.disabled = true;
        nextBtn.innerHTML = `Review card to continue`;
        
        if (item.type === 'custom') {
          body.innerHTML = `
            <div class="session-card-deck">
              <div style="font-family:var(--font-code); font-size:0.75rem; color:var(--atlas-gold); text-transform:uppercase; letter-spacing:0.5px;">
                Card ${state.reviewIndex + 1} of ${queue.length} — Custom Flashcard (Box ${item.data.box})
              </div>
              
              <div class="session-flashcard" id="sess-flashcard" onclick="dashboard.flipSessionFlashcard()">
                <div class="session-flashcard-inner">
                  <div class="session-card-front">
                    <span class="priority-badge" style="border-color:rgba(189,147,249,0.3); color:#bd93f9; margin-bottom:15px; font-size:0.6rem;">FRONT (QUESTION)</span>
                    <div style="font-size:1.15rem; font-weight:700; line-height:1.4; padding: 0 10px;">${item.data.front}</div>
                    <span style="font-size:0.68rem; color:var(--text-mute); position:absolute; bottom:15px;"><i class="fas fa-sync-alt"></i> Tap card to reveal answer</span>
                  </div>
                  <div class="session-card-back">
                    <span class="priority-badge" style="border-color:rgba(0,242,255,0.3); color:var(--why-cyan); margin-bottom:15px; font-size:0.6rem;">BACK (ANSWER)</span>
                    <div style="font-size:1rem; font-weight:500; line-height:1.4; max-height:130px; overflow-y:auto; width:100%;">${item.data.back}</div>
                    <span style="font-size:0.68rem; color:var(--text-mute); position:absolute; bottom:15px;"><i class="fas fa-sync-alt"></i> Tap card to flip back</span>
                  </div>
                </div>
              </div>
              
              <div style="display:flex; gap:15px; margin-top:5px;">
                <button class="fc-btn" style="background:#ff6b6b; border:none; color:#1a0606; font-weight:700; width:130px; padding:10px; border-radius:8px;" onclick="dashboard.rateSessionFlashcard(false)">
                  <i class="fas fa-times"></i> Forgot it
                </button>
                <button class="fc-btn" style="background:#1dd1a1; border:none; color:#061a14; font-weight:700; width:130px; padding:10px; border-radius:8px;" onclick="dashboard.rateSessionFlashcard(true)">
                  <i class="fas fa-check"></i> Got it
                </button>
              </div>
            </div>
          `;
        } else {
          const q = item.data.q;
          const optionsHtml = q.o.map((o, idx) => `
            <button class="session-quiz-opt" id="sess-opt-${idx}" onclick="dashboard.submitSessionQuizAnswer(${idx})">
              ${o}
            </button>
          `).join('');
          
          body.innerHTML = `
            <div class="session-card-deck">
              <div style="font-family:var(--font-code); font-size:0.75rem; color:var(--why-cyan); text-transform:uppercase; letter-spacing:0.5px;">
                Card ${state.reviewIndex + 1} of ${queue.length} — Active Quiz Review (SRS Box ${item.data.card ? item.data.card.box : 1})
              </div>
              
              <div class="session-quiz-box">
                <div style="font-size:0.72rem; color:var(--text-mute); font-family:var(--font-code); margin-bottom:6px;">
                  ${(item.data.region || 'Review').toUpperCase()} &gt; ${(item.data.system || 'SRS').toUpperCase()}
                </div>
                <div style="font-size:1.05rem; font-weight:700; color:#fff; line-height:1.4; margin-bottom:15px;">
                  ${q.q}
                </div>
                
                <div class="session-quiz-options">
                  ${optionsHtml}
                </div>
                
                <div id="sess-srs-explanation" style="margin-top:15px; padding:12px; background:rgba(0,0,0,0.2); border-left:3px solid var(--why-cyan); border-radius:4px; font-size:0.8rem; display:none; line-height:1.4; color:#d1d7e0;">
                  <b>EXPLANATION:</b> ${q.e}
                </div>
              </div>
            </div>
          `;
        }
      }
    } else if (state.step === 3) {
      const queue = state.quizQueue;
      if (queue.length === 0 || state.quizIndex >= queue.length) {
        dashboard.renderVictoryScreen();
      } else {
        const q = queue[state.quizIndex];
        nextBtn.disabled = true;
        nextBtn.innerHTML = `Answer quiz to continue`;
        
        const optionsHtml = q.o.map((o, idx) => `
          <button class="session-quiz-opt" id="sess-quiz-opt-${idx}" onclick="dashboard.submitSessionQuizAnswer(${idx})">
            ${o}
          </button>
        `).join('');
        
        body.innerHTML = `
          <div class="session-card-deck">
            <div style="font-family:var(--font-code); font-size:0.75rem; color:#ffd700; text-transform:uppercase; letter-spacing:0.5px;">
              Question ${state.quizIndex + 1} of ${queue.length} — Gap Check MCQ
            </div>
            
            <div class="session-quiz-box">
              <div style="font-size:0.72rem; color:var(--text-mute); font-family:var(--font-code); margin-bottom:6px;">
                ${state.recs.weakestTopic.region.toUpperCase()} &gt; ${state.recs.weakestTopic.system.toUpperCase()} (DRILL)
              </div>
              <div style="font-size:1.05rem; font-weight:700; color:#fff; line-height:1.4; margin-bottom:15px;">
                ${q.q}
              </div>
              
              <div class="session-quiz-options">
                ${optionsHtml}
              </div>
              
              <div id="sess-quiz-explanation" style="margin-top:15px; padding:12px; background:rgba(0,0,0,0.2); border-left:3px solid var(--atlas-gold); border-radius:4px; font-size:0.8rem; display:none; line-height:1.4; color:#d1d7e0;">
                <b>EXPLANATION:</b> ${q.e}
              </div>
            </div>
          </div>
        `;
      }
    }
  },
  
  completeConceptRecall: (index) => {
    const state = dashboard._sessionState;
    const input = document.getElementById('session-recall-input')?.value.trim();
    if (!input) {
      alert('Please write down your active recall summary before saving. Active self-explanation yields up to 40% higher retention!');
      return;
    }
    
    const rec = state.recs.readRecs[index];
    const oldRegion = app.state.region;
    const oldSystem = app.state.system;
    app.state.region = rec.region;
    app.state.system = rec.system;
    
    const id = app.bookmarkId(rec.region, rec.system, rec.index);
    const readList = app._loadRead();
    if (!readList.includes(id)) {
      readList.push(id);
      app._saveRead(readList);
      state.topicsMarked++;
    }
    
    app.state.region = oldRegion;
    app.state.system = oldSystem;
    
    // Save recall log
    try {
      const logs = JSON.parse(localStorage.getItem('ivri-recall-logs')) || {};
      logs[id] = { text: input, t: Date.now() };
      localStorage.setItem('ivri-recall-logs', JSON.stringify(logs));
    } catch(e) {}
    
    // Sync UI elements in background
    try {
      app.renderTopicList();
      app.updateReadProgressBadge();
    } catch(e) {}
    
    showToast('Recall logged & topic marked as read!', 'success', 'fa-check');
    state.readIndex++;
    dashboard.renderSessionStep();
  },
  
  flipSessionFlashcard: () => {
    const flashcard = document.getElementById('sess-flashcard');
    if (flashcard) {
      flashcard.classList.toggle('is-flipped');
    }
  },
  
  rateSessionFlashcard: (correct) => {
    const state = dashboard._sessionState;
    const item = state.reviewQueue[state.reviewIndex];
    
    const cards = app._loadFlashcards();
    const card = cards.find(c => c.id === item.data.id);
    if (card) {
      const intervals = { 1: 1, 2: 3, 3: 7, 4: 14, 5: 30 };
      if (correct) {
        if (card.box < 5) card.box++;
        showToast(`Flashcard promoted to Box ${card.box}!`, 'success', 'fa-check');
      } else {
        card.box = 1;
        showToast('Flashcard reset to Box 1.', 'warning', 'fa-times');
      }
      card.nextReview = Date.now() + intervals[card.box] * 24 * 60 * 60 * 1000;
      app._saveFlashcards(cards);
      state.answersRated++;
    }
    
    state.reviewIndex++;
    dashboard.renderSessionStep();
  },
  
  submitSessionQuizAnswer: (optionIdx) => {
    const state = dashboard._sessionState;
    
    if (state.step === 2) {
      const item = state.reviewQueue[state.reviewIndex];
      const q = item.data.q;
      const correct = (optionIdx === q.a);
      
      document.querySelectorAll('.session-quiz-opt').forEach((btn, idx) => {
        btn.classList.add('disabled');
        btn.style.pointerEvents = 'none';
        if (idx === q.a) btn.classList.add('correct');
        else if (idx === optionIdx) btn.classList.add('incorrect');
      });
      
      const exp = document.getElementById('sess-srs-explanation');
      if (exp) exp.style.display = 'block';
      
      srs.recordAnswer(item.data.qid, correct);
      state.answersRated++;
      
      if (correct) {
        showToast('Correct! SRS card promoted.', 'success', 'fa-check');
      } else {
        showToast('Incorrect. Card reset to Box 1.', 'warning', 'fa-times');
      }
      
      setTimeout(() => {
        state.reviewIndex++;
        dashboard.renderSessionStep();
      }, 2000);
      
    } else if (state.step === 3) {
      const q = state.quizQueue[state.quizIndex];
      const correct = (optionIdx === q.a);
      
      document.querySelectorAll('.session-quiz-opt').forEach((btn, idx) => {
        btn.classList.add('disabled');
        btn.style.pointerEvents = 'none';
        if (idx === q.a) btn.classList.add('correct');
        else if (idx === optionIdx) btn.classList.add('incorrect');
      });
      
      const exp = document.getElementById('sess-quiz-explanation');
      if (exp) exp.style.display = 'block';
      
      if (correct) {
        state.quizScore++;
        showToast('Correct!', 'success', 'fa-check');
      } else {
        showToast('Incorrect.', 'error', 'fa-times');
      }
      
      dashboard.saveQuizResult({
        region: state.recs.weakestTopic.region,
        system: state.recs.weakestTopic.system,
        mode: 'mcq',
        score: correct ? 1 : 0,
        total: 1
      });
      
      setTimeout(() => {
        state.quizIndex++;
        dashboard.renderSessionStep();
      }, 2200);
    }
  },
  
  prevSessionStep: () => {
    const state = dashboard._sessionState;
    if (state.step > 1) {
      state.step--;
      dashboard.renderSessionStep();
    }
  },
  
  nextSessionStep: () => {
    const state = dashboard._sessionState;
    const nextBtn = document.getElementById('session-btn-next');
    
    if (state.step < 3) {
      state.step++;
      dashboard.renderSessionStep();
    } else {
      dashboard.finishStudySession();
    }
  },
  
  renderVictoryScreen: () => {
    const state = dashboard._sessionState;
    const body = document.getElementById('session-modal-body-content');
    const nextBtn = document.getElementById('session-btn-next');
    if (!body || !nextBtn) return;
    
    nextBtn.disabled = false;
    nextBtn.innerHTML = `<i class="fas fa-lock"></i> Finish &amp; Log Progress`;
    
    body.innerHTML = `
      <div class="session-victory-screen">
        <i class="fas fa-trophy victory-badge"></i>
        <h2 class="victory-title" style="color:var(--atlas-gold); font-weight:800; font-family:var(--font-code);">STUDY PATH MASTERED</h2>
        <p style="color:var(--text-mute); font-size:0.9rem; max-width:480px; margin-bottom:15px; line-height:1.5;">
          Spectacular work! You have completed all scheduled concept recall sheets, retention reviews, and checked your understanding gaps.
        </p>
        
        <div class="victory-stats">
          <div class="victory-stat-card">
            <div style="font-size:1.8rem; font-weight:800; color:var(--atlas-gold);">${state.topicsMarked}</div>
            <div style="font-size:0.68rem; color:var(--text-mute); font-family:var(--font-code); text-transform:uppercase;">Read Items</div>
          </div>
          <div class="victory-stat-card">
            <div style="font-size:1.8rem; font-weight:800; color:var(--why-cyan);">${state.answersRated}</div>
            <div style="font-size:0.68rem; color:var(--text-mute); font-family:var(--font-code); text-transform:uppercase;">Reviews Met</div>
          </div>
          <div class="victory-stat-card">
            <div style="font-size:1.8rem; font-weight:800; color:#1dd1a1;">${state.quizScore}/${state.quizQueue.length}</div>
            <div style="font-size:0.68rem; color:var(--text-mute); font-family:var(--font-code); text-transform:uppercase;">Quiz Drill</div>
          </div>
        </div>
        
        <div style="font-size:0.85rem; color:#ffd700; font-family:var(--font-code); font-weight:700; margin-top:10px;">
          <i class="fas fa-fire"></i> DAILY STUDY STREAK SECURED!
        </div>
      </div>
    `;
    
    dashboard.triggerConfetti();
  },
  
  finishStudySession: () => {
    if (typeof app !== 'undefined' && typeof app._recordActivityToday === 'function') {
      app._recordActivityToday();
    }
    
    const overlay = document.getElementById('study-session-modal');
    if (overlay) overlay.remove();
    
    dashboard.renderPlanner();
    showToast('Well done! Daily study logged.', 'success', 'fa-trophy');
  }
};

// ==================== HOOK INTO QUIZ ENGINE ====================
// Override showAnalysis to save quiz results to dashboard
(function () {
  if (typeof quizApp !== 'undefined') {
    const originalShowAnalysis = quizApp.showAnalysis;
    quizApp.showAnalysis = () => {
      originalShowAnalysis();

      // Save result to dashboard
      const attempted = quizApp.score + quizApp.wrong;
      if (attempted > 0) {
        dashboard.saveQuizResult({
          region: quizApp.selectedRegion || 'Combined',
          system: quizApp.selectedSystem || 'Combined',
          mode: quizApp.mode || 'mcq',
          score: quizApp.score,
          total: attempted
        });
      }
    };
  }
})();
