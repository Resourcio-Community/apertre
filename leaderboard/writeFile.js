const { writeFileSync } = require("fs")

function writeFile(data) {
    writeFileSync("leaderBoard2.0.json", JSON.stringify(data))
}

module.exports = { writeFile }