'use strict';
let rollDice = document.querySelector('.btn--roll');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceImage = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing; //**Chama todas fora da função, para funcionar em todas as funções criadas.

const initGame = function () {
  //**Ai aqui somente poe a variavel sem usar o let
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;

  diceImage.classList.add('hidden'); //Inseri a classe hidden em css, depois coloquei aqui
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
};
initGame();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  //Switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

//Botão Roll Dice
rollDice.addEventListener('click', function () {
  if (playing) {
    diceImage.classList.remove('hidden');
    let number = Math.trunc(Math.random() * 6) + 1;
    diceImage.src = `img/dice-${number}.png`;
    //Check for rolled 1
    if (number !== 1) {
      currentScore += number;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//Botão HOLD
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    // scores[1] = scores[1] + currentScore
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      prompt(
        `The player ${activePlayer + 1} has hit ${
          scores[activePlayer]
        } score. Congrats, you won the game!`
      );
      diceImage.classList.add('hidden');
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

//Botão New Game
btnNew.addEventListener('click', initGame); //Somente chama o initgame, função criada anteriormete que é usada para duas ocasiões: aqui e no botão roll dice
