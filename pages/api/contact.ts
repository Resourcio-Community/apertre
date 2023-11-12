import { NextApiRequest, NextApiResponse } from 'next';
import { transporter } from "config/nodemailer";

type ResponseData = {
    message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    if (req.method === 'POST') {
        const { name, email, body } = req.body

        const message = {
            from: process.env.NEXT_PUBLIC_EMAIL,
            to: process.env.NEXT_PUBLIC_EMAIL,
            subject: 'Apertre',
            html: `
                <h2>${name}</h2>
                <h3>${email}</h3>
                <p>${body}</p>
              `
        }

        transporter.sendMail(message)
            .then(() => {
                res.status(200).json({ message: 'Message received.' })
            })
            .catch((error) => {
                res.status(500).json({ message: error })
            })
    }
    else {
        res.status(400).json({ message: 'Route handles POST request.' })
    }
}
