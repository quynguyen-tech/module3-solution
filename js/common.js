// if (Modernizr.touch === true && $(window).width() <= 767) {
//   //alert('Touch Screen');
// }
;(function($) {
  'use strict'

  /* ==================================================
  # Get scroll bar width
  ===================================================*/
  function getBarwidth() {
    // Create the measurement node
    let scrollDiv = document.createElement('div')
    scrollDiv.className = 'scrollbar-measure'
    document.body.appendChild(scrollDiv)

    // Get the scrollbar width
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    //console.warn(scrollbarWidth); // Mac:  15

    // Delete the DIV
    document.body.removeChild(scrollDiv)
    return scrollbarWidth
  }

  /* ==================================================
  # Smooth Scroll
  ===================================================*/
  function scrollToAnchor() {
    $('.js-scroll-to').on('click', function(event) {
      var $anchor = $(this)
      var headerH = '0'
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - headerH + 'px'
          },
          1000
        )
      event.preventDefault()
    })
  }

  function init() {
    scrollToAnchor()
    getBarwidth()
  }

  $(document).ready(function() {
    init()
    new WOW().init()
    $('.owl-carousel').owlCarousel({
      loop: true,
      items: 6,
      margin: 10,
      responsiveClass: true,
      navigation: true,
      navigationText: ['<', '>'],
      responsive: {
        0: {
          items: 2,
          nav: true
        },
        576: {
          items: 4,
          nav: true
        },
        992: {
          items: 6,
          nav: true,
          loop: false
        }
      }
    })
    $('.circle-text-up').circleType({ radius: 240 })
    $('.circle-text-up-200').circleType({ radius: 230 })
    $('.search-trigger').on('click', () => {
      $('#search-box').addClass('show')
    })
    $('#close-search').on('click', () => {
      $('#search-box').removeClass('show')
    })
  }) // end document ready function
})(jQuery) // End jQuery
