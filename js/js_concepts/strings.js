/*
  Strings contain a set of characters called "string literals" that are surrounded by single or double quotes.
  
  Strings in JavaScript can contain any number of characters, and can be of any length.
*/

// String examples
var myString = "Hello, world"; // myString is equal to the string <Hello, world>
var newString = "07/07/2007"; // newString is equal to the date string <07/07/2007>
var anotherString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.";
var ourString = "https://www.coding.org?name=james&email=james@code.org";

/*
  Escaping string literals
  
  String literals can be escaped simply by placing a backslash before the literal to escape. This is particularly useful when single or
  double quotes are used in a string, or when "escape" sequences like new line breaks or tabs or carriage returns are to be used.
*/

// Escaping double quotes
var myStr = "Hello, \"Coders\"!"; // myStr is equal to the string <Hello, "Coders"!>

// Single quotes can be used instead to escape double quotes in strings, and vice versa
var newStr = 'Hello, "Coders"!'; // newStr is equal to the string <Hello, "Coders!">

// Escaping backslash literals
var dir = "C:\\wamp64\\www"; // dir is equal to the string <C:\wamp64\www>

/* Escape sequences */
// New line escape literal
var newLine = "Introduction: \nHello, world!";

// Tab escape literal
var tab = "Menu \n\tHome \n\tAbout Us \n\tContact";

// Carriage return escape literal
var carriage = "Sample carriage \r return";

/*
  String concatenation
  
  Concatenation in JavaScript enables variable values or string literals to be "concatenated" or stringed together into one
  single string.
*/

// Concatenate the following variable and string - Appending variables to strings
var hello = "Hello";
var sayHello = hello + ", world!"; // sayHello is equal to the string <Hello, world!>

// Concatenate the following two variables - Constructing strings with variables
var greetings = "Greetings";
var audience = " Coders!";
var welcome = greetings + audience; // welcome is equal to the string <Greetings Coders!>

// Using the plus equal operator (+=) to concatenate strings
var welcomeStr = "Welcome to our ";
welcomeStr += "coding universe!"; // welcomeStr is equal to the string <Welcome to our coding universe!>

// Finding the length of a string
var testStr = "Jelly Beans";
var testStrLength = testStr.length; // testStrLength is equal to the (integer) length <11>

/*  
  JavaScript indexes string characters starting at a position of 0 and not 1. Hence the first character of a string has an
  index of 0, and not 1.
*/

// Finding the first character of a string using bracket notation
var firstName = "Samantha";
var firstLetterOfFirstName = firstName[0]; // firstLetterOfFirstName is equal to the character <S>

/*
  String immutability - Strings are an immutable data type in JavaScript, meaning that the characters of a string cannot be
  updated or changed dynamically once it is initialized. In order for this to be achieved, the variable containing the string will
  have to be assigned the new, updated value.
*/

// Sample of string immutability
var myStr = "Jello World";
myStr[0] = "H"; // Cannot assign the character H to the original string.

// Using bracket notation to find the nth character of a string
var fullName = "James Bay";
var fourthLetterOfFullName = fullName[6]; // fourthLetterOfFullName is equal to the character <B>

// Using bracket notation to find the last character of a string
var name = "Maxwell";
var lastCharacterOfName =  name[name.length - 1]; // lastCharacterOfName is equal to the character <l>

/* --- ES6 Updates --- */
// Improved method for concatenating variables with strings - Use the concept of "Template Strings" or "Template Literals".
// Use back-ticks to enclose the string instead of quotes (single or double) and 
// Surround the variable to include with a dollar sign ($) and curly braces.
let name = "Jacob";
let age = 30;

// Concatenation
console.log("My name is " + name + " and I am " + age + "years old.");

// Template String
console.log(`My name is ${name} and I am ${age} years old.`);

// The above template string can also be assigned to a variable and outputted to the console.
let greetings = `My name is ${name} and I am ${age} years old.`
console.log(greetings);
