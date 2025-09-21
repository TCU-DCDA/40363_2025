/**
 * My Local Favorites - Main Application
 * Entry point and application initialization
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Local Favorites app starting...');

    // Initialize the application
    initializeApp();
});

/**
 * Initialize the entire application
 */
function initializeApp() {
    try {
        // Load existing favorites from localStorage
        loadFavoritesFromStorage();

        // Set up all event listeners
        setupEventListeners();

        // Display the favorites
        displayAllFavorites();

        // Update UI state
        updateFavoritesCount();
        updateClearAllButton();

        console.log('Application initialized successfully');
        showMessage('Welcome to Local Favorites!', 'info');

    } catch (error) {
        console.error('Failed to initialize app:', error);
        showMessage('Failed to load application. Please refresh the page.', 'error');
    }
}

/**
 * Set up all event listeners for the application
 */
function setupEventListeners() {
    // Add favorite form submission
    const addForm = document.getElementById('add-favorite-form');
    if (addForm) {
        addForm.addEventListener('submit', handleAddFavorite);
    }

    // Search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Clear search button
    const clearSearchBtn = document.getElementById('clear-search');
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', handleClearSearch);
    }

    // Category filter
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', handleCategoryFilter);
    }

    // Clear all button
    const clearAllBtn = document.getElementById('clear-all-btn');
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', handleClearAll);
    }

    // Modal event listeners
    setupModalEventListeners();

    console.log('Event listeners set up successfully');
}

/**
 * Handle adding a new favorite
 * @param {Event} event - Form submission event
 */
function handleAddFavorite(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    try {
        // Get form data
        const formData = new FormData(event.target);
        const newFavorite = {
            id: generateUniqueId(),
            name: formData.get('name').trim(),
            category: formData.get('category'),
            rating: parseInt(formData.get('rating')),
            notes: formData.get('notes').trim(),
            dateAdded: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
        };

        // Validate the data
        if (!validateFavorite(newFavorite)) {
            return; // Validation failed, error message already shown
        }

        // Add to favorites array
        addFavorite(newFavorite);

        // Save to localStorage
        saveFavoritesToStorage();

        // Update display
        displayAllFavorites();
        updateFavoritesCount();
        updateClearAllButton();

        // Clear the form
        event.target.reset();

        // Show success message
        showMessage(`Added "${newFavorite.name}" to your favorites!`, 'success');

        console.log('Added new favorite:', newFavorite);

    } catch (error) {
        console.error('Error adding favorite:', error);
        showMessage('Failed to add favorite. Please try again.', 'error');
    }
}

/**
 * Validate favorite data before adding
 * @param {Object} favorite - The favorite object to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateFavorite(favorite) {
    // Check required fields
    if (!favorite.name) {
        showMessage('Please enter a name for the place.', 'error');
        return false;
    }

    if (!favorite.category) {
        showMessage('Please select a category.', 'error');
        return false;
    }

    // Check if name already exists (case-insensitive)
    const existingFavorite = favorites.find(fav =>
        fav.name.toLowerCase() === favorite.name.toLowerCase()
    );

    if (existingFavorite) {
        showMessage('A favorite with this name already exists.', 'error');
        return false;
    }

    return true;
}

/**
 * Handle search input
 * @param {Event} event - Input event
 */
function handleSearch(event) {
    const searchTerm = event.target.value.trim();
    searchFavorites(searchTerm);
}

/**
 * Handle clearing search
 */
function handleClearSearch() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');

    if (searchInput) {
        searchInput.value = '';
    }

    if (categoryFilter) {
        categoryFilter.value = '';
    }

    displayAllFavorites();
    showMessage('Search and filters cleared.', 'info');
}

/**
 * Handle category filter change
 * @param {Event} event - Change event
 */
function handleCategoryFilter(event) {
    const selectedCategory = event.target.value;
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput ? searchInput.value.trim() : '';

    // Apply both search and category filter
    filterFavorites(searchTerm, selectedCategory);
}

/**
 * Handle clearing all favorites
 */
function handleClearAll() {
    if (favorites.length === 0) {
        showMessage('No favorites to clear.', 'info');
        return;
    }

    showConfirmationModal(
        'Clear All Favorites',
        'Are you sure you want to delete all your favorites? This action cannot be undone.',
        function() {
            // Clear all favorites
            clearAllFavorites();
            saveFavoritesToStorage();
            displayAllFavorites();
            updateFavoritesCount();
            updateClearAllButton();

            showMessage('All favorites have been cleared.', 'info');
            console.log('All favorites cleared');
        }
    );
}

/**
 * Handle deleting a single favorite
 * @param {number} favoriteId - ID of the favorite to delete
 */
function handleDeleteFavorite(favoriteId) {
    const favorite = getFavoriteById(favoriteId);
    if (!favorite) {
        showMessage('Favorite not found.', 'error');
        return;
    }

    showConfirmationModal(
        'Delete Favorite',
        `Are you sure you want to delete "${favorite.name}"?`,
        function() {
            deleteFavorite(favoriteId);
            saveFavoritesToStorage();
            displayAllFavorites();
            updateFavoritesCount();
            updateClearAllButton();

            showMessage(`Deleted "${favorite.name}" from your favorites.`, 'info');
            console.log('Deleted favorite:', favorite);
        }
    );
}

/**
 * Update the favorites count display
 */
function updateFavoritesCount() {
    const countElement = document.getElementById('favorites-count');
    if (countElement) {
        const count = favorites.length;
        countElement.textContent = `${count} ${count === 1 ? 'favorite' : 'favorites'}`;
    }
}

/**
 * Update the clear all button visibility
 */
function updateClearAllButton() {
    const clearAllBtn = document.getElementById('clear-all-btn');
    if (clearAllBtn) {
        clearAllBtn.style.display = favorites.length > 0 ? 'inline-flex' : 'none';
    }
}

/**
 * Display all favorites (no filtering)
 */
function displayAllFavorites() {
    displayFavorites(favorites);
}

/**
 * Search favorites by name, category, or notes
 * @param {string} searchTerm - Term to search for
 */
function searchFavorites(searchTerm) {
    const categoryFilter = document.getElementById('category-filter');
    const selectedCategory = categoryFilter ? categoryFilter.value : '';

    filterFavorites(searchTerm, selectedCategory);
}

/**
 * Filter favorites by search term and/or category
 * @param {string} searchTerm - Term to search for
 * @param {string} category - Category to filter by
 */
function filterFavorites(searchTerm = '', category = '') {
    let filteredFavorites = [...favorites];

    // Apply search filter
    if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        filteredFavorites = filteredFavorites.filter(favorite =>
            favorite.name.toLowerCase().includes(searchLower) ||
            favorite.category.toLowerCase().includes(searchLower) ||
            (favorite.notes && favorite.notes.toLowerCase().includes(searchLower))
        );
    }

    // Apply category filter
    if (category) {
        filteredFavorites = filteredFavorites.filter(favorite =>
            favorite.category === category
        );
    }

    displayFavorites(filteredFavorites);

    // Show message if no results
    if (filteredFavorites.length === 0 && favorites.length > 0) {
        showMessage('No favorites match your search criteria.', 'info');
    }
}

/**
 * Generate a unique ID for new favorites
 * @returns {number} - Unique ID based on timestamp
 */
function generateUniqueId() {
    return Date.now();
}

/**
 * Get application statistics
 * @returns {Object} - Statistics about the application
 */
function getAppStats() {
    const stats = {
        totalFavorites: favorites.length,
        categories: {},
        averageRating: 0,
        oldestDate: null,
        newestDate: null
    };

    if (favorites.length === 0) {
        return stats;
    }

    let totalRating = 0;
    const dates = [];

    favorites.forEach(favorite => {
        // Count by category
        stats.categories[favorite.category] = (stats.categories[favorite.category] || 0) + 1;

        // Sum ratings
        totalRating += favorite.rating;

        // Collect dates
        dates.push(new Date(favorite.dateAdded));
    });

    // Calculate average rating
    stats.averageRating = (totalRating / favorites.length).toFixed(1);

    // Find date range
    if (dates.length > 0) {
        dates.sort((a, b) => a - b);
        stats.oldestDate = dates[0].toISOString().split('T')[0];
        stats.newestDate = dates[dates.length - 1].toISOString().split('T')[0];
    }

    return stats;
}

/**
 * Export favorites data as JSON
 * @returns {string} - JSON string of favorites data
 */
function exportFavorites() {
    try {
        const exportData = {
            favorites: favorites,
            exportDate: new Date().toISOString(),
            version: '1.0',
            stats: getAppStats()
        };

        return JSON.stringify(exportData, null, 2);
    } catch (error) {
        console.error('Error exporting favorites:', error);
        return null;
    }
}

/**
 * Log application status (for debugging)
 */
function logAppStatus() {
    console.log('=== Local Favorites App Status ===');
    console.log('Total favorites:', favorites.length);
    console.log('Statistics:', getAppStats());
    console.log('Favorites array:', favorites);
    console.log('localStorage data:', localStorage.getItem(STORAGE_KEY));
    console.log('===================================');
}

// Make some functions globally available for debugging
window.logAppStatus = logAppStatus;
window.exportFavorites = exportFavorites;
window.getAppStats = getAppStats;

console.log('App.js loaded successfully');