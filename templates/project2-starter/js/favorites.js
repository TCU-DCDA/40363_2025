/**
 * Favorites Management
 * Functions for managing the favorites data and operations
 */

// Global array to store all favorites
let favorites = [];

// localStorage key for saving data
const STORAGE_KEY = 'local-favorites-data';

/**
 * Add a new favorite to the favorites array
 * @param {Object} favorite - The favorite object to add
 */
function addFavorite(favorite) {
    favorites.push(favorite);
    console.log('Added favorite:', favorite);
}

/**
 * Delete a favorite by ID
 * @param {number} favoriteId - ID of the favorite to delete
 * @returns {boolean} - True if deleted, false if not found
 */
function deleteFavorite(favoriteId) {
    const index = favorites.findIndex(favorite => favorite.id === favoriteId);
    if (index !== -1) {
        const deleted = favorites.splice(index, 1)[0];
        console.log('Deleted favorite:', deleted);
        return true;
    }
    return false;
}

/**
 * Get a favorite by ID
 * @param {number} favoriteId - ID of the favorite to find
 * @returns {Object|null} - The favorite object or null if not found
 */
function getFavoriteById(favoriteId) {
    return favorites.find(favorite => favorite.id === favoriteId) || null;
}

/**
 * Update a favorite by ID
 * @param {number} favoriteId - ID of the favorite to update
 * @param {Object} updatedData - New data for the favorite
 * @returns {boolean} - True if updated, false if not found
 */
function updateFavorite(favoriteId, updatedData) {
    const index = favorites.findIndex(favorite => favorite.id === favoriteId);
    if (index !== -1) {
        favorites[index] = { ...favorites[index], ...updatedData };
        console.log('Updated favorite:', favorites[index]);
        return true;
    }
    return false;
}

/**
 * Clear all favorites
 */
function clearAllFavorites() {
    favorites.length = 0;
    console.log('All favorites cleared');
}

/**
 * Get favorites by category
 * @param {string} category - Category to filter by
 * @returns {Array} - Array of favorites in the specified category
 */
function getFavoritesByCategory(category) {
    return favorites.filter(favorite => favorite.category === category);
}

/**
 * Get all unique categories
 * @returns {Array} - Array of unique category names
 */
function getAllCategories() {
    const categories = favorites.map(favorite => favorite.category);
    return [...new Set(categories)].sort();
}

/**
 * Save favorites to localStorage
 */
function saveFavoritesToStorage() {
    try {
        const dataToSave = {
            favorites: favorites,
            lastSaved: new Date().toISOString(),
            version: '1.0'
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
        console.log('Favorites saved to localStorage');

    } catch (error) {
        console.error('Failed to save to localStorage:', error);

        // Check if it's a quota exceeded error
        if (error.name === 'QuotaExceededError') {
            showMessage('Storage quota exceeded. Please delete some favorites.', 'error');
        } else {
            showMessage('Failed to save favorites. Changes may be lost.', 'error');
        }
    }
}

/**
 * Load favorites from localStorage
 */
function loadFavoritesFromStorage() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);

        if (savedData) {
            const parsedData = JSON.parse(savedData);

            // Handle different data formats for backwards compatibility
            if (Array.isArray(parsedData)) {
                // Old format: just an array of favorites
                favorites = parsedData;
            } else if (parsedData.favorites && Array.isArray(parsedData.favorites)) {
                // New format: object with metadata
                favorites = parsedData.favorites;
            }

            console.log(`Loaded ${favorites.length} favorites from localStorage`);
        } else {
            console.log('No saved favorites found, starting with empty array');
        }

    } catch (error) {
        console.error('Failed to load from localStorage:', error);
        showMessage('Failed to load saved favorites.', 'error');

        // Initialize with empty array if loading fails
        favorites = [];
    }
}

/**
 * Display favorites in the DOM
 * @param {Array} favoritesToDisplay - Array of favorites to display
 */
function displayFavorites(favoritesToDisplay) {
    const favoritesContainer = document.getElementById('favorites-list');
    const emptyState = document.getElementById('empty-state');

    if (!favoritesContainer) {
        console.error('Favorites container not found');
        return;
    }

    // Clear existing content
    favoritesContainer.innerHTML = '';

    // Show empty state if no favorites
    if (favoritesToDisplay.length === 0) {
        if (favorites.length === 0) {
            // No favorites at all
            favoritesContainer.appendChild(createEmptyStateElement());
        } else {
            // Favorites exist but filtered out
            favoritesContainer.appendChild(createNoResultsElement());
        }
        return;
    }

    // Create and append favorite cards
    favoritesToDisplay.forEach(favorite => {
        const favoriteCard = createFavoriteCard(favorite);
        favoritesContainer.appendChild(favoriteCard);
    });

    console.log(`Displayed ${favoritesToDisplay.length} favorites`);
}

/**
 * Create a DOM element for a single favorite
 * @param {Object} favorite - The favorite object
 * @returns {HTMLElement} - The DOM element for the favorite
 */
function createFavoriteCard(favorite) {
    const card = document.createElement('div');
    card.className = 'favorite-card';
    card.dataset.id = favorite.id;

    // Create rating stars
    const starsHtml = '⭐'.repeat(favorite.rating);

    // Format category for display
    const categoryDisplay = formatCategoryName(favorite.category);

    // Format date for display
    const dateDisplay = formatDate(favorite.dateAdded);

    card.innerHTML = `
        <div class="favorite-header">
            <h3 class="favorite-name">${escapeHtml(favorite.name)}</h3>
            <div class="favorite-rating" title="${favorite.rating} out of 5 stars">
                ${starsHtml}
            </div>
        </div>

        <div class="favorite-category">${categoryDisplay}</div>

        ${favorite.notes ? `<div class="favorite-notes">${escapeHtml(favorite.notes)}</div>` : ''}

        <div class="favorite-meta">
            <span class="favorite-date">Added ${dateDisplay}</span>
            <div class="favorite-actions">
                <button
                    class="btn btn-danger btn-small"
                    onclick="handleDeleteFavorite(${favorite.id})"
                    title="Delete this favorite"
                >
                    Delete
                </button>
            </div>
        </div>
    `;

    return card;
}

/**
 * Create empty state element
 * @returns {HTMLElement} - Empty state element
 */
function createEmptyStateElement() {
    const emptyDiv = document.createElement('div');
    emptyDiv.className = 'empty-state';
    emptyDiv.innerHTML = `
        <div class="empty-icon">📍</div>
        <h3>No favorites yet!</h3>
        <p>Start building your collection by adding your first favorite place above.</p>
    `;
    return emptyDiv;
}

/**
 * Create no results element
 * @returns {HTMLElement} - No results element
 */
function createNoResultsElement() {
    const noResultsDiv = document.createElement('div');
    noResultsDiv.className = 'empty-state';
    noResultsDiv.innerHTML = `
        <div class="empty-icon">🔍</div>
        <h3>No matches found</h3>
        <p>Try adjusting your search or filter criteria.</p>
    `;
    return noResultsDiv;
}

/**
 * Format category name for display
 * @param {string} category - Category slug
 * @returns {string} - Formatted category name
 */
function formatCategoryName(category) {
    const categoryMap = {
        'coffee': 'Coffee Shops',
        'restaurants': 'Restaurants',
        'parks': 'Parks & Recreation',
        'entertainment': 'Entertainment',
        'shopping': 'Shopping',
        'study-spots': 'Study Spots',
        'fitness': 'Fitness & Health',
        'services': 'Services',
        'other': 'Other'
    };

    return categoryMap[category] || category;
}

/**
 * Format date for display
 * @param {string} dateString - Date string in YYYY-MM-DD format
 * @returns {string} - Formatted date string
 */
function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) return 'today';
        if (diffDays === 2) return 'yesterday';
        if (diffDays <= 7) return `${diffDays - 1} days ago`;
        if (diffDays <= 30) return `${Math.floor(diffDays / 7)} weeks ago`;

        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    } catch (error) {
        return dateString;
    }
}

/**
 * Escape HTML to prevent XSS attacks
 * @param {string} text - Text to escape
 * @returns {string} - Escaped text
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Sort favorites by different criteria
 * @param {string} sortBy - Sort criteria ('name', 'rating', 'date', 'category')
 * @param {string} order - Sort order ('asc' or 'desc')
 * @returns {Array} - Sorted array of favorites
 */
function sortFavorites(sortBy = 'date', order = 'desc') {
    const sortedFavorites = [...favorites];

    sortedFavorites.sort((a, b) => {
        let aVal, bVal;

        switch (sortBy) {
            case 'name':
                aVal = a.name.toLowerCase();
                bVal = b.name.toLowerCase();
                break;
            case 'rating':
                aVal = a.rating;
                bVal = b.rating;
                break;
            case 'date':
                aVal = new Date(a.dateAdded);
                bVal = new Date(b.dateAdded);
                break;
            case 'category':
                aVal = a.category.toLowerCase();
                bVal = b.category.toLowerCase();
                break;
            default:
                return 0;
        }

        if (aVal < bVal) return order === 'asc' ? -1 : 1;
        if (aVal > bVal) return order === 'asc' ? 1 : -1;
        return 0;
    });

    return sortedFavorites;
}

/**
 * Get sample data for testing (call this function in console to add test data)
 */
function addSampleData() {
    const sampleFavorites = [
        {
            id: 1,
            name: "Addison Coffee Roasters",
            category: "coffee",
            rating: 5,
            notes: "Amazing cold brew and perfect atmosphere for studying. Free wifi and plenty of outlets.",
            dateAdded: "2024-09-15"
        },
        {
            id: 2,
            name: "Fort Worth Botanic Garden",
            category: "parks",
            rating: 4,
            notes: "Beautiful gardens with peaceful walking trails. Great for photography and relaxation.",
            dateAdded: "2024-09-10"
        },
        {
            id: 3,
            name: "Joe T. Garcia's",
            category: "restaurants",
            rating: 5,
            notes: "Iconic Fort Worth Tex-Mex restaurant. Cash only, huge portions, amazing fajitas!",
            dateAdded: "2024-09-08"
        },
        {
            id: 4,
            name: "Sundance Square",
            category: "entertainment",
            rating: 4,
            notes: "Downtown entertainment district with shops, restaurants, and events. Great for weekend visits.",
            dateAdded: "2024-09-05"
        }
    ];

    sampleFavorites.forEach(favorite => {
        addFavorite(favorite);
    });

    saveFavoritesToStorage();
    displayAllFavorites();
    updateFavoritesCount();
    updateClearAllButton();

    showMessage('Sample data added successfully!', 'success');
    console.log('Sample data added:', sampleFavorites);
}

// Make sample data function globally available for testing
window.addSampleData = addSampleData;

console.log('Favorites.js loaded successfully');