const cookiePopup = document.querySelector('.cookie-popup');
const acceptButton = document.querySelector('#accept-cookies');

acceptButton.addEventListener('click', function() {
    localStorage.setItem('cookiesAccepted', 'true');
    cookiePopup.style.display = 'none';
});


if (localStorage.getItem('cookiesAccepted') === 'true') {
    cookiePopup.style.display = 'none';
} else {
    cookiePopup.style.display = 'flex';
}
