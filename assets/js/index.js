$(".hamburger-menu").click(function () {
  $(".bar").toggleClass("animate");
  $("#menu").slideToggle("active");
});


$(() => {
    $(".dropdown-trigger").click ( function() {
    $(".dropdown").fadeToggle()
  })

  $(window).scroll(function(){ 
    let offset = $(window).scrollTop() + $(window).height(),
    animatables = $('.animatable');
    animatables.each(function() {
      let animatable = $(this);
      if ((animatable.offset().top + animatable.height() - 20) < offset) {
        $("body").css({overflowX: 'hidden'});
        animatable.removeClass('animatable').addClass('animated');
      }
    });
  })

  $(".owl-carousel").owlCarousel({
    loop: true,
    center: true,
    items: 4,
    margin: 10,
    autoplay: true,
    dots: false,
    nav: true,
    autoplayTimeout: 1500,
    smartSpeed: 450,
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
