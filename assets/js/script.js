// Lazy Loading
document.addEventListener("DOMContentLoaded", function() {
    const lazyCards = document.querySelectorAll('.lazy-el');

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
    }, {
        threshold: 0.24
    });

    lazyCards.forEach(card => {
        observer.observe(card);
    });
});
