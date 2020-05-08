/*

    CONDITIONAL LOGIC
    Conditional logical or conditional statements are statements that determine the execution of specific operations, and
    provide specific output when certain "conditions" have been met.

    JavaScript provides the following conditional statements:
    1. If statements and its variations - else, and else if
    2. Switch statements

*/

/*

  COMPARISON OPERATORS
  Comparison operators allow two operands to be compared against one another.

  JavaScript provides the following comparison operators:
  1. Greater Than Operator
  2. Less Than Operator
  3. Greater Than or Equal To Operator
  4. Less Than or Equal To Operator
  5. Equality Operator
  6. Strict Equality To Operator
  7. Inequality To Operator
  8. Strict Inequality Operator
  9. Logical Operators:
      a) AND (&&)
      b) OR (||)

*/

/*

    Conditional Logic with IF Statements
    If Statements are the most basic conditional statements in JavaScript. An If Statement basically provides a condition and a
    series of statements/instructions to be executed if the condition is met (meaning if it is true). Otherwise, the statement
    is skipped and the code that comes right after the statement gets executed instead.

    An If Statement is written in the following format: the "if" keyword, parenthesis, followed by opening and closing curly
    braces - any code within the curly braces will be executed when the condition being checked returns true.

*/

// IF Statement
var loggedIn = true;
if(loggedIn) {                          // This basic If Statement checks to see if the variable loggedIn is true - if it is,
    console.log("You are logged in");   // the string <You are logged in> is outputted onto the browser console.
}

/*

    Comparison with the Equality Operator
    The double equal sign (==) is used as the equality operator in JavaScript and is used to compare if one value is equal
    to another.

*/

// Equality Operator
var name = "Hayne Lowe";
if(name == "") {                        // This basic If Statement uses the equality operator to check if the name variable is equal
    return "Please enter your name";    // to an empty string - if so, the statement outputs the string <Please enter your name> -
}                                       // otherwise, the statement is skipped.

// Testing the equality operator
function compareEquality(a, b) {
    if(a == b) {
        return "The two values are equal";
    }

    return "The two values are not equal";
}

// Call the compareEquality() function
compareEquality(5, 3);  // The If Statement is skipped because 5 is not equal to 3, and the final return statement is
                        // executed returning the string <The two values are not equal>.

/*

    Comparison with the Strict Equality Operator
    The triple equal sign (===) is used as the strict equality operator and is used to compare one value is of the same type
    as another and is equal to it.

    Strict Equality Operators do not perform type conversion on values being compared unlike the Equality Operator
    (Double Equal Sign).

*/

// Strict Equality Operator
function testIfStrictEqual(val) {
    if(val === 3) {                             // Checks if val is strictly equal to the integer 3. If it is, the function
        return "Yes, this is strictly equal";   // returns the string <Yes, this is strictly equal>. Otherwise, the statement is
    }                                           // skipped, and the final return statement is executed returning the
                                                // string <No, this is not strictly equal>.
    return "No, this is not strictly equal";
}

// Call the testIfStrictEqual() function
testIfStrictEqual(3); // The If Statement within the function will be executed because val === 3

// Testing the strict equality operator
function compareInequality(a, b) {
    if(a === b) {
        return "The two values are 'strictly equal'.";
    }

    return "The two values are 'not strictly equal'.";
}

// Call the compareInequality() function
compareInequality(15, "15"); // The If Statement will be skipped because the integer 15 and the string "15" are not strictly equal.

/*

    Comparison with the Inequality Operator
    The not equal operator is the opposite of the equality operator and contains an exclamation symbol followed by an equal sign.
    It is used to compare if one value is not equal to another.

*/

// Inequality Operator
function testIfInequal(val) {
    if (val != 5) {
        return "Not equal.";
    }

    return "Equal.";
}

// Call the testIfInequal() function
testIfInequal(55); // The If Statement is executed and the function returns the string <Not equal>.

/*

    Comparison with the Strict Inequality Operator
    The strict Inequality operator is the opposite of the strict equality operator and contains an exclamation symbol
    followed by two equal signs. This operator is used to check if one value is strictly not equal to another.

*/

// Strict Inequality Operator
function testIfStrictInequal(val) {
    if (val !== 20) {
        return "Not strictly equal.";
    }

    return "Strictly equal.";
}

// Call the testIfStrictInequal() function
testIfStrictInequal(20);    // The If Statement is skipped because val is strictly equal to the integer 20 - the last return
                            // statement is executed instead and returns the string <Strictly equal>.


// Comparison with the Logical Greater Than Operator
function testGreaterThan(val) {
	if (val > 100) {
		return "Over 100";
	}

	if (val > 10) {
		return "Over 10 under 100";
	}

	return "Equal to or under 10";
}

// Call testGreaterThan() function
testGreaterThan(50); // The second If Statement is executed and the string <Over 10 under 100> is returned.

// Comparison with the Logical Greater Than Or Equal To Operator
function testGreaterThanOrEqual(val) {
	if (val >= 100) {
		return "Greater than or equal to 100";
	}

	if (val >= 10) {
		return "Greater than or equal to 10";
	}

	return "Less than or under 10";
}

// call testGreaterThanOrEqual() function
testGreaterThanOrEqual(105); // The first If Statement is executed, returning the string <Greater than of equal to 100>.

// Comparisons with the Less Than Operator
function testLessThan(val) {
	if (val < 25) {
		return "Less than 25";
	}

	if (val < 50) {
		return "Less than 50";
	}

	return "Equal to or over 50";
}

// Call the testLessThan() function
testLessThan(15);   // The first If Statement is executed, returning the string <Less than 25>. Despite the second If Statement
                    // also being true, the first If Statement is executed because of its - the js engine executes code
                    // sequentially, in order of appearance.


// Comparisons with the Less Than Or Equal To Operator
function testLessThanOrEqual(val) {
    if (val <= 25) {
        return "Less than or equal to 25";
    }

    if (val <= 50) {
        return "Less than or equal to 50";
    }

    return "Over 50";
}

// Call the testLessThanOrEqual() function
testLessThanOrEqual(50); // The second If Statement is executed, returning the string <Less than or equal to 50>.

/*

    Comparisons with the Logical AND Operator
    The AND Operator, depicted using two ampersand signs (&&) is used to compare and check if two conditions are BOTH true.

*/

// Logical AND Operator
function testAnd(val) {
	if (val >= 10 && val <= 100) {
		return "Equal to and between 10 and 100";
	}

	return "Less than 10 or greater than 100";
}

// Call the testAnd() function
testAnd(65); // The If Statement is executed, as it is both greater than 10 and less than 100.

/*

    Comparisons with the Logical OR Operator
    The OR Operator, depicted using two || is used to compare if ONE of two conditions is true.

*/
// Logical OR Operator
function testOr(val) {
	if (val > 10 || val < 25) {
		return "Greater than 10 or less than 25";
	}

	return "10 and under or 25 and greater";
}

// Call the testOr() function
testOr(25); // The If Statement is executed because 25 is greater than 10.

/*

    Else Statements
    Else statements allow you to declare or provide alternative conditions. Else statements allow you to write more succint if
    statements instead of multiple if conditions.

*/

// Else Statement
function testElseStatement(val) {
    if (val > 5) {
        return "Greater than 5.";
    } else {
        return "5 and under.";
    }
}

// Call the testElseStatement() function
testElseStatement(10); // The If Statement is executed, as 10 is greater than 5.

/*

    Else If Statements
    Else If Statements chain If Statements together to provide alternative conditions.

*/
// Else If Statement
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10.";
	} else if (val < 10) {
		return "Less than 10.";
	} else {
		return "Equal to 10.";
	}
}

// Call the testElseIf() function
testElseIf(3); // The Else If Statement is executed, as 3 is less than 10.

/*

    Chaining If Else If Statements

	Create a chain of if / else if statements to fulfill the following
	conditions:

	rank <= 100				: return "Beta"
	rank > 100 and <= 200 	: return "Delta"
	rank > 200 and <= 500	: return "Alpha"
	rank > 500				: return "Omega"

*/
// Chaining If Else If Statements
function rankings(rank) {
    if(rank <= 100) {
        return "Beta";
    } else if(rank > 100 && rank <= 200) {
        return "Delta";
    } else if(rank > 200 && rank <= 500) {
        return "Alpha";
    } else {
        return "Omega";
    }
}

// Call the rankings() function
rankings(255);  // The second Else If Statement is executed, as 255 is greater than 200 and less than 500.
                // The statement returns the string <Alpha>.

/*

    Switch Statements
    Switch Statements are similar to If Statements, in that they are used to execute a set of code based on certain conditions.
    As a result, Switch Statements can easily be used instead of If Statements.

    A switch statement contains multiple "case" condition statements. Case conditions perform strict equality operations.

*/
// Switch Statement
function caseInSwitch(num) {
    var answer = "";

    switch (num) {
        case 1:
        	answer = "Apha";
        	break;

        case 2:
			answer = "Beta";
			break;

		case 3:
			answer = "Gamma";
			break;

		case 4:
			answer = "Delta";
			break;
	}

	return answer;
}

// Call the caseInSwitch() function
caseInSwitch(3);    // The third case statement will be executed, and the function will return the answer variable being
                    // equal to the string <Gamma>.


// Default Option in Switch Statements
function defaultSwitchStatement(num) {
	var answer = "";

	switch (num) {
		case "a":
			answer = "Apple";
			break;

		case "b":
			answer = "Banana";
			break;

		case "c":
			answer = "Carrot";
			break;

		default:
			answer = "Fruits";
			break;
	}

	return answer;
}

// Call the defaultSwitchStatement() function
defaultSwitchStatement(c);  // The third case statement will be executed, and the function will return answer equal to <Carrot>.
defaultSwitchStatement(i);  // No such case exists, so the default case will be executed - the function will return
                            // answer equal to the string <Fruits>.


// Multiple Identical Options in Switch Statements
function identicalOptions(num) {
	var answer = "";

	switch (num) {
		case 1:
		case 2:
		case 3:
			answer = "Low";
			break;

		case 4:
		case 5:
		case 6:
			answer = "Mid";
			break;

		case 7:
		case 8:
		case 9:
			answer = "High";
			break;
	}

	return answer;
}

// Call the identicalOptions() function
identicalOptions(9); // The last set of case statements (7-9) is executed, and the function returns answer with the string <High>.

/*

    Replacing If Else If Statemens with Switch Statements

    Replace the following If Else If Statement with a Switch Statement:

    function superstars(firstName) {
    	var answer = "";

    	if (val === "Bob") {
    		answer = "Marley";

    	} else if (val === "Will") {
    		answer = "Smith";

    	} else if (val === "Tom") {
    		answer = "Cruise";

    	} else if (val === "Jennifer") {
    		answer = "Lopez";

    	} else if (val === "Nicole") {
    		answer = "Kidman";

    	} else if (val === "Britney") {
    		answer = "Spears";
    	} else {
    		answer = "XYZ";
    	}

    	return answer;
    }

*/
// Replacing If Else If Statements with Switch Statements
function superstars(firstName) {
    var answer = "";

    switch(firstName) {
        case "Bob":
            return "Marley";
            break;

        case "Will":
            return "Smith";
            break;

        case "Tom":
            return "Cruise";
            break;

        case "Jennifer":
            return "Lopez";
            break;

        case "Nicole":
            return "Kidman";
            break;

        case "Britney":
            return "Spears";
            break;

        default:
            return "XYZ";
            break;
    }
}

// Call the superstars() function
superstars("Nicole"); // Outputs the string <Kidman>, as the fifth case gets executed.
