// Script for sliders
// Keeps track of the slide position of each slider
// and controls which slide is displayed to the
// user.

// Track slider states
const currentIndexes = {};

// Add indicators at the bottom of the slider
document.querySelectorAll('.slider').forEach(slider => {
    const slides = slider.querySelector('.slides');
    const indicatorsContainer = slider.querySelector('.indicators');
    const sliderId = slider.id;
    const totalSlides = slides.children.length;

    currentIndexes[sliderId] = 0;

    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('span');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');

        indicator.setAttribute('onclick', `showSlide('${sliderId}', ${i})`);
        indicatorsContainer.appendChild(indicator);
    }
});

// Control indicator active state
function updateIndicators(sliderId) {
    const indicators = document.querySelector(`#${sliderId} .indicators`).children;
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].classList.toggle('active', i === currentIndexes[sliderId]);
    }
}

// Jump to slide
function showSlide(sliderId, index) {
    const slides = document.querySelector(`#${sliderId} .slides`);
    const totalSlides = slides.children.length;

    if (index >= totalSlides) {
        currentIndexes[sliderId] = 0;
    } else if (index < 0) {
        currentIndexes[sliderId] = totalSlides - 1;
    } else {
        currentIndexes[sliderId] = index;
    }

    slides.style.transform = `translateX(-${currentIndexes[sliderId] * 100}%)`;
    updateIndicators(sliderId);
}

// Slide controls
function nextSlide(sliderId) {
    showSlide(sliderId, currentIndexes[sliderId] + 1);
}

function prevSlide(sliderId) {
    showSlide(sliderId, currentIndexes[sliderId] - 1);
}
