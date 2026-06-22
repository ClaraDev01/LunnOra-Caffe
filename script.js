const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(
    '.drink-card, .news-card, .about-text, .quote-box, .footer-brand, .footer-links, .footer-social'
).forEach(el => observer.observe(el));

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const menuHack = document.getElementById('menu-hack');
        if (menuHack) menuHack.checked = false;
    });
});