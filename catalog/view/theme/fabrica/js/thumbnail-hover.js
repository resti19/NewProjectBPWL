// Thumbnail hover.
$(function() {
    
    // ON MOUSE OVER
    $(".box-product > div").hover(function () {
     
    // SET OPACITY TO 100%
    $(".box-product-info", this).stop().animate({
    opacity: 1
    }, "medium");
    },
     
    // ON MOUSE OUT
    function () {
     
    // SET OPACITY BACK TO 0%
    $(".box-product-info", this).stop().animate({
    opacity: 0
    }, "medium");

    });

});