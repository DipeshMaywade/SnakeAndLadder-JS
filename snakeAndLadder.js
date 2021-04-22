let position = 0;

rollDice = ()=>{
    let diceNumber =  (Math.floor(Math.random()*10)%6)+1;
    return diceNumber
}

position = position + rollDice();

console.log(`player got: ${position}`);

