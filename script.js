const buttons = document.querySelectorAll("button");
const playerChoiceDisplay = document.querySelector(".playerChoice");
const computerChoiceDisplay = document.querySelector(".computerChoice")
const playerScoreDisplay = document.querySelector(".playerScore");
const computerScoreDisplay = document.querySelector(".computerScore");
const winnerDisplay = document.querySelector(".winner");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

function playRound(playerValue, computerChoice) {
    let computerValue = computerChoice();

    if (playerValue) {
        let roundRules = {
            rock: "scissors",
            scissors: "paper",
            paper: "rock",
        };
        
        playerChoiceDisplay.textContent = playerValue;
        computerChoiceDisplay.textContent = computerValue;

        if (playerValue === computerValue) {
            winnerDisplay.textContent = "It's a draw!";
        } else if (roundRules[playerValue] === computerValue) {
            playerScore += 1;
            winnerDisplay.textContent = "Player Wins!";
        } else {
            computerScore += 1;
            winnerDisplay.textContent = "Computer Wins!";
        }
        
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let playerValue = e.target.id;
        playRound(playerValue, getComputerChoice);
    });
})