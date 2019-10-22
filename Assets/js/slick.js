$(document).ready(function(){
    $(".single-item").slick();

    //Move Button in DOM down
    var prev = $(".slick-prev");
    var next = $('.slick-next')
    prev.next().insertBefore(prev);

    prev.addClass('col-2 btn');
    next.addClass('col-2 btn');


});