/*

Objects are a dimension higher than arrays. Despite the similarities it shares with arrays, objects do one fundamental thing
differently – objects store property-value pairs, unlike arrays that store index-value pairs.

Objects are created in a similar fashion to regular variables and arrays.

Properties of objects are enclosed within opening and closing curly braces. Properties are separated by commas and can store
any data type as its value.

*/

// Example Object
var exampleObject = {
  "name" : "Example Object",
  "type" : "Object",
  "year_created" : 2020,
  "favoriteColors" : ["Purple", "Green", "Blue"]
};

// The properties of the object are strings that precede the colon, and their values follow after the colon. Each property is
// separated by a comma, and the values of the properties are various data types – strings, numbers and even an array.

/*

  Accessing Object Properties Using "Dot Notation"

  There are two methods of accessing object properties, the first is dot notation. Object properties are easily accessed by
  calling the object using its name, followed by a dot and the name of the property.

*/

// How to access an object's properties using dot_notation
var foodObject = {
  "name" : "Chicken & Chips",
  "cost" : "K20.00",
  "quantity" : 1,
  "restaurant" : "The Smithy’s"
};

// Accessing the "name" and "restaurant" properties of the foodObject{}.
var food = foodObject.name; // food = “Chicken & Chips”.
var restaurant = foodObject.restaurant; // restaurant = “The Smithy’s”.

/*

  Accessing Object Properties with "Bracket Notation"

  The second method for accessing object properties is bracket notation. Bracket notation can be used to access any type of
  object property, but it is required when the properties have space in them, or in other words, are composed of more than
  one word.

*/

// How to access an object's properties using bracket_notation
var menu = {
  "the entree" : "Chicken soup with bread",
  "main course" : "Grilled beef with mashed potatoes",
  "desert" : "Tropical coconut cake"
};
// Accessing the entree and main course properties of the menu{}.
var entree = menu["entree"]; // Returns entree = "Chicken soup with bread"
var mainCourse = menu["main course"]; // Returns mainCourse = "Grilled beef with mashed potatoes"

/*

  Accessng Object Properties with Variables
  
  Bracket notation is also used to access object properties using variables. In this instance, property names are stored in
  variables and those variables are used in bracket notation when calling the properties.

*/

// How to access an object's properties with variables using bracket notation
var fruits = {
  "A" :  "Apple",
  "B" : "Banana",
  "C" : "Carrot"
};

// Access Propert "A" by storing it in a separate variable
var fruitA = fruits["A"]; // Property A is stored in the variable fruitA.
var getFruitA = fruits[fruitA]; // fruitA is used to access the value of property A.

/*

  Updating Object Properties
  
  Object properties are updated by simply calling the property and assigning it a nenew value. Properties can be updated
  this way using both dot and bracket notation.

*/

var animals = {
  "A" : "Apes",
  "B" : "Baboon",
  "C" : "Cheetach",
  "D" : "Dohnut"
};

// Property "D" is certainly not an animal, so update it's value to include an animal
animals["D"] = "Deer"; // Property "D" now has the updated value of "Deer"

/*

  Adding New Properties to a JavaScript Object
  
  New properties are added to objects by simply declaring the new property using dot or bracket notation, depending on the
  composition of the property name, and assigning it a value.

*/

var car = {
  "Make": "Tesla"
  "Model" : "S",
  "Engine" : "Electric"
}

// Add a speed and color property
car.Speed = "155mph"; // Speed property added to the object
car["Color"] = "Black"; // Color property added to the end of the object

/*

  Deleting Object Properties
  
  Properties are deleted using the “delete” keyword followed by the object name and property.

*/

var fruits = {
  "A" :  "Apple",
  "B" : "Banana",
  "C" : "Carrot"
};

// Delete property "C"
delete fruits.C;

/*

  Using Objects for Lookups: JavaScript Dictionaries
  
  Objects can be used as dictionary where specific terms can be looked up to retrieve their respective values.
  Provided below are examples of this concept.

*/

// Create a simple lookup
var lookup = {
  "alpha" : "Team Albakurky",
  "bravo" : "Team Bellony",
  "charlie" : "Team Colarado Steals",
  "delta" : "Team Death Squad",
  "echo" : "Team Eagle Squad"
};

// Look-up the team name for code-name "alpha"
lookup["alpha"]; // Returns the value/team name "Team Albakurky"

/* The above "look-up" implementation of objects can be integrated into a function to better acheive this. */
// Create a simple function that returns definitions/values or provided terms
function armyTeams(codename) {
  var result = "";
  
  var lookup = {
    "alpha" : "Team Albakurky",
    "bravo" : "Team Bellony",
    "charlie" : "Team Colarado Steals",
    "delta" : "Team Death Squad",
    "echo" : "Team Eagle Squad"
  };
  
  result = lookup[codename];
  return result;
}

// Call of armyTeam function to retrieve the team of a particular codename
armyTeams("charlie"); // Function returns the team "Team Colarado Steals"
