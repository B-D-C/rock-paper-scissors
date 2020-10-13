let rockPaperScissors = {
  playerScore: 0,
  computerScore: 0,
  resetScore: function() {
    this.playerScore = 0;
    this.computerScore = 0;
    displayScore.changePlayerScore();
    displayScore.changeComputerScore();
    document.getElementById("feedback").innerHTML = "";
  },
  playerWins: function() {
    debugger;
    this.playerScore++
    displayScore.changePlayerScore();
    gameOver();
   },
  computerWins: function() {
    this.computerScore++
    displayScore.changeComputerScore();
    gameOver();
  },
};
let displayScore = {
  changePlayerScore: function()  {
    document.getElementById("playerScore").innerHTML = rockPaperScissors.playerScore;
  },
  changeComputerScore: function() {
    document.getElementById("computerScore").innerHTML = rockPaperScissors.computerScore;
  }
};
let playGame = {
  getPlayerSelection: function() {
    let playerSelection = document.getElementById("playerSelection").value;
    return playerSelection;
  },
  getComputerSelection: function() {
    let int = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1)+ 1)) + Math.ceil(1);
    if (int == 1) {
      return "Rock";
    } else 
      if (int == 2) {
        return "Paper";
    } else
      if (int == 3) {
        return "Scissors";
    }
  },
  playRound: function() {
    let playerSelection = playGame.getPlayerSelection();
    let computerSelection = playGame.getComputerSelection();
    if (playerSelection === computerSelection) {
      document.getElementById("feedback").innerHTML = "It's a tie!";
    } else 
        if (playerSelection === "Rock") {
          if (computerSelection === "Paper") {
            document.getElementById("feedback").innerHTML = "You Lose!  Paper beats Rock.";
            rockPaperScissors.computerWins();   
          } else {
            document.getElementById("feedback").innerHTML = "You win!  Rock beats Scissors.";
            rockPaperScissors.playerWins();
          }
      } else 
          if (playerSelection === "Paper") {
            if (computerSelection === "Rock") {
              document.getElementById("feedback").innerHTML = "You win!  Paper beats Rock.";
              rockPaperScissors.playerWins();
            } else {
              document.getElementById("feedback").innerHTML = "You lose!  Scissors beats Paper.";
              rockPaperScissors.computerWins();
            }  
      } else 
          if (playerSelection === "Scissors") {
            if (computerSelection === "Rock") {
              document.getElementById("feedback").innerHTML = "You lose!  Rock beats Scissors.";
              rockPaperScissors.computerWins();
            } else {
                document.getElementById("feedback").innerHTML = "You win!  Scissors beats Paper";
                rockPaperScissors.playerWins();
      }
    }
  }
  }


function gameOver() {
  if (rockPaperScissors.playerScore > "2") {
    alert("You won best out of 5!");
    rockPaperScissors.resetScore();
  }
  if (rockPaperScissors.computerScore > "2") {
    alert("You lost best out of 5!");
    rockPaperScissors.resetScore();
}
  

      

}
