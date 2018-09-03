


///Variable array of Alphabet Choices for Computer
var letterChoices = ["a","b","c","d","e","f","g","h","i","g","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


///Wins Losses and Guess Left variables
var wins = 0;
var losses = 0;
var guessLeft = 9;
var userList = [];

///When User presses key on keyboard make sure it is a **CHARACTER** and make any input lowercase


///Computer picks from LetterChoices randomly


///USER VRS COMPUTER

    ///// If User's guess is the same as computer's choise 
            //// Increment wins counter by one 
            //// And start the guess left to 9 again
            //// Add wins to wins-text
            //// Reset userList

    //// If User's guess is not the same as the computer's choise and the guessLeft is larger than 0 then 
    
            //// Decrease one from guessLeft 
            //// add guessLeft to guessText
            //// And add the letter the user guessed to the userList
            //// In userList add userGuess and show on userguess-text

    //// If User's guess is not the same as the computer's choise and the guessLeft is equal to 0 then 
    
            //// Increment losses by one    
            //// Add losses to losses-text
            //// Set guessLeft to 9
            //// Reset userList