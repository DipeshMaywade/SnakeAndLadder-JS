let position = 0;
const LADDER = 1;
const SNAKE = 2;

rollDice = () => {
    let diceNumber = (Math.floor(Math.random() * 10) % 6) + 1;
    return diceNumber;
};

option = () => {
    let option = Math.floor(Math.random() * 10) % 3;
    return option;
};

switch (option()) {
    case LADDER:
        position = position + rollDice();
        console.log(`player Got The Ladder and move to: ${position}`);
        break;
    case SNAKE:
        if (position == 0) {
            console.log("player at ZERO TRY AGAIN");
            break;
        } else {
            position = position - diceNo();
            console.log("Player Got The Snake And Move To: " + position);
        }
        break;
    default:
        console.log("Player is Not Playing Stay at Same Position: " + position);
}
