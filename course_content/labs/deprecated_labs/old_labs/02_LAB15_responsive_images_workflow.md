# Lab 15 – Responsive Images & Asset Workflow

> Delivery Mode: Homework Assignment (Summative)

> Delivery Mode: Homework Assignment (Summative)

Goal: Implement performance‑minded, accessible image delivery (thumbnails, responsive sources, alt strategy).

## Learning Outcomes
- Produce derivative assets (thumb, medium, full) efficiently.
- Use `<picture>` with `srcset`/`sizes`.
- Apply contextual vs decorative alt text.

## Starter
`images/raw/` contains 6 large JPEGs (≈1–3MB each).

## Tasks
1. Inventory: Create `image_inventory.md` table (File, Original KB, Dimensions, Intended Use, Alt Strategy).
2. Generate derivatives (tool of choice) into `images/processed/`:
   - thumb: 400w
   - medium: 800w
   - large: 1400w (if needed)
   - Optimize (target ≤120KB each; note if exception & why).
3. Replace legacy `<img>` in `gallery.html` with `<picture>`:
```
<picture>
  <source type="image/avif" srcset="..." />
  <source type="image/webp" srcset="..." />
  <img src="images/processed/foo-800.jpg" srcset="images/processed/foo-400.jpg 400w, images/processed/foo-800.jpg 800w, images/processed/foo-1400.jpg 1400w" sizes="(min-width: 900px) 33vw, (min-width:600px) 50vw, 100vw" alt="Descriptive alt..." loading="lazy" width="800" height="533">
</picture>
```
4. Add global `img { aspect-ratio: ... }` only if intrinsic sizes unknown.
5. Lighthouse: record Performance + Best Practices before/after; list deltas.
6. Remove any width/height attributes that cause distortion OR add correct intrinsic dimensions.

## Success Criteria
- All display images have responsive sources (≥2 widths).
- Each alt present OR empty if purely decorative (document decisions).
- Total gallery transferred KB reduced ≥40%.

## Deliverables
- `image_inventory.md`
- Updated `gallery.html`
- Updated `styles.css`
- `performance_report.md`

## Stretch
- Implement blur-up or dominant color placeholder (CSS or tiny inline SVG).
- Add `fetchpriority="high"` for LCP image (justify).

## Reflection
What tradeoff did you face between compression and perceptual quality?
