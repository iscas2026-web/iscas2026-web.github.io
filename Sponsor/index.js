var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.logos-slide');
    const items = document.querySelectorAll('.logos-slide img');
    const prevButton = document.querySelector('.prev-arrow');
    const nextButton = document.querySelector('.next-arrow');
    
    let currentIndex = 0;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;

    // Touch events
    track.addEventListener('touchstart', dragStart);
    track.addEventListener('touchend', dragEnd);
    track.addEventListener('touchmove', drag);

    // Mouse events
    track.addEventListener('mousedown', dragStart);
    track.addEventListener('mouseup', dragEnd);
    track.addEventListener('mouseleave', dragEnd);
    track.addEventListener('mousemove', drag);

    // Prevent default drag behaviors
    window.oncontextmenu = function(event) {
        if (event.target === track) {
            event.preventDefault();
        }
    }

    function dragStart(event) {
        isDragging = true;
        startPos = getPositionX(event);
        animationID = requestAnimationFrame(animation);
        track.style.cursor = 'grabbing';
    }

    function dragEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        track.style.cursor = 'grab';
        
        const movedBy = currentTranslate - prevTranslate;
        if (Math.abs(movedBy) > 100) {
            if (movedBy < 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        setPositionByIndex();
    }

    function drag(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = prevTranslate + currentPosition - startPos;
            setSliderPosition();
        }
    }

    function getPositionX(event) {
        return event.type.includes('mouse') 
            ? event.pageX 
            : event.touches[0].clientX;
    }

    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }

    function setSliderPosition() {
        track.style.transform = `translateX(${currentTranslate}px)`;
    }

    function setPositionByIndex() {
        currentTranslate = currentIndex * -220; // Adjust this value based on your logo width + gap
        prevTranslate = currentTranslate;
        setSliderPosition();
    }

    function nextSlide() {
        if (currentIndex < items.length - 4) {
            currentIndex++;
            setPositionByIndex();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            setPositionByIndex();
        }
    }

    // Event listeners for buttons
    if (prevButton) prevButton.addEventListener('click', prevSlide);
    if (nextButton) nextButton.addEventListener('click', nextSlide);
});

