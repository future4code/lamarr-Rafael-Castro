import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    }
})

export default transporter