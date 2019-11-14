$(document).ready(function(){

  //hide element with concontent class
  $('.hide').hide();

  $('#select_contact').change(function(){
    $('.hide').hide();
    $('.' + $(this).val()).show();
  });
});