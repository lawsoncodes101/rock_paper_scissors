const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const index = Math.floor(Math.random() * 3); 
    return choices[index];
}
function getHumanChoice() {
    let choice = "";
    do {
        choice = prompt("Rock, Paper, Scissors?").toLowerCase();
    } while (!(choices.includes(choice)));
    
    return choice;
}