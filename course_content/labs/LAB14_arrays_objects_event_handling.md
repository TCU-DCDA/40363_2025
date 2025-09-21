# Lab 14 – Arrays, Objects & Event Handling

> Delivery Mode: In-Class Demo ➜ Guided Practice ➜ Data Management Project (Hybrid)

Goal: Learn to work with complex data structures (arrays and objects) and handle various user interactions. Build the foundation for managing collections of data like the favorites in Project 2.

## Learning Outcomes
- Create and manipulate arrays to store multiple pieces of data
- Work with JavaScript objects to organize related information
- Combine arrays and objects to create complex data structures
- Handle form input events and validate user data
- Build interactive data management features
- Understand data patterns used in real-world web applications

## Prerequisites
- Completed LAB13 (Functions & DOM Manipulation)
- Understanding of JavaScript variables, functions, and basic DOM manipulation
- Experience with event listeners and user interaction handling
- Basic HTML form structure knowledge

## 📊 Understanding Arrays

### What are Arrays?
**Arrays are ordered lists that can store multiple values.** Think of them like numbered boxes in a row, where each box can hold one piece of information.

### Creating and Using Arrays

#### **Basic Array Creation**
```javascript
// Empty array
let students = [];

// Array with initial values
let colors = ['red', 'blue', 'green', 'yellow'];
let numbers = [1, 5, 10, 15, 20];
let mixed = ['Alice', 25, true, 'student'];

console.log(colors);        // ['red', 'blue', 'green', 'yellow']
console.log(numbers[0]);    // 1 (first element)
console.log(colors[2]);     // 'green' (third element)
```

#### **Array Properties and Methods**
```javascript
let fruits = ['apple', 'banana', 'orange'];

// Array length
console.log(fruits.length);  // 3

// Add elements
fruits.push('grape');        // Add to end
fruits.unshift('mango');     // Add to beginning
console.log(fruits);         // ['mango', 'apple', 'banana', 'orange', 'grape']

// Remove elements
let lastFruit = fruits.pop();     // Remove and return last element
let firstFruit = fruits.shift();  // Remove and return first element
console.log(lastFruit);           // 'grape'
console.log(firstFruit);          // 'mango'

// Find elements
let bananaIndex = fruits.indexOf('banana');  // 1
let hasOrange = fruits.includes('orange');   // true
```

#### **Looping Through Arrays**
```javascript
let subjects = ['Math', 'Science', 'English', 'History'];

// Method 1: for loop
for (let i = 0; i < subjects.length; i++) {
    console.log('Subject ' + (i + 1) + ': ' + subjects[i]);
}

// Method 2: for...of loop (easier)
for (let subject of subjects) {
    console.log('I am studying: ' + subject);
}

// Method 3: forEach method (most common)
subjects.forEach(function(subject, index) {
    console.log(index + ': ' + subject);
});
```

## 🗂️ Understanding Objects

### What are Objects?
**Objects are collections of related properties and values.** Think of them like forms with labeled fields - each field has a name and a value.

### Creating and Using Objects

#### **Basic Object Creation**
```javascript
// Empty object
let emptyStudent = {};

// Object with properties
let student = {
    name: 'Alice Johnson',
    age: 20,
    major: 'Computer Science',
    isEnrolled: true,
    gpa: 3.7
};

console.log(student);           // Shows entire object
console.log(student.name);      // 'Alice Johnson'
console.log(student['age']);    // 20 (alternative syntax)
```

#### **Modifying Objects**
```javascript
let person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 22
};

// Change existing properties
person.age = 23;
person['lastName'] = 'Johnson';

// Add new properties
person.email = 'john.johnson@example.com';
person.isStudent = true;

// Remove properties
delete person.age;

console.log(person);
// { firstName: 'John', lastName: 'Johnson', email: 'john.johnson@example.com', isStudent: true }
```

#### **Objects with Methods**
```javascript
let calculator = {
    value: 0,

    add: function(number) {
        this.value += number;
        return this.value;
    },

    subtract: function(number) {
        this.value -= number;
        return this.value;
    },

    reset: function() {
        this.value = 0;
        return this.value;
    }
};

console.log(calculator.add(10));      // 10
console.log(calculator.add(5));       // 15
console.log(calculator.subtract(3));  // 12
console.log(calculator.reset());      // 0
```

## 🔗 Combining Arrays and Objects

### Arrays of Objects (Very Important for Project 2!)
```javascript
// This is similar to how you'll store favorites in Project 2
let favorites = [
    {
        id: 1,
        name: 'Local Coffee Shop',
        category: 'coffee',
        rating: 5,
        notes: 'Great wifi and atmosphere',
        dateAdded: '2024-01-15'
    },
    {
        id: 2,
        name: 'City Park',
        category: 'parks',
        rating: 4,
        notes: 'Perfect for jogging',
        dateAdded: '2024-01-10'
    },
    {
        id: 3,
        name: 'Pizza Palace',
        category: 'restaurants',
        rating: 4,
        notes: 'Best pizza in town',
        dateAdded: '2024-01-20'
    }
];

// Working with arrays of objects
console.log('Total favorites:', favorites.length);
console.log('First favorite:', favorites[0].name);
console.log('Second favorite rating:', favorites[1].rating);

// Loop through all favorites
favorites.forEach(function(favorite) {
    console.log(favorite.name + ' - Rating: ' + favorite.rating + ' stars');
});
```

### Useful Array Methods for Objects
```javascript
// Find a specific favorite by name
let coffeeShop = favorites.find(function(favorite) {
    return favorite.name === 'Local Coffee Shop';
});
console.log(coffeeShop);

// Filter favorites by category
let restaurants = favorites.filter(function(favorite) {
    return favorite.category === 'restaurants';
});
console.log(restaurants);

// Get all favorite names
let names = favorites.map(function(favorite) {
    return favorite.name;
});
console.log(names); // ['Local Coffee Shop', 'City Park', 'Pizza Palace']

// Check if any favorite has 5-star rating
let hasFiveStar = favorites.some(function(favorite) {
    return favorite.rating === 5;
});
console.log(hasFiveStar); // true
```

## 📝 Advanced Event Handling

### Form Events
Working with form inputs is crucial for Project 2:

```html
<form id="add-item-form">
    <input type="text" id="item-name" placeholder="Enter name" required>
    <select id="item-category">
        <option value="">Select Category</option>
        <option value="coffee">Coffee Shops</option>
        <option value="restaurants">Restaurants</option>
        <option value="parks">Parks</option>
    </select>
    <input type="number" id="item-rating" min="1" max="5" placeholder="Rating">
    <textarea id="item-notes" placeholder="Notes (optional)"></textarea>
    <button type="submit">Add Item</button>
</form>
<div id="items-display"></div>
```

```javascript
// Handle form submission
document.getElementById('add-item-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    let name = document.getElementById('item-name').value.trim();
    let category = document.getElementById('item-category').value;
    let rating = parseInt(document.getElementById('item-rating').value);
    let notes = document.getElementById('item-notes').value.trim();

    // Validate data
    if (!name || !category || !rating) {
        alert('Please fill in all required fields');
        return;
    }

    // Create new item object
    let newItem = {
        id: Date.now(), // Simple ID generation
        name: name,
        category: category,
        rating: rating,
        notes: notes,
        dateAdded: new Date().toISOString().split('T')[0]
    };

    // Add to array and display
    addItem(newItem);
    displayItems();

    // Clear form
    document.getElementById('add-item-form').reset();
});
```

### Input Events for Real-time Updates
```javascript
// Search functionality
document.getElementById('search-input').addEventListener('input', function(event) {
    let searchTerm = event.target.value.toLowerCase();
    filterAndDisplayItems(searchTerm);
});

// Category filter
document.getElementById('category-filter').addEventListener('change', function(event) {
    let selectedCategory = event.target.value;
    filterByCategory(selectedCategory);
});
```

## 💻 Complete Data Management Project

Let's build a comprehensive example that demonstrates all concepts:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Collection Manager</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .form-section {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input, select, textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        button {
            background: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background: #0056b3;
        }
        .item-card {
            border: 1px solid #ddd;
            padding: 15px;
            margin: 10px 0;
            border-radius: 5px;
            background: white;
        }
        .item-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        .item-name {
            font-size: 1.2em;
            font-weight: bold;
        }
        .item-rating {
            color: #f39c12;
        }
        .item-category {
            background: #e9ecef;
            padding: 3px 8px;
            border-radius: 3px;
            font-size: 0.9em;
        }
        .item-notes {
            color: #666;
            margin-top: 10px;
        }
        .item-actions {
            margin-top: 10px;
        }
        .delete-btn {
            background: #dc3545;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 3px;
            cursor: pointer;
        }
        .stats {
            background: #e7f3ff;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .search-section {
            margin-bottom: 20px;
        }
        .search-input {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>My Collection Manager</h1>

        <!-- Statistics Section -->
        <div id="stats" class="stats">
            <h3>Collection Statistics</h3>
            <p id="stats-content">No items in collection yet</p>
        </div>

        <!-- Add New Item Form -->
        <div class="form-section">
            <h2>Add New Item</h2>
            <form id="add-item-form">
                <div class="form-group">
                    <label for="item-name">Name *</label>
                    <input type="text" id="item-name" required>
                </div>

                <div class="form-group">
                    <label for="item-category">Category *</label>
                    <select id="item-category" required>
                        <option value="">Select Category</option>
                        <option value="coffee">Coffee Shops</option>
                        <option value="restaurants">Restaurants</option>
                        <option value="parks">Parks & Recreation</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="shopping">Shopping</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="item-rating">Rating (1-5) *</label>
                    <input type="number" id="item-rating" min="1" max="5" required>
                </div>

                <div class="form-group">
                    <label for="item-notes">Notes (optional)</label>
                    <textarea id="item-notes" rows="3"></textarea>
                </div>

                <button type="submit">Add to Collection</button>
            </form>
        </div>

        <!-- Search and Filter Section -->
        <div class="search-section">
            <h2>Search & Filter</h2>
            <input type="text" id="search-input" class="search-input" placeholder="Search by name or notes...">

            <select id="category-filter">
                <option value="">All Categories</option>
                <option value="coffee">Coffee Shops</option>
                <option value="restaurants">Restaurants</option>
                <option value="parks">Parks & Recreation</option>
                <option value="entertainment">Entertainment</option>
                <option value="shopping">Shopping</option>
                <option value="other">Other</option>
            </select>

            <button id="clear-search">Clear Filters</button>
        </div>

        <!-- Items Display -->
        <div id="items-section">
            <h2>My Collection (<span id="item-count">0</span> items)</h2>
            <div id="items-display">
                <p>No items in your collection yet. Add some above!</p>
            </div>
        </div>
    </div>

    <script>
        // Global array to store all items
        let myCollection = [];

        // Functions for managing the collection

        function addItem(item) {
            myCollection.push(item);
            console.log('Added item:', item);
        }

        function deleteItem(itemId) {
            let index = myCollection.findIndex(item => item.id === itemId);
            if (index !== -1) {
                let deletedItem = myCollection.splice(index, 1)[0];
                console.log('Deleted item:', deletedItem);
                return true;
            }
            return false;
        }

        function findItemById(itemId) {
            return myCollection.find(item => item.id === itemId);
        }

        function getItemsByCategory(category) {
            return myCollection.filter(item => item.category === category);
        }

        function searchItems(searchTerm) {
            if (!searchTerm) return myCollection;

            return myCollection.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.notes.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        function generateItemId() {
            return Date.now();
        }

        function formatCategoryName(category) {
            const categoryMap = {
                'coffee': 'Coffee Shops',
                'restaurants': 'Restaurants',
                'parks': 'Parks & Recreation',
                'entertainment': 'Entertainment',
                'shopping': 'Shopping',
                'other': 'Other'
            };
            return categoryMap[category] || category;
        }

        function createStars(rating) {
            return '⭐'.repeat(rating);
        }

        // Display functions

        function displayItems(itemsToShow = myCollection) {
            let displayDiv = document.getElementById('items-display');

            if (itemsToShow.length === 0) {
                displayDiv.innerHTML = '<p>No items match your current filters.</p>';
                return;
            }

            let html = '';
            itemsToShow.forEach(item => {
                html += `
                    <div class="item-card" data-id="${item.id}">
                        <div class="item-header">
                            <div class="item-name">${item.name}</div>
                            <div class="item-rating">${createStars(item.rating)}</div>
                        </div>
                        <div class="item-category">${formatCategoryName(item.category)}</div>
                        ${item.notes ? `<div class="item-notes">${item.notes}</div>` : ''}
                        <div class="item-meta">Added: ${item.dateAdded}</div>
                        <div class="item-actions">
                            <button class="delete-btn" onclick="handleDeleteItem(${item.id})">Delete</button>
                        </div>
                    </div>
                `;
            });

            displayDiv.innerHTML = html;
        }

        function updateStats() {
            let totalItems = myCollection.length;
            let statsContent = document.getElementById('stats-content');
            let itemCount = document.getElementById('item-count');

            itemCount.textContent = totalItems;

            if (totalItems === 0) {
                statsContent.textContent = 'No items in collection yet';
                return;
            }

            // Calculate statistics
            let categoryStats = {};
            let totalRating = 0;

            myCollection.forEach(item => {
                categoryStats[item.category] = (categoryStats[item.category] || 0) + 1;
                totalRating += item.rating;
            });

            let averageRating = (totalRating / totalItems).toFixed(1);

            let statsHtml = `
                <strong>Total Items:</strong> ${totalItems}<br>
                <strong>Average Rating:</strong> ${averageRating} stars<br>
                <strong>Categories:</strong> `;

            for (let category in categoryStats) {
                statsHtml += `${formatCategoryName(category)}: ${categoryStats[category]}, `;
            }
            statsHtml = statsHtml.slice(0, -2); // Remove last comma

            statsContent.innerHTML = statsHtml;
        }

        // Event handlers

        function handleAddItem(event) {
            event.preventDefault();

            // Get form values
            let name = document.getElementById('item-name').value.trim();
            let category = document.getElementById('item-category').value;
            let rating = parseInt(document.getElementById('item-rating').value);
            let notes = document.getElementById('item-notes').value.trim();

            // Validate
            if (!name || !category || !rating) {
                alert('Please fill in all required fields');
                return;
            }

            if (rating < 1 || rating > 5) {
                alert('Rating must be between 1 and 5');
                return;
            }

            // Check for duplicates
            let existingItem = myCollection.find(item =>
                item.name.toLowerCase() === name.toLowerCase()
            );

            if (existingItem) {
                alert('An item with this name already exists');
                return;
            }

            // Create new item
            let newItem = {
                id: generateItemId(),
                name: name,
                category: category,
                rating: rating,
                notes: notes,
                dateAdded: new Date().toISOString().split('T')[0]
            };

            // Add to collection
            addItem(newItem);

            // Update display
            displayItems();
            updateStats();

            // Clear form
            document.getElementById('add-item-form').reset();

            // Show success message
            alert('Item added successfully!');
        }

        function handleDeleteItem(itemId) {
            let item = findItemById(itemId);
            if (!item) {
                alert('Item not found');
                return;
            }

            if (confirm(`Are you sure you want to delete "${item.name}"?`)) {
                deleteItem(itemId);
                displayItems();
                updateStats();
                alert('Item deleted successfully');
            }
        }

        function handleSearch() {
            let searchTerm = document.getElementById('search-input').value.trim();
            let categoryFilter = document.getElementById('category-filter').value;

            let filteredItems = myCollection;

            // Apply search filter
            if (searchTerm) {
                filteredItems = searchItems(searchTerm);
            }

            // Apply category filter
            if (categoryFilter) {
                filteredItems = filteredItems.filter(item => item.category === categoryFilter);
            }

            displayItems(filteredItems);
        }

        function handleClearSearch() {
            document.getElementById('search-input').value = '';
            document.getElementById('category-filter').value = '';
            displayItems();
        }

        // Event listeners

        document.getElementById('add-item-form').addEventListener('submit', handleAddItem);
        document.getElementById('search-input').addEventListener('input', handleSearch);
        document.getElementById('category-filter').addEventListener('change', handleSearch);
        document.getElementById('clear-search').addEventListener('click', handleClearSearch);

        // Add some sample data for testing
        function addSampleData() {
            let sampleItems = [
                {
                    id: 1,
                    name: 'Downtown Coffee House',
                    category: 'coffee',
                    rating: 5,
                    notes: 'Great atmosphere for studying, excellent wifi',
                    dateAdded: '2024-01-15'
                },
                {
                    id: 2,
                    name: 'Riverside Park',
                    category: 'parks',
                    rating: 4,
                    notes: 'Beautiful walking trails, perfect for morning jogs',
                    dateAdded: '2024-01-10'
                },
                {
                    id: 3,
                    name: 'Mario\'s Italian Restaurant',
                    category: 'restaurants',
                    rating: 5,
                    notes: 'Best pasta in town, friendly service',
                    dateAdded: '2024-01-20'
                }
            ];

            sampleItems.forEach(item => addItem(item));
            displayItems();
            updateStats();
            console.log('Sample data added');
        }

        // Initialize the application
        console.log('Collection Manager loaded successfully');
        console.log('Try calling addSampleData() in the console to add test data');

        // Make addSampleData available globally for testing
        window.addSampleData = addSampleData;
    </script>
</body>
</html>
```

## 🔧 Key Programming Patterns

### Data Validation Pattern
```javascript
function validateItemData(name, category, rating) {
    let errors = [];

    if (!name || name.trim().length === 0) {
        errors.push('Name is required');
    }

    if (!category) {
        errors.push('Category is required');
    }

    if (!rating || rating < 1 || rating > 5) {
        errors.push('Rating must be between 1 and 5');
    }

    return errors;
}

// Usage
let errors = validateItemData(name, category, rating);
if (errors.length > 0) {
    alert('Please fix these errors:\n' + errors.join('\n'));
    return;
}
```

### Search and Filter Pattern
```javascript
function filterItems(items, filters) {
    return items.filter(item => {
        // Check search term
        if (filters.searchTerm) {
            let searchLower = filters.searchTerm.toLowerCase();
            let matchesSearch = item.name.toLowerCase().includes(searchLower) ||
                              item.notes.toLowerCase().includes(searchLower);
            if (!matchesSearch) return false;
        }

        // Check category
        if (filters.category && item.category !== filters.category) {
            return false;
        }

        // Check rating
        if (filters.minRating && item.rating < filters.minRating) {
            return false;
        }

        return true;
    });
}
```

### CRUD Operations Pattern
```javascript
// Create
function createItem(itemData) {
    let newItem = {
        id: generateId(),
        ...itemData,
        dateAdded: getCurrentDate()
    };
    items.push(newItem);
    return newItem;
}

// Read
function getItem(id) {
    return items.find(item => item.id === id);
}

// Update
function updateItem(id, updates) {
    let index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items[index] = { ...items[index], ...updates };
        return items[index];
    }
    return null;
}

// Delete
function deleteItem(id) {
    let index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        return items.splice(index, 1)[0];
    }
    return null;
}
```

## ✅ Success Criteria

By the end of this lab, you should be able to:

### **Array Skills:**
- [ ] Create arrays and add/remove elements
- [ ] Loop through arrays with different methods
- [ ] Use array methods like find, filter, map, forEach
- [ ] Understand array indexing and length

### **Object Skills:**
- [ ] Create objects with multiple properties
- [ ] Access and modify object properties
- [ ] Work with objects that contain methods
- [ ] Understand the difference between objects and arrays

### **Complex Data Structures:**
- [ ] Create arrays of objects
- [ ] Search and filter arrays of objects
- [ ] Add new objects to arrays
- [ ] Remove objects from arrays by ID

### **Advanced Event Handling:**
- [ ] Handle form submission events
- [ ] Validate user input before processing
- [ ] Handle multiple types of events (input, change, click)
- [ ] Prevent default form behavior

### **Project Completion:**
- [ ] Built a complete data management application
- [ ] Implemented CRUD operations (Create, Read, Update, Delete)
- [ ] Added search and filter functionality
- [ ] Demonstrated real-time statistics calculation

## 🐛 Common Mistakes and Debugging

### Array Index Errors
```javascript
let items = ['a', 'b', 'c'];

// ❌ Wrong - index doesn't exist
console.log(items[5]); // undefined

// ✅ Check array length first
if (index < items.length) {
    console.log(items[index]);
}
```

### Object Property Access Errors
```javascript
let student = { name: 'Alice', age: 20 };

// ❌ Wrong - property doesn't exist
console.log(student.grade); // undefined

// ✅ Check if property exists
if (student.grade !== undefined) {
    console.log(student.grade);
}
// Or use default values
console.log(student.grade || 'Not assigned');
```

### Event Handler Issues
```javascript
// ❌ Wrong - forgets to prevent default
form.addEventListener('submit', function(event) {
    // Page will reload!
    handleSubmit();
});

// ✅ Correct - prevents page reload
form.addEventListener('submit', function(event) {
    event.preventDefault();
    handleSubmit();
});
```

## 📚 Looking Ahead

**Next Lab (LAB15):** We'll learn about localStorage for data persistence and advanced form handling - the final skills you need before starting Project 2.

**Connection to Project 2:** Everything you learned today directly applies to Project 2:
- Arrays of objects to store your favorites
- Form handling for adding new favorites
- Search and filter functionality
- CRUD operations for managing your collection

## 🎉 Congratulations!

You now understand complex data structures and can build interactive data management applications! You've learned:
- How to organize data with arrays and objects
- How to manipulate collections of data
- How to handle complex user interactions
- How to validate and process form input

These skills are fundamental to modern web development and prepare you perfectly for Project 2's favorites management system.