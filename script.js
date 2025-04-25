// This function get the computer choice
const getComputerChoice = () => {
  const randonNumber = Math.random();
  if (randonNumber < 1 / 3) {
    return "rock";
  } else if (randonNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
};

// This function get the player choice
const getHumanChoice = () => {
  const userInput = prompt("Enter rock, paper, or scissors");
  return userInput.toLowerCase();
};


