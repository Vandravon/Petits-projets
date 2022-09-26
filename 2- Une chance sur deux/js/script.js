let game = document.querySelector("#game");
let number = document.querySelector("#number");
let buttonRandomNumber = document.querySelector("#button-random-number");

let randomizeNumber = function () {
 let randomNumber = Math.floor(Math.random() * 11)
 number.innerText = randomNumber;

 if (randomNumber % 2 === 0) {
  game.classList.add("blue");
  game.classList.remove("green");
 } else {
  game.classList.add("green");
  game.classList.remove("blue");
 }
}

buttonRandomNumber.addEventListener("click", randomizeNumber);