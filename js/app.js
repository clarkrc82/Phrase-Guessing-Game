// Runs resetDisplay function on start game button
document.getElementById('btn__reset').addEventListener('click', resetDisplay);

// Event listener for keyboard buttons
const qwerty = document.getElementsByClassName('key');
for (let i = 0; i < qwerty.length; i++) {
  qwerty[i].addEventListener('click', markButton)
};

// The phrases to be used
const phrase = [
  'tis but a scratch',
  'you win',
  'you lose',
  'oop',
  'treehouse',
  'unit four',
  'is it over yet'
];

// Hides the start screen overlay, resets buttons and hearts
function resetDisplay() {
  document.querySelector('#overlay').style.display = 'none'
  const overlay = document.querySelector('#overlay')
  const hearts = document.querySelectorAll('.tries img');
  hearts.forEach(heart => heart.src = 'images/liveHeart.png');
  overlay.classList.remove('win')
  overlay.classList.remove('lose')
  randomPhrase.startGame()
};

function markButton() {
  let guess = event.target.textContent
  randomPhrase.handleInteraction(guess)
};

const randomPhrase = new Game(0, phrase);