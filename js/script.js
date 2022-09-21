'use strict';
//create random number and display it

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);
// let guess = document.querySelector('.guess').value;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (score != 0) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔No Number⛔';
      //when players win
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉Correct Number';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.highscore').textContent = score;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('h1').textContent = '🎉--You Win--🎉';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      // when guess is too high
    } else if (guess > secretNumber) {
      if (score > 0) {
        document.querySelector('.message').textContent = '📈Too High';
        score--;
        document.querySelector('.score').textContent = score;
      }
      // when guess is too high
    } else if (guess < secretNumber) {
      if (score > 0) {
        document.querySelector('.message').textContent = '📉Too Low';
        score--;
        document.querySelector('.score').textContent = score;
      }
    }
    // when lost the game
  } else {
    document.querySelector('.message').textContent = '🤡Game Over🤡';
    document.querySelector('.guess').value = '';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#463483';
  document.querySelector('.number').style.width = '15rem';
});
