document.addEventListener('DOMContentLoaded', () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const startDark = storedTheme ? storedTheme === 'dark' : prefersDark;

    const themeButtons = document.querySelectorAll('[data-theme-toggle]');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    function applyTheme(isDark) {
        document.body.classList.toggle('theme-dark', isDark);
        themeButtons.forEach((btn) => {
            const icon = btn.querySelector('i');
            if (!icon) return;
            icon.className = isDark ? 'ri-sun-line text-lg' : 'ri-moon-line text-lg';
        });
    }

    applyTheme(startDark);

    themeButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const isDark = !document.body.classList.contains('theme-dark');
            applyTheme(isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    });

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    const year = document.getElementById('copyright-year');
    if (year) {
        year.textContent = new Date().getFullYear();
    }
});
