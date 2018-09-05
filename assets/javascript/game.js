


///Variable array of Alphabet Choices for Computer
var computerLetterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


///Wins Losses and Guess Left variables
var wins = 0;
var losses = 0;
var guessLeft = 9;
var UsedCharacterList = [];




///Computer picks from LetterChoices randomly


var computerPicksLetter = computerLetterChoices[Math.floor(Math.random() * computerLetterChoices.length)];


///Display Text on HTML Document
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessText = document.getElementById("guess-Text");
var userChoiceText = document.getElementById("userChoice-Text");


///When User presses key on keyboard make sure it is a **CHARACTER** and make any input lowercase
document.onkeyup = function(event) {

        // word = word + String.fromCharCode(key.keyCode).toLowerCase();
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

///USER VRS COMPUTER


    //// If User's guess is not the same as the computer's choise and the guessLeft is larger than 0 then 

    if (UsedCharacterList.indexOf(userGuess) < 0 && computerLetterChoices.indexOf(userGuess) >= 0) {
        
        //// In userCharacterList add userGuess
        UsedCharacterList[UsedCharacterList.length]=userGuess; 
        guessLeft--; //// Decrease one from guessLeft
}
    ///// If User's guess is the same as computer's choise 

    if (computerPicksLetter == userGuess) {
        wins++; //// Increment wins counter by one 
        guessLeft = 9; //// And start the guess left to 9 again
        UsedCharacterList = []; //// Reset user's list
}
            
    //// GuessLeft is equal to 0 then 
    
    if (guessLeft == 0) {
        losses++; //// Increment losses by one 
        guessLeft = 9; //// Set guessLeft to 9
        UsedCharacterList = []; //// Reset user's list

}
               
///Add the text to the divs

winsText.textContent = wins;                    //// Add wins to wins-text
lossesText.textContent  = losses;               //// Add losses to losses-text
guessText.textContent = guessLeft;              //// add guessLeft to guessText
userChoiceText.textContent  = UsedCharacterList;//// add userChoiceText to UsedCharacterList

}