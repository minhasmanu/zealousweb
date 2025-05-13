document.addEventListener('DOMContentLoaded', () => {
    // Add hover animation to the circle
    const heroImage = document.querySelector('.circle-bg');
    heroImage.addEventListener('mouseenter', () => {
        heroImage.style.animation = 'pulse 2s infinite';
    });
    
    heroImage.addEventListener('mouseleave', () => {
        heroImage.style.animation = '';
    });
    
    // Mobile menu toggle
    const createMobileMenu = () => {
        const nav = document.querySelector('nav');
        const mobileMenuBtn = document.createElement('div');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = `
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        `;
        
        const mobileMenu = document.createElement('div');
        mobileMenu.classList.add('mobile-menu');
        mobileMenu.innerHTML = `
            <a href="#" class="active">Home</a>
            <a href="#">About</a>
            <a href="#">Courses</a>
            <a href="#">Achievers</a>
            <button class="contact-btn">Contact Us</button>
        `;
        
        if (window.innerWidth <= 768) {
            nav.appendChild(mobileMenuBtn);
            document.body.appendChild(mobileMenu);
            
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenuBtn.classList.toggle('active');
                mobileMenu.classList.toggle('active');
            });
        }
    };
    
    createMobileMenu();
    
    window.addEventListener('resize', () => {
        const existingBtn = document.querySelector('.mobile-menu-btn');
        const existingMenu = document.querySelector('.mobile-menu');
        
        if (existingBtn) existingBtn.remove();
        if (existingMenu) existingMenu.remove();
        
        createMobileMenu();
    });
    
    // Add click animations to buttons
    const buttons = document.querySelectorAll('.contact-btn, .know-more-btn, .option');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Scroll animation
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        if (scrollPosition > 100) {
            heroContent.style.transform = `translateY(${scrollPosition * 0.1}px)`;
            heroImage.style.transform = `translateY(${-scrollPosition * 0.05}px)`;
        } else {
            heroContent.style.transform = 'translateY(0)';
            heroImage.style.transform = 'translateY(0)';
        }
    });
    
    // Add active states for nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});