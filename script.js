$(document).ready();

  $(function() {
   var singleplayerContainer = $('#singleplayer').css({"display": "none"});
   var singleplayerBoardContainer = $('#singleplayerBoard').css({"display":"none"});

   var multiplayerContainer = $('#multiplayer').css({"display": "none"});
   var multiplayerBoardContainer = $('#multiplayerBoard').css({"display":"none"});

   var openingTag = '<div class="letter-border"><div class="letter-holder"><span class="letter">';
   var closingTag = '</span></div></div>';

   var words = ["Hello", "Test", "Potato"];
   var numberOfTries = 7;

   function clearBoard() {
      $('#singleplayer').css({"display":"none"});
      $('#multiplayer').css({"display":"none"});
   }

   function resetBoard() {
      clearBoard();
      $('#multiplayer').css({"display": "none"});
      $('#multiplayerBoard').css({"display":"none"});
   }

   $('#asd').attr('');

   function categoryPhrase() {
      console.log("Category");
   }

   function categorySongs() {
      console.log("Songs");
   }
   //.attr("data-letter", element
   function drawWord(getWord) {
      getWord.split("").forEach(function(element) {
         $('#generateWord').append(openingTag + element.toUpperCase() + closingTag);
      });

      for (var i = 0; i < getWord.length; i++) {
         console.log($('#generateWord').children(".letter-border")[i]);
      }

      for (var j = 0; j < getWord.length; j++) {
         $('.letter-border:nth-child(' + j + ')').attr('data-letter', getWord[j]);
      }

      console.log($('.letter-border:nth-child(0)'));

   }

   function drawScore() {
      $('.numberOfTries').append(document.createTextNode(numberOfTries));
   }

   $('#getWord').on('click', function(e) {
      e.preventDefault();
      //Clean up previous game
      $('#generateWord').empty();
      $('.numberOfTries').empty();

      // Gets the word input
      var playerWordInput = $('#word').val();

      // Display the multiplayer div board
      $('#multiplayerBoard').css({"display":"block"});
      clearBoard();

      //Clear the input box
      $('#word').val("");

      //Draws the word
      drawWord(playerWordInput);
      drawScore();
   });

   $('#singeplayerButton').on('click', function(e){
      e.preventDefault();
      $('#board').css({"display":"none"});
      $('#singleplayer').css({"display": "block"});
   });

   $('#multiplayerButton').on('click', function(e) {
      e.preventDefault();
      $('#board').css({"display": "none"});
      $('#multiplayer').css({"display": "block"});
   });

   $('.backButton').on('click', function(e) {
      e.preventDefault();
      resetBoard();
      $('#board').css({"display":"block"});
   });

   $('#phraseButton').on('click', function(e) {
      e.preventDefault();
      console.log("phrase button");
   });

   $('#songButton').on('click', function(e) {
      e.preventDefault();
      console.log('song button');
   });
});

$(function() {
  counter = 0;

  $('#personHead').css({'display':'none'});
  $('#personBody').css({'display':'none'});

  $('#triggerEvent').on('click', function(e) {
    e.preventDefault();
    counter++;

    switch(counter) {
      case 1:
        $('#personHead').css({'display':'block'});
        break;
      case 2:
        $('#personBody').css({'display':'block'});
        break;
    }
  });
});
