# Snippets & Reference

## Boilerplate HTML5
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>About – Your Name</title>
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <a class="visually-hidden focusable" href="#main">Skip to content</a>
  <header>
    <h1>Your Name</h1>
    <p class="tagline">Short value proposition.</p>
  </header>
  <nav aria-label="Primary">
    <ul class="nav">
      <li><a href="#about">About</a></li>
      <li><a href="#interests">Interests</a></li>
      <li><a href="#resources">Resources</a></li>
    </ul>
  </nav>
  <main id="main">
    <!-- content -->
  </main>
  <footer>
    <p>&copy; 2024 Your Name</p>
  </footer>
</body>
</html>
```

## Visually Hidden Utility
```css
.visually-hidden {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap; border: 0;
}
.visually-hidden.focusable:focus { position: static; width: auto; height: auto; margin: 0; clip: auto; white-space: normal; }
```

## Basic Flex Nav
```css
.nav { list-style: none; display: flex; gap: 1rem; padding: 0; margin: 0; }
.nav a { text-decoration: none; color: var(--link, #0645ad); }
.nav a:hover, .nav a:focus { text-decoration: underline; }
```

## Spacing Scale (Custom Properties)
```css
:root {
  --space-1: .25rem;
  --space-2: .5rem;
  --space-3: .75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
}
```

## Heading Scale Example
```css
h1 { font-size: clamp(1.9rem, 4vw, 2.5rem); line-height: 1.15; }
h2 { font-size: clamp(1.4rem, 2.5vw, 1.9rem); line-height: 1.2; }
h3 { font-size: clamp(1.2rem, 2vw, 1.4rem); }
```

## Figure Pattern
```html
<figure>
  <img src="images/profile.jpg" alt="Your Name presenting at a meetup" />
  <figcaption>Speaking about semantic HTML.</figcaption>
</figure>
```

## Content Inventory Table (Markdown)
```md
| Block | Purpose | Status | Notes |
|-------|---------|--------|-------|
| Hero heading | Introduce identity quickly | stable | Consider shorter tagline |
```

## Audit Metrics Table
```md
| Metric | Count |
|--------|-------|
| Words (main) | 540 |
| Images | 2 |
| External Links | 5 |
| Internal Links | 3 |
| Sections | 6 |
```
