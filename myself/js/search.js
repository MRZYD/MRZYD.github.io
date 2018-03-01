	var search_text = getQueryString('search_text');
    //name abc
    //123
    var oGoods = document.querySelector('#hot-goods');
    myajax.get('http://h6.duchengjiu.top/shop/api_goods.php',
    {search_text: search_text},
    function(err,responseText){
      var json = JSON.parse(responseText);
      console.log(json);
      var data = json.data;
      //如果没数据要给出提示
      if (data.length === 0) {
        oGoods.innerHTML = "未搜索到商品, <span id='second'>5</span>秒后跳回首页";
        var oSecond = oGoods.querySelector('#second');
        var timer = setInterval(() => {
          var second = parseInt(oSecond.innerText);
          oSecond.innerText = --second;
        }, 1000);
        setTimeout(() => {
          clearInterval(timer);
          location.href = 'index.html';
        }, 5000);
        return;
      }
      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        oGoods.innerHTML += `<li class="goods">
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