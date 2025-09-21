# Lab 01 – First HTML File & VS Code Workflow

> Delivery Mode: In-Class Activity (Foundational)  
> **📋 This is your complete lab guide for creating your first HTML file and setting up VS Code.**

Goal: Create your first semantic HTML document and establish an efficient VS Code development workflow.

## Learning Outcomes
- Set up a proper project structure for web development.
- Create semantic HTML documents with proper structure.
- Configure VS Code for efficient web development.
- Understand file organization and naming conventions.
- Practice professional file management for web projects.

## Prerequisites
- VS Code installed
- Basic understanding of file systems and folders

## Tasks

### 1. Project Setup
1. **Create a project folder** on your Desktop: `Lab01_YourLastName`
2. **Open this folder** in VS Code (`File > Open Folder`)
3. **Create the following file structure** inside your project folder:
   ```
   Lab01_YourLastName/
   ├── index.html          ← Create this file from scratch
   ├── css/                ← Create this folder (empty for now)
   └── images/             ← Create this folder (empty for now)
   ```

### 2. HTML Document Creation
1. Create `index.html` with proper HTML5 structure:
   - DOCTYPE declaration
   - `<html>` with lang attribute
   - Complete `<head>` section with meta tags
   - Semantic `<body>` structure

2. Include the following elements:
   - Page title reflecting your name/purpose
   - At least 3 levels of headings (h1, h2, h3)
   - 2-3 paragraphs of content
   - Basic document structure using semantic HTML5 elements

### 3. VS Code Workflow Optimization
1. Install and configure recommended extensions:
   - Live Server
   - HTML CSS Support
   - Auto Rename Tag
   - Bracket Pair Colorizer

2. Set up Live Server for live preview:
   - Right-click `index.html` → "Open with Live Server"
   - Test that changes appear automatically in browser

3. Practice VS Code shortcuts:
   - `Cmd/Ctrl + /` for commenting
   - `Cmd/Ctrl + D` for multi-cursor selection
   - `Alt + Shift + Down` for duplicating lines

### 4. File Organization Best Practices
1. **Implement proper naming conventions:**
   - Use lowercase letters only
   - Use hyphens for spaces (e.g., `about-me.html`)
   - No special characters or spaces in filenames
   - Descriptive but concise names

2. **Understand project structure:**
   - `index.html` is the main page (homepage)
   - `css/` folder will hold stylesheets (future labs)
   - `images/` folder will hold pictures and graphics
   - Keep files organized and logical

3. **Practice good file management:**
   - Save files frequently (`Cmd/Ctrl + S`)
   - Keep your project folder clean
   - Use meaningful names for everything

## Content Requirements

Your HTML document should include:
- **Header section**: Your name and a brief introduction
- **About section**: 2-3 paragraphs about yourself or your interests
- **Goals section**: What you hope to learn in this course
- **Contact section**: How to reach you (can be fictional for privacy)

## HTML Structure Template

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
        <!-- Navigation will go here later -->
    </header>
    
    <main>
        <section>
            <!-- Your content sections -->
        </section>
    </main>
    
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

## Success Criteria
- [ ] Project folder properly organized with correct structure
- [ ] Valid HTML5 document with proper semantic structure
- [ ] Live Server successfully displays your page
- [ ] All required content sections present and meaningful
- [ ] VS Code extensions installed and functional
- [ ] File naming conventions followed consistently
- [ ] HTML validates without errors (test with HTML validator)
- [ ] Project properly packaged for submission

## Submission Instructions
1. **Test your work:** Make sure your HTML displays correctly in Live Server
2. **Validate your HTML:** Use [W3C HTML Validator](https://validator.w3.org/) to check for errors
3. **Package for submission:**
   - Select your entire project folder (`Lab01_YourLastName`)
   - Create a ZIP file: `LastName_FirstName_Lab01.zip`
   - Ensure the ZIP contains your folder with index.html and other files
4. **Submit to D2L:** Upload your ZIP file to the Lab 01 assignment dropbox

## Validation & Testing
1. Test your page in Live Server
2. Validate HTML using [W3C HTML Validator](https://validator.w3.org/)
3. Check that page displays correctly
4. Verify proper file organization

## Troubleshooting Tips
- If Live Server doesn't work, check that you opened the folder (not just the file)
- Use VS Code's built-in terminal for file operations if needed
- Check HTML syntax if page doesn't display as expected
- Ensure proper indentation for code readability
- Ask questions in class if you get stuck - that's what we're here for!

## Next Steps
This HTML file and project structure will serve as the foundation for future labs where we'll add CSS styling, learn version control, and build more complex websites. Keep your project folder organized - you'll use it again!
