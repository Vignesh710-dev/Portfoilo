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

// Add this at the beginning of your main.js file
document.addEventListener('DOMContentLoaded', function() {
    // Check if this is the first visit
   // Add WhatsApp button click handler
   const whatsappBtn = document.querySelector('.whatsapp-btn');
   if(whatsappBtn) {
       whatsappBtn.addEventListener('click', function() {
           const message = "i did watch your portfolio website.I want one website you can create for  me ? ";
           const phoneNumber = "919080700642";
           
           window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
           
           // Track the WhatsApp click
           gtag('event', 'whatsapp_click', {
               'event_category': 'Contact',
               'event_label': 'WhatsApp Message'
           });
       });
   }
});
// Add after your existing DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // Track CV downloads
    const cvButton = document.querySelector('a[download="Vignesh_Resume.pdf"]');
    if(cvButton) {
        cvButton.addEventListener('click', function() {
            gtag('event', 'download', {
                'event_category': 'CV',
                'event_label': 'Resume Download'
            });
        });
    }

    // Track contact form submissions
    const contactForm = document.querySelector('#contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function() {
            gtag('event', 'submit', {
                'event_category': 'Contact',
                'event_label': 'Form Submission'
            });
        });
    }

    // Track project clicks
    document.querySelectorAll('.project-card a').forEach(link => {
        link.addEventListener('click', function() {
            gtag('event', 'click', {
                'event_category': 'Projects',
                'event_label': this.textContent || 'Project Link'
            });
        });
    });
});
// Add after your existing tracking code
document.addEventListener('DOMContentLoaded', function() {
    // Track scroll depth
    let scrollDepths = [25, 50, 75, 100];
    let scrolledDepths = new Set();

    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
        
        scrollDepths.forEach(depth => {
            if (scrollPercent >= depth && !scrolledDepths.has(depth)) {
                scrolledDepths.add(depth);
                gtag('event', 'scroll_depth', {
                    'event_category': 'Engagement',
                    'event_label': `Scrolled ${depth}%`,
                    'value': depth
                });
            }
        });
    });

    // Track time spent on page
    let timeIntervals = [30, 60, 120, 300]; // seconds
    timeIntervals.forEach(interval => {
        setTimeout(() => {
            gtag('event', 'time_spent', {
                'event_category': 'Engagement',
                'event_label': `Spent ${interval} seconds`,
                'value': interval
            });
        }, interval * 1000);
    });
});
