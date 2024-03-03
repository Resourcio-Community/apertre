const { Queue } = require('bullmq')
const { writeFile } = require('./writeFile')
require('dotenv').config()

const queue = new Queue('apertre', {
    connection: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        username: 'default',
        password: process.env.REDIS_PASSWORD
    }
})


async function fetchLeaderboard() {
    try {
        const job = await queue.getJob('leaderboard')
        if (!job) console.log('Leaderboard not found.')
        else {
            writeFile(job.data)
            console.log('Leaderboard updated.')
        }
    }
    catch (err) {
        console.error(err)
    }
    finally {
        await queue.close()
    }
}

fetchLeaderboard()