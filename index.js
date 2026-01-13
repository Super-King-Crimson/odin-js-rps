let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3);

  if (rand == 0) {
    return "rock";
  } else if (rand == 1) {
    return "paper";
  }
  if (rand == 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("What do you choose, [r]ock, [p]aper, or [s]cissors?");
}

function simplifyHumanChoice(humanChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === "rock" || humanChoice == "r") return "rock";
  else if (humanChoice === "paper" || humanChoice == "p") return "paper";
  else if (humanChoice === "scissors" || humanChoice == "s") return "scissors";
}

function playRound(humanChoice, computerChoice) {}
