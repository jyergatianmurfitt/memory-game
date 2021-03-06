const app = () => {
  var cards = document.querySelectorAll('.card');
  var openCards = [];
  var tryCount = 0;
  var matchCount = 0;

//Display scoreboard count
  var tryCountDisplay = document.querySelector('.tryCount');
  tryCountDisplay.textContent = tryCount;
  var matchCountDisplay = document.querySelector('.matchCount');
  matchCountDisplay.textContent = matchCount;

//////Flip card
  cards.forEach(function (card) {
    card.addEventListener('click', function() {

      if (openCards.length <= 2 ) {
        if(openCards.length < 2) {
          //Check if same card clicked twice:
          if (openCards.length === 1 && openCards[0].id === card.id) {
            alert('Same card clicked twice');
          //Chech if matched card was clicked:
          } else if (card.classList.contains('matched')) {
            alert('Card already matched');
          //Open new card
          }else if (openCards.length === 1 && openCards[0].id !== card.id || openCards.length === 0) {
            card.classList.add('open');
            openCards.push(card);
            tryCount++
            //Close chosen cards after 2nd card choice
            if(openCards.length === 2 && openCards[0].className !== openCards[1].className) {
              setTimeout(function() {
                openCards.forEach(function (openCard) {
                  openCard.classList.remove('open');
                  openCards = [];
                });
              }, 1000);
            //Match cards
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

      //Update scoreboard count
      matchCountDisplay.textContent = matchCount / 2;
      if(tryCount % 2 == 0) {
        tryCountDisplay.textContent = tryCount / 2;
      }


      //Win page layover
      var winMsg = 'Congratulations! It only took you ' + tryCount / 2 + " tries.";
      if (matchCount == 12) {
        var winMsg = document.getElementById('winMsg');
        var overlay = document.getElementById('overlay');
        var winParrot = document.getElementById('winParrot');
        var win1 = document.getElementById('win1');
        var win2 = document.getElementById('win2');

        setTimeout(function(){
            winMsg.style.display = 'block';
            overlay.style.display = 'block';
            overlay.style.opacity = '0.8';
        }, 0);
        setTimeout(function(){
            winMsg.style.transform = 'scale(1)';
        }, 10);
        setTimeout(function(){
            win1.style.display = 'none';
            win2.style.display = 'block';
        }, 2500);


        if(window.innerWidth > 1200) {
          setTimeout(function(){
              winMsg.style.transform = 'scale(.8)';
              winParrot.style.transform = 'translateX(60%)';
          }, 500);
        } else if (window.innerWidth > 780 && window.innerWidth < 1200) {
          setTimeout(function(){
              winMsg.style.transform = 'scale(.8)';
              winParrot.style.transform = 'translateX(40%)';
          }, 500);
        } else {
          setTimeout(function(){
              winMsg.style.transform = 'scale(.8)';
              winParrot.style.transform = 'translateX(-20%)';
          }, 500);
        }
      }
    });
  });










};
