# CLAUDE CONTEXT — Paste at the Start of Any New Chat

Hey Claude! Read this whole file before doing anything else. It tells you who I am, what we're building, the codebase layout, my conventions, and how I prefer to work. After reading, just say "Got it — what do you want to work on?" and wait for my actual task.

---

## 👤 ABOUT ME

- **Name:** Fazal Zama
- **Role:** B.V.Sc & A.H. UG student at IVRI Bareilly (1st year, Roll No. B0-350-2025)
- **Background:** Veterinary science — **NOT a coder**. I don't speak code natively. Explain things in plain English with concrete file paths + simple steps.
- **Religion:** Muslim. I prefer content that's Islamically compliant — no explicit evolution language (use "designed/built", "vestigial" is OK), no Greek mythology references, no alcohol-related analogies, no idol/statue imagery.
- **Tools I use:** Windows PC, GitHub Desktop (not command-line git), File Explorer. I do NOT use a terminal. Always give me GUI-based instructions or one-click scripts.

---

## 🎯 WHAT WE'RE BUILDING

**IVRI Anatomy** — a free interactive veterinary anatomy study website + Android app for B.V.Sc 1st-year students, aligned with the VCI Unit 1-8 syllabus.

**Live URL:** `https://fazal-zama.pages.dev/` (Cloudflare Pages, deployed from GitHub repo)
**GitHub repo:** `https://github.com/fazalzama77-sys/FAZAL-ZAMA.git`
**Local working folder:** `D:/ANATOMY APP/repo/` ← **THIS IS THE ONLY FOLDER YOU SHOULD EDIT.** This folder IS the git repo connected to GitHub.

The deprecated old folder is `D:/kimi anatomy/`. **Never edit it.** If I accidentally point you there, gently steer me back to the repo folder.

### Sections of the site
1. **Atlas** — Regional anatomy: Introduction, Forelimb, Head & Neck, Thorax, Abdomen, Hindlimb & Pelvis, Histology, Embryology. (8 regions, each split by system: Osteology / Myology / Arthrology / Neurology / Angiology / Splanchnology.)
2. **WHY** — Biomechanical explanations + comparative anatomy + wildlife-vs-domestic. ~86 entries with quiz cards.
3. **Atlas Quiz** — MCQ / True-False / Fill-Blanks per region+system + Smart Review (SRS) + Exam Mode (timed mock).
4. **Dashboard** — Performance tracker, accuracy chart, topic heatmap, Smart Review panel (Leitner box SRS).
5. **Bookmarks** + **Mark-as-Read** + per-topic progress badge.

### Two themes
- **Student mode (default):** neon dark theme (cyan/gold accents on navy background) — **DO NOT CHANGE COLOURS HERE without asking**.
- **Professional mode:** clean medical light theme (whites + medical blue + soft greys) — toggled by button bottom-left.

---

## 🗂️ FILE STRUCTURE

```
D:/ANATOMY APP/repo/         ← THE ACTIVE FOLDER (connected to GitHub)
├── index.html                ← Single-page app shell
├── style.css                 ← Main styles (~3700 lines)
├── enhanced-quiz.css         ← Atlas-quiz overlay styles
├── dashboard.css             ← Dashboard panel styles
├── app.js                    ← Atlas + WHY + routing + bookmarks/read/share
├── enhanced-quiz.js          ← Atlas Quiz engine (MCQ/TF/FIB/Exam/SmartReview)
├── dashboard.js              ← Performance + SRS panel
├── srs.js                    ← Leitner-box spaced-repetition engine
├── glossary.js               ← Hover-tooltip term dictionary
├── search.js                 ← Global search overlay
├── service-worker.js         ← PWA offline cache
├── manifest.json             ← PWA manifest
│
├── data-introduction.JS      ← Unit-1 syllabus content (general anatomy)
├── data-forelimb.JS          ← Unit-2
├── data-head-neck.JS         ← Unit-3
├── data-thorax.JS            ← Unit-4
├── data-abdomen.JS           ← Unit-5
├── data-hindlimb.JS          ← Unit-6
├── data-splanchnology.JS     ← Visceral organs (pushes into above regions)
├── data-histology.JS         ← Unit-7
├── data-embryology.JS        ← Unit-8
├── data-why.JS               ← Biomechanics + wildlife comparisons
├── data-quiz.JS              ← ALL MCQ/TF/FIB questions (huge file)
├── data-image-annotations.JS ← Image annotation data
├── data-pelvis.JS            ← (legacy, may merge with hindlimb)
│
├── images/
│   ├── atlas/                ← FINAL compressed WebP for atlas modal pop-ups
│   ├── why/                  ← FINAL compressed WebP for WHY cards
│   ├── ivri-logo.png         ← Institutional logo in footer
│   ├── icon-192.png, icon-512.png  ← PWA + splash icons
├── images-raw/               ← DROP-ZONE for unprocessed originals (NOT committed)
│   ├── atlas/   _done/       ← Archived after compression
│   └── why/     _done/
├── tools/
│   ├── compress.py           ← Python WebP compressor (target ≤310 KB)
│   ├── compress.bat          ← Double-click runner for Windows
│   └── README.md             ← Workflow instructions
└── CLAUDE-CONTEXT.md         ← THIS FILE
```

### Data file shape
Every regional data file follows this pattern:
```js
atlasData["RegionName"] = {
  "Osteology": [
    {
      title: "Scapula",
      desc: "<b>standard view text</b><br>...",    // shown by default
      eliteDesc: "<b>elite/detailed view</b><br>...", // shown when Elite Toggle is on
      comparative: [
        { species: "Horse", note: "..." },
        { species: "Dog", note: "..." }
      ],
      clinical: "<b>Clinical:</b> ...",
      imgCode: "scapula",          // image key (optional)
      img: "images/atlas/scapula.webp" // direct URL (optional)
    },
    { ... next structure ... }
  ],
  "Myology": [...],
  // etc.
};
```

The WHY data is a single array of objects:
```js
anatomyData = [
  {
    id: 1,
    title: "Equine Frog vs Bovine Digital Cushion",
    category: "hindlimb",   // forelimb | hindlimb | axial | wildlife
    comparison: "Horse vs. Ox",
    why: "...",
    clinical: "...",
    img: "images/why/...webp",
    analogy: "...",
    quiz: { question: "...", options: [...], correctIndex: 0, explanation: "..." }
  }
];
```

The quiz bank `data-quiz.JS` structure:
```js
quizBank = {
  "Forelimb": {
    "Osteology": {
      mcq: [ { q: "...", o: ["A","B","C","D"], a: 2, e: "explanation" } ],
      tf:  [ { q: "...", a: true, e: "..." } ],
      fib: [ { q: "...", a: ["accepted","alternatives"], e: "..." } ]
    },
    "Myology": { mcq:[], tf:[], fib:[] }
  }
};
```

---

## 🛠️ MY WORKFLOW (HOW I PUBLISH)

1. I edit images by dropping into `D:/ANATOMY APP/repo/images-raw/atlas/` or `/why/`
2. I double-click `tools/compress.bat` — auto-compresses to ~300 KB WebP
3. Edit happens in `D:/ANATOMY APP/repo/` (you edit here)
4. I open GitHub Desktop → see changes → write commit message → Commit → Push origin
5. Cloudflare Pages auto-rebuilds the live site within ~1 minute

**I never use git command-line.** Always give me file paths I can find in Explorer, not terminal commands.

---

## 🎨 STYLE / CODE CONVENTIONS

- **DON'T add features I didn't ask for.** Bound your work to exactly what I requested.
- **CSS scope changes carefully:** if I say "fix the WHY quiz", don't touch atlas-quiz CSS.
- **Student mode (default neon theme) is finished — don't change its colours.** Only fix professional mode or shared bugs.
- **Use vanilla JS** — no frameworks. The site is plain HTML + CSS + JS, served as static files.
- **Use `.innerHTML` for fields that may contain `<b>` / `<br>` / `<i>`** — never `.textContent` for those.
- **Don't introduce dependencies** without asking. No npm, no bundlers, no build step.
- **GPU-friendly animations only** — `transform` + `opacity`, avoid `box-shadow` / `filter` in `@keyframes`.
- **Always reset state flags in cleanup paths** — I've been burned twice by leftover `examMode = true` flags.
- **Avoid evolution language** — say "is built / is designed" not "evolved"; "vestigial" is fine; never "phylogenetic leftover" or "ancestor species".
- **Strip Greek mythology references** — "atlas vertebra carries the skull" instead of "named after the Greek titan".
- **Files use mixed-case extensions** (`data-forelimb.JS` not `.js`). Match my existing pattern when creating new ones.

---

## ⚙️ KEY ARCHITECTURE FACTS

- **Single-page app:** `index.html` is a section-switcher. Each section is a `<section class="view-section">`. Navigation by `view-section.active` class + hash routing (`#/atlas/Forelimb/Osteology/2`).
- **Image loading is already click-to-load:** Atlas modals only fetch images when user clicks a structure. WHY cards render text-only; image loads when user opens the modal. No lazy-loading library needed.
- **localStorage keys:** `ivri-theme`, `ivri-elite`, `ivri-bookmarks`, `ivri-read`, `ivri-srs-state`, `ivri-quiz-progress`.
- **PWA:** Service worker caches everything; app installs to Android home screen via `manifest.json`.
- **State globals:** `atlasData` (regional), `anatomyData` (WHY), `quizBank` (questions), `srs.*` (SRS engine), `quizApp.*` (quiz state).

---

## 🐛 KNOWN PAST BUGS (don't reintroduce)

- `examMode` flag leaking — must reset to `false` in `start()`, `startSmartReview()`, `close()`, `resetSelections()`
- `<b>` tags showing literally in WHY modal — happens when `textContent` used instead of `innerHTML`
- Comparative tables not horizontally scrolling on mobile — `.comp-table` needs `overflow-x: auto; display: block`
- WHY mobile controls bar taking 1/3 of screen — has auto-hide-on-scroll behaviour, don't break it
- Splash lag — `filter: drop-shadow` in animation loop is the killer; use `transform` + static glow only
- Theme toggle overlapping mobile quiz buttons — fixed via `body.body-modal-open` class hiding toggle

---

## 🚀 HOW TO WORK WITH ME EFFICIENTLY

1. **Read this whole file first.** Don't ask "what's the project?"
2. **Be specific in your replies** — list file paths and exact changes.
3. **Don't over-explore.** I'll tell you the bug — go straight to the file.
4. **Verify state-reset paths** whenever you add a new flag. (See "Known Past Bugs".)
5. **If unsure between two approaches**, ask me ONE short question. Don't write code both ways.
6. **For big features**, give me a 5-line plan first. Wait for "yes go".
7. **End your responses with a "what to test" checklist** so I can verify quickly.

---

## 📋 CURRENT STATE (snapshot — will go stale, that's OK)

- ✅ All 8 atlas regions populated with UG-relevant content + comparative tables + clinical sites
- ✅ ~86 WHY entries (Forelimb/Hindlimb/Axial/Wildlife) + quizzes
- ✅ Bookmarks, Mark-as-Read, Share button working
- ✅ Smart Review (SRS) with separate "Drill weak topics" button
- ✅ Exam Mode (customisable duration/count/format/feedback)
- ✅ Image compressor script (Python + .bat one-click)
- ✅ IVRI logo placed in homepage footer
- ✅ Islamic-compliance pass done (no evolution/mythology language)
- ✅ Mobile responsive: nav-bar icons, glossary tooltip top-anchored, atlas selector 2-col grid
- ✅ Splash screen + landing animations smoothed (GPU-only)
- ✅ Professional mode polished (medical theme)
- ⏳ Image bulk upload still pending (user dropping images into `images-raw/`)
- ⏳ MCQ bank could use 500+ more questions for full coverage

---

## 💡 LIKELY NEXT TASKS (when I ask)

- "Add 30 MCQs for [Region]/[System]"
- "Fix [specific bug] in [specific file]"
- "Add new entry to data-why for [topic]"
- "Help me push to GitHub" — instructions for GitHub Desktop
- "Compress these images" — just tell me to drop them in `images-raw/` and run `compress.bat`
- "Make Android APK" — bubblewrap workflow in `D:/ANATOMY APP/twa/`

---

**End of context. Now wait for my actual task.**
