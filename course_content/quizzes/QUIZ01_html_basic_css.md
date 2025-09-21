# Quiz 01 — HTML & Basic CSS (Beginner)

- Time: 20 minutes
- Format: Mixed (multiple choice, true/false, short answer, code reading)
- Materials: Closed notes, no internet (unless otherwise specified by instructor)
- Points: 50 total

---

## Part A — Multiple Choice (10 questions × 3 pts = 30 pts)
Select the single best answer.

1) Which line correctly declares an HTML5 document?
- A. `<!DOCTYPE HTML5>`
- B. `<!DOCTYPE html>`
- C. `<html doctype="html5">`
- D. `<?doctype html?>`

2) Which element belongs in the `<head>` and not the `<body>`?
- A. `<main>`
- B. `<meta charset="UTF-8">`
- C. `<section>`
- D. `<footer>`

3) What is the main purpose of the `lang` attribute on the `<html>` element?
- A. Sets the font for the page
- B. Improves search engine keywords
- C. Informs browsers/assistive tech of the page language
- D. Enables CSS to load faster

4) Choose the most semantic structure for a page’s primary content area:
- A. `<div id="content"> ... </div>`
- B. `<main> ... </main>`
- C. `<section role="content"> ... </section>`
- D. `<article id="main"> ... </article>`

5) For a link that opens in a new tab, which attribute pairing is most appropriate for security/performance?
- A. `target="_blank" rel="noopener"`
- B. `target="new" rel="noopener"`
- C. `target="_blank" rel="nofollow"`
- D. `target="_new" rel="noreferrer"`

6) Which is the best use of alternative text (`alt`) for an informative image?
- A. Empty `alt` always
- B. Describe the image’s meaning/purpose concisely
- C. Copy the image filename
- D. Repeat the surrounding caption verbatim

7) Which snippet correctly links an external stylesheet?
- A. `<style src="css/styles.css"></style>`
- B. `<link href="css/styles.css">`
- C. `<link rel="stylesheet" href="css/styles.css">`
- D. `<script rel="stylesheet" src="css/styles.css"></script>`

8) Which CSS unit is recommended for scalable typography?
- A. `px`
- B. `rem`
- C. `vh`
- D. `%` for all text

9) What does `box-sizing: border-box;` help with?
- A. Adds borders automatically
- B. Includes padding/border inside the element’s set width/height
- C. Forces square boxes only
- D. Removes default margins from all elements

10) Which list is most appropriate for a set of steps that must happen in order?
- A. `<ul>`
- B. `<ol>`
- C. `<dl>`
- D. `<menu>`

---

## Part B — True/False (5 questions × 2 pts = 10 pts)
Write T or F.

11) Headings should not skip levels (e.g., use h2 after h1, not h3 directly).  
12) The `<nav>` element should be used for any group of links anywhere on the page.  
13) Decorative images should have empty `alt` (e.g., `alt=""`).  
14) Inline CSS is preferred over external stylesheets for maintainability.  
15) The `<figure>` element can contain an `<img>` and an optional `<figcaption>`.  

---

## Part C — Short Answer (3 questions × 3 pts = 9 pts)
Answer in 1–2 sentences.

16) Explain why setting a clear heading hierarchy (h1 → h2 → h3) improves accessibility and page structure.

17) When should you use an ordered list (`<ol>`) vs. an unordered list (`<ul>`)? Give one example for each.

18) Why is `rel="noopener"` recommended when using `target="_blank"` on external links?

---

## Part D — Code Reading & Fix (1 question × 1 pt + 2 questions × 0.5 pt = 1 + 1 = 2 pts)

19) Identify one semantic or structural issue in the snippet and rewrite just the incorrect line(s).
```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="UTF-8">
  <html lang="en">
</head>
<body>
  <header>
    <h3>My Portfolio</h3>
  </header>
  <main>
    <section>
      <h1>Projects</h1>
      <p>Some recent work...</p>
    </section>
  </main>
</body>
</html>
```
Hint: Consider heading levels and required attributes on root elements.

20) Which CSS selector targets all `<figure>` elements?
- A. `.figure`
- B. `#figure`
- C. `figure`
- D. `img + figcaption`

21) Which is the correct internal jump link to a section with `id="skills"`?
- A. `<a href="skills">Skills</a>`
- B. `<a href="#skills">Skills</a>`
- C. `<a anchor="skills">Skills</a>`
- D. `<a id="skills">Skills</a>`

---

## Submission
- D2L Quiz tool (timed).  
- If paper-based: write answers clearly and number them.  
- If accessibility accommodations are needed, contact the instructor before the quiz.

---

## Coverage Reference (for students)
- HTML structure: `<!DOCTYPE html>`, `<html lang>`, `<head>` vs. `<body>`
- Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Links & images: `<a>`, `rel="noopener"`, `target="_blank"`, `<img alt>`, `<figure>`/`<figcaption>`
- Lists: `<ul>`, `<ol>`, `<li>`
- CSS basics: external stylesheet linking, selectors, `box-sizing`, scalable units (`rem`)
