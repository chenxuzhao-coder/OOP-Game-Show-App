const game = new Game(0, ['how are you', 'fine thank you', 'and you', 'what is up', 'not bad uh'], null)
const startButton = document.querySelector('#btn__reset')

startButton.addEventListener('click', e => {
    game.startGame()
    const button = document.querySelectorAll('.key')
    for (let i = 0; i < button.length; i++) {
        button[i].id = button[i].innerHTML
    }
})

const qwerty = document.querySelector('#qwerty')
qwerty.addEventListener('click', e => {
    if (e.target.className == 'key')
        game.handleInteraction(e.target)
})


document.addEventListener('keyup', e => {
    const key = document.getElementById(e.key)
    game.handleInteraction(key)
});