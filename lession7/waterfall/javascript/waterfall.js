$(document).ready(function() {
  $(window).on('load', function() {
    // 执行imgLocation
    imgLocation();
    // 设定一个虚拟的数据
    var dataImg = {
      'data': [{
        'src': '1.jpg'
      }, {
        'src': '2.jpg'
      }, {
        'src': '3.jpg'
      }, {
        'src': '4.jpg'
      }, {
        'src': '5.jpg'
      }, {
        'src': '6.jpg'
      }, {
        'src': '7.jpg'
      }, {
        'src': '8.jpg'
      }, {
        'src': '9.jpg'
      }, {
        'src': '10.jpg'
      }, {
        'src': '11.jpg'
      }, {
        'src': '12.jpg'
      }, {
        'src': '13.jpg'
      }, {
        'src': '14.jpg'
      }, {
        'src': '15.jpg'
      }, {
        'src': '16.jpg'
      }, {
        'src': '17.jpg'
      }, {
        'src': '18.jpg'
      }, {
        'src': '19.jpg'
      }, {
        'src': '20.jpg'
      }, {
        'src': '21.jpg'
      }, {
        'src': '22.jpg'
      }, {
        'src': '23.jpg'
      }, {
        'src': '24.jpg'
      }, {
        'src': '25.jpg'
      }, {
        'src': '26.jpg'
      }]
    }

    // 滚动事件
    window.onscroll = function() {
      if (scrollside()) {
        $.each(dataImg.data, function(index, val) {
          var box = $('<div>').addClass('box').appendTo('#container');
          var content = $('<div>').addClass('content').appendTo(box);
          var img = $('<img>').attr('src', './images/' + $(val).attr('src')).appendTo(content);
        })
        imgLocation();
      }
    }
  })
});

// 设定imgLocation事件
function imgLocation() {
  var box = $('.box');
  var boxWidth = box.eq(0).width();
  var num = Math.floor(($(window).width() - 100) / (boxWidth));
  var boxArray = [];
  box.each(function(index, val) {
    var boxHeight = box.eq(index).height();

    if (index < num) {
      boxArray[index] = boxHeight + 10;
    } else {
      var minboxHeight = Math.min.apply(null, boxArray);
      var minboxIndex = $.inArray(minboxHeight, boxArray);
      $(val).css({
        'position': 'absolute',
        'top': minboxHeight,
        'left': box.eq(minboxIndex).position().left
      });
      boxArray[minboxIndex] += box.eq(index).height();
    }
  })
}


// 设定事件，获取最后一个图片位置和高度，并返回布尔
function scrollside() {
  var box = $('.box');
  var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 3);
  console.log(lastboxHeight);
  var documentHeight = $(document).width();
  var scrollHeight = $(window).scrollTop();
  return (lastboxHeight < scrollHeight + documentHeight) ? true : false;
}


// 监视窗口大小变化从新加载
$(window).resize(function() {
  location.reload();
})