$(document).ready(function(){
    $("#leftToRight").click(function(){
        $("#products").animate({left: '100%'}).css("display", "block");
    });
});


$(document).ready(function(){
    $("#backbtn").click(function(){
        $("#products").animate({left: '-100%'}).fadeOut(100);
    });
});

