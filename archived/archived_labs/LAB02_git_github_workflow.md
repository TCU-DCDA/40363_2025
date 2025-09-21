# Lab 02 – Git & GitHub Workflow

> Delivery Mode: In-Class Activity (Onboarding Checklist)

Goal: Initialize version control and publish your evolving site using GitHub Desktop.

## Prerequisites
- Download and install [GitHub Desktop](https://desktop.github.com/)
- Create a GitHub account
- Complete Lab 01 (First HTML File & VS Code Workflow) - you'll need HTML files to version control

## Tasks

### 1. Create Repository on GitHub
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"New"** button (green, top left)
3. Repository name: `about-site`
4. Set to **Public**
5. Check **"Add a README file"**
6. Click **"Create repository"**

### 2. Clone Repository with GitHub Desktop
1. On your new repository page, click the green **"Code"** button
2. Select **"Open with GitHub Desktop"**
3. Choose where to save the folder on your computer (Desktop is fine)
4. Click **"Clone"**

### 3. Add Your Website Files
1. Open the cloned `about-site` folder in your file manager
2. Copy your HTML files from Lab 01 (`index.html`, etc.) into this folder
3. Copy your `css/` folder (if you have one) into this folder  
4. Create a `.gitignore` file with this content:
   ```
   .DS_Store
   Thumbs.db
   ```

### 4. First Commit Using GitHub Desktop
1. Open GitHub Desktop
2. You should see your files listed under "Changes"
3. In the bottom left, write commit message: `Initial commit: base about page`
4. Click **"Commit to main"**
5. Click **"Publish branch"** to upload to GitHub

### 5. Make Updates and Commit Again
1. Make a small change to your website (e.g., edit a heading)
2. Save the file
3. Return to GitHub Desktop - you'll see the changes
4. Write a meaningful commit message (see rules below)
5. Click **"Commit to main"**
6. Click **"Push origin"** to sync with GitHub

### 6. View Your Work
1. Go to your repository on GitHub.com
2. View your commit history by clicking on the commits count
3. Verify your files are all uploaded

## Commit Message Rules
- Present tense
- Describe intent, not just file names 
- Examples: `Refine section grouping for proximity`, `Add contact information section`

## Success Criteria
- Repository accessible via GitHub URL
- ≥2 commits with distinct purposes
- Website files properly organized in repository

## Turn‑In
- Repository URL
- Screenshot of commit history from GitHub Desktop or GitHub.com

## Stretch
- Create a new branch called `experiment-contrast` in GitHub Desktop
- Make a color change to your CSS
- Commit the change to the branch
- Merge the branch back to main using GitHub Desktop
