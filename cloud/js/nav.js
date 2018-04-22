//PC导航栏效果
var sw = $(window).width(),
    sh = $(window).height(),
headerH = $(".header").outerHeight(),
footerH = $(".footer").outerHeight(),
contentH = sh - headerH - footerH;
if (sw > 900) {
    upheader();
};
///////////////////////////nav///////////////////////////////
function upheader () {
    var initTop = 0;
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop > initTop&&scrollTop!=0){
            $(".header").addClass("header-back")
        } else {
        }
        if (scrollTop === 0) {
           $(".header").removeClass("header-back")
        }
        initTop = scrollTop;
    });
}


//移动导航栏效果
$(function(){
	$('aside.slide-wrapper').on('touchstart', 'li', function(e){
		$(this).addClass('current').siblings('li').removeClass('current');
	});

	$('a.slide-menu').on('click', function(e){
		var wh = $('window').height();
		$('div.slide-mask').css('height', wh).show();
		$('aside.slide-wrapper').css('height', wh).addClass('moved');
	});

	$('div.slide-mask').on('click', function(){
		$('div.slide-mask').hide();
		$('aside.slide-wrapper').removeClass('moved');
	});

  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  };

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this);
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    }
  };

  var accordion = new Accordion($('#accordion'), false);
  $('.submenu li').click(function () {
    $(this).addClass('current').siblings('li').removeClass('current');
  });

});
