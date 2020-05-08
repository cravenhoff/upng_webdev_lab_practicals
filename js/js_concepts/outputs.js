/*

  JavaScript can output or display data in the following ways:
  1. innerHTML - Displaying data in a HTML element
  2. document.write() - Displaying data onto the HTML display
  3. window.alert() or alert() in the Console - Outputting data onto an alert box
  4. console.log() - Outputting data onto the browser console
  
  Basically, there are three different ways you can output data and responses with JavaScript:
  - Alert Function
  - Console.Log Function
  - Accessing the DOM

*/

// Using the innerHTML display/output
document.body.innerHTML = "Howdy!"; // Replaces the value of the body tag/element with the string "Howdy"
document.getElementById("name").innerHTML = "John Doe"; /* This statement outputs the string <John Doe> into the HTML element
                                                           containing the id "name" */

// Using the document.write() output - this display option is suitable for testing purposes
document.write("Hello, world!"); // Outputs the string <Hello, world!>

// Using the document.alert() display
window.alert("Saying HELLO to the world!"); // Outputs the string <Saying HELLO to the world> in an alert box

// Using the console.log() display
console.log("Console output"); // Outputs the string <Console output> onto the browser console

var hello = "Hello, world!";
console.log(hello); // Outputs the string <Hello, world!> onto the console

/*

  JavaScript Loading Methods
  
  Loading Methods determine how the interpreter should load javascript in-line code or files (external JS).
  
  There are three (3) loading methods, and these include:
  
  1. Right Away Loading - Script is parsed through the "JavaScript Render Blocking" standard.
  JavaScript is downloaded right after the HTML document, and executed thereafter.
  
  2. Asynchronous Loading - Used via the "async" attribute in the script tag.
  JavaScript is downloaded simultaneously with the HTML document, and executed afterwards.
  
  3. Deferred Loading - Used via the "deferred" attribute in the script tag.
  JavaScript is downloaded and executed after the HTML document is downloaded and parsed.

*/
