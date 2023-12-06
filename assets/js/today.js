$(() => {
    $(".owl-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 4,
        margin: 10,
        autoplay: true,
        dots: false,
        nav: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        navText: [
        '<i class="fal fa-long-arrow-left"></i>',
        '<i class="fal fa-long-arrow-right"></i>',
        ],
        responsive: {
            448: {
                items: 2,
            },
            100: {
                items: 1,
            }
        }
    });
});