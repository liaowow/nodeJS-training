const fs = require("fs")

fs.renameSync("./storage-files", "./storage")

/*** remove directory asynchronously ***/

// remove each file in the directory
fs.readdirSync("./storage").forEach(file => {
    fs.unlinkSync(`./storage/${file}`)
})

// remove directory (must remove all files in the directory first)
fs.rmdir("./storage", err => {
    if (err) {
        throw err
    }
    console.log("./storage directory removed.")
})