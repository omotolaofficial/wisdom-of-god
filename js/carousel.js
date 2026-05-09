/**
 * Carousel Functionality
 * Auto-playing image carousel with manual controls
 */

let currentSlideIndex = 0;
let carouselInterval;

/**
 * Display slide at specified index
 * @param {number} n - Slide index
 */
function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (n >= slides.length) {
        currentSlideIndex = 0;
    }
    if (n < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }
    
    indicators.forEach(indicator => indicator.classList.remove('active'));
    if (indicators[currentSlideIndex]) {
        indicators[currentSlideIndex].classList.add('active');
    }
}

/**
 * Navigate carousel by a specific number of slides
 * @param {number} n - Number of slides to move
 */
function changeSlide(n) {
    currentSlideIndex += n;
    showSlide(currentSlideIndex);
    resetCarouselTimer();
}

/**
 * Jump to specific slide
 * @param {number} n - Slide index to jump to
 */
function currentSlide(n) {
    currentSlideIndex = n;
    showSlide(currentSlideIndex);
    resetCarouselTimer();
}

/**
 * Move to next slide
 */
function nextSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

/**
 * Reset carousel auto-play timer
 */
function resetCarouselTimer() {
    clearInterval(carouselInterval);
    startCarouselAutoPlay();
}

/**
 * Start carousel auto-play with 4-second interval
 */
function startCarouselAutoPlay() {
    carouselInterval = setInterval(nextSlide, 4000);
}

/**
 * Initialize carousel on page load
 */
function initCarousel() {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        showSlide(currentSlideIndex);
        startCarouselAutoPlay();
    }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', initCarousel);
