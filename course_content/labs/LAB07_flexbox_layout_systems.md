# Lab 07 – Flexbox Portfolio Layouts

> Delivery Mode: In-Class Workshop ➜ Practice as Homework (Hybrid)  
> **Portfolio Connection:** Building flexible layouts for your Project 1 Portfolio Website

Goal: Apply Flexbox to create flexible, professional portfolio content sections, building on your LAB06 header foundation with simple, beginner-friendly layout patterns.

## Learning Outcomes
- Build portfolio content sections using basic Flexbox patterns
- Create simple, flexible layouts for skills, projects, and about sections
- Practice fundamental Flexbox properties with real portfolio content
- Develop confidence with Flexbox before learning more advanced techniques
- Build professional-looking layouts using simple, reliable patterns

## Prerequisites
- Completed LAB06 (CSS Foundation & Header Design) with working Flexbox header
- Completed Portfolio Planning Worksheet (content planned and ready to implement)
- Understanding of CSS box model and basic Flexbox from LAB06
- Basic knowledge of CSS selectors and properties

## Building on Your LAB06 Flexbox Foundation

In LAB06, you learned basic Flexbox with your header layout. Now we'll apply those same simple principles to build your portfolio content sections, keeping the patterns straightforward and beginner-friendly.

### Simple Flexbox Patterns We'll Use
- **`display: flex`** - Make containers flexible
- **`flex-wrap: wrap`** - Allow items to wrap to new lines
- **`gap`** - Add consistent spacing between items
- **`flex: 1`** - Make items grow to fill space equally
- **`min-width`** - Ensure items don't get too small

## Tasks

### 1. Simple Skills Section Layout

Start with a straightforward skills display using basic Flexbox patterns:

**Update your HTML structure:**
```html
<section class="skills-section" id="skills">
    <h2>My Skills</h2>
    <div class="skills-container">
        <div class="skill-card">
            <h3>Web Development</h3>
            <p>HTML, CSS, learning JavaScript</p>
        </div>
        <div class="skill-card">
            <h3>Design</h3>
            <p>Visual design, user experience</p>
        </div>
        <div class="skill-card">
            <h3>Tools</h3>
            <p>VS Code, Git, GitHub</p>
        </div>
        <div class="skill-card">
            <h3>Communication</h3>
            <p>Writing, presentation, teamwork</p>
        </div>
    </div>
</section>
```

**Apply simple Flexbox styling:**
```css
.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skill-card {
  flex: 1;
  min-width: 200px;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
}

.skill-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}
```

**Why this works:**
- `flex: 1` makes all cards grow equally
- `min-width: 200px` prevents cards from getting too narrow (mobile-friendly)
- `flex-wrap: wrap` moves cards to new lines when needed
- Simple and reliable pattern
### 2. Simple About Section Layout

Create a clean, flexible about section using the same Flexbox principles:

**HTML structure:**
```html
<section class="about-section" id="about">
    <div class="about-image">
        <img src="path/to/your/photo.jpg" alt="Your Name - Professional Photo">
    </div>
    <div class="about-text">
        <h2>About Me</h2>
        <p>Your compelling personal story from your Planning Worksheet...</p>
        <p>What you're studying, your interests, and your goals...</p>
    </div>
</section>
```

**Simple Flexbox styling:**
```css
.about-section {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 3rem 0;
  align-items: center;
}

.about-image {
  flex: 1;
  min-width: 250px;
  text-align: center;
}

.about-image img {
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 8px;
}

.about-text {
  flex: 2;
  min-width: 250px;
}
```

**Why this works:**
- Image and text stack on mobile (due to min-width and flex-wrap)
- Text takes twice as much space as image (`flex: 2` vs `flex: 1`)
- `align-items: center` keeps content aligned nicely
- Mobile-friendly min-widths that work on 320px screens

### 3. Simple Projects Section Layout

Build a straightforward project showcase using basic Flexbox patterns:

**HTML structure:**
```html
<section class="projects-section" id="projects">
    <h2>My Projects</h2>
    <div class="projects-container">
        <article class="project-card">
            <div class="project-content">
                <h3>Class Website Project</h3>
                <p>A simple website I built using HTML and CSS for this class.</p>
                <p><strong>Skills used:</strong> HTML, CSS, Flexbox</p>
            </div>
        </article>
        
        <article class="project-card">
            <div class="project-content">
                <h3>Portfolio Planning</h3>
                <p>Research and planning for my personal portfolio website.</p>
                <p><strong>Skills used:</strong> Research, planning, design thinking</p>
            </div>
        </article>
        
        <article class="project-card">
            <div class="project-content">
                <h3>Future Project</h3>
                <p>A placeholder for a project I plan to build this semester.</p>
                <p><strong>Skills to learn:</strong> JavaScript, responsive design</p>
            </div>
        </article>
    </div>
</section>
```

**Simple Flexbox styling:**
```css
.projects-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-card {
  padding: 2rem;
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.project-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.project-card p {
  margin-bottom: 0.5rem;
}
```

**Why this works:**
- `flex-direction: column` stacks projects vertically
- Simple, clean layout that's easy to understand
- Consistent spacing with `gap`
- Professional appearance without complexity
### 4. Basic Navigation Improvement

Enhance your navigation using simple Flexbox patterns:

**HTML structure (add to your header):**
```html
<nav>
    <div class="nav-container">
        <a href="#" class="logo">Your Name</a>
        <div class="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    </div>
</nav>
```

**Simple Flexbox styling:**
```css
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo {
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
}

.nav-links a:hover {
  color: #667eea;
}
```

**Why this works:**
- `justify-content: space-between` puts logo left, links right
- `align-items: center` centers everything vertically
- Simple gap between navigation links
- Clean, professional appearance

### 5. Section Spacing and Polish

Add consistent spacing throughout your portfolio using simple techniques:

**Container and section styling:**
```css
/* Main container for all sections */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Responsive container padding */
@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}

/* Consistent section spacing */
section {
  padding: 3rem 0;
}

/* Section headings */
section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

/* Add some visual interest to section headings */
section h2::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background: #667eea;
  margin: 1rem auto 0;
  border-radius: 2px;
}
```

**Why this works:**
- Consistent spacing makes everything look professional
- Centered headings create clear section breaks
- Simple underline adds visual interest
- Container prevents content from getting too wide

## Required Portfolio Implementations

### Basic HTML Structure
- [ ] Skills section with simple card structure
- [ ] About section with image and text areas
- [ ] Projects section with project cards
- [ ] Navigation section with logo and links
- [ ] Proper semantic elements (section, nav, etc.)

### Simple Flexbox Layouts
- [ ] Skills container using `display: flex` and `flex-wrap: wrap`
- [ ] About section with image and text using simple flex patterns
- [ ] Navigation using `justify-content: space-between`
- [ ] Project cards with consistent spacing using `gap`
- [ ] Clean, readable layouts without complex calculations

### Professional Appearance
- [ ] Consistent spacing throughout all sections
- [ ] Clear visual hierarchy with headings and content
- [ ] Professional color scheme and typography
- [ ] Content matches your Portfolio Planning Worksheet
- [ ] Clean, beginner-friendly CSS that you understand

### Portfolio Readiness
- [ ] Layout works on different screen sizes (due to flex-wrap)
- [ ] Professional appearance suitable for portfolio website
- [ ] Content showcases your skills and personality
- [ ] Code is clean and well-organized
- [ ] Ready for further enhancement in future labs

## Essential Beginner-Friendly Flexbox Patterns

### 1. Basic Navigation
```css
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 2rem;
}
```

### 2. Simple Card Layout
```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1;
  min-width: 200px;
}
```

### 3. Two-Column Content
```css
.two-column {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.column {
  flex: 1;
  min-width: 250px;
}
```

## Success Criteria
- [ ] Simple Flexbox layouts implemented for all portfolio sections
- [ ] Clean, beginner-friendly CSS that you can explain and understand
- [ ] Professional appearance using basic Flexbox properties
- [ ] Portfolio content sections work together cohesively
- [ ] Layouts are flexible and work on different screen sizes
- [ ] Code follows patterns learned in class without complex calculations
- [ ] Content structure aligns with Portfolio Planning Worksheet
- [ ] Ready for next lab's enhancements

## Troubleshooting Common Beginner Issues
1. **Items not wrapping to new lines:**
   - Make sure you have `flex-wrap: wrap` on the container
   - Check that items have a `min-width` set

2. **Spacing looks uneven:**
   - Use `gap` property instead of margins for consistent spacing
   - Make sure all containers have the same gap value

3. **Content not centering:**
   - Use `align-items: center` to center vertically
   - Use `justify-content: center` to center horizontally
   - Remember: these go on the flex container, not the items

4. **Layout breaking on mobile:**
   - Check your `min-width` values - they might be too large
   - Make sure you're using `flex-wrap: wrap`

## Next Steps

### Portfolio Development Progression
Your simple Flexbox layouts prepare you for:
- **LAB08:** Enhanced layouts with CSS Grid (or more advanced Flexbox)
- **LAB09:** Responsive design and mobile optimization
- **LAB10:** Final polish and animations
- **Project 1 Submission:** Professional portfolio due Week 7 (revised timeline)

### Focus on Mastery
- Practice these basic patterns until they feel natural
- Experiment with different content in your sections
- Ask questions about anything that doesn't make sense
- Remember: simple, working code is better than complex, broken code

Your LAB07 foundation provides the essential layout skills needed to create a professional portfolio while building confidence with Flexbox fundamentals.

## Homework Completion
**Time Estimate:** 1.5-2 hours to implement all basic flexbox layouts

**Submit:** GitHub repository URL showing your portfolio with simple, working Flexbox layouts

**Focus on:** Getting the basic patterns working well rather than trying to make everything perfect. Simple, clean layouts are the goal!
