///variables for each counter

var wins = 0;
var losses = 0;
var guessLeft = 9;
var userChoice = [];

///Display Text
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessText = document.getElementById("guessText");
var userChoiceText = document.getElementById("userchoice-text");

/// variable array for choices

var letterChoices = ["a","b","c","d","e","f","g","h","i","g","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// ///Computer needs to pick from random letter Choice
// var computerChoice = letterChoices[Math.floor(Math.random() * letterChoices.length)];
// ///User inputs a letter
// document.onkeyup = function(event) {
// ///Computer checkes what key was pressed
// var userGuess = event.key.toLowerCase();


///When User presses key on keyboard make sure it is a **character** and make any input lowercase
document.onkeyup = function(event) {
    /// User guess
    var userGuess = event.key.toLowerCase(); 
    ///Computer picks from LetterChoices randomly
    var computerChoice = letterChoices[Math.floor(Math.random()*letterChoices.length)]; 
    userChoice.push(userGuess);    


///User can not use characters that are not from alphabet

    if (event.keyCode < 65 || event.keyCode > 90) {
        alert("Nope, Not a charachter in the alphabet");}

///Computer compares letter to the one picked

    ///If letter is equal to computer's then add one to wins
    else if (userGuess === computerChoice){

    alert("User guess: " + userGuess);
    alert("Computer guess: " + computerChoice);

    ///Add one to Wins
    wins++;
    guessLeft = 9;
    userChoice.length = 0;


    }

    ///If letter is not equal to computer's then add one to losses and add the letter to pool of already used letters

    else if (userGuess != computerChoice && guessLeft > 0 ) {
        guessLeft--;
        userChoice.push(userGuess);
        
    }

    else if (userGuess != computerChoice && guessLeft === 0 ){
        losses--;
        guessLeft = 9;
    }

    

    
      
// //HANDELING INCORRECT GUESSES - OUTPUT
//       //this 'if' prevents a letter selected a 2nd time from being written to the usedArray again, although it still counts as a guess
//       if (userChoice.indexOf(letterChoices) >= 0) {

//     } else {
//           //this pushes the players incorrect guess to the usedArray and writes it to the HTML
//           userChoice.push(userGuess);
//           document.getElementById('userchoice-text').innerHTML = userGuess;
//           console.log(userChoice);

//     }





///Have a countdown of guesses left for the user and for the computer need for loop
    

///Add the text to the divs
winsText.textContent = event.key.toLowerCase();
winsText.textContent = wins;
lossesText.textContent = event.key.toLowerCase();
lossesText.textContent  = losses;
guessText.textContent = guessLeft;
userChoiceText.textContent  = userChoice;

}



