import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require("nodemailer");

export async function POST(req: Request) {
    try {
        const { name, phone, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"MetanKZ Site" <${process.env.EMAIL_FROM}>`,
            to: process.env.EMAIL_FROM,
            subject: "New form request",
            html: `
                <h3>New request from site</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Phone:</b> ${phone}</p>
                <p><b>Message:</b> ${message || "-"}</p>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}


/* import { NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, phone, message } = body;

        if (!name || !phone) {
            return NextResponse.json(
                { error: "Invalid data" },
                { status: 400 }
            );
        }

        // 👇 ДОБАВЬ ВРЕМЕННО ВОТ ЭТО
        console.log("EMAILJS ENV:", {
            service: process.env.EMAILJS_SERVICE_ID,
            publicKey: !!process.env.EMAILJS_PUBLIC_KEY,
            privateKey: !!process.env.EMAILJS_PRIVATE_KEY,
        });

        await emailjs.send(
            process.env.EMAILJS_SERVICE_ID!,
            process.env.EMAILJS_TEMPLATE_ID!,
            {
                name,
                phone,
                message: message || "—",
            },
            {
                publicKey: process.env.EMAILJS_PUBLIC_KEY!,
                privateKey: process.env.EMAILJS_PRIVATE_KEY!,
            }
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
 */

/* import { NextResponse } from "next/server";
const nodemailer = require("nodemailer")

export async function POST(request: Request) {
    const body = await request.json();

    const message = {
        from: `ScanA Team <${process.env.EMAIL_FROM}`,
        to: body.email,
        subject: "Using NodeMailer With Next Api",
        html: `
        <p>
            Hello ${body.name},
        </p>

        <p>
            This is a test email sent using NodeMailer with Next Api
        </p>
        `,

        headers: {
            "X-Entity-Ref-ID": "newemail",
        },
    };
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.PASS,
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
        },
    });

    console.log(JSON.stringify(body))

    try {
        await transporter.sendMail(message);
        return NextResponse.json({ message: "Email Send Successfully" }, { status: 200 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
} */
