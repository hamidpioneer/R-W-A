$( document ).ready(function() {
    console.log( "ready!" );

    $('.owl-carousel.media-section__slider, .owl-carousel.custom-section__slider, .owl-carousel.related-section__slider').owlCarousel({
        items: 1,
        loop:true,
        margin:10,
        nav:true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: true,
        autoHeight: true,
    });
});