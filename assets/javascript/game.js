


function gameOn() {

    var word = words[Math.floor(Math.random() * words.length)];

    document.onkeyup = function(event) {

            guess++;
            guessRem--;



            if (guessRem == 0) {
                alert('game over');
            }
    
    
            else {
                // Determines which key was pressed
                var userGuess = event.key;

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


            


            // // Randomly chooses a choice from the options array. This is the Computer's guess.
            // var computerGuess = options[Math.floor(Math.random() * options.length)];

            // // Alerts the Computer's guess.
            // alert(computerGuess);
        
    };

};


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var words = ["jerry", "kramer", "george", "elaine"]

var guess = 0;

var guessRem = 15;



//start game on key press
document.onkeyup = function() {

gameOn();

};




 