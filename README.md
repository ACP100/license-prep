# NEC Computer Engineering — Licence Prep

A question explorer for the Nepal Engineering Council Computer Engineering (ACtE) registration
exam: browse by syllabus chapter, answer interactively, and keep per-question notes.

Rebuilt to follow the architecture of
[scifisatan/electromagnetics](https://github.com/scifisatan/electromagnetics) — a Vite + React 19
app with a split list/detail view, filter pills, per-question notes (MDXEditor), KaTeX math, and
local-storage progress tracking, gated behind a desktop-size guard.

## Data

- `src/data/questions.ts` — 651 multiple-choice questions across the 10 syllabus chapters, merged
  from two sources and deduplicated by normalized question text:
  - This repo's original question bank (270 questions, tagged `J26`/`R`/`PQ`/`P` by provenance).
  - [aakritsubedi/computer-nec-license](https://github.com/aakritsubedi/computer-nec-license)'s
    `questions-sets/` (five past objective-exam sittings, 400 questions parsed from markdown). 5 of
    400 couldn't be parsed cleanly (ASCII-art tree diagrams as options, or an unrecognized answer
    format) and were left out.
  - Chapter/subtopic tagging for the imported questions is a keyword-overlap heuristic against the
    official syllabus (not hand-verified) — expect occasional mis-tags.
- `src/data/topics.ts` — the 10 syllabus chapters (`AExE01`...`AALL10`), from this repo's original
  `syllabus.js`.

## Scope note

This rebuild replaces the previous single-file site (study plan / mock test / formulas pages) with
the electromagnetics-style question explorer only. That content isn't ported over — ask if you want
any of it back in the new architecture.

## Developing

```bash
npm install
npm run dev
```

## Deploying

Pushing to `main` builds and deploys via the `.github/workflows/deploy.yml` GitHub Actions workflow.
In the repo's **Settings → Pages**, set **Source** to **GitHub Actions** (one-time) if it's still
set to "Deploy from a branch".
