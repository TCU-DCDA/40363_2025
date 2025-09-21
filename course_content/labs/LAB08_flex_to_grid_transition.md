# Lab 08 – CSS Grid for Portfolio Layouts

> Delivery Mode: In-Class Workshop ➜ Portfolio Implementation (Hybrid)  
> **Portfolio Connection:** Advancing your Project 1 Portfolio with CSS Grid layouts

Goal: Enhance your portfolio with CSS Grid layouts for complex content arrangements, building on your LAB07 Flexbox foundation to create sophisticated, responsive portfolio sections.

## Learning Outcomes
- Implement CSS Grid for complex portfolio layouts
- Combine CSS Grid with existing Flexbox components effectively
- Create responsive grid systems for portfolio content
- Build advanced project showcase layouts using Grid
- Apply Grid techniques to real portfolio development needs

## Prerequisites
- Completed LAB07 (Advanced Flexbox Layout Systems) with portfolio content sections
- Working portfolio with header, about, skills, and projects sections
- Understanding of CSS Flexbox and responsive design basics
- Portfolio Planning Worksheet content ready for advanced layouts

## Building on Your LAB07 Foundation

In LAB07, you built portfolio content sections using Flexbox. Now we'll enhance specific sections with CSS Grid where it provides better layout control, while keeping Flexbox where it works best.

### Grid vs Flexbox Decision Framework
- **Keep Flexbox for:** Navigation bars, simple card layouts, centering content
- **Use Grid for:** Complex project showcases, asymmetric layouts, overlapping elements
- **Combine both:** Grid for overall layout, Flexbox for component internals

## Media Query Fundamentals for Responsive Grids

Before we dive into Grid layouts, let's understand the media queries we'll be using to make them responsive.

### Media Query Basics
**Media queries** allow us to apply different CSS rules based on screen size. Here's the basic syntax:

```css
/* Mobile styles (default) */
main {
  padding: 2rem 1rem;
}

/* Tablet and larger screens */
@media (min-width: 768px) {
  main {
    padding: 2rem;
  }
}
```

**Note:** The example above shows the concept. You'll apply media queries to your actual portfolio sections in the tasks that follow.

**Key Concepts:**
- **Mobile-first approach:** Write styles for mobile first, then enhance for larger screens
- **Breakpoints:** Common screen widths where layouts change (480px, 768px, 1024px)
- **min-width:** "If screen is at least this wide, apply these styles"

### Why Mobile-First?
- Most users browse on mobile devices
- Easier to enhance simple layouts than simplify complex ones
- Better performance - mobile devices get simpler CSS
- Forces you to prioritize essential content

### Testing Responsive Behavior
Use browser dev tools to test different screen sizes:
- **Chrome/Firefox:** F12 → Click device icon → Select different screen sizes
- **Test common breakpoints:** 320px (mobile), 768px (tablet), 1024px (desktop)
- **Drag to resize:** Watch how your layouts adapt smoothly

## Tasks

### 1. Enhanced Project Showcase with CSS Grid

Transform your projects section from LAB07 into a sophisticated grid layout:

**Update your HTML structure:**
```html
<section class="projects-section" id="projects">
    <h2>Featured Projects</h2>
    <div class="projects-grid">
            <article class="project-card featured">
                <div class="project-image">
                    <img src="path/to/featured-project.jpg" alt="Featured Project Screenshot">
                </div>
                <div class="project-content">
                    <h3>Featured Project Title</h3>
                    <p>This is your standout project with more detailed description...</p>
                    <div class="project-tech">
                        <span class="tech-tag">HTML</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                    <div class="project-links">
                        <a href="#" class="btn-primary">View Project</a>
                        <a href="#" class="btn-secondary">GitHub</a>
                    </div>
                </div>
            </article>
            
            <article class="project-card">
                <div class="project-image">
                    <img src="path/to/project2.jpg" alt="Project 2 Screenshot">
                </div>
                <div class="project-content">
                    <h3>Project Two</h3>
                    <p>Description of second project...</p>
                    <div class="project-tech">
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">Flexbox</span>
                    </div>
                </div>
            </article>
            
            <article class="project-card">
                <div class="project-image">
                    <img src="path/to/project3.jpg" alt="Project 3 Screenshot">
                </div>
                <div class="project-content">
                    <h3>Project Three</h3>
                    <p>Description of third project...</p>
                    <div class="project-tech">
                        <span class="tech-tag">Grid</span>
                        <span class="tech-tag">Responsive</span>
                    </div>
                </div>
            </article>
        </div>
</section>
```

**Implement CSS Grid layout:**
```css
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  /* Featured project spans both columns */
  .project-card.featured {
    grid-column: span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
  }
}

/* Desktop: 3 columns with featured layout */
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

### 2. Advanced Skills Grid Layout

Enhance your skills section from LAB07 with CSS Grid for better control:

```css
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.skill-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
}

/* Create visual hierarchy with different heights */
.skill-card:nth-child(odd) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}
```

### 3. Complex About Section Layout

Create an advanced about section that combines Grid and Flexbox:

```css
.about-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .about-section {
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 
      "image content"
      "image highlights";
    gap: 3rem;
    padding: 4rem 0;
  }
  
  .about-image {
    grid-area: image;
  }
  
  .about-content {
    grid-area: content;
  }
  
  .about-highlights {
    grid-area: highlights;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
}

.about-highlights {
  margin-top: 2rem;
}

.highlight-item {
  flex: 1;
  min-width: 120px;
  padding: 1rem;
  background: #e9ecef;
  border-radius: 6px;
  text-align: center;
}
```

### 4. Portfolio Layout Integration

Create a cohesive layout system that integrates all sections:

**HTML Structure with Semantic Elements:**
```html
<body>
  <header>
    <!-- Your header content -->
  </header>
  
  <main>
    <section id="about">...</section>
    <section id="skills">...</section>
    <section id="projects">...</section>
  </main>
  
  <footer>
    <!-- Your footer content -->
  </footer>
</body>
```

**CSS for Consistent Layout:**
```css
/* Consistent container behavior for all major sections */
header,
main,
footer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Main element gets additional grid layout */
main {
  display: grid;
  gap: 6rem;
  padding: 2rem;
}

/* Consistent section headers */
section h2 {
  text-align: center;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: 2rem;
  position: relative;
}

/* Responsive section header spacing */
@media (min-width: 768px) {
  section h2 {
    margin-bottom: 3rem;
  }
}

section h2::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 2px;
}
```

## Required Portfolio Implementations

### CSS Grid Layouts
- [ ] Projects section using CSS Grid with featured project layout
- [ ] Skills section with auto-fit grid pattern
- [ ] Advanced about section combining Grid and Flexbox
- [ ] Responsive behavior across all grid layouts

### Portfolio Enhancement
- [ ] Featured project that spans multiple grid areas
- [ ] Visual hierarchy using grid positioning
- [ ] Consistent spacing using CSS Grid gap property
- [ ] Professional layout that showcases your content effectively

### Integration with LAB07
- [ ] Header Flexbox layout maintained from LAB06-07
- [ ] Navigation using Flexbox (from LAB07) 
- [ ] Grid and Flexbox working together harmoniously
- [ ] Responsive patterns that build on LAB07 foundations

### Code Quality
- [ ] Clean, well-organized CSS with Grid and Flexbox clearly separated
- [ ] Meaningful class names that reflect portfolio structure
- [ ] Comments explaining Grid layout decisions
- [ ] Mobile-first responsive approach maintained

## Success Criteria

### Visual Excellence
- [ ] Professional portfolio layout suitable for Project 1 submission
- [ ] Complex layouts that couldn't be achieved with Flexbox alone
- [ ] Consistent visual hierarchy and spacing throughout
- [ ] Featured content properly emphasized through grid positioning

### Technical Proficiency
- [ ] CSS Grid implemented correctly for complex layouts
- [ ] Grid and Flexbox used appropriately (right tool for each job)
- [ ] Responsive grid layouts work across device sizes
- [ ] Clean, maintainable CSS code structure

### Portfolio Readiness
- [ ] Content from Portfolio Planning Worksheet properly showcased
- [ ] Layout enhances rather than distracts from content
- [ ] Professional appearance ready for Project 1 submission
- [ ] All portfolio sections work together cohesively

## Debugging Tips

1. **Grid layout not displaying correctly?**
   - Use browser dev tools Grid inspector
   - Check grid-template-columns and grid-template-areas syntax
   - Verify grid container has display: grid

2. **Grid items not positioning as expected?**
   - Check grid-column and grid-row values
   - Use grid-template-areas for complex layouts
   - Verify media query breakpoints

3. **Responsive issues?**
   - Test grid-template-columns with different screen sizes
   - Use auto-fit and minmax() for flexible grids
   - Check that mobile-first approach is maintained

## Next Steps

### Immediate Portfolio Development
Your enhanced grid layouts prepare you for:
- **LAB09:** Media queries, mobile optimization, and accessibility features for your portfolio
- **LAB10:** Final polish, animations, and portfolio deployment preparation
- **Project 1 Submission:** Professional portfolio ready for Week 6 deadline

### Project 1 Timeline
- **Week 4 (Current):** Advanced layouts with CSS Grid ✓
- **Week 5:** Responsive polish and accessibility
- **Week 6:** Project 1 portfolio due September 25

Your LAB08 grid implementations provide the sophisticated layout foundation needed to make your portfolio stand out while effectively showcasing your content and personal brand.

## Homework Completion
**Time Estimate:** 2-3 hours to implement all grid layouts and integrate with existing portfolio

**Submit:** GitHub repository URL showing your enhanced portfolio with CSS Grid implementations
