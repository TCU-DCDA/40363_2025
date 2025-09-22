# Project Migration Guide: Moving from Sandbox to Portfolio Root

## Overview
This guide helps you move your completed projects from the `Sandbox` folder to your main `writ40363-portfolio` directory, making them part of your live portfolio website.

## Important Note About Root Files
**The `index.html` and `about.html` files currently in your repository root are placeholder/template files that should be replaced.** These are outdated and not part of your actual portfolio. When you migrate your first project, you'll either overwrite these files or delete them in favor of your real project content.

## What You'll Accomplish
- Move your project from `Sandbox/your-project-folder/` to `your-project-folder/` in the root
- Rename `practice.html` to `index.html` to make it the project's landing page
- Replace or delete the placeholder `index.html` and `about.html` files in the root
- Create proper navigation between your real projects
- Test that everything works correctly

## Prerequisites
- Your project should be completed and tested in the Sandbox folder
- You should have GitHub Desktop installed (recommended) or VS Code's built-in Git features
- Your project should have a `practice.html` file that serves as the main page
- No command line experience required!

---

## Method 1: Manual Migration Using VS Code

### Step 1: Prepare Your Workspace
1. **Open your portfolio repository** in VS Code
2. **Identify placeholder files**: The current `index.html` and `about.html` in your root are template files that should be replaced
3. **Create a backup** by saving your current work:
   - **Using GitHub Desktop**: Open GitHub Desktop, review any changes, add a commit message like "Backup before project migration", click "Commit to main", then click "Push origin"
   - **Using VS Code**: Go to the Source Control panel (Ctrl/Cmd+Shift+G), stage all changes with the "+" button, type a commit message, click the checkmark to commit, then click the sync button

### Step 2: Handle Placeholder Files
1. **Delete or rename the old files**:
   - Right-click `index.html` in the root and delete it (or rename to `old-index.html`)
   - Right-click `about.html` in the root and delete it (or rename to `old-about.html`)
2. **These were just placeholder files** - your real portfolio content will replace them

### Step 3: Move the Project Folder
1. **Navigate to your Sandbox folder** in VS Code's Explorer panel
2. **Locate your completed project folder** (e.g., `project-2`, `personal-website`, etc.)
3. **Right-click the project folder** and select "Cut" (or Cmd+X on Mac)
4. **Navigate to your repository root** (same level as the `images/` folder and `Sandbox/`)
5. **Right-click in the root directory** and select "Paste" (or Cmd+V on Mac)

### Step 4: Rename the Main File
1. **Navigate into your moved project folder**
2. **Right-click on `practice.html`** and select "Rename"
3. **Change the name to `index.html`**
4. **Confirm the rename**

### Step 5: Create Your Main Portfolio Structure
Now you have two options for organizing your portfolio:

**Option A: Single Project Portfolio**
- Your project's `index.html` becomes your main portfolio page
- This works well if you're showcasing one main project

**Option B: Multi-Project Portfolio** 
- Create a new `index.html` in the root that serves as a portfolio landing page
- This `index.html` should link to your individual project folders
- Example structure: Root `index.html` → links to `project-1/`, `project-2/`, etc.

### Step 6: Update Internal Links
1. **Open the newly renamed `index.html`** in your project folder
2. **Check all internal links** (links to CSS files, images, other HTML pages)
3. **Update any broken paths** - since you're now in the root, paths may need adjustment
4. **Test links to images in the `images/` folder** - they should still work if using relative paths

### Step 7: Update Portfolio Navigation (Multi-Project Option)
If you chose Option B above and want multiple projects:
1. **Create a new `index.html`** in the repository root as your main portfolio landing page
2. **Add navigation to your projects**:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Your Name - Portfolio</title>
   </head>
   <body>
       <h1>Welcome to My Portfolio</h1>
       <nav>
           <a href="your-project-folder/">Project Name</a>
           <!-- Add more project links as you create them -->
       </nav>
   </body>
   </html>
   ```

### Step 8: Update Project Navigation
1. **Open your project's `index.html`**
2. **Add navigation back to your main portfolio** (if using multi-project structure):
   ```html
   <nav>
     <a href="../">← Back to Portfolio</a>
   </nav>
   ```
3. **For single-project portfolios**, ensure good internal navigation within your project

### Step 9: Test Everything
1. **Use VS Code's Live Server extension** to preview your site
2. **Test navigation** from main portfolio to project (if using multi-project structure)
3. **Test navigation** from project back to portfolio (if applicable)
4. **Verify all images and CSS files load correctly**
5. **Check responsive design on different screen sizes**

### Step 10: Commit and Deploy
1. **Save and commit your changes**:
   - **Using GitHub Desktop**: Open GitHub Desktop, review the changes, write a descriptive commit message like "Migrate [project-name] from Sandbox to portfolio root", click "Commit to main", then "Push origin"
   - **Using VS Code**: Go to Source Control panel (Ctrl/Cmd+Shift+G), stage changes with "+" buttons, write your commit message, click the checkmark, then sync
2. **Verify your live site** at `https://yourusername.github.io/writ40363-portfolio/`

---

## Method 2: Using GitHub Desktop (Alternative Workflow)

### For Students Who Prefer GitHub Desktop's Visual Interface

### Step 1: Prepare Your Files
1. **Open your portfolio repository** in VS Code
2. **Delete the placeholder files**:
   - Right-click `index.html` in the root and delete it
   - Right-click `about.html` in the root and delete it
3. **Keep VS Code open** for the next steps

### Step 2: Move Your Project
1. **Use VS Code's Explorer panel** to drag and drop your project folder from Sandbox to the root
2. **Or use your computer's file manager**:
   - Open Finder (Mac) or File Explorer (Windows)
   - Navigate to your repository folder
   - Cut the project folder from Sandbox
   - Paste it in the root directory

### Step 3: Rename and Organize
1. **In VS Code, right-click `practice.html`** in your project folder
2. **Select "Rename"** and change it to `index.html`
3. **Create portfolio structure** (choose one option from Method 1)

### Step 4: Commit with GitHub Desktop
1. **Open GitHub Desktop**
2. **Review all the changes** in the left panel
3. **Write a commit message**: "Migrate [project-name] from Sandbox to portfolio root"
4. **Click "Commit to main"**
5. **Click "Push origin"** to deploy your changes
6. **Test your live site** at your GitHub Pages URL

---

## Troubleshooting Common Issues

### Problem: Images Not Loading
**Solution:** Check image paths in your CSS and HTML
- If images were in `Sandbox/project/images/`, they should now be in `project/images/`
- Update paths from `images/photo.jpg` to `./images/photo.jpg`

### Problem: CSS Not Applied
**Solution:** Verify CSS file paths
- Check `<link>` tags in your HTML
- Ensure paths are relative to the new location

### Problem: Navigation Loops
**Solution:** Review all navigation links
- Main portfolio should link to `project-folder/`
- Project should link back to `../` or `../index.html`

### Problem: GitHub Pages Not Updating
**Solution:** Force refresh and check deployment
- Clear browser cache (Ctrl/Cmd+Shift+R)
- Check GitHub repository > Settings > Pages to verify deployment is enabled
- Make sure your latest changes are pushed (check GitHub Desktop or VS Code sync status)
- Wait a few minutes - GitHub Pages can take time to update

---

## File Structure After Migration

### Before Migration:
```
writ40363-portfolio/
├── index.html (placeholder - to be deleted/replaced)
├── about.html (placeholder - to be deleted/replaced)
├── images/
└── Sandbox/
    └── my-project/
        ├── practice.html
        ├── style.css
        └── images/
```

### After Migration (Option A - Single Project):
```
writ40363-portfolio/
├── images/
├── my-project/
│   ├── index.html (renamed from practice.html, serves as main page)
│   ├── style.css
│   └── images/
└── Sandbox/ (can be cleaned up later)
```

### After Migration (Option B - Multi-Project Portfolio):
```
writ40363-portfolio/
├── index.html (new portfolio landing page)
├── images/
├── my-project/
│   ├── index.html (renamed from practice.html)
│   ├── style.css
│   └── images/
└── Sandbox/ (can be cleaned up later)
```

---

## Quality Checklist

Before considering your migration complete, verify:

- [ ] Project folder is in the repository root
- [ ] `practice.html` is renamed to `index.html`
- [ ] Main portfolio links to the project
- [ ] Project navigation links back to portfolio
- [ ] All images load correctly
- [ ] CSS styling applies properly
- [ ] Site works on GitHub Pages
- [ ] Mobile responsive design is maintained
- [ ] All internal project links work
- [ ] No broken links anywhere

---

## Best Practices

1. **Test Locally First**: Always use VS Code's Live Server extension to test before pushing
2. **Commit Frequently**: Use GitHub Desktop or VS Code to make small commits for each major step
3. **Keep Backups**: Don't delete from Sandbox until everything works
4. **Use Descriptive Commits**: Write clear commit messages in GitHub Desktop - future you will thank you
5. **Check Responsive Design**: Test on different screen sizes using browser developer tools
6. **Validate HTML**: Use VS Code extensions or online validators

---

## Need Help?

If you encounter issues:
1. **Check the browser console** for error messages (F12 > Console tab)
2. **Use GitHub Desktop or VS Code's Source Control panel** to see what changed
3. **Use VS Code's Live Server extension** to test changes immediately
4. **Review this guide step-by-step** to ensure you didn't miss anything
5. **Consult with classmates** who have completed the migration
6. **Visit office hours** if you're stuck

Remember: This process gets easier with practice, and you're building valuable workflow skills for web development using industry-standard tools!