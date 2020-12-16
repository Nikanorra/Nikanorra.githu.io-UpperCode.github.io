$(document).ready(function(){
	$(".index__default.white").click(function(){
		$(this).parent().toggleClass("active");
	})

	$(".index__choice.white li").click(function(){
		var currentele = $(this).html();
		$(".index__default.white li").html(currentele);
		$(this).parents(".index__select.white").removeClass("active");
	});

	//tabs
	$(".index__default.white.maker").click(function(){
		$(this).parent().toggleClass("active");
	})

	$(".index__choice.white.maker li").click(function(){
		var currentele = $(this).html();
		$(".index__default.white.maker li").html(currentele);
		$(this).parents(".index__select.white.maker").removeClass("active");
	});

	$(".index__default.white.type").click(function(){
		$(this).parent().toggleClass("active");
	})

	$(".index__choice.white.type li").click(function(){
		var currentele = $(this).html();
		$(".index__default.white.type li").html(currentele);
		$(this).parents(".index__select.white.type").removeClass("active");
	});

	$(".index__default.blue").click(function(){
		$(this).parent().toggleClass("active");
	})

	$(".index__choice.blue  li").click(function(){
		var currentele = $(this).html();
		$(".index__default.blue li").html(currentele);
		$(this).parents(".index__select.blue").removeClass("active");
	});



//plus-minus
	 $('.minus').click(function () {
			 var $input = $(this).parent().find('input');
			 var count = parseInt($input.val()) - 1;
			 count = count < -50 ? 1 : count;
			 $input.val(count);
			 $input.change();
			 return false;
	 });
	 $('.plus').click(function () {
			 var $input = $(this).parent().find('input');
			 $input.val(parseInt($input.val()) + 1);
			 $input.change();
			 return false;
	 });


});
