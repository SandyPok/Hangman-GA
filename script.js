$(document).ready(); {
let userWord = 0;
let word = 0;
let phraseLength = 0;
let phrases = ["Early bird gets the worm", "Read between the lines", "I can eat a horse", "Twenty-four seven", "Cat got your tounge", "One in one million", "I beg to differ", "Easier said than done", "Add insult to injury", "Don't cry over spilled milk", "Curiosity killed the cat", "Two peas in a pod", "That's the last straw", "Piece of cake", "Speak of the devil", "Go the whole nine yards", "An eye for an eye", "Hit the hay", "Stab someone in the back", "Quit cold turkey", "Cut to the chase", "Best of both worlds", "Kill two birds with one stone", "Break a leg", "Hit the nail on the head", "Kick the bucket"];
let songs = ["I came in like a wrecking ball", "Work, work, work, work, work", "Just a small town girl", "I still haven't found what I'm looking for", "Is this the real life? Is this just fantasy?", "We don't need no education", "Have you ever seen the rain?", "I don't want to miss a thing", "Take my hand, we'll make it, I swear", "That's me in the corner", "Another one bites the dust", "Eye of the tiger", "Hello darkness my old friend", "Somewhere over the rainbow blue birds fly", "Don't worry about a thing", "Imagine there's no heaven", "Can you feel the love tonight?"];
}

function createLetterHolders(userWord) {
  for(let i = 0; i < userWord.length; i++) {
  }
}

function singleplayer(){
    document.getElementById('introPage').style.display = "none";
    document.getElementById('multiPage').style.display = "none";
    document.getElementById('singlePage').style.display = "block";
}

function multiplayer(){
    document.getElementById('introPage').style.display = "none";
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('multiPage').style.display = "block";
}
