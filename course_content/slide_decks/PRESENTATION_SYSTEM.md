# Slide Deck Presentation System

## Overview

This directory contains an interactive slide deck system for web development course presentations. All presentations now use shared external CSS and JavaScript files for consistency and maintainability.

## File Structure

```
slide_decks/
├── css/
│   └── presentation.css      # Shared styles for all presentations
├── js/
│   └── presentation.js       # Shared functionality for all presentations
├── images/                   # Shared images and assets
├── *.html                   # Individual presentation files
├── README.md                # Presentation descriptions and usage
├── NAMING_CONVENTION.md     # File naming standards
└── PRESENTATION_SYSTEM.md   # This file
```

## Creating New Presentations

### 1. Basic HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Presentation Title | Web Development Fundamentals</title>
    <link rel="stylesheet" href="css/presentation.css">
    <style>
        /* Only presentation-specific styles here */
    </style>
</head>
<body>
    <div class="presentation" id="presentation">
        <!-- Slides go here -->
    </div>

    <!-- Navigation -->
    <div class="navigation">
        <button class="nav-btn" id="prevBtn" onclick="changeSlide(-1)">Previous</button>
        <button class="nav-btn" id="nextBtn" onclick="changeSlide(1)">Next</button>
    </div>

    <!-- Slide Counter -->
    <div class="slide-counter">
        <span id="currentSlide">1</span> / <span id="totalSlides">10</span>
    </div>

    <script src="js/presentation.js"></script>
    <script>
        // Presentation-specific JavaScript here
    </script>
</body>
</html>
```

### 2. Available CSS Classes

#### Layout Classes
- `.slide` - Individual slide container
- `.two-column` - Two-column layout
- `.column` - Column within two-column layout

#### Content Containers
- `.demo-box` - Generic demo container
- `.demo-box.primary` - Blue left border
- `.demo-box.secondary` - Green left border
- `.demo-box.accent` - Red left border
- `.demo-box.warning` - Orange left border
- `.demo-box.info` - Purple left border

#### Specialized Containers
- `.foundation-demo` - For HTML foundation content
- `.semantic-demo` - For HTML semantics content
- `.css-demo` - For CSS-related content
- `.typography-demo` - For typography content
- `.data-demo` - For JavaScript data content
- `.storage-demo` - For localStorage content

#### Visual Elements
- `.code-example` - Code block container
- `.code-line` - Individual line of code
- `.visual-demo` - General visual demonstration
- `.analogy-box` - For analogies and metaphors
- `.practical-demo` - For practical examples
- `.accessibility-demo` - For accessibility content

#### Comparisons
- `.before-after` - Side-by-side comparison layout
- `.before-box` - Before state (red border)
- `.after-box` - After state (green border)
- `.comparison` - General comparison layout
- `.bad-example` - Negative example (red)
- `.good-example` - Positive example (green)

#### Interactive Elements
- `.interactive-demo` - Interactive demonstration container
- `.demo-button` - Styled button for demos
- `.demo-output` - Output display area

#### Syntax Highlighting
- `.keyword` - Language keywords (blue)
- `.string` - String literals (green)
- `.number` - Numeric values (orange)
- `.variable` - Variables (gold)
- `.comment` - Comments (gray, italic)
- `.function-name` - Function names (red)
- `.property` - CSS properties (orange)
- `.value` - CSS values (gold)
- `.attribute` - HTML attributes (orange)
- `.tag` - HTML tags (gold)

#### Utilities
- `.highlight` - Inline highlighting (orange background)

### 3. Available JavaScript Functions

#### Core Navigation
- `changeSlide(direction)` - Move slides (-1 or 1)
- `goToSlide(slideNumber)` - Jump to specific slide
- `getCurrentSlideInfo()` - Get current slide data

#### Demo Functions (Override as needed)
- `window.presentationDemos.arrayDemo()`
- `window.presentationDemos.testStorage()`
- `window.presentationDemos.changeDemoText()`
- `window.presentationDemos.changeStyle()`
- `window.presentationDemos.randomColorDemo()`

## Code Examples

### Basic Slide Structure
```html
<div class="slide">
    <h2>Slide Title</h2>
    <p>Slide content goes here</p>
    <div class="demo-box primary">
        <h3>Key Points:</h3>
        <ul>
            <li>Point one</li>
            <li>Point two</li>
        </ul>
    </div>
</div>
```

### Code Block Example
```html
<div class="code-example">
    <div class="code-line"><span class="keyword">let</span> <span class="variable">name</span> = <span class="string">"Alice"</span>;</div>
    <div class="code-line"><span class="comment">// This is a comment</span></div>
    <div class="code-line"><span class="function-name">console.log</span>(<span class="variable">name</span>);</div>
</div>
```

### Interactive Demo Example
```html
<div class="interactive-demo">
    <h3>Try It Yourself:</h3>
    <button class="demo-button" onclick="window.presentationDemos.changeDemoText()">Change Text</button>
    <div class="demo-output" id="demo-text">Original text</div>
</div>
```

### Comparison Example
```html
<div class="before-after">
    <div class="before-box">
        <h3>❌ Before</h3>
        <p>Old way of doing things</p>
    </div>
    <div class="after-box">
        <h3>✅ After</h3>
        <p>New improved way</p>
    </div>
</div>
```

## Best Practices

### 1. Consistent Structure
- Always use the same HTML template
- Follow the established slide structure
- Use semantic heading hierarchy (h1 for title, h2 for slide titles, h3 for sections)

### 2. CSS Guidelines
- Put only presentation-specific styles in `<style>` tags
- Use existing classes whenever possible
- Follow the color scheme and spacing patterns
- Ensure mobile responsiveness

### 3. Content Guidelines
- Maximum 10 slides per presentation for optimal attention span
- One main concept per slide
- Use consistent terminology across presentations
- Include practical examples and analogies

### 4. Accessibility
- Ensure sufficient color contrast
- Use semantic HTML elements
- Provide keyboard navigation (built-in)
- Include descriptive alt text for any custom images

### 5. File Naming
- Follow the `##_descriptive_content_name.html` convention
- Use lowercase with underscores
- Match content to lab/chapter progression

## Navigation Controls

### Keyboard
- **Arrow Keys**: Navigate slides (left/right or up/down)
- **Home**: Jump to first slide
- **End**: Jump to last slide

### Mouse/Touch
- **Navigation Buttons**: Previous/Next at bottom right
- **Touch Swipe**: Swipe left/right on mobile devices

### JavaScript
```javascript
// Jump to slide 5
goToSlide(5);

// Get current slide info
const info = getCurrentSlideInfo();
console.log(`Slide ${info.current} of ${info.total} (${info.percentage}% complete)`);
```

## Customizing Demo Functions

Override demo functions for presentation-specific interactivity:

```javascript
// In your presentation-specific script
window.presentationDemos.myCustomDemo = function() {
    const output = document.getElementById('my-output');
    output.textContent = 'Custom demo executed!';
};
```

## Performance Considerations

- All presentations load instantly (no external dependencies)
- Responsive design works on all devices
- Print-friendly styles included
- Minimal JavaScript for fast loading

## Troubleshooting

### Common Issues
1. **Slides not advancing**: Check that IDs are correctly set on presentation and navigation elements
2. **Styles not loading**: Verify the CSS path is correct relative to the HTML file
3. **JavaScript errors**: Ensure the JS file loads and all required elements exist

### Debug Mode
Add to your presentation-specific script:
```javascript
console.log('Slide info:', getCurrentSlideInfo());
```

## Migration from Internal CSS

To convert existing presentations:

1. Remove the `<style>` block containing shared styles
2. Add `<link rel="stylesheet" href="css/presentation.css">`
3. Move presentation-specific styles to a minimal `<style>` block
4. Replace inline JavaScript with `<script src="js/presentation.js"></script>`
5. Test all functionality

This system provides consistency, maintainability, and better performance across all course presentations.