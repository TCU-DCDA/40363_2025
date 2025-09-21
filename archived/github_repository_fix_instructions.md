# Instructions to Fix GitHub Repository

## 🚨 IMPORTANT: Update Your Template Repository

Your current GitHub repository has pre-made files that conflict with your lab instructions. Here's how to fix it:

## Step 1: Clean Up the Repository
1. Go to: https://github.com/TCU-DCDA/lab01-first-html-structure-doc-rode
2. **Delete these files:**
   - `index.html` (students should create this)
   - `style.css` (not needed for Lab 1)
3. **Keep:**
   - `README.md` (but replace the content)

## Step 2: Replace README.md
1. Click on `README.md` → Edit (pencil icon)
2. **Delete all current content**
3. **Copy and paste** the content from `corrected_github_README.md` (created above)
4. **Commit changes** with message: "Align README with lab learning objectives"

## Step 3: Add .gitignore (Optional but Recommended)
1. Create new file: `.gitignore`
2. Add this content:
   ```
   .DS_Store
   Thumbs.db
   *.tmp
   ```
3. Commit with message: "Add gitignore for common system files"

## Step 4: Test the Setup
Create a test student repository to verify:
1. Repository should be mostly empty (just README and .gitignore)
2. README should guide file creation, not editing
3. Students should create `index.html` from scratch

## What This Accomplishes

### Before (Problematic):
- Students get pre-made HTML template
- Focus on editing rather than creating
- Mismatch with lab instructions
- Complex Git workflow for beginners

### After (Correct):
- Students start with empty repository  
- Focus on creating HTML from scratch
- Perfect alignment with lab instructions
- Simple Git workflow (just save their work)
- Proper preparation for Lab 2

## Impact on Future GitHub Classroom Assignments
Once you update the template repository, all future students who accept the GitHub Classroom link will get the corrected version that aligns with your lab instructions.
