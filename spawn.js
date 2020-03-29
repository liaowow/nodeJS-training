const cp = require("child_process")

const questionApp = cp.spawn("node", ["questions.js"])

questionApp.stdin.write("Annie \n")
questionApp.stdin.write("NYC \n")
questionApp.stdin.write("Yup \n")

questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`)
})

questionApp.on("close", () => {
    console.log("question app process exited.")
})