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

## 🌟 Getting Started: Simple Accessibility Testing

### Easy Tools Setup (3 minutes)

**We'll use one simple tool built into Chrome:**

#### **Lighthouse (Built into Chrome):**
1. **Open Chrome browser**
2. **Go to your GitHub Pages URL**
3. **Press F12** to open developer tools
4. **Click "Lighthouse" tab** at the top
5. **You're ready to test!**

### Quick Testing Workflow ✅

**Test your live portfolio with these simple steps:**

1. **Open your GitHub Pages URL** in Chrome
2. **Press F12** → **Click "Lighthouse" tab**
3. **Check "Accessibility" box** (uncheck others to save time)
4. **Click "Generate report"**
5. **Look for score 90+** for PROJECT1

### 🎯 Simple Accessibility Checklist for PROJECT1

**Essential fixes every beginner needs:**

#### **Must Have (Required for PROJECT1):**
- [ ] **Alt text for images** - describe what's in the picture
- [ ] **Good color contrast** - text is dark enough to read easily
- [ ] **Proper headings** - H1, then H2, then H3 (don't skip)
- [ ] **Good link text** - say where the link goes, not "click here"

#### **Nice to Have (Makes you look professional):**
- [ ] **Site works with keyboard** - try pressing Tab to navigate
- [ ] **Page has a language** - add `lang="en"` to your HTML tag

### 📱 Simple Mobile Testing

**Test your portfolio on your phone:**

#### **Phone Testing (5 minutes):**
1. **Open your GitHub Pages URL** on your phone
2. **Check that you can read everything** without zooming
3. **Tap all your links** to make sure they work
4. **Turn your phone sideways** - does it still look good?

### 💡 Common Fixes for Beginners

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

### Task 1: Run Accessibility Test (5 minutes)

**Follow these exact steps:**

1. **Open Chrome** and go to your GitHub Pages URL
2. **Press F12** to open developer tools
3. **Click "Lighthouse" tab** at the top
4. **Uncheck everything except "Accessibility"**
5. **Click "Generate report"**
6. **Look at your score** - you want 90 or higher

### Task 2: Fix Common Issues (10 minutes)

**Based on your Lighthouse report, fix these common problems:**

#### **If Lighthouse shows "Images must have alternate text":**
```html
<!-- Find images without alt text -->
<img src="my-photo.jpg">

<!-- Add descriptive alt text -->
<img src="my-photo.jpg" alt="Professional photo of me">
```

#### **If Lighthouse shows "Heading elements are not in a logical order":**
```html
<!-- Fix: Don't skip heading levels -->
<h1>My Portfolio</h1>
<h2>About Me</h2>    <!-- Don't jump to h3 -->
<h3>My Skills</h3>
```

#### **If Lighthouse shows "Links do not have a discernible name":**
```html
<!-- Fix: Give links better text -->
<a href="resume.pdf">Download my resume</a>  <!-- Not "click here" -->
```

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

## ✅ Testing Your Changes  

### Final Check (3 minutes):
1. **Run Lighthouse again** - your accessibility score should be 90+
2. **Test on your phone again** - everything should look better
3. **Try pressing Tab** to navigate with keyboard - should work smoothly

## 🎉 You're Done!

**Congratulations!** Your portfolio now:
- ✅ **Passes accessibility tests** (90+ score)
- ✅ **Works well on mobile phones**
- ✅ **Has proper alt text for images**
- ✅ **Uses correct heading order**
- ✅ **Has good link text**

## Simple Troubleshooting

**"My Lighthouse score is still low":**
- Make sure you fixed all the red errors it showed you
- Check that every image has alt text
- Make sure your headings go h1 → h2 → h3 (no skipping)

**"My site looks weird on my phone":**
- Make sure you saved your CSS file
- Try refreshing your phone browser
- Check that you added the CSS code correctly

**"I can't find the Lighthouse tab":**
- Make sure you're using Chrome browser
- Press F12, then look at the tabs at the top
- It might be hidden under a >> arrow

## ✅ Final Checklist for PROJECT1

Before submitting your project, make sure:
- [ ] **Lighthouse accessibility score is 90+**
- [ ] **All images have descriptive alt text**
- [ ] **Headings are in proper order** (h1, h2, h3)
- [ ] **Links have good text** (not "click here")
- [ ] **Site works well on your phone**
- [ ] **Text is big enough to read easily**

**Great job!** Your portfolio is now accessible and mobile-friendly.
