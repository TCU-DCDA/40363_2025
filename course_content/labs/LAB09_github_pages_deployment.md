# Lab 09 – Project Migration & GitHub Pages Deployment

> Delivery Mode: In-Class Tutorial ➜ Individual Migration & Deployment (Guided Practice)

Goal: Migrate your completed project from the Sandbox folder to your portfolio root, then deploy to GitHub Pages to establish a live testing environment. This creates a professional web presence ready for Project 1 submission while building confidence with Git deployment workflow.

## Learning Outcomes
- Migrate completed projects from Sandbox to portfolio root directory
- Replace placeholder files with real portfolio content
- Deploy project portfolio to live web server using GitHub Pages
- Configure GitHub Pages for continuous portfolio development
- Establish workflow for testing responsive designs on real devices  
- Create professional web presence ready for project submission
- Build confidence with Git deployment workflow before project deadline

## Prerequisites  
- Completed project in your Sandbox folder with working `practice.html` file
- Portfolio repository with placeholder `index.html` and `about.html` files
- GitHub account with repository already created
- **GitHub Desktop experience** from LAB03 (repository management, commits, push/pull)
- Basic familiarity with commit/push workflow

## 🚀 Getting Started: Building on Your GitHub Desktop Skills

### Quick Skills Review ✅
You've already learned GitHub Desktop basics in LAB03. Now we'll use those skills for **project migration and deployment**:
- ✅ **Repository management** - you know how to open your portfolio repo
- ✅ **Commit workflow** - you can stage changes and write commit messages  
- ✅ **Push to GitHub** - you can sync your local changes to GitHub.com
- 🆕 **New skills:** Migrate projects from Sandbox + Deploy to live website using GitHub Pages

### ⏰ Time Estimate: 45-60 minutes
- **Project migration from Sandbox:** 20-25 minutes
- **Repository review and final commit:** 10 minutes
- **GitHub Pages setup:** 10 minutes  
- **Testing and verification:** 15-25 minutes

### 🆘 Quick Refresher: GitHub Desktop Workflow
If you need a reminder of the basic workflow from LAB03:
1. **Open GitHub Desktop** → Select your portfolio repository
2. **Make changes** to files in VS Code
3. **Review changes** in GitHub Desktop "Changes" tab
4. **Commit** with descriptive message
5. **Push origin** to sync to GitHub.com
6. 🆕 **Migrate and Deploy** (new steps we'll learn)

### 🆘 Common Issues & Quick Fixes
**Problem:** "Repository not syncing in GitHub Desktop"
- **Solution:** Check internet connection, try "Fetch origin" button, or restart GitHub Desktop

**Problem:** "GitHub Pages not building"  
- **Solution:** Ensure `index.html` is in root directory (not in a subfolder), wait 5-10 minutes

**Problem:** "Site shows 404 error"
- **Solution:** Double-check repository name in URL, verify `index.html` filename (case-sensitive)

**Problem:** "CSS/Images not loading on live site"
- **Solution:** Check that all file paths are relative (`./style.css` not `/absolute/path/style.css`)

## 📋 Step-by-Step Migration & Deployment Guide

### Phase 1: Project Migration (Prepare Your Portfolio)

#### Understanding Your Current Setup
Your repository currently has:
- **Placeholder files**: `index.html` and `about.html` in the root (these are outdated templates)
- **Your real project**: Completed work in the `Sandbox/` folder with `practice.html`
- **Goal**: Move your real project to replace the placeholder files

#### Step 1: Backup Your Current Work
1. **Open GitHub Desktop** and select your portfolio repository
2. **Check for any uncommitted changes** in the "Changes" tab
3. **Commit any current work:**
   - Write message: "Backup before project migration"
   - Click **"Commit to main"**
   - Click **"Push origin"** 

#### Step 2: Handle Placeholder Files
1. **Open your repository in VS Code**
2. **Delete the placeholder files**:
   - Right-click `index.html` in the root and delete it
   - Right-click `about.html` in the root and delete it
3. **Note**: These were just template files - your real portfolio content will replace them

#### Step 3: Move Your Project from Sandbox
1. **Navigate to your Sandbox folder** in VS Code's Explorer panel
2. **Locate your completed project folder** (e.g., `project-2`, `personal-website`, etc.)
3. **Right-click the project folder** and select "Cut" (or Cmd+X on Mac)
4. **Navigate to your repository root** (same level as the `images/` folder and `Sandbox/`)
5. **Right-click in the root directory** and select "Paste" (or Cmd+V on Mac)

#### Step 4: Rename Your Main File
1. **Navigate into your moved project folder**
2. **Right-click on `practice.html`** and select "Rename"
3. **Change the name to `index.html`**
4. **Confirm the rename**

#### Step 5: Choose Your Portfolio Structure
You have two options:

**Option A: Single Project Portfolio** (Simpler)
- Your project's `index.html` becomes your main portfolio page
- Works well if showcasing one main project

**Option B: Multi-Project Portfolio** (For multiple projects)
- Create a new `index.html` in the root as a portfolio landing page
- Link to individual project folders
- Example: Root `index.html` → links to `project-1/`, `project-2/`, etc.

#### Step 6: Update File Paths (If Needed)
1. **Open your project's `index.html`**
2. **Check all internal links** (CSS files, images, other HTML pages)
3. **Update any broken paths** - file locations may have changed
4. **Test links to images** - they should still work if using relative paths

#### Step 7: Commit Your Migration
1. **Return to GitHub Desktop**
2. **Review all changes** in the "Changes" tab
3. **Write commit message**: "Migrate [project-name] from Sandbox to portfolio root"
4. **Click "Commit to main"**
5. **Click "Push origin"**

### Phase 2: GitHub Pages Deployment

### Phase 2: GitHub Pages Deployment

#### Using GitHub Desktop (Building on LAB03 Skills)

Since you already know GitHub Desktop from LAB03, this will be familiar:

#### Step 1: Final Portfolio Review
1. **Open GitHub Desktop** and select your portfolio repository
2. **Verify your migration:** Check that your project files are now in the root
3. **Test locally:** Open your `index.html` file to ensure everything works
4. **Make any final adjustments** if needed

#### Step 2: Final Commit Before Deployment
1. **Review any final changes** in GitHub Desktop's "Changes" tab
2. **Commit final changes:**
   - Write message: "Ready for deployment - project migrated to root"
   - Click **"Commit to main"**
   - Click **"Push origin"**

#### Step 3: Enable GitHub Pages (Web Interface)
1. **Go to GitHub.com** and sign in
2. **Navigate to your repository** 
3. **Click "Settings" tab** (should be at the top of your repository)
4. **Scroll down to "Pages"** in the left sidebar menu
5. **Under "Source"** select **"Deploy from a branch"**
6. **Select "main" branch** and **"/ (root)"** folder
7. **Click "Save"**

#### Step 3: Get Your Live URL
1. **Wait 2-3 minutes** for deployment to complete
2. **Refresh the GitHub Pages settings page**
3. **Copy your live URL** - it will look like: `https://yourusername.github.io/repository-name`
4. **Bookmark this URL** - you'll use it for testing in future labs

### Alternative: Using VS Code (If you prefer VS Code over GitHub Desktop)

If you're comfortable with VS Code's built-in Git features:

1. **Open your portfolio folder in VS Code**
2. **Save any changes** you've made to your files
3. **Click the Source Control icon** (looks like a branch) in the left sidebar
4. **Review your changes** in the Source Control panel
5. **Type a commit message** like "Ready for deployment"
6. **Click the checkmark** to commit
7. **Click "Sync Changes"** to push to GitHub

## Tasks

### 1. Project Migration Preparation
1. **Check Your Sandbox Project:**
   ```
   Sandbox/your-project/
   ├── practice.html       (your main project file)
   ├── css/
   │   └── styles.css      (your stylesheet)
   └── images/             (your images, if any)
   ```

2. **Verify Project Completeness:**
   - Make sure `practice.html` opens and displays correctly
   - Check that all CSS styling appears properly
   - Verify all images load correctly
   - Test that your project represents your best work

### 2. Execute Migration Process
1. **Backup Current Work:**
   - Open GitHub Desktop
   - Commit any uncommitted changes with message "Pre-migration backup"
   - Push to GitHub

2. **Clean Up Root Directory:**
   - Delete placeholder `index.html` and `about.html` from root
   - These are template files that will be replaced

3. **Move Project to Root:**
   - Cut your project folder from Sandbox
   - Paste in repository root
   - Rename `practice.html` to `index.html`

### 3. Post-Migration File Check
1. **Verify New Structure:**
   ```
   your-repo/
   ├── your-project-folder/
   │   ├── index.html      (renamed from practice.html)
   │   ├── css/
   │   │   └── styles.css
   │   └── images/
   └── Sandbox/            (original location, can be cleaned later)
   ```

2. **Test Migrated Project:**
   - Open the new `index.html` location in browser
   - Verify all styling and functionality works
   - Check that file paths are still correct

### 4. Commit Migration Changes
1. **Review Migration in GitHub Desktop:**
   - Open GitHub Desktop
   - Select your repository from the left sidebar
   - Review all changed files in the "Changes" tab
   - Verify your project files are now in the root location

2. **Commit Migration:**
   - Write meaningful commit message: "Migrate [project-name] from Sandbox to root for deployment"
   - Click **"Commit to main"**
   - Click **"Push origin"** to upload changes to GitHub

### 5. GitHub Pages Configuration
1. **Enable GitHub Pages:**
   - Navigate to repository on GitHub.com
   - Go to Settings tab
   - Scroll to "Pages" section in left sidebar
   - Configure source: Deploy from main branch
   - Select root folder (/) as source

2. **Verify Deployment:**
   - Note the GitHub Pages URL (username.github.io/repository-name)
   - Wait for initial deployment (can take several minutes)
   - Test deployed site in browser
   - Check all links and resources load correctly

### 6. Test Your Live Website
1. **Basic Testing:**
   - Open your GitHub Pages URL in a web browser
   - Check that your migrated project displays correctly
   - Click on navigation links to test they work
   - View the site on your phone to check mobile display

2. **Common Things to Check:**
   - Does your CSS styling appear correctly?
   - Do all images load properly?
   - Are there any broken links or missing content?
   - Does the layout look good on different screen sizes?

### 7. Update Your README (Optional)
If you want to make your README look nicer, you can update it with:

```markdown
# My Portfolio Website

This is my personal portfolio website created for WRIT40363.

## Live Site
🌐 [View My Live Site](https://yourusername.github.io/repository-name)

## What I Built
- Complete project migrated from development Sandbox
- Professional portfolio ready for deployment
- Responsive design for mobile and desktop

## Contact
[Your email address]
```

### 8. Making Future Updates
1. **How to Update Your Live Site:**
   - Make changes to your files in VS Code
   - Open GitHub Desktop and review your changes
   - Write a commit message describing what you changed
   - Click "Commit to main" then "Push origin"
   - Wait a few minutes and your live site will update automatically!

2. **Before You Push Changes:**
   - Test your changes by opening `index.html` locally in your browser
   - Check that everything looks good
   - Make sure you didn't break anything

## Quick Checklist

### Migration Phase
- [ ] Sandbox project is complete and tested
- [ ] Placeholder `index.html` and `about.html` deleted from root
- [ ] Project folder moved from Sandbox to repository root
- [ ] `practice.html` renamed to `index.html`
- [ ] All file paths and links still work correctly
- [ ] Migration committed and pushed to GitHub

### Deployment Phase
### Deployment Phase
- [ ] `index.html` is in your project folder (now in repository root area)
- [ ] Your CSS file path in your HTML is correct after migration
- [ ] Your website works when you open `index.html` locally
- [ ] All your images show up correctly after the move

### GitHub Pages Setup
- [ ] GitHub Pages is enabled in your repository settings
- [ ] You selected "main branch" and "/ (root)" as the source
- [ ] You can access your live site at the GitHub Pages URL

### After Deployment
- [ ] Your live site shows your complete migrated project
- [ ] All your styling and images appear correctly
- [ ] The site looks good on your phone
- [ ] All your navigation links work

## Troubleshooting Common Issues

### Migration Issues
- **"My CSS stopped working after migration":** Check that your CSS file path in HTML is still correct relative to the new location
- **"Images aren't loading":** Verify image paths are still correct after moving the project folder
- **"Project looks different":** Test locally first - open your new `index.html` location in browser

### Deployment Issues
### Deployment Issues
- **"404 - File not found":** Make sure your main file is named exactly `index.html` (all lowercase) and is accessible from the root
- **Site shows wrong content:** Wait 5-10 minutes - deployment takes time
- **CSS styling missing:** Check that your CSS file path in your HTML is correct after migration

### If Something Looks Wrong
- **Images don't show:** Make sure image file names match exactly and paths are correct after migration
- **Layout looks broken:** Test your migrated project locally first by opening `index.html` in your browser
- **Changes don't appear:** Try refreshing the page, or wait a few more minutes

## Making Your Portfolio Look Good

### Final Touches
- Make sure your site represents your best project work
- Include your contact information (email is fine)
- Check that all your content is spelled correctly
- Make sure your design looks clean and organized
- Verify your project showcases the skills you've learned

## Success Criteria
- [ ] Project successfully migrated from Sandbox to portfolio root
- [ ] Website successfully deployed to GitHub Pages
- [ ] Live site accessible and shows your complete project
- [ ] All project sections and features display correctly
- [ ] CSS styling appears correctly on the live site
- [ ] Site works on both desktop and mobile
- [ ] All images load properly
- [ ] Navigation links work correctly
- [ ] Portfolio represents your best work and is ready for submission

## Testing Your Live Site
1. **Basic Testing:**
   - Click all your navigation links to make sure they work
   - View your site on your phone to check mobile layout
   - Make sure all your images load correctly
   - Check that your CSS styling appears properly

2. **Final Review:**
   - Read through your content to check for spelling errors
   - Make sure your contact information is correct
   - Verify that your site looks professional and complete
   - Confirm your project represents your best work

## Next Steps
Congratulations! Your project is now live and accessible to anyone on the internet. You can:
- Share your URL with friends and family
- Add the link to your resume or LinkedIn profile
- Use this same process to update your site with new projects
- Submit this URL for your project evaluation

Remember: whenever you make changes to your files and push them through GitHub Desktop, your live site will automatically update!

## 🆘 Need Help?

### Common Problems and Quick Fixes

**"My project didn't migrate correctly"**
- Check that you moved the entire project folder, not just individual files
- Verify that `practice.html` was renamed to `index.html`
- Make sure the project folder is in the root, not still in Sandbox

**"My site isn't loading at all"**
- Wait 10 minutes and try again (deployment takes time)
- Make sure your file is named exactly `index.html` (all lowercase)
- Check that `index.html` is accessible from your repository root

**"My CSS isn't working on the live site"**
- Check that your CSS file path in your HTML is correct after migration
- Make sure you spelled your CSS file name correctly
- Try refreshing the page or clearing your browser cache

**"My images aren't showing up"**
- Check that your image file names match exactly (including capitalization)
- Make sure your image paths in your HTML are correct after the migration
- Verify your images are actually in your repository

**"GitHub Desktop isn't working"**
- Check your internet connection
- Try closing and reopening GitHub Desktop
- Make sure you saved your files in VS Code before trying to commit

### When to Ask for Help
If you've tried the above solutions and waited at least 10 minutes, feel free to ask for help! Bring:
- Your GitHub Pages URL
- A description of what's not working (migration or deployment issue)
- Any error messages you see
- Screenshots of your file structure if migration seems wrong

## ✅ Final Checklist

Before you're done with this lab:
- [ ] **Your project is migrated** - moved from Sandbox to root and `practice.html` renamed to `index.html`
- [ ] **Your site loads** - you can visit your GitHub Pages URL and see your portfolio
- [ ] **All your project content shows up** - your complete project displays correctly
- [ ] **It works on mobile** - check your site on your phone
- [ ] **Links work** - all your navigation links take you to the right places
- [ ] **Images appear** - all your images load correctly
- [ ] **You can make updates** - you know how to use GitHub Desktop to push changes
- [ ] **Ready for submission** - your portfolio represents your best work

**🎉 Congratulations!** Your project portfolio is now live on the internet and ready for evaluation!
