

const correctNumber = Math.floor(Math.random() * 15)

let guess = false
let totalGuesses = 0
let gamerGuess = 0

function evalGuess() {
    totalGuesses +=1
    gamerGuess = document.querySelector('#guess').nodeValue

    const feedback = document.querySelector('#feedback')
}