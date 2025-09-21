# Lab 03 – Git Introduction & HTML Foundations

> Delivery Mode: In-Class Activity (Foundation + Tool Introduction)

Goal: Introduce version control with Git/GitHub while enhancing HTML knowledge and bringing previous work into a professional workflow.

## Learning Outcomes
- Understand why version control is essential for web development
- Set up Git and GitHub workflow
- Apply semantic HTML5 elements effectively
- Create well-structured content with proper heading hierarchy
- Transition from file-based to repository-based development
- Implement accessible HTML practices

## Prerequisites
- Completed Lab 01 (First HTML File & VS Code)
- Completed Lab 02 (File Organization & Web Dev Concepts)
- VS Code installed with extensions
- Have your Lab 1-2 project files available

## Understanding the Need for Version Control

Before we dive in, let's understand **why** we need Git:
- **Problem**: As projects grow, managing file versions becomes complex
- **Pain Point**: You've likely experienced "final_v2_REAL_final.html" naming
- **Solution**: Git tracks changes systematically and professionally
- **Benefit**: Industry standard for collaboration and deployment

## Tasks

### 1. Git and GitHub Setup
1. **Create GitHub account** (if you don't have one):
   - Go to [github.com](https://github.com)
   - Sign up with your TCU email
   - Choose a professional username

2. **Install GitHub Desktop**:
   - Download from [desktop.github.com](https://desktop.github.com)
   - Sign in with your GitHub account
   - Complete the setup process

3. **Configure Git in VS Code**:
   - Open VS Code
   - Go to Source Control tab (should show Git options now)
   - Sign in to GitHub when prompted

### 2. Create Your First Repository
1. **Create new repository on GitHub**:
   - Go to GitHub.com → "New" (green button)
   - Repository name: `personal-website-foundation`
   - Set to **Public**
   - Check **"Add a README file"**
   - Click **"Create repository"**

2. **Clone repository locally**:
   - Click green **"Code"** button → **"Open with GitHub Desktop"**
   - Choose location: Desktop or Documents folder
   - Click **"Clone"**

### 3. Migrate Your Previous Work
1. **Open repository in VS Code**:
   - GitHub Desktop → "Open in VS Code" OR
   - VS Code → File → Open Folder → select your cloned repo

2. **Transfer your Lab 1-2 files**:
   - Copy `index.html` from Lab 1 into your repository
   - Copy `about.html` from Lab 2 into your repository
   - Create `css/` and `images/` folders
   - Copy any images you've added

3. **Organize your repository structure**:
   ```
   personal-website-foundation/
   ├── index.html          ← From Lab 1 (enhanced)
   ├── about.html          ← From Lab 2
   ├── css/                ← Empty for now
   ├── images/             ← Any images you've added
   └── README.md           ← GitHub created this
   ```

### 4. Your First Commits
1. **Make your first commit**:
   - Open GitHub Desktop or VS Code Source Control
   - You'll see your files listed as "Changes"
   - Commit message: `Initial commit: Add foundation HTML files from Labs 1-2`
   - Click **"Commit to main"**
   - Click **"Push origin"** to sync to GitHub

2. **Make an improvement and commit again**:
   - Edit your `index.html`: improve a heading or add content
   - Save the file
   - Return to GitHub Desktop/Source Control
   - Commit message: `Enhance homepage content and structure`
   - Commit and push

### 5. HTML Foundations Enhancement
Now that your work is safely in Git, let's enhance your HTML:

1. **Improve semantic structure in both files**:
   - Ensure proper `<header>`, `<nav>`, `<main>`, `<footer>` structure
   - Use `<section>` and `<article>` appropriately
   - Add `<aside>` for supplementary content if relevant

2. **Enhance your `index.html`**:
   - Add proper heading hierarchy (h1 → h2 → h3)
   - Include meaningful `<meta>` description
   - Add basic navigation structure (don't worry about links yet)

3. **Enhance your `about.html`**:
   - Ensure consistent structure with index.html
   - Add more detailed content sections
   - Practice semantic HTML elements

4. **Add accessibility improvements**:
   - Ensure all images have proper `alt` attributes
   - Use meaningful link text (no "click here")
   - Proper heading hierarchy for screen readers

### 6. Git Workflow Practice
1. **Make incremental commits** as you work:
   - `Improve semantic structure in index.html`
   - `Add accessibility improvements to about page`
   - `Enhance navigation structure`

2. **Learn to read your Git history**:
   - GitHub Desktop → History tab
   - See how your project evolves over time
   - This is the power of version control!

## Content Requirements

### Enhanced index.html should include:
- Proper semantic HTML5 structure
- Professional `<head>` section with meta tags
- Clear heading hierarchy (h1, h2, h3)
- Navigation structure (even if links don't work yet)
- At least 3 main content sections
- Accessibility considerations

### Enhanced about.html should include:
- Consistent structure with homepage
- **Background section**: Personal/academic background
- **Skills section**: What you're learning/good at
- **Goals section**: Course and career objectives
- **Interests section**: What drives your curiosity

## Success Criteria
- [ ] GitHub account created and configured
- [ ] Repository successfully created and cloned
- [ ] Lab 1-2 work successfully migrated to Git
- [ ] At least 3 meaningful commits made
- [ ] Both HTML files use proper semantic structure
- [ ] Consistent navigation structure across pages
- [ ] All HTML validates without errors
- [ ] Basic accessibility practices implemented
- [ ] Repository visible on GitHub with commit history

## Submission Instructions
1. **Ensure all work is committed and pushed** to GitHub
2. **Test your repository**:
   - Visit your repository on GitHub.com
   - Verify all files are present and up-to-date
   - Check that commit messages are meaningful
3. **Submit repository URL** to D2L assignment:
   - Copy your repository URL from GitHub
   - Paste into D2L submission: `https://github.com/yourusername/personal-website-foundation`

## Troubleshooting Tips
- **GitHub Desktop not syncing?** Check your internet connection and try "Fetch origin"
- **Files not showing in VS Code?** Make sure you opened the repository folder, not individual files
- **Commit button grayed out?** Make sure you've made changes and they're saved
- **Git seems overwhelming?** Focus on the basic cycle: Change → Save → Commit → Push

## Looking Ahead
This Git workflow will now be your standard process for all future labs. You'll enhance this same repository with CSS, JavaScript, and more advanced features. The investment in learning Git now pays dividends throughout the course!

## Git Workflow Summary
Remember this pattern for all future work:
1. **Make changes** to your files
2. **Save** your files (Cmd/Ctrl + S)
3. **Commit** with a meaningful message
4. **Push** to sync with GitHub
5. **Repeat** as you iterate and improve
