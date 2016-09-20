// var mn = $(".red");
// var mns = "green";
// var hdr = $('.logo').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > 50 ) {
    $(".navi").addClass("naviStick");
  } else {
    $(".navi").removeClass("naviStick");
  }
});

// $(window).scroll(function() {
//   if( $(this).scrollTop() > 50 ) {
//     $(".logo").addClass("logo-up");
//   } else {
//     $(".logo").removeClass("logo-up");
//   }
// });




// function init() {
//   window.addEventListener('scroll', function(e) {
//     var header;
//     var distanceY = window.pageYOffset || document.documentElement.scrollTop,
//       shrinkOn = 15,
//       header = document.getElementById("name");
//     if (distanceY > shrinkOn) {
//       header.classList.add("red");
//     } else {
//       if (header.classList.contains("red")) {
//         header.classList.remove("red");
//       }
//     }
//   });
// }
// window.onload = init();

// function init() {
//   window.addEventListener('scroll', function(e) {
//     var blah;
//     var distanceY = window.pageYOffset || document.documentElement.scrollTop,
//       shrinkOn = 1,
//       blah = document.getElementById("test");
//     if (distanceY > shrinkOn) {
//       blah.classList.add("logo-none");
//     } else {
//       if (blah.classList.contains("logo-none")) {
//         blah.classList.remove("logo-none");
//       }
//     }
//   });
// }
// window.onload = init();

// window.onscroll = function() {
//   var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//   document.getElementById('name').classList.add('red');
// }
