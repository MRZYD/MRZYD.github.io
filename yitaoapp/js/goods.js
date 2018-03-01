var Message = document.getElementById("message");
var goods_id = getQueryString("goods_id");

// myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{goods_id},function (err,responseText) {
//       var json = JSON.parse(responseText);
//       console.log(json);
//       var obj = json.data[0];
//
// })


function getDetails(callback) {

        $.get("http://h6.duchengjiu.top/shop/api_goods.php?goods_id="+goods_id+"",function (result) {
            console.log(result);
            callback(result.data[0].goods_id);
            var info=result.data[0];
            Message.innerText =""+info.goods_desc+"";

            var des=$('<div>'+info.goods_desc+'</div>');
            var images=$('<div><img src='+info.goods_thumb+' alt="" class="imgs"></div>');
            var price=$('<div>￥'+info.price+'</div>');
            $(".detail").append(images);
            $(".detail").append(des);
            $(".detail").append(price);
            $(".imgs").css({
                width:'100%',
                height:'50%',
                'margin-bottom':'5%'
            })
            price.css({
                color:'red',
                'margin-top':'5%'
            })
        })
}
getDetails(function (result) {
    console.log(result)
});
var oA = document.getElementById("add-to-cart");
oA.addEventListener("touchstart",function (event) {
    event = event|| window.event;
    var target = event.target || event.srcElement;
    if (target.id === 'add-to-cart') {
        if (!localStorage.token) {
            alert('请先登录再购买', 1700);
            var timer = setTimeout(function () {
                localStorage.backurl = location.href;
                location.href = "register.html";
                clearTimeout(timer);
            }, 1700);
            return;
        }
        myajax.post('http://h6.duchengjiu.top/shop/api_cart.php?token='+localStorage.token,
            {goods_id, number:1},
            function(err, responseText) {
                var json = JSON.parse(responseText);
                console.log(json);
                if (json.code === 1004) {
                    alert('添加到购物车成功,在购物车等候亲亲',1500);
                        var timer=setTimeout(function () {
                        location.href="car.html";
                        clearTimeout(timer);
                    },1500);
                }
            })
    }
});
