// Select the overlay and create a cursor glow element
const overlay = document.querySelector('.overlay');
const glow = document.createElement('div');
glow.classList.add('cursor-glow');
document.body.appendChild(glow);

// Mouse movement event
document.addEventListener('mousemove', (e) => {
    const glowSize = 100;
    const offsetX = glowSize / 2; // Half of the width
    const offsetY = glowSize / 2; // Half of the height

    // Update glow position
    glow.style.left = `${e.pageX - offsetX}px`;
    glow.style.top = `${e.pageY - offsetY}px`;

    // Show the glow
    glow.classList.add('active');
});

// Hide the glow when the mouse leaves the window
document.addEventListener('mouseleave', () => {
    glow.classList.remove('active');
});

// Add event listeners to intensify glow on hover for specific elements
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('mouseenter', () => {
        glow.classList.add('hover');
    });
    element.addEventListener('mouseleave', () => {
        glow.classList.remove('hover');
    });
});