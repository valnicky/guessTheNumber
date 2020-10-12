/**
 * Guess The Number Game
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * DONE: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses
let guesses = [];
// Variable for store the correct random number
let correctNumber = getRandomNumber();

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);

};

function playGame() {
  let numberGuess = document.getElementById('number-guess').value;
 displayResult(numberGuess);
 saveGuessHistory(numberGuess);
 displayHistory();
}

function displayResult(numberGuess){
    if(correctNumber <  numberGuess){
     showNumberAbove();
 } else if(correctNumber > numberGuess) {
   
     showNumberBelow();
 }else {
   showYouWon();
 }
}

/**
 reset the correctNumber, result display, guesses, and HTML history content
 */
function initGame() {
    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "";
  guesses = [];
  displayHistory();
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

function getRandomNumber() {
   let correctNumber = Math.floor(Math.random() * 100) + 1;
   
   return correctNumber;
}

function saveGuessHistory(guess) {
  guesses.push(guess);
}

function displayHistory() {
  let index = 0; 
  let list = "<ul class='list-group'>";
  
  while(index < guesses.length){
      list += `<li class='list-group-item'>You guessed ${guesses[index]} </li>`;
      index++;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";

let dialog = getDialog('won', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";

let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";
  
let dialog = getDialog('warning', text);
  document.getElementById("result").innerHTML = dialog;
}
