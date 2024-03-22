'use strict';
let rollDice = document.querySelector('.btn--roll');
let diceNumberRoll = document.querySelector('#current--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceImage = document.querySelector('.dice');

score0.textContent = 0;
score1.textContent = 0;
diceImage.classList.add('hidden'); //Inseri a classe hidden em css, depois coloquei aqui

rollDice.addEventListener('click', function () {
  let number = Math.trunc(Math.random() * 6) + 1;
  diceNumberRoll.textContent = number;
});
