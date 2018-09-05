let inquirer = require('inquirer');
let mysql = require('mysql');

/* var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bamazon_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.query('SELECT item_id, product_name, price FROM `products`', function (error, results, fields) {
    // error will be an Error if one occurred during the query
    console.log(error);
    // results will contain the results of the query
        console.log(results);
    
  });
connection.end(); */

inquirer.prompt([
    {
        name: "inventory",
        type: "list",
        message: "Please Select an Item To Purchase From Our Store?",
        choices: ["Item 1 - PlayStation 4 - Price: 300", "Item-2 Call Of Duty - Price: 50", "Item-3 Ice Cream Maker - Price: 100", "Item-4 Pasta Maker - Price: 40", "Item-5 Cat Litter - Price: 20", 'Item-6 Pet Leash - Price: 10', 'Item-7 Sectional Sofa - Price: 1500', 'Item-8 Recliner Chair - Price: 700', 'Item-9 Lenovo Laptop - Price: 650', 'Item-10 Blank CDs - Price: 10']
    },
    {
        name: 'quantity',
        type: 'input',
        message: 'How Many Would You Like To Purchase?'
    }
    
]).then(answers => {
    //check the item
    // is there enough in quantity to satisfy the order?
    //yes - give total cost quantity * price
    //yes - subtract purchased amoutn from db
    //no - alert - "Insufficiant Quantity"
    //no - select an item from our store (restart)
}); 