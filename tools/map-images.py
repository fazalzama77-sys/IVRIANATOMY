#!/usr/bin/env python3
# =============================================================
# IVRI Anatomy - Image -> Data Mapper
# =============================================================
# Scans images/atlas/ and images/why/ and figures out which atlas
# data entry each image belongs to. Produces a browser-openable
# report (tools/image-map-report.html) showing:
#    * High-confidence matches (auto-applicable)
#    * Probable matches (needs your eye)
#    * No-match images
#    * Entries still missing an image
#
# USAGE:
#    1. Double-click  tools/map-images.bat                 -> report only
#    2. Double-click  tools/map-images-apply.bat           -> writes
#       the high-confidence "img:" lines into data-*.JS
#       (makes a .bak of every file it touches; safe to rerun)
#
# This script reads the data files as plain text (no parser, no
# dependencies). It only ever ADDS an "img:" line; it never
# overwrites an entry that already has one.
# =============================================================

import os
import re
import sys
import argparse
from pathlib import Path
from datetime import datetime

PROJECT = Path(__file__).resolve().parent.parent
IMG_DIRS = {
    "atlas": PROJECT / "images" / "atlas",
    "why":   PROJECT / "images" / "why",
}
DATA_FILES = sorted(PROJECT.glob("data-*.JS")) + sorted(PROJECT.glob("data-*.js"))
REPORT_PATH = PROJECT / "tools" / "image-map-report.html"

AUTO_APPLY_THRESHOLD = 85   # >= this score = high-confidence
SUGGEST_THRESHOLD    = 45   # >= this score = show as suggestion
SUPPORTED_EXT = {".webp", ".jpg", ".jpeg", ".png"}

STOPWORDS = {
    "of", "the", "and", "in", "on", "to", "a", "an", "is",
    "with", "for", "by", "ox", "dog", "horse", "fowl", "pig",
}


# ============== HELPERS ==============
def slug(name: str) -> str:
    base = Path(name).stem.lower()
    safe = "".join(c if c.isalnum() else "-" for c in base)
    while "--" in safe:
        safe = safe.replace("--", "-")
    return safe.strip("-")


def tokens(s: str):
    return set(t for t in slug(s).split("-") if len(t) > 2 and t not in STOPWORDS)


def colour(text, code):
    return f"\033[{code}m{text}\033[0m"
def green(t):  return colour(t, "32")
def yellow(t): return colour(t, "33")
def red(t):    return colour(t, "31")
def cyan(t):   return colour(t, "36")
def bold(t):   return colour(t, "1")


# ============== DATA-FILE PARSER ==============
TITLE_RE = re.compile(r'title:\s*"((?:[^"\\]|\\.)*)"')


def find_entries(text: str):
    """Locate every atlas-entry object in a data file.

    Strategy: each entry begins with a 'title: "..."' line. Walk
    backwards to the opening '{' of that entry, then forward to
    the matching '}'. Skips nested braces (comparative arrays,
    quiz objects, etc.).
    """
    entries = []
    for m in TITLE_RE.finditer(text):
        # Walk backwards to find the '{' that opens this entry's object
        j = m.start()
        depth = 0
        start = None
        while j > 0:
            c = text[j]
            if c == '}':
                depth += 1
            elif c == '{':
                if depth == 0:
                    start = j
                    break
                depth -= 1
            j -= 1
        if start is None:
            continue

        # Forward to matching '}'
        k = start
        depth = 0
        end = None
        in_str = False
        str_ch = ''
        while k < len(text):
            c = text[k]
            if in_str:
                if c == '\\':
                    k += 2
                    continue
                if c == str_ch:
                    in_str = False
            else:
                if c in ('"', "'"):
                    in_str = True
                    str_ch = c
                elif c == '{':
                    depth += 1
                elif c == '}':
                    depth -= 1
                    if depth == 0:
                        end = k
                        break
            k += 1
        if end is None:
            continue

        block = text[start:end + 1]
        imgCode_m = re.search(r'imgCode:\s*"((?:[^"\\]|\\.)*)"', block)
        img_m = re.search(r'\bimg:\s*"((?:[^"\\]|\\.)*)"', block)

        entries.append({
            "title": m.group(1),
            "imgCode": imgCode_m.group(1) if imgCode_m else None,
            "existing_img": img_m.group(1) if img_m else None,
            "block_start": start,
            "block_end": end,
            "title_line_end": text.find("\n", m.end()),
        })
    return entries


def detect_section(data_file_name: str):
    """Guess whether this data file maps to atlas or why images."""
    n = data_file_name.lower()
    if "why" in n:
        return "why"
    return "atlas"


# ============== MATCHING ==============
def score_match(file_slug: str, entry: dict) -> int:
    fs = file_slug
    ts = slug(entry["title"])
    ic = (entry["imgCode"] or "").lower()

    if ic and fs == ic:
        return 100
    if fs == ts:
        return 98
    if ic and fs.startswith(ic + "-"):
        return 88
    if ic and ic in fs.split("-"):
        return 84
    if ic and ic in fs:
        return 78

    # Token overlap
    t_tokens = tokens(entry["title"])
    f_tokens = set(t for t in fs.split("-") if len(t) > 2 and t not in STOPWORDS)
    if not t_tokens:
        return 0
    if t_tokens.issubset(f_tokens):
        return 82
    overlap = t_tokens & f_tokens
    if not overlap:
        return 0
    return int(45 + 35 * len(overlap) / len(t_tokens))


# ============== APPLY (write img: into data file) ==============
def inject_img_line(text: str, entry: dict, img_path: str) -> str:
    """Insert  img: "..."  into the entry's object literal.

    Insertion point: right after the existing imgCode line if any,
    otherwise right after the title line. Indentation is copied
    from the title line so it lines up with sibling fields.
    """
    if entry["existing_img"]:
        return text  # never overwrite

    block = text[entry["block_start"]:entry["block_end"] + 1]

    # Find indentation of the title line within the block
    title_local = block.find('title:')
    line_start = block.rfind('\n', 0, title_local) + 1
    indent = ''
    for ch in block[line_start:title_local]:
        if ch in (' ', '\t'):
            indent += ch
        else:
            break
    if not indent:
        indent = '            '  # sensible fallback (12 spaces)

    new_line = f'\n{indent}img: "{img_path}",'

    # Prefer inserting after imgCode line; otherwise after title line
    imgCode_m = re.search(r'imgCode:\s*"((?:[^"\\]|\\.)*)",?', block)
    if imgCode_m:
        insertion_local = block.find('\n', imgCode_m.end())
        if insertion_local == -1:
            insertion_local = imgCode_m.end()
    else:
        insertion_local = block.find('\n', title_local)
        if insertion_local == -1:
            insertion_local = block.find(',', title_local) + 1

    insertion_global = entry["block_start"] + insertion_local
    return text[:insertion_global] + new_line + text[insertion_global:]


# ============== REPORT ==============
HTML_HEAD = """<!doctype html><meta charset="utf-8">
<title>IVRI Anatomy - Image Map Report</title>
<style>
  body { font-family: ui-sans-serif, system-ui, sans-serif; background:#0e1320; color:#e8eef8; padding:24px; }
  h1 { color:#ffd54f; font-family:ui-monospace,monospace; }
  h2 { color:#00f2ff; font-family:ui-monospace,monospace; margin-top:32px; border-bottom:1px solid #2a3550; padding-bottom:6px; }
  .row { display:grid; grid-template-columns: 220px 1fr 80px; gap:12px; padding:8px 10px; border-bottom:1px solid #1d2640; align-items:center; }
  .row:hover { background:#161e35; }
  code { background:#0a0f1c; padding:2px 6px; border-radius:4px; color:#ffd54f; font-size:.85em; }
  .file { color:#9bb; font-family:ui-monospace,monospace; word-break:break-all; }
  .match { color:#cce; }
  .score { text-align:right; font-family:ui-monospace,monospace; }
  .s-100, .s-95, .s-90, .s-85 { color:#7cf07c; }
  .s-80, .s-75, .s-70, .s-65, .s-60 { color:#ffd54f; }
  .s-low { color:#f48fb1; }
  .none  { color:#f48fb1; }
  .copyline { background:#0a0f1c; padding:8px 10px; border-radius:6px; font-family:ui-monospace,monospace; font-size:.85em; color:#7cf07c; margin-top:4px; user-select:all; }
  .meta { color:#9bb; font-size:.85em; margin-top:-10px; margin-bottom:18px; }
  .pill { display:inline-block; padding:2px 8px; border-radius:10px; font-size:.75em; font-family:ui-monospace,monospace; margin-left:6px; }
  .pill.atlas { background:#143a5f; color:#9ddcff; }
  .pill.why   { background:#5f1437; color:#ffb4d2; }
  .pill.done  { background:#0d3a1a; color:#a3f0b3; }
  details { background:#13192b; padding:10px 14px; border-radius:6px; margin-top:10px; }
  summary { cursor:pointer; color:#ffd54f; }
</style>
"""


def render_report(buckets, all_entries, missing_imgs):
    parts = [HTML_HEAD]
    parts.append(f"<h1>IVRI Anatomy - Image Map Report</h1>")
    parts.append(f'<div class="meta">Generated {datetime.now().strftime("%Y-%m-%d %H:%M")} - '
                 f'{buckets["counts"]["high"]} auto-applicable - '
                 f'{buckets["counts"]["suggest"]} suggestions - '
                 f'{buckets["counts"]["none"]} no-match - '
                 f'{len(missing_imgs)} entries still need an image</div>')

    parts.append('<details><summary>How to use this report</summary>'
                 '<p>1. Run <code>tools/map-images-apply.bat</code> to auto-write the green (high-confidence) matches into your data files.<br>'
                 '2. For yellow (probable) matches, copy the <code>img: "..."</code> line and paste it into the data file yourself.<br>'
                 '3. Red rows mean the image filename did not match any data entry - rename the file to match the title slug, or it stays unused.<br>'
                 '4. The "Entries still missing an image" section tells you which data entries are waiting for art.</p></details>')

    def render_bucket(title, rows, klass, empty_msg):
        parts.append(f"<h2>{title} ({len(rows)})</h2>")
        if not rows:
            parts.append(f'<div class="meta">{empty_msg}</div>')
            return
        for r in rows:
            score = r["score"]
            score_class = "s-low"
            if score >= 85: score_class = f"s-{(score//5)*5}"
            elif score >= 60: score_class = f"s-{(score//5)*5}"
            section_pill = f'<span class="pill {r["section"]}">{r["section"]}</span>'
            done_pill = '<span class="pill done">already has img</span>' if r.get("already") else ''
            parts.append('<div class="row">')
            parts.append(f'  <div class="file">{r["file"]} {section_pill}</div>')
            parts.append(f'  <div class="match">{r["entry_title"]} <small style="color:#778">[{r["data_file"]}]</small> {done_pill}</div>')
            parts.append(f'  <div class="score {score_class}">{score if score else "-"}</div>')
            parts.append('</div>')
            if not r.get("already") and score >= SUGGEST_THRESHOLD:
                parts.append(f'<div class="copyline">img: "{r["img_path"]}",</div>')

    render_bucket("HIGH-CONFIDENCE matches (apply with map-images-apply.bat)",
                  buckets["high"], "high",
                  "No high-confidence matches found.")
    render_bucket("PROBABLE matches (review and paste manually)",
                  buckets["suggest"], "suggest",
                  "No probable matches.")
    render_bucket("NO match found (rename file to match title slug)",
                  buckets["none"], "none",
                  "Every image was matched to an entry.")

    parts.append(f'<h2>Entries still missing an image ({len(missing_imgs)})</h2>')
    if missing_imgs:
        parts.append('<div class="meta">These data entries have no <code>img:</code> field yet. '
                     'Suggested filenames are based on the title slug.</div>')
        for e in missing_imgs:
            sug = slug(e["title"]) + ".webp"
            parts.append('<div class="row">')
            parts.append(f'  <div class="file">{sug}</div>')
            parts.append(f'  <div class="match">{e["title"]} <small style="color:#778">[{e["data_file"]}]</small></div>')
            parts.append('  <div class="score">needs art</div>')
            parts.append('</div>')
    else:
        parts.append('<div class="meta">Every entry already has an image.</div>')

    REPORT_PATH.write_text("\n".join(parts), encoding="utf-8")


# ============== MAIN ==============
def main():
    parser = argparse.ArgumentParser(description="Map images to data entries.")
    parser.add_argument("--apply", action="store_true",
                        help="Write high-confidence img: lines into data files.")
    args = parser.parse_args()

    print()
    print(bold(cyan("================================================")))
    print(bold(cyan("  IVRI Anatomy - Image -> Data Mapper")))
    print(bold(cyan("================================================")))
    print(f"  Mode: {'APPLY (will edit data files)' if args.apply else 'REPORT ONLY'}")
    print()

    # Step 1: parse every data file
    all_entries = []   # list of dicts: section, data_file, ...entry fields
    file_texts = {}    # data_file path -> text
    for df in DATA_FILES:
        text = df.read_text(encoding="utf-8")
        file_texts[df] = text
        section = detect_section(df.name)
        for e in find_entries(text):
            e["section"] = section
            e["data_file"] = df.name
            e["data_path"] = df
            all_entries.append(e)
    print(f"  Parsed {len(DATA_FILES)} data files -> {len(all_entries)} entries.")

    # Step 2: collect images
    images = []
    for section, d in IMG_DIRS.items():
        if not d.exists():
            continue
        for p in sorted(d.iterdir()):
            if p.is_file() and p.suffix.lower() in SUPPORTED_EXT and not p.name.startswith("."):
                images.append({
                    "section": section,
                    "name": p.name,
                    "slug": slug(p.name),
                    "rel": f"images/{section}/{p.name}",
                })
    print(f"  Found {len(images)} images.")
    print()

    # Step 3: for each image, find best entry
    buckets = {"high": [], "suggest": [], "none": [], "counts": {"high":0, "suggest":0, "none":0}}
    matched_entry_keys = set()   # (data_file, block_start) -> already assigned an image this run

    for img in images:
        # Restrict candidates to entries of the same section when possible
        candidates = [e for e in all_entries if e["section"] == img["section"]] or all_entries
        best = None
        best_score = 0
        for e in candidates:
            s = score_match(img["slug"], e)
            if s > best_score:
                best_score = s
                best = e

        row = {
            "file": img["name"],
            "section": img["section"],
            "img_path": img["rel"],
            "score": best_score,
            "entry_title": best["title"] if best else "(no candidate)",
            "data_file": best["data_file"] if best else "-",
            "entry": best,
            "already": bool(best and best["existing_img"]),
        }

        if best and best_score >= AUTO_APPLY_THRESHOLD and not row["already"]:
            buckets["high"].append(row)
            buckets["counts"]["high"] += 1
        elif best and best_score >= SUGGEST_THRESHOLD:
            buckets["suggest"].append(row)
            buckets["counts"]["suggest"] += 1
        else:
            buckets["none"].append(row)
            buckets["counts"]["none"] += 1

    # Step 4: entries still missing an image
    missing = [e for e in all_entries if not e["existing_img"]]

    # Console summary
    print(f"  {green('HIGH-CONFIDENCE  :')} {buckets['counts']['high']}")
    print(f"  {yellow('PROBABLE         :')} {buckets['counts']['suggest']}")
    print(f"  {red('NO MATCH         :')} {buckets['counts']['none']}")
    print(f"  Entries missing image: {len(missing)}")
    print()

    # Step 5: write report
    render_report(buckets, all_entries, missing)
    print(green(f"  Report written to: {REPORT_PATH}"))
    print(cyan(f"  Open it in your browser to review."))
    print()

    # Step 6: optionally apply high-confidence matches
    if args.apply:
        print(bold(cyan("  APPLYING high-confidence matches...")))
        # Group by data file. Apply from BOTTOM to TOP so earlier offsets stay valid.
        per_file = {}
        for row in buckets["high"]:
            per_file.setdefault(row["entry"]["data_path"], []).append(row)

        total_written = 0
        for path, rows in per_file.items():
            text = file_texts[path]
            # Backup once per file
            bak = path.with_suffix(path.suffix + ".bak")
            bak.write_text(text, encoding="utf-8")

            # Re-parse fresh entries each pass so offsets reflect inserts
            for row in sorted(rows, key=lambda r: r["entry"]["block_start"], reverse=True):
                entries_now = find_entries(text)
                # Find the matching entry by title (in case offsets shifted)
                target = None
                for e in entries_now:
                    if (e["title"] == row["entry"]["title"]
                            and e["imgCode"] == row["entry"]["imgCode"]
                            and not e["existing_img"]):
                        target = e
                        break
                if not target:
                    print(f"  {yellow('skip')} {row['file']} -> {row['entry_title']} (already has img or moved)")
                    continue
                text = inject_img_line(text, target, row["img_path"])
                total_written += 1
                print(f"  {green('+')} {row['entry_title']:<40} <- {row['file']}")

            path.write_text(text, encoding="utf-8")
            file_texts[path] = text

        print()
        print(green(f"  Wrote {total_written} img: lines."))
        print(cyan(f"  Backups saved as <file>.JS.bak in case you want to revert."))
        print()
        print(yellow("  Next: open GitHub Desktop, review the diff, commit, push."))
    else:
        print(yellow("  Tip: to actually write the high-confidence matches into your"))
        print(yellow("       data files, double-click tools/map-images-apply.bat"))
    print()


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nCancelled.")
        sys.exit(1)
