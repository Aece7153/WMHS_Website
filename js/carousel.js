document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;
    const totalItems = items.length;
    let itemsToShow = 3;

    // Error handling for missing elements
    if (!track || !items.length || !prevButton || !nextButton) {
        console.error('Carousel elements not found:', {
            track: !!track,
            items: items.length,
            prevButton: !!prevButton,
            nextButton: !!nextButton
        });
        return;
    }

    // Update itemsToShow based on screen size
    function updateItemsToShow() {
        if (window.innerWidth <= 480) {
            itemsToShow = 1;
        } else if (window.innerWidth <= 768) {
            itemsToShow = 2;
        } else {
            itemsToShow = 3;
        }
        console.log('Items to show:', itemsToShow); // Debug
        updateCarousel();
    }

    // Update carousel position
    function updateCarousel() {
        if (items[currentIndex]) {
            const itemWidth = items[0].offsetWidth + 16; // Account for 1rem (16px) gap
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            console.log('Current index:', currentIndex, 'TranslateX:', -currentIndex * itemWidth); // Debug
        }
    }

    // Move to next slide
    function nextSlide() {
        if (currentIndex < totalItems - itemsToShow) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop to start
        }
        updateCarousel();
    }

    // Move to previous slide
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - itemsToShow; // Loop to end
        }
        updateCarousel();
    }

    // Event listeners for buttons
    prevButton.addEventListener('click', () => {
        console.log('Prev button clicked'); // Debug
        prevSlide();
    });
    nextButton.addEventListener('click', () => {
        console.log('Next button clicked'); // Debug
        nextSlide();
    });

    // Update on window resize
    window.addEventListener('resize', updateItemsToShow);

    // Initial setup
    updateItemsToShow();
});