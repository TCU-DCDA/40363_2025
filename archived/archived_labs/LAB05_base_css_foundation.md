# Lab 07 – Base CSS Foundation

> Delivery Mode: In-Class to Homework (Hybrid)

Goal: Introduce external stylesheet and establish foundational typography + spacing.

## Tasks
1. Create `css/` folder and `styles.css`.
2. Link it in `<head>` with `<link rel="stylesheet" href="css/styles.css">`.
3. Add CSS reset/light-normalize (e.g., set `box-sizing: border-box; margin:0; padding:0;` on `*`).
4. Set body font stack (system UI or a readable web-safe stack) and base line-height.
5. Constrain main content width (e.g., `max-width: 70ch; margin: 0 auto; padding: 1.25rem;`).
6. Define heading scale: h1–h3 sizes (e.g., clamp usage optional).
7. Add consistent vertical rhythm (e.g., `p + p { margin-top: 1rem; }`).

## Rules
- No inline styles remain (remove earlier demo ones).
- Use rem units for typography.

## Success Criteria
- Visual improvement without breaking structure.
- Single external stylesheet controls all presentational aspects.

## Turn‑In
- `css/styles.css`
- Updated HTML link tag.

## Stretch
- Implement `:root` custom properties for font sizes and spacing scale.
