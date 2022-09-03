console.log("Hello World!");


function getComputerChoice() {
  let compChoice; 
  let compChoiceGenerator = Math.floor(Math.random()*3);
  console.log(compChoiceGenerator);
  if (compChoiceGenerator == 0) {
    compChoice = "rock";
  } else if (compChoiceGenerator == 1) {
    compChoice = "paper"
  } else if (compChoiceGenerator == 2) {
     compChoice = "scissors"
  }
  console.log(compChoice);
  return compChoice;
}

function playRound (playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "rock") {
   alert("It's a draw!");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
   alert("You Lose! Paper beats rock");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
   alert("You Win! Rock beats scissors");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    alert("You Win! Paper beats rock");
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    alert("It's a draw!");
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    alert("You Lose! Scissors beats paper");
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    alert("You Lose! Rock beats scissors");
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    alert("You Win! Scissors beats paper");
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    alert("It's a draw!");
  }
}

function game() {
  for (let round = 1; round < 6; round++) {
    let playerChoice = prompt("Choose either rock, paper or scissors", "rock/paper/scissors").toLowerCase();
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
  }  
}

game();
