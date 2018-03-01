// starting variables
var computerLetter = '';
var playerGuesses = "";
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
    var index = Math.floor(Math.random() * alphabet.length);
    return alphabet[index]; // or charAt() for older compatibility
}

// game initialization

// Formats player guesses (lowercase) to be uppercase and have separating commas
function guessesToString(guesses) {
    var guessString = "";
    for (var k = 0; k < guesses.length; k++) {
        guessString += guesses[k];
        // don't add a terminal comma
        if (k < guesses.length - 1) {
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

function resetGame() {
    computerLetter = randomLetter();
    playerGuesses = "";
    guessesLeft = 9;
}


document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    if ((alphabet.indexOf(userGuess) === -1) || (playerGuesses.indexOf(userGuess) !== -1)) { return 0; }

    // console.log(userGuess);

    console.log(`user guessed ${userGuess}, computer letter is ${computerLetter}`);

    if (userGuess === computerLetter) {
        wins++;
        updateGameBoard();
        alert('that\'s right! i was thinking of ' + computerLetter.toUpperCase() + '!');
        alert('starting a new round...');
        resetGame();
        updateGameBoard();
    } else {
        guessesLeft--;
        playerGuesses = playerGuesses + userGuess;
        updateGameBoard();

        if (guessesLeft === 0) {
            losses++;
            updateGameBoard();
            alert('sorry! i was thinking of ' + computerLetter.toUpperCase() + '!');
            alert('starting a new round...');
            resetGame();
            updateGameBoard();
        }
    }
    // TODO: figure out where to place updateGameBoard for desired update frequency. probably right here.


};

resetGame();
updateGameBoard();