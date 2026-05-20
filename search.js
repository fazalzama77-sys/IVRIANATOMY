// =========================================================
// GLOBAL SEARCH ENGINE - Site-wide Content Search
// Indexes atlasData, anatomyData, and quizBank
// =========================================================

const searchEngine = {
    index: [],
    overlay: null,
    isOpen: false,

    // ==================== INITIALIZATION ====================

    init: () => {
        searchEngine.buildIndex();
        searchEngine.setupKeyboardShortcut();
    },

    buildIndex: () => {
        searchEngine.index = [];

        // 1. Index Atlas Data (atlasData[Region][System] = [{title, ...}])
        if (typeof atlasData !== 'undefined') {
            Object.keys(atlasData).forEach(region => {
                const systems = atlasData[region];
                if (typeof systems !== 'object') return;
                Object.keys(systems).forEach(system => {
                    const items = systems[system];
                    if (!Array.isArray(items)) return;
                    items.forEach(item => {
                        searchEngine.index.push({
                            type: 'atlas',
                            title: item.title || '',
                            description: searchEngine.extractText(item),
                            region: region,
                            system: system,
                            icon: 'fa-star',
                            color: 'var(--atlas-gold)',
                            navigateTo: { view: 'atlas', region, system, topic: item.title }
                        });
                    });
                });
            });
        }

        // 2. Index Why Section Data (anatomyData = [{title, why, ...}])
        if (typeof anatomyData !== 'undefined' && Array.isArray(anatomyData)) {
            anatomyData.forEach(item => {
                searchEngine.index.push({
                    type: 'why',
                    title: item.title || '',
                    description: item.why || '',
                    region: item.category || '',
                    system: item.comparison || '',
                    icon: 'fa-question',
                    color: 'var(--why-cyan)',
                    navigateTo: { view: 'why', id: item.id, title: item.title }
                });
            });
        }

        // 3. Index Quiz Bank (quizBank[Region][System] = {mcq:[], tf:[], fib:[]})
        if (typeof quizBank !== 'undefined') {
            Object.keys(quizBank).forEach(region => {
                Object.keys(quizBank[region]).forEach(system => {
                    const section = quizBank[region][system];
                    ['mcq', 'tf', 'fib'].forEach(mode => {
                        if (section[mode] && Array.isArray(section[mode])) {
                            section[mode].forEach(q => {
                                searchEngine.index.push({
                                    type: 'quiz',
                                    title: q.q || '',
                                    description: q.e || '',
                                    region: region,
                                    system: system,
                                    mode: mode.toUpperCase(),
                                    icon: 'fa-brain',
                                    color: '#bd93f9',
                                    navigateTo: { view: 'quiz', region, system, mode }
                                });
                            });
                        }
                    });
                });
            });
        }
    },

    extractText: (item) => {
        const parts = [];
        if (item.subtitle) parts.push(item.subtitle);
        if (item.description) parts.push(item.description);
        if (item.details && Array.isArray(item.details)) {
            item.details.forEach(d => {
                if (d.text) parts.push(d.text);
                if (d.points && Array.isArray(d.points)) {
                    d.points.forEach(p => {
                        if (typeof p === 'string') parts.push(p);
                        else if (p.text) parts.push(p.text);
                    });
                }
            });
        }
        if (item.clinical) parts.push(item.clinical);
        return parts.join(' ').substring(0, 300);
    },

    // ==================== SEARCH LOGIC ====================

    performSearch: (query) => {
        if (!query || query.trim().length < 2) return [];

        const terms = query.toLowerCase().trim().split(/\s+/);

        const scored = searchEngine.index.map(item => {
            const titleLower = item.title.toLowerCase();
            const descLower = item.description.toLowerCase();
            const regionLower = item.region.toLowerCase();
            const systemLower = item.system.toLowerCase();
            let score = 0;

            terms.forEach(term => {
                // Title match (highest weight)
                if (titleLower === term) score += 100;
                else if (titleLower.startsWith(term)) score += 80;
                else if (titleLower.includes(term)) score += 60;

                // Region/System match
                if (regionLower.includes(term)) score += 30;
                if (systemLower.includes(term)) score += 30;

                // Description match
                if (descLower.includes(term)) score += 20;
            });

            return { ...item, score };
        });

        return scored
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 30);
    },

    // ==================== UI ====================

    toggle: () => {
        if (searchEngine.isOpen) {
            searchEngine.closeOverlay();
        } else {
            searchEngine.openOverlay();
        }
    },

    openOverlay: () => {
        searchEngine.isOpen = true;
        const overlay = document.getElementById('search-overlay');
        overlay.style.display = 'flex';
        requestAnimationFrame(() => {
            overlay.classList.add('active');
            document.getElementById('search-input').focus();
        });
    },

    closeOverlay: () => {
        searchEngine.isOpen = false;
        const overlay = document.getElementById('search-overlay');
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
            document.getElementById('search-input').value = '';
            document.getElementById('search-results').innerHTML = searchEngine.getEmptyState();
        }, 300);
    },

    setupKeyboardShortcut: () => {
        document.addEventListener('keydown', (e) => {
            // Ctrl+K or Cmd+K to open search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                searchEngine.toggle();
            }
            // Escape to close
            if (e.key === 'Escape' && searchEngine.isOpen) {
                searchEngine.closeOverlay();
            }
        });
    },

    onInput: (e) => {
        const query = e.target.value;
        const resultsContainer = document.getElementById('search-results');

        if (query.trim().length < 2) {
            resultsContainer.innerHTML = searchEngine.getEmptyState();
            return;
        }

        const results = searchEngine.performSearch(query);
        resultsContainer.innerHTML = searchEngine.renderResults(results, query);
    },

    getEmptyState: () => {
        return `
      <div class="search-empty">
        <i class="fas fa-search" style="font-size: 2.5rem; margin-bottom: 15px; opacity: 0.3;"></i>
        <p>Search for bones, muscles, structures, quiz questions...</p>
        <p style="font-size: 0.8rem; opacity: 0.5; margin-top: 8px;">
          <kbd>Ctrl</kbd> + <kbd>K</kbd> to toggle search
        </p>
      </div>
    `;
    },

    renderResults: (results, query) => {
        if (results.length === 0) {
            return `
        <div class="search-empty">
          <i class="fas fa-inbox" style="font-size: 2.5rem; margin-bottom: 15px; opacity: 0.3;"></i>
          <p>No results found for "<strong>${query}</strong>"</p>
          <p style="font-size: 0.8rem; opacity: 0.5; margin-top: 8px;">Try different keywords</p>
        </div>
      `;
        }

        // Group by type
        const groups = { atlas: [], why: [], quiz: [] };
        results.forEach(r => groups[r.type].push(r));

        let html = `<div class="search-result-count">${results.length} result${results.length !== 1 ? 's' : ''} found</div>`;

        if (groups.atlas.length > 0) {
            html += `<div class="search-group">
        <div class="search-group-title"><i class="fas fa-star" style="color: var(--atlas-gold);"></i> Atlas — Regional Anatomy</div>
        ${groups.atlas.map(r => searchEngine.renderCard(r, query)).join('')}
      </div>`;
        }

        if (groups.why.length > 0) {
            html += `<div class="search-group">
        <div class="search-group-title"><i class="fas fa-question" style="color: var(--why-cyan);"></i> The Why — Biomechanics</div>
        ${groups.why.map(r => searchEngine.renderCard(r, query)).join('')}
      </div>`;
        }

        if (groups.quiz.length > 0) {
            html += `<div class="search-group">
        <div class="search-group-title"><i class="fas fa-brain" style="color: #bd93f9;"></i> Quiz Bank</div>
        ${groups.quiz.map(r => searchEngine.renderCard(r, query)).join('')}
      </div>`;
        }

        return html;
    },

    renderCard: (result, query) => {
        const highlightedTitle = searchEngine.highlight(result.title, query);
        const desc = result.description.length > 120
            ? result.description.substring(0, 120) + '...'
            : result.description;
        const highlightedDesc = searchEngine.highlight(desc, query);

        const badges = `
      <span class="search-badge region-badge">${result.region}</span>
      <span class="search-badge system-badge">${result.system}</span>
      ${result.mode ? `<span class="search-badge mode-badge">${result.mode}</span>` : ''}
    `;

        return `
      <div class="search-result-card" onclick='searchEngine.navigateTo(${JSON.stringify(result.navigateTo)})'>
        <div class="search-result-header">
          <i class="fas ${result.icon}" style="color: ${result.color}; font-size: 1.1rem;"></i>
          <span class="search-result-title">${highlightedTitle}</span>
        </div>
        <div class="search-result-desc">${highlightedDesc}</div>
        <div class="search-result-badges">${badges}</div>
      </div>
    `;
    },

    highlight: (text, query) => {
        if (!query) return text;
        const terms = query.trim().split(/\s+/);
        let result = text;
        terms.forEach(term => {
            const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            result = result.replace(regex, '<mark>$1</mark>');
        });
        return result;
    },

    // ==================== NAVIGATION ====================

    navigateTo: (target) => {
        searchEngine.closeOverlay();

        if (target.view === 'atlas') {
            // Navigate to atlas content using app.js API
            app.loadView('atlas');
            setTimeout(() => {
                app.selectRegion(target.region);
                setTimeout(() => {
                    app.selectSystem(target.system);

                    // Try to click the specific topic button
                    if (target.topic) {
                        setTimeout(() => {
                            const topicBtns = document.querySelectorAll('.topic-btn');
                            topicBtns.forEach(btn => {
                                if (btn.textContent.trim().toUpperCase() === target.topic.toUpperCase()) {
                                    btn.click();
                                }
                            });
                        }, 300);
                    }
                }, 150);
            }, 100);
        } else if (target.view === 'why') {
            // Navigate to why section
            app.loadView('why');
            setTimeout(() => {
                const cards = document.querySelectorAll('#why-view .card');
                cards.forEach(card => {
                    const titleEl = card.querySelector('.card-title');
                    if (titleEl && titleEl.textContent.includes(target.title)) {
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        card.style.boxShadow = '0 0 30px rgba(0, 242, 255, 0.4)';
                        card.style.borderColor = 'var(--why-cyan)';
                        setTimeout(() => {
                            card.style.boxShadow = '';
                            card.style.borderColor = '';
                        }, 3000);
                    }
                });
            }, 500);
        } else if (target.view === 'quiz') {
            // Open quiz menu and pre-select region/system
            app.loadView('atlas');
            setTimeout(() => {
                quizApp.openMenu();
                setTimeout(() => {
                    quizApp.selectRegion(target.region);
                    setTimeout(() => {
                        quizApp.selectSystem(target.system);
                    }, 100);
                }, 100);
            }, 100);
        }
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure data files are loaded
    setTimeout(() => searchEngine.init(), 500);
});
