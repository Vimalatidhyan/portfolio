
// MOBILE MENU TOGGLE
// ============================================

const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
}

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 90;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        navbar.style.background = 'rgba(5, 11, 7, 0.95)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(5, 11, 7, 0.85)';
    }

    lastScroll = currentScroll;
});

// ============================================
// ACTIVE NAVIGATION LINK
// ============================================

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.style.color = 'var(--accent-green)';
            link.style.textShadow = '0 0 8px rgba(0, 255, 136, 0.15)';
        } else {
            link.style.color = '';
            link.style.textShadow = '';
        }
    });
});

// ============================================
// FADE-IN ANIMATION ON SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and items
document.querySelectorAll('.skill-card, .timeline-item, .disclosure-card, .cert-card, .project-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
});

// Observe about section
const aboutImage = document.querySelector('.about-image-wrapper');
if (aboutImage) {
    aboutImage.style.opacity = '0';
    aboutImage.style.transform = 'translateX(-30px)';
    aboutImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(aboutImage);
}

const aboutText = document.querySelector('.about-text');
if (aboutText) {
    aboutText.style.opacity = '0';
    aboutText.style.transform = 'translateX(30px)';
    aboutText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(aboutText);
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--accent-green);
    color: var(--bg-primary);
    border: 2px solid var(--accent-green);
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    box-shadow: 0 0 30px rgba(0,255,136,0.5);
    transition: all 0.3s ease;
    z-index: 999;
`;

document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'translateY(-8px) scale(1.1)';
    scrollTopBtn.style.boxShadow = '0 0 40px rgba(0,255,136,0.7)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'translateY(0) scale(1)';
    scrollTopBtn.style.boxShadow = '0 0 30px rgba(0,255,136,0.5)';
});

// ============================================
// STATS COUNTER ANIMATION
// ============================================

const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 30);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ============================================
// INITIALIZE ON LOAD
// ============================================

window.addEventListener('load', () => {
    // Set initial active nav link if hash exists
    const hash = window.location.hash;
    if (hash) {
        const targetLink = document.querySelector(`a[href="${hash}"]`);
        if (targetLink) {
            targetLink.style.color = 'var(--accent-green)';
            targetLink.style.textShadow = '0 0 8px rgba(0, 255, 136, 0.15)';
        }
    }

    // Add loaded class for any additional animations
    document.body.classList.add('loaded');
});

// ============================================
// CONTENT PROTECTION
// ============================================

// Disable right-click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Disable keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'p' || e.key === 'u')) {
        e.preventDefault();
    }
});

// Clear clipboard on PrintScreen
document.addEventListener('keyup', (e) => {
    if (e.key == 'PrintScreen') {
        navigator.clipboard.writeText('');
    }
});

// ============================================
// ADVANCED PRIVACY PROTECTION
// ============================================

const privacyScreen = document.querySelector('.privacy-screen');

// Blur on focus loss (Anti-Snipping)
window.addEventListener('blur', () => {
    if (privacyScreen) {
        privacyScreen.classList.add('active');
        document.title = 'Content Hidden - Protected';
    }
});

window.addEventListener('focus', () => {
    if (privacyScreen) {
        privacyScreen.classList.remove('active');
        document.title = 'Vimalatithyan S | Cybersecurity Portfolio';
    }
});

// Detect DevTools (Basic)
const devtoolsDetector = () => {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;

    if ((widthThreshold || heightThreshold) && privacyScreen) {
        // Optional: trigger protection if needed
    }
};

window.addEventListener('resize', devtoolsDetector);