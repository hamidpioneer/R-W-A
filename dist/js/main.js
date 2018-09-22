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




document.getElementById("user-input-btn").addEventListener('click', function (event) {
    
    var inputValue = document.getElementById("user-input").value.toLowerCase();

    if(inputValue.length > 0) {
        var newInputValue = chkURL(inputValue);

        console.log(newInputValue);
        openNewWindow('https://' + newInputValue);
    }
    event.preventDefault();

})


function chkURL(value) {

    if (!value.startsWith('www.') && value.length > 0) {
        value = 'www.' + value;
    }
    return value;
}

function openNewWindow(url) {
    var strWindowFeatures = "menubar=yes, location=yes, resizable=yes, scrollbars=yes, status=yes";

    window.open(url, 'Welcome', strWindowFeatures);
}