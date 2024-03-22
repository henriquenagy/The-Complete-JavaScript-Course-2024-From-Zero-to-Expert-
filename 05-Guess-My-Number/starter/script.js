'use strict';
let score = 20;
let highScore = 0;
let clickCount = 0; // Variável para contar os cliques
const clicked = document.querySelector('.check');

clicked.addEventListener('click', function () {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  const guess = Number(document.querySelector('.guess').value);
  //Take the text to change after
  const highScoreText = document.querySelector('.highscore');
  const messagene = document.querySelector('.message');
  const changeScore = document.querySelector('.score');
  const questionNumber = document.querySelector('.number');
  let body = window.document.body;
  //Only to check the numbers inserted and the aleatory number on console
  console.log(`Aleatory = ${secretNumber} - Inputed ${guess}`);

  if (score > 1) {
    questionNumber.textContent = '?';
    if (!guess || guess > 20 || guess < 0 || isNaN(guess)) {
      messagene.textContent = '⛔ NUMBER NOT ALLOWED';
      body.style.backgroundColor = '#1f1f1f';
    } else if (guess === secretNumber) {
      body.style.backgroundColor = '#60b347';
      questionNumber.textContent = secretNumber;
      messagene.textContent = '🏆Congrats! You won!!';
      if (score > highScore) {
        highScore = score;
      }
      highScoreText.textContent = highScore;
    } else if (guess > secretNumber) {
      messagene.textContent = '📈 Too high';
      score--;
      changeScore.textContent = score;
      body.style.backgroundColor = '#1f1f1f';
    } else if (guess < secretNumber) {
      messagene.textContent = '📉 Too low';
      score--;
      changeScore.textContent = score;
      body.style.backgroundColor = '#1f1f1f';
    }
  } else {
    messagene.textContent = `😥 End of the game.You scored ${highScore}. Click on the top left corner button to try again!`;
    body.style.backgroundColor = '#1f1f1f';
  }

  //RESET when click button Again!
  const tryAgain = document.querySelector('.again');
  const limpar = document.querySelector('.guess');
  tryAgain.addEventListener('click', function () {
    score = 20;
    //highScore = 0;
    //highScoreText.textContent = highScore;
    limpar.value = ''; // Limpa o valor do input
    changeScore.textContent = score;
    body.style.backgroundColor = '#1f1f1f';
    messagene.textContent = 'Start guessing...';
    questionNumber.textContent = '?';
  });
});
