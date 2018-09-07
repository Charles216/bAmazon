# bAmazon

## Overview Of bAmazon Project:

 * To create a store front where users can use the Inquirer NPM to navigate the store, select the item that they would like to purchase plus the quantity in which they would like to purchase. If the store's inventory can accomodate the user's order then then the cashier will confirm the product that the user wishes to purchase along with the total cost of the purchase. Once that tranaction is completed the system asks the user if they would like to continue to shop? Answer yes, the system starts over and the process repeats. Answer no, and the connection and the shopping session end.

* If the user selects a quantity that exceeds the quantity in stock, then the system alerts the user that there is insufficiant quanitity of that product - inventory in the database stays the same, and the user is asked if they would like to continue shopping.

* In the segment below I will provide a step by step guide, attached with screen shots to show how the store operates.
 
 ## How It Works
 
 * When the program is run the user must answer 'YES' when asked if they would like to continue shopping. Once the user selects 'YES' a table with our inventory is presented to the user. 
 
![](images/image%20(1).png)
 
 * The data from the mySQL database shows the same information as the tables does. The only difference is, the table does not show the user the stock quantity. This database will update as users shop.
  
 ![](images/image%20(2).png)
 
 * In this example, Item id 3 - Ice Cream Maker was the product chosen
 
 ![](images/image%20(3).png)
 
 * In this example, the quantity of 2 Ice Cream Makers was selected. Look at the bAmazon store coming through in the clutch and having those Ice Cream Makers in stock. The item is $100/each, giving us a grand total of $200 due to the cashier. The user is then asked if they would like to keep shopping.
  
 ![](images/image%20(4).png)
 
 * In this next example, the user is trying to purchase 100 Playstation 4 Consoles! We have incredible deals at the bAmazon store - but unfortunately, bAmazon could not fulfill this order though. The cashier informs the user of the insufficiant stock and prompts the user if they would like to continue to shop. 
 
 ![](images/image%20(5).png)
 
 * Last but not least, the inventory is updated in mySQL. Notice the stock_quantity of Ice Cream Maker starts at 5 (see above) and is now at 3. Also notice, Playstation 4 stock_quantity has stayed the same. 
 
 ![](images/image%20(6).png)
 
 # Technologies/Packages used
 
 * Node.JS  
 * mySQL
 * Inquirer NPM  
 * Cli-Table2 NPM  
 * mySQL NPM
 
