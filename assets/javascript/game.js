//need to be able to take the user's input for each individual letter and transform it into code

 // Creating our song object.
 var song = {

    // Properties of our song object.
    title: "Use Me",
    singer: "Bill Withers",
    year: "1972",
    album: "Still Bill",
 }

console.log(song)


// Creates a Function called "useMe" that takes in a single argument (x).
function useMe(x) {

    // useMe will grab the letter (character)...
    var char = x.toLowerCase().charAt(0);

    // Then check if that letter is in the song title.
    if (char === "u" || char === "s" || char === "e" || char === "m") {

      // If so... it will log that.
      console.log("Use Me! Correct!");

    }

    else {

      // If not... it will log that.
      console.log("Sorry! That letter is not in this song title. Try again. *sadface*");

    }

    // Calling our useMe function.
    useMe ("Eek");
    useMe ("Nah");

  }
