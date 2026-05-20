# 🖼️ IVRI Anatomy — Image Compressor

A one-click tool that takes any image you drop into a folder and compresses it
to **under 300 KB** as **WebP** — without visibly hurting quality. Ready to use
on the website immediately.

---

## ⚡ Quick start (Windows)

### 1. One-time setup
1. **Install Python** (only needed the first time):
   - Go to https://www.python.org/downloads/
   - Download Python 3 (any version ≥ 3.8).
   - During install, **check the box "Add Python to PATH"** at the bottom of the installer.

That's it. You don't need to install Pillow manually — the script does that
for you on first run.

### 2. Every time you have new images

1. Drop your raw images (any size, any format — JPG, PNG, etc.) into:
   - `images-raw/atlas/` for **regional anatomy** images
   - `images-raw/why/` for **WHY (biomechanics)** card images

2. Double-click `tools/compress.bat`.

3. Wait a few seconds. A black window opens, lists every image, says ✓ when done, and closes when you press a key.

4. Find the compressed `.webp` files in:
   - `images/atlas/`
   - `images/why/`

5. Use them in your data files like:
   ```js
   img: "images/atlas/scapula-ox.webp"
   ```

The original raw files are auto-moved into a `_done/` sub-folder so you don't
process them twice.

---

## 🎯 What the script does

| Step | What happens |
|------|--------------|
| 1. **Cleans the filename** | `Scapula Ox Lateral.JPG` → `scapula-ox-lateral.webp` |
| 2. **Resizes** if too large | Longest side capped at **1500 px** (HD quality, smaller file) |
| 3. **Converts to WebP** | ~30 % smaller than JPG at the same visual quality |
| 4. **Tries quality 85** | If file < 300 KB → done |
| 5. **Drops quality** | If still too big, retries at 80, 75, 70… down to 55 |
| 6. **Reports** | Shows final KB + dimensions + quality level it landed on |

If an image **cannot** be brought under 300 KB even at quality 55 (e.g. a
massive medical scan), the script keeps the smallest version it produced and
prints a warning — never silently degrades the image to garbage.

---

## 🔧 Advanced

Run from a terminal in the project root:

```
python tools/compress.py            # normal — skip already-compressed files
python tools/compress.py --force    # re-compress everything
python tools/compress.py --keep-raw # keep originals in images-raw/ (don't archive)
```

---

## 📁 Folder layout
```
kimi-anatomy/
├── images/                  ← FINAL files used by the website
│   ├── atlas/                   (compressed WebP)
│   └── why/                     (compressed WebP)
├── images-raw/              ← DROP-ZONE for raw originals
│   ├── atlas/
│   │   └── _done/               (auto-archived after compression)
│   └── why/
│       └── _done/
└── tools/
    ├── compress.py
    ├── compress.bat        ← Double-click this
    └── README.md           (this file)
```

---

## ❓ Troubleshooting

**"Python is not installed or not in PATH"**
→ Re-run the Python installer and tick **"Add Python to PATH"**, then restart the computer.

**"Pillow could not be installed"**
→ Open Command Prompt and run: `python -m pip install Pillow`

**The script crashed on one image**
→ The file is probably corrupt or in a weird format. Open it in Photoshop / Photopea, save as JPG, drop the new copy in.

**An image stayed above 300 KB**
→ It was either too detailed or too big. Open it in Squoosh.app (free, browser) and manually resize to ~1200 px wide before re-running this script.
