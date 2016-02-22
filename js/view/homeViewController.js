var HomeViewController = function(view, model) {
	//Handle the creation of a dinner
	view.createDinnerButton.click(function() {
		view.header.removeClass("header");
		view.header.addClass("header-other");
		$("body").removeClass("index");
		view.create.hide();
		
		view.sidebar.show();
		view.selection.show();
	});
}