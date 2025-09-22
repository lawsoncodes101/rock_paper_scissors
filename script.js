const choices = ["rock", "paper", "scissors"]; // must be set to lowercase

function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getHumanChoice() {
    let choice = ""; 
    let count = 0;
    do {
        choice = prompt("Rock, Paper, Scissors?")
        count +=1;
        if (choice === null) {
            return null; // user canceled
        }
        choice = choice.toLowerCase();
        if (count === 2 && !choices.includes(choice)) {
            console.log("Invalid inputs!");
            return false;
        } 
        if (!count)
            return false;
    } while (!choices.includes(choice));
    console.log(choice)
    return choice;
}

getHumanChoice();