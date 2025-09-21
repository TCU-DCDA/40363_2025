# JS Lab 03 – Fetch & Resilient Error Handling

> Delivery Mode: Homework Assignment (Summative)

Goal: Retrieve remote JSON via `fetch`, render results safely, and handle loading, empty, and error states gracefully.

## Context / Placement
Week 9 (APIs). Replaces typography lab timing or becomes primary JS lab while Fluid Typography shifts later.

## Learning Outcomes
- Use `fetch` with `async/await` & proper error branching.
- Implement loading indicators and cancellation.
- Sanitize / escape dynamic content before insertion.

## Starter Files
`index.html` contains:
```html
<form id="searchForm">
  <label for="query">Search Term</label>
  <input id="query" name="q" required />
  <button type="submit">Search</button>
</form>
<div id="status" aria-live="polite" class="status"></div>
<ul id="results" class="results" aria-live="polite" aria-busy="false"></ul>
<button id="cancelBtn" hidden>Cancel</button>
```
`api.js` provides a constant `API_ENDPOINT` (choose a public API or mock JSON server).

## Tasks
1. Submit Handler: Prevent default, read query, early return if unchanged.
2. State Machine (statuses): `idle | loading | success | empty | error | cancelled` displayed in `#status`.
3. AbortController: Store current controller; on new search or cancel, abort previous request.
4. Fetch Logic:
   - Set `aria-busy="true"` on `#results` while loading.
   - If HTTP !ok → throw custom error with status code.
   - Parse JSON; map limited fields (e.g., title, snippet, link).
5. Empty Handling: No items → show “No results for ‘term’.”
6. Error Handling Branches:
   - Network error vs abort vs 404 vs generic.
   - Display user-friendly message (no raw stack traces).
7. Rendering: Use `document.createElement`; never inject unsanitized HTML. Truncate long strings.
8. Progressive Enhancement: If JS disabled, form still submits to API URL target (set `action`).
9. Basic Rate Limit Guard: Ignore submissions fired <300ms apart (debounce or timestamp check).
10. Accessibility: Ensure button labels reflect current action (show/hide Cancel button only during loading).

## Success Criteria
- Cancelling mid-request prevents results injection after abort.
- Multiple rapid searches return only last response.
- No console errors on aborted requests.
- Clear status messaging for every terminal state.

## Stretch
- Client-side cache: identical query returns cached data (note in status).
- Retry with exponential backoff on 500-level errors (max 3 attempts).
- Skeleton placeholder items while loading.

## Reflection Prompt
Why is distinguishing an abort from a network failure important for UX?
