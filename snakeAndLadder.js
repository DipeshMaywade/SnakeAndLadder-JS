const LADDER = 1;
const SNAKE = 2;
let position = 0;
let count = 0;

while (position < 100) {

    let rollDice = (Math.floor(Math.random() * 10) % 6) + 1;
    let option = Math.floor(Math.random() * 10) % 3;

    if (option==LADDER) {

        if (position + rollDice == 100) {
            const end = position+rollDice;
            console.log("Player Got The Ladder with " + rollDice + " and move to: " + end);
            console.log("**HURRREYY U WIN THE GAME**");
            break;
        }

        else if (position + rollDice > 100) {
            position = position - rollDice;
        }

        else if (position + rollDice < 100) {
            position = position + rollDice;
            console.log("player Got The Ladder with " + rollDice + " and move to: " + position);
        }
    }

    else if (option==SNAKE) {

        if (position >= 0) {
            position = position - rollDice;
            console.log("Player Got The Snake with " + rollDice + " And Move To: " + position);
        }

        else {
            console.log("player at ZERO TRY AGAIN");
            position = 0;
        }
    }

    else {
        console.log("Player is Not Playing Stay at Same Position: " + position);
    }
    console.log("Player Current Position Is: "+ position );
    count++
}
console.log("Number Of Times The Dice Was Roll: "+count);
