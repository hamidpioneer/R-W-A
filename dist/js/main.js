





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

function isUrlValid(str) {
    var pattern = new RegExp(/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/, 'i');
    if (!pattern.test(str)) {
        // console.log("INVALID URL");
        return false;
    } else {
        // console.log("VALID URL");
        return true;
    }
}


// Start User Input Btn 
// function isUrlValid(userInput) {
//     // var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/g);
    
//     var res = userInput.match(/^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?((?:(?:[-\w\d{1-3}]+\.)+(?:com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2}))|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/i);
//     if (res == null)
//         return false;
//     else
//         return true;
// }


function getUrl(value) {

    if (isUrlValid(value)) {
        if (value.startsWith('http:') || value.startsWith('https:')) {
            return value;
        } else {
            var newUrl = 'http://' + value;
            console.log('with HTTP: --- ' + newUrl);
            return newUrl;
        }

    } else {
        return false;
    }



    // if(isUrlValid(value)) {
    //     if (value.startsWith('https://')) {
    //         if(value.startsWith('https://www')) {
    //             console.log(value);
    //             return value;
    //         } else {
    //             let newUrl = value.replace('https://', 'https://www.');
    //             console.log(newUrl);
    //             return newUrl;
    //         }
    //     } else if (value.startsWith('http://')) {
    //         if(value.startsWith('http://www')) {
    //             console.log(value);
    //             return value;
    //         } else {
    //             let newUrl = value.replace('http://', 'https://www.');
    //             console.log(newUrl);
    //             return newUrl;
    //         }
    //     } else if (value.startsWith('www')) {
    //         return ('https://' + value);
    //     } else {
    //         return ('https://www.' + value);
    //     }
    // } else {
    //     return false;
    // }
    
}


function urlBtnClick($event) {
    var heroUserInputWrapperDiv = document.getElementById('hero-user-input-wrapperDiv');
    var userInputField = document.getElementById('user-input-field');
    var userInputBtn = document.getElementById('user-input-btn');
    var isUrl = getUrl(userInputField.value.toLowerCase());

    if (isUrl) {
        userInputBtn.href = isUrl;
        heroUserInputWrapperDiv.style.borderColor = "rgba(0,255,0,1)";
        $event.stopPropagation();
    } else {
        window.alert("Please...enter a valid url");
        heroUserInputWrapperDiv.style.borderColor = "rgba(255,0,0,1)";
        userInputField.focus();
        $event.stopPropagation();
        $event.preventDefault();
    }
}

function urlBtnPress($event) {
    
    if ($event.keyCode === 13 || $event.which === 13) {
        var heroUserInputWrapperDiv = document.getElementById('hero-user-input-wrapperDiv');
        var userInputField = document.getElementById('user-input-field');
        var userInputBtn = document.getElementById('user-input-btn');
        var isUrl = getUrl(userInputField.value.toLowerCase());

        if (isUrl) {
            userInputBtn.href = isUrl;
            userInputBtn.click();
            heroUserInputWrapperDiv.style.borderColor = "rgba(0,255,0,1)";
            $event.stopPropagation();
            $event.preventDefault();
        } else {
            window.alert("Please...enter a valid url");
            heroUserInputWrapperDiv.style.borderColor = "rgba(255,0,0,1)";
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
