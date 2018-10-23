class Game {
  constructor(missed, phrases) {
    this.missed = missed;
    this.phrases = phrases.map((phrase) => new Phrase(phrase))
  }

  getRandomPhrase() {
    const phrase = this.phrases
    const thePhrase = phrase[Math.floor(Math.random() * phrase.length)]
    return thePhrase;
  }

  handleInteraction(target) {
    event.target.disabled = true;
    if (this.phrases[0].checkLetter(target)) {
      event.target.classList.add('chosen')
      this.checkForWin()
    } else {
      this.removeLife()
      event.target.classList.add('wrong')
    }
  }

  removeLife() {
    const hearts = document.querySelectorAll('.tries img');
    this.missed++;
    hearts[hearts.length - this.missed].src = 'images/lostHeart.png';
    if (this.missed === 5) this.gameOver('lost');
  }

  checkForWin() {
    const correctLetters = document.getElementsByClassName('correct')
    const letters = document.getElementsByClassName('letter')
    let correct = 0;
    for (let i = 0; i < correctLetters.length; i++) {
      if (correctLetters) {
        correct++;
        if (correct === (letters.length)) {
          this.gameOver(true)
        }
      }
    }
  }

  gameOver(status) {
    const gameOverMessage = document.querySelector('#game-over-message');
    const overlay = document.querySelector('#overlay');
    document
      .querySelectorAll('.key')
      .forEach(key => key.classList.add('disabled'));
    overlay.classList.remove('start');
    overlay.style.display = 'block';
    if (status === true) {
      overlay.style.display = 'flex';
      overlay.classList.add('win');
      gameOverMessage.textContent = 'You Won!';
    } else {
      overlay.style.display = 'flex';
      overlay.classList.add('lose');
      gameOverMessage.textContent = 'You Lose!';

    }
  }

  startGame() {
    const keys = document.querySelectorAll('.key')
    keys.forEach(key => {
      if (key.classList.contains("wrong")) {
        key.classList.remove("wrong")
        key.disabled = false
      } else if (key.classList.contains("chosen")) {
        key.classList.remove("chosen")
        key.disabled = false
      }
    })

    const newPhrase = this.getRandomPhrase();
    newPhrase.addPhraseToDisplay(newPhrase.phrase);
    this.missed = 0;
  }
}