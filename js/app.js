$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	var selectView = new SelectView($("#dishSelection"), model);
	var dishView = new DishView($(".selected-container"), model);
	var prepView = new PrepView($(".prep"), model);
	var overView = new OverView($(".selected-courses"), model);
});