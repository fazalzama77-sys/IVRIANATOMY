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

  render: () => {
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
  }
};

// ==================== HOOK INTO QUIZ ENGINE ====================
// Override showAnalysis to save quiz results to dashboard
(function () {
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
})();
