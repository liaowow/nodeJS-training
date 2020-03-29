const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("How do you like Node.js? ", ans => {
    console.log(`Your answer: ${ans}`)
})