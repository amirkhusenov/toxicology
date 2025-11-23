document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (burgerBtn) {
        burgerBtn.addEventListener('click', () => {
            mobileMenu.classList.add('mobile-menu_active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('mobile-menu_active');
        });
    }

    const mobileLinks = document.querySelectorAll('.mobile-menu__link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('mobile-menu_active');
        });
    });

    const langCloseBtn = document.getElementById('langCloseBtn');
    const languageSelector = document.getElementById('languageSelector');

    if (langCloseBtn && languageSelector) {
        langCloseBtn.addEventListener('click', (e) => {
            languageSelector.removeAttribute('open');
        });
    }

    const langOptions = document.querySelectorAll('.language-selector__option');
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            if (window.innerWidth <= 1250 && languageSelector && languageSelector.hasAttribute('open')) {
                languageSelector.removeAttribute('open');
            }
        });
    });

    const navLinks = document.querySelectorAll('.nav__button');

    navLinks.forEach(link => {
        link.classList.remove('nav__button_active');

        const href = link.getAttribute('href');
        if (!href) return;

        if (link.href === window.location.href) {
            link.classList.add('nav__button_active');
        }
    });
});
