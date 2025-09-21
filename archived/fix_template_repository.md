# Fix for lab01-first-html-template Repository

## The Problem
The repository name suggests it's a "template" but your pedagogy requires students to **create from scratch**, not edit templates.

## Solution: Make it an Empty Starter Repository

### Files to REMOVE from the repository:
- `index.html` (students should create this)
- `style.css` (not needed for Lab 1)
- Current complex README.md

### Files to KEEP/ADD:
- Simple README.md (guiding creation, not editing)
- .gitignore (for system files)

---

## Updated README.md for the Repository

Replace the current README.md with this content:

```markdown
# LAB01 – First HTML File

**📋 Complete instructions**: Check D2L for the full lab guide (`LAB01_first_html_vs_code.md`) with detailed steps and learning objectives.

## What You'll Learn
- Create your first HTML file from scratch
- Set up a proper project structure  
- Use VS Code for web development
- Understand basic HTML document structure
- Save your work with Git

## Getting Started
1. **This repository is intentionally empty** - you'll create the files!
2. **Clone this repository** to your computer using GitHub Desktop or VS Code
3. **Follow the complete lab instructions** in D2L 
4. **Create your HTML files** in this folder as instructed

## What You'll Create During the Lab
- `index.html` - Your main webpage (you'll build this from scratch!)
- `css/` folder - For future styling 
- `images/` folder - For future images

## Basic HTML Structure Reminder
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Introduction</title>
</head>
<body>
    <header>
        <!-- Your header content -->
    </header>
    
    <main>
        <section>
            <!-- Your main content -->
        </section>
    </main>
    
    <footer>
        <!-- Your footer content -->
    </footer>
</body>
</html>
```

## Saving Your Work
1. Create your HTML file
2. Save frequently (Cmd/Ctrl + S)
3. Use VS Code's Live Server to preview
4. When ready: Source Control → type commit message → "Commit & Push"

## Need Help?
- **Full instructions**: Check D2L for complete lab guide
- **Stuck on HTML?**: Ask in class or office hours
- **Git questions?**: We'll cover more in Lab 2

---
*This repository starts empty so you can learn by creating. Building from scratch builds understanding!*
```

---

## .gitignore file to add:

```
# System files
.DS_Store
Thumbs.db

# Temporary files  
*.tmp
*.temp

# Editor files
.vscode/settings.json
```

---

## Repository Cleanup Steps:

1. **Go to**: https://github.com/TCU-DCDA/lab01-first-html-template
2. **Delete these files**:
   - `index.html` 
   - `style.css`
3. **Replace README.md** with the content above
4. **Add .gitignore** with the content above
5. **Commit changes**: "Convert from template to empty starter repo"

## Result:
- Students get an empty repository that guides creation
- Perfect alignment with your lab instructions  
- No more confusion between editing vs. creating
- Clear pedagogical purpose: learn by building
