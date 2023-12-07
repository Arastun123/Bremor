$(".open-filter").click( function() {
    $("#selection-boxes").fadeIn("lazy");
    $(this).css("display", "none")
})

$(".close-filter").click( function() {
    $("#selection-boxes").fadeOut("lazy");
    $(".open-filter").css("display", "block")
})