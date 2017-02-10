

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var words = ["jerry", "kramer", "george", "elaine"]

// This function is run whenever the user presses a key.
document.onkeyup = function(start) {

// Determines which key was pressed
var start = event.key;

alert(start);
};

if (start)

{

alert("game on");

document.onkeyup = function(event) {

// Determines which key was pressed
var userGuess = event.key;

// Alerts the key the user pressed (userGuess).
console(userGuess);

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = options[Math.floor(Math.random() * options.length)];

// Alerts the Computer's guess.
alert(computerGuess);

};

//randomly pick a word
var randomWord = words[Math.floor(Math.random() * words.length)];

};
