# Slide Deck Naming Convention

## Format: `##_descriptive_content_name.html`

### Components:
- **Sequential Number (##):** Two-digit number indicating course progression order
- **Underscore Separator (_):** For readability and URL compatibility
- **Descriptive Name:** Clear indication of content focus
- **File Extension (.html):** Interactive HTML presentation format

## Course Progression Mapping

### **Foundation Concepts (Weeks 1-2)**
- `01_how_the_web_works.html` ✅ **ACTIVE**
- `02_introduction_to_web_development.html` ✅ **ACTIVE**

### **HTML Fundamentals (Weeks 3-4)**
- `03_html_fundamentals.html` ✅ **ACTIVE**
- `04_html_structure_and_semantics.html` ✅ **ACTIVE**

### **CSS Styling (Weeks 5-6)**
- `05_css_styling_basics.html` ✅ **ACTIVE**
- `06_css_typography_and_design.html` ✅ **ACTIVE**

### **Layout Systems (Weeks 7-8)**
- `07_responsive_layout_systems.html` 📋 **PLANNED**
- `08_flexbox_and_grid_layouts.html` 📋 **PLANNED**

### **Deployment & Polish (Weeks 9-10)**
- `09_deployment_and_hosting.html` 📋 **PLANNED**
- `10_accessibility_and_performance.html` 📋 **PLANNED**

### **JavaScript Introduction (Weeks 11-12)**
- `07_javascript_fundamentals.html` ✅ **ACTIVE**
- `08_functions_and_dom_manipulation.html` ✅ **ACTIVE**

### **Interactive Programming (Weeks 13-14)**
- `09_arrays_objects_and_data.html` ✅ **ACTIVE**
- `10_forms_and_local_storage.html` ✅ **ACTIVE**

### **Project Introductions**
- `project1_portfolio_introduction.html` 📋 **PLANNED**
- `project2_favorites_tracker_introduction.html` 📋 **PLANNED**
- `project3_dashboard_introduction.html` 📋 **PLANNED**

## Benefits of This System

### **For Course Organization:**
- **Clear sequence** - Presentations sort naturally by number
- **Content identification** - Descriptive names show topic at a glance
- **Scalable system** - Easy to add new presentations in logical order
- **Lab alignment** - Numbers correspond to lab sequence

### **For Textbook Development:**
- **Chapter numbering** matches presentation numbering
- **Consistent structure** across all course materials
- **Easy cross-referencing** between presentations and written content
- **Professional organization** for publication

### **For Instructors:**
- **Logical progression** - Know exactly what comes next
- **Preparation guidance** - Content names indicate scope
- **Flexible use** - Can present individually or in sequence
- **Easy updates** - Clear file identification for maintenance

## Implementation Rules

### **Numbering:**
- Start with `01` (not `1`) for consistent sorting
- Sequential order based on course progression
- Leave gaps (05, 10, 15) for future additions if needed

### **Naming:**
- Use underscores instead of spaces or hyphens
- Keep names descriptive but concise
- Avoid special characters or capitals
- Match content focus, not just lab numbers

### **Examples:**
- ✅ `03_html_fundamentals.html`
- ✅ `07_responsive_layout_systems.html`
- ❌ `HTML-Basics.html`
- ❌ `3_lab_three.html`
- ❌ `css stuff.html`

## Archive Handling

### **Deprecated Files:**
- Move to `archived/` subdirectory
- Maintain original filename for reference
- Document reason for archival in README
- Keep for potential future reference

### **Version Control:**
- Original filenames preserved in git history
- Clear commit messages documenting renames
- README updated to reflect current structure

## Future Expansion

This naming system allows for:
- **Easy insertion** of new presentations
- **Content reorganization** without breaking references
- **Multiple versions** (e.g., `03a_html_basics.html`, `03b_html_advanced.html`)
- **Special topics** (e.g., `15_advanced_javascript_patterns.html`)

**Established:** September 2024
**Status:** Active convention for all new slide deck development