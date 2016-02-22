var SelectView = function(container, model) {
	this.dishSelection = container;
	
	this.starters = model.getAllDishes('starter');
	this.mainDishes = model.getAllDishes('main dish');
	this.desserts = model.getAllDishes('dessert');
	
	this.starterRow = this.dishSelection.append("<tr>");
	for (var i = 0; i < this.starters.length; i++) {
		this.starterRow.append("<td><img src='images/" + this.starters[i].image + "'/><button class='btn' id='" + this.starters[i].id + "'>" + this.starters[i].name + "</button><p>" + this.starters[i].description + "</p></td>");
	}
	
	this.mainRow = this.dishSelection.append("<tr>");
	for (var i = 0; i < this.mainDishes.length; i++) {
		this.mainRow.append("<td><img src='images/" + this.mainDishes[i].image + "'/><button class='btn' id='" + this.mainDishes[i].id + "'>" + this.mainDishes[i].name + "</button><p>" + this.mainDishes[i].description + "</p></td>");
	}
	
	this.dessertRow = this.dishSelection.append("<tr>");
	for (var i = 0; i < this.desserts.length; i++) {
		this.dessertRow.append("<td><img src='images/" + this.desserts[i].image + "'/><button class='btn' id='" + this.desserts[i].id + "'>" + this.desserts[i].name + "</button><p>" + this.desserts[i].description + "</p></td>");
	}
}