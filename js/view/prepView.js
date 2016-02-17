var PrepView = function(container, model) {
	this.prep = container.find("#prepView");
	this.guests = container.find("#attending");
	
	this.guests.html(model.getNumberOfGuests());
	
	for (var i = 0; i < model.getFullMenu().length; i++) {
		this.prepRow = this.prep.append("<tr>");
		this.prepRow.append("<td><img src='images/" + model.getFullMenu()[i].image + "'/></td>");
		this.prep.append("<td><h3>" + model.getFullMenu()[i].name + "</h3><p>" + model.getFullMenu()[i].description + "</p></td>");
		this.prep.append("<td><h4>Preparation</h4><p>" + model.getFullMenu()[i].description + "</p></td>");
	}
	
}