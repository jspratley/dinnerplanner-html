var HomeView = function(container, model) {
	
	//Create the initial home page
	$("body").addClass("index");
	
	this.header = container.find("#header");
	this.header.addClass("header");
	
	this.createDinner = container.find(".createDinner");
	this.createDinner.append("<h3>A Home Dinner Service</h3>");
	this.createDinner.append("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>");
	
	this.startContainer = this.createDinner.append("<div id='start'>");
	this.startContainer.append("<p>Start quickly</p>");
	this.createDinnerButton = this.startContainer.append("<button id='startDinner' class='btn'>Create new dinner</button>");
	
	//Make this an observer
	model.addObserver(this);
}