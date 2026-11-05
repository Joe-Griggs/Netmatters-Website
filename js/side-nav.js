// Hamburger pop out

//Find the hamburger button and side nav
const button = document.querySelector('#nav-toggle');
const nav = document.querySelector('.side-nav');

//Open the side nav when the hamburger is checked
button.addEventListener('change', function() {
    nav.classList.toggle('is-open', button.checked);
});

//Close when clicked off side nav
document.addEventListener('click', function(event) {//listens to see if the click was on the side nav
    if (!nav.contains(event.target) && !button.contains(event.target) && !event.target.closest('label[for="nav-toggle"]')) {//making sure it wasnt the nav or the hamburger
        button.checked = false;
        nav.classList.remove('is-open');
    }
});
