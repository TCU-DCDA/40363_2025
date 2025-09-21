# Lab 05 – Base CSS Foundation

> Delivery Mode: In-Class to Homework (Hybrid)

Goal: Introduce external stylesheet and establish foundational typography + spacing while practicing Git workflow with CSS files.

## Prerequisites
- Completed Lab 04 (Links, Images, and Lists Enhancement)
- Active Git repository with HTML foundation
- Understanding of HTML structure and file organization

## Git Workflow Setup
Continue working in your `personal-website-foundation` repository from previous labs.

## Tasks
1. **Create `css/` folder and `styles.css`** in your repository.
2. **Link it in `<head>`** with `<link rel="stylesheet" href="css/styles.css">`.
3. **Add CSS reset/light-normalize** (e.g., set `box-sizing: border-box; margin:0; padding:0;` on `*`).
4. **Set body font stack** (system UI or a readable web-safe stack) and base line-height.
5. **Constrain main content width** (e.g., `max-width: 70ch; margin: 0 auto; padding: 1.25rem;`).
6. **Define heading scale:** h1–h3 sizes (e.g., clamp usage optional).
7. **Add consistent vertical rhythm** (e.g., `p + p { margin-top: 1rem; }`).

## Rules
- No inline styles remain (remove earlier demo ones).
- Use rem units for typography.

## Git Workflow for This Lab
**Commit your CSS work systematically:**
- `Create CSS foundation with reset and typography`
- `Add responsive layout constraints and spacing`
- `Implement heading scale and visual hierarchy`
- `Link CSS to all HTML pages`

**Remember:** Your CSS file needs to be committed and pushed to GitHub!

## Success Criteria
- Visual improvement without breaking structure.
- Single external stylesheet controls all presentational aspects.
- CSS file properly linked and committed to repository.
- All changes pushed to GitHub.

## Submission Instructions
**Submit repository URL** to D2L - use your existing `personal-website-foundation` repository.
Verify that your `css/styles.css` file is visible in your GitHub repository.

## Stretch
- Implement `:root` custom properties for font sizes and spacing scale.
