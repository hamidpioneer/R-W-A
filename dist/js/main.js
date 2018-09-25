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

// upload files
$(function () {
    $("#upload_link").on('click', function (e) {
        e.preventDefault();
        $("#upload:hidden").trigger('click');
    });
});
// upload files




// Start User Input Btn 
function checkURL(value) {
    
    if (!value.startsWith('www.')) {
        return ('https://' + 'www.' + value);
    } else {
        return ('https://' + value);
    }

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


// document.getElementById('google-map-icon').addEventListener(function(event) {

// });

// Original copy-paste from source
function mapsSelector() {
    if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPod") != -1) ||
        (navigator.platform.indexOf("iPad") != -1))
        window.open("maps://maps.google.com/maps?daddr=lat,long&amp;ll=");

    else /* else use Google */
        window.open("https://maps.google.com/maps?daddr=lat,long&amp;ll=");
}

// function mapsSelector() {
//     console('mapSelector clicked...!');
//     if ((navigator.platform.indexOf("iPhone") != -1) ||
//         (navigator.platform.indexOf("iPad") != -1) ||
//         (navigator.platform.indexOf("iPod") != -1)) { /* if we're on iOS, open in Apple Maps */

//         window.open("maps://maps.google.com/maps?daddr=23.7493899,90.3654066&amp;ll=");

//         } else { /* else use Google */

//         window.open("https://maps.google.com/maps?daddr=23.7493899,90.3654066&amp;ll=");

//         }
        
// }
