var SelectViewController = function(view, model) {
	this.buttons = view.dishSelection.find('.btn');
	
	this.buttons.click(function() {
		var dishView = new DishView($('.selected-container'), model, this.id);
		$('#dishSelection').hide();
		$('.selected-container').show();
	});
}