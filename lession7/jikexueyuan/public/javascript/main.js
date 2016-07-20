define(function(require, exports, module) {
  var $ = require('seajq');
  require.async('swiper-3.3.1.jquery.min');
  var index = require.async('index', function(index_callback){
    // 搜索框引用
    index_callback.searchFocus();
    // lesson list 引用
    index_callback.lessonList();
    // 标签
    index_callback.tab();
    // slide
    index_callback.arrow();

    // index_callback.describe();
  });
})
