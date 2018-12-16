$(document).ready(function(){
    $("#leftToRight").click(function(){
        $("#product-page").animate({left: '100%'}).css("display", "block");
    });
});


$(document).ready(function(){
    $("#backbtn-product").click(function(){
        $("#product-page").animate({left: '-100%'}).fadeOut(100);
    });
});


$(document).ready(function(){
    $("#bottomToTop").click(function(){
        $("#about-page").animate({top: '-100%'}).css("display", "block");
    });
});


$(document).ready(function(){
    $("#backbtn-about").click(function(){
        $("#about-page").animate({top: '100%'}).fadeOut(250);
    });
});


$(document).ready(function(){
    $("#rightToLeft").click(function(){
        $("#contact-page").animate({left: '-100%'}).css("display", "block");
    });
});


$(document).ready(function(){
    $("#backbtn-contact").click(function(){
        $("#contact-page").animate({left: '100%'}).fadeOut(100);
    });
});


$("#teaser-vid").prop('muted', true);

$(".mute-video").click(function () {
    if ($("#teaser-vid").prop('muted')) {
        $("#teaser-vid").prop('muted', false);
        $(this).addClass('unmute-video');

    } else {
        $("#teaser-vid").prop('muted', true);
        $(this).removeClass('unmute-video');
    }
    console.log($("#teaser-vid").prop('muted'))
});



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