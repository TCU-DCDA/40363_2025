/**
 * Personal Dashboard Application
 * Main application controller and initialization
 */

class Dashboard {
    constructor() {
        this.widgets = {};
        this.themeManager = null;
        this.isLoading = false;
        this.init();
    }

    /**
     * Initialize the dashboard application
     */
    async init() {
        try {
            this.showLoading('Initializing dashboard...');

            // Initialize theme manager
            this.themeManager = new ThemeManager();

            // Initialize all widgets
            await this.initializeWidgets();

            // Set up global event listeners
            this.setupEventListeners();

            // Load initial data
            await this.loadAllData();

            this.hideLoading();
            this.showSuccess('Dashboard loaded successfully!');

        } catch (error) {
            console.error('Dashboard initialization failed:', error);
            this.showError('Failed to initialize dashboard. Please refresh the page.');
            this.hideLoading();
        }
    }

    /**
     * Initialize all dashboard widgets
     */
    async initializeWidgets() {
        try {
            // Initialize weather widget
            this.widgets.weather = new WeatherWidget('weather-widget');

            // Initialize quotes widget
            this.widgets.quotes = new QuotesWidget('quote-widget');

            // Initialize tasks widget
            this.widgets.tasks = new TasksWidget('tasks-widget');

            // Initialize timer widget
            this.widgets.timer = new TimerWidget('timer-widget');

            console.log('All widgets initialized successfully');
        } catch (error) {
            console.error('Widget initialization failed:', error);
            throw error;
        }
    }

    /**
     * Set up global event listeners
     */
    setupEventListeners() {
        // Theme toggle button
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.themeManager.toggleTheme();
                this.updateThemeToggleText();
            });
        }

        // Refresh data button
        const refreshButton = document.getElementById('refresh-data');
        if (refreshButton) {
            refreshButton.addEventListener('click', () => {
                this.refreshAllData();
            });
        }

        // Widget toggle buttons
        document.querySelectorAll('.widget-toggle').forEach(button => {
            button.addEventListener('click', (e) => {
                this.toggleWidget(e.target.dataset.widget);
            });
        });

        // Error message close button
        const errorClose = document.querySelector('.error-close');
        if (errorClose) {
            errorClose.addEventListener('click', () => {
                this.hideError();
            });
        }

        // Handle browser visibility changes
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                // Page became visible, refresh data if it's been a while
                this.handleVisibilityChange();
            }
        });

        // Handle keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardShortcuts(e);
        });
    }

    /**
     * Load data for all widgets
     */
    async loadAllData() {
        const loadPromises = Object.values(this.widgets).map(widget => {
            if (widget.loadData) {
                return widget.loadData().catch(error => {
                    console.error(`Failed to load data for widget:`, error);
                    return null;
                });
            }
            return Promise.resolve();
        });

        await Promise.allSettled(loadPromises);
    }

    /**
     * Refresh data for all widgets
     */
    async refreshAllData() {
        if (this.isLoading) return;

        try {
            this.isLoading = true;
            this.showLoading('Refreshing dashboard data...');

            await this.loadAllData();

            this.hideLoading();
            this.showSuccess('Dashboard data refreshed!');
        } catch (error) {
            console.error('Failed to refresh data:', error);
            this.showError('Failed to refresh data. Please try again.');
            this.hideLoading();
        } finally {
            this.isLoading = false;
        }
    }

    /**
     * Toggle widget visibility
     */
    toggleWidget(widgetName) {
        const widget = document.getElementById(`${widgetName}-widget`);
        const button = document.querySelector(`[data-widget="${widgetName}"]`);

        if (widget && button) {
            widget.classList.toggle('collapsed');
            button.textContent = widget.classList.contains('collapsed') ? '+' : '−';

            // Save widget state to localStorage
            this.saveWidgetState(widgetName, !widget.classList.contains('collapsed'));
        }
    }

    /**
     * Save widget visibility state
     */
    saveWidgetState(widgetName, isVisible) {
        const widgetStates = JSON.parse(localStorage.getItem('dashboard-widget-states')) || {};
        widgetStates[widgetName] = isVisible;
        localStorage.setItem('dashboard-widget-states', JSON.stringify(widgetStates));
    }

    /**
     * Load and apply saved widget states
     */
    loadWidgetStates() {
        const widgetStates = JSON.parse(localStorage.getItem('dashboard-widget-states')) || {};

        Object.entries(widgetStates).forEach(([widgetName, isVisible]) => {
            if (!isVisible) {
                this.toggleWidget(widgetName);
            }
        });
    }

    /**
     * Handle visibility change (when user returns to tab)
     */
    handleVisibilityChange() {
        const lastRefresh = localStorage.getItem('dashboard-last-refresh');
        const now = Date.now();
        const fiveMinutes = 5 * 60 * 1000;

        if (!lastRefresh || (now - parseInt(lastRefresh)) > fiveMinutes) {
            this.refreshAllData();
            localStorage.setItem('dashboard-last-refresh', now.toString());
        }
    }

    /**
     * Handle keyboard shortcuts
     */
    handleKeyboardShortcuts(e) {
        // Ctrl/Cmd + R: Refresh data
        if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
            e.preventDefault();
            this.refreshAllData();
        }

        // Ctrl/Cmd + D: Toggle dark mode
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            this.themeManager.toggleTheme();
            this.updateThemeToggleText();
        }
    }

    /**
     * Update theme toggle button text
     */
    updateThemeToggleText() {
        const themeText = document.querySelector('#theme-toggle .theme-text');
        const themeIcon = document.querySelector('#theme-toggle .theme-icon');

        if (themeText && themeIcon) {
            const isDark = document.body.classList.contains('theme-dark');
            themeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
            themeIcon.textContent = isDark ? '☀️' : '🌙';
        }
    }

    /**
     * Show loading overlay
     */
    showLoading(message = 'Loading...') {
        const overlay = document.getElementById('loading-overlay');
        const text = overlay?.querySelector('.loading-text');

        if (overlay) {
            if (text) text.textContent = message;
            overlay.classList.remove('hidden');
        }
    }

    /**
     * Hide loading overlay
     */
    hideLoading() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) {
            overlay.classList.add('hidden');
        }
    }

    /**
     * Show error message
     */
    showError(message) {
        const errorDiv = document.getElementById('error-message');
        const errorText = errorDiv?.querySelector('.error-text');

        if (errorDiv && errorText) {
            errorText.textContent = message;
            errorDiv.classList.remove('hidden');

            // Auto-hide after 5 seconds
            setTimeout(() => this.hideError(), 5000);
        }
    }

    /**
     * Hide error message
     */
    hideError() {
        const errorDiv = document.getElementById('error-message');
        if (errorDiv) {
            errorDiv.classList.add('hidden');
        }
    }

    /**
     * Show success message
     */
    showSuccess(message) {
        const successDiv = document.getElementById('success-message');
        const successText = successDiv?.querySelector('.success-text');

        if (successDiv && successText) {
            successText.textContent = message;
            successDiv.classList.remove('hidden');

            // Auto-hide after 3 seconds
            setTimeout(() => {
                successDiv.classList.add('hidden');
            }, 3000);
        }
    }

    /**
     * Get widget instance by name
     */
    getWidget(name) {
        return this.widgets[name] || null;
    }

    /**
     * Add custom widget
     */
    addWidget(name, widget) {
        this.widgets[name] = widget;
    }

    /**
     * Remove widget
     */
    removeWidget(name) {
        if (this.widgets[name]) {
            if (this.widgets[name].destroy) {
                this.widgets[name].destroy();
            }
            delete this.widgets[name];
        }
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create global dashboard instance
    window.dashboard = new Dashboard();

    console.log('Personal Dashboard initialized successfully');
});

// Handle page unload
window.addEventListener('beforeunload', () => {
    // Save last refresh timestamp
    localStorage.setItem('dashboard-last-refresh', Date.now().toString());
});

// Export dashboard class for testing or extension
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Dashboard;
}