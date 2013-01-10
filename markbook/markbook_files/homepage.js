$(function(){
    var $illus = $('.homepage-illus'),
        $mac = $illus.find('.mac'),
        $iphone = $illus.find('.iphone');

    $(window).load(function(){
        $('#main-new').css({y:-40}).transition({
            y:0,
            opacity:1,
            delay:400
        }, 400);

        $mac.css({x:-20}).transition({
            x:0,
            y:0,
            delay:400
        }, 400,'out',function(){
            $(this).attr('style','');
        });

        $iphone.css({x:20}).transition({
            x:0,
            y:0,
            delay:400
        }, 400,'out',function(){
            $(this).attr('style','');
        });
    });

});