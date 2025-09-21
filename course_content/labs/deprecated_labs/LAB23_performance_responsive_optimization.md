# Lab 18 – Performance & Responsive Optimization

> Delivery Mode: Capstone Sprint (Summative)

> Delivery Mode: Capstone Optimization Sprint (Summative)

Goal: Improve Core Web Vitals by optimizing CSS, images, and critical rendering path.

## Learning Outcomes
- Measure, then performance-tune iteratively.
- Differentiate real vs lab performance signals.
- Apply loading hints & resource prioritization.

## Starter
Site post Labs 11–17.

## Tasks
1. Baseline: Run Lighthouse (Mobile) & WebPageTest (single run) – record FCP, LCP, TBT, CLS in `performance_baseline.md`.
2. Opportunities List: Identify top 6 issues (render blocking CSS, image weight, unused JS, layout shifts).
3. Implement round 1:
   - Inline critical CSS (above-the-fold) ≤7KB.
   - Defer or `media="print"` + `onload` swap for non-critical stylesheet.
   - Add `loading="lazy"` / `decoding="async"` to non-hero images.
4. Measure again – log deltas.
5. Implement round 2:
   - Preload hero font subset (if custom font used) & main hero image.
   - Replace any large PNG with optimized WebP/AVIF.
   - Eliminate layout shift: add width/height or aspect-ratio to media.
6. Final measurement; compute % improvement for LCP & TBT.
7. Summarize tradeoffs (inline size vs cache, preload risk) in `perf_notes.md`.

## Success Criteria
- LCP improvement ≥20% over baseline.
- CLS ≤0.05.
- No new accessibility regressions.

## Deliverables
- `performance_baseline.md`
- `perf_notes.md`
- Updated code (CSS/HTML)

## Stretch
- Implement `content-visibility: auto` on long article sections.
- Explore HTTP/2 push vs preload discussion (document rationale—no push required).

## Reflection
Which single change yielded the largest LCP gain and why?
