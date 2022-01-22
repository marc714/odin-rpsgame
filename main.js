let playerSelection = "rock";
// let playerSelection = prompt("Please choose Rock Paper Scissors");
playerSelection.toLowerCase();
let computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

let playerScore;
let computerScore;

function computerPlay() {
    let randomNumber = Math.floor( Math.random()*3 ); 
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    };
}

/* reminder you can't run playRound(). Those are arguments. They could be playRound(x, y); To invoke the fucntion you have to put in actual arguments of playRound(playerSelection, computerSelection); */

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie game";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beat Paper!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beats Paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors!";
    } else {
        console.log("test");
    };
};

function game(playerSelection, computerSelection) {
    playerScore = 0;
    computerScore = 0;
    for (r=1; r<6; r++) {
        computerPlay();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    };
    console.log(`Player Score:${playerScore} vs Computer Score:${computerScore}`)    
};