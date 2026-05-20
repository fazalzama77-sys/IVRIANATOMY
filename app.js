// =========================================================
// DIGITAL CORTEX - APPLICATION LOGIC
// Phase 2: Elite Mode + Regional Anatomy Expansion
// =========================================================

const app = {
    state: {
        view: 'landing',
        region: null,
        system: null,
        eliteMode: false
    },

    init: () => {
        const savedTheme = localStorage.getItem('ivri-theme');
        if (savedTheme === 'professional') {
            document.body.classList.add('professional-mode');
            const btnText = document.getElementById('theme-text');
            if (btnText) btnText.innerText = 'Student Mode';
        }

        const savedElite = localStorage.getItem('ivri-elite');
        if (savedElite === 'true') {
            app.state.eliteMode = true;
        }

        // ---- Service worker registration (offline / PWA, silent auto-update) ----
        // The SW now self-activates on install (calls skipWaiting() itself) and
        // claims existing clients on activate. So a new version takes over
        // transparently — no banner, no surprise reloads. Visitors get the
        // latest site bytes on their next natural page load.
        if ('serviceWorker' in navigator && location.protocol !== 'file:') {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('./service-worker.js')
                    .then((registration) => {
                        registration.update().catch(() => { });
                        // Re-check for updates every 60 minutes while tab is open
                        setInterval(() => {
                            registration.update().catch(() => { });
                        }, 60 * 60 * 1000);
                    })
                    .catch((err) => console.warn('SW registration failed:', err.message));
            });
        }

        // ---- Hash routing ----
        window.addEventListener('hashchange', () => app.routeFromHash());
        // Defer first route until DOM ready (data files loaded via script tags)
        setTimeout(() => app.routeFromHash(), 0);
    },

    // ============== HASH ROUTING ==============
    // Hash format examples:
    //   #/landing
    //   #/atlas
    //   #/atlas/Forelimb
    //   #/atlas/Forelimb/Osteology
    //   #/atlas/Forelimb/Osteology/2          (open detail at index 2)
    //   #/why  | #/dashboard | #/bookmarks
    routeFromHash: () => {
        const raw = (location.hash || '').replace(/^#\/?/, '');
        if (!raw) return; // no hash → leave landing as-is
        const parts = raw.split('/').map(decodeURIComponent);
        const view = parts[0];

        if (view === 'why' || view === 'dashboard' || view === 'landing') {
            if (app.state.view !== view) app._loadViewInternal(view);
            return;
        }
        if (view === 'bookmarks') {
            app._loadViewInternal('atlas');
            app.showBookmarks();
            return;
        }
        if (view === 'highlights') {
            app._loadViewInternal('atlas');
            app.showHighlights();
            return;
        }
        if (view === 'notes') {
            app._loadViewInternal('atlas');
            app.showNotes();
            return;
        }
        if (view === 'atlas') {
            app._loadViewInternal('atlas');
            const region = parts[1] || null;
            const system = parts[2] || null;
            const idx = parts[3] != null ? parseInt(parts[3], 10) : null;
            app.state.region = (region && atlasData && atlasData[region]) ? region : null;
            app.state.system = (system && app.state.region && atlasData[app.state.region][system]) ? system : null;

            if (app.state.region && app.state.system) {
                document.getElementById('atlas-selector').style.display = 'none';
                document.getElementById('atlas-content').style.display = 'grid';
                document.getElementById('atlas-crumb').innerHTML =
                    `ATLAS > ${app.state.region.toUpperCase()} > ${app.state.system.toUpperCase()}`;
                app.renderTopicList();

                const eliteBtn = document.getElementById('elite-toggle');
                if (eliteBtn) eliteBtn.style.display = 'flex';

                if (Number.isInteger(idx) && idx >= 0) {
                    setTimeout(() => {
                        const btn = document.querySelector(`.topic-btn[data-index="${idx}"]`);
                        if (btn) app.renderDetail(idx, btn);
                    }, 30);
                }
            } else {
                app.renderAtlasSelector();
            }
            return;
        }
    },

    setHash: (hash) => {
        // Update without triggering hashchange loop
        if (location.hash !== hash) {
            history.pushState(null, '', hash);
        }
        // Keep document.title in sync with current location for SEO + bookmark sanity
        app.updatePageTitle();
    },

    // Builds a descriptive <title> from current state — helps SEO + browser tabs
    updatePageTitle: () => {
        const SITE = 'IVRI Anatomy';
        const parts = [];
        if (app.state.view === 'atlas') {
            if (app.state.region) parts.push(app.state.region);
            if (app.state.system) parts.push(app.state.system);
            parts.push('Atlas');
        } else if (app.state.view === 'why') {
            parts.push('Biomechanics');
        } else if (app.state.view === 'dashboard') {
            parts.push('Dashboard');
        } else if (app.state.view === 'landing') {
            // Default site title
            document.title = `${SITE} | Exploring Anatomy through Technology`;
            return;
        }
        document.title = (parts.length ? parts.join(' · ') + ' · ' : '') + SITE;
    },

    toggleTheme: () => {
        document.body.classList.toggle('professional-mode');
        const isPro = document.body.classList.contains('professional-mode');
        localStorage.setItem('ivri-theme', isPro ? 'professional' : 'neon');

        const btnText = document.getElementById('theme-text');
        if (btnText) {
            btnText.innerText = isPro ? 'Student Mode' : 'Professional Mode';
        }
        showToast(isPro ? 'Professional mode on' : 'Student mode on', 'info', 'fa-palette');
    },

    toggleElite: () => {
        app.state.eliteMode = !app.state.eliteMode;
        localStorage.setItem('ivri-elite', app.state.eliteMode);

        const eliteBtn = document.getElementById('elite-toggle');
        const eliteText = document.getElementById('elite-text');

        if (app.state.eliteMode) {
            if (eliteBtn) eliteBtn.classList.add('active');
            if (eliteText) eliteText.innerText = 'Standard View';
            showToast('Elite mode activated', 'info', 'fa-star');
        } else {
            if (eliteBtn) eliteBtn.classList.remove('active');
            if (eliteText) eliteText.innerText = 'Elite View';
            showToast('Elite mode off', 'info', 'fa-star');
        }

        const activeBtn = document.querySelector('.topic-btn.active');
        if (activeBtn) {
            const index = parseInt(activeBtn.dataset.index);
            if (!isNaN(index)) app.renderDetail(index, activeBtn);
        }
    },

    loadView: (viewName) => {
        app._loadViewInternal(viewName);
        // Reflect in URL so refresh / Back work
        app.setHash('#/' + viewName);
    },

    // Internal: switches the visible section without touching the hash.
    _loadViewInternal: (viewName) => {
        document.querySelectorAll('.view-section').forEach(el => {
            el.classList.remove('active');
            setTimeout(() => {
                if (!el.classList.contains('active')) el.style.display = 'none';
            }, 500);
        });

        const target = document.getElementById(viewName + '-view');
        if (!target) return;
        target.style.display = 'block';
        setTimeout(() => target.classList.add('active'), 10);

        app.state.view = viewName;
        window.scrollTo(0, 0);

        if (viewName === 'atlas') {
            // Reset to selector unless hash is restoring deeper state
            app.state.region = null;
            app.state.system = null;
            app.renderAtlasSelector();
        }
        if (viewName === 'dashboard' && typeof dashboard !== 'undefined') dashboard.render();
        if (viewName === 'why' && typeof renderCards === 'function' && typeof anatomyData !== 'undefined') {
            renderCards(anatomyData);
        }
    },

    // REGIONAL ANATOMY NAVIGATION
    renderAtlasSelector: () => {
        const grid = document.getElementById('atlas-selector');
        const breadcrumb = document.getElementById('atlas-crumb');
        const eliteBtn = document.getElementById('elite-toggle');

        if (eliteBtn) {
            if (app.state.system) {
                eliteBtn.style.display = 'flex';
                const eliteText = document.getElementById('elite-text');
                if (app.state.eliteMode) {
                    eliteBtn.classList.add('active');
                    if (eliteText) eliteText.innerText = 'Standard View';
                } else {
                    eliteBtn.classList.remove('active');
                    if (eliteText) eliteText.innerText = 'Elite View';
                }
            } else {
                eliteBtn.style.display = 'none';
            }
        }

        grid.style.display = 'grid';
        document.getElementById('atlas-content').style.display = 'none';

        // LEVEL 1: Region Selection (Forelimb, Hindlimb, etc.)
        if (!app.state.region) {
            breadcrumb.innerHTML = "ATLAS > SELECT REGION";
            grid.innerHTML = Object.keys(atlasData).map(region => {
                const icon = app.getRegionIcon(region);
                const stats = app.getRegionReadStats(region);
                const progressHtml = stats.total > 0 ? `
                    <div class="card-progress-container">
                        <div class="card-progress-bar">
                            <div class="card-progress-fill" style="width: ${stats.percent}%"></div>
                        </div>
                        <div class="card-progress-text">
                            <span>PROGRESS</span>
                            <span>${stats.percent}%</span>
                        </div>
                    </div>
                ` : '';
                return `
                <div class="portal-card card-atlas" style="width: 280px; height: 300px;" onclick="app.selectRegion('${region}')">
                    <i class="fas ${icon} orb-icon" style="color: var(--atlas-gold); font-size: 3rem; margin-bottom: 15px; z-index: 2;"></i>
                    <div class="card-label" style="font-size: 1.4rem; font-weight: 800; text-align: center; z-index: 2;">${region}</div>
                    <div class="card-sub" style="margin-bottom: 15px; z-index: 2;">REGIONAL ANATOMY MODULE</div>
                    ${progressHtml}
                </div>
            `}).join('');
        }
        // LEVEL 2: System Selection (Osteology, Myology, etc.)
        else if (!app.state.system) {
            breadcrumb.innerHTML = `ATLAS > ${app.state.region.toUpperCase()} > SELECT SYSTEM`;
            const systems = atlasData[app.state.region];
            grid.innerHTML = Object.keys(systems).map(sys => {
                const sysIcon = app.getSystemIcon(sys);
                const count = systems[sys].length;
                const stats = app.getReadStats(app.state.region, sys);
                const progressHtml = stats.total > 0 ? `
                    <div class="card-progress-container">
                        <div class="card-progress-bar">
                            <div class="card-progress-fill" style="width: ${stats.percent}%"></div>
                        </div>
                        <div class="card-progress-text">
                            <span>PROGRESS</span>
                            <span>${stats.percent}%</span>
                        </div>
                    </div>
                ` : '';
                return `
                <div class="portal-card card-why" style="width: 280px; height: 300px;" onclick="app.selectSystem('${sys}')">
                    <i class="fas ${sysIcon} orb-icon" style="color: var(--why-cyan); font-size: 3rem; margin-bottom: 15px; z-index: 2;"></i>
                    <div class="card-label" style="font-size: 1.4rem; font-weight: 800; text-align: center; z-index: 2;">${sys}</div>
                    <div class="card-sub" style="margin-bottom: 15px; z-index: 2;">${count} STRUCTURES</div>
                    ${progressHtml}
                </div>
            `}).join('');
        }
    },

    getRegionIcon: (region) => {
        const icons = {
            "Introduction": "fa-graduation-cap",
            "Forelimb": "fa-hand-point-up",
            "Hindlimb & Pelvis": "fa-shoe-prints",
            "Thorax": "fa-lungs",
            "Abdomen": "fa-prescription-bottle-alt",
            "Head & Neck": "fa-head-side-virus",
            "Histology": "fa-microscope",
            "Embryology": "fa-baby"
        };
        return icons[region] || "fa-bone";
    },

    getSystemIcon: (system) => {
        const icons = {
            "Osteology": "fa-bone",
            "Myology": "fa-running",
            "Arthrology": "fa-link",
            "Neurology": "fa-brain",
            "Angiology": "fa-heartbeat",
            "Splanchnology": "fa-lungs",
            "General Anatomy": "fa-compass",
            "General Osteology": "fa-bone",
            "General Arthrology": "fa-link",
            "General Myology": "fa-running",
            "General Angiology": "fa-heartbeat",
            "General Neurology": "fa-brain",
            "General Aesthesiology": "fa-eye",
            "General Splanchnology": "fa-lungs",
            "Surface Anatomy": "fa-male",
            "Imaging Principles": "fa-x-ray",
            "Cytology": "fa-atom",
            "Basic Tissues": "fa-th",
            "Blood & Bone Marrow": "fa-tint",
            "Digestive System": "fa-utensils",
            "Other Systems": "fa-project-diagram",
            "Gametogenesis & Fertilization": "fa-egg",
            "Cleavage, Blastulation & Gastrulation": "fa-circle-notch",
            "Foetal Membranes & Placenta": "fa-baby-carriage",
            "Germ Layers & Derivatives": "fa-layer-group",
            "Organ Development": "fa-seedling",
            "Twinning & Anomalies": "fa-clone"
        };
        return icons[system] || "fa-book-medical";
    },

    selectRegion: (region) => {
        app.state.region = region;
        app.setHash(`#/atlas/${encodeURIComponent(region)}`);
        app.renderAtlasSelector();
    },

    selectSystem: (system) => {
        app.state.system = system;
        app.setHash(`#/atlas/${encodeURIComponent(app.state.region)}/${encodeURIComponent(system)}`);
        document.getElementById('atlas-selector').style.display = 'none';
        document.getElementById('atlas-content').style.display = 'grid';
        document.getElementById('atlas-crumb').innerHTML = `ATLAS > ${app.state.region.toUpperCase()} > ${system.toUpperCase()}`;
        app.renderTopicList();

        const eliteBtn = document.getElementById('elite-toggle');
        if (eliteBtn) {
            eliteBtn.style.display = 'flex';
            const eliteText = document.getElementById('elite-text');
            if (app.state.eliteMode) {
                eliteBtn.classList.add('active');
                if (eliteText) eliteText.innerText = 'Standard View';
            } else {
                eliteBtn.classList.remove('active');
                if (eliteText) eliteText.innerText = 'Elite View';
            }
        }
    },

    atlasBack: () => {
        if (document.getElementById('atlas-content').style.display === 'grid') {
            app.state.system = null;
            app.setHash(app.state.region ? `#/atlas/${encodeURIComponent(app.state.region)}` : '#/atlas');
            app.renderAtlasSelector();
        } else if (app.state.region) {
            app.state.region = null;
            app.setHash('#/atlas');
            app.renderAtlasSelector();
        } else {
            app.loadView('landing');
        }
    },

    renderTopicList: () => {
        const list = document.getElementById('topic-list');
        // Safety check
        if (!app.state.region || !app.state.system || !atlasData[app.state.region][app.state.system]) {
            list.innerHTML = '<div style="padding:20px; color:var(--text-mute);">No data available for this section.</div>';
            return;
        }

        const data = atlasData[app.state.region][app.state.system];
        list.innerHTML = data.map((item, index) => {
            const id = app.bookmarkId(app.state.region, app.state.system, index);
            const star = app.isBookmarked(id) ? '<i class="fas fa-star bm-star" title="Bookmarked"></i> ' : '';
            const readTick = app.isRead(id) ? '<i class="fas fa-check-circle read-tick" title="Read"></i> ' : '';
            const readClass = app.isRead(id) ? ' is-read' : '';
            return `
                <button class="topic-btn${readClass}" data-index="${index}" onclick="app.renderDetail(${index}, this)">${readTick}${star}${item.title.toUpperCase()}</button>
            `;
        }).join('');
        // Refresh the progress badge whenever the list re-renders
        app.updateReadProgressBadge();
    },

    renderDetail: (index, btnElement) => {
        const contentArea = document.getElementById('detail-panel');
        contentArea.style.animation = 'none';
        setTimeout(() => {
            contentArea.style.animation = 'contentSlide 0.4s ease-out';
        }, 10);

        document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
        btnElement.classList.add('active');

        // Safety check
        if (!app.state.region || !app.state.system) return;

        const data = atlasData[app.state.region][app.state.system];
        if (!data || !data[index]) return;

        const item = data[index];
        const panel = document.getElementById('detail-panel');

        // Update URL so refresh / Back works on this exact topic
        app.setHash(`#/atlas/${encodeURIComponent(app.state.region)}/${encodeURIComponent(app.state.system)}/${index}`);

        // Override page title to include the structure name for sharper bookmarks/sharing
        document.title = `${item.title} · ${app.state.system} · ${app.state.region} · IVRI Anatomy`;

        // ELITE MODE LOGIC: Use eliteDesc if available and eliteMode is ON
        const useElite = app.state.eliteMode && item.eliteDesc;
        const displayContent = useElite ? item.eliteDesc : item.desc;
        const modeLabel = useElite ? 'COMPREHENSIVE ACADEMIC VIEW' : 'STANDARD MORPHOLOGY';
        const modeBadge = useElite ? '<span style="background:var(--why-cyan); color:var(--void); padding:2px 8px; border-radius:4px; font-size:0.8rem; margin-left:10px;">ELITE MODE</span>' : '';

        // Bookmark button
        const bmId = app.bookmarkId(app.state.region, app.state.system, index);
        const bookmarked = app.isBookmarked(bmId);
        const bmBtn = `<button class="bm-btn ${bookmarked ? 'active' : ''}" onclick="app.toggleBookmark(${index}, this)" title="${bookmarked ? 'Remove bookmark' : 'Bookmark this topic'}" aria-label="Toggle bookmark"><i class="fas fa-star"></i> <span>${bookmarked ? 'Bookmarked' : 'Bookmark'}</span></button>`;

        // Mark as Read button
        const isReadNow = app.isRead(bmId);
        const readBtn = `<button class="read-btn ${isReadNow ? 'active' : ''}" onclick="app.toggleRead(${index}, this)" title="${isReadNow ? 'Mark as unread' : 'Mark as read'}" aria-label="Toggle read status"><i class="${isReadNow ? 'fas fa-check-circle' : 'far fa-circle'}"></i> <span>${isReadNow ? 'Read' : 'Mark as Read'}</span></button>`;

        // Share button — uses native Web Share API on mobile, falls back to copy-link on desktop
        const shareBtn = `<button class="share-btn" onclick="app.shareCurrent(${index})" title="Share this topic" aria-label="Share"><i class="fas fa-share-alt"></i> <span>Share</span></button>`;

        // Highlight count badge on the button (with per-colour breakdown if any highlights exist)
        const hlList = app.getHighlightsForTopic(bmId);
        const hlCount = hlList.length;
        const hlBreakdown = app._formatHighlightBreakdown(hlList);
        const hlBtn = `<button class="hl-btn ${hlCount ? 'active' : ''}" onclick="app.toggleHighlightMode(this)" title="Highlight important text (select text + tap this)" aria-label="Toggle highlight mode"><i class="fas fa-highlighter"></i> <span>Highlight${hlCount ? ` (${hlBreakdown})` : ''}</span></button>`;

        // Notes button (count of notes saved against this topic)
        const noteCount = app.getNotesForTopic(bmId).length;
        const noteBtn = `<button class="note-btn ${noteCount ? 'active' : ''}" onclick="app.openNoteDialog(${index})" title="Add a typed note to this topic" aria-label="Add note"><i class="fas fa-sticky-note"></i> <span>Note${noteCount ? ` (${noteCount})` : ''}</span></button>`;

        // Build content based on available data
        let contentHtml = `
            <div class="detail-header">
                <div>
                    <div class="h-title">${item.title} ${modeBadge}</div>
                    <span class="h-sub">/// ${modeLabel} // ${app.state.system.toUpperCase()}</span>
                </div>
                <div class="detail-header-actions">
                    ${hlBtn}
                    ${noteBtn}
                    ${shareBtn}
                    ${readBtn}
                    ${bmBtn}
                </div>
            </div>

            <div class="feature-box" style="animation: detailFade 0.5s ease; background:rgba(255,255,255,0.03); padding:20px; border-radius:8px; margin-bottom:20px;">
                <strong style="color:var(--atlas-gold); display:block; margin-bottom:10px; font-family:var(--font-code);">
                    ${useElite ? '📚 DETAILED DESCRIPTION:' : '📝 STANDARD DESCRIPTION:'}
                </strong>
                <div style="line-height:1.8; color:var(--text-main);">
                    ${displayContent}
                </div>
            </div>
        `;

        // Comparative Analysis Table (if exists)
        if (item.comparative && item.comparative.length > 0) {
            contentHtml += `
                <h3 style="color:var(--atlas-gold); font-family:var(--font-code); margin-top:30px; animation: detailFade 0.6s ease;">// COMPARATIVE ANALYSIS</h3>
                <table class="comp-table" style="animation: detailFade 0.7s ease; width:100%; border-collapse:collapse;">
                    ${item.comparative.map(c => `
                        <tr style="border-bottom:1px solid var(--border);">
                            <td class="species-label" style="padding:15px; width:140px; font-weight:bold; color:var(--atlas-gold); font-family:var(--font-code);">${c.species.toUpperCase()}</td>
                            <td style="padding:15px; color:var(--text-mute); line-height:1.6;">${c.note}</td>
                        </tr>
                    `).join('')}
                </table>
            `;
        }

        // Clinical Correlation (if exists)
        if (item.clinical) {
            contentHtml += `
                <div style="margin-top:30px; border:1px dashed var(--why-cyan); padding:20px; border-radius:8px; animation: detailFade 0.8s ease; background:rgba(0,242,255,0.02);">
                    <strong style="color:var(--why-cyan); font-family:var(--font-code); display:block; margin-bottom:10px;">
                        <i class="fas fa-stethoscope"></i> CLINICAL CORRELATION
                    </strong>
                    <p style="margin-top:10px; color:var(--text-main); line-height:1.7;">${item.clinical}</p>
                </div>
            `;
        }

        // Visual reference (real image if present, placeholder fallback if only imgCode exists)
        if (item.img || item.imgCode) {
            contentHtml += `
                <div style="margin-top:30px; animation: detailFade 0.9s ease;">
                    <strong style="color:var(--text-mute); font-family:var(--font-code); display:block; margin-bottom:10px;">
                        <i class="fas fa-image"></i> VISUAL REFERENCE
                    </strong>
                    ${item.img ? `
                        <figure class="img-container atlas-image-frame">
                            <img class="atlas-reference-image" src="${item.img}" alt="${item.imgAlt || item.title + ' visual reference'}" loading="lazy">
                            ${item.imgCaption ? `<figcaption class="atlas-image-caption">${item.imgCaption}</figcaption>` : ''}
                        </figure>
                    ` : `
                        <div class="img-container">
                            <div class="img-placeholder-text">
                                <i class="fas fa-image" style="font-size:2rem; margin-bottom:10px;"></i>
                                <div>Image: ${item.imgCode}</div>
                                <div style="font-size:0.8rem; margin-top:5px;">(Integration ready)</div>
                            </div>
                        </div>
                    `}
                </div>
            `;
        }

        // If Elite mode is on but no elite content exists
        if (app.state.eliteMode && !item.eliteDesc) {
            contentHtml += `
                <div style="margin-top:20px; padding:15px; background:rgba(255,215,0,0.1); border-radius:8px; border:1px solid var(--atlas-gold); color:var(--atlas-gold); font-size:0.9rem; animation: detailFade 1s ease;">
                    <i class="fas fa-info-circle"></i> <strong>Elite Mode Active:</strong> Detailed academic content for this structure is being compiled. Showing standard view instead.
                </div>
            `;
        }

        // Append rendered notes block at the end (if any)
        contentHtml += app._renderNotesBlock(bmId);

        panel.innerHTML = contentHtml;

        // Decorate text with glossary tooltips (after innerHTML is set)
        if (typeof glossary !== 'undefined') {
            try { glossary.decorate(panel); } catch (e) { console.warn('Glossary decorate failed:', e.message); }
        }

        // Re-apply user highlights for this topic (find saved fragments + wrap in <mark>)
        app.applyHighlightsToPanel(bmId);
        // Anchor any notes that point at specific text fragments
        app.applyNoteAnchorsToPanel(bmId);
        // Enable selection-based highlighting + note UX on this panel
        app.attachHighlightSelectionUI(panel, bmId);
    },

    // ============== SHARE ==============
    // Shares the current structure via native share sheet (mobile)
    // OR copies a deep-link to clipboard (desktop).
    shareCurrent: async (index) => {
        if (!app.state.region || !app.state.system) return;
        const data = atlasData[app.state.region][app.state.system];
        const item = data && data[index];
        if (!item) return;
        const baseUrl = location.origin + location.pathname;
        const url = `${baseUrl}#/atlas/${encodeURIComponent(app.state.region)}/${encodeURIComponent(app.state.system)}/${index}`;
        const title = `${item.title} — IVRI Anatomy`;
        const text = `${item.title} (${app.state.system}, ${app.state.region}) — study with me on IVRI Anatomy 📖`;
        try {
            if (navigator.share) {
                await navigator.share({ title, text, url });
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(url);
                if (typeof showToast === 'function') showToast('Link copied to clipboard', 'success', 'fa-link');
            } else {
                window.prompt('Copy this link:', url);
            }
        } catch (err) {
            // User dismissed share sheet — ignore silently
            if (err && err.name !== 'AbortError' && typeof showToast === 'function') {
                showToast('Could not share', 'warning', 'fa-exclamation-circle');
            }
        }
    },

    // ============== HIGHLIGHTING (textbook-marker style) ==============
    // Storage shape:
    //   localStorage['ivri-highlights'] = {
    //     "Forelimb::Osteology::2": [
    //         { text: "blood-testis barrier", color: "yellow", t: 1700000000 }
    //     ]
    //   }
    HIGHLIGHT_KEY: 'ivri-highlights',

    _loadAllHighlights: () => {
        try { return JSON.parse(localStorage.getItem(app.HIGHLIGHT_KEY)) || {}; }
        catch { return {}; }
    },
    _saveAllHighlights: (obj) => localStorage.setItem(app.HIGHLIGHT_KEY, JSON.stringify(obj)),

    getHighlightsForTopic: (topicId) => {
        const all = app._loadAllHighlights();
        return all[topicId] || [];
    },

    saveHighlightFragment: (topicId, text, color = 'yellow') => {
        if (!text || text.trim().length < 3) return false;
        const all = app._loadAllHighlights();
        if (!all[topicId]) all[topicId] = [];
        // If this exact text is already saved, just update the colour + timestamp
        // (was returning false here, which made the visual wrap fail on re-taps).
        const existing = all[topicId].find(h => h.text === text);
        if (existing) {
            existing.color = color;
            existing.t = Date.now();
        } else {
            all[topicId].push({ text: text, color: color, t: Date.now() });
            if (all[topicId].length > 50) all[topicId] = all[topicId].slice(-50);
        }
        app._saveAllHighlights(all);
        return true;
    },

    removeHighlightFragment: (topicId, text) => {
        const all = app._loadAllHighlights();
        if (!all[topicId]) return false;
        const before = all[topicId].length;
        all[topicId] = all[topicId].filter(h => h.text !== text);
        if (all[topicId].length !== before) {
            if (all[topicId].length === 0) delete all[topicId];
            app._saveAllHighlights(all);
            return true;
        }
        return false;
    },

    // After content innerHTML is set, walk text nodes and wrap saved fragments in <mark>
    applyHighlightsToPanel: (topicId) => {
        const panel = document.getElementById('detail-panel');
        if (!panel) return;
        const highlights = app.getHighlightsForTopic(topicId);
        if (!highlights.length) return;
        // Longest first so shorter fragments don't get nested inside longer ones
        const sorted = [...highlights].sort((a, b) => b.text.length - a.text.length);
        for (const h of sorted) {
            app._wrapTextInPanel(panel, h.text, h.color || 'yellow');
        }
    },

    // Strip every <mark.user-hl> in the panel whose dataset.text equals `text`.
    // Used before re-wrapping when the user re-taps the popup on the same
    // selection (e.g. to change colour) — keeps the DOM clean.
    _unwrapMarksByText: (panel, text) => {
        if (!panel || !text) return;
        const marks = panel.querySelectorAll('mark.user-hl');
        marks.forEach(m => {
            if (m.dataset.text === text) {
                while (m.firstChild) m.parentNode.insertBefore(m.firstChild, m);
                m.remove();
            }
        });
    },

    // Attach the click-to-remove handler to a <mark> so tapping it deletes the highlight
    _attachMarkRemoveHandler: (mark) => {
        mark.title = 'Tap to remove highlight';
        mark.onclick = (e) => {
            e.stopPropagation();
            if (!app.state.region || !app.state.system) return;
            const activeBtn = document.querySelector('.topic-btn.active');
            if (!activeBtn) return;
            const idx = parseInt(activeBtn.dataset.index, 10);
            if (isNaN(idx)) return;
            const tid = app.bookmarkId(app.state.region, app.state.system, idx);
            const needle = mark.dataset.text || mark.textContent;
            if (app.removeHighlightFragment(tid, needle)) {
                if (typeof showToast === 'function') showToast('Highlight removed', 'info', 'fa-highlighter');
                // Replace the <mark> with its contents in-place (preserves any inner <b>/<i>)
                while (mark.firstChild) mark.parentNode.insertBefore(mark.firstChild, mark);
                mark.remove();
                app._refreshHighlightCountBadge(tid);
            }
        };
    },

    // Wrap a live Range (from the user's actual text selection) in a <mark>.
    // Handles both single-text-node selections AND selections that cross element
    // boundaries (e.g. across <b>, <br>, <i> tags) — the common case in our prose.
    _wrapLiveRange: (range, panel, color) => {
        if (!range || !panel.contains(range.commonAncestorContainer)) return false;
        const text = range.toString();
        if (!text) return false;
        const mark = document.createElement('mark');
        mark.className = 'user-hl hl-' + color;
        mark.dataset.text = text;
        try {
            // Fast path — works only if the range starts and ends in the same text node
            range.surroundContents(mark);
        } catch (e) {
            // Range crosses element boundaries — extract its contents (which may
            // include element fragments like a closing </b>) and re-insert wrapped.
            try {
                const contents = range.extractContents();
                mark.appendChild(contents);
                range.insertNode(mark);
            } catch (e2) {
                return false;
            }
        }
        app._attachMarkRemoveHandler(mark);
        return true;
    },

    // Wrap saved-highlight text in the panel. Tries simple text-node match first
    // (fast); falls back to a flat-text matcher that can span element boundaries
    // (so e.g. a highlight stretching across "<b>X</b> Y" survives a page reload).
    _wrapTextInPanel: (root, needle, color) => {
        if (!needle) return;
        // ---- Pass 1: simple, single-text-node match (fast path) ----
        if (app._wrapInSingleNode(root, needle, color)) return;
        // ---- Pass 2: flat-text match across element boundaries ----
        app._wrapAcrossNodes(root, needle, color);
    },

    _isSkipParent: (root, node) => {
        let p = node.parentNode;
        while (p && p !== root) {
            if (p.nodeName === 'MARK' || p.nodeName === 'BUTTON' || p.nodeName === 'A') return true;
            if (p.classList && p.classList.contains('note-anchored-icon')) return true;
            p = p.parentNode;
        }
        return false;
    },

    _wrapInSingleNode: (root, needle, color) => {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode: (node) => {
                if (app._isSkipParent(root, node)) return NodeFilter.FILTER_REJECT;
                return node.nodeValue.includes(needle) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });
        const targets = [];
        let n;
        while ((n = walker.nextNode())) targets.push(n);
        if (!targets.length) return false;
        for (const textNode of targets) {
            const parts = textNode.nodeValue.split(needle);
            if (parts.length < 2) continue;
            const frag = document.createDocumentFragment();
            parts.forEach((part, i) => {
                if (i > 0) {
                    const m = document.createElement('mark');
                    m.className = 'user-hl hl-' + color;
                    m.dataset.text = needle;
                    m.textContent = needle;
                    app._attachMarkRemoveHandler(m);
                    frag.appendChild(m);
                }
                if (part) frag.appendChild(document.createTextNode(part));
            });
            textNode.replaceWith(frag);
        }
        return true;
    },

    // Flat-text search: builds a continuous string from all eligible text nodes,
    // finds the needle, maps the offsets back to DOM nodes, then surrounds the
    // matching Range with a <mark>. This is what makes a highlight that crosses
    // a <b> or <br> tag re-apply correctly after page reload.
    _wrapAcrossNodes: (root, needle, color) => {
        const nodes = [];
        const offsets = [];
        let flat = '';
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode: (node) => app._isSkipParent(root, node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        });
        let n;
        while ((n = walker.nextNode())) {
            offsets.push(flat.length);
            nodes.push(n);
            flat += n.nodeValue;
        }
        if (!nodes.length) return false;

        // Try exact match first; if that fails, collapse whitespace and retry
        let idx = flat.indexOf(needle);
        let matchLen = needle.length;
        if (idx === -1) {
            const flatNorm = flat.replace(/\s+/g, ' ');
            const needleNorm = needle.replace(/\s+/g, ' ');
            const normIdx = flatNorm.indexOf(needleNorm);
            if (normIdx === -1) return false;
            // Map normalised index back into the original flat string by counting
            // how many original chars produced normIdx normalised chars.
            let orig = 0, norm = 0;
            while (norm < normIdx && orig < flat.length) {
                if (/\s/.test(flat[orig])) {
                    // collapse run of whitespace -> 1 char in normalised
                    while (orig < flat.length && /\s/.test(flat[orig])) orig++;
                    norm++;
                } else { orig++; norm++; }
            }
            idx = orig;
            // Determine match length in original chars
            let end = orig, normEnd = norm;
            while (normEnd < normIdx + needleNorm.length && end < flat.length) {
                if (/\s/.test(flat[end])) {
                    while (end < flat.length && /\s/.test(flat[end])) end++;
                    normEnd++;
                } else { end++; normEnd++; }
            }
            matchLen = end - orig;
        }
        const endIdx = idx + matchLen;

        // Map flat offsets back to (textNode, offset-within-node)
        let startNode = null, startOff = 0, endNode = null, endOff = 0;
        for (let i = 0; i < nodes.length; i++) {
            const nStart = offsets[i];
            const nEnd = nStart + nodes[i].nodeValue.length;
            if (startNode === null && idx >= nStart && idx <= nEnd) {
                startNode = nodes[i];
                startOff = idx - nStart;
            }
            if (endIdx >= nStart && endIdx <= nEnd) {
                endNode = nodes[i];
                endOff = endIdx - nStart;
                break;
            }
        }
        if (!startNode || !endNode) return false;

        const range = document.createRange();
        try {
            range.setStart(startNode, startOff);
            range.setEnd(endNode, endOff);
        } catch (e) { return false; }

        const mark = document.createElement('mark');
        mark.className = 'user-hl hl-' + color;
        mark.dataset.text = needle;
        try {
            range.surroundContents(mark);
        } catch (e) {
            try {
                const contents = range.extractContents();
                mark.appendChild(contents);
                range.insertNode(mark);
            } catch (e2) { return false; }
        }
        app._attachMarkRemoveHandler(mark);
        return true;
    },

    // Fixed top-of-viewport action bar that appears when user selects text in
    // the detail panel. Pinned to the top so the native browser selection
    // toolbar (Copy / Web search / Ask Claude / Read aloud / etc.) can't sit
    // on top of it — those menus appear at the selection itself, never at
    // the very top of the viewport.
    attachHighlightSelectionUI: (panel, topicId) => {
        // Remove any prior popup AND its selectionchange listener so we don't
        // leak handlers when the user navigates between topics.
        const old = document.getElementById('hl-popup');
        if (old) {
            if (old._listener) document.removeEventListener('selectionchange', old._listener);
            old.remove();
        }

        const popup = document.createElement('div');
        popup.id = 'hl-popup';
        popup.className = 'hl-popup hl-popup-top';
        popup.style.display = 'none';
        popup.innerHTML = `
            <span class="hl-popup-label"><i class="fas fa-highlighter"></i> Mark:</span>
            <button class="hl-popup-btn hl-yellow" data-color="yellow" title="Highlight yellow (important)"></button>
            <button class="hl-popup-btn hl-green"  data-color="green"  title="Highlight green (clinical)"></button>
            <button class="hl-popup-btn hl-pink"   data-color="pink"   title="Highlight pink (tricky / exam-likely)"></button>
            <button class="hl-popup-btn hl-blue"   data-color="blue"   title="Highlight blue (definition / must-memorise)"></button>
            <span class="hl-popup-sep"></span>
            <button class="hl-popup-action hl-note-action" title="Add a typed note attached to this text">
              <i class="fas fa-sticky-note"></i> Note
            </button>
            <button class="hl-popup-action hl-close-action" title="Close" aria-label="Close">
              <i class="fas fa-times"></i>
            </button>
        `;
        document.body.appendChild(popup);

        const hide = () => {
            popup.style.display = 'none';
            popup.dataset.text = '';
        };

        const onSelectionChange = () => {
            const sel = window.getSelection();
            if (!sel || sel.isCollapsed) { hide(); return; }
            const text = sel.toString().trim();
            if (text.length < 3 || text.length > 400) { hide(); return; }
            // Must be inside the detail panel
            const range = sel.getRangeAt(0);
            if (!panel.contains(range.commonAncestorContainer)) { hide(); return; }
            popup.style.display = 'flex';
            popup.dataset.text = text;
            // Stash a clone of the live Range so we can wrap it after the user
            // taps a colour button (tapping clears the selection on mobile).
            popup._range = range.cloneRange();
        };
        document.addEventListener('selectionchange', onSelectionChange);
        popup._listener = onSelectionChange;

        // Color buttons -> save + visually wrap the highlight immediately
        popup.querySelectorAll('.hl-popup-btn').forEach(btn => {
            // mousedown preventDefault keeps the selection alive long enough to
            // capture the Range (the touchstart handler used to cancel the click
            // on some mobile browsers — removed).
            btn.addEventListener('mousedown', (e) => e.preventDefault());
            btn.onclick = (e) => {
                e.preventDefault();
                const color = btn.dataset.color;
                const text = popup.dataset.text;
                const liveRange = popup._range;
                if (!text) return;
                // Save (or update colour if duplicate) AND always attempt the visual
                // wrap — never gate the wrap on the save result, otherwise duplicate
                // saves silently skip the visual update.
                app.saveHighlightFragment(topicId, text, color);
                // If the text is already wrapped (different colour, or earlier
                // failed wrap), strip the old <mark>s first so we can re-wrap clean.
                app._unwrapMarksByText(panel, text);
                const wrapped = liveRange ? app._wrapLiveRange(liveRange, panel, color) : false;
                if (!wrapped) app._wrapTextInPanel(panel, text, color);
                app._refreshHighlightCountBadge(topicId);
                if (typeof showToast === 'function') showToast('Highlighted', 'success', 'fa-highlighter');
                const sel = window.getSelection();
                if (sel) sel.removeAllRanges();
                hide();
            };
        });

        // "Note" action -> open a small dialog and save note anchored to the selection
        const noteAct = popup.querySelector('.hl-note-action');
        noteAct.addEventListener('mousedown', (e) => e.preventDefault());
        noteAct.onclick = (e) => {
            e.preventDefault();
            const text = popup.dataset.text;
            if (!text) return;
            hide();
            const sel = window.getSelection();
            if (sel) sel.removeAllRanges();
            app.openNoteDialogForAnchor(topicId, text);
        };

        const closeAct = popup.querySelector('.hl-close-action');
        closeAct.onclick = (e) => { e.preventDefault(); window.getSelection().removeAllRanges(); hide(); };
    },

    _formatHighlightBreakdown: (list) => {
        if (!list || !list.length) return '';
        const counts = {};
        for (const h of list) counts[h.color || 'yellow'] = (counts[h.color || 'yellow'] || 0) + 1;
        const order = ['yellow', 'green', 'pink', 'blue'];
        const parts = [];
        for (const c of order) if (counts[c]) parts.push(`<span class="hl-chip hl-${c}">${counts[c]}</span>`);
        return parts.join('');
    },

    _refreshHighlightCountBadge: (topicId) => {
        const btn = document.querySelector('.hl-btn');
        if (!btn) return;
        const span = btn.querySelector('span');
        const list = app.getHighlightsForTopic(topicId);
        if (span) span.innerHTML = list.length ? `Highlight (${app._formatHighlightBreakdown(list)})` : 'Highlight';
        btn.classList.toggle('active', list.length > 0);
    },

    // Header button — gives the user a hint to select text first
    toggleHighlightMode: (btn) => {
        if (typeof showToast === 'function') {
            showToast('Select any text in the article to highlight it', 'info', 'fa-highlighter');
        }
    },

    // Internal filter state for My-Highlights view (search box + color chips)
    _hlViewState: { q: '', color: 'all' },

    // Remove the selection popup + its listener (called when switching views)
    _teardownHighlightPopup: () => {
        const old = document.getElementById('hl-popup');
        if (old) {
            if (old._listener) document.removeEventListener('selectionchange', old._listener);
            old.remove();
        }
    },

    // Show ALL highlights across every topic — for end-of-revision quick review
    showHighlights: () => {
        app._teardownHighlightPopup();
        const all = app._loadAllHighlights();
        const totalCount = Object.values(all).reduce((n, arr) => n + arr.length, 0);
        document.getElementById('atlas-selector').style.display = 'none';
        document.getElementById('atlas-content').style.display = 'grid';
        document.getElementById('atlas-crumb').innerHTML = `ATLAS > MY HIGHLIGHTS (${totalCount})`;

        const sidebar = document.getElementById('topic-list');
        const panel = document.getElementById('detail-panel');

        if (!totalCount) {
            sidebar.innerHTML = '<div style="padding:20px; color:var(--text-mute);">No highlights yet. Open any atlas topic and select text to highlight.</div>';
            panel.innerHTML = '<div style="padding:40px; text-align:center; color:var(--text-mute);"><i class="fas fa-highlighter" style="font-size:3rem; opacity:.3;"></i><div style="margin-top:14px;">Your highlighted text will appear here for end-of-revision review.</div></div>';
            return;
        }

        // ---- Top toolbar: search box + color filter + export ----
        const toolbar = `
            <div class="hl-toolbar">
                <input id="hl-search" class="hl-search" type="search" placeholder="Search your highlights..." value="${app._hlViewState.q.replace(/"/g, '&quot;')}" />
                <div class="hl-filter-chips">
                  <button class="hl-filter ${app._hlViewState.color==='all'?'on':''}"   data-c="all">All</button>
                  <button class="hl-filter hl-yellow ${app._hlViewState.color==='yellow'?'on':''}" data-c="yellow"></button>
                  <button class="hl-filter hl-green  ${app._hlViewState.color==='green' ?'on':''}" data-c="green"></button>
                  <button class="hl-filter hl-pink   ${app._hlViewState.color==='pink'  ?'on':''}" data-c="pink"></button>
                  <button class="hl-filter hl-blue   ${app._hlViewState.color==='blue'  ?'on':''}" data-c="blue"></button>
                </div>
                <button class="hl-export-btn" onclick="app.exportHighlights()" title="Copy all highlights to clipboard as plain text">
                  <i class="fas fa-copy"></i> Export
                </button>
            </div>`;

        // ---- Sidebar: topic list with counts ----
        const topics = Object.keys(all).sort();
        sidebar.innerHTML = topics.map(tid => {
            const [region, system, idx] = tid.split('::');
            const item = atlasData?.[region]?.[system]?.[parseInt(idx, 10)];
            const title = item ? item.title : '(deleted)';
            const count = all[tid].length;
            return `<button class="topic-btn" onclick="app.openBookmark('${region}','${system}',${idx})"><span style="color: var(--atlas-gold);">${count}×</span> ${title}<div style="font-size:.7rem; opacity:.6;">${region} • ${system}</div></button>`;
        }).join('');

        panel.innerHTML = toolbar + '<div id="hl-results"></div>';
        app._renderHighlightResults();

        // Wire the search box and chips
        const search = document.getElementById('hl-search');
        if (search) {
            search.addEventListener('input', (e) => {
                app._hlViewState.q = e.target.value;
                app._renderHighlightResults();
            });
        }
        panel.querySelectorAll('.hl-filter').forEach(b => {
            b.onclick = () => {
                app._hlViewState.color = b.dataset.c;
                panel.querySelectorAll('.hl-filter').forEach(x => x.classList.toggle('on', x.dataset.c === b.dataset.c));
                app._renderHighlightResults();
            };
        });
    },

    _renderHighlightResults: () => {
        const container = document.getElementById('hl-results');
        if (!container) return;
        const all = app._loadAllHighlights();
        const q = (app._hlViewState.q || '').toLowerCase().trim();
        const cf = app._hlViewState.color || 'all';

        const blocks = [];
        let shown = 0;
        Object.keys(all).sort().forEach(tid => {
            const [region, system, idx] = tid.split('::');
            const item = atlasData?.[region]?.[system]?.[parseInt(idx, 10)];
            const title = item ? item.title : '(deleted)';
            let items = all[tid].slice().sort((a, b) => b.t - a.t);
            if (cf !== 'all') items = items.filter(h => (h.color || 'yellow') === cf);
            if (q) items = items.filter(h => h.text.toLowerCase().includes(q));
            if (!items.length) return;
            shown += items.length;
            blocks.push(`
              <div class="hl-group">
                <div class="hl-group-head">
                  <span class="hl-group-title">${title}</span>
                  <span class="hl-group-meta">${region} · ${system}</span>
                </div>
                ${items.map(h => `
                  <div class="hl-group-item hl-${h.color || 'yellow'}">${h.text.replace(/</g, '&lt;')}
                    ${h.note ? `<div class="hl-group-note"><i class="fas fa-sticky-note"></i> ${h.note.replace(/</g, '&lt;')}</div>` : ''}
                  </div>
                `).join('')}
              </div>`);
        });
        container.innerHTML = blocks.length
            ? blocks.join('')
            : '<div style="padding:40px; text-align:center; color:var(--text-mute);">No highlights match your filter.</div>';
    },

    // Copy every highlight to clipboard as a plain-text revision sheet
    exportHighlights: () => {
        const all = app._loadAllHighlights();
        const lines = [];
        lines.push('IVRI Anatomy - My Highlights');
        lines.push('Exported ' + new Date().toLocaleString());
        lines.push('');
        Object.keys(all).sort().forEach(tid => {
            const [region, system, idx] = tid.split('::');
            const item = atlasData?.[region]?.[system]?.[parseInt(idx, 10)];
            const title = item ? item.title : '(deleted)';
            lines.push(`### ${title}  [${region} / ${system}]`);
            all[tid].slice().sort((a, b) => b.t - a.t).forEach(h => {
                const tag = (h.color || 'yellow').toUpperCase();
                lines.push(`- [${tag}] ${h.text}`);
                if (h.note) lines.push(`    note: ${h.note}`);
            });
            lines.push('');
        });
        const text = lines.join('\n');
        const done = () => { if (typeof showToast === 'function') showToast('Highlights copied to clipboard', 'success', 'fa-copy'); };
        if (navigator.clipboard) navigator.clipboard.writeText(text).then(done).catch(() => window.prompt('Copy your highlights:', text));
        else window.prompt('Copy your highlights:', text);
    },

    // ============== NOTES (typed comments per topic) ==============
    // Storage shape:
    //   localStorage['ivri-notes'] = {
    //     "Forelimb::Osteology::2": [
    //         { text: "Important for exam!", anchor: "blood-testis barrier" | null,
    //           color: "yellow", t: 1700000000 }
    //     ]
    //   }
    NOTES_KEY: 'ivri-notes',

    _loadAllNotes: () => {
        try { return JSON.parse(localStorage.getItem(app.NOTES_KEY)) || {}; }
        catch { return {}; }
    },
    _saveAllNotes: (obj) => localStorage.setItem(app.NOTES_KEY, JSON.stringify(obj)),

    getNotesForTopic: (topicId) => {
        const all = app._loadAllNotes();
        return all[topicId] || [];
    },

    saveNote: (topicId, text, anchor, color = 'yellow') => {
        if (!text || !text.trim()) return false;
        const all = app._loadAllNotes();
        if (!all[topicId]) all[topicId] = [];
        all[topicId].push({
            text: text.trim().slice(0, 1000),
            anchor: anchor || null,
            color: color,
            t: Date.now()
        });
        if (all[topicId].length > 100) all[topicId] = all[topicId].slice(-100);
        app._saveAllNotes(all);
        return true;
    },

    updateNote: (topicId, noteTimestamp, newText) => {
        const all = app._loadAllNotes();
        if (!all[topicId]) return false;
        const n = all[topicId].find(x => x.t === noteTimestamp);
        if (!n) return false;
        n.text = (newText || '').trim().slice(0, 1000);
        app._saveAllNotes(all);
        return true;
    },

    removeNote: (topicId, noteTimestamp) => {
        const all = app._loadAllNotes();
        if (!all[topicId]) return false;
        const before = all[topicId].length;
        all[topicId] = all[topicId].filter(n => n.t !== noteTimestamp);
        if (all[topicId].length !== before) {
            if (all[topicId].length === 0) delete all[topicId];
            app._saveAllNotes(all);
            return true;
        }
        return false;
    },

    // Header "Note" button — opens a dialog to add a general note (no anchor)
    openNoteDialog: (index) => {
        if (!app.state.region || !app.state.system) return;
        const topicId = app.bookmarkId(app.state.region, app.state.system, index);
        app._showNoteEditor({ topicId, anchor: null, initialText: '', mode: 'add' });
    },

    // Called from the selection popup's "Note" action — pre-fills the anchor
    openNoteDialogForAnchor: (topicId, anchor) => {
        app._showNoteEditor({ topicId, anchor, initialText: '', mode: 'add' });
    },

    // Edit-an-existing-note dialog
    openNoteEditor: (topicId, noteTimestamp) => {
        const n = app.getNotesForTopic(topicId).find(x => x.t === noteTimestamp);
        if (!n) return;
        app._showNoteEditor({ topicId, anchor: n.anchor, initialText: n.text, mode: 'edit', editingTs: noteTimestamp, color: n.color });
    },

    _showNoteEditor: ({ topicId, anchor, initialText, mode, editingTs, color }) => {
        // Remove any existing dialog
        const old = document.getElementById('note-editor-backdrop');
        if (old) old.remove();

        const backdrop = document.createElement('div');
        backdrop.id = 'note-editor-backdrop';
        backdrop.className = 'note-editor-backdrop';
        backdrop.innerHTML = `
            <div class="note-editor">
              <div class="note-editor-head">
                <i class="fas fa-sticky-note"></i>
                <span>${mode === 'edit' ? 'Edit note' : 'Add note'}</span>
                <button class="note-editor-close" aria-label="Close"><i class="fas fa-times"></i></button>
              </div>
              ${anchor ? `<div class="note-editor-anchor">Attached to: "<em>${anchor.replace(/</g, '&lt;').slice(0, 140)}${anchor.length > 140 ? '...' : ''}</em>"</div>` : ''}
              <textarea id="note-editor-text" placeholder="Type your note... e.g. 'Important for exam!' or 'Ask sir about this'">${(initialText || '').replace(/</g, '&lt;')}</textarea>
              <div class="note-editor-colors">
                <span style="color:var(--text-mute); font-size:.8rem; margin-right:6px;">Colour:</span>
                ${['yellow','green','pink','blue'].map(c =>
                    `<button class="note-color-swatch hl-${c} ${c === (color || 'yellow') ? 'on' : ''}" data-color="${c}" aria-label="${c}"></button>`
                ).join('')}
              </div>
              <div class="note-editor-actions">
                ${mode === 'edit' ? '<button class="note-btn-delete">Delete</button>' : ''}
                <button class="note-btn-cancel">Cancel</button>
                <button class="note-btn-save"><i class="fas fa-check"></i> ${mode === 'edit' ? 'Save changes' : 'Save note'}</button>
              </div>
            </div>`;
        document.body.appendChild(backdrop);

        let chosenColor = color || 'yellow';
        backdrop.querySelectorAll('.note-color-swatch').forEach(s => {
            s.onclick = () => {
                chosenColor = s.dataset.color;
                backdrop.querySelectorAll('.note-color-swatch').forEach(x => x.classList.toggle('on', x.dataset.color === chosenColor));
            };
        });

        const close = () => backdrop.remove();
        backdrop.querySelector('.note-editor-close').onclick = close;
        backdrop.querySelector('.note-btn-cancel').onclick = close;
        backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });

        const textarea = backdrop.querySelector('#note-editor-text');
        setTimeout(() => textarea.focus(), 30);

        backdrop.querySelector('.note-btn-save').onclick = () => {
            const text = textarea.value;
            if (!text.trim()) {
                if (typeof showToast === 'function') showToast('Type something first', 'warning', 'fa-exclamation-circle');
                return;
            }
            if (mode === 'edit') {
                app.updateNote(topicId, editingTs, text);
                if (typeof showToast === 'function') showToast('Note updated', 'success', 'fa-check');
            } else {
                app.saveNote(topicId, text, anchor, chosenColor);
                if (typeof showToast === 'function') showToast('Note saved', 'success', 'fa-sticky-note');
            }
            close();
            // Re-render the current detail to show the new/updated note
            app._refreshCurrentDetail();
        };

        const delBtn = backdrop.querySelector('.note-btn-delete');
        if (delBtn) {
            delBtn.onclick = () => {
                if (!confirm('Delete this note?')) return;
                app.removeNote(topicId, editingTs);
                if (typeof showToast === 'function') showToast('Note deleted', 'info', 'fa-trash');
                close();
                app._refreshCurrentDetail();
            };
        }
    },

    // Re-render the active topic in place (used after note save/edit/delete)
    _refreshCurrentDetail: () => {
        const act = document.querySelector('.topic-btn.active');
        if (!act) return;
        const idx = parseInt(act.dataset.index, 10);
        if (isNaN(idx)) return;
        app.renderDetail(idx, act);
    },

    // Builds the "My Notes" block appended at the bottom of each topic
    _renderNotesBlock: (topicId) => {
        const notes = app.getNotesForTopic(topicId);
        if (!notes.length) return '';
        const sorted = notes.slice().sort((a, b) => b.t - a.t);
        const items = sorted.map(n => {
            const dateStr = new Date(n.t).toLocaleDateString();
            const anchorChip = n.anchor
                ? `<div class="note-anchor-chip" onclick="app._jumpToAnchor('${encodeURIComponent(n.anchor)}')"><i class="fas fa-link"></i> "${n.anchor.replace(/</g, '&lt;').slice(0, 60)}${n.anchor.length > 60 ? '...' : ''}"</div>`
                : '';
            return `
              <div class="note-card hl-${n.color || 'yellow'}" data-ts="${n.t}">
                <div class="note-card-body">${n.text.replace(/</g, '&lt;').replace(/\n/g, '<br>')}</div>
                ${anchorChip}
                <div class="note-card-foot">
                  <span class="note-card-date">${dateStr}</span>
                  <button class="note-card-btn" onclick="app.openNoteEditor('${topicId}', ${n.t})" title="Edit"><i class="fas fa-pen"></i></button>
                </div>
              </div>`;
        }).join('');
        return `
            <div class="notes-section" style="margin-top:30px; animation: detailFade 1s ease;">
              <strong style="color:var(--why-cyan); font-family:var(--font-code); display:block; margin-bottom:12px;">
                <i class="fas fa-sticky-note"></i> MY NOTES (${notes.length})
              </strong>
              <div class="note-grid">${items}</div>
            </div>`;
    },

    // After innerHTML is set, wrap text matching each note's anchor with a small ✎ icon
    applyNoteAnchorsToPanel: (topicId) => {
        const panel = document.getElementById('detail-panel');
        if (!panel) return;
        const notes = app.getNotesForTopic(topicId).filter(n => n.anchor);
        if (!notes.length) return;
        // De-duplicate by anchor text (use first/latest note per anchor for jump-to-edit)
        const anchorMap = {};
        notes.sort((a, b) => b.t - a.t).forEach(n => { if (!anchorMap[n.anchor]) anchorMap[n.anchor] = n.t; });
        // Sort longest first so longer anchors wrap before shorter ones nested inside them
        const anchors = Object.keys(anchorMap).sort((a, b) => b.length - a.length);
        for (const anchorText of anchors) {
            app._tagAnchorInPanel(panel, anchorText, anchorMap[anchorText], topicId);
        }
    },

    _tagAnchorInPanel: (root, needle, noteTs, topicId) => {
        if (!needle) return;
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                let p = node.parentNode;
                while (p && p !== root) {
                    // Skip buttons, links, our own icon. Allow walking into <mark> so
                    // a note anchored to highlighted text still gets its icon.
                    if (p.nodeName === 'BUTTON' || p.nodeName === 'A' || (p.classList && p.classList.contains('note-anchored-icon'))) return NodeFilter.FILTER_REJECT;
                    p = p.parentNode;
                }
                return node.nodeValue.includes(needle) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });
        const targets = [];
        let n;
        while ((n = walker.nextNode())) targets.push(n);
        for (const textNode of targets) {
            const idx = textNode.nodeValue.indexOf(needle);
            if (idx === -1) continue;
            // Build the icon
            const icon = document.createElement('span');
            icon.className = 'note-anchored-icon';
            icon.id = 'note-anchor-' + noteTs;
            icon.title = 'View / edit note';
            icon.innerHTML = '<i class="fas fa-sticky-note"></i>';
            icon.onclick = (e) => { e.stopPropagation(); e.preventDefault(); app.openNoteEditor(topicId, noteTs); };
            // If the text node sits inside a <mark.user-hl>, place the icon AFTER
            // the mark so it doesn't get caught by the mark's click-to-remove handler.
            const parentMark = (textNode.parentNode && textNode.parentNode.nodeName === 'MARK') ? textNode.parentNode : null;
            if (parentMark) {
                parentMark.parentNode.insertBefore(icon, parentMark.nextSibling);
            } else {
                const after = textNode.splitText(idx + needle.length);
                textNode.splitText(idx);
                after.parentNode.insertBefore(icon, after);
            }
            break; // one icon per anchor is enough
        }
    },

    // Scroll the panel to the anchored text and pulse it
    _jumpToAnchor: (encodedAnchor) => {
        const anchor = decodeURIComponent(encodedAnchor);
        const panel = document.getElementById('detail-panel');
        if (!panel) return;
        // Try to find a <mark> with this text first; fall back to walking text nodes
        const marks = panel.querySelectorAll('mark.user-hl');
        let target = null;
        for (const m of marks) { if (m.dataset.text === anchor || m.textContent === anchor) { target = m; break; } }
        if (!target) {
            // Walk text nodes
            const walker = document.createTreeWalker(panel, NodeFilter.SHOW_TEXT);
            let n;
            while ((n = walker.nextNode())) {
                if (n.nodeValue.includes(anchor)) {
                    // Find nearest element ancestor for scrolling
                    target = n.parentElement;
                    break;
                }
            }
        }
        if (target && target.scrollIntoView) {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            target.classList.add('anchor-pulse');
            setTimeout(() => target.classList.remove('anchor-pulse'), 1600);
        }
    },

    // Show ALL notes across every topic — sister view to showHighlights
    showNotes: () => {
        app._teardownHighlightPopup();
        const all = app._loadAllNotes();
        const total = Object.values(all).reduce((n, arr) => n + arr.length, 0);
        document.getElementById('atlas-selector').style.display = 'none';
        document.getElementById('atlas-content').style.display = 'grid';
        document.getElementById('atlas-crumb').innerHTML = `ATLAS > MY NOTES (${total})`;

        const sidebar = document.getElementById('topic-list');
        const panel = document.getElementById('detail-panel');

        if (!total) {
            sidebar.innerHTML = '<div style="padding:20px; color:var(--text-mute);">No notes yet. Open any atlas topic and tap the "Note" button.</div>';
            panel.innerHTML = '<div style="padding:40px; text-align:center; color:var(--text-mute);"><i class="fas fa-sticky-note" style="font-size:3rem; opacity:.3;"></i><div style="margin-top:14px;">Your typed notes will appear here.</div></div>';
            return;
        }

        const topics = Object.keys(all).sort();
        sidebar.innerHTML = topics.map(tid => {
            const [region, system, idx] = tid.split('::');
            const item = atlasData?.[region]?.[system]?.[parseInt(idx, 10)];
            const title = item ? item.title : '(deleted)';
            const count = all[tid].length;
            return `<button class="topic-btn" onclick="app.openBookmark('${region}','${system}',${idx})"><span style="color: var(--why-cyan);">${count}×</span> ${title}<div style="font-size:.7rem; opacity:.6;">${region} • ${system}</div></button>`;
        }).join('');

        panel.innerHTML = topics.map(tid => {
            const [region, system, idx] = tid.split('::');
            const item = atlasData?.[region]?.[system]?.[parseInt(idx, 10)];
            const title = item ? item.title : '(deleted)';
            const notes = all[tid].slice().sort((a, b) => b.t - a.t);
            return `
              <div class="hl-group">
                <div class="hl-group-head">
                  <span class="hl-group-title">${title}</span>
                  <span class="hl-group-meta">${region} · ${system}</span>
                </div>
                ${notes.map(n => `
                  <div class="hl-group-item hl-${n.color || 'yellow'}">
                    ${n.text.replace(/</g, '&lt;').replace(/\n/g, '<br>')}
                    ${n.anchor ? `<div class="hl-group-note"><i class="fas fa-link"></i> "${n.anchor.replace(/</g, '&lt;').slice(0, 100)}${n.anchor.length > 100 ? '...' : ''}"</div>` : ''}
                  </div>`).join('')}
              </div>`;
        }).join('');
    },

    // ============== BOOKMARKS ==============
    BOOKMARK_KEY: 'ivri-bookmarks',
    READ_KEY: 'ivri-read',  // Mark-as-Read storage

    bookmarkId: (region, system, index) => `${region}::${system}::${index}`,

    _loadBookmarks: () => {
        try { return JSON.parse(localStorage.getItem(app.BOOKMARK_KEY)) || []; }
        catch { return []; }
    },

    _saveBookmarks: (arr) => localStorage.setItem(app.BOOKMARK_KEY, JSON.stringify(arr)),

    isBookmarked: (id) => app._loadBookmarks().includes(id),

    // ============== MARK AS READ ==============
    _loadRead: () => {
        try { return JSON.parse(localStorage.getItem(app.READ_KEY)) || []; }
        catch { return []; }
    },
    _saveRead: (arr) => localStorage.setItem(app.READ_KEY, JSON.stringify(arr)),
    isRead: (id) => app._loadRead().includes(id),

    toggleRead: (index, btn) => {
        if (!app.state.region || !app.state.system) return;
        const id = app.bookmarkId(app.state.region, app.state.system, index);
        const list = app._loadRead();
        const i = list.indexOf(id);
        const nowRead = (i === -1);
        if (nowRead) {
            list.push(id);
            if (typeof showToast === 'function') showToast('Marked as read', 'success', 'fa-check-circle');
        } else {
            list.splice(i, 1);
            if (typeof showToast === 'function') showToast('Marked as unread', 'info', 'fa-circle');
        }
        app._saveRead(list);
        // Update the toggle button in detail panel
        if (btn) {
            btn.classList.toggle('active', nowRead);
            const span = btn.querySelector('span');
            if (span) span.innerText = nowRead ? 'Read' : 'Mark as Read';
            const icon = btn.querySelector('i');
            if (icon) icon.className = nowRead ? 'fas fa-check-circle' : 'far fa-circle';
        }
        // Refresh sidebar tick marks + progress badge
        app.renderTopicList();
        app.updateReadProgressBadge();
        // Re-mark active topic
        const act = document.querySelector(`.topic-btn[data-index="${index}"]`);
        if (act) act.classList.add('active');
    },
    // Returns {read, total, percent} aggregated across all systems in a region
    getRegionReadStats: (region) => {
        if (!region || !atlasData[region]) {
            return { read: 0, total: 0, percent: 0 };
        }
        let read = 0;
        let total = 0;
        const readList = app._loadRead();
        Object.keys(atlasData[region]).forEach(system => {
            const structures = atlasData[region][system];
            total += structures.length;
            structures.forEach((item, index) => {
                if (readList.includes(app.bookmarkId(region, system, index))) read++;
            });
        });
        return { read, total, percent: total ? Math.round((read / total) * 100) : 0 };
    },

    // Returns {read, total, percent} for current region+system
    getReadStats: (region, system) => {
        if (!region || !system || !atlasData[region] || !atlasData[region][system]) {
            return { read: 0, total: 0, percent: 0 };
        }
        const total = atlasData[region][system].length;
        const readList = app._loadRead();
        let read = 0;
        for (let i = 0; i < total; i++) {
            if (readList.includes(app.bookmarkId(region, system, i))) read++;
        }
        return { read, total, percent: total ? Math.round((read / total) * 100) : 0 };
    },

    // Update the small "X / Y read" + progress bar shown in the breadcrumb / sidebar header
    updateReadProgressBadge: () => {
        const badge = document.getElementById('read-progress-badge');
        if (!badge) return;
        if (!app.state.region || !app.state.system) {
            badge.style.display = 'none';
            return;
        }
        const { read, total, percent } = app.getReadStats(app.state.region, app.state.system);
        if (total === 0) { badge.style.display = 'none'; return; }
        badge.style.display = 'flex';
        badge.innerHTML = `
            <span class="rp-text"><i class="fas fa-check-circle"></i> ${read}/${total} read</span>
            <span class="rp-bar"><span class="rp-fill" style="width:${percent}%"></span></span>
            <span class="rp-pct">${percent}%</span>
        `;
    },

    toggleBookmark: (index, btn) => {
        if (!app.state.region || !app.state.system) return;
        const id = app.bookmarkId(app.state.region, app.state.system, index);
        const list = app._loadBookmarks();
        const i = list.indexOf(id);
        if (i === -1) {
            list.push(id);
            if (typeof showToast === 'function') showToast('Bookmarked', 'success', 'fa-star');
        } else {
            list.splice(i, 1);
            if (typeof showToast === 'function') showToast('Bookmark removed', 'info', 'fa-star');
        }
        app._saveBookmarks(list);
        // Update UI immediately
        if (btn) {
            btn.classList.toggle('active');
            const span = btn.querySelector('span');
            if (span) span.innerText = btn.classList.contains('active') ? 'Bookmarked' : 'Bookmark';
        }
        // Refresh sidebar stars
        app.renderTopicList();
        // Re-mark the active topic
        const act = document.querySelector(`.topic-btn[data-index="${index}"]`);
        if (act) act.classList.add('active');
    },

    // Show all bookmarked topics in the Atlas content area
    showBookmarks: () => {
        app._teardownHighlightPopup();
        const ids = app._loadBookmarks();
        document.getElementById('atlas-selector').style.display = 'none';
        document.getElementById('atlas-content').style.display = 'grid';
        document.getElementById('atlas-crumb').innerHTML = `ATLAS > MY BOOKMARKS (${ids.length})`;

        const list = document.getElementById('topic-list');
        const panel = document.getElementById('detail-panel');

        if (ids.length === 0) {
            list.innerHTML = '<div style="padding:20px; color:var(--text-mute);">No bookmarks yet. Click the star icon on any topic to save it here.</div>';
            panel.innerHTML = `<div style="height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:0.4;color:var(--text-mute);">
                <i class="fas fa-star" style="font-size:3rem;margin-bottom:20px;"></i>
                <div>YOUR BOOKMARK LIST IS EMPTY</div>
              </div>`;
            return;
        }

        list.innerHTML = ids.map((id) => {
            const [region, system, idxStr] = id.split('::');
            const idx = parseInt(idxStr, 10);
            const item = atlasData?.[region]?.[system]?.[idx];
            if (!item) return '';
            return `<button class="topic-btn" onclick="app.openBookmark('${region}','${system}',${idx})">
                        <i class="fas fa-star bm-star"></i> ${item.title.toUpperCase()}
                        <span class="bm-meta">${region} / ${system}</span>
                    </button>`;
        }).join('');

        panel.innerHTML = `<div style="height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:0.5;color:var(--text-mute);">
            <i class="fas fa-bookmark" style="font-size:3rem;margin-bottom:20px;color:var(--atlas-gold);"></i>
            <div>SELECT A BOOKMARKED TOPIC FROM THE LIST</div>
          </div>`;
    },

    openBookmark: (region, system, idx) => {
        app.state.region = region;
        app.state.system = system;
        app.setHash(`#/atlas/${encodeURIComponent(region)}/${encodeURIComponent(system)}/${idx}`);
        document.getElementById('atlas-crumb').innerHTML = `ATLAS > ${region.toUpperCase()} > ${system.toUpperCase()}`;
        app.renderTopicList();
        const eliteBtn = document.getElementById('elite-toggle');
        if (eliteBtn) eliteBtn.style.display = 'flex';
        setTimeout(() => {
            const btn = document.querySelector(`.topic-btn[data-index="${idx}"]`);
            if (btn) app.renderDetail(idx, btn);
        }, 30);
    },

    // ============== PWA UPDATE FLOW ==============
    // Updates are applied silently by the service worker (it skipWaiting()s on
    // install and clients.claim()s on activate). Readers get the latest version
    // on their next natural page reload — no banner, no prompts.

    // Nuclear option — wipe all caches + unregister all SWs + reload
    forceClearCacheAndReload: async () => {
        if (!confirm('Reset cached site data and reload? Your bookmarks, quiz history, and progress are kept safe — only the cached app files will be cleared.')) return;
        try {
            if ('caches' in window) {
                const keys = await caches.keys();
                await Promise.all(keys.map((k) => caches.delete(k)));
            }
            if ('serviceWorker' in navigator) {
                const regs = await navigator.serviceWorker.getRegistrations();
                await Promise.all(regs.map((r) => r.unregister()));
            }
        } catch (e) {
            console.warn('Cache reset issue:', e.message);
        }
        // Hard reload bypassing browser HTTP cache too
        window.location.reload();
    }
};

// =========================================================
// 2. ATLAS QUIZ ENGINE - Enhanced (See enhanced-quiz.js)
// =========================================================
// The quizApp object is now defined in enhanced-quiz.js
// This provides: Next/Previous navigation, Bookmarks, Flags,
// Timer, Question Grid, Detailed Review, Category Breakdown,
// Save/Resume Progress, and more!
// =========================================================

// =========================================================
// 3. WHY SECTION LOGIC (Unchanged)
// =========================================================
let currentActiveItem = null;

const grid = document.getElementById('anatomyGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

function renderCards(data) {
    if (!grid) return;

    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-mute);">No structures found matching criteria.</div>`;
        return;
    }

    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.onclick = () => openModal(item);

        card.innerHTML = `
            <div>
                <div class="card-header">
                    <span class="card-category">${item.category}</span>
                    <i class="fas fa-arrow-right" style="color: var(--why-cyan); opacity: 0.5;"></i>
                </div>
                <h3 class="card-title">${item.title}</h3>
                <div class="card-comparison">
                    <i class="fas fa-balance-scale"></i> ${item.comparison}
                </div>
                <p class="card-preview">${(item.why || '').replace(/<[^>]+>/g, '').slice(0, 220)}${(item.why || '').length > 220 ? '…' : ''}</p>
            </div>
            <div class="card-footer">
                <span class="read-more">Analyze <i class="fas fa-microscope"></i></span>
            </div>
        `;
        grid.appendChild(card);
    });
}

let currentFilter = 'all';
let currentSearch = '';

function filterData() {
    if (!anatomyData) return;

    const filtered = anatomyData.filter(item => {
        const matchesCategory = currentFilter === 'all' || item.category === currentFilter;
        const matchesSearch = item.title.toLowerCase().includes(currentSearch) ||
            item.why.toLowerCase().includes(currentSearch) ||
            item.comparison.toLowerCase().includes(currentSearch);
        return matchesCategory && matchesSearch;
    });
    renderCards(filtered);
}

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            filterData();
        });
    });
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        filterData();
    });
}

const modal = document.getElementById('modalOverlay');
const body = document.body;
const aiResponseBox = document.getElementById('aiResponseBox');
const aiResponseText = document.getElementById('aiResponseText');

function openModal(item) {
    currentActiveItem = item;

    // ===== Smart image loading: skeleton until image is ready =====
    const imgEl = document.getElementById('modalImg');
    const imgCol = imgEl.parentElement; // .modal-image-col
    if (item.img) {
        imgEl.classList.remove('img-loaded');
        imgCol.classList.add('img-loading');
        imgEl.alt = item.title;
        imgEl.decoding = 'async';
        imgEl.loading = 'eager'; // user clicked - we want it
        // Reset before assigning so we always trigger 'load' (even if same src)
        imgEl.removeAttribute('src');
        imgEl.onload = () => {
            imgEl.classList.add('img-loaded');
            imgCol.classList.remove('img-loading');
        };
        imgEl.onerror = () => {
            imgCol.classList.remove('img-loading');
            imgCol.classList.add('img-error');
        };
        imgCol.classList.remove('img-error');
        imgEl.src = item.img;
    } else {
        // No image at all — clear and hide loading state
        imgEl.removeAttribute('src');
        imgCol.classList.remove('img-loading', 'img-error');
    }

    document.getElementById('modalCategory').textContent = item.category.toUpperCase();
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalComparison').textContent = `Comparison: ${item.comparison}`;
    // ⬇ Use innerHTML so <b>, <br>, <i> tags in WHY data render properly (not as literal text)
    document.getElementById('modalWhy').innerHTML = item.why || '';
    document.getElementById('modalClinical').innerHTML = item.clinical || '';

    aiResponseBox.style.display = 'none';
    aiResponseText.innerHTML = '';

    modal.classList.add('open');
    body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('open');
    body.style.overflow = 'auto';
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

function explainLikeEngineer() {
    if (!currentActiveItem) return;

    const btn = document.getElementById('simplifyBtn');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
    btn.disabled = true;

    setTimeout(() => {
        aiResponseBox.style.display = 'block';
        aiResponseText.innerHTML = `<strong>Bio-Engineer's Analogy:</strong> ${currentActiveItem.analogy}`;

        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 800);
}

// =========================================================
// WHY-SECTION QUIZ — Session Engine ("Challenge Me")
// Distinct from Atlas Quiz: single-flow session with score,
// streak, progress, results & review. No region/system wizard.
// =========================================================
const quizOverlay = document.getElementById('quizOverlay');

function startQuiz() {
    if (!quizOverlay) return;
    quizOverlay.classList.add('open');
    quizSession.toSetup();
}

function closeQuiz() {
    if (quizOverlay) quizOverlay.classList.remove('open');
}

const quizSession = {
    pool: [],
    queue: [],
    idx: 0,
    score: 0,
    streak: 0,
    bestStreak: 0,
    target: 10,
    category: 'all',
    current: null,
    wrongLog: [],

    // Show the setup screen
    toSetup() {
        document.getElementById('quizSetup').style.display = 'block';
        document.getElementById('quizContent').style.display = 'none';
        document.getElementById('quizResults').style.display = 'none';
        // Wire chip selectors (idempotent)
        document.querySelectorAll('#quizChips .quiz-chip').forEach(c => {
            c.onclick = () => {
                document.querySelectorAll('#quizChips .quiz-chip').forEach(x => x.classList.remove('active'));
                c.classList.add('active');
            };
        });
        document.querySelectorAll('#quizCountChips .quiz-chip').forEach(c => {
            c.onclick = () => {
                document.querySelectorAll('#quizCountChips .quiz-chip').forEach(x => x.classList.remove('active'));
                c.classList.add('active');
            };
        });
    },

    // Begin a new session
    start() {
        const catBtn = document.querySelector('#quizChips .quiz-chip.active');
        const cntBtn = document.querySelector('#quizCountChips .quiz-chip.active');
        this.category = catBtn ? catBtn.dataset.cat : 'all';
        const cnt = cntBtn ? parseInt(cntBtn.dataset.count, 10) : 10;

        // Filter pool
        if (!Array.isArray(anatomyData) || !anatomyData.length) return;
        this.pool = anatomyData.filter(it => it.quiz && (this.category === 'all' || it.category === this.category));
        if (!this.pool.length) {
            alert('No questions available for this topic.');
            return;
        }

        // Shuffle + slice
        this.queue = this._shuffle(this.pool.slice());
        this.target = (cnt === 0) ? 0 : Math.min(cnt, this.queue.length);
        if (this.target > 0) this.queue = this.queue.slice(0, this.target);

        // Reset counters
        this.idx = 0;
        this.score = 0;
        this.streak = 0;
        this.bestStreak = 0;
        this.wrongLog = [];

        document.getElementById('quizSetup').style.display = 'none';
        document.getElementById('quizResults').style.display = 'none';
        document.getElementById('quizContent').style.display = 'block';

        this._render();
    },

    // Move to next question or finish
    next() {
        this.idx++;
        if (this.target > 0 && this.idx >= this.target) {
            this._showResults();
            return;
        }
        if (this.target === 0 && this.idx >= this.queue.length) {
            // Endless mode: reshuffle pool to keep going
            this.queue = this._shuffle(this.pool.slice());
            this.idx = 0;
        }
        this._render();
    },

    restart() { this.start(); },

    _render() {
        const item = this.queue[this.idx];
        if (!item) return;
        this.current = item;
        const q = item.quiz;
        const total = this.target > 0 ? this.target : '∞';
        document.getElementById('hudProgress').innerText = `${this.idx + 1}/${total}`;
        document.getElementById('hudScore').innerText = this.score;
        document.getElementById('hudStreak').innerHTML = `${this.streak}&nbsp;<i class="fas fa-fire" style="color:${this.streak >= 3 ? '#ff7a00' : '#888'};"></i>`;
        const pct = this.target > 0 ? ((this.idx) / this.target) * 100 : ((this.idx % 10) / 10) * 100;
        document.getElementById('quizProgressFill').style.width = pct + '%';

        const tag = document.getElementById('quizTopicTag');
        tag.innerText = (item.title || '') + ' · ' + (item.category || '').toUpperCase();

        document.getElementById('quizQuestion').innerText = q.question;

        const opts = document.getElementById('quizOptions');
        opts.innerHTML = '';
        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-btn';
            btn.innerText = opt;
            btn.onclick = () => this._answer(i, btn);
            opts.appendChild(btn);
        });

        document.getElementById('quizFeedback').style.display = 'none';
        document.getElementById('nextQuizBtn').style.display = 'none';
    },

    _answer(selectedIdx, btn) {
        const q = this.current.quiz;
        const buttons = document.querySelectorAll('#quizOptions .quiz-btn');
        const correct = (selectedIdx === q.correctIndex);

        buttons.forEach((b, i) => {
            b.disabled = true;
            if (i === q.correctIndex) b.classList.add('correct');
            else if (i === selectedIdx) b.classList.add('wrong');
        });

        // Encouragement messages — rotate so it feels fresh
        const PRAISE = ['Brilliant!', 'Spot on!', 'Excellent!', 'Nailed it!', 'On point!', 'Well done!', 'Sharp!', 'Beautiful!'];
        const STREAK_TAUNT = {
            3: '🔥 3 in a row!',
            5: '🚀 5 streak — on fire!',
            7: '⚡ 7 straight — unstoppable!',
            10: '👑 10 streak — MASTER!',
            15: '🌟 15 streak — legendary!'
        };
        const COMFORT = [
            "Not quite — but you're learning. Keep going!",
            'Close call. Read the explanation below.',
            "That's a tricky one. Remember this for next time.",
            'No worries — wrong answers help you learn faster.'
        ];

        if (correct) {
            this.score++;
            this.streak++;
            if (this.streak > this.bestStreak) this.bestStreak = this.streak;
            quizSession._burstConfetti(btn);
            if (STREAK_TAUNT[this.streak]) {
                quizSession._popMilestone(STREAK_TAUNT[this.streak]);
            }
        } else {
            this.streak = 0;
            this.wrongLog.push({
                title: this.current.title,
                question: q.question,
                correct: q.options[q.correctIndex],
                explanation: q.explanation
            });
        }

        const fb = document.getElementById('quizFeedback');
        fb.style.display = 'block';
        fb.className = 'quiz-feedback ' + (correct ? 'fb-good' : 'fb-bad');
        const headline = correct
            ? `<strong>✓ ${PRAISE[Math.floor(Math.random() * PRAISE.length)]}</strong>`
            : `<strong>✗ ${COMFORT[Math.floor(Math.random() * COMFORT.length)]}</strong><br><span class="qf-correct">Correct answer: <b>${q.options[q.correctIndex]}</b></span>`;
        fb.innerHTML = `${headline}<div class="qf-explain">${q.explanation}</div>`;

        // Update HUD live (with bump animation)
        const scoreEl = document.getElementById('hudScore');
        scoreEl.innerText = this.score;
        if (correct) {
            scoreEl.classList.remove('hud-bump');
            void scoreEl.offsetWidth;
            scoreEl.classList.add('hud-bump');
        }
        document.getElementById('hudStreak').innerHTML =
            `${this.streak}&nbsp;<i class="fas fa-fire" style="color:${this.streak >= 3 ? '#ff7a00' : '#888'};"></i>`;

        document.getElementById('nextQuizBtn').style.display = 'inline-flex';
    },

    // ---- Tiny CSS-only confetti burst on correct answer ----
    _burstConfetti(originBtn) {
        if (!originBtn) return;
        const colors = ['#00f2ff', '#ffd466', '#ff7a00', '#7df9ff', '#50dc96', '#bd93f9'];
        const rect = originBtn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const N = 14;
        for (let i = 0; i < N; i++) {
            const dot = document.createElement('span');
            dot.className = 'qz-confetti';
            const angle = (Math.PI * 2 * i) / N + (Math.random() - 0.5) * 0.4;
            const dist = 80 + Math.random() * 60;
            dot.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
            dot.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
            dot.style.setProperty('--rot', Math.random() * 720 - 360 + 'deg');
            dot.style.background = colors[i % colors.length];
            dot.style.left = cx + 'px';
            dot.style.top = cy + 'px';
            document.body.appendChild(dot);
            setTimeout(() => dot.remove(), 900);
        }
    },

    // ---- Milestone popup ("3 in a row!", "5 streak!", etc.) ----
    _popMilestone(text) {
        const pop = document.createElement('div');
        pop.className = 'qz-milestone';
        pop.innerHTML = text;
        document.body.appendChild(pop);
        setTimeout(() => pop.classList.add('out'), 1200);
        setTimeout(() => pop.remove(), 1700);
    },

    _showResults() {
        document.getElementById('quizContent').style.display = 'none';
        document.getElementById('quizResults').style.display = 'block';
        const total = this.target;
        const pct = total > 0 ? Math.round((this.score / total) * 100) : 0;

        let grade = 'Keep Practising', badge = 'fa-seedling';
        if (pct >= 90) { grade = 'Master Anatomist'; badge = 'fa-crown'; }
        else if (pct >= 75) { grade = 'Excellent'; badge = 'fa-trophy'; }
        else if (pct >= 60) { grade = 'Solid Pass'; badge = 'fa-medal'; }
        else if (pct >= 40) { grade = 'Needs Review'; badge = 'fa-book'; }

        const badgeEl = document.getElementById('quizResultBadge');
        badgeEl.innerHTML = `<i class="fas ${badge}"></i>`;
        document.getElementById('quizResultTitle').innerText = 'Session Complete';
        document.getElementById('quizResultScore').innerText = `${this.score} / ${total}`;
        document.getElementById('quizResultGrade').innerText = grade + ' · ' + pct + '%';
        document.getElementById('resBestStreak').innerText = this.bestStreak;
        document.getElementById('resAccuracy').innerText = pct + '%';
        document.getElementById('resTopic').innerText = this.category === 'all' ? 'All' : this.category;

        const rev = document.getElementById('quizReviewBox');
        if (this.wrongLog.length === 0) {
            rev.innerHTML = '<div class="quiz-review-perfect"><i class="fas fa-check-circle"></i> Perfect run — no review needed.</div>';
        } else {
            rev.innerHTML = '<div class="quiz-review-head">Review missed questions</div>' +
                this.wrongLog.map(w =>
                    `<div class="quiz-review-item">
                        <div class="qri-title">${w.title}</div>
                        <div class="qri-q">${w.question}</div>
                        <div class="qri-a">✓ ${w.correct}</div>
                        <div class="qri-exp">${w.explanation}</div>
                     </div>`
                ).join('');
        }
    },

    _shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
    setupAutoHideControls();
});

// ===== AUTO-HIDE WHY-SECTION CONTROLS ON SCROLL DOWN =====
// Twitter/YouTube-style: bar slides up when scrolling down, returns when scrolling up.
// Frees mobile screen real-estate without removing functionality.
function setupAutoHideControls() {
    const ctrl = document.querySelector('#why-view .controls');
    if (!ctrl) return;

    let lastY = window.scrollY;
    let ticking = false;
    const THRESH = 12;       // ignore tiny jitter (touchpad noise)
    const TOP_LOCK = 80;     // never hide if user is near top

    function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            // Only apply when on WHY view AND on mobile (≤900px)
            const isMobile = window.innerWidth <= 900;
            const isWhy = document.getElementById('why-view')?.classList.contains('active');
            if (!isMobile || !isWhy) {
                ctrl.classList.remove('controls-hidden');
                ticking = false;
                return;
            }
            const y = window.scrollY;
            const delta = y - lastY;
            if (Math.abs(delta) > THRESH) {
                if (delta > 0 && y > TOP_LOCK) ctrl.classList.add('controls-hidden');
                else if (delta < 0)            ctrl.classList.remove('controls-hidden');
                lastY = y;
            }
            ticking = false;
        });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    // Reset on resize/orientation change
    window.addEventListener('resize', () => ctrl.classList.remove('controls-hidden'));
}

if (grid && anatomyData) {
    renderCards(anatomyData);
}
