define(function(require, exports, module) {
  var $ = require('seajq');
  require('swiper-3.3.1.jquery.min.js');
  var a = {};

  // 搜索框焦点效果
  a.searchFocus = function() {
    $('.search_box input[type="text"]').focus(function() {
      $('.search_hot_tag').hide();
      $('.search_box input[type="button"]').addClass('search-btn2');
    });
    $('.search_box input').focusout(function() {
      $('.search_hot_tag').show();
      $('.search_box input[type="button"]').removeClass('search-btn2');
    })
  }

  // 课程部分效果
  a.lessonList = function() {
    $('.lesson-list li').hover(function() {
      $(this).children('.lesson-infor').css('height', '175px');
      $(this).find('p').css({
        'display': 'block',
        'opacity': '1',
        'height': '52px'
      });
    }, function() {
      $(this).children('.lesson-infor').css('height', '88px');
      $(this).find('p').hide(200);
    });
  }

  // tab的切换效果
  a.tab = function() {
      $('.hot-lesson ul li').hover(function() {
      var index = $(this).index();
      var divs = $('.hot-lesson-box').children('div');
      $('.hot-lesson li').removeClass('on');
      $(this).addClass('on');
      divs.hide();
      divs.eq(index).show();
    });
  }

  // swiper arrow
  a.arrow = function(){
    var mySwiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop: true
    })
  }

  //describe
  a.describe = function(){
    $('.lesson-card').hover(function(){
      var describe = $(this).children('.describe');
      console.log('describe');
      console.log(describe);
      $(this).children('.desired').css({
        opacity:1,
        visibility: 'collapse',
        border: '1px solid green'
      });
    })
  }

  // 全部导出
  module.exports = a;
})