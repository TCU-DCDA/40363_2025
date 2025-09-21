# Lab 17 – Accessibility Deep Dive & Issue Remediation

> Delivery Mode: Workshop + Targeted Fix Submission (Hybrid Summative)

> Delivery Mode: In-Class Workshop ➜ Focused Fix Submission (Light Summative)

Goal: Perform a structured a11y audit and resolve prioritized issues.

## Learning Outcomes
- Execute multi-tool accessibility evaluation.
- Distinguish severity (blocker, major, minor, enhancement).
- Implement focused remediations (structure, contrast, semantics, focus management).

## Starter
Current multi-page site (post Lab 14 + 15 changes).

## Tasks
1. Tool Sweep: Run Lighthouse, axe DevTools, and WAVE. Aggregate issues into `a11y_issues.md` table (Tool, Page, Issue, Severity, Suggested Fix).
2. Manual Review:
   - Keyboard traversal (tab order, focus visible, skip link) – log anomalies.
   - Screen reader pass (NVDA or VoiceOver) on homepage: heading outline & landmark list.
3. Prioritize top 8 issues (label P1/P2/P3) with justification.
4. Implement fixes in code (reference commit IDs in issue table).
5. Re-run tools; append “After” column with status/resolution note.
6. Contrast: Programmatically verify text/background pairs (tool or manual) – list ratios <4.5:1 needing change.
7. Add `aria-live` region if any dynamic nav state messaging introduced.

## Success Criteria
- All P1 issues resolved.
- No contrast failures for normal text (document exceptions for large text if any).
- Clean heading hierarchy (no skipped levels) per screen reader outline.

## Deliverables
- `a11y_issues.md`
- Updated code (HTML/CSS/JS)
- `a11y_report_summary.md` (≤250 words)

## Stretch
- Add focus trap utility used in Lab 14 nav to modal dialog (demo page).
- Implement reduced motion alternative for any animation heavy section.

## Reflection
Which remediation delivered the biggest real usability improvement versus just a tooling score bump?
