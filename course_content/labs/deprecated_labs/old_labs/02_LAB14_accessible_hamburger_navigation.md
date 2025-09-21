# Lab 14 – Accessible Hamburger Navigation

> Delivery Mode: Hybrid (In-Class Launch ➜ Homework Completion)

> Delivery Mode: Hybrid (In-Class Start ➜ Homework Finish)

Goal: Implement a fully accessible, keyboard + screen reader friendly collapsing navigation without external JS frameworks.

## Learning Outcomes
- Craft semantic toggle markup.
- Manage focus states & aria-expanded.
- Prevent scroll / trap focus when menu is open (optional JS stretch).

## Starter
Existing basic hamburger using checkbox hack.

## Tasks
1. Markup: Replace checkbox hack with `<button id="navToggle" aria-controls="primaryNav" aria-expanded="false">` containing SVG icon (3 bars) + visually hidden label.
2. Navigation container: `<nav id="primaryNav" hidden>` (or controlled with `data-open`).
3. JS (nav.js):
   - Toggle `aria-expanded` & `hidden` (or `data-open`).
   - When open: focus first link; ESC closes and returns focus to button.
   - Trap focus (Shift+Tab cycles) – optional baseline or stretch.
4. CSS:
   - Transition for menu panel (prefers-reduced-motion: disable).
   - Hit target ≥44px for button.
5. Accessibility Pass:
   - Keyboard only: tab order, opening, closing, escape.
   - Screen reader: announce expanded / collapsed.
   - Contrast check for focus outline.
6. Document manual test script in `a11y_nav_test.md`.

## Success Criteria
- Lighthouse / axe: 0 critical nav accessibility issues.
- No off-screen focus when menu closed.
- Button has descriptive accessible name (not just “button”).

## Deliverables
- `nav.js`
- Updated `index.html` (or template)
- Updated `styles.css`
- `a11y_nav_test.md`

## Stretch
- Add reduced-motion path (no transform slide) under `@media (prefers-reduced-motion: reduce)`.
- Add auto-collapse on nav link click (single-page pattern).

## Reflection
Explain tradeoffs between checkbox hack and JS-driven button.
