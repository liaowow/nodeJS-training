const fs = require("fs")
const slipData = require("./assets/advice.json")

slipData.slip.forEach(s => {
    fs.appendFile("./storage-files/slip.md", `${s.advice} \n`, err => {
        if (err) {
            throw err
        }
    })
})