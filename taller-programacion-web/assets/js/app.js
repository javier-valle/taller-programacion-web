const nav = document.getElementById('mainNav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

function initNavbar() {
    let ticking = false;

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                nav.classList.toggle('is-scrolled', window.scrollY > 50);
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

function initMobileMenu() {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navMenu.querySelectorAll('.bl-nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('is-open') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
            navMenu.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            navToggle.focus();
        }
    });
}

function initScrollReveal() {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!elements.length) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
        elements.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (navMenu.classList.contains('is-open')) {
                    navMenu.classList.remove('is-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }
            }
        });
    });
}

function initFormValidation() {
    const form = document.getElementById('reservationForm');
    if (!form) return;

    const fechaInput = document.getElementById('fecha');
    const today = new Date().toISOString().split('T')[0];
    fechaInput.setAttribute('min', today);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        form.querySelectorAll('[required]').forEach(field => {
            const errorEl = field.parentElement.querySelector('.bl-field__error');
            if (!field.value.trim()) {
                field.classList.add('is-invalid');
                if (errorEl) errorEl.style.display = 'block';
                isValid = false;
            } else {
                field.classList.remove('is-invalid');
                if (errorEl) errorEl.style.display = 'none';
            }
        });

        const emailField = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailField.value && !emailRegex.test(emailField.value)) {
            emailField.classList.add('is-invalid');
            const err = emailField.parentElement.querySelector('.bl-field__error');
            if (err) err.style.display = 'block';
            isValid = false;
        }

        if (fechaInput.value && fechaInput.value < today) {
            fechaInput.classList.add('is-invalid');
            const err = fechaInput.parentElement.querySelector('.bl-field__error');
            if (err) err.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            const btn = form.querySelector('.bl-btn');
            btn.innerHTML = '<span>✓ Reserva Confirmada</span>';
            btn.disabled = true;
            btn.style.background = 'var(--color-success)';
            btn.style.boxShadow = '0 4px 20px rgba(46, 204, 113, 0.3)';
            setTimeout(() => {
                form.reset();
                btn.innerHTML = '<span>Confirmar Reserva</span><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>';
                btn.disabled = false;
                btn.style.background = '';
                btn.style.boxShadow = '';
            }, 2800);
        }
    });

    form.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('input', () => {
            field.classList.remove('is-invalid');
            const err = field.parentElement.querySelector('.bl-field__error');
            if (err) err.style.display = 'none';
        });
    });
}

function initPauseLoops() {
    const animatedElements = document.querySelectorAll('.bl-wave, .bl-audio-vis__icon');
    if (!animatedElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
        });
    }, { threshold: 0 });

    animatedElements.forEach(el => {
        observer.observe(el);
        const parent = el.closest('[data-reveal]');
        if (parent) {
            const parentObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const waves = entry.target.querySelectorAll('.bl-wave, .bl-audio-vis__icon');
                    waves.forEach(w => {
                        w.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
                    });
                });
            }, { threshold: 0 });
            parentObserver.observe(parent);
        }
    });
}

function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.bl-nav__link');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.style.color = '';
                    link.style.background = '';
                    if (link.getAttribute('href') === '#' + id && !link.classList.contains('bl-nav__link--cta')) {
                        link.style.color = 'var(--color-white)';
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-72px 0px -50% 0px'
    });

    sections.forEach(section => observer.observe(section));
}

function initParallaxSubtle() {
    const hero = document.querySelector('.bl-hero__bg');
    if (!hero) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.scrollY;
                if (scrolled < window.innerHeight) {
                    hero.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    let ticking = false;
    function updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = progress + '%';
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateProgress);
            ticking = true;
        }
    }, { passive: true });
}

function initWhatsAppButton() {
    const btn = document.querySelector('.bl-whatsapp');
    if (!btn) return;

    btn.style.opacity = '0';
    btn.style.pointerEvents = 'none';
    btn.style.transition = 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
    btn.style.transform = 'translateY(20px)';

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const show = window.scrollY > 400;
                btn.style.opacity = show ? '1' : '0';
                btn.style.pointerEvents = show ? 'auto' : 'none';
                btn.style.transform = show ? 'translateY(0)' : 'translateY(20px)';
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initScrollReveal();
    initSmoothScroll();
    initFormValidation();
    initPauseLoops();
    initActiveNavHighlight();
    initParallaxSubtle();
    initScrollProgress();
    initWhatsAppButton();
});
