;(function($){
	$.fn.popup=function(pos){
		var def={width:300,
				drag:true,
				overlay:0.3,
				position:'center',
				title:'这不是一般的弹窗',
				content:'这不是简单的内容，这个内容不简单'

		};
		var popResult=$.extend({},def,pos);
		
		
		this.each(function(index,obj){
			//是否显示遮罩层
			if(popResult.overlay){
				var $overlay=$('<div/>').addClass('overlay').appendTo('body');
				$overlay.css('opacity',popResult.overlay);
			}
			var $pop=$('<div/>').addClass('pop').appendTo('body');
			$pop.css('width',popResult.width);
			var $title=$('<div/>').addClass('title').html(popResult.title).appendTo($pop);
			var $content=$('<div/>').addClass('content').html(popResult.content).appendTo($pop);
			var $spanclose=$('<span/>').addClass('spanclose').html('&times;').appendTo($pop);
			
			//是否拖拽
			if(popResult.drag){
				$pop.on('mousedown',function(e){
				    var fpos={left:e.offsetX,top:e.offsetY};
					$(document).on('mousemove',function(e){
						$pop.css({left:e.clientX-fpos.left,top:e.clientY-fpos.top});
						e.preventDefault();

					});
					e.preventDefault();
				}).on('mouseup',function(){
					$(document).off('mousemove')
				})
			};
			//确定起始位置
			var initpos=popResult.position;
			function position(){
				if(initpos=='center'){
				$pop.css({
					left:($(window).width()-$pop.outerWidth())/2,
					top:($(window).height()-$pop.outerHeight())/2,
				});
				};
				if(initpos=='lb'){
					$pop.css({
						left:0,
						top:auto,
						bottom:0,
					});
				};
				if(initpos=='rb'){
					$pop.css({
						left:auto,
						top:0,
						right:0
					});
				};
				if($.type(initpos)=='object'){
					$pop.css(initpos);
				};
			}
			position();
			//关闭弹窗
			$spanclose.on('click',function(){
				$pop.remove();
				$overlay.remove();
			});
			$(window).on('resize scroll',function(){
				position();
			})

		});
		return this;
	}
})(jQuery);