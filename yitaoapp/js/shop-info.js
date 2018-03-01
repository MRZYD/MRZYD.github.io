	var page = 1;
	var pagesize = 1000;
	var cat_id = getQueryString('cat_id');
	function getContent(){
		$.get('http://h6.duchengjiu.top/shop/api_goods.php?cat_id='+cat_id, {page, pagesize}, function(json){
			var template = "<li> <a href= goods.html? goods_id= <%=obj.goods_id %> ><div><img src= <%= obj.goods_thumb %> /></div><h2> <%= obj.goods_name %> </h2><span>￥ <%= obj.price %></span> <img src=../images/tianmao.png ><p>销量:390</p></a></li>";
			var compile = _.template(template);
			for(var i = 0; i < json.data.length; i++){
				var data = json.data[i];
				$('.shop-info-ul').html($('.shop-info-ul').html() + compile(data));
			}
			lock = true;
		});
	}
	getContent();
	
	//函数截流
	var lock = true;
	$(window).scroll(function(){
		if(!lock) return;
		var rate = $(document).scrollTop() / $(document).height();
		console.log(rate);
		if (rate > 0.7){
			getContent(++page);
			lock = false; //加锁
		}
	});

