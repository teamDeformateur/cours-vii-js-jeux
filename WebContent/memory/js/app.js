var app = {

  //Array of fruits images (background-position)
  fruits : [
    '0 -100px',
    '0 -200px',
    '0 -300px',
    '0 -400px',
    '0 -500px',
    '0 -600px',
    '0 -700px',
    '0 -800px',
    '0 -900px',
    '0 -1000px',
    '0 -1100px',
    '0 -1200px',
    '0 -1300px',
    '0 -1400px',
  ],

  //A var to count the number of clicked cards
  clickedCard : 0,

  //A var to count the number of discovered pairs
  discoveredPairs : 0,

  init : function () {
    // Generate the cards
    app.createCards();

    //Start the progess-bar
    app.progessBar();

    //Set a timer before ending the game
    //app.timer = setTimeout(app.gameOver, 5000);
    // Listen to the click on the cards
    $('.card').on('click', app.returnCard);
  },

  createCards : function () {
    // Array of cards
    var cards = [];

    // Loops creating 14*2 card items (making the 14 pairs)
    for (var x = 0; x < 14; ++x) {
      for(var y = 0; y < 2; ++y) {

      // Main div for each card
        var card = $('<div>',{
          class: 'card'
        });

      // When the cards are not clicked yet, they display a div element with the class "cache"
        var hiddenCard = $('<div>',{
          class: 'cache'
        });
      // When the cards will be clicked yet, they will display a div element with the class "image"
        var visibleCard = $('<div>',{
          class: 'image'
        })
        // Add to each pair a background-position related to the "x"nth pair they belong to
        .css('background-position', app.fruits[x]);

      // Append the 2 card faces to each main card item
        card.append(hiddenCard);
        card.append(visibleCard);

      // Fill the array "cards" with the 28 items
        cards.push(card);
      }
    }
    //Mix the cards
    app.shuffle(cards);

    // Add the 28 generated cards to the DOM
    $('main').append(cards);
  },

  //Hide "cache" class child-element and show the "image" class child-element of the clicked card
  returnCard : function () {
    //Increment the clickedCard var
    app.clickedCard++;
    //Toggle the display of the card faces and add an auto-incremented id to the images as we can get and compare them in the checkPair() function
    $(this).find('.cache').toggle();
    $(this).find('.image').toggle().attr('id', app.clickedCard);
    //When we have displayed 2 images we compare them
    if (app.clickedCard == 2) {
      app.checkPair();
    }
  },

  checkPair : function () {
    //Reset the clickedCard var for the next pair of cards we will click on
    app.clickedCard = 0;
    //Get the background-position of the first and second image of the pair
    var image1 = $('#1').css('background-position');
    var image2 = $('#2').css('background-position');
    //If they are not the same, we deactivate the click event on all cards and hide the images pair after 2 seconds
    if (image1 !== image2) {
      $('.card').off('click');
      setTimeout(app.hidePair, 2000);
    }
    //If they are the same, we leave the cards displayed and remove their id to use it with the next pair
    else {
      $('#1').attr('id', '');
      $('#2').attr('id', '');
      //Also increment the discoveredPairs var
      app.discoveredPairs++;
      //When we find a new pair, we check if we have found all the pairs
      app.countPairs();
    }
  },

  hidePair : function () {
    $('#1').closest('.card').find('.cache').toggle();
    $('#2').closest('.card').find('.cache').toggle();
    $('#1').toggle().attr('id', '');
    $('#2').toggle().attr('id', '');
    //Reactivate the click event handler to continue playing
    $('.card').on('click', app.returnCard);
  },

  countPairs : function () {
    //If the number of discovered pairs is 14, we win and show a message
    if (app.discoveredPairs == 14) {
      alert('Vous avez gagnéééééé !!!!');
      app.resetGame();
    }
  },
  //Fill the progess bar in red color during 60seconds
  progessBar : function () {
    $('#red-fluid').animate(
      {width : '100%'},
      {duration : 60000,
        easing : 'linear',
        complete : app.gameOver
      }
    );
  },

  gameOver : function () {
    alert('Perdu ! Le délai est écoulé :( Rejouons !');
    app.resetGame();
  },

  resetGame : function () {
    //Reload page to restart a new game and the progess-bar from 0
    window.location.reload(true);
  },

  //Shuffle an array passed in the function
  shuffle : function (array) {
    var counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
      var index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
      counter--;
        // And swap the last element with it
      var temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  },

};

$(app.init);
