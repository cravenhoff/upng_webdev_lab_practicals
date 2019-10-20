/*

    Functions: Creating Reusable Code with Functions

    Functions are reusable blocks of code. Functions act as functional components of JavaScript, allowing user input, through
    the submission of parameters/arguments, internal processing, and program output. Functions can be thought of as simple programs.

    A function is created with the "function" keyword, followed by the name of the function (written using the Camel Casing format),
    parenthesis, and opening and closing curly braces.

*/

// Creating a simple function - no parameters
function helloWorld() {
    console.log("Hello, world");  // This simple function simply outputs the string/message <Hello, world>
}

// In order for a function to be executed, it must be called
helloWorld(); // The JavaScript engine runs/executes the function

// Passing values to functions with arguments or parameters
function additionOperation(x, y) {
    var sum = x + y;
    console.log(sum);               // This simple function calculates the sum of variables x and y and outputs it onto the console
}

// Call additionOperation() function
additionOperation(15, 7); // The function returns the sum of <22>

// Another example of a simple function
function yearOfBirth(age, currentYear) {  // This function accepts two parameters - age and current year, both of which are integer values.
    var yob = currentYear - age;          // The year of birth is found simply by subtracting the age from the current year.
    document.write(yob);                  // The resulting value is then outputted onto the HTML page.
}

// Call yearOfBirth() function
yearOfBirth(18, 2019); // Returns year of birth as <2001>

/*

    Global and Local Scope in Functions

    Global Scope - Refers to the global scope and availability of variables. Variables declared outside the scope of a function are
    accessible by any part of a program, and are available throughout a script.

    Local Scope - Local scope on the other hand, refers to the in-function, or localized scope of variables. Variables that are created
    within the scope of a function are accessible only by the function it is created in, and not by any other part of the program.

    Local variables take precedence over global variables.

*/

// Global variable
var globalVar = "Global variable here!"; // globalVar is accessible throughout the script

// Function using global variable
function globalScope() {
    console.log(globalVar); // This function outputs the value of globalVar onto the console
}

// Call globalScope() function
globalScope(); // Outputs the string <Global variable here!>

// Local variable
function localScope() {
    var localVar = "Local variable here!";
    console.log(localVar);                  // This function simply outputs the value of localVar onto the console
}

// Call localScope() function
localScope(); // Outputs the string <Local variable here!>

// Access localVar
console.log(localVar); // Error: Cannot access localVar as it is only available locally, within the function it is declared in

// Global Scope vs Local Scope in Functions
var sportsWear = "Running Shoes"; // Global variable

function globalScopeOutfit() {
    console.log(sportsWear);
}

// Call globalScopeOutfit() function
globalScopeOutfit(); // Outputs the global variable: string <Running shoes>

function localScopeOutfit() {
    var sportsWear = "Nike Cap";
    console.log(sportsWear);
}

// Call localScopeOutfit() function
localScopeOutfit(); // Outputs the local variable: string <Nike Cap>

// Output the value of sportsWear
console.log(sportsWear); // Outputs the original string <Running Shoes>

/*

    Return a Value From a Function with "Return"
    The "return" keyword returns the value/result of an operation or assignment from a function.

*/

// Return the product of the following multiplication
function multiplication(num) {
    return num * 5;  // Returns the product of num (whatever number the user inputs) and 5
}

// Call multiplication() function
document.write(multiplication(4)); // Outputs the product <20> onto the HTML page

// Understanding "Undefined" Value Returned From a Function
var sum = 0;

function addFive() {
	sum += 5;            // If a function does not return a value,  the return value is just "undefined".
}

// Output the sum of the addFive() function onto the browser console
console.log(addFive());

// Assignment with a Returned Value (Assigning the return value of a function to a variable)
var initial = 0;

function change(num) {
	return (num * 3) / 5;
}

initial = change(10); // The return value of the change() function is assigned to the initial variable.
console.log(initial); // initial = 6.

/*

    Boolean Values
    Booleans are another data type in JavaScript and are used to represent simply on and off switches. Booleans are used in
    functions and are especially useful in conditional logic.

    There are two boolean values in JavaScript and in every other language:
    1. True - which also has a binary representation of 1.
    2. False - which also has a binary representation of 0.

*/

// Boolean Values
var booleanOn = true;
var booleanOff = false;
