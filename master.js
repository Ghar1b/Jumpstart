// Slick carousel
$(document).ready(function(){
  $('.carousel').slick({
mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var scrollMargin = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - scrollMargin > 50) {
      var navbarHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navbarHeight}, 150);
      scrollMargin=scrollTop;
    } else if (scrollMargin - scrollTop >= 50) {
      $('.navbar').animate({top: 0}, 150);
      scrollMargin=scrollTop;
    }
  });
});
