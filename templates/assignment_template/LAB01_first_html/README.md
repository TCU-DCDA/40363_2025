# LAB01 – First HTML Structure

Official due date & any extensions: see D2L (LMS). This README gives the operational steps only. Policies, accommodations, and grading philosophy live on D2L.

## Learning Focus (Week 1)
- Create a minimal, semantic HTML page scaffold.
- Practice spaced commits (at least 3 over 2+ days).
- Write intent-focused commit messages.

## Evidence Targets
| Type | Minimum This Lab |
|------|------------------|
| Commits | ≥3 across ≥2 days |
| Improvement Commit | ≥1 refactor/semantic or accessibility improvement only |
| Reflection | Midweek micro reflection on D2L citing ≥1 commit hash |

## File Checklist
- `index.html` (provided starter – edit this)
- `style.css` (optional minor tweaks only this week)
- `README.md` (this file – do not delete)

## Quick Start
1. (D2L) Click the GitHub Classroom invitation link.
2. Accept – wait for your private repo – open it in VS Code or GitHub Desktop.
3. Open `index.html`. Add your name inside the `<title>` (first tiny change).
4. Commit: `chore: personalize title with name` → push.
5. Add main page structure (header, main, footer). Commit: `feat: scaffold semantic page structure`.
6. Add two meaningful sections with headings and a paragraph each. Commit: `feat: add about + goals sections`.
7. Improvement pass: refine heading levels, add meaningful alt text to image (if added). Commit: `refactor: improve heading hierarchy + alt text`.
8. Post midweek micro reflection on D2L citing 1–2 commit hashes.
9. (Optional) Small polish commit before deadline.

## Required Elements
- One `<header>` containing the site title (an `<h1>`)
- One `<main>` containing at least two `<section>` elements each with an `<h2>`
- One `<footer>` with simple text (e.g., © YEAR Name)
- If you include an image: provide concise `alt` text; if decorative, use empty alt (`alt=""`).

## Not Required (Yet)
- External fonts
- Layout CSS (flex/grid)
- JavaScript

## Commit Message Examples (Good)
- feat: scaffold base layout with header/main/footer
- content: add goals section with two paragraphs
- refactor: improve heading levels for semantics
- chore: add semantic landmarks checklist to README

## If You Get Stuck (>20 minutes)
Open an Issue using the Blocker template (Issues tab) OR add a “Blocker” line in your D2L reflection describing:
1. Goal
2. What you tried (commands, resources)
3. What happened (error/surprise)

## Process Health Self-Check
Run locally (optional):
```
# count commits on current branch
git rev-list --count HEAD
```
If only 1 commit and <24h to deadline, make a small improvement commit (semantics or alt text) even if content is incomplete.

## Feedback Style
You will receive 1–3 leverage comments (Observation → Impact → Next Experiment). Apply or respond.

## After Deadline
You may continue improving for learning. On-time snapshot (commit hash) is recorded automatically.

## Customize (Instructor Notes – remove in student copy if desired)
- Update DUE_DATE in workflow at `.github/workflows/commit_health.yml`.
- Adjust required element list if shifting scope.

---
*Operational README version: 1.0*
