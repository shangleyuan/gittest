$(function(){
	//商品详情页放大镜
	$(".good-content .p3 .p-big img").imagezoom();
	
	$(".good-content li ").click(function(){
		$(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
		$(".good-content .p3 .p-big img").attr('src',$(this).find("img").attr("mid"));
		$(".good-content .p3 .p-big img").attr('rel',$(this).find("img").attr("big"));
	});
	
	//顾客评价栏固定
	var fromtop=$('.longimg .guke-say').offset().top;
	$(window).on('scroll',function(){
		
		var scrollTop=$(window).scrollTop();
		if(scrollTop>=fromtop){
			$('.longimg .guke-say').css({position:'fixed',top:0})
		}else{
			$('.longimg .guke-say').removeAttr('style');
		}
	});
})