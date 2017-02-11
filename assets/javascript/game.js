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

    var guesses = [];

    //clear guesses
    var node = document.getElementById('guesses');
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }  

    //clear remainging
    var node = document.getElementById('guess-rem');
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }  

    //generate random word from word array
    var word = words[Math.floor(Math.random() * words.length)]; 
    var wordLength = word.length;

    //show blank spaces
    var div = document.getElementById('current-word');
    div.innerHTML = blankLen(wordLength);

    
    // Determines which key was pressed
    document.onkeyup = function(event) {  

            //transfer what key pressed to userGuess
            var userGuess = event.key;

            //increment guess
            guess++;

            // //debug code
            // console.log(userGuess);
            // console.log(guesses);
            // console.log(inArray(userGuess, guesses));

            

            //have you guessed this letter before?
            if (!(inArray(userGuess, guesses))) {

                console.log(blankArray.join(""));
                console.log(word);

                // decrement guess
                guessRem--;  

                // push guess to array if not already in there
                guesses.push(userGuess); 

                var div = document.getElementById('wins');
                div.innerHTML = wins;

                //filling in guesses remaining
                var div = document.getElementById('guess-rem');
                div.innerHTML = guessRem;

                //filling in user guesses
                var div = document.getElementById('guesses');
                div.innerHTML += userGuess + ', ';

                
                // // debug stuff
                // console.log(userGuess);
                // console.log(guess);
                // console.log(guessRem);

                //is letter in word?
                if (word.match(userGuess)) {
                    locOfStr = (locations( userGuess, word));

                    //insert letter in blank space
                    var div = document.getElementById('current-word');
                    div.innerHTML = insertLetter(locOfStr, userGuess);

                    //debug
                    console.log(blankArray.join(""));
                    console.log(word);
                    }
                    //check if you won
                    if (blankArray.join("") === word) {
                        wins++;
                        gameOn();
                    }
            }
    

            
            // no more guesses? game over!
            else if (guessRem == 0) {
                alert('game over');
            }
        
    };

};


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var words = ["jerry", "kramer"];

var guess = 0;

var wins = 0;

    var guessRem = 15;




var locOfStr = [];




//start game on key press
document.onkeyup = function() {

gameOn();

};

