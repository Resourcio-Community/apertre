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
    const job = await queue.getJob('leaderboard')
    if (!job) process.exit(1)
    writeFile(job.data)
    process.exit()
}

fetchLeaderboard()