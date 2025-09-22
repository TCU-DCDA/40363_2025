# Lab 10 – Live Site Accessibility & Responsive Testing

> Delivery Mode: In-Class Workshop ➜ Live Portfolio Testing (Hybrid)  
> **Portfolio Connection:** Accessibility enhancement and mobile testing for your deployed Project 1 Portfolio

Goal: Use your deployed LAB09 portfolio to implement comprehensive accessibility features and test responsive behavior on real devices. Build on your migrated project foundation with accessibility best practices and real-world testing strategies.

## Learning Outcomes
- Test accessibility features on live deployed portfolio sites
- Implement WCAG guidelines using real screen readers and testing tools
- Optimize responsive design behavior on actual mobile devices
- Enhance deployed portfolio with accessibility improvements
- Build confidence testing websites in production environments

## Prerequisites  
- Completed LAB09 (Project Migration & GitHub Pages Deployment) with live portfolio URL
- Deployed portfolio with migrated project from Sandbox folder
- Portfolio accessible at GitHub Pages URL and displaying correctly
- Access to mobile devices for real-world testing

## 🌟 Getting Started: Live Site Accessibility Testing

### Essential Tools Setup (5 minutes)

**Before starting, install these free browser extensions:**

#### For Chrome:
1. **axe DevTools** - Go to Chrome Web Store → Search "axe DevTools" → Add to Chrome
2. **WAVE Evaluation Tool** - Search "WAVE" → Add to Chrome  
3. **Lighthouse** - Built into Chrome DevTools (F12 → Lighthouse tab)

#### For Firefox:
1. **axe DevTools** - Firefox Add-ons → Search "axe-core" → Add to Firefox
2. **WAVE** - Available in Firefox Add-ons

### Quick Accessibility Testing Workflow ✅

**Test your live portfolio URL with these steps:**

1. **Open your GitHub Pages URL** (from LAB09)
2. **Right-click → Inspect** (or press F12)
3. **Look for the axe tab** in DevTools
4. **Click "Scan All of My Page"**
5. **Review results** - aim for 0 violations

### 🎯 Accessibility Checklist for PROJECT1

Use this checklist while testing your live site:

#### **Level 1: Essential (Must Have for PROJECT1)**
- [ ] **Alt text for all images** - descriptive, not decorative
- [ ] **Proper heading hierarchy** - H1 → H2 → H3 (no skipping levels)
- [ ] **Color contrast ratio** - at least 4.5:1 for normal text
- [ ] **Keyboard navigation** - can you tab through all interactive elements?
- [ ] **Descriptive link text** - no "click here" or "read more"

#### **Level 2: Professional (Great for PROJECT1)**
- [ ] **Focus indicators** - visible outline when tabbing through site
- [ ] **Form labels** - if you have contact forms, all inputs have labels
- [ ] **Page language** - `<html lang="en">` in your HTML
- [ ] **Semantic HTML** - using `<nav>`, `<main>`, `<section>`, `<article>` correctly
- [ ] **Skip links** - for users with screen readers

### 🔧 Accessibility Testing Tools Guide

#### **Using axe DevTools (Beginner-Friendly)**

1. **Open your live portfolio** in Chrome/Firefox
2. **Press F12** to open developer tools
3. **Click the "axe" tab** (should be at the top)
4. **Click "Scan All of My Page"**
5. **Review results:**
   - **Red (Violations):** Must fix for accessibility
   - **Yellow (Needs Review):** Check manually
   - **Blue (Passed):** You're doing great!

#### **Using WAVE Tool (Visual Feedback)**

1. **Click the WAVE extension icon** in your browser
2. **WAVE will overlay icons** on your live site:
   - **Red icons:** Errors that need fixing
   - **Yellow icons:** Alerts to review
   - **Green icons:** Features that help accessibility

#### **Using Lighthouse (Comprehensive)**

1. **Press F12** → **Lighthouse tab**
2. **Select "Accessibility" checkbox**
3. **Click "Generate report"**
4. **Aim for a score of 90+** for PROJECT1

### 📱 Real Device Testing Strategy

**Test your live portfolio on actual devices:**

#### **Mobile Phone Testing:**
1. **Open your GitHub Pages URL** on your phone
2. **Test navigation** - can you tap all menu items easily?
3. **Check text size** - is everything readable without zooming?
4. **Test in both orientations** - portrait and landscape

#### **Tablet Testing (if available):**
1. **Medium screen behavior** - does your grid layout work well?
2. **Touch targets** - are buttons big enough to tap accurately?

### 💡 Common Accessibility Fixes for New Coders

#### **Fix #1: Image Alt Text**
```html
<!-- Instead of: -->
<img src="portrait.jpg">

<!-- Use: -->
<img src="portrait.jpg" alt="Professional headshot of [Your Name] smiling outdoors">
```

#### **Fix #2: Heading Hierarchy**
```html
<!-- Instead of: -->
<h1>My Portfolio</h1>
<h3>About Me</h3>  <!-- Skips H2 -->

<!-- Use: -->
<h1>My Portfolio</h1>
<h2>About Me</h2>   <!-- Proper hierarchy -->
```

#### **Fix #3: Descriptive Links**
```html
<!-- Instead of: -->
<a href="resume.pdf">Click here</a>

<!-- Use: -->
<a href="resume.pdf">Download my resume (PDF, 245KB)</a>
```

#### **Fix #4: Color Contrast**
Use this tool to check: **[WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)**
- **Normal text:** Need 4.5:1 ratio minimum
- **Large text (18px+):** Need 3:1 ratio minimum

## Building on Your LAB08 Foundation

Your LAB08 CSS Grid layouts provide the foundation for sophisticated responsive behavior. Now we'll enhance them with comprehensive media queries and accessibility features to create a professional, inclusive portfolio experience.

## Tasks

### 1. Mobile-First Responsive Strategy

Implement a comprehensive responsive system for your entire portfolio:

**Create a mobile-first breakpoint system:**
```css
/* Custom properties for consistent breakpoints */
:root {
  --breakpoint-sm: 480px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1200px;
  
  /* Responsive spacing system */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;
}

/* Mobile-first base styles */
.container {
  width: 100%;
  padding: 0 var(--space-sm);
  margin: 0 auto;
}

/* Progressive enhancement */
@media (min-width: 480px) {
  .container {
    padding: 0 var(--space-md);
  }
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-lg);
    max-width: 1200px;
  }
}
```

### 2. Enhanced Header Responsiveness

Improve your LAB06-07 header with advanced responsive behavior:

```css
/* Mobile header optimization */
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 50vh;
  padding: var(--space-lg) var(--space-sm);
  gap: var(--space-md);
}

.header_text h1 {
  font-size: clamp(2rem, 8vw, 4rem);
  line-height: 1.1;
  margin-bottom: var(--space-sm);
}

.header_text p {
  font-size: clamp(1rem, 4vw, 1.25rem);
  max-width: 60ch;
}

.header_pic {
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
}

/* Tablet and desktop: side-by-side layout */
@media (min-width: 768px) {
  header {
    flex-direction: row;
    text-align: left;
    min-height: 60vh;
    align-items: center;
  }
  
  .header_text {
    flex: 1;
    padding-right: var(--space-xl);
  }
  
  .header_pic {
    flex: 0 0 350px;
    max-width: 350px;
  }
}
```

### 3. Responsive Navigation Enhancement

Create a mobile-friendly navigation system:

```css
/* Mobile navigation */
nav {
  background: white;
  padding: var(--space-sm);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-logo {
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  color: #333;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  padding: var(--space-md);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.nav-links.open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.nav-toggle {
  display: block;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Desktop navigation */
@media (min-width: 768px) {
  .nav-links {
    position: static;
    flex-direction: row;
    gap: var(--space-lg);
    transform: none;
    opacity: 1;
    visibility: visible;
    background: none;
    box-shadow: none;
    padding: 0;
  }
  
  .nav-toggle {
    display: none;
  }
}
```

### 4. Responsive Grid Layout Optimization

Enhance your LAB08 grid layouts for better mobile experience:

```css
/* Projects grid responsive enhancement */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
  margin-top: var(--space-xl);
}

.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

/* Mobile: stack content */
.project-card .project-content {
  padding: var(--space-lg);
}

.project-card .project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .project-card.featured {
    grid-column: span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  
  .project-card.featured .project-image {
    height: 100%;
    min-height: 300px;
  }
}

/* Desktop: 3 columns with featured spanning */
@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .project-card.featured {
    grid-column: span 2;
    grid-row: span 2;
  }
}
```

### 5. Skills Section Mobile Optimization

Enhance your skills grid for mobile devices:

```css
.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  margin-top: var(--space-xl);
}

.skill-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: var(--space-lg);
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease;
}

.skill-card:hover {
  transform: scale(1.05);
}

.skill-card h3 {
  font-size: clamp(1.125rem, 4vw, 1.5rem);
  margin-bottom: var(--space-sm);
}

/* Tablet and up: auto-fit grid */
@media (min-width: 480px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
```

### 6. Accessibility Enhancements

Implement comprehensive accessibility features:

```css
/* Focus states for keyboard navigation */
*:focus {
  outline: 3px solid #007bff;
  outline-offset: 2px;
}

a:focus,
button:focus {
  outline: 3px solid #007bff;
  outline-offset: 2px;
  border-radius: 3px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  :root {
    --text-color: #000;
    --bg-color: #fff;
    --accent-color: #0000ff;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Screen reader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Skip to content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #007bff;
  color: white;
  padding: 8px;
  z-index: 1000;
  text-decoration: none;
  border-radius: 3px;
}

.skip-link:focus {
  top: 6px;
}
```

### 7. Typography and Content Responsive Scaling

Implement fluid typography for optimal readability:

```css
/* Fluid typography system */
h1 {
  font-size: clamp(2rem, 8vw, 4rem);
  line-height: 1.1;
  margin-bottom: clamp(0.5rem, 4vw, 1.5rem);
}

h2 {
  font-size: clamp(1.5rem, 6vw, 2.5rem);
  line-height: 1.2;
  margin-bottom: clamp(0.5rem, 3vw, 1rem);
}

h3 {
  font-size: clamp(1.125rem, 4vw, 1.5rem);
  line-height: 1.3;
  margin-bottom: clamp(0.25rem, 2vw, 0.75rem);
}

p {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.6;
  margin-bottom: clamp(0.75rem, 3vw, 1rem);
  max-width: 65ch; /* Optimal reading length */
}

/* Content spacing system */
section {
  padding: clamp(2rem, 8vw, 6rem) 0;
}

.section-content {
  margin-bottom: clamp(1rem, 4vw, 2rem);
}
```

## Required Portfolio Implementations

### Responsive Design
- [ ] Mobile-first media query strategy implemented across entire portfolio
- [ ] Responsive grid layouts that adapt smoothly from mobile to desktop
- [ ] Fluid typography using clamp() for optimal readability at all sizes
- [ ] Touch-friendly navigation and interactive elements
- [ ] Responsive images that scale appropriately

### Mobile Optimization
- [ ] Mobile header layout optimized for portrait orientation
- [ ] Navigation that works effectively on small screens
- [ ] Project cards that stack and resize appropriately
- [ ] Skills section optimized for mobile viewing
- [ ] Fast loading and smooth interactions on mobile devices

### Accessibility Features
- [ ] Keyboard navigation support throughout portfolio
- [ ] Focus indicators visible and clearly defined
- [ ] Screen reader compatible structure and content
- [ ] High contrast and reduced motion support
- [ ] Skip links and landmark navigation

### Performance & UX
- [ ] Smooth transitions between breakpoints
- [ ] Consistent spacing system using custom properties
- [ ] Professional appearance across all device sizes
- [ ] Content hierarchy maintained on mobile
- [ ] Touch targets appropriately sized (44px minimum)

## Success Criteria

### Portfolio Excellence
- [ ] Portfolio works beautifully on mobile, tablet, and desktop
- [ ] Content remains readable and engaging at all screen sizes
- [ ] Navigation is intuitive and accessible across devices
- [ ] Professional appearance suitable for Project 1 submission
- [ ] All accessibility requirements met for inclusive design

### Technical Implementation
- [ ] Mobile-first approach with progressive enhancement
- [ ] Efficient use of media queries (≤4 breakpoints)
- [ ] CSS Grid and Flexbox working together effectively
- [ ] Custom properties used for consistent design system
- [ ] Clean, maintainable responsive CSS code

### User Experience
- [ ] Fast, smooth interactions on all devices
- [ ] Content hierarchy clear and logical on mobile
- [ ] Easy navigation and content discovery
- [ ] Accessible to users with diverse abilities and needs
- [ ] Professional presentation that showcases your skills

## Testing Guidelines

### Device Testing
1. **Mobile Testing (320px - 480px)**
   - Test on actual mobile device or browser dev tools
   - Verify touch targets are appropriately sized
   - Check that content doesn't require horizontal scrolling

2. **Tablet Testing (481px - 1024px)**
   - Ensure layouts transition smoothly
   - Verify navigation works in both orientations
   - Check that grid layouts adapt appropriately

3. **Desktop Testing (1025px+)**
   - Confirm advanced layouts display correctly
   - Test keyboard navigation thoroughly
   - Verify hover states and interactions work

### Accessibility Testing
1. **Keyboard Navigation**
   - Tab through entire portfolio without mouse
   - Verify all interactive elements are reachable
   - Check that focus indicators are visible

2. **Screen Reader Testing**
   - Use browser screen reader or accessibility tools
   - Verify heading structure makes sense
   - Check that images have appropriate alt text

## Debugging Common Issues

1. **Layout breaks at certain widths**
   - Check media query syntax and breakpoint values
   - Verify CSS Grid and Flexbox properties
   - Test with browser dev tools at various widths

2. **Text too small/large on mobile**
   - Adjust clamp() values for better scaling
   - Test on actual devices, not just browser simulation
   - Consider readability at arm's length

3. **Touch targets too small**
   - Ensure interactive elements are at least 44px
   - Add padding to increase touch area
   - Test with actual finger taps, not mouse clicks

## Next Steps

### Final Portfolio Preparation
Your responsive, accessible portfolio is now ready for:
- **LAB10:** Final polish, animations, and micro-interactions
- **LAB11:** GitHub Pages deployment and submission preparation
- **Project 1 Submission:** Professional portfolio due September 25

### Project 1 Timeline Check
- **Week 5 (Current):** Responsive design and accessibility ✓
- **Week 5 remaining:** Polish and deployment preparation
- **Week 6:** Final submission by September 25

Your LAB09 responsive and accessibility enhancements ensure your portfolio provides an excellent user experience for all visitors across all devices, meeting professional standards for your Project 1 submission.

## 🔧 Accessibility Troubleshooting Guide

### Common axe DevTools Errors & Fixes

#### **Error: "Images must have alternate text"**
**Problem:** Missing or empty alt attributes
```html
<!-- Fix: Add descriptive alt text -->
<img src="profile.jpg" alt="Professional headshot of Jane Smith in business attire">
<img src="decorative-bg.jpg" alt="" role="presentation"> <!-- For decorative images -->
```

#### **Error: "Headings must not skip levels"**
**Problem:** Jumping from H1 to H3 without H2
```html
<!-- Fix: Use proper hierarchy -->
<h1>Portfolio</h1>
<h2>About Me</h2>    <!-- Don't skip to H3 -->
<h3>Background</h3>   <!-- Now H3 is okay -->
```

#### **Error: "Links must have discernible text"**
**Problem:** Links with no text or unclear purpose
```html
<!-- Fix: Make link purpose clear -->
<a href="resume.pdf" aria-label="Download resume PDF">📄</a>
<a href="project1.html">View Project Details</a> <!-- Not just "click here" -->
```

### Responsive Design Issues

#### **Problem: "Site doesn't look right on mobile"**
**Solutions:**
1. **Check viewport meta tag** in HTML head:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

2. **Test media queries** - use browser dev tools (F12 → Device simulation)

3. **Verify mobile-first approach** - write base styles for mobile, then enhance for larger screens

#### **Problem: "Grid layout breaks on small screens"**
**Solution:** Check your LAB08 grid code has proper responsive behavior:
```css
.skills-container {
  display: grid;
  grid-template-columns: 1fr;        /* Mobile: single column */
  gap: 1rem;
}

@media (min-width: 768px) {
  .skills-container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Larger screens */
  }
}
```

### Color Contrast Issues

#### **Problem: "Color contrast too low"**
**Solution:** Use WebAIM Contrast Checker and adjust colors:
- **Normal text:** Need 4.5:1 ratio minimum
- **Large text:** Need 3:1 ratio minimum
- **Try these high-contrast combinations:**
  - Dark blue (#1a365d) on white (#ffffff) = 7.5:1 ✅
  - Dark gray (#2d3748) on light gray (#f7fafc) = 7.4:1 ✅

### Testing Workflow Issues

#### **Problem: "axe DevTools not showing up"**
**Solutions:**
1. **Refresh the page** after installing the extension
2. **Check extension is enabled** in browser settings
3. **Try right-click → Inspect → axe tab**

#### **Problem: "WAVE tool shows too many errors"**
**Focus on priorities:**
1. **Red errors first** - these break accessibility
2. **Yellow alerts second** - these need review
3. **Don't worry about minor warnings** initially

### Mobile Testing Issues

#### **Problem: "Hard to tap buttons on mobile"**
**Solution:** Ensure touch targets are large enough:
```css
/* Make buttons bigger for mobile */
.button, a {
  min-height: 44px;    /* Minimum touch target size */
  min-width: 44px;
  padding: 12px 24px;
}
```

#### **Problem: "Text too small on mobile"**
**Solution:** Use relative units and test actual device sizes:
```css
/* Use relative units for better mobile scaling */
body {
  font-size: 16px;     /* Minimum readable size */
  line-height: 1.6;    /* Good for readability */
}

h1 {
  font-size: clamp(1.5rem, 4vw, 3rem); /* Responsive font sizing */
}
```

### 🆘 Getting Help with Accessibility

**Before asking for help:**
1. **Run axe DevTools scan** and take a screenshot of errors
2. **Test on your mobile device** and note specific issues
3. **Try the contrast checker** for color-related problems

**Common beginner mistakes:**
1. **Forgetting alt text** - add to every image
2. **Using color only for information** - also use text or icons
3. **Making click targets too small** - ensure 44px minimum for mobile
4. **Skipping heading levels** - go H1→H2→H3, don't skip

## ✅ Final Accessibility Checklist

Before moving to LAB11, verify your live site passes:
- [ ] **axe DevTools shows 0 violations** (or very few minor ones)
- [ ] **WAVE tool shows mainly green icons**
- [ ] **Lighthouse accessibility score 90+**
- [ ] **Manual keyboard test** - can tab through all interactive elements
- [ ] **Mobile device test** - readable and usable on your phone
- [ ] **Color contrast checked** for all text combinations

**🎉 Great job!** Your portfolio is now accessible and ready for final design polish in LAB11.

## Homework Completion
**Time Estimate:** 2-3 hours to implement responsive design and accessibility features

**Submit:** GitHub repository URL showing your fully responsive, accessible portfolio ready for final polish
