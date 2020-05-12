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

/*

  Testing Objects for Properties
  
  Objects can be checked to determine if they contain properties. This is done using the in-built object function,
  hasOwnProperty(). To achieve this, simply call the object, and append the hasOwnProperty() function right after
  the object name using dot notation - the property being checked is added in the function parenthesis.
  
  If the property does not exist in the object, the function will return false.

*/

//  Check the following sample object if it contains properties "B" and "C"
var cities = {
  "A" : "Alexandria, Egypt",
  "B" : "Birmingham, UK",
}

cities.hasOwnProperty("B"); // Function returns "true" as it's available in the cities object
cities.hasOwnProperty("C"); // Function returns "false" this time as cities object contains not such property

/*

  Manipulating Complex Objects
  
  In addition to objects storing basic data like strings, numbers and floats, objects are flexible enough to also
  accommodate the storage of more advanced data types like arrays, and even objects themselves.
  This is called "Complex Objects" - and it relates to objects having the ability to store other objects and arrays,
  and also, arrays containing other arrays and objects.

*/

// Example 1 of a complex object
var iphonePlaylist = {
  "Maggie Rogers" : ["Overnight", "The Knife", "Light On"],
  "Lauv" : ["Adrenaline", "Paris in Rain", "Friends"]
}; // This object has array property values

iphonePlaylist["Maggie Rogers"][0]; // Object returns the song "Overnight"

// Example 2 of a complex object
var playlistTrackDetails = [
  {
    "Artist" : "Maggie Rogers",
    "Title" : "Overnight",
    "Release_Year" : 2018,
    "Format" : ["iTunes", "Youtube"]
  },
  {
    "Artist" : "Maggie Rogers",
    "Title" : "The Knife",
    "Release_Year" : 2018,
    "Format" : ["iTunes", "Youtube", "Spotify"]
  }
]; // This is a complex array that contains objects and further arrays within those objects

playlistTrackDetails[0]["Artist"]; // Returns the artist "Maggie Rogers"

/*

  Accessing Nested Objects
  
  Nested objects contain other objects as property values. Properties and sub-properties of nested objects are accessed
  using chained dot or bracket notations.

*/

// Example nested object
var house = {
  inside: {
    rooms: 3,
    bathrooms: 1,
    masterBedroom: true
  },
  outside : {
    rooms: 2,
    typesOfRooms: ["laundry room", "shed"]
  }
}; // This sample object contains nested object is its properties

// Access the types of rooms available outside the house
house.outside.typesOfRooms; // Returns the array values: laundry room and shed

/*

  Accessing Nested Arrays
  
  Nested arrays, similar to nested objects, are arrays that can contain array values. Nested arrays can also be accessed
  using both dot and bracket notations.

*/

// Example nested array
var backyardPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "sunflower"]
  },
  {
    type: "trees",
    list: ["pine", "oak", "gum"]
  };
]

// Access the pine tree
var pineTree = backyardPlants[1].list[0];
