let playerSelection;
// let playerSelection = prompt("Please choose Rock Paper Scissors");
//playerSelection.toLowerCase();
let computerSelection;
//console.log(playRound(playerSelection, computerSelection));
let playerScore = 0;
let computerScore = 0;

const playerSb = document.querySelector('.player-score');
const compSb = document.querySelector('.comp-score');


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
    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        return `"Tie game! Your ${playerSelection} matches computer's ${computerSelection}"`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        if (playerScore === 5){
            return "Player reaches 5 wins! Game over.";
            } else {
            return "You win! Paper beats Rock!";
            }
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        if (computerScore === 5){
            return "Computer reaches 5 wins! Game over.";
            } else {
            return "You lose! Scissors beat Paper!";
            }
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        if (computerScore === 5){
            return "Computer reaches 5 wins! Game over.";
            } else {
            return "You lose! Paper beats Rock!";
            }
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        if (playerScore === 5){
            return "Player reaches 5 wins! Game over.";
            } else {
            return "You win! Rock beats Scissors!";
            }
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        if (playerScore === 5){
            return "Player reaches 5 wins! Game over.";
            } else {
            return "You win! Scissors beats Paper!";
            }
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        if (computerScore === 5){
            return "Computer reaches 5 wins! Game over.";
            } else {
            return "You lose! Rock beats Scissors!";
            }
    } else {
        console.log("test");
    };
};

/* 
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
*/

const rButton = document.querySelector('#rock');
const pButton = document.querySelector('#paper');
const sButton = document.querySelector('#scissors');
const commentary = document.querySelector('.commentary');
const reset = document.querySelector('.reset');
const allGameButtons = document.querySelectorAll('.game-button');

function hideButtons(){
    allGameButtons.forEach(button => {
        button.style.display = "none";
    });
}

function showButtons(){
    allGameButtons.forEach(button => {
        button.style.display = "inline-block";
    });
}

rButton.addEventListener('click', function(){
    let results = (playRound("rock", computerSelection));
    //console.log(results);
    // console.log(`Player: ${playerScore} + Computer: ${computerScore}`);
    playerSb.textContent = playerScore;
    compSb.textContent = computerScore;
    commentary.textContent = results;            
});

pButton.addEventListener('click', function(){
    let results = (playRound("paper", computerSelection));
    //console.log(playRound("paper", computerSelection));
    //console.log(`Player: ${playerScore} + Computer: ${computerScore}`);
    playerSb.textContent = playerScore;
    compSb.textContent = computerScore;
    commentary.textContent = results;    
});

sButton.addEventListener('click', function(){
    let results = (playRound("scissors", computerSelection));
    //console.log(playRound("scissors", computerSelection));
    //console.log(`Player: ${playerScore} + Computer: ${computerScore}`);
    playerSb.textContent = playerScore;
    compSb.textContent = computerScore;
    commentary.textContent = results;    
});

reset.addEventListener('click', function(){
    playerScore = 0;
    computerScore = 0;
    playerSb.textContent = playerScore;
    compSb.textContent = computerScore;
    commentary.textContent = "Lets play ball!"
})
