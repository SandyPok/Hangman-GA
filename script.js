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

   function categoryPhrase() {
      console.log("Category");
   }

   function categorySongs() {
      console.log("Songs");
   }

   function drawWord(getWord) {
      getWord.split('').forEach(function(element) {
         $('#generateWord').append(openingTag + element.toUpperCase() + closingTag);
      });

      for (var j = 1; j <= getWord.length; j++) {
         $('div .letter-holder:nth-child(' + j + ')').attr('data-letter', getWord[j-1]);

      }
        $('.letter').hide();
   }

   function drawAlphabet() {
      var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
         "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

      alphabet.forEach(function(element) {
         $('#alphabet').append('<div class="letter">' + element + '</div>');
      });
      $('#alphabet .letter').on('click', function(e) {
        let match = false;
        for (let l in playerWordInput) {
          if($(this).text().toUpperCase() === playerWordInput[l].toUpperCase()) {
           $('span.letter').eq(l).show();
           match = true
        }
      }
      if(!match) {
        numberOfTries--;
        $(".numberOfTries").html(numberOfTries);
      }
      });
   }

   function drawScore() {
      $('.numberOfTries').append(document.createTextNode(numberOfTries));
   }

   $('#getWord').on('click', function(e) {
      e.preventDefault();
      //Clean up previous game
      $('#generateWord').empty();
      $('.numberOfTries').empty();

      playerWordInput = $('#word').val();

      // Display the multiplayer div board
      $('#multiplayerBoard').css({"display":"block"});
      clearBoard();

      //Clear the input box
      $('#word').val("");

      //Draws the word
      drawWord(playerWordInput);
      drawScore();
      drawAlphabet();
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
   let playerWordInput;
   console.log(playerWordInput);
   /*
   $('#alphabet .letter').on('click', function(e) {
     for (let l in playerWordInput) {
       if($(this).text()=== playerWordInput[l]) {
        $('span.letter').eq(l).show();
     }
        }
   });
   */
});
