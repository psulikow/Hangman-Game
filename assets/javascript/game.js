
//function to create array of _ _ _ 

function blankLen (blank) {
    blankArray = [];
    for (var i = 0; i < blank; i++) {
        blankArray.push(' - ');
    

 }
 return blankArray.join("");
}

//return index of letter in word
function letterIndex (w,l) {
    return w.indexOf(l);
}


//function to replace _ in array with letter
function insertLetter (loc, let) {
    var length = loc.length;
    for (var i = 0; i < length; i++)
        blankArray[loc[i]] = let;

return blankArray.join("");
}




function locations(substring,string){
  var a=[],i=-1;
  while((i=string.indexOf(substring,i+1)) >= 0) a.push(i);
  return a;
}




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

    //define empty guess array for comparison
    var guesses = [];

    //define total of guesses
    var guessRem = 5;

    //clear guesses in HTML div on restart
    var node = document.getElementById('guesses');
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }  

    //clear remainging in HTML div on restart
    var node = document.getElementById('guess-rem');
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }  

    //generate random word from word array
    var word = words[Math.floor(Math.random() * words.length)]; 
    var wordLength = word.length;

    //show blank spaces in HTML div corresponding to word
    var div = document.getElementById('current-word');
    div.innerHTML = blankLen(wordLength);

    //show 0 wins
    var div = document.getElementById('wins');
    div.innerHTML = wins;

    
    // Determines which key was pressed
    document.onkeyup = function(event) {  

            //clear remainging in HTML div on restart
            var node = document.getElementById('game-over');
            while (node.hasChildNodes()) {
                node.removeChild(node.firstChild);
            } 

            //transfer what key pressed to userGuess
            var userGuess = event.key;

            //increment guess after key is pressed
            guess++;

            //have you guessed this letter before?
            if (!(inArray(userGuess, guesses))) {

                // decrement guess
                guessRem--;  

                // push guess to array if not already in there
                guesses.push(userGuess);

                //filling in guesses remaining on screen
                var div = document.getElementById('guess-rem');
                div.innerHTML = guessRem;

                //filling in user guesses
                var div = document.getElementById('guesses');
                div.innerHTML += userGuess + ', ';

                //is letter in word?
                if (word.match(userGuess)) {
                    locOfStr = (locations( userGuess, word));

                    //insert letter in blank space in current word in HTML
                    var div = document.getElementById('current-word');
                    div.innerHTML = insertLetter(locOfStr, userGuess);

                    //debug
                    console.log(blankArray.join(""));
                    console.log(word);
                    console.log(wins);

                }

                //check if you won
                if (blankArray.join("") === word) {
                    wins++;
                    gameOn();
                }
                // no more guesses? game over!
                else if (guessRem == 0) {
                //filling in guesses remaining on screen with game over
                var div = document.getElementById('game-over');
                div.innerHTML = gameOver;
                gameOn();
            }
    

            }
        
    };

};

var words = ["jerry", "kramer", "newman", "elaine", "george", "davola", "improv", "puddy"];

var guess = 0;

var wins = 0;

var locOfStr = [];

var gameOver = "Game Over, try again!"

//start game on key press
document.onkeyup = function() {

gameOn();

};
