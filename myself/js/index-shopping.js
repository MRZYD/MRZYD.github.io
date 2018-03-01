	var oUl1 = document.querySelector('#shopping-list').querySelector('ul');
	myajax.get('http://h6.duchengjiu.top/shop/api_cat.php', {}, function(error, responseText){
		var json = JSON.parse(responseText);
		var data = json.data;
		
		for (var i = 0; i < data.length; i++) {
			var obj = data[i];
			oUl1.innerHTML += `<li><a href="list.html?cat_id=${obj.cat_id}">${obj.cat_name}</a></li>`;
		}
	});

	//吸顶效果
	var mainNav =document.querySelector('#shopping-list');
	var topDis = getAllTop(mainNav);
	window.onscroll = function(e) {
	  var nowTop = document.documentElement.scrollTop || document.body.scrollTop;
	  if(nowTop >= topDis) {
	    mainNav.style.position = 'fixed';
	  }else {
	    mainNav.style.position = 'relative';
	  }
	};
	function getAllTop(obj) {
	  var allTop = obj.offsetTop;
	  while(obj = obj.offsetParent) {
	    allTop += obj.offsetTop;
	  }
	  return allTop;
	}

	//搜索框的正则表达式
	function getQueryString(name) {
		var search = location.search.substr(1);
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var result = search.match(reg);
		return result === null ? null : decodeURIComponent(result[2]);
	}


	var cat_id = getQueryString('cat_id');
	var oUl2 = document.querySelector('#shopping-info').querySelector('ul');
	myajax.get('http://h6.duchengjiu.top/shop/api_goods.php?cat_id='+cat_id, {}, function(error, responseText){
		var json = JSON.parse(responseText);
		var data = json.data;
		for (var i = 0; i < data.length; i++) {
			var obj = data[i];
			oUl2.innerHTML += `
			<li>
				<a href="goods.html?goods_id=${obj.goods_id}">
					<div><img src="${obj.goods_thumb}">
					<em>${obj.goods_desc}</em></div>
					<h2>${obj.goods_name}</h2>
					<span>￥${obj.price}</span>
					<img src="../images/tianmao.png">
					<p>销量:390</p>
					
				</a>
			</li>`;
			
		}
	});