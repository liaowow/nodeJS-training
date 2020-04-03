let secretNum = Math.floor(Math.random() * 10 + 1).toString()

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

module.exports = {
    guessNumber: (input) => {
        if (input === "quit") {
            process.stdout.write(`OK, see ya 👋\n`)
            process.exit()
        }

        if (!numbers.includes(input)) {
            process.stdout.write(`Type a number between 1 and 10 (inclusive):\n`)
        } else if (input === secretNum) {
            process.stdout.write(`Yay, you got it! 🎉\n`)
            process.exit()
        } else if (Number(input) > Number(secretNum)) {
            process.stdout.write(`Nope, guess lower:\n`)
        }else {
            process.stdout.write(`Nope, guess higher:\n`)
        }
    } 
}
