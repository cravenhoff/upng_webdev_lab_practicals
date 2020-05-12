/* This file contains the source code for a shopping list program. */

// Initialize variables
var shoppingList = [];
var totalCost = 0;

// Function for adding new items to the shopping list
function addItems(Item, Quantity, Price, Total) {
  // Automatically add new items to the shopping list
  shoppingList.push({Item, Quantity, Price, Total});
  return shoppingList;
}

// Add some items to the shopping list
addItems("Eggs", 1, 13.00, 13.00);
addItems("Milk", 1, 7.50, 7.50);
addItems("Apples", 6, 1.00, 6.00);
