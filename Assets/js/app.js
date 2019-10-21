$(document).ready(function(){

    //activate Burger Menu
    $('.burger').on('click', function(){
        $('#header').toggleClass('active');
        $('nav').toggleClass('d-none');
        $('#logo_black').toggleClass('d-none');
        $('#logo_white').toggleClass('d-none');
    });

    //Slide Effect
    $('.maincontent .more').on('click', function() {

        //SLide h2 to the left and remove
        $('.maincontent h2').animate({
          opacity: 0,
          marginLeft: '200px'
        }, 'slow', 'linear', function() {
           $(this).addClass('d-none');
        });


        //SLide button to the left and remove
        $(this).animate({
            opacity: 0,
            marginLeft: '200px'
          }, 'slow', 'linear', function() {
            $(this).addClass('d-none');
          });

        //Display back button with animation
        $('.maincontent .back').toggleClass('d-none d-block');


        // ========================================================

        //Display next button with animation
        $('.maincontent .next').toggleClass('d-none d-block', 1000);


        // ========================================================

        //Display content
        $('.maincontent .hotspots').toggleClass('d-none d-block', 1000);
        $('.maincontent .image-view').toggleClass('d-none d-block', 1000);
        $('.maincontent .text-view.text_1').toggleClass('d-none d-block', 1000);
      });

      //Back function
      $('.maincontent .back').on('click', function(){
        $('.maincontent h2').animate({opacity: 1, marginLeft: '0px'}).toggleClass('d-none d-block');
        $('.maincontent .next').toggleClass('d-none d-block');
        $('.maincontent .image-view').toggleClass('d-block d-none', 1000);
        $('.maincontent .text-view.text_1').toggleClass('d-block d-none', 1000);
        $('.maincontent .more').animate({opacity: 1, marginLeft: '0px'}).toggleClass('d-none d-block');
        $('.maincontent .hotspots').toggleClass('d-none d-block');
        $(this).toggleClass('d-none d-block');
      });   

      var next = $('.maincontent .next')

      // Next function

      next.on('click', function(){
        $('.maincontent .image-view').animate({top: '40%', left: '46%'}, 'slow');
        $('.maincontent .image-view').toggleClass('active');
        $('.maincontent .image-view img').animate({width:'100%'}, 'slow');
        $('.maincontent .text-view.text_1').animate({opacity:'0'});
        $('.maincontent .text-view.text_2').toggleClass('d-none d-block');
        $('.maincontent .hotspots').toggleClass('d-none d-block');
      });

      //If Next clicked, and then back function

      $('.maincontent .back').on('click', function(){
          
      });
});