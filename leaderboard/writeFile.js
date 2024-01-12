const fs = require("fs")

const writeFile = (data) => {
    fs.writeFileSync("leaderBoard.json", JSON.stringify(data), (err) => {
        if (err) console.error(err)
        else console.log("File has been written successfully")
    })
}

module.exports = { writeFile }