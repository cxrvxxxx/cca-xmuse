// Scroll effects script
// Targets element with the 'scroll' class and modifies
// their background position relative to the scroll
// position of the document.

// Listener for scroll action
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;

    // Snowfall effect
    document.body.style.backgroundPosition = `0px ${scrollTop * 1.5}px`;

    // Side-scrolling effect
    const sideScrollingElements = document.querySelectorAll('.sidescroll');
    sideScrollingElements.forEach(element => {
        element.style.backgroundPosition = `${scrollTop * 1.5}px 0px`;
    })

    // Flyout effect
    document.querySelector(".cta-icon-lh").style.transform = `translate(${-scrollTop * 1.5}px, ${-scrollTop * 0.9}px)`;
    document.querySelector(".cta-icon-rh").style.transform = `translate(${scrollTop * 1.5}px, ${-scrollTop * 0.9}px)`;
});
