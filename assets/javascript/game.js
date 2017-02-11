
//function to check if user guess has been guessed before
function inArray(needle, haystack) {
 var length = haystack.length;
 for (var i = 0; i < length; i++) {
 if (haystack[i] == needle)
  return true;
 }
 return false;
}


function gameOn() {

    var word = words[Math.floor(Math.random() * words.length)];

    document.onkeyup = function(event) {


// Determines which key was pressed
            var userGuess = event.key;
            guess++;
            console.log(userGuess);
            console.log(guesses);
            console.log(inArray(userGuess, guesses));


        
            if (!(inArray(userGuess, guesses))) {
                
                guessRem--;
                guesses.push(userGuess);

                //filling in guesses remaining
                var div = document.getElementById('guess-rem');
                div.innerHTML = guessRem;

                //filling in user guesses
                var div = document.getElementById('guesses');
                div.innerHTML += userGuess + ', ';

                // Alerts the key the user pressed (userGuess).
                console.log(userGuess);
                console.log(guess);
                console.log(guessRem);



            }
            else if (guessRem == 0) {
                alert('game over');
            }


            


            // // Randomly chooses a choice from the options array. This is the Computer's guess.
            // var computerGuess = options[Math.floor(Math.random() * options.length)];

            // // Alerts the Computer's guess.
            // alert(computerGuess);
        
    };

};


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var words = ["jerry", "kramer", "george", "elaine"];

var guess = 0;

var guessRem = 15;

var guesses = [];




//start game on key press
document.onkeyup = function() {

gameOn();

};




 