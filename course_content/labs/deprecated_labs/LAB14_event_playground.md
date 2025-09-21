# JS Lab 01 – Event Playground & Progressive Enhancement

> Delivery Mode: In-Class Launch ➜ Complete as Homework (Hybrid)

Goal: Gain fluency with core DOM selection patterns and common events (click, input, keydown) while preserving a usable non-JS fallback.

## Context / Placement
Replaces (or compresses) part of visual polish emphasis in Weeks 4–5 so JS fundamentals are not delayed.

## Learning Outcomes
- Select DOM nodes with `querySelector(All)` & dataset attributes.
- Attach multiple event listeners cleanly (no inline `onclick`).
- Implement progressive enhancement: base HTML works without JS; JS augments.
- Provide accessible feedback (ARIA live region) for dynamic updates.

## Starter Files
`index.html`, `styles.css`, `app.js` (blank). HTML contains:
- A list of 4 “action buttons” (`<button data-action="...">`)
- A text input (`id="userText"`)
- A results panel (`<div id="output" aria-live="polite"></div>`)

## Tasks
1. DOM Map: In comments of `app.js` list each required element reference.
2. Query all buttons: `document.querySelectorAll('[data-action]')` and iterate.
3. Implement actions:
   - `reverse` → reverse string from input.
   - `shout` → uppercase + append `!` (unless already ends with `!`).
   - `count` → show character count (no spaces) & word count.
   - `clear` → clear input & output, return focus to input.
4. Keyboard Accessibility: Trigger the currently focused button via `Enter` / `Space` (native for `<button>`, just verify; add a keydown listener to input for quick "Enter = reverse").
5. Live Feedback: All results injected into `#output` (replace content, not append) – ensures screen readers re-announce.
6. Defensive Code: Ignore empty input (show gentle message: “Type something first”).
7. No global leaks: wrap logic in an IIFE or module pattern.
8. Reflection block at bottom comment: 5 bullet takeaways.

## Success Criteria
- Zero inline event handlers in HTML.
- Works with JS disabled: user can still type (buttons hidden via `noscript` message fallback acceptable).
- `#output` updates replace previous content, not accumulate.
- Lint: no unused variables.

## Stretch
- Add debounce (300ms) live count as user types.
- Add a transform pipeline (e.g., reverse then shout) using an array of functions.

## Reflection Prompt
Why is replacing instead of appending output more accessible for screen readers?
