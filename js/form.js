const form = document.querySelector('.contact-form');
const requiredMessage = document.querySelector('.required-message');

if (form && requiredMessage) {
    form.noValidate = true;

    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            requiredMessage.hidden = false;
            form.reportValidity();
        } else {
            event.preventDefault();
            window.location.href = 'index.html';
        }
    });
}
