// Hamburger pop out

const button = document.querySelector('#nav-toggle');
const nav = document.querySelector('.side-nav');
const close = document.querySelector('#close-nav');

button.addEventListener('change', function() {
    nav.classList.toggle('is-open', button.checked);
});

close.addEventListener('click', function() {
    button.checked = false;
    nav.classList.remove('is-open');
});


//Close when clicked off side nav
document.addEventListener('click', function(event) {//listens to see if the click was on the side nav
    if (!nav.contains(event.target) && !button.contains(event.target)) {//making sure it wasnt the nav or the button
        button.checked = false;
        nav.classList.remove('is-open');
    }
});
