define(function(require, exports, module) {
  var $ = require('seajq');
  require.async('swiper-3.3.1.jquery.min');
  var index = require.async('index', function(index_callback){
    // 头部菜单
    index_callback.tabMenu();

    // tab切换
    index_callback.tabMain();

    index_callback.search();
  });
})
