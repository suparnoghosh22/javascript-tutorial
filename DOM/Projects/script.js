let randomNumber = Math.floor(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessField");
const submitButton = document.querySelector("#subt");
const prevGuess = document.querySelector(".guesses");
const guessRemaining = document.querySelector(".lastResult");
const displayValue = document.querySelector(".lowOrHi");
const newGameButton = document.createElement("p");
const resultParas = document.querySelector(".resultParas");

let prevGuessList = [];
let guesses = 0;
let playGame = true;

function validateData(value) {
  if (isNaN(value)) {
    return false;
  } else if (value < 1) {
    return false;
  } else if (value > 100) {
    return false;
  } else {
    return true;
  }
}

function cleanupListOfGuesses() {
  prevGuessList = [];
}

function endGame() {
  userInput.setAttribute("disabled", "");
  newGameButton.setAttribute("class", "button");
  newGameButton.innerHTML = "<h2>Start New Game</h2>";
  resultParas.appendChild(newGameButton);
  playGame = false;

  newGameButton.addEventListener("click", (event) => {
    newGame();
  });
}

function newGame() {
  userInput.removeAttribute("disabled");
  displayValue.innerHTML = '';
  guesses = 0;
  prevGuess.innerHTML = prevGuessList;
  guessRemaining.innerHTML = `${10 - guesses}`;
  playGame = true;
  newGameButton.remove();
}

function checkGuess(value) {
  if (guesses < 10) {
    if (value === randomNumber) {
      userInput.value = "";
      displayValue.innerHTML = `You entered correct number. Number was ${randomNumber}`;
      cleanupListOfGuesses();
      endGame();
    } else if (value < randomNumber) {
      userInput.value = "";
      displayValue.innerHTML = `Value is too low`;
      prevGuessList.push(value);
      guesses++;
      guessRemaining.innerHTML = `${10 - guesses}`;
      prevGuess.innerHTML = prevGuessList;
    } else {
      userInput.value = "";
      displayValue.innerHTML = `Value is too high`;
      prevGuessList.push(value);
      guesses++;
      guessRemaining.innerHTML = `${10 - guesses}`;
      prevGuess.innerHTML = prevGuessList;
    }
  } else {
    userInput.value = '';
    displayValue.innerHTML = `You entered incorrect number. Number was ${randomNumber}`;
    cleanupListOfGuesses();
    endGame();
  }
}

if (playGame) {
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const value = parseInt(userInput.value);
    if (validateData(value)) {
      checkGuess(value);
    } else {
      displayValue.innerHTML = "Enter a valid number";
    }
  });
}
