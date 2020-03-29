const fs = require("fs")

/*** synchronous reading ***/
console.log("started reading files")
const files = fs.readdirSync("./assets")
console.log("complete")
console.log(files)

/*** ASYNC reading ***/
fs.readdir("./assets", (err, files) => {
    if (err) {
        throw err
    }
    console.log("complete")
    console.log(files)
});

console.log("started reading files")