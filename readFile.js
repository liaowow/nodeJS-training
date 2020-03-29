const fs = require("fs")

/*** synchronous reading ***/
// const text = fs.readFileSync("./assets/Readme.md", "UTF-8")
// console.log(text)

/*** ASYNC reading ***/
fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
    if (err) {
        console.log("an error has occurred:", err.message)
        process.exit()
    }
    console.log("file contents read")
    console.log(text)
})