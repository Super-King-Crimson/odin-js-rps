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

function playRound(humanChoice, computerChoice) {
  let msg = `draw, both played ${humanChoice}`;
  let draw = true;

  let humanWon;

  if (humanChoice !== computerChoice) {
    draw = false;

    if (humanChoice === "rock") {
      humanWon = computerChoice === "scissors";
    } else if (humanChoice === "paper") {
      humanWon = computerChoice === "rock";
    } else if (humanChoice === "scissors") {
      humanWon = computerChoice === "paper";
    }
  }

  if (!draw) {
    if (humanWon) {
      msg = `you win, ${humanChoice} beats ${computerChoice}`;
    } else {
      msg = `tough luck, ${humanChoice} loses to ${computerChoice}`;
    }
  }

  console.log(msg);
  return humanWon;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const ITERATIONS = 5;
  for (let i = 0; i < ITERATIONS; i++) {
    const computerChoice = getComputerChoice();
    const humanChoice = simplifyHumanChoice(getHumanChoice());

    if (playRound(humanChoice, computerChoice)) humanScore++;
    else computerScore++;
  }

  if (humanScore > computerScore) {
    if (humanScore == 5) {
      console.log("damn i got slammed.");
    } else {
      console.log(`gg human. i concede to you.`);
    }
  } else if (computerScore > humanScore) {
    if (computerScore == 5) {
      console.log("hah too ez lolll");
    } else {
      console.log(`good effort. try again, if you dare`);
    }
  } else {
    console.log("wth a draw? ok");
  }
}

playGame();
