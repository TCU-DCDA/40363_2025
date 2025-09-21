# Lab 15 – Forms, localStorage & Project 2 Preparation

> Delivery Mode: In-Class Demo ➜ Guided Practice ➜ Pre-Project Setup (Hybrid)

Goal: Master localStorage for data persistence, advanced form handling techniques, and complete preparation for Project 2. Build the final skills needed to create a fully functional Local Favorites Tracker.

## Learning Outcomes
- Store and retrieve data using localStorage API
- Handle complex form validation and user feedback
- Implement data persistence across browser sessions
- Build robust error handling for storage operations
- Create modular code architecture for larger projects
- Understand Project 2 requirements and starter template structure

## Prerequisites
- Completed LAB14 (Arrays, Objects & Event Handling)
- Understanding of JavaScript arrays, objects, and CRUD operations
- Experience with DOM manipulation and event handling
- Basic knowledge of form submission and validation

## 💾 Understanding localStorage

### What is localStorage?
**localStorage is a web browser feature that lets you save data permanently on the user's computer.** Unlike regular variables that disappear when the page refreshes, localStorage data stays until manually deleted.

### Why Use localStorage?
- **Data persistence** - Information survives page refreshes and browser closing
- **No server required** - Works entirely on the user's computer
- **Easy to use** - Simple JavaScript API
- **Perfect for Project 2** - Ideal for saving favorites data

### localStorage Basics

#### **Storing Data**
```javascript
// Store simple values
localStorage.setItem('userName', 'Alice');
localStorage.setItem('theme', 'dark');
localStorage.setItem('lastVisit', '2024-01-15');

// Store numbers (converted to strings automatically)
localStorage.setItem('userAge', '20');
localStorage.setItem('score', '95');
```

#### **Retrieving Data**
```javascript
// Get stored values
let userName = localStorage.getItem('userName');
let theme = localStorage.getItem('theme');
let lastVisit = localStorage.getItem('lastVisit');

console.log(userName);  // 'Alice'
console.log(theme);     // 'dark'

// Handle missing data
let userEmail = localStorage.getItem('userEmail');
console.log(userEmail); // null (if not set)

// Provide default values
let userEmail = localStorage.getItem('userEmail') || 'not-set@example.com';
```

#### **Working with Complex Data (Arrays and Objects)**
```javascript
// Storing arrays and objects requires JSON conversion
let favorites = [
    { id: 1, name: 'Coffee Shop', rating: 5 },
    { id: 2, name: 'Park', rating: 4 }
];

// Convert to JSON string before storing
localStorage.setItem('favorites', JSON.stringify(favorites));

// Convert back from JSON when retrieving
let savedFavorites = localStorage.getItem('favorites');
if (savedFavorites) {
    favorites = JSON.parse(savedFavorites);
    console.log(favorites); // Array of objects
} else {
    favorites = []; // Default to empty array
}
```

#### **Removing and Clearing Data**
```javascript
// Remove specific item
localStorage.removeItem('userName');

// Clear all localStorage data
localStorage.clear();

// Check if item exists
if (localStorage.getItem('favorites')) {
    console.log('Favorites data exists');
} else {
    console.log('No favorites data found');
}
```

### Safe localStorage Operations

#### **Error Handling**
```javascript
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Failed to save to localStorage:', error);

        if (error.name === 'QuotaExceededError') {
            alert('Storage quota exceeded. Please delete some data.');
        } else {
            alert('Failed to save data. Please try again.');
        }
        return false;
    }
}

function loadFromLocalStorage(key, defaultValue = null) {
    try {
        let data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
        console.error('Failed to load from localStorage:', error);
        return defaultValue;
    }
}
```

#### **Checking localStorage Availability**
```javascript
function isLocalStorageAvailable() {
    try {
        let test = 'localStorage-test';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (error) {
        console.warn('localStorage not available:', error);
        return false;
    }
}

// Use at app startup
if (isLocalStorageAvailable()) {
    console.log('localStorage is available');
} else {
    alert('localStorage not available. Data will not be saved.');
}
```

## 📝 Advanced Form Handling

### Complex Form Validation

#### **Multi-field Validation**
```javascript
function validateFavoriteForm(formData) {
    let errors = [];

    // Name validation
    let name = formData.get('name').trim();
    if (!name) {
        errors.push('Name is required');
    } else if (name.length < 2) {
        errors.push('Name must be at least 2 characters');
    } else if (name.length > 100) {
        errors.push('Name must be less than 100 characters');
    }

    // Category validation
    let category = formData.get('category');
    let validCategories = ['coffee', 'restaurants', 'parks', 'entertainment', 'shopping', 'other'];
    if (!category) {
        errors.push('Category is required');
    } else if (!validCategories.includes(category)) {
        errors.push('Invalid category selected');
    }

    // Rating validation
    let rating = parseInt(formData.get('rating'));
    if (!rating) {
        errors.push('Rating is required');
    } else if (rating < 1 || rating > 5) {
        errors.push('Rating must be between 1 and 5');
    }

    // Notes validation (optional but limited)
    let notes = formData.get('notes').trim();
    if (notes && notes.length > 500) {
        errors.push('Notes must be less than 500 characters');
    }

    return errors;
}
```

#### **Real-time Form Feedback**
```javascript
function setupFormValidation() {
    let nameInput = document.getElementById('favorite-name');
    let categorySelect = document.getElementById('favorite-category');
    let ratingInput = document.getElementById('favorite-rating');

    // Real-time name validation
    nameInput.addEventListener('input', function() {
        let value = this.value.trim();
        let feedback = document.getElementById('name-feedback');

        if (value.length === 0) {
            feedback.textContent = 'Name is required';
            feedback.className = 'error-message';
        } else if (value.length < 2) {
            feedback.textContent = 'Name must be at least 2 characters';
            feedback.className = 'warning-message';
        } else {
            feedback.textContent = 'Looks good!';
            feedback.className = 'success-message';
        }
    });

    // Rating validation
    ratingInput.addEventListener('change', function() {
        let value = parseInt(this.value);
        let feedback = document.getElementById('rating-feedback');

        if (value < 1 || value > 5) {
            feedback.textContent = 'Rating must be between 1 and 5';
            feedback.className = 'error-message';
        } else {
            feedback.textContent = '⭐'.repeat(value);
            feedback.className = 'success-message';
        }
    });
}
```

### Form Success and Error Messages

#### **User Feedback System**
```javascript
function showMessage(message, type = 'info', duration = 4000) {
    // Remove existing messages
    let existingMessage = document.querySelector('.user-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message element
    let messageDiv = document.createElement('div');
    messageDiv.className = `user-message ${type}-message`;
    messageDiv.textContent = message;

    // Add to page
    let container = document.querySelector('.container');
    container.insertBefore(messageDiv, container.firstChild);

    // Auto-remove after duration
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, duration);
}

// Usage examples
showMessage('Favorite added successfully!', 'success');
showMessage('Please fill in all required fields', 'error');
showMessage('Changes saved to localStorage', 'info');
```

## 🏗️ Complete Project 2 Preparation Example

Let's build a complete mini-version of the favorites tracker:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Favorites Tracker - Project 2 Prep</title>
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', system-ui, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, #2c3e50, #34495e);
            color: white;
            padding: 30px;
            text-align: center;
        }

        .header h1 {
            margin: 0;
            font-size: 2.5em;
        }

        .header p {
            margin: 10px 0 0 0;
            opacity: 0.9;
        }

        .main-content {
            padding: 30px;
        }

        .user-message {
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            font-weight: 500;
        }

        .success-message {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .error-message {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        .info-message {
            background: #d1ecf1;
            color: #0c5460;
            border: 1px solid #bee5eb;
        }

        .section {
            background: #f8f9fa;
            padding: 25px;
            margin-bottom: 25px;
            border-radius: 10px;
            border: 1px solid #e9ecef;
        }

        .section h2 {
            margin-top: 0;
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #2c3e50;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #3498db;
        }

        .feedback-message {
            margin-top: 5px;
            font-size: 14px;
            font-weight: 500;
        }

        .btn {
            background: linear-gradient(135deg, #3498db, #2980b9);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
        }

        .btn:active {
            transform: translateY(0);
        }

        .btn-secondary {
            background: linear-gradient(135deg, #95a5a6, #7f8c8d);
        }

        .btn-danger {
            background: linear-gradient(135deg, #e74c3c, #c0392b);
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 25px;
        }

        .stat-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #e9ecef;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .stat-number {
            font-size: 2.5em;
            font-weight: bold;
            color: #3498db;
            margin-bottom: 5px;
        }

        .stat-label {
            color: #7f8c8d;
            font-weight: 500;
        }

        .favorites-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }

        .favorite-card {
            background: white;
            border: 1px solid #e9ecef;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .favorite-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 20px rgba(0,0,0,0.15);
        }

        .favorite-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }

        .favorite-name {
            font-size: 1.3em;
            font-weight: bold;
            color: #2c3e50;
        }

        .favorite-rating {
            font-size: 1.2em;
        }

        .favorite-category {
            background: #3498db;
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.9em;
            font-weight: 500;
            display: inline-block;
            margin-bottom: 10px;
        }

        .favorite-notes {
            color: #7f8c8d;
            margin: 10px 0;
            line-height: 1.5;
        }

        .favorite-meta {
            color: #95a5a6;
            font-size: 0.9em;
            margin-bottom: 15px;
        }

        .search-section {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 25px;
            border: 1px solid #e9ecef;
        }

        .search-grid {
            display: grid;
            grid-template-columns: 2fr 1fr auto;
            gap: 15px;
            align-items: end;
        }

        .empty-state {
            text-align: center;
            padding: 50px 20px;
            color: #7f8c8d;
        }

        .empty-state-icon {
            font-size: 4em;
            margin-bottom: 20px;
        }

        @media (max-width: 768px) {
            .form-grid {
                grid-template-columns: 1fr;
            }

            .search-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🌟 My Favorites Tracker</h1>
            <p>Project 2 Preparation - localStorage Edition</p>
        </div>

        <div class="main-content">
            <!-- Statistics Section -->
            <div class="section">
                <h2>📊 Collection Statistics</h2>
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number" id="total-count">0</div>
                        <div class="stat-label">Total Favorites</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number" id="average-rating">0.0</div>
                        <div class="stat-label">Average Rating</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number" id="categories-count">0</div>
                        <div class="stat-label">Categories</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number" id="storage-usage">0%</div>
                        <div class="stat-label">Storage Used</div>
                    </div>
                </div>
            </div>

            <!-- Add New Favorite Form -->
            <div class="section">
                <h2>➕ Add New Favorite</h2>
                <form id="add-favorite-form">
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="favorite-name">Place Name *</label>
                            <input type="text" id="favorite-name" name="name" required>
                            <div id="name-feedback" class="feedback-message"></div>
                        </div>

                        <div class="form-group">
                            <label for="favorite-category">Category *</label>
                            <select id="favorite-category" name="category" required>
                                <option value="">Select Category</option>
                                <option value="coffee">☕ Coffee Shops</option>
                                <option value="restaurants">🍽️ Restaurants</option>
                                <option value="parks">🌳 Parks & Recreation</option>
                                <option value="entertainment">🎬 Entertainment</option>
                                <option value="shopping">🛍️ Shopping</option>
                                <option value="study-spots">📚 Study Spots</option>
                                <option value="fitness">💪 Fitness & Health</option>
                                <option value="services">🔧 Services</option>
                                <option value="other">📍 Other</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="favorite-rating">Rating (1-5 stars) *</label>
                        <input type="number" id="favorite-rating" name="rating" min="1" max="5" required>
                        <div id="rating-feedback" class="feedback-message"></div>
                    </div>

                    <div class="form-group">
                        <label for="favorite-notes">Notes (optional)</label>
                        <textarea id="favorite-notes" name="notes" rows="3" placeholder="What makes this place special?"></textarea>
                        <div id="notes-feedback" class="feedback-message"></div>
                    </div>

                    <button type="submit" class="btn">Add to Favorites</button>
                </form>
            </div>

            <!-- Search and Filter -->
            <div class="search-section">
                <h3>🔍 Search & Filter</h3>
                <div class="search-grid">
                    <div class="form-group">
                        <input type="text" id="search-input" placeholder="Search by name or notes...">
                    </div>
                    <div class="form-group">
                        <select id="category-filter">
                            <option value="">All Categories</option>
                            <option value="coffee">☕ Coffee Shops</option>
                            <option value="restaurants">🍽️ Restaurants</option>
                            <option value="parks">🌳 Parks & Recreation</option>
                            <option value="entertainment">🎬 Entertainment</option>
                            <option value="shopping">🛍️ Shopping</option>
                            <option value="study-spots">📚 Study Spots</option>
                            <option value="fitness">💪 Fitness & Health</option>
                            <option value="services">🔧 Services</option>
                            <option value="other">📍 Other</option>
                        </select>
                    </div>
                    <button id="clear-search" class="btn btn-secondary">Clear</button>
                </div>
            </div>

            <!-- Favorites Display -->
            <div class="section">
                <h2>❤️ My Favorites</h2>
                <div id="favorites-container">
                    <div class="empty-state">
                        <div class="empty-state-icon">📍</div>
                        <h3>No favorites yet!</h3>
                        <p>Start building your collection by adding your first favorite place above.</p>
                    </div>
                </div>
            </div>

            <!-- Data Management -->
            <div class="section">
                <h2>💾 Data Management</h2>
                <button id="export-data" class="btn">Export Data</button>
                <button id="clear-all-data" class="btn btn-danger">Clear All Data</button>
                <button id="add-sample-data" class="btn btn-secondary">Add Sample Data</button>
            </div>
        </div>
    </div>

    <script>
        // Global variables
        let favorites = [];
        const STORAGE_KEY = 'favorites-tracker-data';

        // Utility functions
        function generateId() {
            return Date.now();
        }

        function getCurrentDate() {
            return new Date().toISOString().split('T')[0];
        }

        function formatCategoryName(category) {
            const categoryMap = {
                'coffee': '☕ Coffee Shops',
                'restaurants': '🍽️ Restaurants',
                'parks': '🌳 Parks & Recreation',
                'entertainment': '🎬 Entertainment',
                'shopping': '🛍️ Shopping',
                'study-spots': '📚 Study Spots',
                'fitness': '💪 Fitness & Health',
                'services': '🔧 Services',
                'other': '📍 Other'
            };
            return categoryMap[category] || category;
        }

        function createStars(rating) {
            return '⭐'.repeat(rating);
        }

        // localStorage functions
        function saveToLocalStorage() {
            try {
                const dataToSave = {
                    favorites: favorites,
                    lastSaved: new Date().toISOString(),
                    version: '1.0'
                };
                localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
                console.log('Data saved to localStorage');
                return true;
            } catch (error) {
                console.error('Failed to save to localStorage:', error);
                if (error.name === 'QuotaExceededError') {
                    showMessage('Storage quota exceeded. Please delete some favorites.', 'error');
                } else {
                    showMessage('Failed to save data. Changes may be lost.', 'error');
                }
                return false;
            }
        }

        function loadFromLocalStorage() {
            try {
                const savedData = localStorage.getItem(STORAGE_KEY);
                if (savedData) {
                    const parsedData = JSON.parse(savedData);

                    // Handle different data formats
                    if (Array.isArray(parsedData)) {
                        favorites = parsedData;
                    } else if (parsedData.favorites && Array.isArray(parsedData.favorites)) {
                        favorites = parsedData.favorites;
                    }

                    console.log(`Loaded ${favorites.length} favorites from localStorage`);
                    return true;
                }
            } catch (error) {
                console.error('Failed to load from localStorage:', error);
                showMessage('Failed to load saved data.', 'error');
            }

            favorites = [];
            return false;
        }

        function getStorageUsage() {
            try {
                let used = 0;
                for (let key in localStorage) {
                    if (localStorage.hasOwnProperty(key)) {
                        used += localStorage[key].length + key.length;
                    }
                }
                const quota = 5 * 1024 * 1024; // ~5MB
                return Math.round((used / quota) * 100);
            } catch (error) {
                return 0;
            }
        }

        // Message system
        function showMessage(message, type = 'info', duration = 4000) {
            let existingMessage = document.querySelector('.user-message');
            if (existingMessage) {
                existingMessage.remove();
            }

            let messageDiv = document.createElement('div');
            messageDiv.className = `user-message ${type}-message`;
            messageDiv.textContent = message;

            let container = document.querySelector('.main-content');
            container.insertBefore(messageDiv, container.firstChild);

            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, duration);
        }

        // Validation functions
        function validateFavoriteData(formData) {
            let errors = [];

            let name = formData.get('name').trim();
            if (!name) {
                errors.push('Name is required');
            } else if (name.length < 2) {
                errors.push('Name must be at least 2 characters');
            } else if (name.length > 100) {
                errors.push('Name must be less than 100 characters');
            }

            let category = formData.get('category');
            if (!category) {
                errors.push('Category is required');
            }

            let rating = parseInt(formData.get('rating'));
            if (!rating || rating < 1 || rating > 5) {
                errors.push('Rating must be between 1 and 5');
            }

            let notes = formData.get('notes').trim();
            if (notes && notes.length > 500) {
                errors.push('Notes must be less than 500 characters');
            }

            // Check for duplicates
            let existingFavorite = favorites.find(fav =>
                fav.name.toLowerCase() === name.toLowerCase()
            );
            if (existingFavorite) {
                errors.push('A favorite with this name already exists');
            }

            return errors;
        }

        // CRUD operations
        function addFavorite(favoriteData) {
            const newFavorite = {
                id: generateId(),
                name: favoriteData.name,
                category: favoriteData.category,
                rating: favoriteData.rating,
                notes: favoriteData.notes || '',
                dateAdded: getCurrentDate()
            };

            favorites.push(newFavorite);
            saveToLocalStorage();
            return newFavorite;
        }

        function deleteFavorite(id) {
            const index = favorites.findIndex(fav => fav.id === id);
            if (index !== -1) {
                const deleted = favorites.splice(index, 1)[0];
                saveToLocalStorage();
                return deleted;
            }
            return null;
        }

        // Display functions
        function updateStatistics() {
            const totalCount = favorites.length;
            const averageRating = totalCount > 0
                ? (favorites.reduce((sum, fav) => sum + fav.rating, 0) / totalCount).toFixed(1)
                : '0.0';
            const categoriesCount = new Set(favorites.map(fav => fav.category)).size;
            const storageUsage = getStorageUsage();

            document.getElementById('total-count').textContent = totalCount;
            document.getElementById('average-rating').textContent = averageRating;
            document.getElementById('categories-count').textContent = categoriesCount;
            document.getElementById('storage-usage').textContent = storageUsage + '%';
        }

        function displayFavorites(favoritesToShow = favorites) {
            const container = document.getElementById('favorites-container');

            if (favoritesToShow.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">📍</div>
                        <h3>No favorites found!</h3>
                        <p>Try adjusting your search or add a new favorite above.</p>
                    </div>
                `;
                return;
            }

            const html = `
                <div class="favorites-grid">
                    ${favoritesToShow.map(favorite => `
                        <div class="favorite-card">
                            <div class="favorite-header">
                                <div class="favorite-name">${favorite.name}</div>
                                <div class="favorite-rating">${createStars(favorite.rating)}</div>
                            </div>
                            <div class="favorite-category">${formatCategoryName(favorite.category)}</div>
                            ${favorite.notes ? `<div class="favorite-notes">${favorite.notes}</div>` : ''}
                            <div class="favorite-meta">Added on ${favorite.dateAdded}</div>
                            <button class="btn btn-danger" onclick="handleDeleteFavorite(${favorite.id})">
                                Delete
                            </button>
                        </div>
                    `).join('')}
                </div>
            `;

            container.innerHTML = html;
        }

        // Event handlers
        function handleAddFavorite(event) {
            event.preventDefault();

            const formData = new FormData(event.target);
            const errors = validateFavoriteData(formData);

            if (errors.length > 0) {
                showMessage('Please fix these errors:\n' + errors.join(', '), 'error');
                return;
            }

            const favoriteData = {
                name: formData.get('name').trim(),
                category: formData.get('category'),
                rating: parseInt(formData.get('rating')),
                notes: formData.get('notes').trim()
            };

            const newFavorite = addFavorite(favoriteData);

            displayFavorites();
            updateStatistics();
            event.target.reset();
            clearFormFeedback();

            showMessage(`Added "${newFavorite.name}" to your favorites!`, 'success');
        }

        function handleDeleteFavorite(id) {
            const favorite = favorites.find(fav => fav.id === id);
            if (!favorite) return;

            if (confirm(`Are you sure you want to delete "${favorite.name}"?`)) {
                deleteFavorite(id);
                displayFavorites();
                updateStatistics();
                showMessage(`Deleted "${favorite.name}" from your favorites.`, 'info');
            }
        }

        function handleSearch() {
            const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
            const categoryFilter = document.getElementById('category-filter').value;

            let filtered = favorites;

            if (searchTerm) {
                filtered = filtered.filter(fav =>
                    fav.name.toLowerCase().includes(searchTerm) ||
                    fav.notes.toLowerCase().includes(searchTerm)
                );
            }

            if (categoryFilter) {
                filtered = filtered.filter(fav => fav.category === categoryFilter);
            }

            displayFavorites(filtered);
        }

        function handleClearSearch() {
            document.getElementById('search-input').value = '';
            document.getElementById('category-filter').value = '';
            displayFavorites();
        }

        function handleExportData() {
            try {
                const exportData = {
                    favorites: favorites,
                    exportDate: new Date().toISOString(),
                    version: '1.0'
                };

                const dataStr = JSON.stringify(exportData, null, 2);
                const dataBlob = new Blob([dataStr], {type: 'application/json'});

                const link = document.createElement('a');
                link.href = URL.createObjectURL(dataBlob);
                link.download = `favorites-backup-${getCurrentDate()}.json`;
                link.click();

                showMessage('Data exported successfully!', 'success');
            } catch (error) {
                showMessage('Failed to export data.', 'error');
            }
        }

        function handleClearAllData() {
            if (favorites.length === 0) {
                showMessage('No data to clear.', 'info');
                return;
            }

            if (confirm('Are you sure you want to delete ALL favorites? This cannot be undone.')) {
                favorites = [];
                saveToLocalStorage();
                displayFavorites();
                updateStatistics();
                showMessage('All data cleared.', 'info');
            }
        }

        function addSampleData() {
            const sampleFavorites = [
                {
                    name: 'Downtown Coffee House',
                    category: 'coffee',
                    rating: 5,
                    notes: 'Amazing atmosphere for studying, great wifi, excellent coffee'
                },
                {
                    name: 'Riverside Park',
                    category: 'parks',
                    rating: 4,
                    notes: 'Perfect for morning runs, beautiful scenery, peaceful'
                },
                {
                    name: 'Mario\'s Italian Kitchen',
                    category: 'restaurants',
                    rating: 5,
                    notes: 'Best pasta in town, friendly service, cozy atmosphere'
                },
                {
                    name: 'City Library Main Branch',
                    category: 'study-spots',
                    rating: 4,
                    notes: 'Quiet study areas, great resources, free wifi'
                }
            ];

            sampleFavorites.forEach(fav => addFavorite(fav));
            displayFavorites();
            updateStatistics();
            showMessage('Sample data added successfully!', 'success');
        }

        // Form feedback functions
        function clearFormFeedback() {
            document.getElementById('name-feedback').textContent = '';
            document.getElementById('rating-feedback').textContent = '';
            document.getElementById('notes-feedback').textContent = '';
        }

        function setupFormValidation() {
            const nameInput = document.getElementById('favorite-name');
            const ratingInput = document.getElementById('favorite-rating');
            const notesInput = document.getElementById('favorite-notes');

            nameInput.addEventListener('input', function() {
                const feedback = document.getElementById('name-feedback');
                const value = this.value.trim();

                if (value.length === 0) {
                    feedback.textContent = '';
                } else if (value.length < 2) {
                    feedback.textContent = 'Name must be at least 2 characters';
                    feedback.className = 'feedback-message error-message';
                } else if (value.length > 100) {
                    feedback.textContent = 'Name must be less than 100 characters';
                    feedback.className = 'feedback-message error-message';
                } else {
                    feedback.textContent = '✓ Looks good';
                    feedback.className = 'feedback-message success-message';
                }
            });

            ratingInput.addEventListener('input', function() {
                const feedback = document.getElementById('rating-feedback');
                const value = parseInt(this.value);

                if (value >= 1 && value <= 5) {
                    feedback.textContent = createStars(value);
                    feedback.className = 'feedback-message success-message';
                } else {
                    feedback.textContent = 'Rating must be between 1 and 5';
                    feedback.className = 'feedback-message error-message';
                }
            });

            notesInput.addEventListener('input', function() {
                const feedback = document.getElementById('notes-feedback');
                const length = this.value.length;

                if (length > 500) {
                    feedback.textContent = `Too long (${length}/500 characters)`;
                    feedback.className = 'feedback-message error-message';
                } else if (length > 400) {
                    feedback.textContent = `${length}/500 characters`;
                    feedback.className = 'feedback-message warning-message';
                } else {
                    feedback.textContent = '';
                }
            });
        }

        // Initialize application
        function initializeApp() {
            // Load data from localStorage
            loadFromLocalStorage();

            // Set up event listeners
            document.getElementById('add-favorite-form').addEventListener('submit', handleAddFavorite);
            document.getElementById('search-input').addEventListener('input', handleSearch);
            document.getElementById('category-filter').addEventListener('change', handleSearch);
            document.getElementById('clear-search').addEventListener('click', handleClearSearch);
            document.getElementById('export-data').addEventListener('click', handleExportData);
            document.getElementById('clear-all-data').addEventListener('click', handleClearAllData);
            document.getElementById('add-sample-data').addEventListener('click', addSampleData);

            // Set up form validation
            setupFormValidation();

            // Initial display
            displayFavorites();
            updateStatistics();

            console.log('Favorites Tracker initialized successfully');
            console.log('Current favorites:', favorites);
        }

        // Start the application when DOM is loaded
        document.addEventListener('DOMContentLoaded', initializeApp);
    </script>
</body>
</html>
```

## ✅ Project 2 Readiness Checklist

### **localStorage Skills:**
- [ ] Store and retrieve simple data
- [ ] Work with JSON.stringify() and JSON.parse()
- [ ] Handle localStorage errors gracefully
- [ ] Implement data persistence across sessions
- [ ] Check storage availability and usage

### **Advanced Form Handling:**
- [ ] Validate complex form data
- [ ] Provide real-time user feedback
- [ ] Handle form submission properly
- [ ] Prevent duplicate entries
- [ ] Clear forms after successful submission

### **Data Management:**
- [ ] Implement CRUD operations with persistence
- [ ] Search and filter data effectively
- [ ] Export/import functionality
- [ ] Statistics and analytics calculation
- [ ] Data integrity and validation

### **Code Organization:**
- [ ] Modular function structure
- [ ] Proper error handling throughout
- [ ] Clean event listener setup
- [ ] Separation of concerns (data, display, validation)
- [ ] Consistent coding patterns

## 🚀 Project 2 Transition

### **What You've Learned (Labs 12-15):**
1. **LAB12:** Variables, data types, console interaction
2. **LAB13:** Functions, DOM manipulation, event handling
3. **LAB14:** Arrays, objects, complex data structures
4. **LAB15:** localStorage, advanced forms, complete applications

### **What's Next in Project 2:**
- Apply all these skills in a structured 8-session project
- Build a complete favorites tracker application
- Learn advanced debugging and testing techniques
- Practice with real-world development workflows
- Create a portfolio-worthy web application

### **Project 2 Session Overview:**
1. **Sessions 1-2:** JavaScript fundamentals (review + enhancement)
2. **Sessions 3-4:** Data structures and management
3. **Sessions 5-6:** Forms and user interaction
4. **Sessions 7-8:** localStorage and final polish

## 🎉 Congratulations!

You've completed the JavaScript preparation sequence! You now have all the fundamental skills needed for Project 2:

- **Variable management** and data types
- **Function creation** and organization
- **DOM manipulation** and event handling
- **Complex data structures** (arrays of objects)
- **localStorage persistence** and error handling
- **Form validation** and user feedback
- **Complete application architecture**

**You're ready for Project 2: Local Favorites Tracker!**