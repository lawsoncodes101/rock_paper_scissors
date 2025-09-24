const choices = ["rock", "paper", "scissors"]; // must be set to lowercase

function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    // console.log(choices[index])
    return choices[index];
}

function getHumanChoice() {
    let choice = "";
    let count = 0;
    do {
        choice = prompt("Rock, Paper, Scissors?");
        count += 1;
        if (choice === null) {
            return null; // user canceled
        }
        choice = choice.toLowerCase();
        if (count === 2 && !choices.includes(choice)) {
            console.log("Invalid inputs!");
            return false;
        }
        if (!count) return false;
    } while (!choices.includes(choice));
    // console.log(choice)
    return choice;
}

function playGame() {
    let gameCount = 0;
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let humanValue = humanChoice();
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

    do {
        if (gameCount > 0) {
            playRound(getHumanChoice, getComputerChoice);
            gameCount += 1;
        } else {
            playRound(getHumanChoice, getComputerChoice);
            gameCount += 1;
        }
    } while (gameCount != 5);

    console.log(
        `You scored: ${humanScore} \nComputer Scored: ${computerScore}`
    );

    if (humanScore > computerScore) {
        console.log("Player wins the round :)");
    } else if (computerScore > humanScore) {
        console.log("Commputer wins the round :(");
    } else {
        console.log("No winner!");
    }
}

playGame();