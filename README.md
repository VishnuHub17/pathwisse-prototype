# Pathwisse learner app: design handoff for development

Contents
- `PROMPT.md`: the instruction to give Claude Code.
- `SPEC.md`: design tokens, product rules, screen list with exact visible text, and the design notes for each section.
- `screens/`: not available as rendered PNGs for this build. The `.dc.html` design-canvas source (see `html/`) was used as the pixel-exact source of truth instead; see `OPEN_QUESTIONS.md`.
- `html/`: 24 raw source files exported from the design canvas (one `.dc.html` board per approved screen, unmodified, kept as an audit trail).
- `assets/`: `shared.css` (extracted common component CSS, byte-identical values to the sources in `html/`) and `data.js` (all placeholder/sample data in one module).
- `pages/`: the 24 built standalone screens, static HTML/CSS/JS, no build step.
- `notes/`: the design notes text is reproduced inline in `SPEC.md` under each section; no separate notes files were exported.

Design canvas (live): https://claude.ai/artifact/A7MmQXAoTRefDYwS6bGXuC
Web only: laptop 1440px, tablet reflow. No mobile.
