# Lab 09 – Navigation & Banner (Structural CSS)

> Delivery Mode: In-Class Build (Guided) ➜ Finish at Home

Goal: Add a simple site header with navigation and a hero/banner area.

## Tasks
1. Wrap top heading + optional tagline in `<header>`.
2. Add a `<nav>` containing an unordered list of anchor links to page section IDs (≥3 links).
3. Create a banner/hero section (could be existing top section) with larger heading style and constrained subtitle.
4. In CSS, implement horizontal nav list (inline or flex): remove default list bullets.
5. Add active/hover/focus styles for nav links.
6. Ensure skip link possibility: include `<a class="visually-hidden focusable" href="#main">Skip to content</a>` at top (style `.focusable` to appear on focus).

## CSS Hints
- Use `display: flex; gap:` for nav list.
- Banner spacing: generous padding (e.g., `padding: 3rem 1rem;`).

## Accessibility
- Landmark roles implicit (`<header>`, `<nav>`, `<main>`). Ensure one `<main id="main">` wraps primary content.

## Success Criteria
- Keyboard focus visible on nav links.
- No layout shift when hovering nav items.

## Turn‑In
- Updated HTML + CSS

## Stretch
- Add a simple responsive tweak: stack nav vertically below 500px width (media query).
