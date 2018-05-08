$(document).ready(function() {

$(function() {
  $("#slides").slidesjs({
    width: 1440,
    height: 695,
    play: {
      active: false,
      auto: true,
      interval: 6000
    },
    effect: {
    slide: {
      speed: 2500
    }
  }
  });
});





$(".menu").click(function() {

      if ($('.links').css('opacity') == '0') {

        $(".navig").animate({left: 0}, 500);
        $(".links").fadeTo(1000,1);
        $(".bar1").addClass("switch1");
        $(".bar2").fadeTo(500,0);
        $(".bar3").addClass("switch3");

      }

      else {

        $(".navig").animate({left: 200}, 500);
        $(".links").fadeTo(300,0);
        $(".bar1").removeClass("switch1");
        $(".bar2").fadeTo(1000,1);
        $(".bar3").removeClass("switch3");

      };

});

//   $(".menu").click(function() {
//     $(".navig").animate({left: 0}, 500);
//     $(".links").fadeTo(1000,1);
//     $(".bar1").addClass("switch1");
//     $(".bar2").fadeTo(500,0);
//     $(".bar3").addClass("switch3");
//
// });

var rellax = new Rellax('.rellax');

});
