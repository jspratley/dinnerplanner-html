var OverView = function(container, model) {
	this.overviewTable = container.find("#overviewTable");
	
	this.dish1 = model.getDish(1);
	this.dish2 = model.getDish(100);
	this.dish3 = model.getDish(200);
	
	this.imageRow = this.overviewTable.append("<tr>");
	this.imageRow.append("<td><img src='images/" + this.dish1.image + "'/></td>");
	this.imageRow.append("<td><img src='images/" + this.dish2.image + "'/></td>");
	this.imageRow.append("<td><img src='images/" + this.dish3.image + "'/></td>");
	this.imageRow.append("<td>");
	
	this.nameRow = this.overviewTable.append("<tr id='names'>");
	this.nameRow.append("<td>" + this.dish1.name + "</td>");
	this.nameRow.append("<td>" + this.dish2.name + "</td>");
	this.nameRow.append("<td>" + this.dish3.name + "</td>");
	this.nameRow.append("<td>Total:</td>");
	
	this.costRow = this.overviewTable.append("<tr>");
	this.costRow.append("<td>77.20 SEK</td>");
	this.costRow.append("<td>180.60 SEK</td>");
	this.costRow.append("<td>83.40 SEK</td>");
	this.costRow.append("<td>341.20 SEK</td>");
}