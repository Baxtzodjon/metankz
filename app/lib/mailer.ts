import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
    },
});

export async function sendMail(options: {
    to: string | string[];
    subject: string;
    html: string;
    replyTo?: string;
}) {
    return transporter.sendMail({
        from: `"Metan KZ" <${process.env.EMAIL_FROM}>`,
        ...options,
    });
}
