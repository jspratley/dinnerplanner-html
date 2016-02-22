var NavViewController = function(view, model) {
	//Handle the Confirmation of a dinner
	view.confirmButton.click(function() {
		view.sidebar.hide();
		$('.dish-container').hide();
		$('.selected-container').hide();
		$('.subheader').show();
		$('#dinnerOverview').show();
	});
}