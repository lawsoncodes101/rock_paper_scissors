const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", (e) => {
        let humanValue = e.target.textContent;
        playRound(humanValue, getComputerChoice);
    });
};

function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanValue, computerChoice) {
    let computerValue = computerChoice();

    if (humanValue) {
        let roundRules = {
            rock: "scissors",
            scissors: "paper",
            paper: "rock",
        };

        console.log(
            `Player chose: ${humanValue} \nComputer chose: ${computerValue}`
        );

        if (humanValue === computerValue) {
            console.log("Draw!");
        } else if (roundRules[humanValue] === computerValue) {
            console.log("Player Wins!");
            humanScore += 1;
        } else {
            console.log("Computer Wins!");
            computerScore += 1;
        }
    }
}