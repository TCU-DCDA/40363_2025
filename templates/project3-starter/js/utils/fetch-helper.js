/**
 * Fetch Helper Utilities
 * Provides convenient methods for loading JSON data with error handling
 */

class FetchHelper {
    constructor() {
        this.cache = new Map();
        this.defaultTimeout = 5000; // 5 seconds
    }

    /**
     * Load JSON data from a URL with caching and error handling
     * @param {string} url - The URL to fetch data from
     * @param {Object} options - Fetch options
     * @returns {Promise<Object>} - The parsed JSON data
     */
    async loadJSON(url, options = {}) {
        const {
            useCache = true,
            timeout = this.defaultTimeout,
            retries = 1
        } = options;

        // Check cache first
        if (useCache && this.cache.has(url)) {
            const cached = this.cache.get(url);
            const now = Date.now();

            // Cache is valid for 5 minutes
            if (now - cached.timestamp < 5 * 60 * 1000) {
                console.log(`Loading ${url} from cache`);
                return cached.data;
            } else {
                this.cache.delete(url);
            }
        }

        let lastError;

        for (let attempt = 0; attempt <= retries; attempt++) {
            try {
                console.log(`Fetching ${url} (attempt ${attempt + 1})`);

                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), timeout);

                const response = await fetch(url, {
                    signal: controller.signal,
                    ...options
                });

                clearTimeout(timeoutId);

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();

                // Cache the successful response
                if (useCache) {
                    this.cache.set(url, {
                        data,
                        timestamp: Date.now()
                    });
                }

                return data;

            } catch (error) {
                lastError = error;
                console.warn(`Fetch attempt ${attempt + 1} failed:`, error.message);

                if (attempt < retries) {
                    // Wait before retrying (exponential backoff)
                    await this.delay(Math.pow(2, attempt) * 1000);
                }
            }
        }

        // All attempts failed
        throw new Error(`Failed to load ${url}: ${lastError.message}`);
    }

    /**
     * Load multiple JSON files concurrently
     * @param {Array<string>} urls - Array of URLs to fetch
     * @param {Object} options - Fetch options
     * @returns {Promise<Array>} - Array of loaded data (null for failed requests)
     */
    async loadMultipleJSON(urls, options = {}) {
        const promises = urls.map(async (url) => {
            try {
                return await this.loadJSON(url, options);
            } catch (error) {
                console.error(`Failed to load ${url}:`, error);
                return null;
            }
        });

        return Promise.all(promises);
    }

    /**
     * Check if a URL is available
     * @param {string} url - The URL to check
     * @returns {Promise<boolean>} - True if URL is accessible
     */
    async checkURL(url) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);

            const response = await fetch(url, {
                method: 'HEAD',
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            return response.ok;
        } catch (error) {
            return false;
        }
    }

    /**
     * Clear all cached data
     */
    clearCache() {
        this.cache.clear();
        console.log('Fetch cache cleared');
    }

    /**
     * Clear cached data for specific URL
     * @param {string} url - The URL to remove from cache
     */
    clearCacheForURL(url) {
        if (this.cache.has(url)) {
            this.cache.delete(url);
            console.log(`Cache cleared for ${url}`);
        }
    }

    /**
     * Get cache statistics
     * @returns {Object} - Cache stats
     */
    getCacheStats() {
        return {
            size: this.cache.size,
            urls: Array.from(this.cache.keys()),
            totalSize: this.calculateCacheSize()
        };
    }

    /**
     * Calculate approximate cache size
     * @returns {number} - Size in bytes (approximate)
     */
    calculateCacheSize() {
        let size = 0;
        for (const [url, cached] of this.cache) {
            size += url.length + JSON.stringify(cached.data).length;
        }
        return size;
    }

    /**
     * Utility function to create a delay
     * @param {number} ms - Milliseconds to delay
     * @returns {Promise} - Promise that resolves after delay
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Create a fetch request with better error handling
     * @param {string} url - The URL to fetch
     * @param {Object} options - Fetch options
     * @returns {Promise<Response>} - The fetch response
     */
    async fetchWithErrorHandling(url, options = {}) {
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new FetchError(
                    `HTTP ${response.status}: ${response.statusText}`,
                    response.status,
                    url
                );
            }

            return response;
        } catch (error) {
            if (error.name === 'AbortError') {
                throw new FetchError('Request timeout', 408, url);
            } else if (error.name === 'TypeError') {
                throw new FetchError('Network error or CORS issue', 0, url);
            }
            throw error;
        }
    }
}

/**
 * Custom error class for fetch operations
 */
class FetchError extends Error {
    constructor(message, status, url) {
        super(message);
        this.name = 'FetchError';
        this.status = status;
        this.url = url;
    }
}

// Create global instance
const fetchHelper = new FetchHelper();

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.fetchHelper = fetchHelper;
    window.FetchHelper = FetchHelper;
    window.FetchError = FetchError;
}

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FetchHelper, FetchError, fetchHelper };
}