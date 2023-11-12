import nodemailer from 'nodemailer'

const email = process.env.NEXT_PUBLIC_EMAIL
const pass = process.env.NEXT_PUBLIC_PASSWORD

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass
    }
})