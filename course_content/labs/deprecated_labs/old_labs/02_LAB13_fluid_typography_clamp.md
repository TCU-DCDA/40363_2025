# Lab 13 – Fluid Typography with `clamp()`

> Delivery Mode: Optional Enhancement (Stretch / Ungraded)

> Delivery Mode: Optional Enhancement (Ungraded Stretch) OR Include in Responsive Milestone

Goal: Replace fixed typographic scale with a fully fluid, bounded system.

## Learning Outcomes
- Construct a modular type scale.
- Author `clamp()` expressions from design tokens.
- Validate legibility across breakpoints.

## Starter
`typography-fixed.css` containing pixel sizes for h1–h6, body, small, nav.

## Tasks
1. Extract existing sizes into `type_inventory.md` (selector → px value → role).
2. Choose a scale ratio (e.g., 1.2 minor third). Generate target REM sizes for base=1rem.
3. For each level (body, h6..h1) define: min (small screen), preferred (vw formula), max.
4. Build `tokens.css` root custom properties (e.g., `--step-0`, `--step-1`).
5. Implement `clamp(min, preferred, max)` for each text style; remove previous pixel declarations.
6. Add fluid line-height if needed (static acceptable for body if justified).
7. Test widths: 320px, 768px, 1280px; capture screenshots or note computed sizes in table.

## Success Criteria
- No pixel font-size values remain (except print or monospace exceptions listed in `exceptions.md`).
- Each heading size grows but never exceeds max at 1440px viewport.
- Body copy measure (ch) stays within 45–80 range.

## Deliverables
- `tokens.css`
- Updated `styles.css`
- `type_inventory.md`
- `exceptions.md`

## Stretch
- Add responsive spacing scale tied to type steps.
- Introduce prefers-reduced-motion adjustment for large display text animations.

## Reflection
Describe one pitfall when choosing vw percentages for preferred values.
