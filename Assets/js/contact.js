$(document).ready(function(){

    $('#contact button.btn').on('click', function() {

      $('#content.contact_de').addClass('d-none');

        //SLide h2 to the left and remove
        $('#contact h1').animate({
          opacity: 0,
          marginLeft: '-200px'
        }, 'slow', 'linear', function() {
           $(this).addClass('d-none');
        });
    
    
        //SLide button to the left and remove
        $(this).animate({
            opacity: 0,
            marginLeft: '-200px'
          }, 'slow', 'linear', function() {
            $(this).addClass('d-none');
          });

          //SLide button to the left and remove
        $('#contact input').animate({
            opacity: 0,
            marginLeft: '-200px'
          }, 'slow', 'linear', function() {
            $(this).addClass('d-none');
          });

          //Display report bug section
          var $bug = $('#content.reportbug_de')

          $bug.toggleClass('d-none');
      });
});