//Global Variables===============================================================>
// Used to record how many times a letter can be pressed
var doubleLetter = "abcdefghijklmnopqrstuvwxyz".split("");
//Create an array of words for guesses
const songs = [
  "shake it off",
  "new romantics",
  "delicate",
  "fearless",
  "mine",
  "we are never ever getting back together",
  "blank space",
  "welcome to new york",
  "mean",
  "style",
  "bad blood",
  "22",
  "i knew you were trouble",
  "gorgeous"
];
//show which album it is from?
const albums = [
  "1989",
  "1989",
  "Reputation",
  "of the same name",
  "Speak Now",
  "RED",
  "1989",
  "1989",
  "Speak Now",
  "1989",
  "1989",
  "RED",
  "RED",
  "Reputation"
];
console.log(songs);
console.log(albums);
//Choose word randomly
let randNum = Math.floor(Math.random() * songs.length);
//the chosenWord for the randomly selected song
let chosenWord = songs[randNum];
//the chosenAlbum  for the randomly selected song
let chosenAlbum = albums[randNum];
//array to store correct letter guesses
let rightWord = [];
//array to store incorrect letter guesses
let wrongWord = [];
//starts with blanks and gets replaced by correctguesses
let underScore = [];
//counts number of spaces
let space = 0;

//DOM manipulation===================================================================>

let docUnderScore = document.getElementsByClassName("underscore");
let docRightGuess = document.getElementsByClassName("rightGuess");
let docWrongGuess = document.getElementsByClassName("wrongGuess");
let docAlbum = document.getElementsByClassName("fromAlbum");

//Main Game==================================================================>
console.log(chosenWord);
console.log(chosenAlbum);

//Adds album hint to DOM
docAlbum[0].innerHTML = "HINT: From the Album " + chosenAlbum;

//Create underscores based on length of word
let makeUnderscore = () => {
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === " ") {
      underScore.push(" ");
      space++;
    } else {
      underScore.push("_");
    }
  }
  return underScore;
};
//logs underScore is cerated correctly and number of spaces
console.log(makeUnderscore());
console.log(space);

//Get Users Guess and starts whole check process
docUnderScore[0].innerHTML = underScore.join("&nbsp;");

document.addEventListener("keypress", event => {
  let keyword = String.fromCharCode(event.keyCode);
  console.log(keyword);
  console.log(chosenWord.indexOf(keyword));

  //if Users guess is correct
  if (chosenWord.indexOf(keyword) > -1) {
    //add to correct words array has log to check
    rightWord.push(keyword);
    console.log("rightWord array: " + rightWord);

    //replaces underscore with correctly pressed letter based on indexOf
    for (var i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === keyword) {
        underScore[i] = keyword;
        docUnderScore[0].innerHTML = underScore.join("&nbsp;");
        //adds rightWord to the DOM
        docRightGuess[0].innerHTML = rightWord.join("&nbsp;");
      }
    }

    if (underScore.join("") == chosenWord) {
      alert("you win");
      location.reload();
    }

    console.log(underScore);
  } else {
    wrongWord.push(keyword);
    console.log("wrongWord array: " + wrongWord);
    //adds wrongWord to the DOM
    docWrongGuess[0].innerHTML = wrongWord.join("&nbsp;");
  }

  console.log(docunderScore);
});

//Check if Guess is correct
//If right push to correct array
//If wrong push to incorrect array
//Populate

//failed code snippets
//this only replaced the first instance of the word
// underScore[chosenWord.indexOf(keyword)] = keyword;
// docUnderScore[0].innerHTML = underScore.join("&nbsp;");
// //adds rightWord to the DOM
// docRightGuess[0].innerHTML = rightWord.join("&nbsp;");

// // replace underscore with the correct letter
// underScore[chosenWord.indexOf(keyword)] = keyword;

// // trying to overload indexof to match both letters but this did not work
// // underScore[chosenWord.indexOf(chosenWord.indexOf(keyword) + 1)] = keyword;
