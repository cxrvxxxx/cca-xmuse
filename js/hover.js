// Hover effects sscript.
// Selects elements with the 'alt-hover' class and updates the
// 'src' attribute of the '<img>' tag to the alternate version
// of the original image.

// Select all elements with alt-hover.
const elements = document.querySelectorAll('.alt-hover');

elements.forEach(element => {
    // Modify <img> src to use 'active' image.
    element.addEventListener('mouseenter', () => {
        element.src = element.src.slice(0, -5) + '2.png';
    });

    // Modify <img> src to use 'inactive' image.
    element.addEventListener('mouseleave', () => {
        element.src = element.src.slice(0, -5) + '1.png';
    });
});
