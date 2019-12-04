const puzzleEl = document.querySelector('#puzzle')
const guesses = document.querySelector('#guesses')
const status = document.querySelector('#status')

let game1 = new Hangman('Cat', 2)
// let game3 = new Hangman('javascript jersey', 4)

// puzzleEl.textContent = game3.puzzle
// guesses.textContent = game3.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guesses.textContent = game1.statusMessage
    // console.log(game1.puzzle)
    game1.puzzle.split('').forEach((letter) => {
        const span = document.createElement('span')
        span.textContent = letter
        puzzleEl.appendChild(span)
    })
}

const startGame = async () => {
    const {puzzle} = await getPuzzle('2')
    console.log(puzzle)
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('4')
//     .then(({puzzle}) => console.log(puzzle))
//     .catch(err => console.log(err))

// getCurrentCountry()
//     .then(({name}) => console.log(name))
//     .catch(err => console.log(err))


//Synchronous
// const puzzle = getPuzzleSync()
// console.log(puzzle)

// console.log('do something else')




//Asynchronous
// getLocation()
//     .then((country) => {
//         console.log(country)
//         return getCountry(country)
//     })
//     .then(({name}) => console.log(name))
//     .catch(err => console.log(err))




