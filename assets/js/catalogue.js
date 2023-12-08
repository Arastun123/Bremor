$(".open-filter").click( function() {
    $("#selection-boxes").fadeIn("lazy");
    $(this).css("display", "none")
})

$(".close-filter").click( function() {
    $("#selection-boxes").fadeOut("lazy");
    $(".open-filter").css("display", "block")
})

let item = $(".item")
let defaultItem = 10
let itemToShow = 5
if (item.length > 10) { 
    item.slice(defaultItem).hide() 

    $("#more").click( function(){
        item.slice(defaultItem, defaultItem + itemToShow).show();
        defaultItem += itemToShow
    })
    if (defaultItem >= item.length) {
        $(this).hide();
    }
}