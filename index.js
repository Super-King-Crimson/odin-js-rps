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
  prompt(
    "What do you choose, " +
      "[r]ock, [p]aper, or [s]cissors? " +
      "(Type an answer in brackets)",
  );
}
