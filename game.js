// possible letters to win the game
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// an array to keep track of what has been guessed
var guessedLetters = [];

// This variable will be randomly assigned one of the letters
var letterToGuess = null;

// this variable dictates how many guesses the user can make
var guessesLeft = 9;

// This is the counter for wins/losses
var wins = 0;
var losses = 0;

// Below we created three functions to updateGuesses, updateGuessesLeft, and updateGuessesSoFar
var updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft.
  // (i.e. guessesLeft will get displayed in HTML)
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
  //*** Here we get a random letterToGuess and assign it based on a random generator - use math to set letterToGuess equal to a random letter from our letters array (hints - math.floor, math.random will be used and letters array will be referenced)
  //========================================== letterToGuess = 
};

var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas.
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

// Function will be called when we reset everything
var reset = function() {
  //***Hardcode reset guessesLeft
  //==========================================
  //***hardcode reset guessedLetters
  //==========================================
  //***call function to reset letter to guess
  //==========================================
  //***call function to update guesses left in html
  //==========================================
  //***call function to update guesses made so far in html
  //==========================================
};

// Execute on page load.
//***call function to update letter to guess
//==========================================
//***call function to update guesses left
//==========================================

// This function will capture the keyboard clicks.
document.onkeydown = function(event) {
  //***subtract one from guesses left when a key is clicked
  //==========================================
  // Lowercase the letter
  var letter = event.key.toLowerCase();

  // ***Add the guess to the guessedLetters array using .push
  //==========================================

  // Then its going to run the update functions
  updateGuessesLeft();
  updateGuessesSoFar();


  // We'll check if there's a match.
  if (letter === letterToGuess) {

    // If there is then we win and we'll update the HTML to display the win.
    wins++;
    document.querySelector("#wins").innerHTML = wins;

    // Then we'll reset the game
    reset();
  }

  // If we are out of guesses...
  if (guessesLeft === 0) {

    // Then we will loss and we'll update the HTML to display the loss.
    losses++;
    document.querySelector("#losses").innerHTML = losses;

    // Then we'll call the reset.
    reset();
  }
};