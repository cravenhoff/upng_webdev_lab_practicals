/*
  Compound assignments are assignment operators that compound the five (5) arithmetic operators in JavaScript.
  
  Compound assignments simply provide a shorthand form of adding, subtracting, multiplying, dividing or finding the remainder of
  two variables or a variable and an integer/float value.
  
  Following are the five (5) compound assignment operators JavaScript provides:
  1. Compound Addition Assignment Operator (+=)
  2. Compound Subraction Assignment Operator (-=)
  3. Compound Multiplication Assignment Operator (*=)
  4. Compound Division Assignment Operator (/=)
  5. Compound Modulus Assignment Operator (%=)
*/

// Long assignment form
var myVar = 150;
myVar = myVar + 42; // myVar is now equal to 192

// Compound "addition" assignment form
myVar += 42; // myVar is also now equal to 234

// Compound "subtraction" assignment form
myVar -= 18; // myVar is now equal to 216

// Compound "multiplication" assignment form
var anotherVar = 30;
anotherVar *= 2; // anotherVar is now equal to 60

// Compound "division" assignment form
anotherVar /= 10; // anotherVar is now equal to 6

// Compound "modulus" assignment form
anotherVar %= 5; // anotherVar is now equal to 1
