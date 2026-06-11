# Permafrost — Editorial Review Site

A static website containing a complete editorial, beta-read, and market analysis of the
*Permafrost* Book One & Book Two manuscripts (Revision 1), prepared from a full read of
both documents (70 chapters, ~226k words).

## Viewing the site

No build step — plain HTML/CSS/JS. Either:

- **Locally:** open `docs/index.html` in any browser, or run
  `python3 -m http.server` from the `docs/` folder and visit `http://localhost:8000`.
- **GitHub Pages:** in the repository settings, enable Pages with
  *Source: Deploy from a branch* → branch `main` (or this branch) → folder `/docs`.

## Contents

| Page | What's on it |
| --- | --- |
| `index.html` | Overview, report card scores, top strengths/issues |
| `analysis.html` | Story structure, themes, POV, prose, dialogue, pacing, motifs |
| `world.html` | Worldbuilding & setting analysis |
| `characters.html` + `characters/` | Clickable full analysis pages for every plot-relevant character |
| `chapters-book1.html` | All 30 Book One chapters — strengths, improvements, reader reaction, 1–10 rating |
| `chapters-book2.html` | All 40 Book Two chapters — same treatment |
| `beta-read.html` | Beta reader report: experience log, confusion points, continuity ledger, line notes |
| `market.html` | Market positioning, comps, IP risk assessment, publication paths, pitch drafts |
