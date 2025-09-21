# Project 2: Local Favorites Tracker

> **Timeline:** 8 class sessions (80 minutes each)
> **Prerequisites:** Completed Project 1 (Personal Portfolio)
> **Skills Focus:** JavaScript fundamentals, DOM manipulation, localStorage, interactive web applications

## **Project Overview**

Build a personal favorites tracker where you can save and manage your favorite local places, restaurants, coffee shops, study spots, or any categories that interest you. This project introduces JavaScript programming while building on your HTML and CSS foundation from Project 1.

## **Learning Progression from Project 1**

### **What You Already Know:**
✅ HTML structure and semantic elements
✅ CSS styling, Flexbox, and Grid layouts
✅ Responsive design and accessibility
✅ Git workflow and GitHub Pages deployment
✅ Professional web development practices

### **What You'll Learn:**
🆕 **JavaScript fundamentals** (variables, functions, arrays, objects)
🆕 **DOM manipulation** (selecting elements, changing content)
🆕 **Event handling** (click, submit, input events)
🆕 **Data management** with arrays and objects
🆕 **localStorage** for data persistence
🆕 **Form processing** and validation

## **Final Product Features**

Your favorites tracker will include:
- **Display favorites list** - Show your saved places with details
- **Add new favorites** - Form to add places with name, category, rating, notes
- **Search/filter functionality** - Find favorites by name or category
- **Edit favorites** - Update information about existing places
- **Delete favorites** - Remove places you no longer want to track
- **Category management** - Organize favorites by type (restaurants, coffee, parks, etc.)
- **Data persistence** - Your favorites save between browser sessions

## **8-Session Development Plan**

### **Sessions 1-2: JavaScript Fundamentals & DOM Basics**

#### **Learning Objectives:**
- Understand variables, data types, and basic JavaScript syntax
- Learn to select and manipulate DOM elements
- Connect JavaScript to HTML elements
- Handle basic user interactions

#### **Key Concepts:**
```javascript
// Variables and data types
let favoriteName = "Local Coffee Shop";
let rating = 5;
let categories = ["coffee", "study", "wifi"];

// DOM selection and manipulation
const titleElement = document.getElementById('page-title');
titleElement.textContent = "My Favorite Places";

// Basic event handling
const button = document.getElementById('add-button');
button.addEventListener('click', function() {
    console.log('Button clicked!');
});
```

#### **Session 1 Tasks:**
- Set up project structure (HTML, CSS, JS files)
- Create basic page layout with semantic HTML
- Add JavaScript file and connect to HTML
- Practice console.log() and basic variables

#### **Session 2 Tasks:**
- Learn DOM element selection methods
- Practice changing element content and styles
- Add basic click event listeners
- Create simple interactive elements

---

### **Sessions 3-4: Arrays, Objects, and Data Structure**

#### **Learning Objectives:**
- Work with arrays to store multiple items
- Create and manipulate JavaScript objects
- Understand data structure for favorites
- Implement basic display functionality

#### **Key Concepts:**
```javascript
// Favorite place object structure
const favorite = {
    id: 1,
    name: "Addison Coffee Roasters",
    category: "coffee",
    rating: 5,
    notes: "Great atmosphere for studying, excellent wifi",
    address: "123 Main St, Fort Worth, TX",
    dateAdded: "2024-09-20"
};

// Array of favorites
const favorites = [
    {
        id: 1,
        name: "Addison Coffee Roasters",
        category: "coffee",
        rating: 5,
        notes: "Great atmosphere for studying"
    },
    {
        id: 2,
        name: "Sundance Square",
        category: "entertainment",
        rating: 4,
        notes: "Fun downtown area with events"
    }
];

// Display favorites on page
function displayFavorites() {
    const container = document.getElementById('favorites-list');
    container.innerHTML = '';

    favorites.forEach(favorite => {
        const favoriteElement = createFavoriteElement(favorite);
        container.appendChild(favoriteElement);
    });
}
```

#### **Session 3 Tasks:**
- Learn array methods (push, pop, forEach)
- Create favorite object structure
- Practice object property access
- Build sample data for testing

#### **Session 4 Tasks:**
- Implement displayFavorites() function
- Create HTML templates for favorite items
- Add basic styling for favorite cards
- Test with sample data

---

### **Sessions 5-6: Forms, User Input, and Adding Favorites**

#### **Learning Objectives:**
- Handle form submissions and prevent default behavior
- Validate user input and provide feedback
- Add new favorites to the data array
- Update the display dynamically

#### **Key Concepts:**
```javascript
// Form handling
const addForm = document.getElementById('add-favorite-form');
addForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    // Get form data
    const formData = new FormData(addForm);
    const newFavorite = {
        id: Date.now(), // Simple ID generation
        name: formData.get('name'),
        category: formData.get('category'),
        rating: parseInt(formData.get('rating')),
        notes: formData.get('notes'),
        dateAdded: new Date().toISOString().split('T')[0]
    };

    // Validate required fields
    if (!newFavorite.name || !newFavorite.category) {
        showError('Name and category are required');
        return;
    }

    // Add to favorites array
    favorites.push(newFavorite);

    // Update display
    displayFavorites();

    // Clear form
    addForm.reset();

    // Show success message
    showSuccess('Favorite added successfully!');
});
```

#### **Session 5 Tasks:**
- Create add favorite form in HTML
- Implement form submission handling
- Add basic form validation
- Practice preventing default form behavior

#### **Session 6 Tasks:**
- Enhance form validation with error messages
- Add success feedback for users
- Implement form clearing after submission
- Style form elements and feedback messages

---

### **Sessions 7-8: localStorage, Search, and Polish**

#### **Learning Objectives:**
- Implement data persistence with localStorage
- Add search and filter functionality
- Handle edit and delete operations
- Polish user experience and styling

#### **Key Concepts:**
```javascript
// localStorage operations
function saveFavorites() {
    localStorage.setItem('myFavorites', JSON.stringify(favorites));
}

function loadFavorites() {
    const savedFavorites = localStorage.getItem('myFavorites');
    if (savedFavorites) {
        favorites.length = 0; // Clear existing array
        favorites.push(...JSON.parse(savedFavorites));
    }
}

// Search functionality
function searchFavorites(searchTerm) {
    const filteredFavorites = favorites.filter(favorite =>
        favorite.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        favorite.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        favorite.notes.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayFilteredFavorites(filteredFavorites);
}

// Delete functionality
function deleteFavorite(id) {
    const index = favorites.findIndex(favorite => favorite.id === id);
    if (index !== -1) {
        favorites.splice(index, 1);
        saveFavorites();
        displayFavorites();
        showSuccess('Favorite deleted successfully');
    }
}
```

#### **Session 7 Tasks:**
- Implement localStorage save/load functions
- Add search input and functionality
- Test data persistence across browser sessions
- Add loading state for initial page load

#### **Session 8 Tasks:**
- Implement delete functionality with confirmation
- Add edit capabilities (bonus feature)
- Final UI polish and responsive design
- Testing and deployment preparation

## **Project Structure**

```
project2-favorites/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── favorites.js
│   └── utils.js
├── images/
│   └── (any icons or images)
├── README.md
└── docs/
    └── development-notes.md
```

## **Sample Data Structure**

### **Individual Favorite Object**
```javascript
{
    id: 1672531200000,  // timestamp for unique ID
    name: "Addison Coffee Roasters",
    category: "coffee",
    rating: 5,
    notes: "Perfect study spot with great wifi and atmosphere. Try the cold brew!",
    address: "123 Main Street, Fort Worth, TX",
    website: "https://addisoncoffee.com",
    dateAdded: "2024-09-20",
    tags: ["wifi", "study", "parking", "outdoor seating"]
}
```

### **Categories Array**
```javascript
const categories = [
    "coffee",
    "restaurants",
    "parks",
    "entertainment",
    "shopping",
    "study-spots",
    "fitness",
    "services",
    "other"
];
```

### **Sample Dataset for Testing**
```javascript
const sampleFavorites = [
    {
        id: 1,
        name: "Addison Coffee Roasters",
        category: "coffee",
        rating: 5,
        notes: "Best coffee in Fort Worth, great for studying",
        address: "3838 Oak Lawn Ave, Dallas, TX"
    },
    {
        id: 2,
        name: "Fort Worth Botanic Garden",
        category: "parks",
        rating: 4,
        notes: "Beautiful gardens, perfect for relaxation",
        address: "3220 Botanic Garden Blvd, Fort Worth, TX"
    },
    {
        id: 3,
        name: "Joe T. Garcia's",
        category: "restaurants",
        rating: 5,
        notes: "Amazing Tex-Mex, cash only, huge portions",
        address: "2201 N Commerce St, Fort Worth, TX"
    }
];
```

## **Assessment Criteria**

### **Technical Implementation (40%)**
- [ ] JavaScript fundamentals used correctly (variables, functions, arrays, objects)
- [ ] DOM manipulation working properly
- [ ] Event handling implemented for user interactions
- [ ] localStorage functioning for data persistence
- [ ] Form processing with proper validation

### **Feature Completeness (30%)**
- [ ] Can add new favorites with all required fields
- [ ] Favorites display correctly with proper formatting
- [ ] Search/filter functionality works as expected
- [ ] Data persists between browser sessions
- [ ] Basic error handling for edge cases

### **User Experience (20%)**
- [ ] Intuitive and easy-to-use interface
- [ ] Responsive design works on different screen sizes
- [ ] Proper feedback for user actions (success/error messages)
- [ ] Professional styling consistent with portfolio
- [ ] Accessible design with keyboard navigation

### **Code Quality (10%)**
- [ ] Clean, readable, and well-commented code
- [ ] Logical organization of JavaScript functions
- [ ] Consistent naming conventions
- [ ] No console errors in browser developer tools
- [ ] Git workflow with meaningful commit messages

## **Required Features**

### **Core Functionality**
1. **Add Favorites**: Form to add new favorite places
2. **Display Favorites**: List all saved favorites with details
3. **Search**: Find favorites by name, category, or notes
4. **Delete**: Remove favorites with confirmation
5. **Data Persistence**: Save/load from localStorage

### **Data Fields**
- **Name** (required): The name of the place
- **Category** (required): Type of place (coffee, restaurant, park, etc.)
- **Rating** (1-5 stars): Your rating of the place
- **Notes** (optional): Personal comments and details
- **Date Added**: Automatically set when favorite is created

### **User Interface Elements**
- **Header**: Title and navigation
- **Add Form**: Input fields for new favorites
- **Search Bar**: Filter existing favorites
- **Favorites List**: Display all favorites as cards/items
- **Category Filter**: Quick filter by category
- **Action Buttons**: Edit, delete, and other interactions

## **Stretch Goals (Optional)**

For students who complete the core requirements early:

### **Enhanced Features**
- **Edit Favorites**: Click to edit existing favorite details
- **Photo Upload**: Add photos to favorite places (using File API)
- **Map Integration**: Show locations on a simple map
- **Export Data**: Download favorites as JSON file
- **Import Data**: Upload and restore favorites from file

### **Advanced Interactions**
- **Drag and Drop**: Reorder favorites by dragging
- **Bulk Operations**: Select multiple favorites for batch actions
- **Advanced Search**: Filter by rating, date added, multiple criteria
- **Categories Management**: Add/edit/delete custom categories
- **Statistics**: Show totals, averages, most visited categories

### **Technical Enhancements**
- **Data Validation**: More robust input validation and sanitization
- **Error Recovery**: Handle localStorage quota exceeded errors
- **Performance**: Virtualized list for handling many favorites
- **Animations**: Smooth transitions for adding/removing items
- **PWA Features**: Offline functionality with service workers

## **Common Challenges and Solutions**

### **Challenge: "JavaScript not working"**
**Solution:** Check browser console for errors
```javascript
// Add debugging logs
console.log('JavaScript file loaded');
console.log('Favorites array:', favorites);

// Check element selection
const element = document.getElementById('my-element');
console.log('Element found:', element);
```

### **Challenge: "localStorage not persisting"**
**Solution:** Verify data saving and loading
```javascript
// Test localStorage manually
localStorage.setItem('test', 'hello');
console.log(localStorage.getItem('test')); // Should show 'hello'

// Check if localStorage is available
if (typeof(Storage) !== "undefined") {
    console.log('localStorage is supported');
} else {
    console.log('localStorage not supported');
}
```

### **Challenge: "Form not submitting correctly"**
**Solution:** Check event handling and form structure
```javascript
// Make sure preventDefault is called
form.addEventListener('submit', function(event) {
    event.preventDefault(); // This is crucial!
    console.log('Form submitted');
});

// Verify form elements have correct names
const formData = new FormData(form);
console.log('Form data:', Object.fromEntries(formData));
```

### **Challenge: "Array methods confusing"**
**Solution:** Practice with simple examples
```javascript
// Start with basic operations
let numbers = [1, 2, 3];
numbers.push(4); // Add to end: [1, 2, 3, 4]
numbers.pop(); // Remove from end: [1, 2, 3]

// Practice with favorites
let testFavorites = [];
testFavorites.push({name: 'Test Place', category: 'test'});
console.log('Favorites count:', testFavorites.length);
```

## **Deployment and Submission**

### **Testing Checklist**
- [ ] All features work correctly in browser
- [ ] No console errors when using the application
- [ ] Data persists after refreshing the page
- [ ] Form validation prevents invalid submissions
- [ ] Search functionality returns correct results
- [ ] Responsive design works on mobile devices

### **Deployment Steps**
1. **Test locally** with Live Server extension
2. **Commit all changes** to Git repository
3. **Push to GitHub** and verify files are uploaded
4. **Enable GitHub Pages** in repository settings
5. **Test live site** and verify all functionality works
6. **Submit GitHub Pages URL** and repository link

### **Submission Requirements**
1. **Complete application** deployed to GitHub Pages
2. **All core features** functional on live site
3. **README documentation** explaining features and setup
4. **Clean, professional design** consistent with portfolio
5. **Reflection essay** (300 words) describing learning experience and challenges

## **Learning Reflection Questions**

### **Technical Understanding**
- How is JavaScript different from HTML and CSS?
- What are the advantages of storing data in arrays vs. individual variables?
- Why is localStorage useful for web applications?
- How do event listeners make web pages interactive?

### **Problem-Solving Process**
- What was the most challenging part of this project?
- How did you debug issues when JavaScript wasn't working?
- What resources did you use to learn new JavaScript concepts?
- Which features took longer than expected and why?

### **Real-World Applications**
- How could this favorites tracker be improved for actual daily use?
- What other types of data could be managed with similar techniques?
- How might this project scale to handle hundreds of favorites?
- What security considerations would be important for user data?

## **Next Steps After Project 2**

This project prepares you for:
- **Project 3**: Working with external data sources and APIs
- **Advanced JavaScript**: Async programming and modern ES6+ features
- **JavaScript Frameworks**: React, Vue, or Angular development
- **Backend Integration**: Connecting to databases and servers

Your favorites tracker demonstrates core programming skills that form the foundation for all modern web development. The concepts you've learned - data management, user interaction, and state persistence - are fundamental to building any interactive web application.

## **Additional Resources**

### **JavaScript Learning**
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/) - Modern JavaScript tutorial
- [Eloquent JavaScript](https://eloquentjavascript.net/) - Free online book

### **DOM Manipulation**
- [MDN DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [JavaScript DOM Manipulation Guide](https://www.freecodecamp.org/news/dom-manipulation-in-javascript/)

### **localStorage and Web Storage**
- [MDN Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [localStorage Tutorial](https://www.w3schools.com/html/html5_webstorage.asp)

### **Debugging Tools**
- Browser Developer Tools (F12)
- Console.log() debugging techniques
- Chrome DevTools JavaScript debugging guide