$(document).ready(function () {

    $('.news-bottom-star').click(function(){
       $(this).addClass('active').prevAll().addClass('active');
       $(this).prevAll().addClass('active');
       $(this).nextAll().removeClass('active');
    });
});
