//------------------------product in and out---------------------
$(document).ready(function(){
    $("#leftToRight").click(function(){
        $("#product-page").animate({left: '100%'}).css("display", "block");
    });
});
//Flytter produkt siden ind til den har en left property på 100% og ændrer display fra none til block

$(document).ready(function(){
    $("#backbtn-product").click(function(){
        $("#product-page").animate({left: '-100%'}).fadeOut(100);
    });
});
//Flytter produkt siden ind til den har en left property på -100%, ændrer display fra block til none med en fadeout på 100 ms


//------------------------about up and down---------------------
$(document).ready(function(){
    $("#bottomToTop").click(function(){
        $("#about-page").animate({top: '-100%'}).css("display", "block");
    });
});
//Flytter about siden ind til den har en top property på -100% og ændrer display fra none til block



$(document).ready(function(){
    $("#backbtn-about").click(function(){
        $("#about-page").animate({top: '100%'}).fadeOut(250);
    });
});
//Flytter produkt siden ind til den har en top property på 100%, ændrer display fra block til none med en fadeout på 250 ms


//------------------------contact in and out---------------------
$(document).ready(function(){
    $("#rightToLeft").click(function(){
        $("#contact-page").animate({left: '-100%'}).css("display", "block");
    });
});
//Flytter produkt siden ind til den har en left property på -100% og ændrer display fra none til block

$(document).ready(function(){
    $("#backbtn-contact").click(function(){
        $("#contact-page").animate({left: '100%'}).fadeOut(100);
    });
});
//Flytter produkt siden ind til den har en left property på 100%, ændrer display fra block til none med en fadeout på 100 ms


//----------------------Mute unmute button-----------------------

//taget fra: stackoverflow.com/questions/26478062/html-video-mute-button

$("#teaser-vid").prop('muted', true); //muted som udgangspunkt

$(".mute-video").click(function () {
    if ($("#teaser-vid").prop('muted')) {
        $("#teaser-vid").prop('muted', false);
        $(this).addClass('unmute-video'); 
        //skifter logo

    } else {
        $("#teaser-vid").prop('muted', true);
        $(this).removeClass('unmute-video'); //skifter logo tilbage
    }
    console.log($("#teaser-vid").prop('muted'))
});


//------------------------Back to top button---------------------


//taget fra: www.w3schools.com/howto/howto_js_scroll_to_top.asp


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}