//gets the header so it can stay at the top while scrolling
const header = document.querySelector('.header');

if (header) {
    let previousScrollY = window.scrollY;
    let headerIsFixed = false;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > previousScrollY && headerIsFixed) {
            header.style.position = '';
            header.style.top = '';
            header.style.left = '';
            header.style.right = '';
            header.style.zIndex = '';
            header.style.translate = '';
            header.style.transition = '';
            headerIsFixed = false;
        } else if (
            currentScrollY < previousScrollY &&
            !headerIsFixed &&
            header.getBoundingClientRect().bottom <= 0
        ) {
            header.style.position = 'sticky';
            header.style.top = '0';
            header.style.zIndex = '2';
            header.style.transition = 'none';
            header.style.translate = '0 -100%';
            headerIsFixed = true;

            header.getBoundingClientRect();
            requestAnimationFrame(function() {
            header.style.transition = 'translate 0.3s ease, transform 500ms ease, filter 500ms ease';
                header.style.translate = '0 0';
            });
        }

        previousScrollY = currentScrollY;
    });
}
