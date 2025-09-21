# Lab 16 – CSS Audit & Reduction (Maintainability)

> Delivery Mode: Homework Assignment (Summative)

> Delivery Mode: Homework Assignment (Summative)

Goal: Reduce CSS size and complexity without changing visual output.

## Learning Outcomes
- Identify dead / unused selectors.
- Merge duplicate declarations.
- Measure impact (bytes, rules, specificity).

## Starter
`site.css` (≈900 lines) + site pages.

## Tasks
1. Tool Pass: Use a coverage tool (Chrome DevTools Coverage) – export list of unused selectors to `coverage_raw.txt`.
2. Manual Verification: For each flagged selector decide REMOVE / KEEP (justify in `css_audit.md`).
3. Consolidate media queries (combine identical breakpoints).
4. Extract design tokens (colors, spacing, type) into `:root` block; replace literals (log replacements count).
5. Remove legacy vendor prefixes not needed for target browsers (list criteria / source reference).
6. Report metrics before/after: file size, #rules, average specificity (approx), #!important.
7. Ensure no visual regressions (side-by-side diff notes, or screenshot compare list).

## Success Criteria
- ≥20% reduction in file size.
- 0 `!important` declarations (or documented exception list).
- Single instance per breakpoint value.

## Deliverables
- `css_audit.md`
- `coverage_raw.txt`
- Updated `site.css`
- `reduction_report.md`

## Stretch
- Introduce a light naming convention section (BEM or utility prefix) for future growth.
- Add a `print.css` with ≤5 rules.

## Reflection
Which category (duplication, dead code, specificity bloat) yielded the largest savings and why?
