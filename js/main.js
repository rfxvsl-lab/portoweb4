const pages = {
    home: document.getElementById('home-page'),
    about: document.getElementById('about-page'),
};

const siteNav = document.querySelector('.site-nav');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileMenuBtn = document.querySelector('[data-mobile-menu-btn]');
const navLinks = document.querySelectorAll('[data-page-link]');
const desktopNavButtons = document.querySelectorAll('.nav-link');

function refreshIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuBtn) return;

    mobileMenu.hidden = true;
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    siteNav?.classList.remove('menu-active');
    document.body.classList.remove('menu-open');
}

function toggleMobileMenu() {
    if (!mobileMenu || !mobileMenuBtn) return;

    const willOpen = mobileMenu.hidden;
    mobileMenu.hidden = !willOpen;
    mobileMenuBtn.setAttribute('aria-expanded', String(willOpen));
    siteNav?.classList.toggle('menu-active', willOpen);
    document.body.classList.toggle('menu-open', willOpen);
}

function setActiveNavigation(pageName, sectionId) {
    desktopNavButtons.forEach((button) => button.classList.remove('active-nav'));

    if (pageName === 'about') {
        document.getElementById('nav-about')?.classList.add('active-nav');
        return;
    }

    if (sectionId === 'contact-section') {
        document.getElementById('nav-contact')?.classList.add('active-nav');
    } else {
        document.getElementById('nav-projects')?.classList.add('active-nav');
    }
}

function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const navHeight = siteNav?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.scrollTo({ top, behavior: 'smooth' });
}

function switchPage(pageName, sectionId = null) {
    const requestedPage = pages[pageName] ? pageName : 'home';

    Object.entries(pages).forEach(([name, page]) => {
        const isActive = name === requestedPage;
        page.classList.toggle('hidden-section', !isActive);
        page.setAttribute('aria-hidden', String(!isActive));
    });

    closeMobileMenu();
    setActiveNavigation(requestedPage, sectionId);

    if (sectionId) {
        window.setTimeout(() => scrollToSection(sectionId), 80);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    refreshIcons();
}

function initNavigation() {
    mobileMenuBtn?.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMobileMenu();
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const pageName = link.dataset.pageLink || 'home';
            const sectionId = link.dataset.scrollTarget || null;
            switchPage(pageName, sectionId);
        });
    });

    document.addEventListener('click', (event) => {
        if (!mobileMenu || mobileMenu.hidden) return;
        if (!mobileMenu.contains(event.target) && !mobileMenuBtn?.contains(event.target)) {
            closeMobileMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 900) closeMobileMenu();
    });

    window.addEventListener('scroll', () => {
        siteNav?.classList.toggle('nav-scrolled', window.scrollY > 8);
    }, { passive: true });
}

function initProjectLinks() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href')?.slice(1);
            if (!targetId) return;

            event.preventDefault();
            if (pages.home.classList.contains('hidden-section')) {
                switchPage('home', targetId);
            } else {
                scrollToSection(targetId);
            }
        });
    });
}

function initContactForm() {
    document.querySelectorAll('form').forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const name = String(formData.get('name') || '').trim();
            const email = String(formData.get('email') || '').trim();
            const message = String(formData.get('message') || '').trim();
            const existingMessage = form.querySelector('.form-message');
            existingMessage?.remove();

            const feedback = document.createElement('p');
            feedback.className = 'form-message';

            if (!name || !email || !message) {
                feedback.textContent = 'Mohon lengkapi nama, email, dan pesan terlebih dahulu.';
                form.appendChild(feedback);
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                feedback.textContent = 'Mohon masukkan alamat email yang valid.';
                form.appendChild(feedback);
                return;
            }

            feedback.textContent = 'Terima kasih! Pesan Anda siap dikirim.';
            form.appendChild(feedback);
            form.reset();
        });
    });
}

function initRevealAnimation() {
    const revealElements = document.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
        revealElements.forEach((element) => element.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    revealElements.forEach((element) => observer.observe(element));
}

function init() {
    initNavigation();
    initProjectLinks();
    initContactForm();
    initRevealAnimation();
    refreshIcons();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
