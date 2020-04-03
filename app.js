/*** Practice with Number Guessing Game ***/
let { guessNumber } = require("./numGame")

process.stdout.write(`I am holding a number from 1 through 10. Guess which number I have? \n(Write \"quit\" to exit game)\n`)

let playGame = (userInput) => {
    let input = userInput.toString().trim()
    guessNumber(input)
}

process.stdin.on('data', playGame)


/*** Practice with Counter ***/
// const { inc, dec, getCount } = require("./myModule")

// inc()
// inc()
// inc()
// dec()

// console.log(getCount())