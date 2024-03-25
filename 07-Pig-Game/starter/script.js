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

const scores = [0, 0];
score0.textContent = 0;
score1.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
diceImage.classList.add('hidden'); //Inseri a classe hidden em css, depois coloquei aqui

rollDice.addEventListener('click', function () {
  diceImage.classList.remove('hidden');
  let number = Math.trunc(Math.random() * 6) + 1;
  diceImage.src = `img/dice-${number}.png`;
  //Check for rolled 1
  if (number !== 1) {
    currentScore += number;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    //Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
  }
});
