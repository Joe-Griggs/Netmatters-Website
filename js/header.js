//gets the header so it can stay at the top of the page
const header = document.querySelector('.header');

//keeps the header stuck to the top while scrolling
if (header) {
    header.style.position = 'sticky';
    header.style.top = '0';
    header.style.zIndex = '20';
    header.style.transition = 'transform 500ms ease, translate 0.3s ease';

    let previousScrollY = window.scrollY;

    //shows the header when scrolling up and hides it when scrolling down
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 0 || currentScrollY < previousScrollY) {
            header.style.translate = '0 0';
        } else if (currentScrollY > previousScrollY) {
            header.style.translate = '0 -100%';
        }

        previousScrollY = currentScrollY;
    });
}
