var PrepView = function(container, model) {
	this.prep = container.find("#prepView");
	
	this.dish = model.getDish(100);
	
	this.prep.append("<td><img src='images/" + this.dish.image + "'/></td>");
	this.prep.append("<td><h3>" + this.dish.name + "</h3><p>" + this.dish.description + "</p></td>");
	this.prep.append("<td><h4>Preparation</h4><p>" + this.dish.description + "</p></td>");
}