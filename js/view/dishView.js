var DishView = function(container, model) {
	this.dishDescription = container.find(".selected");
	this.dishIngredients = container.find("#ingredientList");
	
	this.dish = model.getDish(100);
	
	this.dishDescription.append("<h3>" + this.dish.name + "</h3>");
	this.dishDescription.append("<img src='images/" + this.dish.image + "'/>");
	this.dishDescription.append("<p>" + this.dish.description + "</p>");
	
	for (var i = 0; i < this.dish.ingredients.length; i++) {
		var newRow = this.dishIngredients.append("<tr>");
		newRow.append("<td>" + this.dish.ingredients[i].quantity + "</td><td>" + this.dish.ingredients[i].unit + "</td><td>" + this.dish.ingredients[i].name + "</td><td>SEK</td><td>" + this.dish.ingredients[i].price + "</td>");
	}
}