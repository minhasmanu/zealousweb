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
