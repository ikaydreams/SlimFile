// Navigation Active State
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('.main-nav a').forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
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