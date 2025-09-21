/**
 * Theme Manager
 * Handles light/dark theme switching and persistence
 */

class ThemeManager {
    constructor() {
        this.currentTheme = 'light';
        this.storageKey = 'dashboard-theme';
        this.init();
    }

    /**
     * Initialize theme manager
     */
    init() {
        // Load saved theme or detect system preference
        this.loadSavedTheme();

        // Listen for system theme changes
        this.setupSystemThemeListener();

        // Apply initial theme
        this.applyTheme(this.currentTheme);

        console.log(`Theme manager initialized with theme: ${this.currentTheme}`);
    }

    /**
     * Load theme from localStorage or system preference
     */
    loadSavedTheme() {
        const savedTheme = localStorage.getItem(this.storageKey);

        if (savedTheme && this.isValidTheme(savedTheme)) {
            this.currentTheme = savedTheme;
        } else {
            // Detect system preference
            this.currentTheme = this.getSystemTheme();
        }
    }

    /**
     * Get system theme preference
     * @returns {string} - 'light' or 'dark'
     */
    getSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    /**
     * Set up listener for system theme changes
     */
    setupSystemThemeListener() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

            // Listen for changes
            mediaQuery.addEventListener('change', (e) => {
                // Only auto-switch if user hasn't manually set a theme
                const savedTheme = localStorage.getItem(this.storageKey);
                if (!savedTheme) {
                    const newTheme = e.matches ? 'dark' : 'light';
                    this.setTheme(newTheme, false); // false = don't save to localStorage
                }
            });
        }
    }

    /**
     * Toggle between light and dark themes
     */
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme, true); // true = save to localStorage
    }

    /**
     * Set specific theme
     * @param {string} theme - The theme to set ('light' or 'dark')
     * @param {boolean} save - Whether to save to localStorage
     */
    setTheme(theme, save = true) {
        if (!this.isValidTheme(theme)) {
            console.warn(`Invalid theme: ${theme}. Using default.`);
            theme = 'light';
        }

        this.currentTheme = theme;
        this.applyTheme(theme);

        if (save) {
            localStorage.setItem(this.storageKey, theme);
        }

        // Dispatch theme change event
        this.dispatchThemeChangeEvent(theme);

        console.log(`Theme changed to: ${theme}`);
    }

    /**
     * Apply theme to the document
     * @param {string} theme - The theme to apply
     */
    applyTheme(theme) {
        const body = document.body;

        // Remove existing theme classes
        body.classList.remove('theme-light', 'theme-dark', 'theme-auto');

        // Add new theme class
        body.classList.add(`theme-${theme}`);

        // Update meta theme-color for mobile browsers
        this.updateMetaThemeColor(theme);

        // Update any theme-specific elements
        this.updateThemeElements(theme);
    }

    /**
     * Update meta theme-color for mobile browsers
     * @param {string} theme - Current theme
     */
    updateMetaThemeColor(theme) {
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');

        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }

        // Set appropriate color based on theme
        const color = theme === 'dark' ? '#2d3748' : '#ffffff';
        metaThemeColor.content = color;
    }

    /**
     * Update theme-specific elements
     * @param {string} theme - Current theme
     */
    updateThemeElements(theme) {
        // Update theme toggle button text and icon
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('.theme-icon');
            const text = themeToggle.querySelector('.theme-text');

            if (icon && text) {
                if (theme === 'dark') {
                    icon.textContent = '☀️';
                    text.textContent = 'Light';
                } else {
                    icon.textContent = '🌙';
                    text.textContent = 'Dark';
                }
            }
        }

        // Update any other theme-dependent elements
        this.updateFavicon(theme);
    }

    /**
     * Update favicon based on theme
     * @param {string} theme - Current theme
     */
    updateFavicon(theme) {
        // This would require having different favicon files
        // For now, we'll just log the intent
        console.log(`Favicon could be updated for ${theme} theme`);
    }

    /**
     * Dispatch custom theme change event
     * @param {string} theme - The new theme
     */
    dispatchThemeChangeEvent(theme) {
        const event = new CustomEvent('themeChange', {
            detail: {
                theme: theme,
                timestamp: Date.now()
            }
        });

        document.dispatchEvent(event);
    }

    /**
     * Get current theme
     * @returns {string} - Current theme name
     */
    getCurrentTheme() {
        return this.currentTheme;
    }

    /**
     * Check if theme is valid
     * @param {string} theme - Theme to validate
     * @returns {boolean} - True if valid
     */
    isValidTheme(theme) {
        return ['light', 'dark', 'auto'].includes(theme);
    }

    /**
     * Get available themes
     * @returns {Array<string>} - Array of available theme names
     */
    getAvailableThemes() {
        return ['light', 'dark'];
    }

    /**
     * Reset theme to system preference
     */
    resetToSystemTheme() {
        localStorage.removeItem(this.storageKey);
        const systemTheme = this.getSystemTheme();
        this.setTheme(systemTheme, false);
    }

    /**
     * Get theme preference source
     * @returns {string} - 'saved', 'system', or 'default'
     */
    getThemeSource() {
        const savedTheme = localStorage.getItem(this.storageKey);
        if (savedTheme) return 'saved';

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'system';
        }

        return 'default';
    }

    /**
     * Export theme settings
     * @returns {Object} - Theme configuration
     */
    exportSettings() {
        return {
            currentTheme: this.currentTheme,
            source: this.getThemeSource(),
            systemTheme: this.getSystemTheme(),
            savedTheme: localStorage.getItem(this.storageKey),
            timestamp: Date.now()
        };
    }

    /**
     * Import theme settings
     * @param {Object} settings - Theme configuration to import
     */
    importSettings(settings) {
        if (settings && settings.currentTheme && this.isValidTheme(settings.currentTheme)) {
            this.setTheme(settings.currentTheme, true);
            console.log('Theme settings imported successfully');
        } else {
            console.warn('Invalid theme settings provided');
        }
    }

    /**
     * Clean up theme manager
     */
    destroy() {
        // Remove event listeners if needed
        console.log('Theme manager destroyed');
    }
}

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.ThemeManager = ThemeManager;
}

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeManager;
}