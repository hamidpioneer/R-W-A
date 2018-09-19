$( document ).ready(function() {
    console.log( "ready!" );

    $('.owl-carousel.media-section__slider, .owl-carousel.related-section__slider').owlCarousel({
        items: 1,
        dots: true,
        autoHeight: true,
        margin:10,
        video: true,
        videoHeight: 300,
        videoWidth: 200,
        // loop:true,
        // nav:true,
        // navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    });

});




// Custon Form-input
$(function() {
    $('.form-control').each(function() {
        changeState($(this));
    });

    $('.form-control').on('focusout', function() {

        changeState(this);
    })

    function changeState($formControl) {
        if ($formControl.val().length > 0) {
            $formControl.addClass('has-value');
        } else {
            $formControl.removeClass('has-value');
        }
    }
});
// Custon Form-input

// upload files
$(function () {
    $("#upload_link").on('click', function (e) {
        e.preventDefault();
        $("#upload:hidden").trigger('click');
    });
});
// upload files
