# JS Lab 02 – DOM Builder from JSON Data

> Delivery Mode: Homework Assignment (Summative)

Goal: Transform a JSON array of objects into accessible, styled DOM cards using templating and iteration.

## Context / Placement
Week 7 (DOM & arrays). Adjust schedule: move Media Query Refactor to Week 8.

## Learning Outcomes
- Parse or define JSON data structure.
- Iterate arrays & map object properties to DOM.
- Use a `<template>` element for cloning.
- Provide semantic, accessible card structure (headings, alt text).

## Starter Files
`index.html` includes:
```html
<template id="card-tpl">
  <article class="card">
    <img class="card__img" alt="" />
    <h3 class="card__title"></h3>
    <p class="card__desc"></p>
    <button class="card__fav" aria-pressed="false" aria-label="Favorite"></button>
  </article>
</template>
<section id="card-list" class="cards" aria-live="polite"></section>
```
`data.js` exports `const items = [...];` (5–8 objects with: id, title, desc, img, tags[])

## Tasks
1. Data Shape Validation: Console assert each object has required keys (fail fast).
2. Build Function `renderCards(items)`:
   - Clone template
   - Populate `img.src`, `img.alt` (derive short alt from title)
   - Insert title (escape potentially unsafe text)
   - Truncate description to 140 chars + ellipsis (store full text in `data-full`)
3. Append all fragments using a DocumentFragment for performance.
4. Favorite Toggle:
   - Click on `.card__fav` toggles `aria-pressed`, adds `.is-fav` class.
   - Maintain a `Set` of favorited ids.
5. Filter UI (add minimal): simple text input that filters cards by substring (title or tag) on input (case-insensitive).
6. Empty State: If filter yields none, show `<p class="empty">No matches.</p>`.
7. Accessibility:
   - Each card has unique `id` (e.g., `card-<id>`)
   - Keep heading levels consistent.
8. Performance check: Only re-render filtered subset (avoid full rebuild if not needed).

## Success Criteria
- Single pass render (no layout thrash loops).
- Filter operates under 50ms for 100 mock items (can duplicate array to test).
- Favorited items persist during filtering (state not lost).

## Stretch
- Tag pill generation with keyboard toggle.
- LocalStorage persistence of favorites.
- Lazy-load images (`loading="lazy"`).

## Reflection Prompt
Explain why using a `<template>` + DocumentFragment is more performant than repeated `innerHTML +=`.
