document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Add hover animation to the circle
    const heroImage = document.querySelector('.circle-bg');
    if (heroImage) {
        heroImage.addEventListener('mouseenter', () => {
            heroImage.style.animation = 'pulse 2s infinite';
        });
        
        heroImage.addEventListener('mouseleave', () => {
            heroImage.style.animation = '';
        });
    }
    
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
    
    // Add active states for nav links
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(l => {
                l.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu if open
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});
 // Function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        }

        // Function to handle scroll animations
        function handleScrollAnimations() {
            const circleImages = document.querySelectorAll('.circle-image');
            const aboutSection = document.getElementById('about');
            
            // Only run animation if about section is in viewport
            if (isInViewport(aboutSection)) {
                circleImages.forEach((circle, index) => {
                    // Add a slight delay based on index for staggered animation
                    setTimeout(() => {
                        circle.classList.add('show');
                    }, index * 150);
                });
                
                // Remove scroll listener once animations are triggered
                if (circleImages[0].classList.contains('show')) {
                    window.removeEventListener('scroll', handleScrollAnimations);
                }
            }
        }

        // Initial check on load
        document.addEventListener('DOMContentLoaded', function() {
            handleScrollAnimations();
            
            // Add scroll event listener
            window.addEventListener('scroll', handleScrollAnimations);
            
            // Also trigger on resize to handle position changes
            window.addEventListener('resize', handleScrollAnimations);
        });
        // Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', function() {
            // Animate title on load
            setTimeout(() => {
                document.querySelector('.section-title').classList.add('active');
            }, 300);

            // Animate cards on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('active');
                        }, parseInt(entry.target.dataset.delay) || 0);
                    }
                });
            }, {
                threshold: 0.1
            });

            // Observe all service cards
            document.querySelectorAll('.service-card').forEach(card => {
                observer.observe(card);
            });

            // Initial animation for cards that are already visible
            if (window.innerHeight > document.querySelector('.services-section').getBoundingClientRect().top) {
                document.querySelectorAll('.service-card').forEach(card => {
                    setTimeout(() => {
                        card.classList.add('active');
                    }, parseInt(card.dataset.delay) || 0);
                });
            }
        });
           document.addEventListener('DOMContentLoaded', function() {
            // Function to check if element is in viewport
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
                    rect.bottom >= 0
                );
            }
            
            // Elements to animate
            const sectionTitle = document.querySelector('.section-title');
            const featureItems = document.querySelectorAll('.feature-item');
            const featuresImage = document.querySelector('.features-image');
            
            // Function to handle scroll animation
            function animateOnScroll() {
                // Animate title
                if (isInViewport(sectionTitle) && !sectionTitle.classList.contains('active')) {
                    sectionTitle.classList.add('active');
                }
                
                // Animate features image
                if (isInViewport(featuresImage) && !featuresImage.classList.contains('active')) {
                    featuresImage.classList.add('active');
                }
                
                // Animate feature items with delay
                featureItems.forEach((item, index) => {
                    if (isInViewport(item) && !item.classList.contains('active')) {
                        // Add delay for cascade effect
                        setTimeout(() => {
                            item.classList.add('active');
                        }, 150 * index);
                    }
                });
            }
            
            // Run on page load
            animateOnScroll();
            
            // Listen for scroll events
            window.addEventListener('scroll', animateOnScroll);
            
            // For smoother animations on mobile
            window.addEventListener('touchmove', animateOnScroll);
            
            // Re-check animations on window resize
            window.addEventListener('resize', animateOnScroll);
        });
        // Animation for results cards
document.addEventListener('DOMContentLoaded', function() {
    // Animate result cards on scroll
    const resultCards = document.querySelectorAll('.result-card');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Function to add animation to visible elements
    function animateVisibleElements() {
        resultCards.forEach(card => {
            if (isInViewport(card)) {
                // Get the delay attribute or default to 0
                const delay = card.getAttribute('data-aos-delay') || 0;
                
                // Add animation with appropriate delay
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, delay);
            }
        });
    }
    
    // Initial check when page loads
    animateVisibleElements();
    
    // Check again when user scrolls
    window.addEventListener('scroll', animateVisibleElements);
    
    // Hover effect enhancements for result cards
    resultCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const studentImage = this.querySelector('.student-image');
            if (studentImage) {
                studentImage.style.borderColor = '#ff6b6b';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const studentImage = this.querySelector('.student-image');
            if (studentImage) {
                studentImage.style.borderColor = '#f0f0f0';
            }
        });
    });
    
    // Optional: Add counter animation for scores if needed
    function animateScores() {
        const scores = document.querySelectorAll('.student-score');
        scores.forEach(score => {
            // For numeric scores with format like "704/720"
            if (score.textContent.includes('/')) {
                const scoreParts = score.textContent.split('/');
                const targetScore = parseInt(scoreParts[0]);
                const maxScore = scoreParts[1];
                
                // Only animate numbers above a certain threshold
                if (targetScore > 600) {
                    let currentScore = 600;
                    const animationDuration = 1500; // 1.5 seconds
                    const interval = animationDuration / (targetScore - currentScore);
                    
                    const counter = setInterval(() => {
                        currentScore += 1;
                        score.textContent = `${currentScore}/${maxScore}`;
                        
                        if (currentScore >= targetScore) {
                            clearInterval(counter);
                        }
                    }, interval);
                }
            }
        });
    }
    
    // Run score animations when the NEET/JEE section becomes visible
    const neetJeeSection = document.querySelector('.neet-jee');
    if (neetJeeSection) {
        window.addEventListener('scroll', function() {
            if (isInViewport(neetJeeSection)) {
                animateScores();
                // Remove event listener to prevent repeated animations
                window.removeEventListener('scroll', this);
            }
        });
    }
});

// Contact section animations and form handling
document.addEventListener('DOMContentLoaded', function() {
    // Elements for animations
    const contactSection = document.querySelector('.contact-section');
    const contactContainer = document.querySelector('.contact-container');
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    const infoItems = document.querySelectorAll('.info-item');
    const formGroups = document.querySelectorAll('.form-group');
    
    // Add animation classes
    contactContainer.classList.add('fade-in');
    infoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `all 0.5s ease ${0.2 + (index * 0.1)}s`;
    });
    
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        group.style.transition = `all 0.5s ease ${0.2 + (index * 0.1)}s`;
    });
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactContainer.classList.add('visible');
                
                setTimeout(() => {
                    infoItems.forEach(item => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    });
                    
                    formGroups.forEach(group => {
                        group.style.opacity = '1';
                        group.style.transform = 'translateY(0)';
                    });
                }, 300);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(contactSection);
    
    // Form validation and handling
    const contactFormElement = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const classInput = document.getElementById('class');
    const emailInput = document.getElementById('email');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Thank you! Your message has been sent successfully.';
    
    // Form validation function
    function validateForm() {
        let isValid = true;
        
        // Remove previous error messages
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        document.querySelectorAll('input.error').forEach(el => el.classList.remove('error'));
        
        // Validate name
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
            isValid = false;
        }
        
        // Validate phone (simple validation)
        if (phoneInput.value.trim() === '') {
            showError(phoneInput, 'Phone number is required');
            isValid = false;
        } else if (!/^[0-9]{10}$/.test(phoneInput.value.trim())) {
            showError(phoneInput, 'Please enter a valid 10-digit phone number');
            isValid = false;
        }
        
        // Validate class
        if (classInput.value.trim() === '') {
            showError(classInput, 'Class is required');
            isValid = false;
        }
        
        // Validate email
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Show error message
    function showError(input, message) {
        input.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        input.parentElement.appendChild(errorElement);
    }
    
    // Form submit handler
    contactFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Show loading animation
            submitBtn.textContent = 'Submitting...';
            submitBtn.classList.add('submitting');
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form submission)
            setTimeout(() => {
                submitBtn.classList.remove('submitting');
                contactFormElement.style.display = 'none';
                contactForm.appendChild(successMessage);
                successMessage.style.display = 'block';
                
                // Reset form
                contactFormElement.reset();
                submitBtn.textContent = 'Submit';
                submitBtn.disabled = false;
                
                // Hide success message after 5 seconds and show form again
                setTimeout(() => {
                    successMessage.style.display = 'none';
                    contactFormElement.style.display = 'block';
                }, 5000);
            }, 1500);
        }
    });
    
    // Input focus effects
    const formInputs = document.querySelectorAll('.form-group input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
    
    // Mobile optimizations
    function handleResponsiveChanges() {
        if (window.innerWidth <= 768) {
            contactInfo.style.borderRadius = '0 0 10px 10px';
            contactForm.style.borderRadius = '10px 10px 0 0';
        } else {
            contactInfo.style.borderRadius = '10px 0 0 10px';
            contactForm.style.borderRadius = '0 10px 10px 0';
        }
    }
    
    // Initial call and window resize event
    handleResponsiveChanges();
    window.addEventListener('resize', handleResponsiveChanges);
});

// Contact button functionality - scroll to contact section
document.addEventListener('DOMContentLoaded', function() {
    const contactButtons = document.querySelectorAll('.contact-btn');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const contactSection = document.getElementById('contact');
            
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
