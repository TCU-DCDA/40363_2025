/* ===================================
   SHARED PRESENTATION JAVASCRIPT
   Used by all slide deck presentations
   =================================== */

// Global variables
let currentSlideIndex = 0;
let totalSlides = 0;

// Initialize presentation
function initializePresentation() {
    totalSlides = document.querySelectorAll('.slide').length;
    document.getElementById('totalSlides').textContent = totalSlides;
    updateSlidePosition();

    // Add keyboard and touch event listeners
    addEventListeners();
}

// Update slide position and navigation state
function updateSlidePosition() {
    const presentation = document.getElementById('presentation');
    presentation.style.transform = `translateX(-${currentSlideIndex * 100}vw)`;

    document.getElementById('currentSlide').textContent = currentSlideIndex + 1;

    // Update navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) prevBtn.disabled = currentSlideIndex === 0;
    if (nextBtn) nextBtn.disabled = currentSlideIndex === totalSlides - 1;
}

// Change slide function
function changeSlide(direction) {
    const newIndex = currentSlideIndex + direction;
    if (newIndex >= 0 && newIndex < totalSlides) {
        currentSlideIndex = newIndex;
        updateSlidePosition();
    }
}

// Add all event listeners
function addEventListeners() {
    // Keyboard navigation
    document.addEventListener('keydown', handleKeydown);

    // Touch/swipe support for mobile
    addTouchSupport();
}

// Handle keyboard events
function handleKeydown(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        changeSlide(1);
    } else if (e.key === 'Home') {
        currentSlideIndex = 0;
        updateSlidePosition();
    } else if (e.key === 'End') {
        currentSlideIndex = totalSlides - 1;
        updateSlidePosition();
    }
}

// Touch/swipe support for mobile
function addTouchSupport() {
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                changeSlide(1); // Swipe left, go to next slide
            } else {
                changeSlide(-1); // Swipe right, go to previous slide
            }
        }
    }
}

// Jump to specific slide (useful for development/testing)
function goToSlide(slideNumber) {
    const targetIndex = slideNumber - 1;
    if (targetIndex >= 0 && targetIndex < totalSlides) {
        currentSlideIndex = targetIndex;
        updateSlidePosition();
    }
}

// Get current slide information
function getCurrentSlideInfo() {
    return {
        current: currentSlideIndex + 1,
        total: totalSlides,
        percentage: ((currentSlideIndex + 1) / totalSlides) * 100
    };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePresentation);

// Presentation-specific demo functions (can be overridden)
window.presentationDemos = {
    // Example demo functions that presentations can use
    arrayDemo: function() {
        console.log('Array demo function - override in specific presentation');
    },

    removeDemo: function() {
        console.log('Remove demo function - override in specific presentation');
    },

    testStorage: function() {
        const output = document.getElementById('storage-output');
        if (output) {
            const testData = {
                name: "Demo Data",
                timestamp: new Date().toLocaleString()
            };

            localStorage.setItem('demo-test', JSON.stringify(testData));
            const loaded = JSON.parse(localStorage.getItem('demo-test'));

            output.innerHTML = `
                <strong>localStorage test successful!</strong><br>
                Data: ${loaded.name}<br>
                Saved at: ${loaded.timestamp}
            `;
        }
    },

    changeDemoText: function() {
        const demoText = document.getElementById('demo-text');
        if (demoText) {
            const messages = [
                "JavaScript changed me!",
                "Functions are powerful!",
                "DOM manipulation rocks!",
                "This is interactive!"
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            demoText.textContent = randomMessage;
        }
    },

    changeStyle: function() {
        const demoText = document.getElementById('demo-text');
        if (demoText) {
            const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            demoText.style.color = randomColor;
            demoText.style.fontWeight = demoText.style.fontWeight === 'bold' ? 'normal' : 'bold';
        }
    },

    randomColorDemo: function() {
        const colorDemo = document.getElementById('color-demo');
        if (colorDemo) {
            const colors = ['red', 'blue', 'green', 'purple', 'orange', 'teal', 'magenta'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            colorDemo.style.color = randomColor;
            colorDemo.textContent = "Now I'm " + randomColor + "!";

            // Add a little animation
            colorDemo.style.transform = 'scale(1.1)';
            setTimeout(() => {
                colorDemo.style.transform = 'scale(1)';
            }, 200);
        }
    }
};

// Export functions for global access
window.changeSlide = changeSlide;
window.goToSlide = goToSlide;
window.getCurrentSlideInfo = getCurrentSlideInfo;