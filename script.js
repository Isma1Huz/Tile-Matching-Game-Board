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



//For timer
const timeGenerator = () => {
  seconds += 1;
  //minutes logic
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  //format t ime before displaying
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  time.innerHTML = `${minutesValue}:${secondsValue}`;
  };
  
  
  
  //Initial moves 
  let movesCount = 0;
  //For calculating moves
  const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `${movesCount}`;
  };
  
