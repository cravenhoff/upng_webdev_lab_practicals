/*

    Jack Black: Counting Cards

    In the popular american casion game of Jack Black:
    > Low cards increase by value of 1 and include 2, 3, 4, 5, and 6.
	> Mid cards stay the same and don't change, and include cards 7, 8, and 9.
	> High cards decrease by value of 1 and include 10, Jack, Queen, King, and Ace.

    > Create a "count" global variable that will keep count of the cards.
	> Deal a total of 6 cards to the Black Jack Count Function.
	> If the count is positive, greater than 0, the Function will tell the player to bet.
	> If on the other hand the count is negative, less than or equal to 0, the Function will tell the player to hold bet.

*/

// Jack Black: Counting Cards Function
var count = 0; // Variable to keep count of cards

function jackBlack(card) {
    // Switch statement to check which cards are dealt, and what to do if the card is a low, mid or high value card
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;

        case 7:
        case 8:
        case 9:
            count += 0;
            break;

        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count -= 1;
            break;
    }

    var holdBet = "Hold";
    if(count > 0) {
        holdBet = "Bet";
        return count + " " + holdBet;
    } else {
        return count + " " + holdBet;
    }
}

// Call the jackBlack() function to start playing and counting
document.write(jackBlack(5) + ", ");
document.write(jackBlack(2) + ", ");
document.write(jackBlack(9) + ", ");
document.write(jackBlack(3) + ", ");
document.write(jackBlack(6));   // Final output will be: 4 Bet
