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




// User Input Btn 
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




