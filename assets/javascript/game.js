// starting variables
var computerLetter = '';
var playerGuesses = "";
// var playerGuessesString = "";
var wins = 0;
var losses = 0;
var guessesLeft = 9;

const alphabet = "abcdefghijklmnopqrstuvwxyz";


// get the span elements to display scores
spanWins = document.getElementById("displayWins");
spanLosses = document.getElementById("displayLosses");
spanGuessesLeft = document.getElementById("displayGuessesLeft");
spanGuesses = document.getElementById("displayGuesses");



function randomLetter() {
    var index = Math.floor(Math.random()*alphabet.length);
    return alphabet[index]; // or charAt() for older compatibility
}

// game initialization

// Formats player guesses (lowercase) to be uppercase and have separating commas
function guessesToString(guesses) {
    var guessString = "";
    for (var k = 0; k < guesses.length; k++) {
        guessString += guesses[k];
        // don't add a terminal comma
        if (k < guesses.length-1) {
            guessString += ', '
        }
    }
    return guessString.toUpperCase();
 
}

// To be called after a player makes a guess
function updateGameBoard() {
    spanWins.innerHTML = wins;
    spanLosses.innerHTML = losses;
    spanGuessesLeft.innerHTML = guessesLeft;
    spanGuesses.innerHTML = guessesToString(playerGuesses);
    // spanGuesses.innerHTML = "guesses go here"; // guessesToString(guesses);

}


document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    if ( (alphabet.indexOf(userGuess) === -1) || (playerGuesses.indexOf(userGuess) !== -1) ) { return 0; }

    playerGuesses = playerGuesses + userGuess;
    // console.log(userGuess);

    updateGameBoard();
    
  };