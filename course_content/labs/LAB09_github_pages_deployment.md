# Lab 09 – GitHub Pages Deployment & Portfolio Testing

> Delivery Mode: In-Class Tutorial ➜ Individual Deployment (Guided Practice)

Goal: Deploy your LAB08 CSS Grid portfolio to GitHub Pages and establish a live testing environment for continued development. This creates a foundation for testing accessibility, responsiveness, and design changes in subsequent labs.

## Learning Outcomes
- Deploy CSS Grid portfolio layouts from LAB08 to live web server
- Configure GitHub Pages for continuous portfolio development
- Establish workflow for testing responsive designs on real devices  
- Create professional web presence ready for Project 1 submission
- Build confidence with Git deployment workflow before project deadline

## Prerequisites  
- Completed LAB08 (CSS Grid Portfolio Layouts) with working grid systems
- Portfolio with header, about, skills, and projects sections
- GitHub account with repository already created
- **GitHub Desktop experience** from LAB03 (repository management, commits, push/pull)
- Basic familiarity with commit/push workflow

## 🚀 Getting Started: Building on Your GitHub Desktop Skills

### Quick Skills Review ✅
You've already learned GitHub Desktop basics in LAB03. Now we'll use those skills for **deployment**:
- ✅ **Repository management** - you know how to open your portfolio repo
- ✅ **Commit workflow** - you can stage changes and write commit messages  
- ✅ **Push to GitHub** - you can sync your local changes to GitHub.com
- 🆕 **New skill:** Deploy to live website using GitHub Pages

### ⏰ Time Estimate: 30-45 minutes
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
6. 🆕 **Deploy** using GitHub Pages (new step we'll learn)

### 🆘 Common Issues & Quick Fixes
**Problem:** "Repository not syncing in GitHub Desktop"
- **Solution:** Check internet connection, try "Fetch origin" button, or restart GitHub Desktop

**Problem:** "GitHub Pages not building"  
- **Solution:** Ensure `index.html` is in root directory (not in a subfolder), wait 5-10 minutes

**Problem:** "Site shows 404 error"
- **Solution:** Double-check repository name in URL, verify `index.html` filename (case-sensitive)

**Problem:** "CSS/Images not loading on live site"
- **Solution:** Check that all file paths are relative (`./style.css` not `/absolute/path/style.css`)

## 📋 Step-by-Step Deployment Guide

### Using GitHub Desktop (Building on LAB03 Skills)

Since you already know GitHub Desktop from LAB03, this will be familiar:

#### Step 1: Final Portfolio Commit
1. **Open GitHub Desktop** and select your portfolio repository
2. **Review your LAB08 changes:** Check "Changes" tab for any uncommitted work
3. **Commit final changes:**
   - Write message: "Complete LAB08 grid layouts - ready for deployment"
   - Click **"Commit to main"**
   - Click **"Push origin"** (same workflow as LAB03)

#### Step 2: Enable GitHub Pages (Web Interface)
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

### Command Line Alternative (For Students Comfortable with Terminal)

If you prefer command line:

```bash
# Navigate to your project directory
cd path/to/your/portfolio

# Check repository status  
git status

# Add all changes
git add .

# Commit changes
git commit -m "Deploy portfolio to GitHub Pages"

# Push to GitHub
git push origin main
```

## Tasks

### 1. Repository Preparation
1. **Clean Up Repository Structure:**
   ```
   your-repo/
   ├── index.html          (main page)
   ├── css/
   │   └── styles.css      (stylesheet)
   ├── images/             (if applicable)
   ├── README.md           (project documentation)
   └── .gitignore          (ignore unnecessary files)
   ```

2. **Verify File Organization:**
   - Ensure `index.html` is in root directory
   - Check all file paths and links are relative
   - Test local website functionality
   - Remove any development-only files

### 2. Sync Changes with GitHub Desktop
1. **Pre-Deployment Using GitHub Desktop:**
   - Open GitHub Desktop
   - Select your repository from the left sidebar
   - Review all changed files in the "Changes" tab
   - Write a meaningful commit message: "Prepare site for GitHub Pages deployment"
   - Click **"Commit to main"**
   - Click **"Push origin"** to upload changes to GitHub

2. **Repository Hygiene:**
   - Review commit history in GitHub Desktop (History tab)
   - Ensure no sensitive information is committed
   - Verify .gitignore is working properly (files should not appear in Changes)
   - Clean up any unnecessary files using your file manager

### 3. GitHub Pages Configuration
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

### 4. Custom Domain Setup (Optional but Recommended)
1. **Custom Domain Configuration:**
   - Purchase domain from registrar (if desired)
   - In GitHub Pages settings, add custom domain
   - Create CNAME file in repository root with domain name
   - Configure DNS settings with your registrar

2. **DNS Configuration Example:**
   ```
   # For apex domain (example.com):
   A Record: @ → 185.199.108.153
   A Record: @ → 185.199.109.153
   A Record: @ → 185.199.110.153
   A Record: @ → 185.199.111.153
   
   # For www subdomain:
   CNAME Record: www → username.github.io
   ```

### 5. Professional Documentation
1. **Enhanced README.md:**
   ```markdown
   # Personal Website
   
   A responsive personal website built with semantic HTML5 and modern CSS.
   
   ## Live Site
   🌐 [View Live Site](https://username.github.io/repository-name)
   
   ## Features
   - Responsive design
   - Semantic HTML5
   - Modern CSS with Flexbox/Grid
   - Accessibility compliant
   - Performance optimized
   
   ## Technologies Used
   - HTML5
   - CSS3
   - GitHub Pages
   
   ## Local Development
   1. Clone repository (or open in GitHub Desktop)
   2. Open `index.html` in browser or use Live Server in VS Code
   3. Edit files as needed
   4. Use GitHub Desktop to commit and push changes for automatic deployment
   
   ## Contact
   [Your contact information]
   ```

2. **Project Documentation:**
   - Document design decisions
   - List accessibility features implemented
   - Note browser compatibility
   - Include development workflow

### 6. Continuous Deployment Workflow
1. **Establish Development Workflow Using GitHub Desktop:**
   - Open GitHub Desktop and select your repository
   - **Sync latest changes:** Click "Fetch origin" (or "Pull origin" if changes exist)
   - Make your changes locally in VS Code or your preferred editor
   - **Review changes:** Check the "Changes" tab in GitHub Desktop
   - **Stage and commit:** Write descriptive commit message and click "Commit to main"
   - **Deploy:** Click "Push origin" to automatically deploy to GitHub Pages

2. **Testing Workflow:**
   - Test locally before committing (use VS Code Live Server)
   - Check mobile responsiveness in browser dev tools
   - Validate HTML/CSS using online validators
   - Test all links and functionality
   - Use GitHub Desktop to track your testing commits

## Deployment Checklist

### Pre-Deployment
- [ ] All files properly organized in repository
- [ ] index.html exists in root directory
- [ ] All internal links use relative paths
- [ ] Images and assets load correctly locally
- [ ] HTML validates without errors
- [ ] CSS validates without errors
- [ ] Site works across different browsers

### GitHub Pages Setup
- [ ] Repository is public (required for free GitHub Pages)
- [ ] GitHub Pages enabled in repository settings
- [ ] Source set to main branch, root folder
- [ ] Deployment successful (check Actions tab)
- [ ] Live site accessible at GitHub Pages URL

### Post-Deployment Testing
- [ ] All pages load correctly on live site
- [ ] All internal navigation works
- [ ] External links open properly
- [ ] Images and CSS assets load
- [ ] Mobile responsiveness maintained
- [ ] Site loads quickly (under 3 seconds)

### Documentation & Professionalism
- [ ] README.md updated with live site link
- [ ] Repository description added on GitHub.com
- [ ] Professional commit messages used (visible in GitHub Desktop history)
- [ ] Contact information current and professional

## Troubleshooting Common Issues

### Deployment Problems
- **Site not loading:** Check that index.html is in root directory
- **404 errors:** Verify all file paths are relative and case-sensitive
- **CSS not loading:** Check CSS file path in HTML link tag
- **Changes not appearing:** Allow up to 10 minutes for deployment

### Performance Issues
- **Slow loading:** Optimize images and minimize CSS
- **Large repository:** Use .gitignore to exclude unnecessary files (GitHub Desktop will show ignored files as grayed out)
- **Too many commits:** Consider the commit history in GitHub Desktop for cleaner organization

### Domain Issues
- **Custom domain not working:** Check DNS propagation (can take 24-48 hours)
- **HTTPS errors:** Ensure "Enforce HTTPS" is checked in GitHub Pages settings
- **CNAME conflicts:** Verify CNAME file contains only domain name

## Professional Presentation Tips

### Portfolio Quality
- Ensure site represents your best work
- Include contact information
- Add professional bio and photo
- Showcase technical skills learned
- Keep design clean and professional

### SEO and Discoverability
- Use descriptive page titles
- Add meta descriptions
- Include semantic HTML structure
- Use proper heading hierarchy
- Add alt text for images

## Success Criteria
- [ ] Website successfully deployed to GitHub Pages
- [ ] Live site accessible and fully functional
- [ ] All content displays correctly online
- [ ] Mobile responsive design works on live site
- [ ] Professional README.md with live site link
- [ ] Clean commit history with meaningful commit messages (review in GitHub Desktop)
- [ ] Site loads quickly and performs well
- [ ] Contact information is current and professional

## Testing Your Live Site
1. **Functionality Testing:**
   - Test all navigation links
   - Verify responsive behavior on different devices
   - Check loading speed and performance
   - Test in multiple browsers

2. **Professional Review:**
   - Review content for professionalism
   - Check spelling and grammar
   - Verify contact information accuracy
   - Ensure design is polished and complete

## Next Steps
Your website is now live and accessible to the world! You can share this URL on:
- Resume and LinkedIn profile
- Professional networking
- Academic applications
- Social media profiles

This deployment workflow will be used for all future projects, so master these steps for efficient development and deployment cycles.

## 🔧 Comprehensive Troubleshooting Guide

### Deployment Issues

**Issue: "Your site is ready to be published" but no URL appears**
- **Wait:** Initial deployment can take 5-10 minutes
- **Check:** Refresh the GitHub Pages settings page
- **Verify:** Ensure `index.html` is in root directory (not in a subfolder)

**Issue: "404 - File not found" error**
- **File naming:** Check that your main file is named exactly `index.html` (case-sensitive)
- **File location:** Ensure `index.html` is in the root directory of your repository
- **Branch:** Verify you're deploying from the correct branch (usually `main`)

**Issue: CSS or images not loading on live site (but work locally)**
- **Relative paths:** Change absolute paths (`/css/style.css`) to relative paths (`css/style.css`)
- **File names:** Check for typos in file names and paths
- **Case sensitivity:** GitHub Pages is case-sensitive - `Image.jpg` ≠ `image.jpg`

### GitHub Desktop Issues

**Issue: "Repository not found" in GitHub Desktop**
- **Re-clone:** Go to File → Clone Repository → find your repository
- **Add existing:** File → Add Local Repository → browse to your project folder

**Issue: "Push failed" or "Sync failed"**
- **Internet connection:** Check your network connection
- **GitHub authentication:** Sign out and sign back in to GitHub Desktop
- **Repository permissions:** Ensure you have write access to the repository

**Issue: Changes not showing in GitHub Desktop**
- **Refresh:** Close and reopen GitHub Desktop
- **File location:** Ensure you're editing files in the correct repository folder
- **File saving:** Make sure you saved your changes in VS Code or your editor

### Testing and Verification Issues

**Issue: "Site looks different on mobile devices"**
- **Viewport meta tag:** Ensure you have `<meta name="viewport" content="width=device-width, initial-scale=1.0">` in your HTML head
- **CSS testing:** Use browser dev tools to test responsive behavior
- **Real device testing:** Test on actual mobile devices, not just browser simulation

**Issue: "Some links don't work on live site"**
- **Relative links:** Use relative paths (`#about`, `./contact.html`) instead of absolute paths
- **File structure:** Verify linked files exist and paths are correct
- **Case sensitivity:** Check exact spelling and capitalization

### 🆘 Getting Help

**If you're still stuck:**
1. **Check GitHub Status:** Visit [https://www.githubstatus.com/](https://www.githubstatus.com/) for service issues
2. **Ask for help:** Bring your error messages and describe what you've tried
3. **GitHub Desktop logs:** Help → Show Logs in GitHub Desktop for detailed error information
4. **Browser console:** Press F12 → Console tab to see error messages on your live site

**Before asking for help, try these steps:**
1. Wait 10 minutes and refresh (deployment takes time)
2. Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
3. Try opening your site in an incognito/private browser window
4. Test your site URL in a different browser

## ✅ Final Checklist

Before moving to LAB10, ensure:
- [ ] **Live URL works** - you can access your portfolio at the GitHub Pages URL
- [ ] **All sections display** - About, Skills, Projects sections from LAB08 are visible
- [ ] **Responsive design works** - test on your phone or tablet
- [ ] **No broken links** - all navigation and internal links work
- [ ] **Images load** - all images appear correctly on the live site
- [ ] **GitHub Desktop connected** - you can make changes and push updates easily

**🎉 Congratulations!** Your portfolio is now live and ready for accessibility testing in LAB10!
