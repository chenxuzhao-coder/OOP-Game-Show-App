const startButton = document.querySelector('#btn__reset')
const qwerty = document.querySelector('#qwerty')
let game = null
//make start button work
startButton.addEventListener('click', e => {
    game = new Game(0, [new Phrase('how are you'), new Phrase('fine thank you'), new Phrase('and you')], null)
    game.startGame()
    const button = document.querySelectorAll('.key')
    for (let i = 0; i < button.length; i++) {
        button[i].id = button[i].innerHTML
    }
})
//make the keyboard work
qwerty.addEventListener('click', e => {
    if (e.target.className == 'key') {
        game.handleInteraction(e.target)
    }
})
//user can use physical keyboard to input letter
document.addEventListener('keyup', e => {
    const key = document.getElementById(e.key)
    game.handleInteraction(key)
});



