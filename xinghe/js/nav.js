var navwidth = $(window).width();
console.log(navwidth);
$("#dhl ul").css("width",navwidth);
var ultop = $("#nav-two").height();
console.log(ultop);
$("#dhl ul").css("top",ultop);

$(".list-title").click(function(){
  $(this).next('.accordion').slideToggle();
});

$(function() {
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
