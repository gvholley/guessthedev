'use strict';

let devArray = [
  'grant',
  'cesca',
  'tak',
  'megu',
  'michi',
  'jiang',
  'lucas',
  'thant',
  'hendi',
  'hiro',
  'xi',
  'jude',
];
let secretDev = devArray[Math.floor(Math.random() * devArray.length)];

let score = 10;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = 'Guess!';
  } else if (guess == secretDev) {
    document.querySelector('.message').textContent = 'YOU WIN!';
    document.querySelector('body').classList.toggle('background-win');
    document.querySelector('.name').style.width = '30rem';
    document.querySelector('.name').textContent = secretDev;
  } else if (
    guess != secretDev &&
    guess.length > secretDev.length &&
    score > 0
  ) {
    document.querySelector('.message').textContent = 'Too long!';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  } else if (
    guess != secretDev &&
    guess.length < secretDev.length &&
    score > 0
  ) {
    document.querySelector('.message').textContent = 'Too short!';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  } else if (
    guess != secretDev &&
    guess.length == secretDev.length &&
    score > 0
  ) {
    document.querySelector('.message').textContent = 'Same length!';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'LOSER!';
  }
});

const reloadPage = document.querySelector('.again');
function reload() {
  reload = location.reload();
}
reloadPage.addEventListener('click', reload, false);
