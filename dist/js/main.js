





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
function isUrlValid(userInput) {
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/g);
    if (res == null)
        return false;
    else
        return true;
}


function getUrl(value) {

    if(isUrlValid(value)) {
        if (!value.startsWith('www.')) {
            return ('https://www.' + value);
        } else {
            return ('https://' + value);
        }
    } else {
        return "";
    }
}


function urlBtnClick($event) {
    var heroUuserInputWrapperDiv = document.getElementById('hero-user-input-wrapperDiv');
    var userInputField = document.getElementById('user-input-field');
    var userInputBtn = document.getElementById('user-input-btn');
    var isUrl = getUrl(userInputField.value.toLowerCase());

    if (isUrl.length > 0) {
        userInputBtn.href = isUrl;
        heroUuserInputWrapperDiv.style.borderColor = "rgba(0,255,0,1)";
        $event.stopPropagation();
    } else {
        window.alert("Please...enter a valid url");
        heroUuserInputWrapperDiv.style.borderColor = "rgba(255,0,0,1)";
        userInputField.focus();
        $event.stopPropagation();
        $event.preventDefault();
    }
}

function urlBtnPress($event) {
    
    if ($event.keyCode === 13 || $event.which === 13) {
        var heroUuserInputWrapperDiv = document.getElementById('hero-user-input-wrapperDiv');
        var userInputField = document.getElementById('user-input-field');
        var userInputBtn = document.getElementById('user-input-btn');
        var isUrl = getUrl(userInputField.value.toLowerCase());

        if (isUrl.length > 0) {
            userInputBtn.href = isUrl;
            userInputBtn.click();
            heroUuserInputWrapperDiv.style.borderColor = "rgba(0,255,0,1)";
            $event.stopPropagation();
            $event.preventDefault();
        } else {
            window.alert("Please...enter a valid url");
            heroUuserInputWrapperDiv.style.borderColor = "rgba(255,0,0,1)";
            userInputField.focus();
            $event.stopPropagation();
            $event.preventDefault();
        }
    }
    
}

document.getElementById('user-input-btn').addEventListener('click', urlBtnClick);
document.getElementById('user-input-field').addEventListener('keypress', urlBtnPress);
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


// Toast
function showAlert(text) {
    
    window.alert(text);

    return false;
}
///////////////////////////////////////////////////////////////////////
