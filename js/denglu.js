$(function(){
	//登录验证,保留登录名
	var _cookie=document.cookie;
	if(_cookie.indexOf('username') != -1){
		$.each(_cookie.split('; '),function(idx,val){
			if(val.split('=')[0]=='username'){
				var username= JSON.parse(val.split('=')[1]).username;
				var passwd=JSON.parse(val.split('=')[1]).passwd;
			    $('#username').val(username);
				return false;
			} 
			
		});
	};
	if(_cookie.indexOf('goodname') != -1){
		$.each(_cookie.split('; '),function(idx,val){
			if(val.split('=')[0]=='goodname'){
				var danjia= JSON.parse(val.split('=')[1]).danjia;
				var guige=JSON.parse(val.split('=')[1]).guige;
				var goodname=JSON.parse(val.split('=')[1]).goodname;
				var src=JSON.parse(val.split('=')[1]).src;
			    var $shop=$('.shop-box-c').clone(true);
			  	$shop.find('img').attr('src',src);
				$shop.find('.a-1').html(goodname);
				$shop.find('b').html(danjia);
				$shop.find('.span-w').html(guige);
				$shop.appendTo('.shop-box');
			} 
			
		});
	};
	//保存Cookie	
	$('form .button1').on('click',function(){

		//cokie保存用户名和密码
		var now=new Date();
		now.setDate(now.getDate()+7);
		var obj=new Object();
		obj.username=$('#username').val();
		obj.passwd=$('#passwd').val();
		var _cookie='username=' + JSON.stringify(obj);
		document.cookie=_cookie+';expires='+now.toGMTString();
	});

	$('form .button2').on('click',function(){
		var _cookie=document.cookie;
		if(_cookie.indexOf('username') != -1){
			$.each(_cookie.split('; '),function(idx,val){
				if(val.split('=')[0]=='username'){
					var username= JSON.parse(val.split('=')[1]).username;console.log(username)
					var passwd=JSON.parse(val.split('=')[1]).passwd;console.log(passwd)
					if($('#passwd').val()==passwd && $('#username').val()==username){
						location.href='index.html';
					}
				   
					return false;
				} 
				
			});
		}
	
	});
	/* <div class="shop-box-c">

                <a href="#">
                    <img src="../img/1-270x270-4394-P49CTT8S.jpg">
                </a> 
                <a href="/prodetail/index/12064" target="_blank" class="a-1">越南红心火龙果</a>
                <span class="span-w">2斤</span> 
                <b>￥38.00</b>
                <div class="p4-number">
                    <div class="in-span">
                        <span class="choose-number">－</span>
                        <input type="text" value="1" >
                        <span class="choose-number">＋</span>
                    </div>   
                </div>
                <strong>￥38</strong>
                <a class="a-last" href="#"> 删除</a>
            </div>
			<dl>
			<dt><a href="#"><img src="../img/guoran_7.jpg" alt=""></a></dt>
			<dd>
				 <div class="s-name">
                        澳大利亚蜜桔
                    </div>
                    <div class="s-unit">
                        ￥39.00/6个
                    </div>
                    <div class="click-buycar" style="background-position:-517px -243px">
            		</div>
			</dd>
		</dl>
		var src=$(this).parents('.shop-box-c').find('img').attr('src');
			var goodname=$(this).parents('.shop-box-c').find('.a-1').html();
			var danjia=$(this).parents('.shop-box-c').find('b').html();
			var danjia=$(this).parents('.shop-box-c').find('b').html();
			*/
	//保存商品信息cookie
	$('.click-buycar').on('click',function(){
			var danjia=$(this).siblings('.s-unit').html().slice(0,2);
			var guige=$(this).siblings('.s-unit').html().slice(3);
			var goodname=$(this).siblings('.s-name').html();
			var src=$(this).parents('dl').find('img').attr('src');
			
			var obj={};
			obj.danjia=danjia;
			obj.guige=guige;
			obj.goodname=goodname;
			obj.src=src;
			var now=new Date();
			now.setDate(now.getDate()+7);
			var _cookie='goodname=' + JSON.stringify(obj);
			document.cookie=_cookie+';expires='+now.toGMTString();
		});
		
	
	
	
	
	
	
	
	
	
})