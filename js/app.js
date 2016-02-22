$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var homeView = new HomeView($("body"), model);
	var homeViewController = new HomeViewController(homeView, model);
	var navView = new NavView($(".sidebar"), model);
	var navViewController = new NavViewController(navView, model);
	var selectView = new SelectView($("#dishSelection"), model);
	var selectViewController = new SelectViewController(selectView, model);
	//var dishView = new DishView($(".selected-container"), model);
	var prepView = new PrepView($(".prep"), model);
	var overView = new OverView($(".selected-courses"), model);
	var something = new OverView($(".subheader"), model);
	var prepGuests = new PrepView($(".subheader"), model);
});