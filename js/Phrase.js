class Phrase {
  constructor(phrase) {
    this.phrase = phrase
  }

/**
 * adds placeholders to display for each letter of the phrase
 */
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

/**
 * checks to see if letter selected is in phrase
 * returns boolian if it finds a letter in the phraseArray that matches the key pressed, it returns true; else false.
 */
  checkLetter(target) {
    let letters = [].slice.call(document.querySelectorAll(".letter"))
    for (let x = 0; x < letters.length; x++) {
      if (letters[x].textContent === target) {
        this.showMatchedLetter(target)
        return true;
      }
    }
  }

/**
 * reveals letter(s) on board that match
 * gets any element that has a class with the letter from the key event
 * cycles through those li elements and changes the class from hide to show
 */
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