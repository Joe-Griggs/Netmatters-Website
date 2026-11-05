// Controls the mobile/tablet off-canvas navigation.
const toggle = document.querySelector('#nav-toggle');
const nav = document.querySelector('.side-nav');
const closeButton = document.querySelector('#close-nav');

if (toggle && nav && closeButton) {
    const setOpen = (open) => {
        toggle.checked = open;
        nav.classList.toggle('is-open', open);
        nav.setAttribute('aria-hidden', String(!open));
        document.body.classList.toggle('nav-open', open);
    };

    toggle.addEventListener('change', () => setOpen(toggle.checked));
    closeButton.addEventListener('click', () => setOpen(false));

    document.addEventListener('click', (event) => {
        if (nav.classList.contains('is-open') &&
            !nav.contains(event.target) &&
            !toggle.contains(event.target) &&
            !event.target.closest('label[for="nav-toggle"]')) {
            setOpen(false);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && nav.classList.contains('is-open')) {
            setOpen(false);
            toggle.focus();
        }
    });

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setOpen(false));
    });
}
