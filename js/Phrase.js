class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase()
    }

    //this method make phrase to display in hide style
    addPhraseToDisplay() {
        const letter = this.phrase.split('')
        const phraseElement = document.querySelector('#phrase ul')
        for (let i = 0; i < letter.length; i++) {
            const child = document.createElement('li')
            child.innerHTML = letter[i]
            child.className = `hide letter ${letter[i]}`
            phraseElement.appendChild(child)
            if (letter[i] === ' ')
                child.className = `space`
        }
    }

    //this method check whether the input letter match the exist letter
    checkLetter(inputLetter) {
        const letter = this.phrase.split('')
        for (let i = 0; i < letter.length; i++) {
            if (inputLetter === letter[i])
                return true
        }
    }

    //this method show the checked letter
    showMatchedLetter(inputLetter) {
        const collection = document.getElementsByClassName(inputLetter)
        for (let i = 0; i < collection.length; i++) {
            collection[i].classList.add('show')
            collection[i].classList.remove('hide')
        }
    }
}