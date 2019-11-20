$(document).ready(function(){
    var url = "http://localhost/incide/de/hilfe/utility/";

    $('#faq_topic ul li').on('click', function(){

        var $file = $(this).attr("data-json");

        //Add and romove Class active if already exist
        if($('#faq_topic ul li').hasClass('active')){
            $('#faq_topic ul li').removeClass('active')
        }
        $(this).addClass('active');
        $('#faq_description ul li').remove();

        //ajax GET => URL dynamic depends on topic value
        $.ajax({
            type:"GET",
            url: url + $file + ".json",
            success:function(data){
                $.each(data, function(a, b){
                    $('#faq_description ul').append(
                        '<li class="mt-3">'+
                            b.topic +
                                '<p class="dropdown d-none">' +
                                    b.answer +
                                '</p>' +
                        '</li>'
                        )
                });
            }
        });
    });

    $('#faq_description ul li').on('click', function(){
        
    });
});