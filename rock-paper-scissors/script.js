const compChoiceDisplay = document.getElementById("comp-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let compChoice;
let result;

possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener("click", (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateCompChoice();
    getResult();
  });
});

function generateCompChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    compChoice = "rock";
  }
  if (randomNumber === 2) {
    compChoice = "paper";
  }
  if (randomNumber === 3) {
    compChoice = "scissors";
  }

  compChoiceDisplay.innerHTML = compChoice;
}

function getResult() {
  if (userChoice === compChoice) {
    result = "DRAW!";
  } else if (userChoice === "rock") {
    result = compChoice == "paper" ? "YOU LOSE!" : "YOU WIN!";
  } else if (userChoice === "paper") {
    result = compChoice == "scissors" ? "YOU LOSE!" : "YOU WIN!";
  } else if (userChoice === "scissors") {
    result = compChoice == "rock" ? "YOU LOSE!" : "YOU WIN!";
  }

  resultDisplay.innerHTML = result;
}
