var OverView = function(container, model) {
	this.overviewTable = container.find("#overviewTable");
	this.numberOfGuests = container.find("#numGuests");
	
	//Below is the code that will actually be used when the dinners are selected
	this.selectedDishes = model.getFullMenu();
	
	this.imageRow = this.overviewTable.append("<tr>");
	for (var i = 0; i < this.selectedDishes.length; i++) {
		this.imageRow.append("<td><img src='images/" + this.selectedDishes[i].image + "'/></td>");
	}
	this.imageRow.append("<td>");
	
	this.nameRow = this.overviewTable.append("<tr>");
	for (var i = 0; i < this.selectedDishes.length; i++) {
		this.nameRow.append("<td>" + this.selectedDishes[i].name + "</td>");
	}
	this.nameRow.append("<td>Total:</td>");
	
	this.costRow = this.overviewTable.append("<tr>");
	for (var i = 0; i < this.selectedDishes.length; i++) {
		this.costRow.append("<td>" + model.getTotalMenuPrice() + "</td>");	
	}
	this.costRow.append("<td>SEK " + model.getTotalMenuPrice() + "</td>");
	
	this.numberOfGuests.html(model.getNumberOfGuests());
}