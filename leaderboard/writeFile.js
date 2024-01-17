const { writeFileSync } = require("fs")

function writeFile(data) {
    writeFileSync("leaderBoard.json", JSON.stringify(data))
}

module.exports = { writeFile }