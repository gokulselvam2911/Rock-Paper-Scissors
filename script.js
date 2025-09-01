function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);

    if (randomNum === 0){
        return "ROCK";
    } else if (randomNum === 1){
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function getHumanChoice(){
    let userInput = prompt("Enter your choice: ROCK, PAPER or SCISSORS");
    return userInput;   
}
console.log(getHumanChoice());