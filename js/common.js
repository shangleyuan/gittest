$(function(){
	//省市点击关闭或打开
	$('.provicesel').on('click',function(){
		if($(this).find('span').text()=='v'){
			$(this).find('span').html('>');
		}else {
			$(this).find('span').html('v');
		}
		$(this).next('.citysel').slideToggle(function(){

		});
		
		
	});
	//点击后改变头部显示的地名
	$('#boxcity a').on('click',function(e){
		e.preventDefault;
		$('.head-left div').html($(this).text());
	})
	//果园开关
	$('.head-left,#boxcity').hover(function(){
		$('#boxcity').show();
	},function(){
		$('#boxcity').hide();
	});
	$('.hideli').hover(function(){
		$(this).find('div').show();
		
	},function(){
		$(this).find('div').hide();
	
	});
	//首页轮播图
	var index=0;
	var timer;
	show();
	var timer=setInterval(function(){
		show();
		index++;
	},3000);
	function show(){
		if(index==6){
			index=0;
		};
		$('#indexbanner .lunboul').animate({left:-320-index*1920});
		$('#indexbanner .slidebtn li').removeClass('active');
		$('#indexbanner .slidebtn li').eq(index).toggleClass('active');
	}
	$('#indexbanner').hover(function(){
		clearInterval(timer)
	},function(){
		timer=setInterval(function(){
		show();
		index++;
		},3000);
	});
	$('#indexbanner .slidebtn').on('click','li',function(){
		index=$(this).index();
		show();
	});
	//移入图片时图片变大，鼠标移处恢复
	$('.fruit-tui dl img').not('bigimg').hover(function(){
		$(this).stop().animate({width:270,height:270,left:-11,top:-11});
	},function(){
		$(this).stop().animate({width:248,height:248,left:0,top:0});
	});
	$('.fruit-tui dl .bigimg').hover(function(){
		$(this).stop().animate({width:270,height:630,left:-11,top:-15});
	},function(){
		$(this).stop().animate({width:248,height:610,left:0,top:0});
	});
	//点击购物车图标显示遮罩层和购物车,更换背景图
	$(' dd ').on('click','.click-buycar',function(){
		$(this).animate({backgroundPositionX:-514,backgroundPositionY: -291})
		$('#buycar').show(600);
		$('.overlay').show().animate({opacity:0.5})
	});
	$('#buycar .shop-top img').on('click',function(){
		$(' dd .click-buycar').animate({backgroundPositionX:-517,backgroundPositionY: -243})
		$('#buycar').hide(800);
		$('.overlay').animate({opacity:0}).hide();
	});
	$('.buynow').on('click',function(){
		$('#buycar').show(600);
		$('.overlay').show().animate({opacity:0.5});
	});
	//点击切换顾客评价和商品详情
	$('.guke-say').on('click','span',function(){
		var index=$(this).index();
		$(this).addClass('spanclicked').siblings().removeClass('spanclicked')
		$('.in-img').eq(index).removeClass('hide').siblings().addClass('hide')

	});
	//切换最近浏览和推荐的商品
	$('.look-history-menu li').on('click',function(){
		var index=$(this).index();
		$(this).addClass('pull-left').siblings().removeClass('pull-left');
		$('.look-history-box ul').eq(index).show().siblings('ul').hide();
	});
	//点击+和—号，来选择商品数量
	
	$('.p4-number .choose-number').on('click',function(){
		var num=parseInt($(this).siblings('input').val());
		var howmuch=$(this).parents('.shop-box-c').find('b').html();
		var howmuch=parseInt(howmuch.slice(1));
		var str=$(this).index('.choose-number');
		if(num!=1 && str%2==0){
			num--;
		};
		if(str%2==1){
			num++;
		}
		
		if(num==1&&str%2==0){console.log(123)
			num=1;
		};
		$(this).siblings('input').val(num);
		var total=num*howmuch;
		$(this).parents('.shop-box-c').find('strong').html('￥'+total);
		var sum=0;
		$('.shop-box-c strong').each(function(){
			sum+=parseInt($(this).html().slice(1))
		});
		$('.end-buy strong').html('￥'+sum);
		
	});
	//删除购物车中所选商品
	$('.shop-box-c .a-last').on('click',function(e){

		e.preventDefault;
		$(this).parent().remove();
	});
	
	
	//商品详情页轮播图
	/*var indexG=0;
	var timerg=setInterval(function(){
		showg();
		indexG++
	},2000)
	function showg(){
		if(indexG==3){
			indexG=0;
		};
		$('.good-content .p2 img').css({opacity:1});
		$('.good-content .p2 img').eq(indexG).css({border:'1px solid orange',opacity:0.5});
		$('.good-content .p3 img').hide();
		$('.good-content .p3 img').eq(2-indexG).show();
	};
	$('.good-content .p3,P2 img').hover(function(){
		clearInterval(timerg);
	},function(){
		timerg=setInterval(function(){
		showg();
		indexG++
		},2000)
	});*/
	
	
	//$('.good-content .p3 img').imagezoom();
	//随机四位字符验证码函数
	function showYan(){
		var arr=["1","2","3","4","5","6","7","8","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var aa="";	
		for(var i=0;i<4;i++){
			var str=parseInt(Math.random()*arr.length);
				aa=aa+arr[str];
		}
		return aa;	
	};
	//验证码随机生成
	$('#yanzhengma').html(showYan());
	//刷新验证码
	$('#yanzhengma').next('b').on('click',function(){
		$('#yanzhengma').html(showYan());
	})
	//表单验证
	$('form input').keyup(function(e){
		/*
			手机号码
				11位
				158 8888 8888
				1 [34578]
		 */
		//var phone = document.getElementById('phone').value;
		var username=$('#username').val();
		if(!/^1[34578]\d{9}$/.test(username)){
			$('#username').parent().next('.rightspan').html('请正确输入的手机号码!');
			return false;
		}else{
			$('#username').parent().next('.rightspan').html('√');
		}

		/*
			密码  
				长度小于20 
				不能包含空格
		 */
		var password=$('#passwd').val();
		if(!/^\S{1,20}$/.test(password)){
			$('#passwd').parent().next('.rightspan').html('密码不能包含空格');
			return false;
		}else if(password.length<6||password.length>20){
			$('#passwd').parent().next('.rightspan').html('密码长度为6-20位');
			return false;
		}else{
			$('#passwd').parent().next('.rightspan').html('√');	
		}
		var confirm_pwd = $('#apasswd').val();
		if(confirm_pwd != password){
			$('#apasswd').parent().next('.rightspan').html('两次输入密码要一致');
			return false;
		}else{
			$('#apasswd').parent().next('.rightspan').html('√');
		};
		var yanzhengma=$('#yanzhengma').html();
		var verify=$('#verify').val();
		if(yanzhengma !=verify){console.log(verify)
			$('#verify').parent().siblings('.rightspan').html('请输入验证码');
			return false;
		}else{
			$('#verify').parent().siblings('.rightspan').html('√');
		};
		

	});
	
	
	

})