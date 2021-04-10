$(document).ready(function(){
	$('.camera__button').click(function(){
    $('.camera--hidden').toggleClass('camera--active'); return false;
	});
});

$(document).ready(function(){
	$('.camera__button').click(function(){
    $('.camera').toggleClass('camera--high'); return false;
	});
});
