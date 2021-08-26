const app = () => {
  var cards = document.querySelectorAll('.card');
  var openCards = [];
  var tryCount = 0;
  var matchCount = 0;

  var tryCountDisplay = document.querySelector('.tryCount');
  tryCountDisplay.textContent = tryCount;
  var matchCountDisplay = document.querySelector('.matchCount');
  matchCountDisplay.textContent = matchCount;

//////Flip card
  cards.forEach(function (card) {
    card.addEventListener('click', function() {

      if (openCards.length <= 2 ) {
        if(openCards.length < 2) {
          if (openCards.length === 1 && openCards[0].id === card.id) {
            alert('Same card clicked twice');
          } else if (card.classList.contains('matched')) {
            alert('Card already matched');
          }else if (openCards.length === 1 && openCards[0].id !== card.id || openCards.length === 0) {
            card.classList.add('open');
            openCards.push(card);
            tryCount++
            if(openCards.length === 2 && openCards[0].className !== openCards[1].className) {
              setTimeout(function() {
                openCards.forEach(function (openCard) {
                  openCard.classList.remove('open');
                  openCards = [];
                });
              }, 1000);
            } else if (openCards.length === 2 && openCards[0].className == openCards[1].className) {
              openCards.forEach(function (matchedCard) {
                matchedCard.classList.remove('open');
                matchedCard.classList.add('matched');
                openCards = [];
                matchCount++;
              });
            }
          }
        }
      }
      matchCountDisplay.textContent = matchCount / 2;
      if(tryCount % 2 == 0) {
        tryCountDisplay.textContent = tryCount / 2;
      }

      var winMsg = 'Congratulations! It only took you ' + tryCount / 2 + " tries.";
      if (matchCount == 12) {
        alert(winMsg);
      }
    });
  });










};
