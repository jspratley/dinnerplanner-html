var HomeView = function(container, model) {
	
	//Create the initial home page
	$("body").addClass("index");
	
	this.create = container.find(".createDinner");
	
	this.header = container.find("#header");
	this.header.addClass("header");
	
	this.sidebar = container.find(".sidebar");
	this.sidebar.hide();
	
	this.selection = container.find(".dish-container");
	this.selection.hide();
	
	$('.subheader').hide();
	$('#dinnerOverview').hide();
	$('.selected-container').hide();
	$('.prep').hide();
	
	this.createDinnerButton = container.find("#startDinner");
	
	//Make this an observer
	model.addObserver(this);
}