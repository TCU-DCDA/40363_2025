# Project 3: Personal Dashboard Starter Template

This is the starter template for Project 3 - Personal Data Dashboard. This template provides the foundational structure, styling, and JavaScript architecture for building a multi-widget dashboard application.

## 📁 Project Structure

```
project3-starter/
├── index.html              # Main dashboard page
├── css/
│   ├── styles.css          # Core styles and layout
│   ├── themes.css          # Light/dark theme system
│   └── widgets.css         # Widget-specific styles
├── js/
│   ├── app.js              # Main application controller
│   ├── utils/
│   │   ├── fetch-helper.js # Utilities for loading JSON data
│   │   └── theme-manager.js # Theme switching functionality
│   └── widgets/
│       ├── weather.js      # Weather widget (complete example)
│       ├── quotes.js       # Quotes widget (to be completed)
│       ├── tasks.js        # Tasks widget (to be completed)
│       └── timer.js        # Timer widget (to be completed)
├── data/
│   ├── weather.json        # Sample weather data
│   └── quotes.json         # Sample quotes data
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Basic understanding of HTML, CSS, and JavaScript
- Completed Project 2 (Local Favorites Tracker)
- Code editor (VS Code recommended)
- Live Server extension for testing

### Setup Instructions
1. **Copy this starter template** to your project folder
2. **Open the project** in VS Code
3. **Start Live Server** to view the dashboard
4. **Open browser developer tools** to monitor console messages

### Initial Test
- Open `index.html` in Live Server
- You should see a dashboard with 4 widget sections
- The weather widget should display sample data
- Theme toggle should work between light/dark modes
- Other widgets will show placeholder content (to be implemented)

## 📚 Learning Path

### Sessions 1-2: Understanding fetch() and JSON
**Your task:** Study the weather widget implementation
- Open `js/widgets/weather.js` and examine the code
- Look at `data/weather.json` to understand the data structure
- Modify the weather data and see changes on the dashboard
- Experiment with the `fetch-helper.js` utility functions

**Key concepts to understand:**
- How `fetch()` loads JSON data from files
- Promise handling with `.then()` and `async/await`
- Error handling for missing or invalid data
- JSON data structure and parsing

### Sessions 3-4: Implementing the Quotes Widget
**Your task:** Complete the quotes widget implementation
- Open `js/widgets/quotes.js` (you'll need to create this)
- Use `data/quotes.json` as your data source
- Implement category filtering and random quote selection
- Add error handling and loading states

**Features to implement:**
- Load quotes from JSON file
- Display random quote from selected category
- Category dropdown functionality
- "New Quote" button to show different quote
- Error handling for missing data

### Sessions 5-6: Building the Tasks Widget
**Your task:** Create a task management widget
- Implement `js/widgets/tasks.js`
- Combine localStorage (from Project 2) with dashboard architecture
- Create add, delete, and complete task functionality
- Add task statistics display

**Features to implement:**
- Add new tasks via form input
- Mark tasks as complete/incomplete
- Delete tasks with confirmation
- Show task statistics (total, completed)
- Persist tasks in localStorage

### Sessions 7-8: Study Timer and Final Polish
**Your task:** Complete the timer widget and add final touches
- Implement `js/widgets/timer.js` with Pomodoro functionality
- Add theme customization and widget management
- Implement data export/import features
- Polish UI and add animations

**Features to implement:**
- Countdown timer with start/pause/reset
- Timer presets (25, 15, 5 minutes)
- Timer completion notifications
- Timer statistics tracking
- Settings panel for customization

## 🛠️ Technical Architecture

### Widget System
Each widget follows a consistent class-based architecture:

```javascript
class WidgetName {
    constructor(containerId) {
        // Initialize widget
    }

    async loadData() {
        // Load data from JSON or localStorage
    }

    render() {
        // Update widget display
    }

    // Additional widget-specific methods
}
```

### Data Loading Pattern
All widgets use the `fetchHelper` utility for consistent data loading:

```javascript
// Load JSON data with error handling
const data = await fetchHelper.loadJSON('./data/filename.json');

// Handle localStorage data
const localData = JSON.parse(localStorage.getItem('key')) || [];
```

### Theme System
The theme system uses CSS custom properties for easy customization:

```css
:root {
    --bg-color: #f5f7fa;
    --text-color: #2d3748;
    /* More theme variables */
}

.theme-dark {
    --bg-color: #1a202c;
    --text-color: #f7fafc;
    /* Dark theme overrides */
}
```

## 📋 Implementation Checklist

### Session 1-2 Goals
- [ ] Understand the weather widget code
- [ ] Modify weather.json and see changes
- [ ] Experiment with fetch-helper functions
- [ ] Complete basic JSON loading exercises

### Session 3-4 Goals
- [ ] Create quotes.js widget file
- [ ] Implement basic quote display
- [ ] Add category filtering
- [ ] Implement "New Quote" functionality
- [ ] Add proper error handling

### Session 5-6 Goals
- [ ] Create tasks.js widget file
- [ ] Implement task CRUD operations
- [ ] Add localStorage persistence
- [ ] Create task statistics display
- [ ] Style task list interface

### Session 7-8 Goals
- [ ] Create timer.js widget file
- [ ] Implement countdown functionality
- [ ] Add timer presets and controls
- [ ] Complete dashboard polish
- [ ] Add final touches and testing

## 🎨 Styling Guidelines

### CSS Architecture
- **styles.css**: Core layout, buttons, forms, utilities
- **themes.css**: Light/dark theme variables and switching
- **widgets.css**: Widget-specific styling and responsiveness

### Design Principles
- Use CSS custom properties for consistent theming
- Implement mobile-first responsive design
- Add smooth transitions for interactive elements
- Maintain accessibility with proper focus states

### Widget Styling Pattern
```css
.widget-name {
    /* Widget container styles */
}

.widget-name .widget-content {
    /* Content area styles */
}

.widget-name .specific-element {
    /* Element-specific styles */
}
```

## 🐛 Common Issues and Solutions

### "fetch() not working"
- Ensure you're using Live Server (files must be served, not opened directly)
- Check file paths are correct (`./data/filename.json`)
- Look at browser console for specific error messages

### "Widget not displaying data"
- Check that widget JavaScript file is included in index.html
- Verify the widget is properly initialized in app.js
- Use browser developer tools to debug step by step

### "localStorage not persisting"
- Check browser settings (incognito mode clears localStorage)
- Verify localStorage key names are consistent
- Use JSON.stringify() and JSON.parse() correctly

### "Styling not applying"
- Check CSS file order in HTML head
- Verify class names match between HTML and CSS
- Use browser developer tools to inspect applied styles

## 📖 Additional Resources

### JavaScript Concepts
- [MDN fetch() documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JSON.parse() and JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### CSS Resources
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

### Debugging Tools
- Browser Developer Tools (F12)
- Console.log() for debugging JavaScript
- Live Server for local development

## 🎯 Success Criteria

### Technical Requirements
- [ ] All widgets load data successfully
- [ ] fetch() API used correctly for JSON loading
- [ ] localStorage integration works properly
- [ ] Error handling implemented throughout
- [ ] Theme switching functions correctly

### User Experience
- [ ] Dashboard is visually appealing and professional
- [ ] All interactions are smooth and responsive
- [ ] Mobile-friendly responsive design
- [ ] Accessible keyboard navigation
- [ ] Loading states and error messages

### Code Quality
- [ ] Clean, readable, well-commented code
- [ ] Consistent naming conventions
- [ ] Proper separation of concerns
- [ ] No console errors in browser tools
- [ ] Modular, maintainable architecture

## 🚀 Next Steps

After completing this project, you'll be ready for:
- Real API integration with external web services
- Advanced JavaScript frameworks (React, Vue, Angular)
- Backend development and database integration
- Professional web application deployment

Good luck with your dashboard project!