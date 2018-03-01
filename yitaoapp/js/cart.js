var oTable = document.querySelector('#cart');
var oSum = document.querySelector('#sum');
myajax.get('http://h6.duchengjiu.top/shop/api_cart.php', {token: '7e7a2d98a03ad57fc2e177df95e1d2e6'}, function(err, responseText){
  var json = JSON.parse(responseText);
  console.log(json);
  var data = json.data;
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    //一件商品的总价
    obj.goods_sum = obj.goods_price * obj.goods_number;
    oTable.innerHTML += `
                      <li class="innerHTML">
                      
												<div class="pic"><a href='goods.html?goods_id=${obj.goods_id}'><img class="imgss"  src="${obj.goods_thumb}" ></a></div>
												 </li>
												<li class="innerhtmls">
                        <div class="name">${obj.goods_name}</div>
                        <p class="total" name="sum">${obj.goods_sum}</p>
                       <div class="oper"><input data-id="${obj.goods_id}" type="button" name="delete" value="删除" class='delete'></div>
                           
                         <div class="maths"><input data-id="${obj.goods_id}" type="number" name="number" min="1" max="100" value="${obj.goods_number}" class="text_box"/></div>
                         

                         </li>
                     
                      `;
    
  }
  getSum();
});

oTable.onchange = function(event) {
      event = event || window.event;
      var target = event.target || event.srcElement;
      if (target.name === 'number') {
        //如果输入的内容不是数字，我们默认改成1
        if (isNaN(parseInt(target.value))) {
          target.value = 1;
        }
        console.log(target.value, target.dataset.id);
        //得到商品的ID
        var goods_id = target.dataset.id;
        //得到商品的数量
        var number = target.value;
        //请求api修改购买的商品数量
        myajax.post('http://h6.duchengjiu.top/shop/api_cart.php?token='+localStorage.token,
        {goods_id, number},
        function(err, responseText) {
          var json = JSON.parse(responseText);
          console.log(json);
          if (json.code === 0) {
            // alert('更新购物车成功');
            //修改总价和小计
            //得到当前商品的价格
            var goods_price = parseInt(target.parentNode.nextElementSibling.innerText);
            //修改单个商品的总价：数量 * 价格
            target.parentNode.nextElementSibling.nextElementSibling.innerText = parseInt(target.value) * goods_price;
            //显示总价
            getSum();
          }
        })
      }
    }
oTable.addEventListener('click', function(event){
  event = event || window.event;
  var target = event.target || event.srcElement;
  if (target.name === 'delete') {
   
    
    confirm('确认要删除吗',function(){
    		//得到商品ID
		    var goods_id = target.dataset.id;
		    var number = 0;
		    myajax.post('http://h6.duchengjiu.top/shop/api_cart.php?token='+localStorage.token,
		    {goods_id, number},
		    (err, responseText) => {
		      var json = JSON.parse(responseText);
		      console.log(json);
		      if (json.code === 0) {
		        // alert('更新购物车成功');
		        //删除整个TR
		        var tr = target.parentNode.parentNode;
		        tr.parentNode.removeChild(tr);
		        //显示总价
		        getSum();
		      };
		    },function(){
		    	return;
		    })
    })
  
  }
});

var oClearCart = document.querySelector('#clear-cart');
oClearCart.onclick = () => {  
  confirm('确认要清空整个购物车吗？',function(){
  	//得到所有的商品ID
	  var oGoodsIds = document.querySelectorAll('div[name=goods_id]');
	  for (var i = 0; i < oGoodsIds.length; i++) {
	    var td = oGoodsIds[i];
	    var goods_id = parseInt(td.innerText);
	    var number = 0;
	    (function(td){
	      myajax.post('http://h6.duchengjiu.top/shop/api_cart.php?token='+localStorage.token,
	      {goods_id, number},
	      (err, responseText) => {
	        var json = JSON.parse(responseText);
	        console.log(json);
	        if (json.code === 0) {
	          // alert('更新购物车成功');
	          //删除整个TR
	          var tr = td.parentNode;
	          tr.parentNode.removeChild(tr);
	          //显示总价
	          getSum();
	        }
	      });
	    })(td);
	  }
  },function(){
  	return;
  })
}

 //显示出总价
    function getSum() {
      var oSums = document.querySelectorAll('td[name=sum]');
      var sum = 0;
      for (var i = 0; i < oSums.length; i++) {
        sum += parseInt(oSums[i].innerText.substr(1));
      }
      localStorage.sum = sum;
      oSum.innerText = "￥" + sum;
    }