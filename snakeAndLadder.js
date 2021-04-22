let position = 0;
const LADDER = 1;
const SNAKE = 2;

while (position < 100) {

    let rollDice = (Math.floor(Math.random() * 10) % 6) + 1;
    let option = Math.floor(Math.random() * 10) % 3;

    switch (option) {
        case LADDER:
            position = position + rollDice;
            console.log(`player Got The Ladder with ${rollDice} and move to: ${position}`);
            break;
        case SNAKE:
            if (position >= 0) {
                position = position - rollDice
                console.log(`player Got The Snake with ${rollDice} and move to: ${position}`);
                break;
            } else {
                console.log(`player At Zero TRY AGAIN`)
                position=0;
            }
            break;
        default:
            console.log("Player Is Not Playing Stay at Same Position: " + position);
    }
}
