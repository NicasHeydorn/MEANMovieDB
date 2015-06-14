$(document).ready(function() {
	$('body').on('click', '.js-modalButton', function() {
		showModal();
	});
	$('body').on('click', '.backdrop, .closeModal', function() {
		closeModal();
	});
});

var closeModal = function() {
	$('.modal').fadeOut('slow');
	$('.backdrop').fadeOut('slow');
}

var showModal = function() {
	$('.modal').fadeIn('slow');
	$('.backdrop').fadeIn('slow');
}