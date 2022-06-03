const rockEl = document.getElementById("rock");
const paperEl = document.getElementById("paper");
const scissorsEl = document.getElementById("scissors");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score");
const result_p = document.querySelector(".result > p");
const inputEl = document.getElementById("textInput");

let userScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function win(userSelection, computerSelection) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${userSelection.toUpperCase()}  beats ${computerSelection.toUpperCase()}. You win!`;
  result_p.classList.add("green-glow");
  scoreBoard_div.style.borderColor = "#4dcc7d";
  setTimeout(function () {
    result_p.classList.remove("green-glow");
    scoreBoard_div.style.borderColor = "#225762";
  }, 1500);
}
function lose(userSelection, computerSelection) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${computerSelection.toUpperCase()}  beats ${userSelection.toUpperCase()}. You lose!`;
  result_p.classList.add("red-glow");
  scoreBoard_div.style.borderColor = "#fc121b";
  setTimeout(function () {
    result_p.classList.remove("red-glow");
    scoreBoard_div.style.borderColor = "#225762";
  }, 1500);
}
function draw(userSelection, computerSelection) {
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${computerSelection.toUpperCase()}  equals ${userSelection.toUpperCase()}. It's a draw!`;
  result_p.classList.add("purple-glow");
  scoreBoard_div.style.borderColor = "#5454c4";
  setTimeout(function () {
    result_p.classList.remove("purple-glow");
    scoreBoard_div.style.borderColor = "#225762";
  }, 1500);
}

function game(userSelection) {
  const computerSelection = computerPlay();
  switch (userSelection + computerSelection) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userSelection, computerSelection);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userSelection, computerSelection);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userSelection, computerSelection);
      break;
  }
  score();
}

function main() {
  rockEl.addEventListener("click", () => {
    game("rock");
  });
  paperEl.addEventListener("click", () => {
    game("paper");
  });
  scissorsEl.addEventListener("click", () => {
    game("scissors");
  });
}

main();

function inputPlay() {
  inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault;
      let userSelection = inputEl.value.toLowerCase();
      if (userSelection == "rock") {
        game("rock");
        inputEl.value = "";
      } else if (userSelection == "paper") {
        game("paper");
        inputEl.value = "";
      } else if (userSelection == "scissors") {
        game("scissors");
        inputEl.value = "";
      }
    }
  });
}

inputPlay();

function score() {
  for (let i = 0; i < 5; i++) {
    if (userScore === 5) {
      result_p.innerHTML = "You beat the computer, Yeeyy!";
      scoreBoard_div.classList.add("winning");
      setTimeout(function () {
        scoreBoard_div.classList.remove("winning");
      }, 5000);
      setTimeout(function () {
        userScore_span.innerHTML = "0";
        computerScore_span.innerHTML = "0";
        computerScore = 0;
        userScore = 0;
        result_p.innerHTML = "Let's start again!";
      }, 5000);
    } else if (computerScore === 5) {
      result_p.innerHTML =
        "You lost against the computer, better luck next time!";
      scoreBoard_div.classList.add("losing");
      setTimeout(function () {
        scoreBoard_div.classList.remove("losing");
      }, 5000);

      setTimeout(function () {
        userScore_span.innerHTML = "0";
        computerScore_span.innerHTML = "0";
        computerScore = 0;
        userScore = 0;
        result_p.innerHTML = "Let's start again!";
      }, 5000);
    }
  }
}
