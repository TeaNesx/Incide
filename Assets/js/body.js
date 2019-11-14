$(document).ready(function(){
    var content = $('#content')

    if(content.length){
        $('body').css({
            'background': 'url(http://localhost/incide/Assets/img/content_background.png)',
            'background-size': 'cover',
            'background-repeat': 'no-repeat'
        });
    } else {
        $('body').css({
            'background': 'none'
        });
    }
});