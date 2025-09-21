# Lab 04 – Personal Webpage Foundation

> Delivery Mode: In-Class Launch ➜ Complete as Homework (Hybrid)

Goal: Build a comprehensive personal webpage using semantic HTML elements and establish content hierarchy and structure.

## Learning Outcomes
- Apply semantic HTML5 elements effectively
- Create well-structured content with proper heading hierarchy
- Implement accessible HTML practices from the start
- Develop content strategy for personal/professional presentation
- Practice Git workflow with iterative development

## Prerequisites
- Completed Lab 01 (First HTML File & VS Code)
- Completed Lab 02 (File Organization & Web Dev Concepts)
- Completed Lab 03 (Git Introduction & HTML Foundations)
- Understanding of HTML5 semantic elements
- Basic familiarity with Git workflow

## Tasks

### 1. Content Planning & Information Architecture
1. Plan your personal webpage content:
   - Define your target audience (peers, potential employers, etc.)
   - Outline 4-5 main sections
   - Gather content: bio, interests, skills, goals, contact info

2. Create a content outline document:
   - List all sections in logical order
   - Note heading levels for each section
   - Plan content length and tone

### 2. Enhanced HTML Structure
1. **Work in your existing Git repository** from Lab 03:
   - Open your `personal-website-foundation` repository in VS Code
   - Continue building on your existing `index.html` and `about.html`
   - Create additional pages as needed

2. **Expand semantic structure**:
   - Implement proper semantic HTML5 structure
   - Use appropriate sectioning elements
   - Establish clear heading hierarchy (h1-h3)

3. Required semantic elements to include:
   - `<header>` with site/page title
   - `<nav>` (even if minimal for now)
   - `<main>` containing primary content
   - `<section>` for major content areas
   - `<aside>` for supplementary content
   - `<footer>` with basic info

### 3. Content Sections Implementation

#### Required Sections:
1. **Hero/Introduction**
   - h1 with your name or tagline
   - Brief elevator pitch (2-3 sentences)
   - Professional photo placeholder or description

2. **About Me**
   - h2 heading
   - 2-3 paragraphs about background, interests
   - Include academic/professional context

3. **Skills & Interests**
   - h2 heading
   - List format (unordered list recommended)
   - Mix of technical and personal interests
   - Minimum 5-7 items

4. **Goals & Aspirations**
   - h2 heading
   - What you hope to achieve in this course
   - Professional or academic goals
   - How web development fits your plans

5. **Contact & Connect**
   - h2 heading  
   - Basic contact preferences
   - Placeholder for future social/professional links
   - Preferred communication methods

### 4. Accessibility & Best Practices
1. Implement accessibility fundamentals:
   - Meaningful heading hierarchy (don't skip levels)
   - Descriptive text content
   - Logical reading order
   - Language attribute set correctly

2. HTML best practices:
   - Proper nesting of elements
   - Consistent indentation (2 or 4 spaces)
   - Meaningful comments for major sections
   - Valid HTML5 syntax

### 5. Content Quality Standards
1. **Writing quality:**
   - Clear, concise prose
   - Professional but authentic tone
   - Error-free grammar and spelling
   - Appropriate length (substantial but scannable)

2. **Structure quality:**
   - Logical information flow
   - Consistent formatting
   - Proper use of lists vs. paragraphs
   - Clear section boundaries

## HTML Structure Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Personal Website</title>
</head>
<body>
    <header>
        <h1>Your Name</h1>
        <nav>
            <!-- Future navigation will go here -->
        </nav>
    </header>
    
    <main>
        <section id="hero">
            <h2>Welcome</h2>
            <!-- Introduction content -->
        </section>
        
        <section id="about">
            <h2>About Me</h2>
            <!-- About content -->
        </section>
        
        <section id="skills">
            <h2>Skills & Interests</h2>
            <!-- Skills list -->
        </section>
        
        <section id="goals">
            <h2>Goals & Aspirations</h2>
            <!-- Goals content -->
        </section>
        
        <section id="contact">
            <h2>Contact & Connect</h2>
            <!-- Contact info -->
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Your Name. Built with HTML5.</p>
    </footer>
</body>
</html>
```

## Success Criteria
- [ ] All 5 required content sections present and complete
- [ ] Proper semantic HTML5 structure throughout
- [ ] Logical heading hierarchy (h1 → h2 → h3, no skipping)
- [ ] Minimum 400 words of meaningful content
- [ ] Valid HTML5 syntax (passes W3C validation)
- [ ] Proper file organization and naming
- [ ] Accessibility considerations implemented
- [ ] Professional, authentic tone maintained
- [ ] Clean, readable code with consistent formatting

## Content Guidelines

### Tone & Voice
- Professional but personal
- Authentic and genuine
- Appropriate for academic/professional context
- Clear and engaging

### Length Guidelines
- Introduction: 2-3 sentences
- About section: 2-3 paragraphs (150-200 words)
- Skills: 5-10 items with brief descriptions
- Goals: 1-2 paragraphs (100-150 words)
- Contact: Brief, clear information

## Git Workflow for This Lab
1. **Work iteratively with commits**:
   - Make content improvements → Save → Commit
   - Example commits:
     - `Add comprehensive about section content`
     - `Improve skills section with specific examples`
     - `Enhance contact section and accessibility`

2. **Commit frequently** as you work:
   - After completing each major section
   - After fixing validation errors
   - After accessibility improvements

## Validation & Testing
1. **HTML Validation:**
   - Use [W3C HTML Validator](https://validator.w3.org/)
   - Fix any syntax errors
   - Ensure proper nesting

2. **Content Review:**
   - Read aloud for flow and clarity
   - Check spelling and grammar
   - Verify all sections are complete

3. **Structure Check:**
   - Verify heading hierarchy
   - Test logical reading order
   - Confirm semantic elements are used appropriately

## Submission Instructions
1. **Ensure all work is committed and pushed** to your GitHub repository
2. **Final validation check**:
   - Test both HTML files in browser
   - Validate both files with W3C validator
   - Verify meaningful commit history
3. **Submit repository URL** to D2L:
   - Use the same repository from Lab 03: `personal-website-foundation`
   - Paste URL into D2L assignment submission

## Troubleshooting Common Issues
- **Heading hierarchy problems:** Remember h1 → h2 → h3 (don't skip levels)
- **Content too brief:** Aim for substantial, meaningful content
- **Generic content:** Make it personal and specific to you
- **Poor organization:** Use semantic elements to structure content clearly
- **Git issues:** Remember to commit and push regularly

## Next Steps
This foundational webpage will be enhanced in upcoming labs with:
- CSS styling and visual design
- Links and navigation
- Images and media
- Interactive elements

Save your work and be prepared to build upon this structure in future sessions.
