// =========================================================
// POWERHOUSE QUIZ ENGINE - Commercial Grade EdTech Features
// Enhanced Atlas Quiz Mode with Next/Previous, Analysis & More
// =========================================================

const quizApp = {
  mode: null,
  selectedRegion: null,
  selectedSystem: null,
  questions: [],
  currentIndex: 0,
  score: 0,
  wrong: 0,

  // Enhanced State Management
  userAnswers: [], // Stores user's answers for each question
  bookmarks: new Set(), // Bookmarked question indices
  flagged: new Set(), // Flagged question indices
  startTime: null,
  endTime: null,
  timerInterval: null,
  quizState: 'menu', // menu, active, paused, completed, reviewing

  // Configuration
  regions: ["Forelimb", "Hindlimb & Pelvis", "Head & Neck", "Thorax", "Abdomen"],
  systems: ["Osteology", "Myology", "Arthrology", "Neurology", "Angiology", "Splanchnology"],

  // ==================== INITIALIZATION ====================

  openMenu: () => {
    document.getElementById('quiz-overlay').style.display = 'flex';
    document.querySelector('.quiz-modal').classList.remove('review-mode');
    document.body.classList.add('body-modal-open');   // hides floating toggle
    quizApp.showRegionView();
    quizApp.loadSavedProgress();
  },

  close: () => {
    // Remove floating elements
    const backToTop = document.getElementById('review-back-to-top');
    if (backToTop) backToTop.remove();

    document.querySelector('.quiz-modal').classList.remove('review-mode');

    // Helper to perform the closing animation + state reset + dashboard refresh
    const doClose = () => {
      quizApp.cleanup();
      document.getElementById('quiz-overlay').style.display = 'none';
      document.body.classList.remove('body-modal-open');
      document.body.style.overflow = '';
      // If this was a Smart Review session, refresh the dashboard panel
      // so the user immediately sees their updated box counts + due counters.
      if (quizApp._isSmartReview && typeof dashboard !== 'undefined' && typeof dashboard.renderSrsPanel === 'function') {
        try { dashboard.renderSrsPanel(); } catch (e) { /* dashboard may not be visible */ }
      }
      quizApp._isSmartReview = false;
    };

    if (quizApp.quizState === 'active') {
      if (confirm('Quiz in progress! Save progress and exit?')) {
        quizApp.saveProgress();
        doClose();
      }
    } else {
      doClose();
    }
  },

  cleanup: () => {
    quizApp.stopTimer();
    quizApp.resetSelections();
  },

  resetSelections: () => {
    quizApp.selectedRegion = null;
    quizApp.selectedSystem = null;
    quizApp.mode = null;
    quizApp.questions = [];
    quizApp.currentIndex = 0;
    quizApp.score = 0;
    quizApp.wrong = 0;
    quizApp.userAnswers = [];
    quizApp.bookmarks.clear();
    quizApp.flagged.clear();
    quizApp.startTime = null;
    quizApp.endTime = null;
    quizApp.quizState = 'menu';
  },

  // ==================== NAVIGATION VIEWS ====================

  showRegionView: () => {
    quizApp.hideAllViews();
    document.getElementById('quiz-region-view').style.display = 'block';

    const grid = document.getElementById('region-grid');
    grid.innerHTML = '';

    // Individual regions
    quizApp.getAvailableRegions().forEach(region => {
      const count = quizApp.getTotalQuestionsForRegion(region);
      const card = quizApp.createSelectionCard(
        region,
        count,
        quizApp.getRegionIcon(region),
        () => quizApp.selectRegion(region),
        count === 0
      );
      grid.appendChild(card);
    });

    // Combined option
    const totalCount = quizApp.getTotalQuestionsForRegion('Combined');
    const combinedCard = quizApp.createSelectionCard(
      'COMBINED REGIONS',
      totalCount,
      'fa-globe',
      () => quizApp.selectRegion('Combined'),
      totalCount === 0,
      'All regions mixed together'
    );
    combinedCard.style.borderColor = 'var(--atlas-gold)';
    combinedCard.style.borderLeft = '4px solid var(--atlas-gold)';
    grid.appendChild(combinedCard);

    // Resume saved quiz if exists
    if (localStorage.getItem('ivri-quiz-progress')) {
      const resumeCard = quizApp.createSelectionCard(
        'RESUME SAVED QUIZ',
        'Continue',
        'fa-play-circle',
        () => quizApp.resumeSavedQuiz(),
        false,
        'Your previous session'
      );
      resumeCard.style.borderColor = 'var(--why-cyan)';
      resumeCard.style.borderLeft = '4px solid var(--why-cyan)';
      resumeCard.style.animation = 'pulse 2s infinite';
      grid.insertBefore(resumeCard, grid.firstChild);
    }
  },

  selectRegion: (region) => {
    quizApp.selectedRegion = region;
    quizApp.showSystemView();
  },

  backToRegions: () => {
    quizApp.showRegionView();
  },

  showSystemView: () => {
    quizApp.hideAllViews();
    document.getElementById('quiz-system-view').style.display = 'block';

    document.getElementById('system-breadcrumb').innerHTML =
      `<span style="color:var(--atlas-gold)">${quizApp.selectedRegion.toUpperCase()}</span> > SELECT SYSTEM`;

    const grid = document.getElementById('system-grid');
    grid.innerHTML = '';

    // Individual systems
    quizApp.getSystemsForRegion(quizApp.selectedRegion).forEach(system => {
      const count = quizApp.getQuestionCount(quizApp.selectedRegion, system);
      const card = quizApp.createSelectionCard(
        system,
        count,
        quizApp.getSystemIcon(system),
        () => quizApp.selectSystem(system),
        count === 0
      );
      grid.appendChild(card);
    });

    // Combined systems option
    const combinedCount = quizApp.getQuestionCount(quizApp.selectedRegion, 'Combined');
    const combinedCard = quizApp.createSelectionCard(
      'COMBINED SYSTEMS',
      combinedCount,
      'fa-layer-group',
      () => quizApp.selectSystem('Combined'),
      combinedCount === 0,
      'All systems in selected region'
    );
    combinedCard.style.borderColor = 'var(--why-cyan)';
    combinedCard.style.borderLeft = '4px solid var(--why-cyan)';
    grid.appendChild(combinedCard);
  },

  selectSystem: (system) => {
    quizApp.selectedSystem = system;
    quizApp.showModeView();
  },

  backToSystems: () => {
    quizApp.showSystemView();
  },

  showModeView: () => {
    quizApp.hideAllViews();
    document.getElementById('quiz-menu-view').style.display = 'block';

    document.getElementById('mode-breadcrumb').innerHTML =
      `<span style="color:var(--atlas-gold)">${quizApp.selectedRegion.toUpperCase()}</span> > 
       <span style="color:var(--why-cyan)">${quizApp.selectedSystem.toUpperCase()}</span> > SELECT FORMAT`;

    const mcqCount = quizApp.getQuestionCount(quizApp.selectedRegion, quizApp.selectedSystem, 'mcq');
    const tfCount = quizApp.getQuestionCount(quizApp.selectedRegion, quizApp.selectedSystem, 'tf');
    const fibCount = quizApp.getQuestionCount(quizApp.selectedRegion, quizApp.selectedSystem, 'fib');

    document.getElementById('mcq-count').innerText = `${mcqCount} questions available`;
    document.getElementById('tf-count').innerText = `${tfCount} questions available`;
    document.getElementById('fib-count').innerText = `${fibCount} questions available`;

    // Disable empty formats
    ['mcq', 'tf', 'fib'].forEach((mode, idx) => {
      const card = document.getElementById(['mcq-card', 'tf-card', 'fib-card'][idx]);
      const count = [mcqCount, tfCount, fibCount][idx];
      card.style.opacity = count > 0 ? '1' : '0.4';
      card.style.pointerEvents = count > 0 ? 'auto' : 'none';
      card.style.cursor = count > 0 ? 'pointer' : 'not-allowed';
    });
  },

  backToModes: () => {
    quizApp.showModeView();
  },

  hideAllViews: () => {
    document.getElementById('quiz-region-view').style.display = 'none';
    document.getElementById('quiz-system-view').style.display = 'none';
    document.getElementById('quiz-menu-view').style.display = 'none';
    document.getElementById('quiz-active-view').style.display = 'none';
    document.getElementById('quiz-analysis-view').style.display = 'none';
    document.getElementById('quiz-review-view').style.display = 'none';
  },

  // ==================== QUIZ START ====================

  // ===== SMART REVIEW (Spaced Repetition) =====
  // Triggered from Dashboard. Receives an array from srs.buildReviewSet()
  // OR srs.buildWeakSet(). Second arg sets the visible label.
  startSmartReview: (reviewSet, opts = {}) => {
    if (!Array.isArray(reviewSet) || reviewSet.length === 0) {
      alert('No questions available for review yet.');
      return;
    }
    const mode = opts.mode || 'mixed';   // 'weak' | 'mixed'
    const labels = {
      weak:  { region: 'Drill Weak Topics', system: 'Box-1 cards (your wrong answers)' },
      mixed: { region: 'Smart Review',      system: 'Spaced Repetition' },
    };
    const label = labels[mode] || labels.mixed;

    // ---- Lock the page first so the modal can claim the full viewport ----
    // Without this, on mobile the underlying dashboard's scroll position
    // + URL-bar resize can cause the modal to render at desktop dimensions.
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.style.overflow = 'hidden';      // freeze background scroll
    document.body.classList.add('body-modal-open');

    // ---- Setup quiz state ----
    quizApp.mode = 'mcq';
    quizApp.score = 0;
    quizApp.wrong = 0;
    quizApp.currentIndex = 0;
    quizApp.userAnswers = [];
    quizApp.bookmarks.clear();
    quizApp.flagged.clear();
    quizApp.quizState = 'active';
    quizApp.selectedRegion = label.region;
    quizApp.selectedSystem = label.system;
    quizApp._isSmartReview = true;   // flag used by close() to refresh dashboard

    // Map review entries → quiz questions, tagging metadata for SRS auto-recording
    quizApp.questions = reviewSet.map(entry => {
      const q = entry.q;
      return Object.assign({}, q, {
        _region: entry.region,
        _system: entry.system,
        _mode: entry.mode,
        _index: entry.idx
      });
    });

    quizApp.userAnswers = new Array(quizApp.questions.length).fill(null);
    quizApp.startTime = Date.now();
    quizApp.startTimer();

    // ---- Show the overlay AFTER state is ready ----
    const overlay = document.getElementById('quiz-overlay');
    const modal = document.querySelector('.quiz-modal');
    modal.classList.remove('review-mode');
    overlay.style.display = 'flex';
    quizApp.hideAllViews();
    document.getElementById('quiz-active-view').style.display = 'flex';

    // Force a layout reflow so the @media (max-width: 900px) rules
    // apply to the freshly-displayed modal on mobile. Without this,
    // some phones (iOS Safari especially) keep the previous desktop dims.
    void modal.offsetHeight;
    modal.style.opacity = '0';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        modal.style.opacity = '';
        quizApp.renderQuestion();
        quizApp.updateNavigationControls();
      });
    });
  },

  start: (mode) => {
    const availableCount = quizApp.getQuestionCount(quizApp.selectedRegion, quizApp.selectedSystem, mode);

    if (availableCount === 0) {
      alert('No questions available for this selection yet.');
      return;
    }

    quizApp.mode = mode;
    quizApp.score = 0;
    quizApp.wrong = 0;
    quizApp.currentIndex = 0;
    quizApp.userAnswers = [];
    quizApp.bookmarks.clear();
    quizApp.flagged.clear();
    quizApp.quizState = 'active';

    // Build filtered pool
    quizApp.questions = quizApp.buildQuestionPool(mode);

    // Shuffle
    for (let i = quizApp.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [quizApp.questions[i], quizApp.questions[j]] = [quizApp.questions[j], quizApp.questions[i]];
    }

    // Initialize user answers array
    quizApp.userAnswers = new Array(quizApp.questions.length).fill(null);

    // Start timer
    quizApp.startTime = Date.now();
    quizApp.startTimer();

    quizApp.hideAllViews();
    document.getElementById('quiz-active-view').style.display = 'flex';
    quizApp.renderQuestion();
    quizApp.updateNavigationControls();
  },

  buildQuestionPool: (mode) => {
    let pool = [];
    const regions = quizApp.selectedRegion === 'Combined' ? quizApp.getAvailableRegions() : [quizApp.selectedRegion];

    regions.forEach(region => {
      if (!quizBank[region]) return;
      const systems = quizApp.selectedSystem === 'Combined' ? quizApp.getSystemsForRegion(region) : [quizApp.selectedSystem];

      systems.forEach(system => {
        if (!quizBank[region][system]) return;
        const section = quizBank[region][system];
        let questions = [];
        if (mode === 'mcq' && section.mcq) questions = [...section.mcq];
        else if (mode === 'tf' && section.tf) questions = [...section.tf];
        else if (mode === 'fib' && section.fib) questions = [...section.fib];

        // Add metadata to each question (incl. original index for SRS tracking)
        questions = questions.map((q, idx) => ({
          ...q,
          _region: region,
          _system: system,
          _mode: mode,
          _index: idx
        }));

        pool.push(...questions);
      });
    });

    return pool;
  },

  // ==================== TIMER ====================

  startTimer: () => {
    quizApp.updateTimerDisplay();
    quizApp.timerInterval = setInterval(quizApp.updateTimerDisplay, 1000);
  },

  stopTimer: () => {
    if (quizApp.timerInterval) {
      clearInterval(quizApp.timerInterval);
      quizApp.timerInterval = null;
    }
  },

  updateTimerDisplay: () => {
    const elapsed = Math.floor((Date.now() - quizApp.startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    const timerEl = document.getElementById('quiz-timer');
    if (timerEl) {
      timerEl.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  },

  getElapsedTime: () => {
    if (!quizApp.startTime) return 0;
    return Math.floor((Date.now() - quizApp.startTime) / 1000);
  },

  formatTime: (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  },

  // ==================== QUESTION RENDERING ====================

  renderQuestion: () => {
    if (quizApp.currentIndex >= quizApp.questions.length) {
      quizApp.showAnalysis();
      return;
    }

    const q = quizApp.questions[quizApp.currentIndex];
    const userAnswer = quizApp.userAnswers[quizApp.currentIndex];

    // Update header info
    document.getElementById('quiz-counter').innerText = `Q ${quizApp.currentIndex + 1}/${quizApp.questions.length}`;
    document.getElementById('quiz-region-tag').innerText = q._region;
    document.getElementById('quiz-system-tag').innerText = q._system;

    // Update progress bar
    const pct = ((quizApp.currentIndex + 1) / quizApp.questions.length) * 100;
    document.getElementById('quiz-progress').style.width = pct + "%";

    // Update question status indicators
    quizApp.renderQuestionGrid();

    // Render question
    document.getElementById('quiz-question').innerHTML = q.q;
    const interactionArea = document.getElementById('quiz-interaction-area');
    interactionArea.innerHTML = '';
    document.getElementById('quiz-feedback').style.display = 'none';

    // Render based on question type
    if (quizApp.mode === 'mcq') {
      quizApp.renderMCQ(q, userAnswer, interactionArea);
    } else if (quizApp.mode === 'tf') {
      quizApp.renderTF(q, userAnswer, interactionArea);
    } else if (quizApp.mode === 'fib') {
      quizApp.renderFIB(q, userAnswer, interactionArea);
    }

    // Update bookmark and flag buttons
    quizApp.updateActionButtons();

    // If already answered, show feedback
    if (userAnswer !== null) {
      quizApp.showFeedbackForAnswer(userAnswer);
    }
  },

  renderMCQ: (q, userAnswer, container) => {
    const opts = q.o.map((text, idx) => ({ text, idx, isCorrect: idx === q.a }));

    // Only shuffle if not answered before
    if (userAnswer === null) {
      for (let i = opts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opts[i], opts[j]] = [opts[j], opts[i]];
      }
    }

    opts.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.innerText = opt.text;

      if (userAnswer !== null) {
        btn.disabled = true;
        if (opt.isCorrect) {
          btn.classList.add('correct');
        } else if (userAnswer.selectedIdx === opt.idx && !opt.isCorrect) {
          btn.classList.add('wrong');
        }
      } else {
        btn.onclick = () => quizApp.checkMCQ(opt.isCorrect, btn, opt.idx, q);
      }

      container.appendChild(btn);
    });
  },

  renderTF: (q, userAnswer, container) => {
    const createBtn = (boolVal, icon, text) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.innerHTML = `<i class="fas ${icon}"></i> ${text}`;

      if (userAnswer !== null) {
        btn.disabled = true;
        const isCorrect = boolVal === q.a;
        if (isCorrect) {
          btn.classList.add('correct');
        } else if (userAnswer.answer === boolVal && !isCorrect) {
          btn.classList.add('wrong');
        }
      } else {
        btn.onclick = () => quizApp.checkTF(boolVal, btn, q);
      }

      return btn;
    };

    container.appendChild(createBtn(true, 'fa-check', 'TRUE'));
    container.appendChild(createBtn(false, 'fa-times', 'FALSE'));
  },

  renderFIB: (q, userAnswer, container) => {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'fill-input';
    input.placeholder = 'Type answer here...';

    if (userAnswer !== null) {
      input.value = userAnswer.answer;
      input.disabled = true;
      const isCorrect = userAnswer.isCorrect;
      input.style.borderColor = isCorrect ? '#00ff9d' : '#ff6b6b';
      input.style.color = isCorrect ? '#00ff9d' : '#ff6b6b';
    } else {
      input.onkeydown = (e) => {
        if (e.key === 'Enter') quizApp.checkFIB(input.value, input, q);
      };
    }

    container.appendChild(input);

    if (userAnswer === null) {
      const submitBtn = document.createElement('button');
      submitBtn.className = 'nav-btn';
      submitBtn.style.borderColor = 'var(--why-cyan)';
      submitBtn.style.color = 'var(--why-cyan)';
      submitBtn.innerText = 'SUBMIT ANSWER';
      submitBtn.onclick = () => quizApp.checkFIB(input.value, input, q);
      container.appendChild(submitBtn);
      input.focus();
    }
  },

  // ==================== ANSWER CHECKING ====================

  checkMCQ: (isCorrect, btn, selectedIdx, qData) => {
    const btns = document.querySelectorAll('.quiz-option');
    btns.forEach(b => b.disabled = true);

    // Store answer
    quizApp.userAnswers[quizApp.currentIndex] = {
      selectedIdx: selectedIdx,
      isCorrect: isCorrect,
      correctAnswer: qData.o[qData.a]
    };

    if (isCorrect) {
      btn.classList.add('correct');
      quizApp.score++;
      quizApp.showFeedback(true, qData.e);
    } else {
      btn.classList.add('wrong');
      // Highlight correct answer
      btns.forEach(b => {
        if (b.innerText === qData.o[qData.a]) {
          b.classList.add('correct');
        }
      });
      quizApp.wrong++;
      quizApp.showFeedback(false, `Correct Answer: ${qData.o[qData.a]}<br>${qData.e}`);
    }

    quizApp.updateNavigationControls();
    quizApp.renderQuestionGrid();

    // ---- SRS hook ----
    if (typeof srs !== 'undefined' && qData._region) {
      srs.recordAnswer(srs.qid(qData._region, qData._system, qData._mode, qData._index), isCorrect);
    }
  },

  checkTF: (userBool, btn, qData) => {
    const btns = document.querySelectorAll('.quiz-option');
    btns.forEach(b => b.disabled = true);

    const isCorrect = userBool === qData.a;

    // Store answer
    quizApp.userAnswers[quizApp.currentIndex] = {
      answer: userBool,
      isCorrect: isCorrect,
      correctAnswer: qData.a
    };

    if (isCorrect) {
      btn.classList.add('correct');
      quizApp.score++;
      quizApp.showFeedback(true, qData.e);
    } else {
      btn.classList.add('wrong');
      // Highlight correct answer
      btns.forEach(b => {
        if ((qData.a && b.innerText.includes('TRUE')) || (!qData.a && b.innerText.includes('FALSE'))) {
          b.classList.add('correct');
        }
      });
      quizApp.wrong++;
      quizApp.showFeedback(false, qData.e);
    }

    quizApp.updateNavigationControls();
    quizApp.renderQuestionGrid();

    // ---- SRS hook ----
    if (typeof srs !== 'undefined' && qData._region) {
      srs.recordAnswer(srs.qid(qData._region, qData._system, qData._mode, qData._index), isCorrect);
    }
  },

  checkFIB: (userText, input, qData) => {
    if (!userText) return;
    input.disabled = true;

    const cleanUser = userText.trim().toLowerCase();
    const isMatch = qData.a.some(ans => ans.toLowerCase() === cleanUser);

    // Store answer
    quizApp.userAnswers[quizApp.currentIndex] = {
      answer: userText,
      isCorrect: isMatch,
      correctAnswer: qData.a[0]
    };

    if (isMatch) {
      input.style.borderColor = '#00ff9d';
      input.style.color = '#00ff9d';
      quizApp.score++;
      quizApp.showFeedback(true, qData.e);
    } else {
      input.style.borderColor = '#ff6b6b';
      input.style.color = '#ff6b6b';
      quizApp.wrong++;
      quizApp.showFeedback(false, `Correct Answer: ${qData.a[0].toUpperCase()}<br>${qData.e}`);
    }

    quizApp.updateNavigationControls();
    quizApp.renderQuestionGrid();

    // ---- SRS hook ----
    if (typeof srs !== 'undefined' && qData._region) {
      srs.recordAnswer(srs.qid(qData._region, qData._system, qData._mode, qData._index), isMatch);
    }
  },

  showFeedback: (isCorrect, text) => {
    const fb = document.getElementById('quiz-feedback');
    fb.style.display = 'block';
    fb.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
        <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}" style="font-size:1.5rem; color:${isCorrect ? '#00ff9d' : '#ff6b6b'}"></i>
        <strong style="color:${isCorrect ? '#00ff9d' : '#ff6b6b'}; font-size:1.1rem;">
          ${isCorrect ? 'CORRECT!' : 'INCORRECT'}
        </strong>
      </div>
      <div style="color:#e6f1ff; font-size:0.95rem; line-height:1.6;">${text}</div>
    `;
  },

  showFeedbackForAnswer: (userAnswer) => {
    const q = quizApp.questions[quizApp.currentIndex];
    if (userAnswer.isCorrect) {
      quizApp.showFeedback(true, q.e);
    } else {
      const correctText = quizApp.mode === 'mcq' ? userAnswer.correctAnswer :
        quizApp.mode === 'tf' ? (userAnswer.correctAnswer ? 'TRUE' : 'FALSE') :
          userAnswer.correctAnswer;
      quizApp.showFeedback(false, `Correct Answer: ${correctText}<br>${q.e}`);
    }
  },

  // ==================== NAVIGATION CONTROLS ====================

  updateNavigationControls: () => {
    const prevBtn = document.getElementById('prev-q-btn');
    const nextBtn = document.getElementById('next-q-btn');
    const submitBtn = document.getElementById('submit-quiz-btn');
    const currentAnswer = quizApp.userAnswers[quizApp.currentIndex];

    // Previous button — visible whenever not on first question
    prevBtn.style.display = quizApp.currentIndex > 0 ? 'flex' : 'none';
    prevBtn.disabled = false;

    const isLastQuestion = quizApp.currentIndex === quizApp.questions.length - 1;

    // ===== ALWAYS allow forward navigation (skip support) =====
    // Even if the user hasn't picked an option, they can press Next to skip.
    // The label changes to "Skip ›" to make it clear, switches to "Next ›" once answered.
    if (isLastQuestion) {
      nextBtn.style.display = 'none';
      submitBtn.style.display = 'flex';
      // Allow submitting at any time on the last question (skipped Qs simply stay null)
      submitBtn.disabled = false;
    } else {
      nextBtn.style.display = 'flex';
      submitBtn.style.display = 'none';
      // Cosmetic label change: "Skip" if not answered, "Next" if answered
      const labelSpan = nextBtn.querySelector('.nav-label') || nextBtn;
      const isSkipping = (currentAnswer === null);
      nextBtn.classList.toggle('is-skip', isSkipping);
      // Update inner text safely (preserve any icon)
      const icon = nextBtn.querySelector('i');
      const newText = isSkipping ? 'Skip' : 'Next';
      if (labelSpan === nextBtn) {
        // No dedicated label span — rebuild while keeping icon
        nextBtn.innerHTML = `${newText} <i class="fas fa-arrow-right"></i>`;
      } else {
        labelSpan.innerText = newText;
      }
    }
  },

  prev: () => {
    if (quizApp.currentIndex > 0) {
      quizApp.currentIndex--;
      quizApp.renderQuestion();
      quizApp.updateNavigationControls();
    }
  },

  next: () => {
    if (quizApp.currentIndex < quizApp.questions.length - 1) {
      quizApp.currentIndex++;
      quizApp.renderQuestion();
      quizApp.updateNavigationControls();
    }
  },

  goToQuestion: (index) => {
    quizApp.currentIndex = index;
    quizApp.renderQuestion();
    quizApp.updateNavigationControls();
  },

  // ==================== QUESTION GRID (QUICK NAV) ====================

  renderQuestionGrid: () => {
    const grid = document.getElementById('question-grid');
    if (!grid) return;

    grid.innerHTML = '';

    for (let i = 0; i < quizApp.questions.length; i++) {
      const btn = document.createElement('button');
      btn.className = 'question-grid-btn';
      btn.innerText = i + 1;

      // Status styling
      if (i === quizApp.currentIndex) {
        btn.classList.add('current');
      } else if (quizApp.userAnswers[i] !== null) {
        btn.classList.add(quizApp.userAnswers[i].isCorrect ? 'correct' : 'incorrect');
      } else {
        btn.classList.add('unanswered');
      }

      // Bookmark indicator
      if (quizApp.bookmarks.has(i)) {
        btn.classList.add('bookmarked');
      }

      // Flag indicator
      if (quizApp.flagged.has(i)) {
        btn.classList.add('flagged');
      }

      btn.onclick = () => quizApp.goToQuestion(i);
      btn.title = `Question ${i + 1}${quizApp.bookmarks.has(i) ? ' (Bookmarked)' : ''}${quizApp.flagged.has(i) ? ' (Flagged)' : ''}`;

      grid.appendChild(btn);
    }
  },

  toggleQuestionGrid: () => {
    const panel = document.getElementById('question-grid-panel');
    panel.classList.toggle('open');
  },

  // ==================== BOOKMARK & FLAG ====================

  toggleBookmark: () => {
    if (quizApp.bookmarks.has(quizApp.currentIndex)) {
      quizApp.bookmarks.delete(quizApp.currentIndex);
      showToast('Bookmark removed', 'info', 'fa-bookmark');
    } else {
      quizApp.bookmarks.add(quizApp.currentIndex);
      showToast('Bookmarked!', 'success', 'fa-bookmark');
    }
    quizApp.updateActionButtons();
    quizApp.renderQuestionGrid();
  },

  toggleFlag: () => {
    if (quizApp.flagged.has(quizApp.currentIndex)) {
      quizApp.flagged.delete(quizApp.currentIndex);
      showToast('Flag removed', 'info', 'fa-flag');
    } else {
      quizApp.flagged.add(quizApp.currentIndex);
      showToast('Flagged for review', 'warning', 'fa-flag');
    }
    quizApp.updateActionButtons();
    quizApp.renderQuestionGrid();
  },

  updateActionButtons: () => {
    const bookmarkBtn = document.getElementById('bookmark-btn');
    const flagBtn = document.getElementById('flag-btn');

    if (bookmarkBtn) {
      const isBookmarked = quizApp.bookmarks.has(quizApp.currentIndex);
      bookmarkBtn.innerHTML = `<i class="${isBookmarked ? 'fas fa-bookmark' : 'far fa-bookmark'}"></i>`;
      bookmarkBtn.classList.toggle('active', isBookmarked);
      bookmarkBtn.title = isBookmarked ? 'Remove Bookmark' : 'Bookmark Question';
    }

    if (flagBtn) {
      const isFlagged = quizApp.flagged.has(quizApp.currentIndex);
      flagBtn.innerHTML = `<i class="${isFlagged ? 'fas fa-flag' : 'far fa-flag'}"></i>`;
      flagBtn.classList.toggle('active', isFlagged);
      flagBtn.title = isFlagged ? 'Remove Flag' : 'Flag for Review';
    }
  },

  // ==================== ANALYSIS & REVIEW ====================

  showAnalysis: () => {
    quizApp.stopTimer();
    quizApp.endTime = Date.now();
    quizApp.quizState = 'completed';

    // Clear saved progress since quiz is complete
    localStorage.removeItem('ivri-quiz-progress');

    quizApp.hideAllViews();
    document.querySelector('.quiz-modal').classList.remove('review-mode');
    document.getElementById('quiz-analysis-view').style.display = 'block';

    // Remove floating elements from review
    const backToTop = document.getElementById('review-back-to-top');
    if (backToTop) backToTop.remove();

    const attempted = quizApp.score + quizApp.wrong; // Questions actually answered
    const unanswered = quizApp.questions.length - attempted;

    // BUG FIX: Calculate accuracy based on attempted questions, not total questions
    const accuracy = attempted === 0 ? 0 : Math.round((quizApp.score / attempted) * 100);

    // Update stats
    document.getElementById('score-val').innerText = quizApp.score;
    document.getElementById('wrong-val').innerText = quizApp.wrong;
    document.getElementById('unanswered-val').innerText = unanswered;
    document.getElementById('time-val').innerText = quizApp.formatTime(quizApp.getElapsedTime());
    document.getElementById('accuracy-val').innerText = accuracy + "%";

    // Accuracy color coding
    const accuracyEl = document.getElementById('accuracy-val');
    if (accuracy >= 80) accuracyEl.style.color = '#00ff9d';
    else if (accuracy >= 60) accuracyEl.style.color = '#ffd700';
    else accuracyEl.style.color = '#ff6b6b';

    // Performance message
    let advice = "";
    if (attempted === 0) advice = "No questions attempted. Try again when you're ready!";
    else if (accuracy >= 90) advice = `OUTSTANDING! You have mastered ${quizApp.selectedRegion} - ${quizApp.selectedSystem}. Your understanding is exceptional. Proceed to clinical applications with confidence.`;
    else if (accuracy >= 75) advice = `GREAT JOB! Strong proficiency in ${quizApp.selectedRegion} - ${quizApp.selectedSystem}. Review the flagged/bookmarked questions to push your score even higher.`;
    else if (accuracy >= 60) advice = `GOOD EFFORT! You're building solid knowledge in ${quizApp.selectedRegion} - ${quizApp.selectedSystem}. Use the Review feature to study the questions you missed.`;
    else advice = `KEEP PRACTICING! ${quizApp.selectedRegion} - ${quizApp.selectedSystem} requires more study. Review all questions carefully and revisit the Atlas section.`;

    document.getElementById('analysis-text').innerText = advice;

    // Category breakdown
    quizApp.renderCategoryBreakdown();
  },

  renderCategoryBreakdown: () => {
    const container = document.getElementById('category-breakdown');
    if (!container) return;

    // Group by region/system
    const breakdown = {};
    quizApp.questions.forEach((q, idx) => {
      const key = `${q._region} > ${q._system}`;
      if (!breakdown[key]) {
        breakdown[key] = { total: 0, correct: 0 };
      }
      breakdown[key].total++;
      if (quizApp.userAnswers[idx]?.isCorrect) {
        breakdown[key].correct++;
      }
    });

    container.innerHTML = Object.entries(breakdown).map(([key, stats]) => {
      const pct = Math.round((stats.correct / stats.total) * 100);
      let color = '#ff6b6b';
      if (pct >= 80) color = '#00ff9d';
      else if (pct >= 60) color = '#ffd700';

      return `
        <div class="breakdown-item">
          <div class="breakdown-label">${key}</div>
          <div class="breakdown-bar-container">
            <div class="breakdown-bar" style="width:${pct}%; background:${color};"></div>
          </div>
          <div class="breakdown-stats" style="color:${color}">${stats.correct}/${stats.total} (${pct}%)</div>
        </div>
      `;
    }).join('');
  },

  // ==================== DETAILED REVIEW ====================

  showReview: () => {
    quizApp.quizState = 'reviewing';
    quizApp.hideAllViews();

    // Expand modal to full-screen for review
    const modal = document.querySelector('.quiz-modal');
    modal.classList.add('review-mode');

    document.getElementById('quiz-review-view').style.display = 'flex';

    // Populate filter options
    quizApp.populateReviewFilters();

    // Render review list
    quizApp.renderReviewList();

    // Scroll modal to top
    modal.scrollTop = 0;
  },

  populateReviewFilters: () => {
    const filterSelect = document.getElementById('review-filter');
    if (!filterSelect) return;

    const attempted = quizApp.score + quizApp.wrong;
    const unanswered = quizApp.questions.length - attempted;

    filterSelect.innerHTML = `
      <option value="all">All Questions (${quizApp.questions.length})</option>
      <option value="correct">Correct Only (${quizApp.score})</option>
      <option value="incorrect">Incorrect Only (${quizApp.wrong})</option>
      <option value="unanswered">Unanswered Only (${unanswered})</option>
      <option value="bookmarked">Bookmarked (${quizApp.bookmarks.size})</option>
      <option value="flagged">Flagged for Review (${quizApp.flagged.size})</option>
    `;
  },

  renderReviewList: (filter = 'all') => {
    const container = document.getElementById('review-list');
    if (!container) return;

    let filteredIndices = quizApp.questions.map((_, i) => i);

    switch (filter) {
      case 'all':
        // BUG FIX: Show all questions, no filtering
        break;
      case 'correct':
        filteredIndices = filteredIndices.filter(i => quizApp.userAnswers[i]?.isCorrect === true);
        break;
      case 'incorrect':
        filteredIndices = filteredIndices.filter(i => quizApp.userAnswers[i] && quizApp.userAnswers[i].isCorrect === false);
        break;
      case 'unanswered':
        filteredIndices = filteredIndices.filter(i => quizApp.userAnswers[i] === null);
        break;
      case 'bookmarked':
        filteredIndices = filteredIndices.filter(i => quizApp.bookmarks.has(i));
        break;
      case 'flagged':
        filteredIndices = filteredIndices.filter(i => quizApp.flagged.has(i));
        break;
    }

    // Add stats bar at top
    const attempted = quizApp.score + quizApp.wrong;
    const statsBar = `
      <div class="review-stats-bar">
        <div class="review-stat-item correct">
          <i class="fas fa-check-circle"></i>
          <span>Correct: ${quizApp.score}</span>
        </div>
        <div class="review-stat-item incorrect">
          <i class="fas fa-times-circle"></i>
          <span>Incorrect: ${quizApp.wrong}</span>
        </div>
        <div class="review-stat-item unanswered">
          <i class="fas fa-minus-circle"></i>
          <span>Unanswered: ${quizApp.questions.length - attempted}</span>
        </div>
        <div class="review-stat-item" style="margin-left: auto; color: var(--atlas-gold);">
          <i class="fas fa-list-ol"></i>
          <span>Showing: ${filteredIndices.length} of ${quizApp.questions.length}</span>
        </div>
      </div>
    `;

    if (filteredIndices.length === 0) {
      container.innerHTML = statsBar + `
        <div class="review-empty">
          <i class="fas fa-inbox" style="font-size:3rem; margin-bottom:15px; opacity:0.5;"></i>
          <p>No questions match this filter.</p>
          <button onclick="quizApp.renderReviewList('all')" class="nav-btn" style="margin-top:15px;">
            Show All Questions
          </button>
        </div>
      `;
      return;
    }

    // Build question jump navigator
    const jumpNavHtml = `
      <div class="review-jump-nav">
        <span class="review-jump-nav-label"><i class="fas fa-compass"></i> Jump to Q:</span>
        ${filteredIndices.map((idx) => {
      const ans = quizApp.userAnswers[idx];
      let dotClass = 'unanswered-dot';
      if (ans?.isCorrect === true) dotClass = 'correct-dot';
      else if (ans?.isCorrect === false) dotClass = 'incorrect-dot';
      return `<button class="review-jump-btn ${dotClass}" onclick="document.getElementById('review-card-${idx}').scrollIntoView({behavior:'smooth', block:'center'})" title="Question ${idx + 1}">${idx + 1}</button>`;
    }).join('')}
      </div>
    `;

    const cardsHtml = filteredIndices.map((idx, displayIndex) => {
      const q = quizApp.questions[idx];
      const answer = quizApp.userAnswers[idx];
      const isCorrect = answer?.isCorrect;
      const isUnanswered = answer === null;

      // Determine status
      let statusClass = 'unanswered';
      let statusIcon = 'fa-minus-circle';
      let statusColor = '#8892b0';
      let statusText = 'Not Attempted';

      if (isCorrect === true) {
        statusClass = 'correct';
        statusIcon = 'fa-check-circle';
        statusColor = '#00ff9d';
        statusText = 'Correct';
      } else if (isCorrect === false) {
        statusClass = 'incorrect';
        statusIcon = 'fa-times-circle';
        statusColor = '#ff6b6b';
        statusText = 'Incorrect';
      }

      // Get user's answer text
      let userAnswerText = 'Not answered';
      let userAnswerClass = 'unanswered';

      // Use per-question mode for combined quiz support
      const qMode = q._mode || quizApp.mode;

      if (!isUnanswered) {
        if (qMode === 'mcq') {
          userAnswerText = q.o[answer.selectedIdx];
          userAnswerClass = isCorrect ? 'correct' : 'wrong';
        } else if (qMode === 'tf') {
          userAnswerText = answer.answer ? 'TRUE' : 'FALSE';
          userAnswerClass = isCorrect ? 'correct' : 'wrong';
        } else if (qMode === 'fib') {
          userAnswerText = answer.answer;
          userAnswerClass = isCorrect ? 'correct' : 'wrong';
        }
      }

      // Get correct answer text
      let correctAnswerText = '';
      if (qMode === 'mcq') {
        correctAnswerText = q.o[q.a];
      } else if (qMode === 'tf') {
        correctAnswerText = q.a ? 'TRUE' : 'FALSE';
      } else if (qMode === 'fib') {
        correctAnswerText = q.a[0];
      }

      // Build answer boxes — for MCQ, show ALL options with marking
      let answerBoxes = '';

      if (qMode === 'mcq') {
        // Show all MCQ options with visual indicators
        const optionsHtml = q.o.map((opt, optIdx) => {
          let optClass = '';
          let optIcon = '';
          if (optIdx === q.a) {
            // This is the correct answer
            optClass = 'correct';
            optIcon = '<i class="fas fa-check-circle" style="color:#00ff9d;"></i>';
          }
          if (!isUnanswered && answer.selectedIdx === optIdx && !isCorrect) {
            // User selected this wrong answer
            optClass = 'wrong';
            optIcon = '<i class="fas fa-times-circle" style="color:#ff6b6b;"></i>';
          }
          if (!isUnanswered && answer.selectedIdx === optIdx && isCorrect) {
            optClass = 'correct';
            optIcon = '<i class="fas fa-check-circle" style="color:#00ff9d;"></i>';
          }

          const isSelected = !isUnanswered && answer.selectedIdx === optIdx;
          const selectedStyle = isSelected ? 'font-weight:700;' : 'opacity:0.7;';
          const optLetter = String.fromCharCode(65 + optIdx);

          return `
            <div style="display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:8px; margin:4px 0;
              background: ${optClass === 'correct' ? 'rgba(0,255,157,0.08)' : optClass === 'wrong' ? 'rgba(255,107,107,0.08)' : 'rgba(255,255,255,0.02)'};
              border: 1px solid ${optClass === 'correct' ? 'rgba(0,255,157,0.3)' : optClass === 'wrong' ? 'rgba(255,107,107,0.3)' : 'var(--border)'};
              ${selectedStyle}">
              <span style="font-family:var(--font-code); font-weight:700; min-width:24px; color:${optClass === 'correct' ? '#00ff9d' : optClass === 'wrong' ? '#ff6b6b' : 'var(--text-mute)'}">${optLetter}.</span>
              <span style="flex:1; color:var(--text-main);">${opt}</span>
              ${optIcon}
              ${isSelected ? '<span style="font-family:var(--font-code);font-size:0.7rem;color:var(--atlas-gold);margin-left:5px;">YOUR PICK</span>' : ''}
            </div>
          `;
        }).join('');

        answerBoxes = `
          <div style="display:flex; flex-direction:column; gap:0;">
            ${optionsHtml}
          </div>
        `;
        if (isUnanswered) {
          answerBoxes = `
            <div class="answer-box unanswered" style="margin-bottom:10px;">
              <div class="answer-label">
                <i class="fas fa-user"></i> Your Answer
              </div>
              <div class="answer-text">Not attempted</div>
            </div>
            <div style="display:flex; flex-direction:column; gap:0;">
              ${optionsHtml}
            </div>
          `;
        }
      } else if (isUnanswered) {
        answerBoxes = `
          <div class="answer-box unanswered">
            <div class="answer-label">
              <i class="fas fa-user"></i> Your Answer
            </div>
            <div class="answer-text">Not attempted</div>
          </div>
          <div class="answer-box correct-answer">
            <div class="answer-label">
              <i class="fas fa-check"></i> Correct Answer
            </div>
            <div class="answer-text">${correctAnswerText}</div>
          </div>
        `;
      } else if (isCorrect) {
        answerBoxes = `
          <div class="answer-box your-answer correct">
            <div class="answer-label">
              <i class="fas fa-user-check"></i> Your Answer (Correct)
            </div>
            <div class="answer-text">${userAnswerText}</div>
          </div>
          <div class="answer-box correct-answer">
            <div class="answer-label">
              <i class="fas fa-check"></i> Correct Answer
            </div>
            <div class="answer-text">${correctAnswerText}</div>
          </div>
        `;
      } else {
        answerBoxes = `
          <div class="answer-box your-answer wrong">
            <div class="answer-label">
              <i class="fas fa-user-times"></i> Your Answer
            </div>
            <div class="answer-text">${userAnswerText}</div>
          </div>
          <div class="answer-box correct-answer">
            <div class="answer-label">
              <i class="fas fa-check"></i> Correct Answer
            </div>
            <div class="answer-text">${correctAnswerText}</div>
          </div>
        `;
      }

      // Tags HTML
      const tagsHtml = `
        <span class="review-tag region">${q._region}</span>
        <span class="review-tag system">${q._system}</span>
        ${quizApp.bookmarks.has(idx) ? '<span class="review-tag bookmarked"><i class="fas fa-bookmark"></i> Bookmarked</span>' : ''}
        ${quizApp.flagged.has(idx) ? '<span class="review-tag flagged"><i class="fas fa-flag"></i> Flagged</span>' : ''}
      `;

      return `
        <div class="review-card ${statusClass}" id="review-card-${idx}" style="animation-delay: ${displayIndex * 0.03}s">
          <div class="review-header-row">
            <div style="display: flex; align-items: center; gap: 15px;">
              <div class="review-q-num">${idx + 1}</div>
              <div class="review-tags">
                ${tagsHtml}
              </div>
            </div>
            <div class="review-status" style="color: ${statusColor}" title="${statusText}">
              <i class="fas ${statusIcon}"></i> <span style="font-size:0.85rem; font-family:var(--font-code);">${statusText.toUpperCase()}</span>
            </div>
          </div>
          
          <div class="review-question">
            ${q.q}
          </div>
          
          <div class="review-answers-section" style="${qMode === 'mcq' && !isUnanswered ? 'grid-template-columns: 1fr;' : ''}">
            ${answerBoxes}
          </div>
          
          <div class="review-explanation">
            <strong>
              <i class="fas fa-lightbulb"></i> Explanation
            </strong>
            <p>${q.e}</p>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = statsBar + jumpNavHtml + cardsHtml;

    // Add floating back-to-top button
    let backToTop = document.getElementById('review-back-to-top');
    if (!backToTop) {
      backToTop = document.createElement('button');
      backToTop.id = 'review-back-to-top';
      backToTop.className = 'review-back-to-top';
      backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
      backToTop.onclick = () => {
        document.querySelector('.quiz-modal').scrollTop = 0;
      };
      document.body.appendChild(backToTop);
    }

    // Show/hide back-to-top on scroll
    const modal = document.querySelector('.quiz-modal');
    if (quizApp._scrollHandler) modal.removeEventListener('scroll', quizApp._scrollHandler);
    quizApp._scrollHandler = () => {
      if (modal.scrollTop > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    };
    modal.addEventListener('scroll', quizApp._scrollHandler);
  },

  filterReview: () => {
    const filter = document.getElementById('review-filter').value;
    quizApp.renderReviewList(filter);
  },

  // ==================== SAVE/RESUME PROGRESS ====================

  saveProgress: () => {
    if (quizApp.quizState !== 'active') return;

    const progress = {
      mode: quizApp.mode,
      selectedRegion: quizApp.selectedRegion,
      selectedSystem: quizApp.selectedSystem,
      questions: quizApp.questions,
      currentIndex: quizApp.currentIndex,
      score: quizApp.score,
      wrong: quizApp.wrong,
      userAnswers: quizApp.userAnswers,
      bookmarks: Array.from(quizApp.bookmarks),
      flagged: Array.from(quizApp.flagged),
      startTime: quizApp.startTime,
      elapsedTime: quizApp.getElapsedTime()
    };

    try {
      localStorage.setItem('ivri-quiz-progress', JSON.stringify(progress));
    } catch(e) {
      console.warn('Progress save failed (storage full):', e);
    }
  },

  loadSavedProgress: () => {
    // Just check if exists - actual loading happens when user clicks resume
  },

  resumeSavedQuiz: () => {
    const saved = localStorage.getItem('ivri-quiz-progress');
    if (!saved) return;

    try {
      const progress = JSON.parse(saved);

      quizApp.mode = progress.mode;
      quizApp.selectedRegion = progress.selectedRegion;
      quizApp.selectedSystem = progress.selectedSystem;
      quizApp.questions = progress.questions;
      quizApp.currentIndex = progress.currentIndex;
      quizApp.score = progress.score;
      quizApp.wrong = progress.wrong;
      quizApp.userAnswers = progress.userAnswers;
      quizApp.bookmarks = new Set(progress.bookmarks || []);
      quizApp.flagged = new Set(progress.flagged || []);
      quizApp.startTime = Date.now() - (progress.elapsedTime * 1000);
      quizApp.quizState = 'active';

      quizApp.hideAllViews();
      document.getElementById('quiz-active-view').style.display = 'flex';
      quizApp.startTimer();
      quizApp.renderQuestion();
      quizApp.updateNavigationControls();
      showToast('Quiz resumed!', 'success', 'fa-play-circle');

    } catch (e) {
      console.error('Failed to resume quiz:', e);
      localStorage.removeItem('ivri-quiz-progress');
      alert('Could not resume saved quiz. Starting fresh.');
    }
  },

  // ==================== UTILITY METHODS ====================

  getAvailableRegions: () => {
    if (typeof quizBank === 'undefined') return quizApp.regions;
    const uploadedRegions = Object.keys(quizBank);
    const configuredRegions = quizApp.regions.filter(region => uploadedRegions.includes(region));
    const extraRegions = uploadedRegions.filter(region => !quizApp.regions.includes(region));
    return [...configuredRegions, ...extraRegions];
  },

  getSystemsForRegion: (region) => {
    if (typeof quizBank === 'undefined') return quizApp.systems;

    if (region === 'Combined') {
      const orderedSystems = [];
      quizApp.getAvailableRegions().forEach(r => {
        Object.keys(quizBank[r] || {}).forEach(system => {
          if (!orderedSystems.includes(system)) orderedSystems.push(system);
        });
      });
      return orderedSystems;
    }

    return Object.keys(quizBank[region] || {});
  },

  getQuestionCount: (region, system, mode = null) => {
    const regions = region === 'Combined' ? quizApp.getAvailableRegions() : [region];
    let count = 0;

    regions.forEach(r => {
      if (!quizBank[r]) return;
      const systems = system === 'Combined' ? quizApp.getSystemsForRegion(r) : [system];

      systems.forEach(s => {
        if (!quizBank[r][s]) return;
        const section = quizBank[r][s];
        if (mode === 'mcq' || mode === null) count += (section.mcq?.length || 0);
        if (mode === 'tf' || mode === null) count += (section.tf?.length || 0);
        if (mode === 'fib' || mode === null) count += (section.fib?.length || 0);
      });
    });

    return count;
  },

  getTotalQuestionsForRegion: (region) => {
    if (region === 'Combined') {
      return quizApp.getAvailableRegions().reduce((sum, r) => sum + quizApp.getQuestionCount(r, 'Combined'), 0);
    }
    return quizApp.getQuestionCount(region, 'Combined');
  },

  createSelectionCard: (title, count, icon, onClick, disabled, subtitle = null) => {
    const div = document.createElement('div');
    div.className = 'quiz-mode-card';
    if (disabled) {
      div.style.opacity = '0.4';
      div.style.pointerEvents = 'none';
      div.style.borderLeft = '4px solid #ff6b6b';
    }
    div.onclick = onClick;

    div.innerHTML = `
      <i class="fas ${icon}" style="font-size:3rem; color:var(--text-main); margin-bottom:20px; ${disabled ? 'opacity:0.5' : ''}"></i>
      <h3 style="font-size:1.1rem; margin-bottom:10px;">${title}</h3>
      <p style="color:${disabled ? '#ff6b6b' : 'var(--text-mute)'}; font-size:0.85rem; margin-top:5px; font-weight:600; font-family:var(--font-code);">
        ${typeof count === 'number' ? count + ' QUESTIONS' : count}
      </p>
      ${subtitle ? `<p style="color:var(--text-mute); font-size:0.75rem; margin-top:8px; font-style:italic;">${subtitle}</p>` : ''}
    `;

    return div;
  },

  getRegionIcon: (region) => {
    const icons = {
      "Forelimb": "fa-hand-point-up",
      "Hindlimb & Pelvis": "fa-shoe-prints",
      "Thorax": "fa-lungs",
      "Abdomen": "fa-prescription-bottle-alt",
      "Head & Neck": "fa-head-side-virus",
      "Introduction": "fa-compass",
      "Histology": "fa-microscope",
      "Embryology": "fa-seedling"
    };
    return icons[region] || "fa-book-medical";
  },

  getSystemIcon: (system) => {
    const icons = {
      "Osteology": "fa-bone",
      "Myology": "fa-running",
      "Arthrology": "fa-link",
      "Neurology": "fa-brain",
      "Angiology": "fa-heartbeat",
      "Splanchnology": "fa-stomach",
      "Clinical Anatomy": "fa-stethoscope"
    };
    if (icons[system]) return icons[system];
    if (system.includes("Osteology")) return "fa-bone";
    if (system.includes("Myology")) return "fa-running";
    if (system.includes("Arthrology")) return "fa-link";
    if (system.includes("Neurology")) return "fa-brain";
    if (system.includes("Angiology")) return "fa-heartbeat";
    if (system.includes("Splanchnology")) return "fa-stomach";
    if (system.includes("Clinical")) return "fa-stethoscope";
    return "fa-book-medical";
  }
};

// =========================================================
// KEYBOARD NAVIGATION
// =========================================================
document.addEventListener('keydown', (e) => {
  if (document.getElementById('quiz-overlay').style.display !== 'flex') return;
  if (quizApp.quizState !== 'active') return;
  const tag = document.activeElement && document.activeElement.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA') return;

  switch (e.key) {
    case 'ArrowLeft':
      if (quizApp.currentIndex > 0) quizApp.prev();
      break;
    case 'ArrowRight':
    case 'Enter':
      const currentAnswer = quizApp.userAnswers[quizApp.currentIndex];
      if (currentAnswer !== null && quizApp.currentIndex < quizApp.questions.length - 1) {
        quizApp.next();
      }
      break;
    case 'b':
    case 'B':
      quizApp.toggleBookmark();
      break;
    case 'f':
    case 'F':
      quizApp.toggleFlag();
      break;
    case 'g':
    case 'G':
      quizApp.toggleQuestionGrid();
      break;
  }
});

// Auto-save progress every 30 seconds
setInterval(() => {
  if (quizApp.quizState === 'active') {
    quizApp.saveProgress();
  }
}, 30000);

// Save progress on page unload
window.addEventListener('beforeunload', () => {
  if (quizApp.quizState === 'active') {
    quizApp.saveProgress();
  }
});
