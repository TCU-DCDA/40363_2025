/**
 * Utility Functions
 * Helper functions for UI, messaging, and common operations
 */

/**
 * Show a message to the user
 * @param {string} message - Message text to display
 * @param {string} type - Message type: 'success', 'error', 'info', 'warning'
 * @param {number} duration - How long to show message in milliseconds (default: 4000)
 */
function showMessage(message, type = 'info', duration = 4000) {
    const messageContainer = document.getElementById('message-container');
    if (!messageContainer) {
        console.warn('Message container not found');
        return;
    }

    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `message message-${type}`;
    messageElement.textContent = message;

    // Add to container
    messageContainer.appendChild(messageElement);

    // Auto-remove after duration
    setTimeout(() => {
        if (messageElement.parentNode) {
            messageElement.parentNode.removeChild(messageElement);
        }
    }, duration);

    console.log(`Message (${type}):`, message);
}

/**
 * Set up modal event listeners
 */
function setupModalEventListeners() {
    const modal = document.getElementById('confirmation-modal');
    const confirmBtn = document.getElementById('modal-confirm');
    const cancelBtn = document.getElementById('modal-cancel');
    const backdrop = modal?.querySelector('.modal-backdrop');

    if (!modal || !confirmBtn || !cancelBtn) {
        console.warn('Modal elements not found');
        return;
    }

    // Cancel button
    cancelBtn.addEventListener('click', hideConfirmationModal);

    // Backdrop click
    if (backdrop) {
        backdrop.addEventListener('click', hideConfirmationModal);
    }

    // Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
            hideConfirmationModal();
        }
    });

    console.log('Modal event listeners set up');
}

/**
 * Show confirmation modal
 * @param {string} title - Modal title
 * @param {string} message - Modal message
 * @param {Function} onConfirm - Callback function when user confirms
 */
function showConfirmationModal(title, message, onConfirm) {
    const modal = document.getElementById('confirmation-modal');
    const titleElement = modal?.querySelector('.modal-title');
    const messageElement = modal?.querySelector('.modal-message');
    const confirmBtn = document.getElementById('modal-confirm');

    if (!modal || !titleElement || !messageElement || !confirmBtn) {
        console.error('Modal elements not found');
        return;
    }

    // Set content
    titleElement.textContent = title;
    messageElement.textContent = message;

    // Remove any existing confirm listeners
    const newConfirmBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);

    // Add new confirm listener
    newConfirmBtn.addEventListener('click', function() {
        hideConfirmationModal();
        if (typeof onConfirm === 'function') {
            onConfirm();
        }
    });

    // Show modal
    modal.classList.remove('hidden');

    // Focus on confirm button for accessibility
    setTimeout(() => newConfirmBtn.focus(), 100);
}

/**
 * Hide confirmation modal
 */
function hideConfirmationModal() {
    const modal = document.getElementById('confirmation-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

/**
 * Debounce function to limit how often a function can be called
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit how often a function can be called
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Format text for URL slug
 * @param {string} text - Text to convert
 * @returns {string} - URL-friendly slug
 */
function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Capitalize first letter of each word
 * @param {string} text - Text to capitalize
 * @returns {string} - Capitalized text
 */
function capitalizeWords(text) {
    return text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Check if localStorage is available
 * @returns {boolean} - True if localStorage is available
 */
function isLocalStorageAvailable() {
    try {
        const test = 'localStorage-test';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (error) {
        console.warn('localStorage not available:', error);
        return false;
    }
}

/**
 * Get localStorage usage statistics
 * @returns {Object} - Storage usage info
 */
function getStorageInfo() {
    if (!isLocalStorageAvailable()) {
        return { available: false };
    }

    let used = 0;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            used += localStorage[key].length + key.length;
        }
    }

    // Rough estimate of localStorage quota (varies by browser)
    const quota = 5 * 1024 * 1024; // ~5MB

    return {
        available: true,
        used: used,
        quota: quota,
        usedPercent: Math.round((used / quota) * 100),
        usedFormatted: formatBytes(used),
        quotaFormatted: formatBytes(quota)
    };
}

/**
 * Format bytes to human readable format
 * @param {number} bytes - Number of bytes
 * @returns {string} - Formatted string
 */
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - True if successful
 */
async function copyToClipboard(text) {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            const result = document.execCommand('copy');
            document.body.removeChild(textArea);
            return result;
        }
    } catch (error) {
        console.error('Failed to copy to clipboard:', error);
        return false;
    }
}

/**
 * Download data as a file
 * @param {string} data - Data to download
 * @param {string} filename - Name of the file
 * @param {string} type - MIME type (default: 'application/json')
 */
function downloadAsFile(data, filename, type = 'application/json') {
    try {
        const blob = new Blob([data], { type: type });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.style.display = 'none';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up the URL object
        setTimeout(() => URL.revokeObjectURL(url), 100);

        return true;
    } catch (error) {
        console.error('Failed to download file:', error);
        return false;
    }
}

/**
 * Generate a random ID
 * @param {number} length - Length of the ID (default: 8)
 * @returns {string} - Random ID string
 */
function generateRandomId(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate URL format
 * @param {string} url - URL to validate
 * @returns {boolean} - True if valid URL format
 */
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * Get current date in YYYY-MM-DD format
 * @returns {string} - Current date string
 */
function getCurrentDate() {
    return new Date().toISOString().split('T')[0];
}

/**
 * Add days to a date
 * @param {Date|string} date - Date to add to
 * @param {number} days - Number of days to add
 * @returns {string} - New date in YYYY-MM-DD format
 */
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().split('T')[0];
}

/**
 * Check if an element is visible in the viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} - True if element is visible
 */
function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Smooth scroll to element
 * @param {HTMLElement|string} element - Element or selector to scroll to
 * @param {number} offset - Offset in pixels (default: 0)
 */
function smoothScrollTo(element, offset = 0) {
    const target = typeof element === 'string' ? document.querySelector(element) : element;

    if (!target) {
        console.warn('Scroll target not found:', element);
        return;
    }

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

/**
 * Get query parameters from URL
 * @returns {Object} - Object with query parameters
 */
function getQueryParams() {
    const params = {};
    const searchParams = new URLSearchParams(window.location.search);

    for (const [key, value] of searchParams) {
        params[key] = value;
    }

    return params;
}

/**
 * Log performance information
 */
function logPerformance() {
    if (performance && performance.timing) {
        const timing = performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;

        console.log('=== Performance Info ===');
        console.log(`Page load time: ${loadTime}ms`);
        console.log(`DOM ready: ${timing.domContentLoadedEventEnd - timing.navigationStart}ms`);
        console.log('Storage info:', getStorageInfo());
        console.log('=======================');
    }
}

// Make utility functions globally available for debugging
window.showMessage = showMessage;
window.copyToClipboard = copyToClipboard;
window.downloadAsFile = downloadAsFile;
window.getStorageInfo = getStorageInfo;
window.logPerformance = logPerformance;

console.log('Utils.js loaded successfully');