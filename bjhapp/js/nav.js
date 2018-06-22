//移动导航栏效果
$(function(){
	$('.slide-wrapper').on('touchstart', 'li', function(e){
		$(this).addClass('current').siblings('li').removeClass('current');
	});


	$('.nav-button').on('click',function(){
			if($(".nav-slide-wrapper").hasClass("moved")){
				 $('html,body').css({'overflow':'visible'},{'height':'auto'});
				 $('.nav-slide-wrapper').removeClass('moved');
				 $('.nav-button').removeClass('drawer-open');
			}else{
				$('html,body').css({'overflow':'hidden'},{'height':'100%'});
				$('.nav-button').addClass('drawer-open');
				var wh = $('window').height();
				$('.slide-mask').css('height', wh).show();
				$('.nav-slide-wrapper').css('height', wh).addClass('moved');
			}
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
