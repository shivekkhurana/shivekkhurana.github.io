$(function() {
	$('<img/>').attr('src', 'bg.jpg').load(function() {
		$(this).remove(); // prevent memory leaks as @benweet suggested
		$('body').css('background-image', 'url(bg.jpg)');
		$('.name').addClass('animated bounceInUp');
		$('.contact').addClass('animated bounceInDown')
	});
});