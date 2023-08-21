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


