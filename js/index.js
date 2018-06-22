$(function(){
//	获取屏幕的宽高
	var nowpage=0;
//	当前页数
	var width=window.innerWidth;
	var height=window.innerHeight;
	
	$(".content").width(width);
	$(".content").height(4*height);
	
	$(".page").width(width);
	$(".page").height(height);
//	不是jquery自带的,是引入的插件
//手指触屏滑动的时间
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
//			滑动分页的功能
			if(direction=="up"){
				nowpage++;
			}
			if(direction=="down"){
				nowpage--;
			}
			if(nowpage<0){
				nowpage=3;
			}else if(nowpage>3){
				nowpage=3;
			}
			$(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
				if(nowpage==1){
					$(".page2-farm").fadeIn(2000,function(){
						$(".page2-it").fadeIn(2000);
					})
				}
				if(nowpage==2){
					$(".page3-earlytitle").fadeIn(2000);
					$(".page3-bustitle").fadeIn(3000);
					$(".page3-bus").animate({left:"-100%"},{duration:2000});
					$(".page3-busavatar").animate({left:"50%"},{duration:3000,complete:function(){
						$(".page3-bus").fadeOut("slow");
						$(".page3-busstation").fadeOut("slow");
						$(".page3-earlytitle").fadeOut("slow");
						$(".page3-busavatar").fadeOut("slow");
						$(".page3-bustitle").fadeOut("slow",function(){
							$(".page3-wall").fadeIn("slow");
							$(".page3-avatar").fadeIn("slow",function(){
								$(".page3-space")animate({width:"30%"},{duration:400,complete:function(){
									$(".page3-wheretxt").animate({width:"55%"},{duration:400})
								}})

									
							});
						});
					}
					
				
				}
				if(nowpage==3){
					$(".page4-lightoff").fadeOut(2000);
					$(".page4-offbg").fadeOut(2000,function(){
						$(".page4-onbg").fadeIn(1000);
						$(".page4-lighton").fadeIn(1000);
					});
					
				}
			}});
		}
		
	});
//	animate({要做的动画效果},{duration:动画时长,complete:动画执行完要做的事情})
	$(".page1-building").fadeIn(400,function(){
		$(".page1-flight").animate({width:"70%"},{duration:2000});
	});
	
	
})

//$(document).ready(function(){
//	
//})
//等文档完成后再执行js