// Navigation Active State
document.addEventListener('DOMContentLoaded', () => {
    // Set active state for navigation links
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('.main-nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close the mobile menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
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
