const app = () => {
  var cards = document.querySelectorAll('.card');
  var openCards = [];

//////Flip card
  cards.forEach(function (card) {
    card.addEventListener('click', function() {

      if (openCards.length <= 2 ) {
        if(openCards.length < 2) {
          if (openCards.length === 1 && openCards[0].id === card.id) {
            alert('same card clicked twice');
          } else if (openCards.length === 1 && openCards[0].id !== card.id || openCards.length === 0) {
            card.classList.add('open');
            openCards.push(card);
            console.log('new card added to array');
          }
        } else if(openCards.length === 2 && openCards[0].className !== openCards[1].className) {
          console.log('not a match');
          openCards.forEach(function (openCard) {
            openCard.classList.remove('open');
            openCards = [];
          });
        } else if (openCards.length === 2 && openCards[0].className == openCards[1].className) {
          openCards.forEach(function (matchedCard) {
            matchedCard.classList.remove('open');
            matchedCard.classList.add('matched');
            openCards = [];
            console.log('its a match');
          });
        }
      }
    });
  });







};
