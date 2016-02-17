//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.menuSoFar = container.find("#menuSoFar");
	
	if (model.getFullMenu().length > 0) {
		for (var i = 0; i < model.getFullMenu().length; i++) {
			this.dishRow = this.menuSoFar.before("<tr>");
			this.dishRow.append("<td>" + model.getFullMenu()[i].name + "</td>");
			this.dishRow.append("<td>" + model.getTotalMenuPrice() + "</td>");
		}
	} else {
		this.pendingRow = this.menuSoFar.prepend("<tr>");
		this.pendingRow.append("<td>Pending</td>");
		this.pendingRow.append("<td>0</td");
	}
	this.lastRow = this.menuSoFar.append("<tr id='last-row'>");
	this.lastRow.append("<td>Total</td>");
	this.lastRow.append("<td>SEK " + model.getTotalMenuPrice() + "</td>");
	
	this.numberOfGuests.val(model.getNumberOfGuests());
	this.numberOfGuests.html(model.getNumberOfGuests());
	
}
 
