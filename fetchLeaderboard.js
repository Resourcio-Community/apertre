const axios = require('axios')
const fs = require('fs')

async function fetchLeaderboard() {
    const { data } = await axios.get(process.env.LEADERBOARD_URL)

    fs.writeFileSync('leaderBoard.json', JSON.stringify(data.data), (err) => {
        if (err) throw err
        console.log('File written')
    })
}

fetchLeaderboard()
