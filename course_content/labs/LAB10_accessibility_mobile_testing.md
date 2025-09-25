# Lab 10 – Accessibility Testing & Mobile-Friendly Check

> Delivery Mode: In-Class Workshop ➜ Live Portfolio Testing (Hybrid)  
> **Portfolio Connection:** Make sure your portfolio works for everyone and looks good on phones

Goal: Test your deployed LAB09 portfolio to ensure it's accessible and works well on mobile devices. Learn simple tools to check if your portfolio meets basic accessibility requirements.

## Learning Outcomes
- Test your live portfolio with simple accessibility tools
- Check that your portfolio works well on mobile phones
- Fix basic accessibility issues that are common for beginners
- Ensure your portfolio meets PROJECT1 accessibility requirements

## Prerequisites  
- Completed LAB09 (Project Migration & GitHub Pages Deployment) with live portfolio URL
- Portfolio accessible at GitHub Pages URL and displaying correctly
- Access to a mobile phone for testing

## Getting Started: Simple Accessibility Testing

### Easy Tools Setup (3 minutes)

**We'll use one simple tool built into Chrome:**

#### **Lighthouse (Built into Chrome):**
1. **Open Chrome browser**
2. **Go to your GitHub Pages URL**
3. **Open developer tools:**
   - **Windows/Linux:** Press F12
   - **Mac:** Press Cmd+Option+I (or right-click → "Inspect")
4. **Click "Lighthouse" tab** at the top
5. **You're ready to test!**

### Quick Testing Workflow ✅

**Once you're set up, head to Task 1 to run Lighthouse.** Keep your eyes on the green Accessibility score (aim for 90+); the Performance and Best Practices numbers can wait until later.

### Simple Mobile Testing

**See Task 3 below for detailed mobile testing steps.**

### Common Fixes for Beginners

**These are the most common issues beginners need to fix:**

#### **Fix #1: Add Alt Text to Images**
```html
<!-- Instead of: -->
<img src="my-photo.jpg">

<!-- Use: -->
<img src="my-photo.jpg" alt="Photo of me at graduation">
```

#### **Fix #2: Fix Heading Order**
```html
<!-- Instead of: -->
<h1>My Portfolio</h1>
<h3>About Me</h3>  <!-- Skips H2! -->

<!-- Use: -->
<h1>My Portfolio</h1>
<h2>About Me</h2>   <!-- Proper order -->
```

#### **Fix #3: Better Link Text**
```html
<!-- Instead of: -->
<a href="resume.pdf">Click here</a>

<!-- Use: -->
<a href="resume.pdf">My resume</a>
```

#### **Fix #4: Add Language to HTML**
```html
<!-- Instead of: -->
<html>

<!-- Use: -->
<html lang="en">
```

## Tasks - Keep It Simple!

**Total Time: 55-65 minutes** *(some tasks may be completed outside class)*

### Task 1: Run Accessibility Test (5 minutes)

**Follow the Lighthouse setup steps from "Easy Tools Setup" above, then:**

1. **Uncheck everything except "Accessibility"**
2. **Click "Generate report"**
3. **Look at your ACCESSIBILITY score** - you want 90 or higher (see the Quick Testing Workflow note)

### Task 2: Fix Common Issues (10 minutes)

**Based on your Lighthouse report, fix these common problems:**

#### **If Lighthouse shows "Images must have alternate text":**
**See "Fix #1: Add Alt Text to Images" example above.**

#### **If Lighthouse shows "Heading elements are not in a logical order":**
**See "Fix #2: Fix Heading Order" example above.**

#### **If Lighthouse shows "Links do not have a discernible name":**
**See "Fix #3: Better Link Text" example above.**

### Task 3: Test on Your Phone (3 minutes)

**Simple mobile test:**

1. **Open your GitHub Pages URL** on your phone
2. **Check these things:**
   - Can you read all the text without zooming?
   - Can you tap all the links easily?
   - Does everything fit on the screen?
   - Does it look good when you turn your phone sideways?

### Task 4: Make Basic Fixes (10 minutes)

**If your phone test showed problems:**

#### **Text too small on mobile:**
```css
/* Add this to your CSS to make text bigger on small screens */
body {
  font-size: 16px; /* Make sure text is at least 16px */
}

h1 {
  font-size: 2rem; /* 32px - big enough for mobile */
}
```

#### **Content too wide on mobile:**
```css
/* Add this to prevent horizontal scrolling */
* {
  max-width: 100%;
  box-sizing: border-box;
}
```

### Task 5: Enhance Your Project Images (15 minutes)

**Make your portfolio stand out with better image presentation:**

**Step 1: Look at your current portfolio and decide which option works best for you:**

#### **Option A: Featured Project Image (Recommended)**
**Best for:** If you have one main project you want to highlight

**What it does:** Makes one project image large and eye-catching
**How to use it:** Add `class="featured-project"` to the section containing your main project

```css
/* Make one project image larger and more prominent */
.featured-project img {
  width: 100%;
  max-width: 600px;
  height: 300px;
  object-fit: cover; /* Keeps aspect ratio, crops if needed */
  border-radius: 8px;
  margin-bottom: 1rem;
}
```

**Step 2 for Option A:** In your HTML, add the class to your project section:
```html
<section class="featured-project">
  <h2>My Main Project</h2>
  <img src="my-project.jpg" alt="Screenshot of my project">
  <p>Description of project...</p>
</section>
```

#### **Option B: Project Image Grid**
**Best for:** If you want to show multiple images for your projects

**What it does:** Creates a neat 2-column layout for project images
**How to use it:** Put multiple images inside a div with `class="project-images"`

```css
/* Create a 2-image layout for projects */
.project-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem 0;
}

.project-images img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
```

**Step 2 for Option B:** In your HTML, wrap your images in a div:
```html
<section>
  <h2>My Project</h2>
  <div class="project-images">
    <img src="project-screenshot1.jpg" alt="Main page of my project">
    <img src="project-screenshot2.jpg" alt="Contact page of my project">
  </div>
  <p>Description of project...</p>
</section>
```

#### **Option C: Circular Profile Enhancement**
**Best for:** If you want to make your profile photo more professional

**What it does:** Makes your profile photo circular with a colored border
**How to use it:** Add `class="profile-photo"` to your profile image

```css
/* Make your profile photo more distinctive */
.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #1e40af; /* Use blue or your chosen color */
  margin: 0 auto 2rem;
  display: block;
}
```

**Step 2 for Option C:** In your HTML, add the class to your profile image:
```html
<img src="my-photo.jpg" alt="Professional photo of me" class="profile-photo">
```

**Step 3: Choose ONE option and follow these steps:**
1. **Copy the CSS code** for your chosen option
2. **Paste it into your style.css file**
3. **Update your HTML** with the class names shown above
4. **Save both files** and check your live site

### Task 6: Add Simple Responsive Menu (10 minutes)

**Make your navigation work better on mobile phones:**

**Step 1: Check your current navigation** - look for `<nav>` in your HTML

**Step 2: Add this simple responsive CSS to your style.css:**

```css
/* Simple responsive navigation */
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row; /* Desktop: horizontal menu */
  gap: 1rem;
}

nav li {
  margin: 0;
}

nav a {
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #1e40af; /* Use your site's color */
}

nav a:hover {
  background-color: #f3f4f6;
  border-radius: 4px;
}

/* Mobile: stack menu vertically */
@media (max-width: 768px) {
  nav ul {
    flex-direction: column; /* Mobile: vertical menu */
    gap: 0.5rem;
  }
  
  nav a {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #e5e7eb;
  }
}
```

**Step 3: Test your responsive menu:**
1. **Save your CSS file** and refresh your portfolio
2. **Test on desktop** - menu should be horizontal
3. **Test on your phone** - menu should stack vertically
4. **Try tapping menu items** - they should be easy to tap

**If you don't have navigation links yet:**
```html
<!-- Add this inside your <nav> tags -->
<ul>
  <li><a href="#about">About</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
```

#### **📸 Image Tips for Visual Interest:**
- **Use different sized images** - not everything should be the same size
- **Show project details** - include screenshots of different parts of your projects
- **Add variety** - mix wide images, square images, and rectangular ones
- **Consider your story** - what images best represent your work and personality?

**Examples of good image combinations:**
- Large hero project image + 2 smaller detail shots
- Circular profile photo + rectangular project screenshots  
- Mix of screenshots, photos, and graphics (if you made any)

## ✅ Testing Your Changes  

### Final Check (3 minutes):
1. **Run Lighthouse again** to confirm your Accessibility score stays at 90+
2. **Repeat the Task 3 phone test** to make sure everything still looks good
3. **Try pressing Tab** to navigate with keyboard - should work smoothly

## 🎉 You're Done!

**Congratulations! See the Final Checklist below to verify all requirements are met.**

## Simple Troubleshooting

**"My Lighthouse ACCESSIBILITY score is still low":**
- Make sure you fixed all the red errors it showed you
- Check that every image has alt text
- Make sure your headings go h1 → h2 → h3 (no skipping)
- Worried about other scores? Revisit the Quick Testing Workflow note—only Accessibility counts for this lab.

**"My site looks weird on my phone":**
- Make sure you saved your CSS file
- Try refreshing your phone browser
- Check that you added the CSS code correctly

**"I can't find the Lighthouse tab":**
- Make sure you're using Chrome browser
- Follow the "Easy Tools Setup" steps above
- Look at the tabs at the top of the developer tools panel
- It might be hidden under a >> arrow if your window is narrow

## ✅ Final Checklist for PROJECT1

Before submitting your project, make sure:
- [ ] **Accessibility score is 90+ (Task 1)**
- [ ] **The accessibility checklist items above are complete** (alt text, heading order, link text, contrast)
- [ ] **Your site passes the Task 3 phone test, with readable text**

**Great job!** Your portfolio is now accessible and mobile-friendly.
