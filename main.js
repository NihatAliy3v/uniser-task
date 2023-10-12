const guessInput = document.querySelector(".guess-input");
const guessBtn = document.querySelector(".guess-btn");
const guessValue = document.querySelector(".related-guess");
const startBtn = document.querySelector(".btn-start");

const changeBtn = (value, color) => {
  startBtn.innerHTML = value;
  startBtn.style.backgroundColor = color;
};


let correctValue = null;
const newGame = () => {
  correctValue = (Math.random() * 100).toFixed();
  changeBtn("Game started", "green");
  guessValue.innerHTML = "";
};
startBtn.addEventListener("click", newGame);

const getTips = (tip) => {
  guessValue.innerHTML = ` You guessed ${guessInput.value} that is ${tip}`;
};

// const checkStart = () => {
//   if (correctValue == null) {
//     alert("oyuna basla");
//     return;
//   }
// };

const guesscheck = (e) => {
  e.preventDefault();
  if (correctValue == null) {
    alert("oyuna basla");
    return;
  }
  let guessNumber = Number(guessInput.value);
  if (isNaN(guessNumber) || guessInput.value === "") {
    alert("add a number");
  } else {
    if (correctValue == guessNumber) {
      getTips("true");
      correctValue = null;
      changeBtn("Start a new game", "#778699");
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

guessBtn.addEventListener("click", guesscheck);
