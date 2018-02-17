jQuery(document).ready(function($) {
  let windowSize = $(window).width();

  if (windowSize < 1025) {
    (function aboutPageMobileCarousels() {
      $('#about__partnerships-associations-carousel').slick({
        arrows: false,
        // centerMode: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: '30px',
        dots: true,
        easing: 'ease-in-out',
        slidesToShow: 1
      });

      $('#about__featured-in-carousel').slick({
        arrows: false,
        // centerMode: true,
        adaptiveHeight: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: '30px',
        dots: true,
        slidesToShow: 1
      });
    })();
  }

  // Replace / with . in 'Featured In publications'
  $('.publication-date').each(function() {
    let date = $(this).text();
    let newDate = date.replace(/\//g, '.');
    $(this).text(newDate);
  });

});