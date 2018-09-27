





/*$( document ).ready(function() {
    console.log( "ready!" );

    $('.owl-carousel.media-section__slider, .owl-carousel.related-section__slider').owlCarousel({
        items: 1,
        dots: true,
        autoHeight: true,
        margin:10,
        video: true,
        // videoHeight: 300,
        // videoWidth: 200,
        // loop:true,
        // nav:true,
        // navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    });

});*/
///////////////////////////////////////////////////////////////////////////////////




// upload files
$(function () {
    $("#upload_link").on('click', function (e) {
        e.preventDefault();
        $("#upload:hidden").trigger('click');
    });
});
// upload files
///////////////////////////////////////////////////////////////////////////////////




// Start User Input Btn 
function checkURL(value) {
    
    /*
    if (!value.startsWith('www.')) {
        return ('url:https://www.' + value);
    } else {
        return ('url:https://' + value);
    }
    // This is disabled by suggest by Imran

    */




    return ("http://infixsoft.com"); // suggested by imran

}

function btnClick(event) {
    
    var userInputValue = document.getElementById('user-input-field').value.toLowerCase();
    
    if(userInputValue.length > 0) {
        document.getElementById('user-input-btn').href = checkURL(userInputValue);
        
    } else {
        event.preventDefault();
        console.log("You've not entered any link...");
    }
    
}

function btnPress(event) {
    
    if(event.keyCode === 13 || event.which === 13) {

        var userInputValue = document.getElementById('user-input-field').value.toLowerCase();
        
        if (userInputValue.length > 0) {
            document.getElementById('user-input-btn').href = checkURL(userInputValue);
            
            
            document.getElementById('user-input-btn').click();
            event.preventDefault();
    
        } else {
            event.preventDefault();
            console.log("You've not entered any link...");
        }
    }
    
}

document.getElementById('user-input-btn').addEventListener('click', btnClick, false);
document.getElementById('user-input-field').addEventListener('keypress', btnPress, false);
// End User Input Btn 
///////////////////////////////////////////////////////////////////////////////////




// Start Google Map
function mapsSelector() {
    if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPod") != -1) ||
        (navigator.platform.indexOf("iPad") != -1))
        window.open("maps://maps.google.com/maps?daddr=48.858265,2.294497&amp;ll=");

    else /* else use Google */
        window.open("https://maps.google.com/maps?daddr=48.858265,2.294497&amp;ll=");
}
// End Google Map
///////////////////////////////////////////////////////////////////////////////////



// Start Media-Section Slider
$(document).ready(function () {

    var owl = $(".owl-carousel.media-section__slider");

    owl.owlCarousel({
        items: 1,
        dots: true,
        autoHeight: true,
        margin: 10,
        video: true,
        // videoHeight: 300,
        // videoWidth: 200,
        // loop:true,
        // nav:true,
        // navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    });

    // Custom Navigation Events
    $(".next").click(function () {
        owl.trigger('owl.next');
        console.log('Next Btn Triggered...!');
    })

});
// End Media-Section Slider
///////////////////////////////////////////////////////////////////////




// Toast
function showToast(text) {
    var x = document.getElementById('toast');
    x.innerHTML = text;
    x.classList.add('show');

    setTimeout(function () {
        x.classList.remove('show');
    }, 3000);

    return false;
}
///////////////////////////////////////////////////////////////////////




// Snackbar
function showSnackbar(text) {
    var x = document.getElementById('snackbar');
    x.innerHTML = text;
    x.classList.add('show');

    setTimeout(function () {
        x.classList.remove('show');
    }, 3000);

    return false;
}
///////////////////////////////////////////////////////////////////////
