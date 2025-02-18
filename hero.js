document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentSlide = 0;
    let slideInterval; // For auto-sliding

    function updateSlider() {
        // Remove all active classes first
        slides.forEach((slide) => {
            slide.style.opacity = '0';
            slide.style.visibility = 'hidden';
        });
        dots.forEach((dot) => dot.classList.remove('active'));

        // Add active classes to current slide and dot
        slides[currentSlide].style.opacity = '1';
        slides[currentSlide].style.visibility = 'visible';
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }

    // Auto-slide function
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Restart auto-sliding after user interaction
    function restartAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    // Event Listeners
    prevButton.addEventListener('click', () => {
        prevSlide();
        restartAutoSlide(); // Restart timer after manual navigation
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        restartAutoSlide(); // Restart timer after manual navigation
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
            restartAutoSlide(); // Restart timer after manual navigation
        });
    });

    // Pause auto-sliding when hovering over the slider
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    // Initialize the slider and start auto-sliding
    updateSlider();
    startAutoSlide();
});