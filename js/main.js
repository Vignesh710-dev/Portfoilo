// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling



// Enhanced Animation on scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-up, .scale-in, .stat-card, .project-card');
    animatedElements.forEach(element => observer.observe(element));
});

// Mouse parallax effect for hero section
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        
        hero.style.transform = `translate(${moveX}px, ${moveY}px)`;
        hero.style.transition = 'transform 0.2s ease-out';
    }
});


console.log("%cLooking for hidden treasures?", "color: #6E57E0; font-size: 18px; font-weight: bold;");
console.log("%cThis is not the console you're looking for 👋", "color: #fff; font-size: 14px;");
console.log("%cBut since you're here...", "color: #6E57E0; font-size: 14px;");
console.log("%cWhy not check out my GitHub instead? https://github.com/Vignesh710-dev", "color: #fff; font-size: 14px;");