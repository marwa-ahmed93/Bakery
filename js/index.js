


let aboutOffsetTop = $("#about").offset().top;
let imgSrc = "";
$(window).scroll(function(){

 let wScroll = $(window).scrollTop();

 if (wScroll > aboutOffsetTop - 50) {
  $("#mainNav").css("backgroundColor", "white");   // Change navbar background to white
  $("#navColor").css("color", "black"); 
  
  $('#navLogo').attr('src','./images/bakery-color.png')// Change text color of nav items to black
} 
else {
  $("#mainNav").css("backgroundColor", "transparent");  // Reset navbar background
  $("#navColor").css("color", "white");                // Reset nav items to original color (white)
}
});


$("#setingIcon").click(function(){
  $('.iconSetDiv').toggle();

  $("#setingIcon").css("color", "blue");  

})
$("#carIcon").click(function(){
  $('.icontDariv').toggle();

  $("#carIcon").css("color", "blue");  
})




