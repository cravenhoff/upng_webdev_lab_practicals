/*
  Variables are the most basic form of storage unit in JavaScript (and any other programming language).
  
  Variables allow certain assigned values to be re-used and referenced multiple times throughout a script. Variables can only hold one
  value at a time.
  
  Variables contain and store any type of data type, from strings to integers to the null data type.
  
  Variables can be created in two ways - variable "declaration" and variable "initialization". All variables in JavaScript are created using
  the "var" keyword, followed by the name of the variable, the assignment operator, and the value of the variable. JavaScript uses
  "Camel Casing" as a standard for naming variables.
*/

// Declaring a variable
var myVariable; // No value is assigned to "myVariable" - By default, it will contain the value of "null".

// Initializing a variable
var anotherVariable = "Hello, world"; // Variables that are initialized have "initial" values assigned to them, as this variable.

/* 

UPDATE: August 2020

Since the release of ES6, variables are handled through the following keywords/constructs:
1. Let
2. Const
3. Var

*Note: Var is less used and is not recommended at this stage due to global-scoping that causes interference with existing variables.
The preferred data storage constructs are "let" for dynamically changing data and "const" for static data.

*/
