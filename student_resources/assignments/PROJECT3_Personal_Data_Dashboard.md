# Project 3: Personal Data Dashboard

> **Timeline:** 8 class sessions (80 minutes each)
> **Prerequisites:** Completed Project 2 (Local Favorites Tracker)
> **Skills Focus:** fetch() API, JSON data, advanced localStorage, data visualization

## **Project Overview**

Build a personal dashboard that combines local JSON data files with localStorage to create a sophisticated multi-widget application. This project teaches API-style data fetching using local files, preparing students for real API integration in advanced courses.

## **Learning Progression from Project 2**

### **What You Already Know:**
✅ DOM manipulation and event handling
✅ Arrays, objects, and data management
✅ localStorage for data persistence
✅ Form processing and validation
✅ Basic CSS styling and responsive design

### **What You'll Learn:**
🆕 **fetch() API** for loading external data
🆕 **JSON file management** and data organization
🆕 **Asynchronous JavaScript** (promises and async patterns)
🆕 **Multiple data sources** and integration
🆕 **Data visualization** with CSS and JavaScript
🆕 **Modular code organization** and best practices

## **Final Product Features**

Your dashboard will include:
- **Weather Widget** - Display current and forecast data
- **Daily Quotes** - Inspirational quotes with categories
- **Personal Tasks** - To-do list with localStorage persistence
- **Study Timer** - Pomodoro-style productivity timer
- **Dashboard Settings** - Theme switching and layout preferences

## **8-Session Development Plan**

### **Sessions 1-2: Introduction to fetch() and JSON Data**

#### **Learning Objectives:**
- Understand the difference between localStorage and external data
- Learn fetch() syntax and promise handling
- Work with JSON file structure and parsing
- Implement basic error handling

#### **Key Concepts:**
```javascript
// From Project 2: localStorage
const data = JSON.parse(localStorage.getItem('favorites'));

// New in Project 3: fetch() from files
fetch('./data/weather.json')
  .then(response => response.json())
  .then(data => displayWeather(data))
  .catch(error => console.error('Error:', error));
```

#### **Session 1 Tasks:**
- Set up project structure with data/ folder
- Create weather.json with sample data
- Build basic weather widget display
- Implement fetch() to load weather data

#### **Session 2 Tasks:**
- Add error handling for missing files
- Create weather forecast display (5-day view)
- Style weather widget with CSS Grid
- Add loading states and user feedback

---

### **Sessions 3-4: Multiple Data Sources and Integration**

#### **Learning Objectives:**
- Manage multiple JSON data files
- Coordinate multiple fetch() operations
- Combine external JSON with localStorage
- Implement data caching strategies

#### **Key Concepts:**
```javascript
// Multiple data sources
async function loadDashboardData() {
  try {
    const weather = await fetch('./data/weather.json').then(r => r.json());
    const quotes = await fetch('./data/quotes.json').then(r => r.json());
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    return { weather, quotes, tasks };
  } catch (error) {
    handleDataError(error);
  }
}
```

#### **Session 3 Tasks:**
- Create quotes.json with inspirational quotes
- Build daily quote widget
- Implement quote categories and filtering
- Add quote refresh functionality

#### **Session 4 Tasks:**
- Integrate personal tasks from localStorage
- Create unified dashboard layout
- Implement data refresh coordination
- Add inter-widget communication

---

### **Sessions 5-6: Advanced Features and User Experience**

#### **Learning Objectives:**
- Implement real-time features (timers, updates)
- Create interactive UI components
- Build data visualization elements
- Enhance user experience with animations

#### **Key Concepts:**
```javascript
// Real-time timer functionality
class StudyTimer {
  constructor() {
    this.timeRemaining = 25 * 60; // 25 minutes
    this.isRunning = false;
    this.interval = null;
  }

  start() {
    this.isRunning = true;
    this.interval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    if (this.timeRemaining > 0) {
      this.timeRemaining--;
      this.updateDisplay();
    } else {
      this.complete();
    }
  }
}
```

#### **Session 5 Tasks:**
- Build Pomodoro study timer widget
- Add timer controls (start, pause, reset)
- Implement timer sound notifications
- Create timer statistics tracking

#### **Session 6 Tasks:**
- Add data visualization (simple charts)
- Create task completion statistics
- Implement widget customization options
- Add smooth animations and transitions

---

### **Sessions 7-8: Polish, Themes, and Advanced Features**

#### **Learning Objectives:**
- Implement theme switching and customization
- Create data export/import functionality
- Build settings management system
- Optimize performance and user experience

#### **Key Concepts:**
```javascript
// Theme management system
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.applyTheme(this.currentTheme);
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
  }

  applyTheme(theme) {
    document.body.className = `theme-${theme}`;
  }
}
```

#### **Session 7 Tasks:**
- Implement dark/light theme switching
- Create dashboard settings panel
- Add widget show/hide functionality
- Build data backup/restore features

#### **Session 8 Tasks:**
- Final UI polish and testing
- Implement responsive design improvements
- Add accessibility features
- Create deployment-ready version

## **Project Structure**

```
project3-dashboard/
├── index.html
├── css/
│   ├── styles.css
│   ├── themes.css
│   └── widgets.css
├── js/
│   ├── app.js
│   ├── widgets/
│   │   ├── weather.js
│   │   ├── quotes.js
│   │   ├── tasks.js
│   │   └── timer.js
│   └── utils/
│       ├── fetch-helper.js
│       └── theme-manager.js
├── data/
│   ├── weather.json
│   ├── quotes.json
│   └── sample-data.json
├── images/
│   └── weather-icons/
├── README.md
└── docs/
    ├── api-reference.md
    └── development-guide.md
```

## **Sample Data Files**

### **data/weather.json**
```json
{
  "current": {
    "location": "Fort Worth, TX",
    "temperature": 72,
    "condition": "Partly Cloudy",
    "humidity": 65,
    "windSpeed": 8,
    "icon": "partly-cloudy"
  },
  "forecast": [
    {
      "day": "Today",
      "high": 78,
      "low": 62,
      "condition": "Sunny",
      "icon": "sunny"
    },
    {
      "day": "Tomorrow",
      "high": 75,
      "low": 58,
      "condition": "Cloudy",
      "icon": "cloudy"
    }
  ]
}
```

### **data/quotes.json**
```json
{
  "categories": {
    "motivation": [
      {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
      },
      {
        "text": "Innovation distinguishes between a leader and a follower.",
        "author": "Steve Jobs"
      }
    ],
    "coding": [
      {
        "text": "First, solve the problem. Then, write the code.",
        "author": "John Johnson"
      }
    ],
    "learning": [
      {
        "text": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "author": "Mahatma Gandhi"
      }
    ]
  }
}
```

## **Assessment Criteria**

### **Technical Implementation (40%)**
- [ ] fetch() API used correctly for data loading
- [ ] JSON data parsed and displayed appropriately
- [ ] localStorage integration works seamlessly
- [ ] Error handling implemented for missing data
- [ ] Code is well-organized and modular

### **Feature Completeness (30%)**
- [ ] All required widgets implemented and functional
- [ ] Data persistence works across browser sessions
- [ ] User interactions are smooth and responsive
- [ ] Timer functionality works correctly
- [ ] Theme switching operates properly

### **User Experience (20%)**
- [ ] Dashboard is visually appealing and professional
- [ ] Responsive design works on different screen sizes
- [ ] Loading states and feedback are implemented
- [ ] Animations enhance rather than distract
- [ ] Accessibility considerations are addressed

### **Code Quality (10%)**
- [ ] Code is clean, readable, and well-commented
- [ ] Functions are appropriately sized and focused
- [ ] Variable and function names are descriptive
- [ ] No console errors in browser developer tools
- [ ] Files are organized logically

## **Stretch Goals (Optional)**

For students who complete the core requirements early:

### **Advanced Features:**
- **Data Visualization**: Create charts showing task completion over time
- **Widget Customization**: Allow users to rearrange dashboard widgets
- **Data Sync**: Implement import/export functionality for settings
- **Advanced Timer**: Add multiple timer presets and categories
- **Weather Details**: Add extended forecast and weather alerts

### **Technical Enhancements:**
- **Performance**: Implement data caching to reduce file loads
- **Offline Support**: Use service workers for offline functionality
- **Advanced CSS**: Create custom animations and micro-interactions
- **Modular Architecture**: Implement a plugin system for widgets
- **Testing**: Write basic unit tests for core functions

## **Common Challenges and Solutions**

### **Challenge: "fetch() isn't working"**
**Solution:** Check file paths and server setup
```javascript
// Correct relative path
fetch('./data/weather.json')  // ✅ Good

// Common mistakes
fetch('/data/weather.json')   // ❌ Wrong for local files
fetch('data/weather.json')    // ❌ Missing ./
```

### **Challenge: "Data isn't displaying"**
**Solution:** Add debugging and error handling
```javascript
fetch('./data/weather.json')
  .then(response => {
    console.log('Response:', response);
    return response.json();
  })
  .then(data => {
    console.log('Data:', data);
    displayWeather(data);
  })
  .catch(error => {
    console.error('Error loading weather:', error);
  });
```

### **Challenge: "localStorage and fetch() data don't work together"**
**Solution:** Create a unified data management system
```javascript
class DataManager {
  async loadData() {
    // Load external data
    const externalData = await this.loadExternalData();

    // Load local data
    const localData = this.loadLocalData();

    // Combine both
    return { ...externalData, ...localData };
  }
}
```

## **Deployment and Submission**

### **Final Submission Requirements:**
1. **Complete dashboard** deployed to GitHub Pages
2. **All widgets functional** with sample data
3. **Clean, professional design** with responsive layout
4. **README documentation** explaining features and setup
5. **Reflection essay** (500 words) describing learning experience

### **Deployment Steps:**
1. Test all functionality locally with Live Server
2. Commit all files to GitHub repository
3. Enable GitHub Pages in repository settings
4. Verify live site works correctly
5. Submit GitHub Pages URL and repository link

## **Next Steps After Project 3**

This project prepares you for:
- **Real API Integration** using actual web services
- **Advanced JavaScript Frameworks** (React, Vue, Angular)
- **Backend Development** creating your own APIs
- **Professional Web Development** with modern tooling

Your dashboard demonstrates industry-relevant skills in data management, asynchronous programming, and user interface development - core competencies for modern web developers.