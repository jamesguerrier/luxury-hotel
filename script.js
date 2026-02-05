document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Logic
    const navbar = document.getElementById('mainNavbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it's the stats counter area, trigger counting
                if (entry.target.classList.contains('about-highlights')) {
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const speed = target / 50; // Adjust for duration
                        
                        const updateCount = () => {
                            const count = +counter.innerText;
                            if (count < target) {
                                counter.innerText = Math.ceil(count + speed);
                                setTimeout(updateCount, 40);
                            } else {
                                counter.innerText = target + (target === 10 ? '+' : target === 24 ? '/7' : '+');
                            }
                        };
                        updateCount();
                    });
                }
            }
        });
    }, observerOptions);

    // Apply observer to all reveal elements
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    // Also observe stats container specifically for counting
    const statsContainer = document.querySelector('.about-highlights');
    if (statsContainer) revealObserver.observe(statsContainer);

    // 3. Hamburger Menu Fix (Re-implementing if needed)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerText = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerText = '☰';
        });
    });

    // 4. Video Overlay Play Toggle
    const videoOverlay = document.getElementById('videoOverlay');
    if (videoOverlay) {
        videoOverlay.addEventListener('click', () => {
            videoOverlay.classList.add('hidden');
        });
    }
});
