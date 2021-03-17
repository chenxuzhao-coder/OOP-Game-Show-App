class Game {
    constructor(missed = 0, phrases, activePhrase = null) {
        this.missed = missed
        this.phrases = phrases //array
        this.activePhrase = activePhrase
    }

    startGame() {
        //initialization
        const phraseElement = document.querySelector('#phrase ul')
        const letter1 = document.querySelectorAll('.letter')
        const space = document.querySelectorAll('.space')
        for (let i = 0; i < letter1.length; i++)
            phraseElement.removeChild(letter1[i])
        for (let i = 0; i < space.length; i++)
            phraseElement.removeChild(space[i])
        const button = document.querySelectorAll('.key')
        for (let i = 0; i < button.length; i++) {
            button[i].className = 'key'
            button[i].disabled = false
        }
        const heart = document.querySelectorAll('img')
        for (let i = 0; i < heart.length; i++)
            heart[i].src = 'images/liveHeart.png'
        this.missed = 0

        //start a new game
        console.log('startGame')
        const overlay = document.querySelector('#overlay')
        overlay.style.display = 'none'
        const randomPhrase = this.getRandomPhrase()
        this.activePhrase = randomPhrase
        const Phras = new Phrase(this.activePhrase)
        Phras.addPhaseToDisplay()
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 5)]
    }

    handleInteraction(element) {
        element.disabled = true
        const Phras = new Phrase(this.activePhrase)
        if (!Phras.checkLetter(element.textContent)) {
            element.classList.add('wrong')
            this.removeLife()
        } else {
            element.classList.add('chosen')
            Phras.showMatchedLetter(element.textContent)
            if (this.checkForWin())
                this.gameOver()
        }
    }

    removeLife() {
        if (this.missed < 4) {
            document.querySelectorAll('img')[this.missed].src = 'images/lostHeart.png'
            this.missed++
        } else {
            this.gameOver()
        }
    }

    checkForWin() {
        let num = 0
        const letter = this.activePhrase.split('')
        if ((document.querySelectorAll('.show').length + document.querySelectorAll('.space').length) == letter.length) {
            return true
        }
    }

    gameOver() {
        const overlay = document.querySelector('#overlay')
        overlay.style.display = 'inline'
        const gameOverMessage = document.querySelector('#game-over-message')
        if (this.checkForWin()) {
            gameOverMessage.textContent = 'You win !'
            overlay.className = 'win'
        } else {
            console.log(this.checkForWin())
            gameOverMessage.textContent = 'Sorry, you lose the game'
            overlay.className = 'lose'
        }
    }

}