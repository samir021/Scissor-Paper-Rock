let userScore = 0;
let computerScore = 0;
let choice = document.querySelectorAll(".choice");
let scissorMsg = document.querySelector("#scissorMsg");
let userPoint = document.querySelector("#userPoint");
let computerPoint = document.querySelector("#computerPoint");
let scissorReset = document.querySelector("#scissorReset");

const genComputerChoice = () => {
  let option = ["scissor", "paper", "rock"];
  let indexId = Math.floor(Math.random() * 3);
  return option[indexId];
};
const draw = () => {
  scissorMsg.innerText = "Game is Draw!";
};
const Winner = (userWin) => {
  if (userWin) {
    scissorMsg.innerText = "You won the Game :)";
    userScore++;
    userPoint.innerText = userScore;
  } else {
    scissorMsg.innerText = "You lose the Game :(";
    computerScore++;
    computerPoint.innerText = computerScore;
  }
};
const playGame = (userChoice) => {
  const computerChoice = genComputerChoice();
  if (userChoice === computerChoice) {
    draw();
  } else {
    userWin = true;
    if (userChoice === "scissor") {
      userWin = computerChoice === "paper" ? true : false;
    }
    if (userChoice === "paper") {
      userWin = computerChoice === "scissor" ? false : true;
    } else {
      userWin = computerChoice === "scissor" ? true : false;
    }
    Winner(userWin);
  }
};

choice.forEach((choices) => {
  choices.addEventListener("click", () => {
    const userChoice = choices.getAttribute("id");
    // console.log(userChoice);
    playGame(userChoice);
  });
});

scissorReset.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userPoint.innerText = userScore;
  computerPoint.innerText = computerScore;
});
