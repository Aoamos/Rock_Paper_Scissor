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

console.log(getComputerChoice());
