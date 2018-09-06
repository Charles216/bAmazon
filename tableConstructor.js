// Displays Inventory Table for Manager, Results from a SELECT query are passed in as parameter and used 
Table = require('cli-table2');
var displayTable = function() {

    this.table = new Table({
        head: ['Item ID', 'Product Name', 'Department', 'Price'],
    });

    this.displayInvTable = function(results) {
    	this.results = results;
	    for (var i=0; i <this.results.length; i++) {
	        this.table.push(
	            [this.results[i].item_id, this.results[i].product_name, this.results[i].department_name, '$'+ this.results[i].price]);
	    }
    	console.log('\n' + this.table.toString());
	};
}
module.exports = displayTable;