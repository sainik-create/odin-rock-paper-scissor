let playerScore = 0;
let computerScore = 0;
let gameOver = false;

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
        playerScore++;
        return `Round: You win! ${playerChoice} beats ${computerChoice}`;
    } else if (playerChoice === computerChoice) {
        return "Round: It's a draw!";
    } else {
        computerScore++;
        return `Round: You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

function updateScoreAndCheckWinner() {
    document.getElementById('score').innerText = `Score - You: ${playerScore} Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        gameOver = true;
        if (playerScore > computerScore) {
            document.getElementById('result').innerText = "Congratulations, you are the winner!";
        } else if (playerScore < computerScore) {
            document.getElementById('result').innerText = "Computer is the winner. Better luck next time!";
        } else {
            document.getElementById('result').innerText = "It's a tie!";
        }
    }
}

document.getElementById('rockBtn').addEventListener('click', () => {
    if (!gameOver) {
        const result = playRound('rock', getComputerChoice());
        document.getElementById('result').innerText = result;
        updateScoreAndCheckWinner();
    }
});

document.getElementById('paperBtn').addEventListener('click', () => {
    if (!gameOver) {
        const result = playRound('paper', getComputerChoice());
        document.getElementById('result').innerText = result;
        updateScoreAndCheckWinner();
    }
});

document.getElementById('scissorBtn').addEventListener('click', () => {
    if (!gameOver) {
        const result = playRound('scissor', getComputerChoice());
        document.getElementById('result').innerText = result;
        updateScoreAndCheckWinner();
    }
});
