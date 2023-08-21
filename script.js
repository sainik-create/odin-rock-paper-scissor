// Helper function for getting computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'scissor' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'win';
    } else if (playerChoice === computerChoice) {
        return 'draw';
    } else {
        return 'lose';
    }
}

// game function that will call playRound function function to play 5 round of game

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt(`Round ${round}: Enter your choice (rock, paper, or scissor):`);
        const computerSelection = getComputerChoice(); // Calling  getComputerChoice function here

        const result = playRound(playerSelection, computerSelection);

        if (result === 'win') {
            playerScore++;
            console.log(`Round ${round}: You win! ${playerSelection} beats ${computerSelection}`);
        } else if (result === 'lose') {
            computerScore++;
            console.log(`Round ${round}: You lose! ${computerSelection} beats ${playerSelection}`);
        } else {
            console.log(`Round ${round}: It's a draw!`);
        }
    }
}


console.log("Final Scores:");
console.log(`You: ${playerScore} wins`);
console.log(`Computer: ${computerScore} wins`);


if (playerScore > computerScore) {
    console.log("Congratulations, you are the winner!");
} else if (playerScore < computerScore) {
    console.log("Computer is the winner. Better luck next time!");
} else {
    console.log("It's a tie!");
}


//Calling game function:
game();


