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

    // //Move Button out of parent

    var slickprev = $('.single-item > .slick-prev');
    var slicknext = $('.single-item > .slick-next');
    

    slickprev.parent().after(slickprev);
    slicknext.parent().after(slicknext);

    prev.addClass('col-2 btn');
    next.addClass('col-2 btn');

    //If next clicked, button html text change and display button back
    next.on('click', function(){
        next.html('Weiter');

        // for(i = 0; i < 2; i++){
        //     prev.removeClass('d-none');
        // }
    });


});