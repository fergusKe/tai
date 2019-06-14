$(function() {
	$("nav > a").click(function() {
		var target = $("main > div").eq($(this).index());
		var v_center = $(window).height() > target.height() ? $(window).height() / 2 - target.height() / 2 : 0;
		var position = target.offset().top - v_center;
		$("html, body").animate({
			scrollTop: position
		})
	});
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		var windowHeight = $(window).height();
		var scrollPosition = scrollTop + windowHeight;
		var index = 0;
		$("main > div").each(function(i) {
			var $this = $(this);
			if( scrollPosition > $this.offset().top + windowHeight / 2 ) {
				index = i;
				$this.not(".bg").addClass("show");	
			}
		});
		$("nav > a").eq(index).addClass("active").siblings().removeClass("active");
	}).scroll();
})