const guessInput = document.querySelector(".guess-input");
const guessBtn = document.querySelector(".guess-btn");
const guessValue = document.querySelector(".related-guess");
const startBtn = document.querySelector(".btn-start");
const progressBar = document.querySelector(".progressing");

guessInput.disabled = true;
guessBtn.disabled = true;
guessBtn.style.opacity = 0.4;

const changeBtn = (value, color) => {
  startBtn.innerHTML = value;
  startBtn.style.backgroundColor = color;
};

const gameOver = () => {
  correctValue = null;
  countGuess = 0;
  progressBar.style.width = "0";
  guessInput.value = "";
  changeBtn("Start a new game", "#778699");
  guessInput.disabled = true;
  guessBtn.disabled = true;
  guessBtn.style.opacity = 0.4;
};

let correctValue = null;
const newGame = () => {
  correctValue = (Math.random() * 100).toFixed();
  guessValue.innerHTML = "";
  changeBtn("Change Number", "orange");
  guessInput.disabled = false;
  guessBtn.disabled = false;
  guessBtn.style.opacity = 1;
};
startBtn.addEventListener("click", newGame);

const getTips = (tip) => {
  guessValue.innerHTML = ` You guessed ${guessInput.value} that is ${tip}`;
};

let countGuess = 0;
const progress = () => {
  countGuess++;
  progressBar.style.width = `${countGuess * 10}%`;
};

const compareGuess = () => {
  let guessNumber = Number(guessInput.value);
  if (isNaN(guessNumber) || guessInput.value === "") {
    alert("add a number");
  } else {
    progress();
    if (correctValue == guessNumber) {
      getTips("true");
      gameOver();
    } else if (correctValue > guessNumber + 10) {
      getTips("too low");
    } else if (correctValue > guessNumber) {
      getTips("low");
    } else if (correctValue < guessNumber - 10) {
      getTips("to high");
    } else if (correctValue < guessNumber) {
      getTips("high");
    }
  }
  guessInput.value = "";
};

const guesscheck = (e) => {
  e.preventDefault();
  if (countGuess === 10) {
    gameOver();
    guessValue.innerHTML = "";
    return;
  }
  compareGuess();
};

guessBtn.addEventListener("click", guesscheck);
