$(".hamburger-menu").click(function () {
  $(".bar").toggleClass("animate");
  $("#menu").slideToggle("active");
});

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