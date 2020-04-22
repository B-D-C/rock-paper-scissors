function computerPlay() {
    let int = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1)+ 1)) + Math.ceil(1);
    if (int == 1) {
        return "Rock";}
    else if (int == 2) {
        return "Paper";}
    else if (int == 3) {
        return "Scissors";}
    }

function playerPlay() {
    let selection = prompt("Rock, Paper, or Scissors?");
    return selection.toUpperCase();
    }

function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    if (computerSelection == playerSelection) {
        return "It's a tie!";
        }
        else if (computerSelection == "ROCK") {
            if (playerSelection == "SCISSORS") {
            return "You lose! " + computerSelection + " beats " + playerSelection +"."
            }
        else if (playerSelection == "PAPER") {
            return "You win! " + playerSelection + " beats " + computerSelection +".";
        }   }
        else if (computerSelection == "PAPER") {
            if (playerSelection == "ROCK") {
            return "You lose! " + computerSelection + " beats " + playerSelection +".";
            }
            else if (playerSelection == "SCISSORS") {
            return "You win! " + playerSelection + " beats " + computerSelection +".";
        }   }
        else if (computerSelection == "SCISSORS") {
            if (playerSelection == "PAPER") {
            return "You lose! " + computerSelection + " beats " + playerSelection +".";
            }
            else if (playerSelection == "ROCK") {
            return "You win! " + playerSelection + " beats " + computerSelection +".";
        }   }
    
    }