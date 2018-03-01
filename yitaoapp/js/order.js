var oOrder = document.querySelector('#order');
myajax.get('http://h6.duchengjiu.top/shop/api_order.php', {token: localStorage.token}, function(err, responseText){
  var json = JSON.parse(responseText);
  console.log(json);
  var data = json.data;
  if (data.length === 0) {
    oOrder.innerHTML = "<h4>您的订单为空，如果还没登录，请先&nbsp;<a href='register.html'>登录</a></h4>";
    return;
  }
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    //遍历商品列表，拼装HTML
    var goodsHTML = '';
    for (var j = 0; j < obj.goods_list.length; j++) {
      var goods = obj.goods_list[j];
      goodsHTML += `
        <div class="no2 col-lg-12 col-sm-12">
          <img src="${goods.goods_thumb}">	
          <p class="shop-name">${goods.goods_name}</p>
          <p>单价：${goods.goods_price}</p>
          <p>数量：${goods.goods_number}</p>
          <p>小计：${goods.goods_price * goods.goods_number}</p>
        </div>
      `;
    }
    //一件商品的总价
    oOrder.innerHTML += `
      <li class="container">
        <div class="no1 col-lg-12 col-sm-12">
        	<p>订单号:${parseInt(Math.random()*10000000000)}${obj.order_id}</p>
        	<p>收货人：${obj.consignee}</p> 
        	<p>总价:${obj.total_prices}</p>
        	<span data-id="${obj.order_id}" class="cancel-order">取消订单</span>
          <span><a class="bill" href="checkout.html">结算</a></span>
        </div>
        <div class="order-goods">
        ${goodsHTML}
        </div>
      </li>
      `;
}
});

oOrder.onclick = function(event) {
event = event || window.event;
var target = event.target || event.srcElement;
var no = document.querySelectorAll('.cancel-order');
var bill= document.querySelectorAll('.bill');
if (target.className === 'cancel-order') {
  console.log(this);
    if (!confirm('确认要取消订单吗?')) {
      return;
    }
    var order_id = target.dataset.id;
    myajax.post('http://h6.duchengjiu.top/shop/api_order.php?token='+localStorage.token+'&status=cancel', {order_id}, function(err, responseText) {
      var json = JSON.parse(responseText);
      if (json.code === 0) {
        alert('订单取消成功');
        (function(){
          for(i = 0; i < no.length; i++){
            console.log(no[i]);
            if(no[i] == target){
              no[i].innerHTML = "订单已取消";
              no[i].className = 'no';
              bill[i].className = '';
              //console.log(oOrder.removeChild(no[i].parentNode.parentNode));
              //console.log(no[i].parentNode.parentNode);
            }
          }
          console.log(target);
        }());
      }
    });
}
}