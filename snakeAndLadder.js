const LADDER = 1;
const SNAKE = 2;

let positionP1 = 0;
let positionP2 = 0;
let countP1 = 0;
let countP2 = 0;

outer: while (true) {
    while (positionP1 < 100) {
        let rollDice = (Math.floor(Math.random() * 10) % 6) + 1;
        let option = Math.floor(Math.random() * 10) % 3;

        if (option == LADDER) {
            if (positionP1 + rollDice == 100) {
                const end = positionP1 + rollDice;
                console.log("Player1 Got The Ladder with " + rollDice + " and move to: " + end);
                console.log("**HURRREYY Player1 WIN THE GAME**");
                break outer;
            } else if (positionP1 + rollDice > 100) {
                positionP1 = positionP1 - rollDice;
            } else if (positionP1 + rollDice < 100) {
                positionP1 = positionP1 + rollDice;
                console.log("Player1 Got The Ladder with " +rollDice +" and move to: " +positionP1);
            }
        } else if (option == SNAKE) {
            if (positionP1 >= 0) {
                positionP1 = positionP1 - rollDice;
                console.log("Player1 Got The Snake with " +rollDice +" And Move To: " +positionP1);
            } else {
                console.log("Player1 at ZERO TRY AGAIN");
                positionP1 = 0;
            }
            break;
        } else {
            console.log("Player1 is Not Playing Stay at Same Position: " + positionP1);
            break;
        }
        console.log("Player1 Current Position Is: " + positionP1);
        countP1++;
    }
    while (positionP2 < 100) {
        let rollDice = (Math.floor(Math.random() * 10) % 6) + 1;
        let option = Math.floor(Math.random() * 10) % 3;

        if (option == LADDER) {
            if (positionP2 + rollDice == 100) {
                const end = positionP2 + rollDice;
                console.log("Player2 Got The Ladder with " + rollDice + " and move to: " + end);
                console.log("**HURRREYY Player2 WIN THE GAME**");
                break outer;
            } else if (positionP2 + rollDice > 100) {
                positionP2 = positionP2 - rollDice;
            } else if (positionP2 + rollDice < 100) {
                positionP2 = positionP2 + rollDice;
                console.log("Player2 Got The Ladder with " +rollDice +" and move to: " +positionP2);
            }
        } else if (option == SNAKE) {
            if (positionP2 >= 0) {
                positionP2 = positionP2 - rollDice;
                console.log("Player2 Got The Snake with "+rollDice +" And Move To: " +positionP2);
            } else {
                console.log("Player2 at ZERO TRY AGAIN");
                positionP2 = 0;
            }
            break;
        } else {
            console.log("Player2 is Not Playing Stay at Same Position: " + positionP2);
            break;
        }
        console.log("Player2 Current Position Is: " + positionP2);
        countP2++;
    }
}
console.log("Number Of Times The Dice Was Rolled By Player1: " + countP1);
console.log("Number Of Times The Dice Was Rolled By Player1: " + countP2);
