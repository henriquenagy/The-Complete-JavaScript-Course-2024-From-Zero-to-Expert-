'use strict';
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess > 20) {
    document.querySelector('.message').textContent =
      'Input numbers lower than 20';
  } else {
    document.querySelector('.message').textContent = 'Try again';
  }
});
