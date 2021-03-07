jQuery(document).ready(function ($) {
   let slider = $('.owl-carousel1');
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
            300: {
               items: 1,
            },
            500: {
               items: 2,
            },
            767: {
               items: 3,
            },
            1000: {
               items: 4,
            },
         },
      });
   });

   let slider2 = $('.owl-carousel2');
   slider2.each(function () {
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
            300: {
               items: 1,
            },
            550: {
               items: 2,
            },
            999: {
               items: 2,
            },
            1000: {
               items: 2,
            },
            1300: {
               items: 3,
            },
         },
      });
   });

   let slider3 = $('.owl-carousel3');
   slider3.each(function () {
      $(this).owlCarousel({
         nav: true,
         loop: true,
         center: true,
         items: 2,
         autoplay: false,
         dots: true,
         smartSpeed: 1200,
         responsive: {
            0: {
               items: 1,
            },
            300: {
               items: 1,
            },
            500: {
               items: 1,
            },
            767: {
               items: 1,
            },
            1000: {
               items: 1,
            },
         },
      });
   });

   let slider4 = $('.owl-carousel4');
   slider4.each(function () {
      $(this).owlCarousel({
         nav: true,
         loop: true,
         autoHeight: true,
         autoplay: true,
         autoplayTimeout: 3000,
         autoplaySpeed: 6000,
         slideTransition: 'linear',
         autoplayHoverPause: false,
         responsive: {
            0: {
               items: 1,
            },
            300: {
               items: 1,
            },
            500: {
               items: 2,
            },
            767: {
               items: 2,
            },
            1000: {
               items: 4,
            },
         },
      });
   });
});
