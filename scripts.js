// Navigation Active State and Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    // Set active state for navigation links
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close the mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});

// Carousel Logic
let currentSlide = 0;

function moveSlide(direction) {
    const carouselInner = document.getElementById('carouselInner');
    if (!carouselInner) return;

    const items = carouselInner.children;
    currentSlide = (currentSlide + direction + items.length) % items.length;
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}
