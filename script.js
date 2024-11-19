document.addEventListener('DOMContentLoaded', () => {
    // Feather Icons initialization
    feather.replace();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            targetSection.scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });

    // Form submission handler (replace with actual form submission logic)
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Scroll-triggered animations
    const scrollAnimations = () => {
        const sections = document.querySelectorAll('.glassmorphic-section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('animate__animated', 'animate__fadeIn');
            }
        });
    };

    window.addEventListener('scroll', scrollAnimations);
    scrollAnimations(); // Initial check
});
