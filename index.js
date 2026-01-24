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

const promptParent = document.querySelector(".prompt");

const promptPlay = document.createElement("p");
promptPlay.innerText = "Which do you choose, human? Rock, paper, or scissors?";

function displayHumanChoicePrompt() {
  // return prompt("What do you choose, [r]ock, [p]aper, or [s]cissors?");

  if (!document.querySelector(".prompt p")) {
    promptParent.appendChild(promptPlay);
  }
}

function hideHumanChoicePrompt() {
  // return prompt("What do you choose, [r]ock, [p]aper, or [s]cissors?");

  if (document.querySelector(".prompt p")) {
    promptParent.removeChild(promptPlay);
  }
}

function simplifyHumanChoice(humanChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === "rock" || humanChoice == "r") return "rock";
  else if (humanChoice === "paper" || humanChoice == "p") return "paper";
  else if (humanChoice === "scissors" || humanChoice == "s") return "scissors";
}

function playRound(humanChoice, computerChoice) {
  let msg = `draw, both played ${humanChoice}`;
  let winner = "TIE";

  if (humanChoice !== computerChoice) {
    if (humanChoice === "rock") {
      winner = computerChoice === "scissors" ? "HUM" : "COM";
    } else if (humanChoice === "paper") {
      winner = computerChoice === "rock" ? "HUM" : "COM";
    } else if (humanChoice === "scissors") {
      winner = computerChoice === "paper" ? "HUM" : "COM";
    }
  }

  if (winner !== "TIE") {
    if (winner === "HUM") {
      msg = `you win, ${humanChoice} beats ${computerChoice}`;
    } else {
      msg = `tough luck, ${humanChoice} loses to ${computerChoice}`;
    }
  }

  resultP.innerText = msg;

  return winner;
}

const resultP = document.querySelector(".result p");
const humScoreH2 = document.querySelector(".humscore");
const comScoreH2 = document.querySelector(".comscore");
let humScore = 0;
let comScore = 0;
let gameEnded = false;

function playGame(humanChoice, computerChoice) {
  if (gameEnded) return;

  const winner = playRound(humanChoice, computerChoice);

  switch (winner) {
    case "HUM":
      humScore++;
      break;
    case "COM":
      comScore++;
      break;
  }

  humScoreH2.innerText = "Human: " + humScore;
  comScoreH2.innerText = "Computer: " + comScore;

  if (humScore >= 5) {
    humScoreH2.innerText = "Human wins!";
    comScoreH2.innerText = "Computer loses.";
    gameEnded = true;
  } else if (comScore >= 5) {
    comScoreH2.innerText = "Computer wins!";
    humScoreH2.innerText = "Human loses.";
    gameEnded = true;
  }
}

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;
//
//   const ITERATIONS = 5;
//   for (let i = 0; i < ITERATIONS; i++) {
//     const computerChoice = getComputerChoice();
//     const humanChoice = simplifyHumanChoice(getHumanChoice());
//
//     const result = playRound(humanChoice, computerChoice);
//
//     switch (result) {
//       case "HUM":
//         humanScore++;
//         break;
//
//       case "COM":
//         computerScore++;
//         break;
//     }
//   }
//
//   if (humanScore > computerScore) {
//     if (humanScore == 5) {
//       console.log("damn i got slammed.");
//     } else {
//       console.log(`gg human. i concede to you.`);
//     }
//   } else if (computerScore > humanScore) {
//     if (computerScore == 5) {
//       console.log("hah too ez lolll");
//     } else {
//       console.log(`good effort. try again, if you dare`);
//     }
//   } else {
//     console.log("wth a draw? ok");
//   }
//
//   console.log(`FINAL SCORE: ${humanScore} TO ${computerScore}`);
// }
//
// playGame();

const buttonDiv = document.querySelector(".buttons");
// events bubble up!
buttonDiv.addEventListener("click", (e) => {
  playGame(e.target.className, getComputerChoice());
});

displayHumanChoicePrompt();
