define(function(require, exports, module) {
  var $ = require('seajq');
  require('../css/style.css');
  require('../css/swiper.css');
  require.async('swiper-3.3.1.jquery.min');
  require.async('swiper');

  require.async('_slide', function(slide) {
    slide.searchSlide();
    slide.indexSlide();
    slide.userSlide();
  });

  require.async('ajax', function(ajax) {
    ajax.ready();
  })
})