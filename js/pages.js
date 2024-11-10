// Page indicator script
// Dynamically updates the page indicator state based on
// the scroll position of the document and controls
// Tooltip positioning.

// Query indicators and sections
const indicators = document.querySelectorAll('.page-indicator');
const sections = document.querySelectorAll('section');

indicators.forEach(indicator => {
    // Controls tooltip position
    indicator.addEventListener('mouseenter', (event) => {
        const tooltip = indicator.querySelector('::after');
        
        // Get cursor position
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        // Set custom position styles to the tooltip
        indicator.style.setProperty('--tooltip-x', `${mouseX - 20}px`);
        indicator.style.setProperty('--tooltip-y', `${mouseY}px`);
    });
    
    // Handle mouseover to show tooltip
    indicator.addEventListener('mouseenter', () => {
        indicator.classList.add('show-tooltip');
    });

    // Hide tooltip on mouseout
    indicator.addEventListener('mouseenter', () => {
        indicator.classList.remove('show-tooltip');
    });
});


// Function to check which section is in the viewport
function setActiveIndicator() {
    let index = sections.length;

    while (--index && window.scrollY + window.innerHeight / 2 < sections[index].offsetTop) {}

    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[index].classList.add('active');
}

// Attach scroll event listener
window.addEventListener('scroll', setActiveIndicator);

// Initialize the active indicator on load
setActiveIndicator();