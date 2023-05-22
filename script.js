const moves = document.getElementById("moves");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const start = document.querySelector(".start-container");
const time = document.getElementById("time");
const card = document.querySelectorAll(".card");
const rates = document.getElementById("stars");
const restartBtn = document.getElementById("restartBtn");
const section = document.querySelector("section");
let interval;
  


//Initial Time
let seconds = 0,
minutes = 0;
//Start game
startBtn.addEventListener("click", () => {
  movesCount = 0;
  seconds = 0;
  minutes = 0;
  start.classList.add("hide");
  stopBtn.classList.remove("hide");
  startBtn.classList.add("hide");
  interval = setInterval(timeGenerator, 1000);
  moves.innerHTML = `${movesCount}`;
  initial();
  ratingStars();
});

//Stop game
stopBtn.addEventListener(
  "click",
  (stopGame = () => {
    start.classList.remove("hide");
    stopBtn.classList.add("hide");
    startBtn.classList.remove("hide");
    clearInterval(interval) ;
  })
);



