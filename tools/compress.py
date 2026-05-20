#!/usr/bin/env python3
# =============================================================
# IVRI Anatomy — Image Auto-Compressor
# =============================================================
# Drops in-place: scans  images-raw/atlas/  and  images-raw/why/
# Compresses each image to WebP under 300 KB without hurting quality.
# Outputs to  images/atlas/  and  images/why/  ready to use on the site.
#
# USAGE (any of these):
#    1. Double-click  tools/compress.bat   (Windows, easiest)
#    2. Or run from the project root:        python tools/compress.py
#    3. Or to re-process everything:         python tools/compress.py --force
#
# REQUIREMENTS:
#    Python 3.8+   (https://www.python.org/downloads/)
#    Pillow lib    (auto-installed if missing)
# =============================================================

import os
import sys
import shutil
import argparse
from pathlib import Path

# ------- Auto-install Pillow if needed (first run) ----------
try:
    from PIL import Image
except ImportError:
    print("Pillow library not found. Installing automatically...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "--quiet", "Pillow"])
    from PIL import Image

# ============== CONFIGURATION ==============
TARGET_KB = 300                # soft target — sweet spot
HARD_LIMIT_KB = 310            # absolute ceiling — never go above this
MAX_WIDTH = 1600               # resize so longest side ≤ this many px (was 1500)
START_QUALITY = 95             # try near-lossless first (was 85 — caused over-compression)
MIN_QUALITY = 72               # never drop below this (still visually crisp)
QUALITY_STEP = 2               # finer steps = lands closer to the budget (was 5)
SUPPORTED = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tif", ".tiff"}

PROJECT = Path(__file__).resolve().parent.parent
RAW_DIRS = {
    "atlas": PROJECT / "images-raw" / "atlas",
    "why":   PROJECT / "images-raw" / "why",
}
OUT_DIRS = {
    "atlas": PROJECT / "images" / "atlas",
    "why":   PROJECT / "images" / "why",
}
DONE_DIR_NAME = "_done"        # sub-folder where processed originals are moved


# ============== HELPER FUNCTIONS ==============
def colour(text, code):
    """ANSI colour helper — works in modern Windows Terminal + Linux + Mac."""
    return f"\033[{code}m{text}\033[0m"

def green(t): return colour(t, "32")
def yellow(t): return colour(t, "33")
def red(t): return colour(t, "31")
def cyan(t): return colour(t, "36")
def bold(t): return colour(t, "1")


def slug(name: str) -> str:
    """Make a filename web-safe: lowercase, hyphens, no spaces or weird chars."""
    base = Path(name).stem
    safe = "".join(c if c.isalnum() else "-" for c in base.lower())
    while "--" in safe:
        safe = safe.replace("--", "-")
    return safe.strip("-") or "image"


def compress_one(src_path: Path, out_dir: Path, force: bool) -> dict:
    """Compress a single image to WebP under TARGET_KB. Returns a status dict."""
    out_name = slug(src_path.name) + ".webp"
    out_path = out_dir / out_name

    # Skip if already done unless --force
    if out_path.exists() and not force:
        return {"name": src_path.name, "status": "skip",
                "msg": f"already exists: {out_name}"}

    try:
        with Image.open(src_path) as im:
            # Convert any transparency/CMYK to clean RGB on a white background
            if im.mode in ("RGBA", "LA"):
                bg = Image.new("RGB", im.size, (255, 255, 255))
                bg.paste(im, mask=im.split()[-1])
                im = bg
            elif im.mode != "RGB":
                im = im.convert("RGB")

            # Resize so longest side <= MAX_WIDTH
            longest = max(im.size)
            if longest > MAX_WIDTH:
                scale = MAX_WIDTH / longest
                new_size = (int(im.size[0] * scale), int(im.size[1] * scale))
                im = im.resize(new_size, Image.Resampling.LANCZOS)

            # ---- Smart quality search ----
            # Goal: pick the HIGHEST quality that keeps the file under HARD_LIMIT_KB.
            # We try high quality first; only step down when needed.
            target_bytes = TARGET_KB * 1024
            hard_bytes = HARD_LIMIT_KB * 1024
            out_dir.mkdir(parents=True, exist_ok=True)

            quality = START_QUALITY
            best_save = None      # (quality, size) we'll keep if final attempt overshoots

            while quality >= MIN_QUALITY:
                im.save(out_path, format="WEBP", quality=quality, method=6)
                size = out_path.stat().st_size

                # Remember the smallest version we ever produced
                if best_save is None or size < best_save[1]:
                    best_save = (quality, size)

                if size <= hard_bytes:
                    # Within budget. If we have lots of headroom AND we're not at max quality,
                    # the user said: "use up to 250 KB or so for better quality".
                    # We already started at 95 — stop here. Higher quality doesn't help.
                    break

                # Over the hard limit → drop quality and retry
                quality -= QUALITY_STEP

            # If we exited the loop and the FINAL save is over the hard limit, fall back
            # to the smallest one we made (best_save) by saving once more at that quality.
            if size > hard_bytes and best_save and best_save[0] != quality:
                quality = best_save[0]
                im.save(out_path, format="WEBP", quality=quality, method=6)
                size = out_path.stat().st_size

            kb = size / 1024
            status = "ok" if size <= hard_bytes else "warn"
            return {
                "name": src_path.name,
                "status": status,
                "out": out_name,
                "kb": kb,
                "quality": quality,
                "size_px": im.size,
            }
    except Exception as e:
        return {"name": src_path.name, "status": "err", "msg": str(e)}


def move_to_done(src_path: Path):
    """After successful processing, archive the original raw file."""
    done_dir = src_path.parent / DONE_DIR_NAME
    done_dir.mkdir(exist_ok=True)
    target = done_dir / src_path.name
    # Avoid clobbering an older file with the same name
    n = 1
    while target.exists():
        target = done_dir / f"{src_path.stem}-{n}{src_path.suffix}"
        n += 1
    shutil.move(str(src_path), str(target))


# ============== MAIN ==============
def main():
    parser = argparse.ArgumentParser(description="IVRI image compressor")
    parser.add_argument("--force", action="store_true",
                        help="Re-process even if WebP already exists")
    parser.add_argument("--keep-raw", action="store_true",
                        help="Don't move originals into _done/ after success")
    args = parser.parse_args()

    print()
    print(bold(cyan("════════════════════════════════════════════════════════")))
    print(bold(cyan("  IVRI Anatomy — Image Auto-Compressor")))
    print(bold(cyan("════════════════════════════════════════════════════════")))
    print(f"  Target size : {TARGET_KB} KB (hard ceiling: {HARD_LIMIT_KB} KB)")
    print(f"  Max width   : {MAX_WIDTH} px (longest side)")
    print(f"  Quality     : starts at {START_QUALITY}, drops only as needed (min {MIN_QUALITY})")
    print(f"  Output      : WebP (best quality / size ratio)")
    print()

    grand_total = 0
    grand_done = 0
    grand_warn = 0
    grand_err = 0

    for section in ("atlas", "why"):
        raw = RAW_DIRS[section]
        out = OUT_DIRS[section]
        if not raw.exists():
            continue

        # Gather candidate files (ignore hidden + the _done archive)
        candidates = [
            p for p in sorted(raw.iterdir())
            if p.is_file()
            and p.suffix.lower() in SUPPORTED
            and not p.name.startswith(".")
        ]

        if not candidates:
            print(yellow(f"⚠  No images found in images-raw/{section}/"))
            print(f"   Drop your raw {section} images into that folder, then run me again.\n")
            continue

        print(bold(cyan(f"▼ Processing  images-raw/{section}/  ({len(candidates)} files)")))

        for src in candidates:
            grand_total += 1
            result = compress_one(src, out, args.force)
            name = result["name"]

            if result["status"] == "ok":
                grand_done += 1
                w, h = result["size_px"]
                msg = (f"  {green('✓')} {name:<35} → "
                       f"{result['out']:<35} "
                       f"{result['kb']:6.1f} KB  q={result['quality']}  {w}×{h}")
                print(msg)
                if not args.keep_raw:
                    move_to_done(src)
            elif result["status"] == "warn":
                grand_warn += 1
                w, h = result["size_px"]
                msg = (f"  {yellow('!')} {name:<35} → "
                       f"{result['out']:<35} "
                       f"{result['kb']:6.1f} KB  q={result['quality']}  (above target, kept)")
                print(msg)
                if not args.keep_raw:
                    move_to_done(src)
            elif result["status"] == "skip":
                msg = f"  {cyan('·')} {name:<35} → {result['msg']}"
                print(msg)
            else:
                grand_err += 1
                msg = f"  {red('✗')} {name:<35} → ERROR: {result.get('msg','?')}"
                print(msg)

        print()

    print(bold(cyan("────────────────────────────────────────────────────────")))
    print(f"  Done : {green(str(grand_done))} ok"
          f"   warn : {yellow(str(grand_warn))}"
          f"   errors : {red(str(grand_err))}"
          f"   total : {grand_total}")
    print(bold(cyan("════════════════════════════════════════════════════════")))
    if grand_done > 0:
        print(green("  ✓ Compressed images are now in images/atlas/ and images/why/."))
        if not args.keep_raw:
            print(cyan("  · Originals were moved to _done/ inside each raw folder."))
    print()


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nCancelled.")
        sys.exit(1)
