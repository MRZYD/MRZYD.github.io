$(function(){
	$("#timeline").timelinr()
});

  var swiper2 = new Swiper('.swiper-adv-banner', {
     slidesPerView: 1,
     spaceBetween: 30,
     loop: true,
     pagination: {
       el: '.swiper-adv-pagination',
       clickable: true,
     },
     autoplay: {
       delay: 5500,
       disableOnInteraction: false,
     },
     observer:true,/*启动动态检查器，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。*/
     observeParents:true,/*将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。*/
   });

   //团队切换
   $(function(){
     $(".team-adv-tit h2").click(function(){
       var index = $(this).index();
       $(this).addClass('hover').siblings().removeClass('hover');
       $(".team-adv-ban-sec .team-adv-banner").eq(index).show().siblings().hide();
     });
   })

   //荣誉资质切换
   $(function(){
     $(".honor-tit h2").click(function(){
       var index = $(this).index();
       $(this).addClass('hover').siblings().removeClass('hover');
       $(".honor-ban-sec .honor-banner").eq(index).show().siblings().hide();
     });
   })

   //荣誉资质
   var certifySwiper2 = new Swiper('#certify .swiper-container-border-three', {
     // autoplayDisableOnInteraction : false
     watchSlidesProgress: true,
     slidesPerView: 'auto',
     centeredSlides: true,
     loop: true,
     loopedSlides: 5,
     autoplay: true,
     navigation: {
       nextEl: '.button-right-three-border',
       prevEl: '.button-left-three-border',
     },
     // pagination: '.swiper-pagination-border',
     // paginationType : 'fraction',
     // paginationClickable :true,
     // pagination: {
     //   el: '.swiper-pagination-border',
     //   paginationType : 'fraction',
     //   clickable :true,
     // },
     observer: true, //修改swiper自己或子元素时，自动初始化swiper，主要是这两行
     observeParents: true, //修改swiper的父元素时，自动初始化swiper
     on: {
       progress: function(progress) {
         for (i = 0; i < this.slides.length; i++) {
           var slide = this.slides.eq(i);
           var slideProgress = this.slides[i].progress;
           modify = 1;
           if (Math.abs(slideProgress) > 1) {
             modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
           }
           translate = slideProgress * modify * 490 + 'px';
           scale = 1 - Math.abs(slideProgress) / 5;
           zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
           slide.transform('translateX(' + translate + ') scale(' + scale + ')');
           slide.css('zIndex', zIndex);
           slide.css('opacity', 1);
           if (Math.abs(slideProgress) > 3) {
             slide.css('opacity', 0);
           }
         }
       },
       setTransition: function(transition) {
         for (var i = 0; i < this.slides.length; i++) {
           var slide = this.slides.eq(i)
           slide.transition(transition);
         }

       }
     }
   });

   var certifySwiper3 = new Swiper('#certify .swiper-container-border-four', {
     // autoplayDisableOnInteraction : false
     watchSlidesProgress: true,
     slidesPerView: 'auto',
     centeredSlides: true,
     loop: true,
     loopedSlides: 5,
     autoplay: true,
     navigation: {
       nextEl: '.button-right-four-border',
       prevEl: '.button-left-four-border',
     },
     // pagination: '.swiper-pagination-border',
     // paginationType : 'fraction',
     // paginationClickable :true,
     pagination: {
       el: '.swiper-pagination-border',
       paginationType : 'fraction',
       clickable :true,
     },
     observer: true, //修改swiper自己或子元素时，自动初始化swiper，主要是这两行
     observeParents: true, //修改swiper的父元素时，自动初始化swiper
     on: {
       progress: function(progress) {
         for (i = 0; i < this.slides.length; i++) {
           var slide = this.slides.eq(i);
           var slideProgress = this.slides[i].progress;
           modify = 1;
           if (Math.abs(slideProgress) > 1) {
             modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
           }
           translate = slideProgress * modify * 490 + 'px';
           scale = 1 - Math.abs(slideProgress) / 5;
           zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
           slide.transform('translateX(' + translate + ') scale(' + scale + ')');
           slide.css('zIndex', zIndex);
           slide.css('opacity', 1);
           if (Math.abs(slideProgress) > 3) {
             slide.css('opacity', 0);
           }
         }
       },
       setTransition: function(transition) {
         for (var i = 0; i < this.slides.length; i++) {
           var slide = this.slides.eq(i)
           slide.transition(transition);
         }

       }
     }
   });
