// Require NPM packages
let inquirer = require('inquirer');
let mysql = require('mysql');
var Table = require('cli-table2');

// Import table constructor...
var displayTable = require('./tableConstructor.js');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bamazon_db'
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }

});

// Display the products database using a table 
// Then prompt to pick item
function inventoryDisplay() {
    let display = new displayTable();
    connection.query('SELECT item_id, product_name, department_name, price, stock_quantity from products;', function (err, results) {
        display.displayInvTable(results);
        startApp();
    });
}

function startApp() {
    console.log('\n  ');
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "Please Select The ID Of The The Item You Would like To Purchase?",

        },
        {
            name: 'quantity',
            type: 'input',
            message: 'How Many Would You Like To Purchase?',
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }

    ]).then(function (answer) {
        connection.query('SELECT product_name, department_name, price, stock_quantity FROM products WHERE ?', { item_id: answer.id }, function (err, res) {

            console.log('\n  You would like to buy ' + answer.quantity + ' ' + res[0].product_name + ' ' + res[0].department_name + ' at $' + res[0].price + ' each'
            );
            if (res[0].stock_quantity >= answer.quantity) {
                //If enough inventory to complete order, process order by updating database inventory and notifying customer that order is complete. 
                var itemQuantity = res[0].stock_quantity - answer.quantity;
                connection.query("UPDATE products SET ? WHERE ?", [
                    {
                        stock_quantity: itemQuantity
                    }, {
                        item_id: answer.id
                    }], function (err, res) {
                    });
                let cost = res[0].price * answer.quantity;
                console.log('\n  Order fulfilled! Your cost is $' + cost.toFixed(2) + '\n');
                
                // Order completed
                userPrompt();

            } else {
                
                //If not enought inventory notify customer and prompt customer for desire to shop more
                console.log('\n  Sorry, Insufficient quantity to fulfill your order!\n');
                
                // Order not completed
                userPrompt();
            }
        })
    });
}

function userPrompt() {
    inquirer.prompt({
        name: "action",
        type: "list",

        message: " Would like to continue shopping?\n",
        choices: ["Yes", "No"]
    }).then(function (answer) {
        switch (answer.action) {
            case 'Yes':
                inventoryDisplay();
                break;

            case 'No':
                connection.end();
                break;
        }
    })
};

// Start app by Prompting the customer
userPrompt();














