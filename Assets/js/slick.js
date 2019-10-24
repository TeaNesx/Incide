$(document).ready(function(){

    $(".single-item").slick();

    var prev = $(".slick-prev");
    var next = $('.slick-next');

    prev.html('Zurück');
    next.html('Erfahre Mehr');
    prev.addClass('btn-back');


    // display none to prev button and center button next
    // prev.addClass('d-none');
    // next.css({'margin-left':'80vh'});

    // next.on('click', function(){
    //     next.html('Weiter');
    //     next.css({
    //         // 'transition': '0.5s ease-in-out', 
    //         'margin-left':'10vh'
    //     });
    // });

    //Move Button in DOM down
    prev.next().insertBefore(prev);
    prev.addClass('col-2 btn');
    next.addClass('col-2 btn');


});