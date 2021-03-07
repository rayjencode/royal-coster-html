jQuery(document).ready(function ($) {
   let slider = $('.owl-carousel');
   slider.each(function () {
      $(this).owlCarousel({
         nav: true,
         loop: true,
         autoHeight: true,
         autoplay: true,
         autoplaySpeed: 1000,
         responsive: {
            0: {
               items: 1,
               stagePadding: 0,
               margin: 20,
            },
            400: {
               items: 2,
               stagePadding: 25,
            },
            767: {
               items: 3,
               stagePadding: 25,
            },
            1000: {
               items: 3,
            },
         },
      });
   });
});
