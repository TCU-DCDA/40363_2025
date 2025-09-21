# Commit Style Guide
Purpose: Make your history readable evidence of learning.

## Principles
- One intent per commit (structure, content, style, accessibility, refactor)
- Use imperative mood: `add`, `fix`, `refactor`, `improve`, `document`
- Keep subject ≤ 50 chars when possible; optional body for why/details

## Format
<type>: <concise intent>

Types (lightweight): feat, fix, refactor, style, content, docs, chore

## Good Examples
- feat: scaffold base layout with header/main/footer
- refactor: improve heading hierarchy for screen readers
- style: adjust color contrast for links
- fix: correct broken image path in gallery section
- content: add about paragraph with mission statement
- chore: add semantic landmarks checklist to README

## Weak Examples (Avoid)
- update
- final
- stuff
- more changes
- fix things

## Adding a Body (Optional)
feat: add responsive nav toggle

Explains ARIA attributes and keyboard focus handling.

## Improvement-Only Commits
Call them out: `refactor:` or `style:` commits show process maturity.

## When to Amend
If you immediately notice a typo or forgot a small file (<1 min later) you may amend locally before pushing. Otherwise, new commit is fine.

## Checklist Before Committing
- Does the message say WHAT changed? (Yes)
- Single intent? (Yes)
- Can future you skim and understand? (Yes)

Readable history = faster feedback + stronger evidence.
