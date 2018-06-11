//导航栏
$(function(){
  $('#superContainer').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
    'navigation': true,
    // navigationTooltips: ['首页', '视觉', '交互', '皮肤', '功能', '待办邮件', '联系人邮件', '科技', '连接易信', '马上体验']
    menu: '#menu',
    navigationPosition:"right",
    controlArrows:false,
    slidesNavigation:"false",
    slidesNavPosition:"bottom",
    showActiveTooltip:true,
    initialSlide :0,
  });
});

$(function(){
  $(".page2-xl-tit h2").click(function(){
    var index = $(this).index();
    $(this).addClass('hover').siblings().removeClass('hover');
    $(".page2-xl-tit-sec ul").eq(index).show().siblings().hide();
  });
  $(".page3-xl-tit h2").click(function(){
    var index = $(this).index();
    $(this).addClass('hover').siblings().removeClass('hover');
    $(".page3-xl-tit-sec ul").eq(index).show().siblings().hide();
  });
  $(".page4-xl-tit h2").click(function(){
    var index = $(this).index();
    $(this).addClass('hover').siblings().removeClass('hover');
    $(".page4-xl-tit-sec ul").eq(index).show().siblings().hide();
  });
  $(".page5-xl-tit h2").click(function(){
    var index = $(this).index();
    $(this).addClass('hover').siblings().removeClass('hover');
    $(".page5-xl-tit-sec ul").eq(index).show().siblings().hide();
  });
  $(".page6-xl-tit h2").click(function(){
    var index = $(this).index();
    $(this).addClass('hover').siblings().removeClass('hover');
    $(".page6-xl-tit-sec ul").eq(index).show().siblings().hide();
  });
})

// //第一屏
// Qfast.add('widgets', { path: "js/terminator2.2.min.js", type: "js", requires: ['fx'] });
// Qfast(false, 'widgets', function () {
//   K.tabs({
//     id: 'decoroll2',//焦点图包裹id
//     conId: "decoimg_a2",//大图域包裹id
//     tabId:"deconum2",//小圆点数字提示id
//     tabTn:"a",
//     conCn: '.decoimg_b2',//大图域配置class
//     auto: 1,//自动播放 1或0
//     effect: 'fade',//效果配置
//     //eType: 'mouseover',// 鼠标事件
//     pageBt:true,//是否有按钮切换页码
//     bns: ['.prev', '.next'],//前后按钮配置class
//     interval: 2500// 停顿时间
//   });
// });

//手风琴效果 第三屏
$(function() {
    $("#cardArea").cardArea()
});
"use strict"; !
function(t, i) {
  var e = {
      id: "#cardArea",
      sid: ".card-item"
  };
  i.fn.cardArea = function(t) {
      var t = i.extend({},
      e, t);
      return this.each(function() {
          var e = i(t.id),
          n = e.find(t.sid);
          n.on("mouseenter",
          function() {
              i(this).addClass("active").siblings().removeClass("active")
          })
      })
  };
} (window, jQuery);

// 第四屏
$(document).ready(function() {
$('#slider').slider({ speed: 500 });
$('#slider2').slider({ speed: 500 });
});
$(function(){
  $(".news-tit h3").click(function(){
    var index = $(this).index();
    $(this).addClass('hover').siblings().removeClass('hover');
    $(".home-news .image-slider").eq(index).show().siblings().hide();
    $(".app-home-news ul").eq(index).show().siblings().hide();
  });
})

//第五屏
$(document).ready(function(e) {
  var progress = $(".progress"),li_width = $("#b04 li").length;
    var unslider04 = $('#b04').unslider({
    dots: true,
    autoplay: false,
    complete:function(index){//自己添加的，官方没有
      progress.animate({"width":(100/li_width)*(index+1)+"%"});
    }
  }),

  data04 = unslider04.data('unslider');
  $('.unslider-arrow04').click(function() {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });
  $('.sec5-banner').css({'width':'1100','height':'240'});
  $('.slider-item').css({'width':'1100'});
  $("#slider").show();
  $("#slider2").hide();
});
