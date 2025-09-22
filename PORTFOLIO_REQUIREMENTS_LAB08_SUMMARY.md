# Portfolio Requirements Summary: End of LAB08

> **What should be in place by the completion of LAB08 for a professional portfolio ready for LAB09 migration**

This document outlines the exact portfolio requirements demonstrated across Labs 01-08, strictly adhering to the assignments without additional features. Students completing LAB08 should have a sophisticated, responsive portfolio ready for LAB09 migration to GitHub Pages.

## File Structure Requirements

```
writ40363-portfolio/
├── index.html (semantic HTML5 structure)
├── style.css (comprehensive stylesheet)
├── images/ (portfolio assets)
│   ├── profile-photo.jpg (about section)
│   ├── featured-project.jpg (project screenshots)
│   ├── project2.jpg
│   └── project3.jpg
└── README.md (basic project information)
```

## HTML Structure Requirements (LAB01-LAB04 Foundation)

### Semantic Document Structure
Based on LAB01-LAB03 progression and LAB08 integration:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <!-- Navigation from LAB06-07 -->
    </header>
    
    <main>
        <section id="about">
            <!-- About content -->
        </section>
        <section id="skills">
            <!-- Skills grid -->
        </section>
        <section id="projects">
            <!-- Project showcase -->
        </section>
    </main>
    
    <footer>
        <!-- Contact information -->
    </footer>
</body>
</html>
```

### Required Content Sections

#### Header (LAB06-07 Flexbox Implementation)
- Professional navigation bar using Flexbox
- Logo/name and navigation links
- Responsive hamburger menu concept (demonstrated in LAB07)
- Smooth scrolling navigation to portfolio sections

#### About Section (LAB08 Grid Integration)
- Professional headshot image
- Personal introduction paragraph
- Skills highlights using Grid layout
- Educational/background information
- Grid layout combining image placement with content areas

#### Skills Section (LAB08 Grid Enhancement)
- CSS Grid using `auto-fit` pattern: `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`
- Individual skill cards with hover effects
- Visual hierarchy using nth-child selectors
- Technical skills relevant to web development

#### Projects Section (LAB08 Featured Grid Layout)
- Minimum 3 project showcases
- Featured project spanning multiple grid areas
- Project images, titles, descriptions
- Technology tags for each project
- Project links (View Project, GitHub)
- Complex grid layout: mobile (1 column), tablet (2 columns), desktop (3 columns with featured spanning)

## CSS Requirements (LAB05-LAB08 Progression)

### CSS Reset and Base Styles (LAB05 Foundation)
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: [chosen font stack];
    line-height: 1.6;
    color: #333;
}
```

### Typography System (LAB06 Requirements)
- Consistent font hierarchy with `clamp()` responsive sizing
- Header typography: `font-size: clamp(1.5rem, 5vw, 2.5rem)`
- Professional color scheme
- Readable line-height and spacing

### Layout Systems Integration

#### Flexbox (LAB06-07 Foundation)
- Header navigation: `display: flex; justify-content: space-between`
- Navigation links: `display: flex; gap: 2rem`
- Content centering and alignment
- Button layouts and spacing

#### CSS Grid (LAB08 Advanced Layouts)
- Projects grid: `display: grid; grid-template-columns: 1fr` (mobile-first)
- Skills grid: `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`
- Featured project spanning: `grid-column: span 2; grid-row: span 2`
- About section with named grid areas

### Responsive Design (LAB08 Media Queries)
Required breakpoints and behaviors:

```css
/* Mobile-first base styles */
.projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

/* Tablet: 768px and up */
@media (min-width: 768px) {
    .projects-grid {
        grid-template-columns: 1fr 1fr;
    }
    
    .project-card.featured {
        grid-column: span 2;
    }
}

/* Desktop: 1024px and up */
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

### Visual Polish Requirements
- Consistent spacing using Grid `gap` property
- Hover effects on interactive elements
- Section header underlines: 60px colored bar
- Gradient backgrounds: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Border radius for modern card appearance
- Transition effects: `transition: transform 0.3s ease`

## Technical Implementation Standards

### CSS Organization
- Single external stylesheet (`style.css`)
- Logical section organization matching HTML structure
- Comments explaining Grid layout decisions
- Mobile-first responsive approach
- Clean, maintainable code structure

### Git Version Control (LAB03 Requirements)
- Meaningful commit messages following course style guide
- Regular commits showing development progression
- Proper file organization and .gitignore usage
- Repository ready for GitHub Desktop workflow

### Accessibility Fundamentals
- Semantic HTML5 elements (`header`, `main`, `section`, `article`)
- Proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- Sufficient color contrast
- Responsive design for various devices

## Browser Testing Requirements
- Chrome/Firefox dev tools responsive testing
- Testing at breakpoints: 320px (mobile), 768px (tablet), 1024px (desktop)
- Grid inspector verification of layout behavior
- Live Server testing for development workflow

## Content Requirements (Portfolio Planning Worksheet)
- Personal branding reflected in design choices
- Professional project descriptions
- Skills relevant to web development track
- Contact information in footer
- Professional headshot or branded imagery

## Integration Success Criteria

By LAB08 completion, portfolios should demonstrate:

### Layout Sophistication
- ✅ Complex layouts achievable only with CSS Grid
- ✅ Proper combination of Grid and Flexbox
- ✅ Featured content emphasis through grid positioning
- ✅ Professional visual hierarchy

### Technical Proficiency
- ✅ CSS Grid implemented correctly for complex layouts
- ✅ Responsive grid layouts across device sizes
- ✅ Clean, organized CSS with logical structure
- ✅ Mobile-first responsive approach

### Portfolio Readiness
- ✅ Professional appearance suitable for industry presentation
- ✅ Content from Portfolio Planning Worksheet properly showcased
- ✅ Layout enhances rather than distracts from content
- ✅ All sections work together cohesively

## LAB09 Migration Readiness

Portfolios completing LAB08 requirements are ready for:
- **Project migration** from Sandbox to portfolio root directory
- **GitHub Pages deployment** with professional URL
- **Live site launch** for Project 1 submission timeline

**File Organization Check:** Ensure all assets (images, CSS, HTML) use relative paths and are properly organized for migration process.

**Final Validation:** Portfolio should look and function professionally on multiple device sizes, with sophisticated layouts that showcase technical skills while maintaining excellent user experience.

---

*This summary reflects only features explicitly demonstrated in Labs 01-08. No additional features or enhancements beyond lab requirements are included.*