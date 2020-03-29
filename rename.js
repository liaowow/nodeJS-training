const fs = require("fs")

// Task 1: rename a file
fs.renameSync("./assets/advice.json", "./assets/slip.json")

// Task 2: move a file
fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if (err) {
        throw err
    }
})

// Task 2: wait 4 seconds and remove a file
setTimeout(() => {
    fs.unlinkSync("./assets/Readme.md")
}, 4000)