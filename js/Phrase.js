class Phrase {
  constructor(phrase) {
    this.phrase = phrase
  }

  addPhraseToDisplay() {
    const phraseSplit = this.phrase.split("");
    let addUL = '<ul>'
    for (let x = 0; x < phraseSplit.length; x++) {
      if (phraseSplit[x] !== " ") {
        addUL += `<li class="hide letter ${phraseSplit[x]}">${phraseSplit[x]}</li>`
      } else {
        addUL += `<li class="space"> </li>`
      }
    }
    addUL += '</ul>'
    const theBoard = document.querySelector('#phrase')
    theBoard.innerHTML = addUL
  }

  checkLetter(target) {
    let letters = [].slice.call(document.querySelectorAll(".letter"))
    for (let x = 0; x < letters.length; x++) {
      if (letters[x].textContent === target) {
        this.showMatchedLetter(target)
        return true;
      }
    }
  }

  showMatchedLetter(target) {
    let letters = document.querySelectorAll(".letter")
    letters.forEach(letter => {
      if (letter.textContent === target) {
        letter.style.color = 'black';
        letter.classList.add('correct')
      }
    })
  }
}