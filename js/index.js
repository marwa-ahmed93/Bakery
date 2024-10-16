
let aboutOffset = $("#about").offset().top;

$(window).scroll(function () {

    let wScroll = $(window).scrollTop();

    if (wScroll > aboutOffset -50) {
        $("#mainNav").css("backgroundColor", "white");
        // $("#navColor").css("color", "red");
        $('nav li a').css('color', 'black');
        $('#navLogo').attr('src', './images/bakery-color.png');
     
    }
    else {
        $("#mainNav").css("backgroundColor", "transparent");
        $('nav li a').css('color', 'white');
        $('#navLogo').attr('src', './images/bakery-light-1.png');
       
    }
  });

$("#setingIcon").click(function(){
  $('.iconSetDiv').toggle();

  // Toggle color between blue and black
  if ($('.iconSetDiv').is(':visible')) {
    $("#setingIcon").css("color", "blue");
  } else {
    $("#setingIcon").css("color", "black");
    $("#carIcon").css("color", "black");
  }
});

$("#carIcon").click(function(){
  $('.icontDariv').toggle();

  $("#carIcon").css("color", "blue");  
});

$(".btnIcon").click(function(){
  $("html,body").animate({ scrollTop: 0 }, 500)
});



