export const checkStandardWinner = (userChoice, computerChoice) => {
  const user = userChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (user === computer) return "draw";

  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  return rules[user] === computer ? "win" : "lose";
};

export const checkBonusWinner = (userChoice, computerChoice) => {
  const user = userChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();

  if (user === computer) return "draw";

  const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
  };

  if (!rules[user]) return "lose"; // Safety check

  return rules[user].includes(computer) ? "win" : "lose";
};
