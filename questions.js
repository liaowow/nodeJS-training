const collectAnswers = require("./lib/collectAnswers")

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "How are you liking Node.js? "
]

const answerEvents = collectAnswers(questions)

answerEvents.on("answer", answer => {
    console.log(`question answered: ${answer}`)
})

answerEvents.on("complete", ans => {
    console.log("Thanks for answering!")
    console.log("Here are your answers: ", ans)
    // process.exit()
})

answerEvents.on("complete", () => process.exit())