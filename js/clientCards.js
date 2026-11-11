const clientCards = document.querySelectorAll('.clients .client');
const smallScreen = window.matchMedia('(max-width: 991px)');

clientCards.forEach(function(card) {
    card.addEventListener('click', function(event) {
        event.preventDefault();

        if (smallScreen.matches) {
            //closes the other cards before opening the selected one
            const shouldOpen = !card.classList.contains('is-open');
            clientCards.forEach(function(otherCard) {
                otherCard.classList.remove('is-open');
            });
            card.classList.toggle('is-open', shouldOpen);
        }
    });
});
