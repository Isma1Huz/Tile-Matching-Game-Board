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
  









// Rating
let rating;
maxRate = 5;
const ratingStars = () => {
  rating = maxRate;
  rates.innerHTML = `Rating: ${rating}`;
  if (movesCount < 7){
    rating = maxRate;
    rates.innerHTML = `Rating: ${rating}`;
  } else if(movesCount => 10 && movesCount <= 13){
    rating = maxRate - 1;
    rates.innerHTML = `Rating: ${rating}`;
  }
  else if(movesCount > 13 && movesCount <= 20){
    rating = maxRate - 2;
    rates.innerHTML = `Rating: ${rating}`;
  }
  else {
    rating = 1;
    rates.innerHTML = `Rating: ${rating}`;
  }
}




// Card Data

const getData = () => [
  { name: "cat", image: "./images/cat.jpeg" },
  { name: "chicken", image: "./images/chicken.jpg" },
  { name: "dove", image: "./images/dove.jpeg" },
  { name: "cat", image: "./images/cat.jpeg" },
  { name: "rat", image: "./images/rat.jpg" },
  { name: "chicken", image: "./images/chicken.jpg" },
  { name: "duck", image: "./images/duck.jpeg" },
  { name: "dog", image: "./images/dog.jpg" },
  { name: "duck", image: "./images/duck.jpeg" },
  { name: "dove", image: "./images/dove.jpeg" },
  { name: "dog", image: "./images/dog.jpg" },
  { name: "rat", image: "./images/rat.jpg" },
];



// Randomizing
const randomize = () => {
  const cardData =  getData();

  cardData.sort(() => Math.random() - 0.5 );
  return cardData;
}
randomize();



// Card Generator Function

const cardGenerator = () => {
  let cardData = randomize();
  // HTML
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    // Attach the info to the cards
    face.src = item.image
    card.setAttribute("name", item.name);
    // Attach the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
        card.classList.toggle("toggle");
        checkCards(e);
    })
  })
 
};

































