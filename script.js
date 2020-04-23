let computerScore = 0;
let playerScore = 0;

function computerPlay() {
let int = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1)+ 1)) + Math.ceil(1);
if (int == 1) {
return "ROCK";}
else if (int == 2) {
return "PAPER";}
else if (int == 3) {
return "SCISSORS";} 
}

function playerPlay() {
let selection = prompt("Rock, Paper, or Scissors?");
return selection.toUpperCase();
}

function playRound() {
	let computerSelection = computerPlay();
	let playerSelection = playerPlay();
	if (computerSelection == playerSelection) {
		return "It's a tie!.\n Player " + playerScore + ", " + "Computer " + computerScore + ".";
		}
		else if (computerSelection == "ROCK") {
			if (playerSelection == "SCISSORS") {
			computerScore ++;
			return "You lose! " + computerSelection + " beats " + playerSelection +".\n Player " + playerScore + ", " + "Computer " + computerScore + ".";
			}
			else if (playerSelection == "PAPER") {
			playerScore ++;
			return "You lose! " + computerSelection + " beats " + playerSelection +".\n Player " + playerScore + ", " + "Computer " + computerScore + ".";
			}}
		else if (computerSelection == "PAPER") {
			if (playerSelection == "ROCK") {
			computerScore ++;
			return "You lose! " + computerSelection + " beats " + playerSelection +".\n Player " + playerScore + ", " + "Computer " + computerScore + ".";
			}
			else if (playerSelection == "SCISSORS") {
			playerScore ++;
			return "You win! " + playerSelection + " beats " + computerSelection +".\n Player " + playerScore + ", " + "Computer " + computerScore + ".";
			}}
		else if (computerSelection == "SCISSORS") {
			if (playerSelection == "PAPER") {
			computerScore ++;
			return "You lose! " + computerSelection + " beats " + playerSelection +".\n Player " + playerScore + ", " + "Computer " + computerScore + ".";
			}
			else if (playerSelection == "ROCK") {
			playerScore ++;
			return "You win! " + playerSelection + " beats " + computerSelection +".\n Player " + playerScore + ", " + "Computer " + computerScore + ".";
			}}

}

function playGame() {
console.log(playRound());
console.log(playRound());
console.log(playRound());
console.log(playRound());
console.log(playRound());
}











