//sets up the banner slider on the hero section
var splide = new Splide( '#hero', {
    type: 'loop', //goes back to the first banner after the last one
    autoplay: true, //moves to the next banner automatically
    interval: 5000 //waits 5 seconds between banners
});

//starts the slider
splide.mount();
