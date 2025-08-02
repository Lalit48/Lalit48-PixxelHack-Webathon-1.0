// PixxelHack Portfolio - Main JavaScript

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLoader();
    initMobileMenu();
    initScrollAnimations();
    initCustomCursor();
    initButtonEffects();
    initPortfolioInteractions();
    initGalleryInteractions();
    initTeamInteractions();
    initMarquee();
    initServiceCards();
    initWaterEffect();
    initImageHoverEffect(); // Initialize Image Hover Effect
    initCounterAnimation(); // Initialize Counter Animation
    initPortfolioMarquee(); // Initialize Portfolio Marquee with enhanced interactions
});

// Advanced Loader Animation with Multiple Phases
function initLoader() {
    // Get all loader elements
    const loader = document.getElementById('loader');
    const particlesContainer = document.getElementById('particles');
    const mainText = document.querySelector('.loader-main-text');
    const subtext = document.querySelector('.loader-subtext');
    const mainFill = document.querySelector('.main-fill');
    const secondaryFill = document.querySelector('.secondary-fill');
    const statusText = document.querySelector('.status-text');
    const indicators = document.querySelectorAll('.indicator');
    const glitchOverlay = document.querySelector('.glitch-overlay');
    const interactiveBg = document.querySelector('.interactive-bg');
    const morphShapes = document.querySelectorAll('.morph-shape');
    
    // Initialize performance monitoring
    initPerformanceMonitoring();
    
    // Initialize particle system with advanced features
    initAdvancedParticleSystem(particlesContainer);
    
    // Initialize interactive background
    initInteractiveBackground(interactiveBg);
    
    // Initialize morphing shapes
    initMorphingShapes(morphShapes);
    
    // Create main timeline for the entire loader sequence
    const mainTimeline = gsap.timeline({
        onComplete: () => {
            // Final step: hide the entire loader div
            loader.style.display = 'none';
            // Start page animations after loader is completely hidden
            startPageAnimations();
        }
    });
    
    // Phase 1: Initial Setup and Particle Animation (0-1s)
    mainTimeline.add(() => {
        // Start advanced particle animation
        animateAdvancedParticles();
        // Initialize 3D elements with enhanced effects
        initEnhanced3DElements();
        // Start morphing shape animations
        animateMorphingShapes();
    }, 0);
    
    // Phase 2: Text Animation with Advanced Effects (1-3s)
    mainTimeline.to(mainText, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
        onStart: () => {
            gsap.set(mainText, { opacity: 0, scale: 0.5 });
            // Add text glitch effect
            addTextGlitchEffect(mainText);
        }
    }, 1);
    
    mainTimeline.to(subtext, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
    }, 2);
    
    // Phase 3: Progress System with Advanced Features (3-6s)
    mainTimeline.add(() => {
        startAdvancedProgressSystem(mainFill, secondaryFill, statusText, indicators);
    }, 3);
    
    // Phase 4: Enhanced Glitch Effects (4-5s)
    mainTimeline.to(glitchOverlay, {
        opacity: 1,
        duration: 0.1,
        ease: "none",
        repeat: 5,
        yoyo: true,
        onRepeat: () => {
            // Trigger sound effect on glitch
            playLoaderSound('glitch');
        }
    }, 4);
    
    // Phase 5: Text Fade Out with Morphing (6-7s)
    mainTimeline.to([mainText, subtext], {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: () => {
            // Add morphing effect during fade out
            addMorphingEffect(mainText);
        }
    }, 6);
    
    // Phase 6: Final Fade Out with Particle Explosion (7-8s)
    mainTimeline.to(loader, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onStart: () => {
            // Create particle explosion effect
            createParticleExplosion();
            // Play completion sound
            playLoaderSound('complete');
        }
    }, 7);
}

// Performance Monitoring
function initPerformanceMonitoring() {
    let frameCount = 0;
    let lastTime = performance.now();
    
    function checkPerformance() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
            const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            
            // Adjust particle count based on performance
            if (fps < 30) {
                reduceParticleCount();
            }
            
            frameCount = 0;
            lastTime = currentTime;
        }
        
        requestAnimationFrame(checkPerformance);
    }
    
    requestAnimationFrame(checkPerformance);
}

// Advanced Particle System
function initAdvancedParticleSystem(container) {
    const particleCount = 50;
    const particleTypes = ['circle', 'square', 'triangle', 'star'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        
        particle.className = `particle particle-${type}`;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        // Add particle type specific styling
        if (type === 'square') {
            particle.style.borderRadius = '0%';
        } else if (type === 'triangle') {
            particle.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        } else if (type === 'star') {
            particle.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
        }
        
        container.appendChild(particle);
    }
}

function animateAdvancedParticles() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 200;
        const randomRotation = Math.random() * 720 - 360;
        
        gsap.to(particle, {
            x: randomX,
            y: randomY,
            rotation: randomRotation,
            opacity: 0,
            duration: 3 + Math.random() * 2,
            ease: "power1.out",
            delay: index * 0.05,
            repeat: -1,
            yoyo: true
        });
    });
}

// Enhanced 3D Elements Animation
function initEnhanced3DElements() {
    const cube = document.querySelector('.cube');
    const sphere = document.querySelector('.sphere');
    const rings = document.querySelectorAll('.ring');
    
    // Enhanced cube animation with physics simulation
    gsap.to(cube, {
        rotationX: 360,
        rotationY: 360,
        rotationZ: 360,
        duration: 4,
        ease: "none",
        repeat: -1,
        onUpdate: () => {
            // Add wobble effect
            const time = Date.now() * 0.001;
            cube.style.transform += ` translateZ(${Math.sin(time * 2) * 5}px)`;
        }
    });
    
    // Enhanced sphere animation with pulsing and color changes
    gsap.to(sphere, {
        scale: 1.3,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        onUpdate: () => {
            // Dynamic color changes
            const hue = (Date.now() * 0.1) % 360;
            sphere.style.filter = `hue-rotate(${hue}deg)`;
        }
    });
    
    // Enhanced rings animation with wave effect
    rings.forEach((ring, index) => {
        gsap.to(ring, {
            rotation: 360,
            duration: 3 + index,
            ease: "none",
            repeat: -1,
            direction: index % 2 === 0 ? 1 : -1,
            onUpdate: () => {
                // Add wave effect
                const time = Date.now() * 0.001;
                const wave = Math.sin(time * 3 + index) * 10;
                ring.style.transform += ` translateY(${wave}px)`;
            }
        });
    });
}

// Morphing Shapes Animation
function initMorphingShapes(shapes) {
    shapes.forEach((shape, index) => {
        gsap.to(shape, {
            scale: 1.5,
            rotation: 360,
            duration: 4,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.5
        });
    });
}

function animateMorphingShapes() {
    const shapes = document.querySelectorAll('.morph-shape');
    shapes.forEach((shape, index) => {
        const morphSequence = gsap.timeline({ repeat: -1 });
        
        morphSequence
            .to(shape, { borderRadius: '0%', scale: 1.2, duration: 2 })
            .to(shape, { borderRadius: '50% 0% 50% 0%', scale: 0.8, duration: 2 })
            .to(shape, { borderRadius: '0% 50% 0% 50%', scale: 1.1, duration: 2 })
            .to(shape, { borderRadius: '50%', scale: 1, duration: 2 });
    });
}

// Advanced Progress System
function startAdvancedProgressSystem(mainFill, secondaryFill, statusText, indicators) {
    const loadingSteps = [
        "Initializing...",
        "Loading assets...",
        "Preparing interface...",
        "Optimizing performance...",
        "Almost ready..."
    ];
    
    let currentStep = 0;
    let mainProgress = 0;
    let secondaryProgress = 0;
    
    const progressInterval = setInterval(() => {
        // Update main progress with easing
        mainProgress += Math.random() * 15 + 5;
        if (mainProgress > 100) mainProgress = 100;
        
        // Update secondary progress (faster)
        secondaryProgress += Math.random() * 20 + 10;
        if (secondaryProgress > 100) secondaryProgress = 100;
        
        // Update progress bars with smooth animation
        gsap.to(mainFill, {
            width: mainProgress + '%',
            duration: 0.3,
            ease: "power2.out"
        });
        
        gsap.to(secondaryFill, {
            width: secondaryProgress + '%',
            duration: 0.3,
            ease: "power2.out"
        });
        
        // Update status text with typing effect
        if (currentStep < loadingSteps.length) {
            typeText(statusText, loadingSteps[currentStep]);
            currentStep++;
        }
        
        // Animate indicators with advanced effects
        indicators.forEach((indicator, index) => {
            if (mainProgress > (index + 1) * 20) {
                gsap.to(indicator, {
                    scale: 1.5,
                    opacity: 1,
                    duration: 0.3,
                    ease: "back.out(1.7)",
                    onComplete: () => {
                        // Add ripple effect
                        createRippleEffect(indicator);
                    }
                });
            }
        });
        
        // Check if loading is complete
        if (mainProgress >= 100) {
            clearInterval(progressInterval);
            typeText(statusText, "Ready!");
            
            // Final indicator animation with explosion effect
            gsap.to(indicators, {
                scale: 1.2,
                opacity: 1,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)",
                stagger: 0.1,
                onComplete: () => {
                    createIndicatorExplosion();
                }
            });
        }
    }, 200);
}

// Text Effects
function addTextGlitchEffect(element) {
    const glitchInterval = setInterval(() => {
        const originalText = element.textContent;
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        element.textContent = originalText.split('').map(char => 
            Math.random() > 0.95 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
        ).join('');
        
        setTimeout(() => {
            element.textContent = originalText;
        }, 100);
    }, 2000);
    
    // Clear interval after 5 seconds
    setTimeout(() => clearInterval(glitchInterval), 5000);
}

function typeText(element, text) {
    element.textContent = '';
    let index = 0;
    
    const typeInterval = setInterval(() => {
        element.textContent += text[index];
        index++;
        
        if (index >= text.length) {
            clearInterval(typeInterval);
        }
    }, 50);
}

function addMorphingEffect(element) {
    gsap.to(element, {
        skewX: 10,
        skewY: 5,
        duration: 0.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1
    });
}

// Visual Effects
function createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border: 2px solid var(--sky-magenta);
        border-radius: 50%;
        pointer-events: none;
        animation: ripple 0.6s ease-out;
    `;
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function createParticleExplosion() {
    const explosionParticles = 20;
    const loader = document.getElementById('loader');
    
    for (let i = 0; i < explosionParticles; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--sky-magenta);
            border-radius: 50%;
            left: 50%;
            top: 50%;
            pointer-events: none;
        `;
        
        loader.appendChild(particle);
        
        const angle = (i / explosionParticles) * Math.PI * 2;
        const distance = 100 + Math.random() * 50;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        gsap.to(particle, {
            x: x,
            y: y,
            opacity: 0,
            scale: 0,
            duration: 1,
            ease: "power2.out",
            delay: Math.random() * 0.5
        });
        
        setTimeout(() => particle.remove(), 1000);
    }
}

function createIndicatorExplosion() {
    const indicators = document.querySelectorAll('.indicator');
    
    indicators.forEach((indicator, index) => {
        gsap.to(indicator, {
            scale: 2,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: index * 0.1
        });
    });
}

// Performance Optimization
function reduceParticleCount() {
    const particles = document.querySelectorAll('.particle');
    const removeCount = Math.floor(particles.length * 0.3);
    
    for (let i = 0; i < removeCount; i++) {
        if (particles[i]) {
            particles[i].remove();
        }
    }
}

// Interactive Background
function initInteractiveBackground(bg) {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        bg.style.setProperty('--mouse-x', x + '%');
        bg.style.setProperty('--mouse-y', y + '%');
    });
}

// Sound Effects (Optional)
function playLoaderSound(type) {
    // Create audio context for sound effects
    if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
        const audioContext = new (AudioContext || webkitAudioContext)();
        
        switch(type) {
            case 'progress':
                playProgressSound(audioContext);
                break;
            case 'complete':
                playCompleteSound(audioContext);
                break;
            case 'glitch':
                playGlitchSound(audioContext);
                break;
        }
    }
}

function playProgressSound(audioContext) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

function playCompleteSound(audioContext) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.2);
    oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.4);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.4);
}

function playGlitchSound(audioContext) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Create glitch effect with random frequency changes
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.05);
    oscillator.frequency.setValueAtTime(300, audioContext.currentTime + 0.1);
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.15);
    
    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime + 0.05);
    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.01, audioContext.currentTime + 0.15);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
}

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on links
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    // Hero text animation
    gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.hero-text',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    // Services section animations
    gsap.from('#services h2', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '#services',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from('#services p', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '#services',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    // Service cards staggered animation
    gsap.from('.service-card', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '#services',
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    // Portfolio section animations
    gsap.from('#portfolio h2', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '#portfolio',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from('#portfolio p', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '#portfolio',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    // Portfolio items staggered animation
    gsap.from('.portfolio-item', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '#portfolio',
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    // Service card hover animations
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Portfolio item hover animations
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -10,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Service icon animations
    gsap.from('.service-icon', {
        scale: 0,
        rotation: 180,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: '#services',
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    // Continuous floating animation for service cards
    serviceCards.forEach((card, index) => {
        gsap.to(card, {
            y: -5,
            duration: 2 + index * 0.2,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.1
        });
    });

    // Portfolio image hover effects
    portfolioItems.forEach(item => {
        const image = item.querySelector('.portfolio-image');
        const overlay = item.querySelector('.portfolio-overlay');
        
        item.addEventListener('mouseenter', () => {
            gsap.to(overlay, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            gsap.to(image, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(overlay, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            });
            gsap.to(image, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// Custom Cursor
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isInGallery = false;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth cursor follow with GSAP for better performance
    function updateCursor() {
        gsap.to(cursor, {
            x: mouseX - 10,
            y: mouseY - 10,
            duration: 0.1,
            ease: "power2.out"
        });
        
        requestAnimationFrame(updateCursor);
    }
    updateCursor();
    
                    // Gallery-specific cursor effects
                const galleryContainer = document.querySelector('.gallery-container');
                const polaroids = document.querySelectorAll('.polaroid');
                
                if (galleryContainer) {
                    galleryContainer.addEventListener('mouseenter', () => {
                        isInGallery = true;
                        cursor.style.opacity = '1';
                        cursor.style.transform = 'scale(1)';
                        cursor.style.background = 'radial-gradient(circle, #d076bc 0%, #c0bbdf 100%)';
                        cursor.style.boxShadow = '0 0 20px rgba(208, 118, 188, 0.5), 0 0 40px rgba(192, 187, 223, 0.3)';
                    });
                    
                    galleryContainer.addEventListener('mouseleave', () => {
                        isInGallery = false;
                        cursor.style.opacity = '0';
                        cursor.style.transform = 'scale(0)';
                        cursor.style.background = '#d076bc';
                        cursor.style.boxShadow = 'none';
                    });
                    
                    // Enhanced polaroid hover effects
                    polaroids.forEach(polaroid => {
                        polaroid.addEventListener('mouseenter', () => {
                            if (isInGallery) {
                                gsap.to(cursor, {
                                    scale: 1.5,
                                    duration: 0.3,
                                    ease: "power2.out"
                                });
                                cursor.style.background = 'radial-gradient(circle, #e6dda2 0%, #d076bc 100%)';
                                cursor.style.boxShadow = '0 0 30px rgba(230, 221, 162, 0.6), 0 0 60px rgba(208, 118, 188, 0.4)';
                                
                                // Create cursor trail effect
                                createCursorTrail(mouseX, mouseY);
                            }
                        });
                        
                        polaroid.addEventListener('mouseleave', () => {
                            if (isInGallery) {
                                gsap.to(cursor, {
                                    scale: 1,
                                    duration: 0.3,
                                    ease: "power2.out"
                                });
                                cursor.style.background = 'radial-gradient(circle, #d076bc 0%, #c0bbdf 100%)';
                                cursor.style.boxShadow = '0 0 20px rgba(208, 118, 188, 0.5), 0 0 40px rgba(192, 187, 223, 0.3)';
                            }
                        });
                    });
                }
    
    // General cursor effects on hover
    const hoverElements = document.querySelectorAll('a, button, .portfolio-item, .service-card');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            if (!isInGallery) {
                cursor.style.transform = 'scale(2)';
                cursor.style.background = '#e6dda2';
            }
        });
        
        element.addEventListener('mouseleave', () => {
            if (!isInGallery) {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = '#d076bc';
            }
        });
    });
}

// Create cursor trail effect
function createCursorTrail(x, y) {
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    trail.style.width = '20px';
    trail.style.height = '20px';
    trail.style.background = 'rgba(208, 118, 188, 0.3)';
    trail.style.borderRadius = '50%';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '9998';
    document.body.appendChild(trail);
    
    gsap.to(trail, {
        scale: 3,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        onComplete: () => {
            trail.remove();
        }
    });
}

// Button Effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Portfolio Interactions
function initPortfolioInteractions() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        item.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

        // Classic Gallery Interactions
        function initGalleryInteractions() {
            const polaroids = document.querySelectorAll('.polaroid');
            const photoAlbum = document.querySelector('.photo-album');
            const filterButtons = document.querySelectorAll('.neo-btn');
            
            console.log('Classic Gallery initialization - Polaroids found:', polaroids.length, 'Photo album found:', !!photoAlbum);
            
            // Check if elements exist
            if (!polaroids.length || !photoAlbum) {
                console.warn('Gallery elements not found');
                return;
            }
            
            // Ensure all polaroids and images are visible immediately
            polaroids.forEach((polaroid, index) => {
                // Force visibility
                polaroid.style.opacity = '1';
                polaroid.style.visibility = 'visible';
                
                const img = polaroid.querySelector('img');
                if (img) {
                    img.style.opacity = '1';
                    img.style.visibility = 'visible';
                }
                
                // Classic entrance animation
                polaroid.style.transform = 'scale(0.8) rotate(0deg)';
                polaroid.style.transition = 'all 0.6s ease-out';
                
                // Staggered entrance
                setTimeout(() => {
                    // Get the original rotation from CSS classes
                    const imgClass = polaroid.className.match(/img\d+/)?.[0];
                    const originalRotation = getComputedStyle(polaroid).transform;
                    polaroid.style.transform = 'scale(1) rotate(0deg)';
                }, index * 100);
                
                // Enhanced hover effects
                polaroid.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.05) rotate(0deg)';
                    this.style.zIndex = '999';
                    this.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(208, 118, 188, 0.3)';
                    
                    if (img) {
                        img.style.filter = 'contrast(1.2) brightness(1.1) saturate(1.1)';
                    }
                });
                
                polaroid.addEventListener('mouseleave', function() {
                    // Get the original rotation from CSS classes
                    const imgClass = this.className.match(/img\d+/)?.[0];
                    const originalRotation = getComputedStyle(this).transform;
                    this.style.transform = 'scale(1) rotate(0deg)';
                    this.style.zIndex = '2';
                    this.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.3)';
                    
                    if (img) {
                        img.style.filter = 'contrast(1.1) brightness(1.05)';
                    }
                });
                
                // Click effect
                polaroid.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Create ripple effect
                    createClassicRippleEffect(this, e);
                    
                    // Bounce effect
                    this.style.transform = 'scale(0.95) rotate(0deg)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1.05) rotate(0deg)';
                        setTimeout(() => {
                            this.style.transform = 'scale(1) rotate(0deg)';
                        }, 150);
                    }, 150);
                });
            });
            
            // Filter functionality
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const filter = this.getAttribute('data-filter');
                    
                    // Update active button
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Filter polaroids
                    polaroids.forEach(polaroid => {
                        const category = polaroid.getAttribute('data-category');
                        
                        if (filter === 'all' || category === filter) {
                            polaroid.style.opacity = '1';
                            polaroid.style.transform = polaroid.style.transform || 'scale(1) rotate(0deg)';
                            polaroid.style.pointerEvents = 'auto';
                        } else {
                            polaroid.style.opacity = '0.3';
                            polaroid.style.transform = 'scale(0.8) rotate(0deg)';
                            polaroid.style.pointerEvents = 'none';
                        }
                    });
                });
            });
            
            console.log('Classic Gallery interactions initialized successfully');
        }
        
        // Create classic ripple effect
        function createClassicRippleEffect(polaroid, event) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'radial-gradient(circle, rgba(208, 118, 188, 0.4), transparent)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'classicRipple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            ripple.style.zIndex = '1000';
            
            const rect = polaroid.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
            
            polaroid.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }

// Team Interactions
function initTeamInteractions() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        const photo = member.querySelector('.team-photo');
        
        member.addEventListener('mouseenter', function() {
            gsap.to(photo, {
                scale: 1.1,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
        
        member.addEventListener('mouseleave', function() {
            gsap.to(photo, {
                scale: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
}

// Marquee Animation with Pause on Hover
function initMarquee() {
    const marqueeContent = document.querySelector('.marquee-content');
    const marqueeContainer = document.querySelector('.marquee-container');
    
    if (marqueeContent && marqueeContainer) {
        // Clone content for seamless loop
        const clone = marqueeContent.cloneNode(true);
        marqueeContent.parentNode.appendChild(clone);
        
        // GSAP animation for smoother performance
        const marqueeTween = gsap.to(marqueeContent, {
            x: '-50%',
            duration: 30,
            ease: 'none',
            repeat: -1
        });
        
        // Pause on hover functionality
        marqueeContainer.addEventListener('mouseenter', () => {
            marqueeTween.pause();
            // Add visual feedback for paused state
            marqueeContainer.style.cursor = 'pointer';
            marqueeContainer.style.opacity = '0.8';
        });
        
        marqueeContainer.addEventListener('mouseleave', () => {
            marqueeTween.resume();
            // Remove visual feedback
            marqueeContainer.style.cursor = 'default';
            marqueeContainer.style.opacity = '1';
        });
        
        // Add click to restart functionality
        marqueeContainer.addEventListener('click', () => {
            marqueeTween.restart();
        });
    }
}

// Service Cards Animation
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -10,
                duration: 0.5,
                ease: 'power2.out'
            });
            
            const icon = this.querySelector('.service-icon');
            if (icon) {
                gsap.to(icon, {
                    scale: 1.1,
                    rotation: 5,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
            
            const icon = this.querySelector('.service-icon');
            if (icon) {
                gsap.to(icon, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    });
}

// Enhanced Water Effect
function initWaterEffect() {
    const waterContainer = document.querySelector('.water-effect-container');
    if (!waterContainer) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let isMouseMoving = false;
    let mouseMoveTimeout;

    // Enhanced interactive water wave effect
    function updateWaterEffect() {
        const waves = document.querySelectorAll('.water-wave');
        const bubbles = document.querySelectorAll('.water-bubble');
        const surface = document.querySelector('.water-surface');
        const splash = document.querySelector('.water-splash');
        const ripples = document.querySelector('.water-ripples');
        
        // Calculate mouse influence on waves
        const mouseInfluence = (mouseX - window.innerWidth / 2) / window.innerWidth;
        const mouseYInfluence = (mouseY - window.innerHeight / 2) / window.innerHeight;
        
        // Enhanced wave movement with more dynamic effects
        waves.forEach((wave, index) => {
            const waveInfluence = mouseInfluence * (index + 1) * 0.15;
            const time = Date.now() * 0.001;
            const waveHeight = Math.sin(time + index * 0.5) * 8;
            const waveScale = 1 + Math.sin(time * 0.002 + index) * 0.15;
            const waveRotation = Math.sin(time * 0.001 + index) * 2;
            
            wave.style.transform = `
                translateX(${-50 + waveInfluence}%) 
                translateY(${waveHeight}px) 
                scaleY(${waveScale}) 
                rotate(${waveRotation}deg)
            `;
            
            // Add glow effect based on mouse position
            if (isMouseMoving) {
                wave.style.filter = `blur(${0.3 + index * 0.1}px) brightness(${1.1 + Math.abs(mouseInfluence) * 0.2})`;
            } else {
                wave.style.filter = `blur(${0.3 + index * 0.1}px)`;
            }
        });
        
        // Enhanced bubble movement with more organic motion
        bubbles.forEach((bubble, index) => {
            const bubbleInfluence = mouseInfluence * 0.08;
            const time = Date.now() * 0.001;
            const bubbleWobble = Math.sin(time * 2 + index) * 3;
            const bubbleScale = 1 + Math.sin(time * 1.5 + index) * 0.1;
            
            bubble.style.transform = `
                translateX(${bubbleInfluence + bubbleWobble}px) 
                scale(${bubbleScale})
            `;
            
            // Add glow effect to bubbles
            if (isMouseMoving) {
                bubble.style.boxShadow = `
                    inset 0 0 15px rgba(255, 255, 255, 0.5),
                    0 0 30px rgba(255, 255, 255, 0.3),
                    0 0 50px rgba(255, 255, 255, 0.2)
                `;
            }
        });
        
        // Enhanced surface effects
        if (surface) {
            const surfaceWobble = Math.sin(Date.now() * 0.0005) * 3;
            surface.style.transform = `translateY(${surfaceWobble}px) scaleY(${1 + Math.abs(mouseInfluence) * 0.05})`;
        }
        
        // Enhanced splash effects
        if (splash && isMouseMoving) {
            splash.style.opacity = '0.8';
            splash.style.transform = `translateX(-50%) scaleY(${1.3 + Math.abs(mouseInfluence) * 0.2})`;
        }
        
        // Enhanced ripple effects
        if (ripples && isMouseMoving) {
            ripples.style.opacity = '0.6';
            ripples.style.transform = `scale(${1.15 + Math.abs(mouseInfluence) * 0.1})`;
        }

        requestAnimationFrame(updateWaterEffect);
    }
    updateWaterEffect();

    // Enhanced mouse tracking with movement detection
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Set mouse moving state
        isMouseMoving = true;
        clearTimeout(mouseMoveTimeout);
        
        // Create more frequent ripple effects
        if (Math.random() > 0.85) {
            createWaterRipple(e.clientX, e.clientY);
        }
        
        // Reset mouse moving state after 100ms of no movement
        mouseMoveTimeout = setTimeout(() => {
            isMouseMoving = false;
        }, 100);
    });

    // Enhanced click effects
    document.addEventListener('click', (e) => {
        if (e.target.closest('#home')) {
            createWaterRipple(e.clientX, e.clientY, true);
            createWaterSplash(e.clientX, e.clientY);
        }
    });

    // More frequent dynamic bubble generation
    setInterval(() => {
        if (Math.random() > 0.6) {
            createDynamicBubble();
        }
    }, 1500);
    
    // Additional bubble generation on mouse movement
    setInterval(() => {
        if (isMouseMoving && Math.random() > 0.8) {
            createDynamicBubble();
        }
    }, 800);
}

// Create enhanced water ripple effect
function createWaterRipple(x, y, isClick = false) {
    const ripple = document.createElement('div');
    ripple.className = 'water-ripple';
    ripple.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 0;
        height: 0;
        border: 3px solid rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10;
        animation: rippleExpand ${isClick ? '1.2s' : '2.5s'} ease-out forwards;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    `;
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, isClick ? 1200 : 2500);
}

// Create water splash effect
function createWaterSplash(x, y) {
    const splash = document.createElement('div');
    splash.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9;
        animation: splashExpand 1.5s ease-out forwards;
    `;
    
    document.body.appendChild(splash);
    
    setTimeout(() => {
        splash.remove();
    }, 1500);
}

// Create dynamic bubble
function createDynamicBubble() {
    const waterContainer = document.querySelector('.water-effect-container');
    if (!waterContainer) return;
    
    const bubble = document.createElement('div');
    bubble.className = 'water-bubble dynamic-bubble';
    bubble.style.cssText = `
        position: absolute;
        width: ${Math.random() * 8 + 4}px;
        height: ${Math.random() * 8 + 4}px;
        left: ${Math.random() * 100}%;
        bottom: 0;
        background: radial-gradient(circle at 30% 30%, 
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%);
        border-radius: 50%;
        box-shadow: 
            inset 0 0 10px rgba(255, 255, 255, 0.3),
            0 0 20px rgba(255, 255, 255, 0.1);
        animation: bubbleFloat ${Math.random() * 4 + 6}s ease-in-out forwards;
        pointer-events: none;
    `;
    
    waterContainer.appendChild(bubble);
    
    setTimeout(() => {
        bubble.remove();
    }, 10000);
}

// Start Page Animations
function startPageAnimations() {
    // Animate hero section
    gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.5
    });
    
    // Animate navigation
    gsap.from('nav', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax Effect for Background Elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in, .scroll-text').forEach(el => {
    observer.observe(el);
});

// Page Transition Effect
function createPageTransition() {
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    document.body.appendChild(transition);
    
    return transition;
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Refresh ScrollTrigger on resize
    ScrollTrigger.refresh();
}, 250));

// Add loading class to body initially
document.body.classList.add('loading');

// Remove loading class after everything is ready
window.addEventListener('load', () => {
    document.body.classList.remove('loading');
});

// Add ripple effect styles dynamically
const rippleStyles = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = rippleStyles;
document.head.appendChild(styleSheet);

// Performance optimization: Use requestAnimationFrame for smooth animations
let ticking = false;

function updateAnimations() {
    // Update any continuous animations here
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

// Initialize performance monitoring
if ('performance' in window) {
    window.addEventListener('scroll', requestTick);
    window.addEventListener('resize', requestTick);
}

console.log('PixxelHack Portfolio - JavaScript Loaded Successfully! 🚀'); 

// Initialize Image Hover Effect with dynamic amoeba shapes
function initImageHoverEffect() {
    const amoebaMasks = document.querySelectorAll('.amoeba-mask');
    
    if (amoebaMasks.length === 0) return;
    
    // Array of different amoeba shape functions
    const amoebaShapes = [
        // Shape 1 - Organic blob
        () => `polygon(${Math.random() * 30 + 10}% ${Math.random() * 20 + 10}%, ${Math.random() * 30 + 60}% ${Math.random() * 20 + 10}%, ${Math.random() * 30 + 70}% ${Math.random() * 30 + 40}%, ${Math.random() * 30 + 60}% ${Math.random() * 30 + 70}%, ${Math.random() * 30 + 30}% ${Math.random() * 30 + 80}%, ${Math.random() * 30 + 10}% ${Math.random() * 30 + 60}%, ${Math.random() * 30 + 20}% ${Math.random() * 30 + 30}%, ${Math.random() * 30 + 40}% ${Math.random() * 30 + 20}%)`,
        
        // Shape 2 - Spiral-like
        () => `polygon(${Math.random() * 40 + 30}% ${Math.random() * 20 + 5}%, ${Math.random() * 30 + 60}% ${Math.random() * 20 + 15}%, ${Math.random() * 30 + 70}% ${Math.random() * 30 + 35}%, ${Math.random() * 30 + 55}% ${Math.random() * 30 + 65}%, ${Math.random() * 30 + 35}% ${Math.random() * 30 + 75}%, ${Math.random() * 30 + 15}% ${Math.random() * 30 + 55}%, ${Math.random() * 30 + 25}% ${Math.random() * 30 + 25}%, ${Math.random() * 30 + 45}% ${Math.random() * 30 + 15}%)`,
        
        // Shape 3 - Tentacle-like
        () => `polygon(${Math.random() * 20 + 20}% ${Math.random() * 20 + 20}%, ${Math.random() * 30 + 50}% ${Math.random() * 20 + 10}%, ${Math.random() * 30 + 80}% ${Math.random() * 20 + 20}%, ${Math.random() * 30 + 70}% ${Math.random() * 30 + 50}%, ${Math.random() * 30 + 50}% ${Math.random() * 30 + 70}%, ${Math.random() * 30 + 20}% ${Math.random() * 30 + 60}%, ${Math.random() * 30 + 10}% ${Math.random() * 30 + 40}%, ${Math.random() * 30 + 30}% ${Math.random() * 30 + 30}%)`,
        
        // Shape 4 - Bubble cluster
        () => `polygon(${Math.random() * 25 + 15}% ${Math.random() * 25 + 15}%, ${Math.random() * 25 + 60}% ${Math.random() * 25 + 10}%, ${Math.random() * 25 + 85}% ${Math.random() * 25 + 25}%, ${Math.random() * 25 + 75}% ${Math.random() * 25 + 60}%, ${Math.random() * 25 + 50}% ${Math.random() * 25 + 80}%, ${Math.random() * 25 + 20}% ${Math.random() * 25 + 75}%, ${Math.random() * 25 + 10}% ${Math.random() * 25 + 50}%, ${Math.random() * 25 + 25}% ${Math.random() * 25 + 35}%)`,
        
        // Shape 5 - Wave-like
        () => `polygon(${Math.random() * 20 + 10}% ${Math.random() * 20 + 30}%, ${Math.random() * 20 + 30}% ${Math.random() * 20 + 20}%, ${Math.random() * 20 + 60}% ${Math.random() * 20 + 15}%, ${Math.random() * 20 + 80}% ${Math.random() * 20 + 25}%, ${Math.random() * 20 + 70}% ${Math.random() * 20 + 45}%, ${Math.random() * 20 + 50}% ${Math.random() * 20 + 65}%, ${Math.random() * 20 + 30}% ${Math.random() * 20 + 70}%, ${Math.random() * 20 + 15}% ${Math.random() * 20 + 55}%)`,
        
        // Shape 6 - Fractal-like
        () => `polygon(${Math.random() * 15 + 25}% ${Math.random() * 15 + 25}%, ${Math.random() * 15 + 60}% ${Math.random() * 15 + 20}%, ${Math.random() * 15 + 75}% ${Math.random() * 15 + 40}%, ${Math.random() * 15 + 65}% ${Math.random() * 15 + 65}%, ${Math.random() * 15 + 45}% ${Math.random() * 15 + 75}%, ${Math.random() * 15 + 25}% ${Math.random() * 15 + 65}%, ${Math.random() * 15 + 15}% ${Math.random() * 15 + 45}%, ${Math.random() * 15 + 35}% ${Math.random() * 15 + 35}%)`
    ];
    
    // Function to generate random amoeba shape
    function generateRandomAmoebaShape() {
        const randomShapeIndex = Math.floor(Math.random() * amoebaShapes.length);
        return amoebaShapes[randomShapeIndex]();
    }
    
    // Function to update amoeba shapes
    function updateAmoebaShapes() {
        amoebaMasks.forEach((mask, index) => {
            // Add a small delay for each mask to create a wave effect
            setTimeout(() => {
                const newShape = generateRandomAmoebaShape();
                mask.style.clipPath = newShape;
                
                // Add a subtle glow effect
                mask.style.filter = `drop-shadow(0 0 10px rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3))`;
            }, index * 100);
        });
    }
    
    // Update shapes every 3 seconds
    setInterval(updateAmoebaShapes, 3000);
    
    // Initial shape generation
    updateAmoebaShapes();
    
    // Add hover event listeners for enhanced interaction
    amoebaMasks.forEach((mask, index) => {
        const container = mask.closest('.image-hover-container');
        
        container.addEventListener('mouseenter', () => {
            // Accelerate shape changes on hover
            const hoverInterval = setInterval(() => {
                const newShape = generateRandomAmoebaShape();
                mask.style.clipPath = newShape;
                mask.style.filter = `drop-shadow(0 0 15px rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5))`;
            }, 500);
            
            // Store the interval ID to clear it later
            container.dataset.hoverInterval = hoverInterval;
        });
        
        container.addEventListener('mouseleave', () => {
            // Clear the accelerated interval
            if (container.dataset.hoverInterval) {
                clearInterval(parseInt(container.dataset.hoverInterval));
                delete container.dataset.hoverInterval;
            }
            
            // Reset to normal animation
            mask.style.filter = 'none';
        });
    });
    
    // Add click effect for extra interactivity
    amoebaMasks.forEach((mask) => {
        const container = mask.closest('.image-hover-container');
        
        container.addEventListener('click', () => {
            // Create a ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.top = '50%';
            ripple.style.left = '50%';
            ripple.style.width = '0';
            ripple.style.height = '0';
            ripple.style.borderRadius = '50%';
            ripple.style.background = `radial-gradient(circle, rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3) 0%, transparent 70%)`;
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.pointerEvents = 'none';
            ripple.style.zIndex = '1000';
            ripple.style.transition = 'all 0.6s ease-out';
            
            container.appendChild(ripple);
            
            // Animate the ripple
            setTimeout(() => {
                ripple.style.width = '200px';
                ripple.style.height = '200px';
                ripple.style.opacity = '0';
            }, 10);
            
            // Remove the ripple after animation
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
            
            // Generate a new random shape on click
            const newShape = generateRandomAmoebaShape();
            mask.style.clipPath = newShape;
        });
    });
}

// Initialize Counter Animation
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter-number');
    
    if (counters.length === 0) return;
    
    // Create Intersection Observer for scroll-triggered animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const suffix = counter.getAttribute('data-suffix') || '';
                
                // Start the counter animation
                animateCounter(counter, target, suffix);
                
                // Unobserve after animation starts
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe all counters
    counters.forEach(counter => {
        observer.observe(counter);
    });
    
    // Counter animation function
    function animateCounter(element, target, suffix) {
        let current = 0;
        const increment = target / 100; // Smooth increment
        const duration = 2000; // 2 seconds
        const stepTime = duration / 100;
        
        // Add animating class for visual effects
        element.classList.add('animating');
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= target) {
                current = target;
                clearInterval(timer);
                
                // Add completed class for final animation
                element.classList.remove('animating');
                element.classList.add('completed');
                
                // Remove completed class after animation
                setTimeout(() => {
                    element.classList.remove('completed');
                }, 800);
            }
            
            // Update the display with suffix
            element.textContent = Math.floor(current) + suffix;
            
            // Add pulse effect during counting
            if (Math.floor(current) % 10 === 0) {
                element.classList.add('animate');
                setTimeout(() => {
                    element.classList.remove('animate');
                }, 600);
            }
        }, stepTime);
    }
    
    // Add click-to-restart functionality
    counters.forEach(counter => {
        counter.addEventListener('click', () => {
            const target = parseInt(counter.getAttribute('data-target'));
            const suffix = counter.getAttribute('data-suffix') || '';
            
            // Reset to 0
            counter.textContent = '0' + suffix;
            counter.classList.remove('completed', 'animating');
            
            // Restart animation
            animateCounter(counter, target, suffix);
        });
    });
    
    // Add hover effects for extra interactivity
    counters.forEach(counter => {
        counter.addEventListener('mouseenter', () => {
            if (!counter.classList.contains('animating')) {
                counter.style.transform = 'scale(1.05)';
                counter.style.textShadow = '0 0 15px currentColor';
            }
        });
        
        counter.addEventListener('mouseleave', () => {
            if (!counter.classList.contains('animating')) {
                counter.style.transform = 'scale(1)';
                counter.style.textShadow = 'none';
            }
        });
    });
} 

// Initialize Portfolio Horizontal Marquee with enhanced interactions
function initPortfolioMarquee() {
    const marqueeTrack = document.querySelector('.portfolio-marquee-track');
    const marqueeItems = document.querySelectorAll('.portfolio-marquee-item');
    
    if (!marqueeTrack || marqueeItems.length === 0) return;
    
    // Clone items for seamless horizontal loop
    const originalItems = Array.from(marqueeItems);
    originalItems.forEach(item => {
        const clone = item.cloneNode(true);
        marqueeTrack.appendChild(clone);
    });
    
    // Set up horizontal positioning and interactions
    const allItems = document.querySelectorAll('.portfolio-marquee-item');
    allItems.forEach((item, index) => {
        // Add staggered entrance animation
        item.style.animationDelay = `${index * 0.2}s`;
        
        // Enhanced hover effects
        item.addEventListener('mouseenter', () => {
            // Pause scroll animation
            marqueeTrack.style.animationPlayState = 'paused';
            
            // Add glow effect
            item.style.boxShadow = '0 0 30px rgba(208, 118, 188, 0.5)';
            
            // Create ripple effect
            createPortfolioRipple(item);
            
            // Add floating particles
            createPortfolioParticles(item);
        });
        
        item.addEventListener('mouseleave', () => {
            // Resume scroll animation
            marqueeTrack.style.animationPlayState = 'running';
            
            // Remove glow effect
            item.style.boxShadow = '';
            
            // Remove particles
            removePortfolioParticles(item);
        });
        
        // Click interaction
        item.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') return; // Don't interfere with button clicks
            
            // Create explosion effect
            createPortfolioExplosion(item);
            
            // Add temporary glow
            item.style.boxShadow = '0 0 50px rgba(208, 118, 188, 0.8)';
            setTimeout(() => {
                item.style.boxShadow = '';
            }, 1000);
        });
    });
    
    // Auto-adjust speed based on screen size
    function adjustMarqueeSpeed() {
        const screenWidth = window.innerWidth;
        let duration = 40; // Default 40s for horizontal scroll
        
        if (screenWidth <= 480) duration = 25;
        else if (screenWidth <= 768) duration = 30;
        else if (screenWidth <= 1024) duration = 35;
        
        marqueeTrack.style.animationDuration = `${duration}s`;
    }
    
    // Adjust speed on resize
    window.addEventListener('resize', debounce(adjustMarqueeSpeed, 250));
    adjustMarqueeSpeed();
    
    // Add scroll-based speed control
    let isScrolling = false;
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            marqueeTrack.style.animationPlayState = 'paused';
            isScrolling = true;
        }
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            marqueeTrack.style.animationPlayState = 'running';
            isScrolling = false;
        }, 100);
    });
    
    // Add mouse wheel control for scroll speed
    let scrollSpeed = 1;
    const container = document.querySelector('.portfolio-marquee-container');
    
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        
        if (e.deltaY > 0) {
            scrollSpeed = Math.max(0.5, scrollSpeed - 0.1);
        } else {
            scrollSpeed = Math.min(2, scrollSpeed + 0.1);
        }
        
        marqueeTrack.style.animationDuration = `${40 / scrollSpeed}s`;
    });
    
    // Add touch/swipe support for mobile
    let touchStartX = 0;
    let touchStartY = 0;
    
    container.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });
    
    container.addEventListener('touchmove', (e) => {
        e.preventDefault();
        
        const touchEndX = e.touches[0].clientX;
        const touchEndY = e.touches[0].clientY;
        
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // Horizontal swipe controls scroll speed
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
                scrollSpeed = Math.min(2, scrollSpeed + 0.1);
            } else {
                scrollSpeed = Math.max(0.5, scrollSpeed - 0.1);
            }
            marqueeTrack.style.animationDuration = `${40 / scrollSpeed}s`;
        }
    });
}

// Create ripple effect for portfolio items
function createPortfolioRipple(item) {
    const ripple = document.createElement('div');
    ripple.className = 'portfolio-ripple';
    ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(208, 118, 188, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 1;
        animation: portfolioRippleExpand 1s ease-out forwards;
    `;
    
    item.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 1000);
}

// Create floating particles for portfolio items
function createPortfolioParticles(item) {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'portfolio-particles';
    particleContainer.style.cssText = `
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 2;
    `;
    
    // Create multiple particles
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: ${['#d076bc', '#e6dda2', '#c0bbdf', '#266b45'][i % 4]};
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: portfolioParticleFloat 3s ease-in-out infinite;
            animation-delay: ${i * 0.2}s;
        `;
        particleContainer.appendChild(particle);
    }
    
    item.appendChild(particleContainer);
}

// Remove portfolio particles
function removePortfolioParticles(item) {
    const particles = item.querySelector('.portfolio-particles');
    if (particles) {
        particles.style.opacity = '0';
        setTimeout(() => {
            if (particles.parentNode) {
                particles.parentNode.removeChild(particles);
            }
        }, 300);
    }
}

// Create explosion effect for portfolio items
function createPortfolioExplosion(item) {
    const rect = item.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Create explosion particles
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 200;
        
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: ${['#d076bc', '#e6dda2', '#c0bbdf', '#266b45'][i % 4]};
            border-radius: 50%;
            top: ${centerY}px;
            left: ${centerX}px;
            pointer-events: none;
            z-index: 9999;
            animation: portfolioExplosion 1s ease-out forwards;
        `;
        
        // Add custom animation for random movement
        particle.animate([
            { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
            { opacity: 1 },
            { 
                transform: `translate(calc(-50% + ${randomX}px), calc(-50% + ${randomY}px)) scale(0)`, 
                opacity: 0 
            }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }
} 