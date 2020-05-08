/*

    Arrays in JavaScript contain index-value pairs and can store multiple values of various data types, from strings and integers,
    to arrays themselves and even objects.

    Array values are referred to as "elements", and are separated by a comma (,). JavaScript, just like most other languages begins
    counting array positions or indexes starting at 0 and not 1. Hence, the first element of an array will have an index of 0,
    and not 1.

*/

// Example array
var myArr = ["James", "Bay", 28, "Canadian", 85.0]; // myArr contains elements of three data types - strings, integers and floats
                                                    // myArr values: 0 => James, 1 => Bay, 2 => 28, 3 => Canadian, 4 => 85.0

/*

    Nested and Multi-dimensional Arrays - These are arrays that contain arrays as elements, creating a nested or multi-dimensional storage
    unit. There is no limit to the number of dimensions to create in an array, however it is recommended to keep any nested arrays to
    a maximum of 3 nests or dimensions.

*/

// Example nested array
var records = [                                         // records is a one-dimensional array, containing four (4) elements, each of which
    ["Michael Jackson", "Thriller Album", 1982],        // are arrays themselves. Each nested array contains three (3) elements - artist,
    ["Celine Dion", "A New Day Has Come Album", 2001],  // album, and release date.
    ["Lady Antebellum", "Own the Night Album", 2011],   // The records array contains a list of music albums from Michael Jackson to
    ["Zayn Malik", "Mind of Mine (MOM) Album", 2016]    // Celine Dion and Lady Antebellum.
];

/*

    Access array data with indexes using Bracket Notation:
    Elements of any array can be accessed by passing in their index positions using bracket notation.

*/

// Sample array
var undergradYears = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

// Access and retrieve the first element of the undergradYears array
var firstElement = undergradYears[0]; // First element of any array begins at index/position 0
                                      // firstElement is equal to <1st Year>

// Access and retrieve the last element of the undergradYears array
var lastElement = undergradYears[3];  // lastElement is equal to <4th Year>

/*

    Modifying array data with Bracket Notation:
    Array data/elements are modified using the same method as accessing array elements. Bracket notation is used to specify which
    element to change using their index position. Once the element to change has been identified and selected, a simple assignment
    operation is provided, whereby the new updated value is assigned to the element position/index.

*/

// Modify all the elements of the undergradYears array
undergradYears[0] = "Year 1"; // First element of undergradYears now contains the value <Year 1>
undergradYears[1] = "Year 2"; // Second element of undergradYears now contains the value <Year 2>
undergradYears[2] = "Year 3"; // Third element of undergradYears now contains the value <Year 3>
undergradYears[3] = "Year 4"; // Fourth element of undergradYears now contains the value <Year 4>

/*

    Accessing multi-dimensional arrays using Bracket Notation:
    Multi-dimensional arrays and their values are accessed in a similar fashion as simple/one-dimensional arrays.
    The only difference lies in regards to the number of brackets to use depending on the level of nested arrays being initialized.
    If the array is a two-dimensional array, then two brackets will have to be used - the first one to access the top-level array,
    and the second one to access the elements within that top-level array.

*/

// Sample two-dimensional array - containing 5 array elements
var staff = [
    ["Max Payne", 32, "Lawyer"],
    ["Clive Parker", 28, "Accountant"],
    ["Linda Fox", 30, "Head of Finance"],
    ["Sam Neil", 34, "Chief Executive Officer"],
    ["Martha Lauv", 36, "HR Manager"]
];

// Access all the recorded details of Staff "Clive Parker"
var staffName = staff[1][0];      // Retrieves name of the second element, which is <Clive Parker>
var staffAge = staff[1][1];       // Retrieves the age of the second element, which is <28>
var staffPosition = staff[1][2];  // Retrieves the position of the second element, which is <Accountant>

// Modify "Clive Parker's" name and include his middle name
staff[1][0] = "Clive Smith Parker"; // Now the second element name has the updated value <Clive Smith Parker>

// Add the details of a newly recruited staff
staff[5] = ["Jennifer Lin", 28, "Receptionist"]; // Now the staff array contains a total of 6 elements, including this one.

/*

    Manipulating Arrays with Mutator Methods:

    Array elements can be dynamically modified using what are called "Mutator Methods". These methods simply modify or change, or
    mutate existing values of an array by either adding or removing elements from an existing array.
    These methods the following four (4):

    1. push() Function - Adds a new element to the "end" of an array.
    2. pop() Function - Removes the last element of an array.
    3. unshift() Function - Adds a new element to the "beginning" of an array.
    4. shift() Function - Removes the first element of an array.

*/

/* push() function */
// Manipulate arrays with the push() function
var primaryColors = ["Red", "Green", "Blue"];

// Add another primary color to the above array
primaryColors.push("Yellow"); // Now primaryColors has four elements - Red, Green, Blue, Yellow

/* pop() function */
// Manipulate arrays with the pop() function
secondaryColors = ["Orange", "Purple", "Yellow"];

// Remove the last element of the secondaryColors array which is a primary color
secondaryColors.pop(); // Now the secondaryColors array contains just two elements - Orange and Purple

/* shift() function */
// Manipulate arrays with the shift() function
var fruits = ["Chicken", "Grapes", "Apples", "Bananas"];

// Remove the first element - an animal - of the fruits array
fruits.shift(); // Now the fruits array contains three elements - Grapes, Apples and Bananas

/* unshift() function */
// Manipulate arrays with the unshift() function
var animals = ["Cow", "Pig", "Chicken"];

// Add a new animal to the animals array
animals.unshift("Dog");
