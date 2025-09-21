/**
 * Weather Widget
 * Displays current weather and forecast data from local JSON file
 */

class WeatherWidget {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = document.getElementById(containerId);
        this.data = null;
        this.dataUrl = './data/weather.json';
        this.lastUpdated = null;

        if (!this.container) {
            throw new Error(`Weather widget container not found: ${containerId}`);
        }

        this.init();
    }

    /**
     * Initialize the weather widget
     */
    init() {
        this.setupElements();
        console.log('Weather widget initialized');
    }

    /**
     * Set up DOM elements and event listeners
     */
    setupElements() {
        this.currentWeatherEl = this.container.querySelector('#current-weather');
        this.forecastEl = this.container.querySelector('#weather-forecast');

        if (!this.currentWeatherEl || !this.forecastEl) {
            console.error('Weather widget: Required elements not found');
            return;
        }
    }

    /**
     * Load weather data from JSON file
     */
    async loadData() {
        try {
            console.log('Loading weather data...');
            this.showLoading();

            this.data = await fetchHelper.loadJSON(this.dataUrl);
            this.lastUpdated = new Date();

            this.render();
            console.log('Weather data loaded successfully');

        } catch (error) {
            console.error('Failed to load weather data:', error);
            this.showError('Unable to load weather data');
        }
    }

    /**
     * Render the weather widget
     */
    render() {
        if (!this.data) {
            this.showError('No weather data available');
            return;
        }

        this.renderCurrentWeather();
        this.renderForecast();
    }

    /**
     * Render current weather section
     */
    renderCurrentWeather() {
        const current = this.data.current;

        this.currentWeatherEl.innerHTML = `
            <div class="weather-icon">${current.icon}</div>
            <div class="weather-main">
                <div class="weather-location">${current.location}</div>
                <div class="weather-condition">${current.condition}</div>
            </div>
            <div class="weather-temp">${current.temperature}°F</div>
        `;

        // Add weather details if container exists
        const detailsContainer = this.container.querySelector('.weather-details');
        if (detailsContainer) {
            detailsContainer.innerHTML = `
                <div class="weather-detail">
                    <span class="weather-detail-label">Humidity</span>
                    <span class="weather-detail-value">${current.humidity}%</span>
                </div>
                <div class="weather-detail">
                    <span class="weather-detail-label">Wind</span>
                    <span class="weather-detail-value">${current.windSpeed} mph</span>
                </div>
                <div class="weather-detail">
                    <span class="weather-detail-label">Pressure</span>
                    <span class="weather-detail-value">${current.pressure || 'N/A'}"</span>
                </div>
                <div class="weather-detail">
                    <span class="weather-detail-label">UV Index</span>
                    <span class="weather-detail-value">${current.uvIndex || 'N/A'}</span>
                </div>
            `;
        } else {
            // Create details container if it doesn't exist
            const detailsDiv = document.createElement('div');
            detailsDiv.className = 'weather-details';
            detailsDiv.innerHTML = `
                <div class="weather-detail">
                    <span class="weather-detail-label">Humidity</span>
                    <span class="weather-detail-value">${current.humidity}%</span>
                </div>
                <div class="weather-detail">
                    <span class="weather-detail-label">Wind</span>
                    <span class="weather-detail-value">${current.windSpeed} mph</span>
                </div>
            `;
            this.currentWeatherEl.appendChild(detailsDiv);
        }
    }

    /**
     * Render weather forecast section
     */
    renderForecast() {
        const forecast = this.data.forecast || [];

        this.forecastEl.innerHTML = forecast.map(day => `
            <div class="forecast-day">
                <div class="forecast-day-name">${day.day}</div>
                <div class="forecast-icon">${day.icon}</div>
                <div class="forecast-temps">
                    <span class="forecast-high">${day.high}°</span>
                    <span class="forecast-low">${day.low}°</span>
                </div>
                <div class="forecast-condition">${day.condition}</div>
            </div>
        `).join('');
    }

    /**
     * Show loading state
     */
    showLoading() {
        this.currentWeatherEl.innerHTML = `
            <div class="weather-loading">
                <div>Loading weather data...</div>
            </div>
        `;
        this.forecastEl.innerHTML = '';
    }

    /**
     * Show error state
     */
    showError(message) {
        this.currentWeatherEl.innerHTML = `
            <div class="weather-error">
                <div>⚠️ ${message}</div>
                <button onclick="dashboard.getWidget('weather').loadData()" class="btn btn-small mt-sm">
                    Try Again
                </button>
            </div>
        `;
        this.forecastEl.innerHTML = '';
    }

    /**
     * Get formatted last updated time
     */
    getLastUpdatedText() {
        if (!this.lastUpdated) return 'Never';

        const now = new Date();
        const diff = now - this.lastUpdated;
        const minutes = Math.floor(diff / (1000 * 60));

        if (minutes < 1) return 'Just now';
        if (minutes < 60) return `${minutes} minutes ago`;

        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours} hours ago`;

        return this.lastUpdated.toLocaleDateString();
    }

    /**
     * Update weather data
     */
    async refresh() {
        await this.loadData();
    }

    /**
     * Get current weather data
     */
    getCurrentWeather() {
        return this.data?.current || null;
    }

    /**
     * Get forecast data
     */
    getForecast() {
        return this.data?.forecast || [];
    }

    /**
     * Get widget status
     */
    getStatus() {
        return {
            hasData: !!this.data,
            lastUpdated: this.lastUpdated,
            dataUrl: this.dataUrl,
            location: this.data?.current?.location || 'Unknown'
        };
    }

    /**
     * Convert temperature units
     */
    convertTemperature(temp, fromUnit = 'F', toUnit = 'C') {
        if (fromUnit === toUnit) return temp;

        if (fromUnit === 'F' && toUnit === 'C') {
            return Math.round((temp - 32) * 5/9);
        }

        if (fromUnit === 'C' && toUnit === 'F') {
            return Math.round((temp * 9/5) + 32);
        }

        return temp;
    }

    /**
     * Get weather icon for condition
     */
    getWeatherIcon(condition) {
        const iconMap = {
            'sunny': '☀️',
            'partly cloudy': '⛅',
            'cloudy': '☁️',
            'rainy': '🌧️',
            'stormy': '⛈️',
            'snowy': '❄️',
            'foggy': '🌫️',
            'windy': '💨'
        };

        return iconMap[condition.toLowerCase()] || '🌤️';
    }

    /**
     * Export weather data
     */
    exportData() {
        return {
            data: this.data,
            lastUpdated: this.lastUpdated,
            status: this.getStatus()
        };
    }

    /**
     * Destroy widget and clean up
     */
    destroy() {
        // Clean up any timers or event listeners
        console.log('Weather widget destroyed');
    }
}

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.WeatherWidget = WeatherWidget;
}

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WeatherWidget;
}