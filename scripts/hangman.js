class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedletters = []
        this.status = 'playing'
    }

    get puzzle() {
        let puzzle = ''
        this.word.forEach(letter => {
            if (this.guessedletters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }

    makeGuess(guess) {

        guess = guess.toLowerCase()
        const isUnique = !this.guessedletters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        this.statusMessage

        if (this.status !== 'playing') {
            return
        }

        if (isUnique) {
            this.guessedletters = [...this.guessedletters, guess]
        }

        if (isBadGuess && isUnique) {
            this.remainingGuesses--
        }

        return `Remaining guesses ${this.remainingGuesses}`
    }

    get statusMessage() {
        const finished = this.word.every(letter => this.guessedletters.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
            return `Nice try! The word was "${this.word.join('')}"`
        } else if (finished) {
            this.status = 'finished'
            return 'Great work! You guessed the word'
        } else {
            this.status = 'playing'
            return `Guesses left:  ${this.remainingGuesses}`
        }

        // if (this.remainingGuesses > 0 && this.getPuzzle() === this.word.join('')) {
        //     this.status = 'finished'
        // } 
        // else if (this.remainingGuesses <= 0 && this.getPuzzle() !== this.word.join('')) {
        //     this.status = 'failed'
        // } else {
        //     this.status = 'playing'
        // }
    }
}
