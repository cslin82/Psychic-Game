// starting variables
var computerLetter;
var playerGuesses;
var playerGuessesString;
var wins = 0;
var losses = 0;

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



