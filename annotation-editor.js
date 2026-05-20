/* =========================================================
   ANATOMY ANNOTATION STUDIO PRO
   Pro features:
   - Multi-image library (any uploaded/pasted image, switcher)
   - Zoom (wheel + buttons) + pan (Space-drag)
   - Click-to-place new label on canvas (press N or click "+")
   - Multi-select via Shift-click, batch operations
   - 8-color palette + quick keys 1-8
   - Quick anatomy landmark library (one-click add of common terms)
   - Auto-route leader lines to empty side
   - Annotated PNG export (image + arrows + labels burned into canvas)
   - JSON export, JS data file export
   - Keyboard-first workflow (full shortcut set)
   - Localstorage persistence per image
   ========================================================= */

(function () {
  "use strict";

  // ============== STATE ==============
  const STORE_KEY = "annotation-studio-pro:v1";
  const COLORS = ["cyan", "yellow", "white", "green", "pink", "orange", "purple", "red"];
  const COLOR_HEX = {
    cyan: "#23d8ff", yellow: "#ffe94d", white: "#f8fbff", green: "#4ade80",
    pink: "#ff7eb6", orange: "#ff9f43", purple: "#b18cff", red: "#ff5d6c"
  };

  // Comprehensive landmark library
  const LANDMARK_LIBRARY = {
    bones: [
      // Skull / vertebrae
      "Foramen magnum", "Occipital condyle", "Mastoid process", "Cornual process",
      "Orbital cavity", "Maxilla", "Mandible", "Mental foramen", "Mandibular foramen",
      "Spinous process", "Transverse process", "Vertebral body", "Vertebral foramen",
      // Forelimb
      "Spine of scapula", "Acromion process", "Supraspinous fossa", "Infraspinous fossa",
      "Glenoid cavity", "Supraglenoid tubercle", "Coracoid process", "Tuber spinae",
      "Head of humerus", "Greater tubercle", "Lesser tubercle", "Intermediate tubercle",
      "Intertubercular groove", "Deltoid tuberosity", "Musculospiral groove",
      "Medial epicondyle", "Lateral epicondyle", "Olecranon fossa", "Supratrochlear foramen",
      "Trochlea of humerus", "Capitulum",
      "Olecranon", "Anconeal process", "Coronoid process", "Trochlear notch",
      "Radial tuberosity", "Styloid process",
      "Accessory carpal", "Radial carpal", "Ulnar carpal", "Intermediate carpal",
      "Cannon bone", "Splint bone", "Proximal sesamoid", "Distal sesamoid (Navicular)",
      "Proximal phalanx (P1)", "Middle phalanx (P2)", "Distal phalanx (P3)",
      // Hindlimb / pelvis
      "Tuber coxae (Hook bone)", "Tuber sacrale", "Tuber ischiadicum (Pin bone)",
      "Acetabulum", "Obturator foramen", "Pelvic symphysis", "Iliac crest",
      "Head of femur", "Fovea capitis", "Neck of femur",
      "Greater trochanter", "Lesser trochanter", "Third trochanter", "Trochanteric fossa",
      "Medial condyle", "Lateral condyle", "Intercondylar fossa",
      "Trochlea of femur (Patellar groove)", "Medial trochlear ridge", "Lateral trochlear ridge",
      "Patella", "Tibial tuberosity", "Tibial crest", "Medial malleolus", "Lateral malleolus",
      "Os malleolare", "Tuber calcanei (Point of hock)", "Sustentaculum tali",
      "Talus", "Calcaneus", "Centroquartal", "Cochlea tibiae",
      // Thorax
      "Manubrium", "Body of sternum", "Xiphoid process", "Costal cartilage",
      "Head of rib", "Tubercle of rib", "Costal groove", "Sternal rib", "Asternal rib",
      // Generic
      "Foramen", "Fossa", "Tubercle", "Tuberosity", "Crest", "Ridge", "Process",
      "Notch", "Groove", "Fissure", "Articular surface"
    ],
    muscles: [
      "Trapezius", "Brachiocephalicus", "Omotransversarius", "Rhomboideus",
      "Serratus ventralis", "Latissimus dorsi", "Pectoralis superficialis", "Pectoralis profundus",
      "Supraspinatus", "Infraspinatus", "Subscapularis", "Deltoideus", "Teres major", "Teres minor",
      "Coracobrachialis", "Biceps brachii", "Brachialis", "Triceps brachii",
      "Tensor fasciae antebrachii", "Anconeus",
      "Extensor carpi radialis", "Common digital extensor", "Lateral digital extensor",
      "Ulnaris lateralis", "Flexor carpi radialis", "Flexor carpi ulnaris",
      "Superficial digital flexor", "Deep digital flexor", "Pronator teres", "Supinator",
      // hindlimb
      "Superficial gluteus", "Middle gluteus", "Deep gluteus", "Tensor fasciae latae",
      "Biceps femoris", "Semitendinosus", "Semimembranosus",
      "Sartorius", "Gracilis", "Pectineus", "Adductor",
      "Iliopsoas", "Psoas major", "Psoas minor", "Iliacus",
      "Quadriceps femoris", "Rectus femoris", "Vastus lateralis", "Vastus medialis", "Vastus intermedius",
      "Tibialis cranialis", "Long digital extensor", "Peroneus tertius",
      "Gastrocnemius", "Popliteus",
      // thorax / abdomen
      "External intercostal", "Internal intercostal", "Diaphragm",
      "External abdominal oblique", "Internal abdominal oblique", "Transversus abdominis",
      "Rectus abdominis"
    ],
    generic: [
      "Cranial", "Caudal", "Dorsal", "Ventral", "Medial", "Lateral",
      "Proximal", "Distal", "Superficial", "Deep",
      "Origin", "Insertion", "Articulation", "Attachment site",
      "Artery", "Vein", "Nerve", "Lymph node", "Tendon", "Ligament",
      "Joint capsule", "Synovial membrane", "Cartilage"
    ]
  };

  // App state
  let library = loadLibrary();
  let currentImageId = library.activeId || null;
  let history = [];
  let future = [];
  let selectedIds = new Set();
  let primarySelection = null;
  let primaryPart = "label";
  let dragActive = false;
  let panActive = false;
  let spaceHeld = false;
  let showLines = true;
  let previewMode = false;
  let zoom = 1;
  let panX = 0;
  let panY = 0;
  let activeTab = "bones";

  // DOM
  const stageWrap = document.getElementById("stage-wrap");
  const pannable = document.getElementById("stage-pannable");
  const stage = document.getElementById("annotation-stage");
  const emptyState = document.getElementById("empty-state");
  const titleEl = document.getElementById("image-title");
  const switcher = document.getElementById("image-switcher");
  const fileInput = document.getElementById("file-input");
  const labelList = document.getElementById("label-list");
  const labelCount = document.getElementById("label-count");
  const landmarkList = document.getElementById("landmark-list");
  const landmarkSearch = document.getElementById("landmark-search");
  const labelSearch = document.getElementById("label-search");
  const inspector = document.getElementById("inspector");
  const noSelection = document.getElementById("no-selection");
  const colorSwatches = document.getElementById("color-swatches");
  const toast = document.getElementById("toast");
  const statusCoords = document.getElementById("status-coords");
  const statusZoom = document.getElementById("status-zoom");
  const statusCount = document.getElementById("status-count");
  const statusSelection = document.getElementById("status-selection");
  const statusMessage = document.getElementById("status-message");
  const zoomDisplay = document.getElementById("zoom-display");

  const I = {
    text: document.getElementById("i-text"),
    species: document.getElementById("i-species"),
    note: document.getElementById("i-note"),
    tx: document.getElementById("i-tx"),
    ty: document.getElementById("i-ty"),
    lx: document.getElementById("i-lx"),
    ly: document.getElementById("i-ly"),
    cx: document.getElementById("i-cx"),
    cy: document.getElementById("i-cy"),
    fontSize: document.getElementById("i-font-size"),
    lineWidth: document.getElementById("i-line-width"),
    dotSize: document.getElementById("i-dot-size")
  };
  const fontSizeVal = document.getElementById("font-size-val");
  const lineWidthVal = document.getElementById("line-width-val");
  const dotSizeVal = document.getElementById("dot-size-val");

  // ============== LIBRARY MGMT ==============
  function loadLibrary() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORE_KEY));
      if (stored && stored.images) return stored;
    } catch (e) { }
    // Migrate from old format if present
    const existing = window.imageAnnotations;
    const lib = { activeId: null, images: {} };
    if (existing && typeof existing === "object") {
      Object.keys(existing).forEach((id) => {
        const src = existing[id];
        lib.images[id] = {
          id,
          title: src.title || id,
          image: src.image,
          alt: src.alt || src.title || id,
          labels: (src.labels || []).map(normalizeLabel)
        };
        if (!lib.activeId) lib.activeId = id;
      });
    }
    return lib;
  }
  function persist() {
    library.activeId = currentImageId;
    localStorage.setItem(STORE_KEY, JSON.stringify(library));
  }
  function currentImage() {
    return currentImageId ? library.images[currentImageId] : null;
  }
  function normalizeLabel(label) {
    label.target = label.target || { x: 50, y: 50 };
    label.label = label.label || { x: clampCoord(label.target.x + 8), y: label.target.y };
    label.control = label.control || {
      x: round1((label.target.x + label.label.x) / 2),
      y: round1((label.target.y + label.label.y) / 2)
    };
    label.color = label.color || "cyan";
    label.id = label.id || `lbl-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    label.species = label.species || "";
    label.text = label.text || "Label";
    label.note = label.note || "";
    label.fontSize = label.fontSize || 13;
    label.lineWidth = label.lineWidth != null ? label.lineWidth : 1.5;
    label.dotSize = label.dotSize || 14;
    return label;
  }

  function clampCoord(v) { return Math.max(0, Math.min(100, v)); }
  function round1(v) { return Number(v.toFixed(1)); }
  function clone(v) { return JSON.parse(JSON.stringify(v)); }
  function uid(prefix) { return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`; }
  function escapeHtml(v) {
    return String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c]));
  }
  function showToast(msg, ms = 1800) {
    toast.textContent = msg;
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add("show"));
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => { toast.hidden = true; }, 250);
    }, ms);
  }
  function setStatus(msg, ms = 2000) {
    statusMessage.textContent = msg;
    if (msg && ms) {
      clearTimeout(setStatus._t);
      setStatus._t = setTimeout(() => { statusMessage.textContent = ""; }, ms);
    }
  }

  // ============== HISTORY ==============
  function pushHistory() {
    if (dragActive) return;
    if (!currentImage()) return;
    history.push(clone(currentImage().labels));
    if (history.length > 200) history.shift();
    future = [];
  }
  function undo() {
    if (!history.length || !currentImage()) return;
    future.push(clone(currentImage().labels));
    currentImage().labels = history.pop();
    persist();
    render();
    setStatus("Undo");
  }
  function redo() {
    if (!future.length || !currentImage()) return;
    history.push(clone(currentImage().labels));
    currentImage().labels = future.pop();
    persist();
    render();
    setStatus("Redo");
  }

  // ============== IMAGE LOAD ==============
  function loadImageFromDataURL(dataUrl, name = "Untitled") {
    const id = uid("img");
    library.images[id] = {
      id,
      title: name.replace(/\.[^.]+$/, ""),
      image: dataUrl,
      alt: name,
      labels: []
    };
    currentImageId = id;
    history = [];
    future = [];
    selectedIds.clear();
    primarySelection = null;
    persist();
    refreshSwitcher();
    render();
    fitToScreen();
    showToast(`Loaded "${name}"`);
  }
  function handleFile(file) {
    if (!file || !file.type.startsWith("image/")) {
      showToast("Not an image file");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => loadImageFromDataURL(e.target.result, file.name);
    reader.readAsDataURL(file);
  }

  // Drag & drop onto stage
  stageWrap.addEventListener("dragover", (e) => {
    e.preventDefault();
    stageWrap.classList.add("dragover");
  });
  stageWrap.addEventListener("dragleave", (e) => {
    if (e.target === stageWrap) stageWrap.classList.remove("dragover");
  });
  stageWrap.addEventListener("drop", (e) => {
    e.preventDefault();
    stageWrap.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  });

  // Paste image from clipboard
  window.addEventListener("paste", (e) => {
    if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;
    const items = e.clipboardData?.items || [];
    for (const item of items) {
      if (item.type.startsWith("image/")) {
        const file = item.getAsFile();
        handleFile(file);
        return;
      }
    }
  });

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
    fileInput.value = "";
  });

  document.getElementById("paste-btn").addEventListener("click", () => {
    showToast("Press Ctrl+V to paste an image from clipboard");
  });

  // ============== IMAGE SWITCHER ==============
  function refreshSwitcher() {
    const ids = Object.keys(library.images);
    if (ids.length === 0) {
      switcher.innerHTML = '<option value="">— No images yet —</option>';
      return;
    }
    switcher.innerHTML = ids.map((id) =>
      `<option value="${id}" ${id === currentImageId ? "selected" : ""}>${escapeHtml(library.images[id].title)}</option>`
    ).join("");
  }
  switcher.addEventListener("change", () => {
    if (!switcher.value) return;
    currentImageId = switcher.value;
    history = [];
    future = [];
    selectedIds.clear();
    primarySelection = null;
    persist();
    render();
    fitToScreen();
  });
  document.getElementById("delete-image-btn").addEventListener("click", () => {
    if (!currentImageId) return;
    if (!confirm(`Delete "${currentImage().title}" and all its labels?`)) return;
    delete library.images[currentImageId];
    const remaining = Object.keys(library.images);
    currentImageId = remaining[0] || null;
    history = [];
    selectedIds.clear();
    primarySelection = null;
    persist();
    refreshSwitcher();
    render();
    showToast("Image deleted");
  });

  // ============== LANDMARK LIBRARY ==============
  function renderLandmarks() {
    const search = (landmarkSearch.value || "").toLowerCase();
    const list = LANDMARK_LIBRARY[activeTab] || [];
    const filtered = search ? list.filter((n) => n.toLowerCase().includes(search)) : list;
    landmarkList.innerHTML = filtered.map((name) =>
      `<div class="landmark-item" data-name="${escapeHtml(name)}">
        <i class="fas fa-plus" style="color:var(--muted-2);font-size:0.7rem;"></i>
        <span class="label-item-text">${escapeHtml(name)}</span>
      </div>`
    ).join("") || `<div class="empty-hint">No matches</div>`;
    landmarkList.querySelectorAll(".landmark-item").forEach((el) => {
      el.addEventListener("click", () => addLabelWithText(el.dataset.name));
    });
  }
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeTab = btn.dataset.tab;
      renderLandmarks();
    });
  });
  landmarkSearch.addEventListener("input", renderLandmarks);

  // ============== COLOR SWATCHES ==============
  function renderSwatches() {
    colorSwatches.innerHTML = COLORS.map((c, i) =>
      `<button class="swatch s-${c}" data-color="${c}" title="${c} (${i + 1})"></button>`
    ).join("");
    colorSwatches.querySelectorAll(".swatch").forEach((sw) => {
      sw.addEventListener("click", () => setSelectedColor(sw.dataset.color));
    });
  }

  // ============== RENDER ==============
  function render() {
    const img = currentImage();
    if (!img) {
      emptyState.classList.remove("hidden");
      stage.innerHTML = "";
      titleEl.textContent = "Untitled image";
      labelList.innerHTML = "";
      labelCount.textContent = "0";
      statusCount.innerHTML = `<i class="fas fa-tags"></i> 0 labels`;
      updateInspector();
      refreshSwitcher();
      return;
    }
    emptyState.classList.add("hidden");
    titleEl.textContent = img.title;
    refreshSwitcher();
    renderStage();
    renderLabelList();
    updateInspector();
    statusCount.innerHTML = `<i class="fas fa-tags"></i> ${img.labels.length} labels`;
    statusSelection.innerHTML = `<i class="fas fa-check"></i> ${selectedIds.size} selected`;
  }

  function renderStage() {
    const img = currentImage();
    stage.classList.toggle("line-hidden", !showLines);
    stage.classList.toggle("preview-mode", previewMode);

    const labelsHtml = img.labels.map((label) => {
      const sel = selectedIds.has(label.id);
      const partSel = (part) => sel && primarySelection === label.id && primaryPart === part;
      const ds = label.dotSize || 14;
      const fs = label.fontSize || 13;
      return `
        <button class="ann-dot ann-${label.color} ${partSel("target") ? "selected" : ""}"
                data-id="${label.id}" data-part="target"
                style="left:${label.target.x}%;top:${label.target.y}%;width:${ds}px;height:${ds}px"
                title="${escapeHtml(label.text)}"></button>
        <button class="ann-control ann-${label.color} ${sel ? "visible" : ""} ${partSel("control") ? "selected" : ""}"
                data-id="${label.id}" data-part="control"
                style="left:${label.control.x}%;top:${label.control.y}%"
                title="Bend"></button>
        <button class="ann-label ann-${label.color} ${partSel("label") ? "selected" : ""}"
                data-id="${label.id}" data-part="label"
                style="left:${label.label.x}%;top:${label.label.y}%;font-size:${fs}px">${escapeHtml(label.text)}</button>
      `;
    }).join("");

    const linesHtml = img.labels.map((label) => {
      const lw = label.lineWidth != null ? label.lineWidth : 1.5;
      return `
      <path d="M ${label.label.x} ${label.label.y} Q ${label.control.x} ${label.control.y} ${label.target.x} ${label.target.y}"
            fill="none" stroke="${COLOR_HEX[label.color] || "#fff"}"
            stroke-width="${lw * 0.15}"
            vector-effect="non-scaling-stroke"></path>`;
    }).join("");

    stage.innerHTML = `
      <img id="stage-img" src="${img.image}" alt="${escapeHtml(img.alt)}">
      <svg class="leader-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        ${linesHtml}
      </svg>
      ${labelsHtml}
    `;

    // Once image loads, set the stage to image's natural aspect ratio
    const sImg = document.getElementById("stage-img");
    if (sImg.complete) sizeStageToImage(sImg);
    else sImg.onload = () => sizeStageToImage(sImg);

    wireDragHandles();
  }

  function sizeStageToImage(imgEl) {
    const w = imgEl.naturalWidth || 1200;
    const h = imgEl.naturalHeight || 800;
    stage.style.width = w + "px";
    stage.style.height = h + "px";
    applyTransform();
  }

  function renderLabelList() {
    const img = currentImage();
    if (!img) return;
    const search = (labelSearch.value || "").toLowerCase();
    const filtered = search
      ? img.labels.filter((l) => (l.text + " " + l.species).toLowerCase().includes(search))
      : img.labels;
    labelCount.textContent = img.labels.length;
    labelList.innerHTML = filtered.map((l) => `
      <div class="label-item ${selectedIds.has(l.id) ? "selected" : ""}" data-id="${l.id}">
        <span class="label-color-chip" style="background:${COLOR_HEX[l.color]}"></span>
        <span class="label-item-text">${escapeHtml(l.text)}</span>
        ${l.species ? `<span class="label-item-species">${escapeHtml(l.species)}</span>` : ""}
      </div>
    `).join("") || `<div class="empty-hint">${search ? "No matches" : "No labels yet. Click on the image to add one."}</div>`;

    labelList.querySelectorAll(".label-item").forEach((el) => {
      el.addEventListener("click", (e) => {
        if (e.shiftKey) toggleSelect(el.dataset.id);
        else selectOnly(el.dataset.id);
      });
    });
  }

  function updateInspector() {
    const label = primarySelection ? findLabel(primarySelection) : null;
    if (!label) {
      inspector.hidden = true;
      noSelection.style.display = "block";
      return;
    }
    inspector.hidden = false;
    noSelection.style.display = "none";
    I.text.value = label.text;
    I.species.value = label.species;
    I.note.value = label.note;
    I.tx.value = label.target.x;
    I.ty.value = label.target.y;
    I.lx.value = label.label.x;
    I.ly.value = label.label.y;
    I.cx.value = label.control.x;
    I.cy.value = label.control.y;
    I.fontSize.value = label.fontSize || 13;
    I.lineWidth.value = label.lineWidth != null ? label.lineWidth : 1.5;
    I.dotSize.value = label.dotSize || 14;
    fontSizeVal.textContent = (label.fontSize || 13) + "px";
    lineWidthVal.textContent = (label.lineWidth != null ? label.lineWidth : 1.5);
    dotSizeVal.textContent = (label.dotSize || 14) + "px";
    colorSwatches.querySelectorAll(".swatch").forEach((s) => {
      s.classList.toggle("active", s.dataset.color === label.color);
    });
  }

  function findLabel(id) {
    const img = currentImage();
    return img && img.labels.find((l) => l.id === id);
  }

  // ============== SELECTION ==============
  function selectOnly(id) {
    selectedIds = new Set([id]);
    primarySelection = id;
    primaryPart = "label";
    render();
  }
  function toggleSelect(id) {
    if (selectedIds.has(id)) selectedIds.delete(id);
    else selectedIds.add(id);
    primarySelection = selectedIds.size ? id : null;
    render();
  }
  function clearSelection() {
    selectedIds.clear();
    primarySelection = null;
    render();
  }

  // ============== DRAG HANDLES ==============
  function wireDragHandles() {
    stage.querySelectorAll("[data-id]").forEach((node) => {
      node.addEventListener("pointerdown", (e) => {
        e.stopPropagation();
        const id = node.dataset.id;
        const part = node.dataset.part;
        if (e.shiftKey) toggleSelect(id);
        else { selectedIds = new Set([id]); }
        primarySelection = id;
        primaryPart = part;
        dragActive = true;
        pushHistory();
        dragActive = true;

        const move = (ev) => {
          const rect = stage.getBoundingClientRect();
          const x = clampCoord(((ev.clientX - rect.left) / rect.width) * 100);
          const y = clampCoord(((ev.clientY - rect.top) / rect.height) * 100);
          const label = findLabel(id);
          if (!label) return;
          label[part].x = round1(x);
          label[part].y = round1(y);
          persist();
          renderStage();
          updateInspector();
        };
        const up = () => {
          dragActive = false;
          window.removeEventListener("pointermove", move);
          window.removeEventListener("pointerup", up);
          renderLabelList();
        };
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", up);
        render();
      });
    });
  }

  // ============== CLICK-TO-ADD on stage ==============
  stage.addEventListener("pointerdown", (e) => {
    if (spaceHeld || e.button !== 0) return;
    if (e.target.closest("[data-id]")) return; // clicked an existing handle
    if (!currentImage()) return;
    if (!e.altKey) return; // require Alt+click to add (less accidental)
    const rect = stage.getBoundingClientRect();
    const x = clampCoord(((e.clientX - rect.left) / rect.width) * 100);
    const y = clampCoord(((e.clientY - rect.top) / rect.height) * 100);
    addLabelAt(x, y);
  });

  // Click outside any handle clears selection
  stageWrap.addEventListener("pointerdown", (e) => {
    if (e.target === stageWrap || e.target === pannable || e.target === stage || e.target.id === "stage-img") {
      if (!e.shiftKey && !spaceHeld) clearSelection();
    }
  });

  // ============== PAN & ZOOM ==============
  function applyTransform() {
    pannable.style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;
    zoomDisplay.value = Math.round(zoom * 100) + "%";
    statusZoom.innerHTML = `<i class="fas fa-magnifying-glass"></i> ${Math.round(zoom * 100)}%`;
  }
  function setZoom(newZoom, cx, cy) {
    const old = zoom;
    zoom = Math.max(0.05, Math.min(10, newZoom));
    if (cx !== undefined) {
      const rect = stageWrap.getBoundingClientRect();
      const px = cx - rect.left;
      const py = cy - rect.top;
      const offsetX = (px - rect.width / 2) - panX;
      const offsetY = (py - rect.height / 2) - panY;
      panX -= offsetX * (zoom / old - 1);
      panY -= offsetY * (zoom / old - 1);
    }
    applyTransform();
  }
  function fitToScreen() {
    const img = currentImage();
    if (!img) return;
    const sImg = document.getElementById("stage-img");
    if (!sImg) return setTimeout(fitToScreen, 50);
    const rect = stageWrap.getBoundingClientRect();
    const w = sImg.naturalWidth || stage.offsetWidth || 1000;
    const h = sImg.naturalHeight || stage.offsetHeight || 800;
    const padding = 60;
    const fitW = (rect.width - padding) / w;
    const fitH = (rect.height - padding) / h;
    const fit = Math.min(fitW, fitH, 1.0);
    zoom = fit;
    // Center the image properly: account for stage-pannable being at 50%/50%
    // The pannable is at left:50%, top:50%, so its origin is center of stageWrap.
    // The stage (image) draws from pannable origin to the right/down.
    // To center: shift left by half the scaled image width, up by half scaled height.
    panX = -(w * zoom) / 2;
    panY = -(h * zoom) / 2;
    applyTransform();
  }

  stageWrap.addEventListener("wheel", (e) => {
    if (!currentImage()) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setZoom(zoom * delta, e.clientX, e.clientY);
  }, { passive: false });

  // Track mouse for status bar coords
  stageWrap.addEventListener("pointermove", (e) => {
    if (!currentImage()) {
      statusCoords.innerHTML = `<i class="fas fa-crosshairs"></i> —`;
      return;
    }
    const rect = stage.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    statusCoords.innerHTML = `<i class="fas fa-crosshairs"></i> ${x.toFixed(1)}, ${y.toFixed(1)}`;
  });

  // Pan with Space-drag, middle-click, or right-click
  function startPan(e) {
    panActive = true;
    stageWrap.classList.add("panning");
    let lastX = e.clientX;
    let lastY = e.clientY;
    const move = (ev) => {
      panX += ev.clientX - lastX;
      panY += ev.clientY - lastY;
      lastX = ev.clientX;
      lastY = ev.clientY;
      applyTransform();
    };
    const up = () => {
      panActive = false;
      stageWrap.classList.remove("panning");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  }
  stageWrap.addEventListener("pointerdown", (e) => {
    // Space-drag
    if (spaceHeld) { startPan(e); return; }
    // Middle-click pan
    if (e.button === 1) { e.preventDefault(); startPan(e); return; }
    // Right-click pan
    if (e.button === 2) { e.preventDefault(); startPan(e); return; }
  });
  // Prevent context menu on right-click in stage
  stageWrap.addEventListener("contextmenu", (e) => e.preventDefault());

  document.getElementById("zoom-in-btn").addEventListener("click", () => setZoom(zoom * 1.2));
  document.getElementById("zoom-out-btn").addEventListener("click", () => setZoom(zoom / 1.2));
  document.getElementById("fit-btn").addEventListener("click", fitToScreen);
  document.getElementById("actual-btn").addEventListener("click", () => {
    const sImg = document.getElementById("stage-img");
    zoom = 1;
    if (sImg) {
      const w = sImg.naturalWidth || 1000;
      const h = sImg.naturalHeight || 800;
      panX = -(w * zoom) / 2;
      panY = -(h * zoom) / 2;
    } else { panX = 0; panY = 0; }
    applyTransform();
  });

  // Zoom input: click to type exact percentage
  zoomDisplay.addEventListener("focus", () => {
    zoomDisplay.select();
  });
  zoomDisplay.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const val = parseInt(zoomDisplay.value);
      if (!isNaN(val) && val > 0) {
        const sImg = document.getElementById("stage-img");
        const oldZoom = zoom;
        zoom = val / 100;
        // Re-center
        if (sImg) {
          const w = sImg.naturalWidth || 1000;
          const h = sImg.naturalHeight || 800;
          panX = -(w * zoom) / 2;
          panY = -(h * zoom) / 2;
        }
        applyTransform();
      }
      zoomDisplay.blur();
    }
    if (e.key === "Escape") {
      zoomDisplay.value = Math.round(zoom * 100) + "%";
      zoomDisplay.blur();
    }
  });
  zoomDisplay.addEventListener("blur", () => {
    zoomDisplay.value = Math.round(zoom * 100) + "%";
  });

  // ============== ADD / DUPLICATE / DELETE ==============
  function addLabelAt(x, y, text = "New label") {
    if (!currentImage()) return;
    pushHistory();
    const label = normalizeLabel({
      id: uid("lbl"),
      species: "",
      text,
      note: "",
      target: { x: round1(x), y: round1(y) },
      label: { x: clampCoord(round1(x + 8)), y: clampCoord(round1(y - 5)) },
      control: { x: clampCoord(round1(x + 4)), y: clampCoord(round1(y - 2.5)) },
      color: "cyan"
    });
    currentImage().labels.push(label);
    selectedIds = new Set([label.id]);
    primarySelection = label.id;
    primaryPart = "label";
    persist();
    render();
    setStatus(`Added "${text}"`);
    // Focus text field for fast typing
    setTimeout(() => I.text.select(), 30);
  }
  function addLabelWithText(text) {
    if (!currentImage()) {
      showToast("Load an image first");
      return;
    }
    addLabelAt(50, 50, text);
    showToast(`"${text}" added — drag the dot to position`);
  }
  function duplicateSelected() {
    const img = currentImage();
    if (!img || !primarySelection) return;
    pushHistory();
    const newIds = new Set();
    selectedIds.forEach((id) => {
      const orig = img.labels.find((l) => l.id === id);
      if (!orig) return;
      const copy = clone(orig);
      copy.id = uid("lbl");
      copy.target.x = clampCoord(copy.target.x + 2);
      copy.target.y = clampCoord(copy.target.y + 2);
      copy.label.x = clampCoord(copy.label.x + 2);
      copy.label.y = clampCoord(copy.label.y + 2);
      copy.control.x = clampCoord(copy.control.x + 2);
      copy.control.y = clampCoord(copy.control.y + 2);
      img.labels.push(copy);
      newIds.add(copy.id);
    });
    selectedIds = newIds;
    primarySelection = [...newIds][newIds.size - 1] || null;
    persist();
    render();
    setStatus(`Duplicated ${newIds.size} label(s)`);
  }
  function deleteSelected() {
    const img = currentImage();
    if (!img || !selectedIds.size) return;
    pushHistory();
    img.labels = img.labels.filter((l) => !selectedIds.has(l.id));
    selectedIds.clear();
    primarySelection = null;
    persist();
    render();
    setStatus("Deleted");
  }

  // ============== AUTO-ROUTE ==============
  // Place the label box on the side of the dot with the most empty space.
  function autoRoute() {
    const img = currentImage();
    if (!img || !primarySelection) return;
    const label = findLabel(primarySelection);
    if (!label) return;
    pushHistory();
    const t = label.target;
    // Pick the side with greatest distance to other targets, weighted by image edge
    const candidates = [
      { x: clampCoord(t.x + 18), y: t.y, side: "right" },
      { x: clampCoord(t.x - 18), y: t.y, side: "left" },
      { x: t.x, y: clampCoord(t.y - 14), side: "top" },
      { x: t.x, y: clampCoord(t.y + 14), side: "bottom" }
    ].filter((c) => c.x > 5 && c.x < 95 && c.y > 5 && c.y < 95);
    // Score: distance to other targets — pick max
    let best = candidates[0];
    let bestScore = -Infinity;
    candidates.forEach((c) => {
      const score = img.labels.reduce((acc, other) => {
        if (other.id === label.id) return acc;
        return acc + Math.hypot(c.x - other.target.x, c.y - other.target.y);
      }, 0);
      if (score > bestScore) { bestScore = score; best = c; }
    });
    label.label.x = round1(best.x);
    label.label.y = round1(best.y);
    label.control.x = round1((t.x + best.x) / 2);
    label.control.y = round1((t.y + best.y) / 2);
    persist();
    render();
    setStatus("Auto-routed");
  }

  // ============== COLOR ==============
  function setSelectedColor(color) {
    const img = currentImage();
    if (!img || !selectedIds.size) {
      showToast("Select a label first");
      return;
    }
    pushHistory();
    selectedIds.forEach((id) => {
      const l = img.labels.find((x) => x.id === id);
      if (l) l.color = color;
    });
    persist();
    render();
  }

  // ============== INSPECTOR FORM ==============
  function commitInspector() {
    const label = findLabel(primarySelection);
    if (!label) return;
    pushHistory();
    label.text = I.text.value.trim() || "Label";
    label.species = I.species.value.trim();
    label.note = I.note.value.trim();
    label.target.x = clampCoord(Number(I.tx.value) || 0);
    label.target.y = clampCoord(Number(I.ty.value) || 0);
    label.label.x = clampCoord(Number(I.lx.value) || 0);
    label.label.y = clampCoord(Number(I.ly.value) || 0);
    label.control.x = clampCoord(Number(I.cx.value) || 0);
    label.control.y = clampCoord(Number(I.cy.value) || 0);
    label.fontSize = parseInt(I.fontSize.value) || 13;
    label.lineWidth = parseFloat(I.lineWidth.value) || 1.5;
    label.dotSize = parseInt(I.dotSize.value) || 14;
    fontSizeVal.textContent = label.fontSize + "px";
    lineWidthVal.textContent = label.lineWidth;
    dotSizeVal.textContent = label.dotSize + "px";
    persist();
    render();
  }
  // Wire all inspector inputs including sliders
  [I.text, I.species, I.note, I.tx, I.ty, I.lx, I.ly, I.cx, I.cy].forEach((el) => el.addEventListener("input", commitInspector));
  I.fontSize.addEventListener("input", commitInspector);
  I.lineWidth.addEventListener("input", commitInspector);
  I.dotSize.addEventListener("input", commitInspector);

  document.getElementById("auto-route-btn").addEventListener("click", autoRoute);
  document.getElementById("duplicate-btn").addEventListener("click", duplicateSelected);
  document.getElementById("delete-btn").addEventListener("click", deleteSelected);

  // ============== EXPORT ==============
  function buildExportText() {
    const img = currentImage();
    if (!img) return "";
    return `window.imageAnnotations = window.imageAnnotations || {};\n\nwindow.imageAnnotations[${JSON.stringify(img.id)}] = ${JSON.stringify({
      title: img.title,
      image: img.image.startsWith("data:") ? `images/${img.title.toLowerCase().replace(/\s+/g, "-")}.png` : img.image,
      alt: img.alt,
      labels: img.labels
    }, null, 2)};\n`;
  }

  document.getElementById("copy-json-btn").addEventListener("click", async () => {
    if (!currentImage()) return showToast("No image loaded");
    try {
      await navigator.clipboard.writeText(buildExportText());
      showToast("JSON copied to clipboard");
    } catch (e) {
      showToast("Clipboard failed — try Download");
    }
  });

  document.getElementById("download-json-btn").addEventListener("click", () => {
    const img = currentImage();
    if (!img) return showToast("No image loaded");
    const blob = new Blob([buildExportText()], { type: "application/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `data-annotations-${img.title.toLowerCase().replace(/\s+/g, "-")}.JS`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Downloaded");
  });

  // EXPORT PNG — burn arrows + labels into the image via canvas
  document.getElementById("export-png-btn").addEventListener("click", async () => {
    const img = currentImage();
    if (!img) return showToast("No image loaded");
    setStatus("Exporting PNG…", 0);
    try {
      const blob = await renderAnnotatedPNG(img);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${img.title.toLowerCase().replace(/\s+/g, "-")}-annotated.png`;
      a.click();
      URL.revokeObjectURL(url);
      setStatus("PNG exported", 2000);
      showToast("PNG downloaded");
    } catch (err) {
      console.error(err);
      setStatus("Export failed", 3000);
      showToast("PNG export failed");
    }
  });

  function renderAnnotatedPNG(imgData) {
    return new Promise((resolve, reject) => {
      const im = new Image();
      im.crossOrigin = "anonymous";
      im.onload = () => {
        const W = im.naturalWidth, H = im.naturalHeight;
        const canvas = document.createElement("canvas");
        canvas.width = W; canvas.height = H;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(im, 0, 0, W, H);

        const SCALE = Math.min(W, H) / 100;

        // Draw leader lines first
        imgData.labels.forEach((l) => {
          const tx = (l.target.x / 100) * W, ty = (l.target.y / 100) * H;
          const cx = (l.control.x / 100) * W, cy = (l.control.y / 100) * H;
          const lx = (l.label.x / 100) * W, ly = (l.label.y / 100) * H;
          const lw = l.lineWidth != null ? l.lineWidth : 1.5;
          ctx.strokeStyle = COLOR_HEX[l.color] || "#fff";
          ctx.lineWidth = Math.max(1, lw * 0.18 * SCALE);
          ctx.beginPath();
          ctx.moveTo(lx, ly);
          ctx.quadraticCurveTo(cx, cy, tx, ty);
          ctx.stroke();
          // dot at target
          const dotR = (l.dotSize || 14) * 0.04 * SCALE + 1;
          ctx.beginPath();
          ctx.arc(tx, ty, dotR, 0, Math.PI * 2);
          ctx.fillStyle = COLOR_HEX[l.color] || "#fff";
          ctx.fill();
          ctx.strokeStyle = "#000";
          ctx.lineWidth = 1;
          ctx.stroke();
        });

        // Draw label text boxes
        ctx.textBaseline = "middle";
        imgData.labels.forEach((l) => {
          const fs = l.fontSize || 13;
          const labelFont = `bold ${Math.round(fs * 0.18 * SCALE)}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
          ctx.font = labelFont;
          const lx = (l.label.x / 100) * W, ly = (l.label.y / 100) * H;
          const text = l.text;
          const padX = Math.round(0.8 * SCALE) + 4;
          const padY = Math.round(0.5 * SCALE) + 3;
          const m = ctx.measureText(text);
          const tw = m.width;
          const th = parseFloat(labelFont) || 16;
          const bx = lx - tw / 2 - padX;
          const by = ly - th / 2 - padY;
          const bw = tw + padX * 2;
          const bh = th + padY * 2;
          ctx.fillStyle = "rgba(0,0,0,0.85)";
          ctx.fillRect(bx, by, bw, bh);
          const borderLw = l.lineWidth != null ? l.lineWidth : 1.5;
          ctx.strokeStyle = COLOR_HEX[l.color] || "#fff";
          ctx.lineWidth = Math.max(1, borderLw * 0.12 * SCALE);
          ctx.strokeRect(bx, by, bw, bh);
          ctx.fillStyle = COLOR_HEX[l.color] || "#fff";
          ctx.textAlign = "center";
          ctx.fillText(text, lx, ly);
        });

        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
          else reject(new Error("Canvas blob failed"));
        }, "image/png");
      };
      im.onerror = () => reject(new Error("Image load failed"));
      im.src = imgData.image;
    });
  }

  // ============== TOGGLES ==============
  const linesBtn = document.getElementById("lines-toggle");
  linesBtn.addEventListener("click", () => {
    showLines = !showLines;
    linesBtn.classList.toggle("active", showLines);
    render();
  });

  const previewBtn = document.getElementById("preview-toggle");
  previewBtn.addEventListener("click", () => {
    previewMode = !previewMode;
    previewBtn.classList.toggle("active", previewMode);
    document.body.classList.toggle("hide-panels", previewMode);
    render();
  });

  // ============== UNDO/REDO BUTTONS ==============
  document.getElementById("undo-btn").addEventListener("click", undo);
  document.getElementById("redo-btn").addEventListener("click", redo);

  // ============== KEYBOARD ==============
  window.addEventListener("keydown", (e) => {
    const inField = ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName);

    if (e.code === "Space" && !inField) {
      spaceHeld = true;
      stageWrap.classList.add("space-held");
      e.preventDefault();
      return;
    }

    if (inField) return;

    // Modifier-aware shortcuts
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") { e.preventDefault(); return undo(); }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") { e.preventDefault(); return redo(); }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "d") { e.preventDefault(); return duplicateSelected(); }
    if ((e.ctrlKey || e.metaKey)) return;

    // Number keys 2-8: always quick color. Key 1: quick color if label selected, else actual size
    if (/^[2-8]$/.test(e.key) && primarySelection) {
      setSelectedColor(COLORS[parseInt(e.key) - 1]);
      return;
    }

    // Single-key shortcuts
    switch (e.key.toLowerCase()) {
      case "n": addLabelAt(50, 50, "New label"); break;
      case "d": duplicateSelected(); break;
      case "delete": case "backspace": deleteSelected(); break;
      case "l": linesBtn.click(); break;
      case "p": previewBtn.click(); break;
      case "f": fitToScreen(); break;
      case "1":
        if (primarySelection) { setSelectedColor(COLORS[0]); }
        else { document.getElementById("actual-btn").click(); }
        break;
      case "+": case "=": setZoom(zoom * 1.2); break;
      case "-": setZoom(zoom / 1.2); break;
      case "e": document.getElementById("export-png-btn").click(); break;
      case "o": fileInput.click(); break;
      case "escape": clearSelection(); break;
      case "tab":
        e.preventDefault();
        cycleLabel(e.shiftKey ? -1 : 1);
        break;
      case "arrowup": nudge(0, -(e.shiftKey ? 1 : 0.3)); e.preventDefault(); break;
      case "arrowdown": nudge(0, e.shiftKey ? 1 : 0.3); e.preventDefault(); break;
      case "arrowleft": nudge(-(e.shiftKey ? 1 : 0.3), 0); e.preventDefault(); break;
      case "arrowright": nudge(e.shiftKey ? 1 : 0.3, 0); e.preventDefault(); break;
    }
  });
  window.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
      spaceHeld = false;
      stageWrap.classList.remove("space-held");
    }
  });

  function nudge(dx, dy) {
    const img = currentImage();
    if (!img || !selectedIds.size) return;
    pushHistory();
    selectedIds.forEach((id) => {
      const l = img.labels.find((x) => x.id === id);
      if (!l) return;
      l[primaryPart] = l[primaryPart] || l.label;
      l[primaryPart].x = clampCoord(l[primaryPart].x + dx);
      l[primaryPart].y = clampCoord(l[primaryPart].y + dy);
    });
    persist();
    render();
  }

  // ============== LABEL CYCLING (Tab / Shift+Tab) ==============
  function cycleLabel(dir) {
    const img = currentImage();
    if (!img || !img.labels.length) return;
    const ids = img.labels.map((l) => l.id);
    let idx = primarySelection ? ids.indexOf(primarySelection) : -1;
    idx += dir;
    if (idx < 0) idx = ids.length - 1;
    if (idx >= ids.length) idx = 0;
    selectOnly(ids[idx]);
    setStatus(`Label ${idx + 1}/${ids.length}`);
  }

  // ============== DOUBLE-CLICK TO RENAME ==============
  stage.addEventListener("dblclick", (e) => {
    const labelEl = e.target.closest(".ann-label[data-id]");
    if (!labelEl) return;
    const id = labelEl.dataset.id;
    const label = findLabel(id);
    if (!label) return;
    // Create inline input
    const input = document.createElement("input");
    input.type = "text";
    input.className = "ann-label-rename";
    input.value = label.text;
    input.style.left = label.label.x + "%";
    input.style.top = label.label.y + "%";
    input.style.fontSize = (label.fontSize || 13) + "px";
    stage.appendChild(input);
    labelEl.style.visibility = "hidden";
    input.focus();
    input.select();
    const commit = () => {
      const newText = input.value.trim() || "Label";
      if (newText !== label.text) {
        pushHistory();
        label.text = newText;
        persist();
      }
      input.remove();
      render();
    };
    input.addEventListener("blur", commit);
    input.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") { ev.preventDefault(); input.blur(); }
      if (ev.key === "Escape") { input.value = label.text; input.blur(); }
      ev.stopPropagation();
    });
  });

  // ============== LABEL SEARCH ==============
  labelSearch.addEventListener("input", renderLabelList);

  // ============== INIT ==============
  renderSwatches();
  renderLandmarks();
  if (currentImageId && library.images[currentImageId]) {
    render();
    setTimeout(fitToScreen, 100);
  } else {
    render();
  }
  showToast("Tip: Drop an image, or click a landmark to start");
})();
