function getComputerChoice() {
  let compChoice; 
  let compChoiceGenerator = Math.floor(Math.random()*3);
  if (compChoiceGenerator == 0) {
    compChoice = "rock";
  } else if (compChoiceGenerator == 1) {
    compChoice = "paper"
  } else if (compChoiceGenerator == 2) {
     compChoice = "scissors"
  }
  return compChoice;
}

function playRound (event) {
  let playerSelection = event.target.innerHTML.toLowerCase();
  let computerSelection = getComputerChoice();
  const result = document.querySelector('.roundResult');

  if (playerScore >= 5 || compScore >= 5) {
    return;
  } else if (playerSelection == computerSelection) {
    // alert("It's a draw!");
    result.innerText = `It's a draw! You and Computer choose ${playerSelection}`;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    // alert("You Lose! Paper beats rock");
    result.innerText = `You choose ${playerSelection} while Computer choose ${computerSelection}. You Lose!`;
    compScore += 1;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    // alert("You Win! Rock beats scissors");
    result.innerText = `You choose ${playerSelection} while Computer choose ${computerSelection}. You Win!`;
    playerScore += 1;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    // alert("You Win! Paper beats rock");
    result.innerText = `You choose ${playerSelection} while Computer choose ${computerSelection}. You Win!`;
    playerScore += 1;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    // alert("You Lose! Scissors beats paper");
    result.innerText = `You choose ${playerSelection} while Computer choose ${computerSelection}. You Lose!`;
    compScore += 1;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    // alert("You Lose! Rock beats scissors");
    result.innerText = `You choose ${playerSelection} while Computer choose ${computerSelection}. You Lose!`;
    compScore += 1;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    // alert("You Win! Scissors beats paper");
    result.innerText = `You choose ${playerSelection} while Computer choose ${computerSelection}. You Win!`;
    playerScore += 1;
  } 

  // console.log(playerSelection);
  // console.log(computerSelection);
  updateScore();
}

function updateScore() {
  const score = document.querySelector('.scoreCard');
  score.innerText = `You: ${playerScore}, Computer: ${compScore}`;
  const winner = document.querySelector('.winner');
  if (playerScore == 5) {
    winner.innerText = "You Win! You beat the computer";
  } else if (compScore == 5) {
    winner.innerText = "Game Over! You lose beat your ass";
  }
}

let playerScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll('.player-choice');
buttons.forEach(button => {
  button.addEventListener('click', playRound)
});
