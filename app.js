/*** Practice with Number Guessing Game ***/
let { guessNumber } = require("./numGame")

process.stdout.write(`I am holding a number from 1 through 10. Guess which number I have? \n(Write \"quit\" to exit game)\n`)

let playGame = (userInput) => {
    // console.log("userInput before converting to string: ", typeof userInput)
    /** 
    The userInput we receive is an instance of the Node Buffer class (i.e. an object), so we convert it to a string before printing.
    In Node.js, Buffer objects are used to represent binary data in the form of a sequence of bytes.
    **/
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