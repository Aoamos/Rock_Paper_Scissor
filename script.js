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

// Using terminal prompt may not work but we can use readline
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const getHumanChoice_terminal = (callback) => {
  // Using readline to get user input
  readline.question("Enter rock, paper, or scissors: ", (input) => {
    callback(input.toLowerCase());
    readline.close();
  });
};

getHumanChoice_terminal((choice) => console.log(`You chose: ${choice}`));
