//need to be able to take the user's input for each individual letter and transform it into code

alert("Press any key to get started!")

var guessSongs = ["UseMe", "LovelyDay", "AintNoSunshine",];

var useMe = ["u","s","e","m","e",];
// var lovelyDay = ["l","o","v","e","l","y","d","a","y",];
// var aintNoSunshine = ["a","i","n","t","n","o","s","u","n","s","h","i","n","e",];

var secretWord = useMe[Math.floor(Math.random() * useMe.length)];
var guessLetter = "";

var wrongLetters = [];
var correctLetters = [];
var guesses = Math.round((secretWord.length) + (.5 * secretWord.length));

var placeHolder = [];
  for (var i = 0; i < secretWord.length; i++) {
            placeHolder.push("_");
        }


        document.getElementById("currentGuess")


billSong();

    // billSong will grab the letter (character)...
    var char = x.toLowerCase().charAt(0);

    // Then check if that letter is in the song title.
    if (char === "u" || char === "s" || char === "e" || char === "m") {

      // If so... it will log that.
      console.log("Use Me");

    }

    else {

      // If not... it will log that
      
      console.log("Sorry! That letter is not in this song title. Try again. *sadface*");

    }

    // Calling our useMe function.
    useMe ("Eek");
    useMe ("Nah");



function startGame() {

 
 // Creating our song object.
 var song = {

    // Properties of our song object.
    title: "Use Me",
    singer: "Bill Withers",
    year: "1972",
    album: "Still Bill",
 }

console.log(song)


// var song1 = {

//     // Properties of our song1 object.
//     title: "Ain't No Sunshine",
//     singer: "Bill Withers",
//     year: "1971",
//     album: "As I Am",
//  }

// console.log(song1)


// var song2 = {

//   // Properties of our song1 object.
//   title: "Lovely Day",
//   singer: "Bill Withers",
//   year: "1977",
//   album: "Menagerie",
// }

// console.log(song1)

/




/*function correctWord() {
    var guessLetter = document.getElementById("guessLetter").value;
    for (var i = 0; i < secretWord.length; i++) {
        if (correctLetters.indexOf(guessLetter) === -1)
        {
            if (guessLetter === secretWord[i]) {
              correctLetters.push(guessLetter);
                break;
            }}
    }
    if (wrongLetters.indexOf(guessLetter) === -1 && correctLetters.indexOf(guessLetter) === -1) {
        wrongLetters.push(guessLetter);
    }

    console.log(correctLetters); //Used to see if the letters were added to the correct array**
    console.log(wrongLetters);
    wordGuess();
}

function wordGuess() {
    if (guessLetter.value === '') {
        alert("You didn't guess anything.");
    } else if (guesses > 1) {
      // Counts down.
      guesses--;
      console.log('Guesses Left: ' + guesses);
      
      // Resets the input to a blank value.
      let guessLetter = document.getElementById('guessLetter');
      guessLetter.value = '';
    } else {
      console.log('Game Over');
    }
 //console.log(guesses)
}*/
function replWord() {
  guessLetter = document.getElementById("guessLetter").value;
  
   for (i = 0; i < placeHolder.length; i++) {
      if (secretWord[i] == guessLetter){
        placeHolder[i] = guessLetter;
      }
  document.getElementById("currentGuess").innerHTML = placeHolder.join(" ");
   }
  document.getElementById("guessLetter").value = "";
}

function startGame() {
  var testWord = document.getElementById("randTest").innerHTML = secretWord;
  var correctLettersOUT = "";
  document.getElementById("currentGuess").innerHTML = secretBlanks(secretWord)

  function secretBlanks(secretWord) {
      for (var i = 0; i < secretWord.length; i++) {
          correctLettersOUT += ("_ ");
      }
      return correctLettersOUT;

  }
}

function correctWord() {
  var guessLetter = document.getElementById("guessLetter").value;
  document.getElementById("letter").innerHTML = guessLetter;

  for (var i = 0; i < secretWord.length; i++) {
      if (correctLetters.indexOf(guessLetter) === -1)
      {
          if (guessLetter === secretWord[i]) {
            console.log(guessLetter === secretWord[i]); 
            correctLettersOUT[i] = guessLetter;
            correctLetters.push(guessLetter);
              break;
          }}
  }
  if (wrongLetters.indexOf(guessLetter) === -1 && correctLetters.indexOf(guessLetter) === -1) {
      wrongLetters.push(guessLetter);
  }

  console.log(correctLetters); //Used to see if the letters were added to the correct array**
  console.log(wrongLetters);
  wordGuess();
}

function wordGuess() {
  if (guessLetter.value === '') {
      alert("You didn't guess anything.");

  } else if (guesses > 1) {

  };