const choices = ["rock", "paper", "scissors"];
const playerScore = document.getElementById("user");
const computerScore = document.getElementById("computer");
const result = document.getElementById("results");

function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * choices.length)]; //the computer's choice will be a random index through 0-2, which will be the index of the choices array
    let result = ""; //math.floor is to round the number to the nearest integer since the math.random function will return a number between 0 and 1 (0.1, 0.2, 0.3, etc.)
    
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lose!"; //if the computer's choice is scissors, the player wins, otherwise the player loses
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You lose!"; //if the computer's choice is rock, the player wins, otherwise the player loses
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" : "You lose!"; //if the computer's choice is paper, the player wins, otherwise the player loses
                break;
        }
    }
    
    playerScore.innerHTML = playerChoice;
    computerScore.innerHTML = computerChoice;
    results.textContent = result;
}

