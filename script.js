$(function () {
    //the block below for categories webdevelopment, webdesign, graficdesign
    $('.toggles button').click(function () {
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);
        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });
    //the block below for category showall
    $('#showall').click(function () {
        $('.post').show(500);
    })
});


/*$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            420:{
                items:4
            },
            1000:{
                items:8
            }
        }
    });
});*/
/*
chevron-circle-right
*/

$(document).ready(function () {
    $('.brands-carousel').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fa fa-angle-right"></i>',
        prevArrow: '<i class="fa fa-angle-left"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});