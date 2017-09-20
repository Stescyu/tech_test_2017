//Scrolling on click

$(document).ready(function(){
  $("nav a").on("click", function(event) {
    if(this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate({scrollTop: $(hash).offset().top}, 500, function(){
          window.location.hash = hash;
        });
    }
  });
});

// Menu Bar for Tablet and Mobile

$(".bars").on("click", function(){
  $("nav ul").slideToggle(200, function(){
  });
})

$(window).resize(function() {
  if ($(window).width() > 768) {
     $("nav ul").show();
  } else {
    $("nav ul").hide();
  }
});