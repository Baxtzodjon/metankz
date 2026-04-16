import { NextResponse } from "next/server";
import { sendMail } from "@/app/lib/mailer";
import { knowFormTemplate } from "@/app/lib/templates/knowForm";
import { autoReplyTemplate } from "@/app/lib/templates/autoReply";
import { validateContactPageForm, validateKnowForm } from "@/app/lib/validators";
import { rateLimit } from "@/app/lib/rateLimit";
import { canSendAutoReply } from "@/app/lib/autoReplyGuard";
import { contactFormTemplate } from "@/app/lib/templates/contact";
import { contactPageFormTemplate } from "@/app/lib/templates/contactPageForm";
import { validateContactForm } from "@/app/lib/validators";
import { subscribeEmail } from "@/app/lib/newsletter";

export async function POST(req: Request) {
    try {
        const ip =
            req.headers.get("x-forwarded-for") ||
            req.headers.get("x-real-ip") ||
            "unknown";

        if (!rateLimit(ip)) {
            return NextResponse.json(
                { success: false, message: "Too many requests" },
                { status: 429 }
            );
        }

        const body = await req.json();
        const { formType, data, honeypot } = body;

        // Honeypot
        if (honeypot) {
            return NextResponse.json({ success: true });
        }

        if (formType === "knowForm") {
            if (!validateKnowForm(data)) {
                return NextResponse.json(
                    { success: false, message: "Invalid data" },
                    { status: 400 }
                );
            }

            // письмо админу
            await sendMail({
                to: process.env.EMAIL_FROM!,
                subject: "Вопрос от клиента с сайта", // Новая заявка с сайта
                html: knowFormTemplate(data),
                replyTo: data.email,
            });
        }

        if (formType === "contactForm") {
            if (!validateContactForm(data)) {
                return NextResponse.json(
                    { success: false, message: "Invalid data" },
                    { status: 400 }
                );
            }

            // письмо админу
            await sendMail({
                to: process.env.EMAIL_FROM!,
                subject: "Быстрый запрос с сайта", // Contact Form
                html: contactFormTemplate(data),
                replyTo: data.email,
            });

            // 🔥 автоответ клиенту
            if (data.email && canSendAutoReply(data.email)) {
                await sendMail({
                    to: data.email,
                    subject: "Мы получили вашу заявку",
                    html: autoReplyTemplate({ name: data.name }),
                });
            }
        }

        if (formType === "contactPageForm") {
            if (!validateContactPageForm(data)) {
                return NextResponse.json(
                    { success: false, message: "Invalid data" },
                    { status: 400 }
                );
            }

            const locale = body.locale || "ru";

            await sendMail({
                to: process.env.EMAIL_FROM!,
                subject: "Запрос с контактной страницы сайта", // Новая заявка с Contact Page
                html: contactPageFormTemplate(data, locale),
                replyTo: data.email,
            });

            // 🔥 автоответ клиенту
            if (data.email && canSendAutoReply(data.email)) {
                await sendMail({
                    to: data.email,
                    subject: "Мы получили вашу заявку",
                    html: autoReplyTemplate({ name: data.name }),
                });
            }
        }

        if (formType === "subscribeForm") {
            if (!data?.email || typeof data.email !== "string") {
                return NextResponse.json(
                    { success: false, message: "Invalid email" },
                    { status: 400 }
                );
            }

            const { isNew } = await subscribeEmail(data.email);

            if (!isNew) {
                return NextResponse.json({
                    success: false,
                    message: "ALREADY_SUBSCRIBED",
                });
            }

            // письмо админу
            await sendMail({
                to: process.env.EMAIL_FROM!,
                subject: "Новая подписка на рассылку",
                html: `
                    <p><b>Email:</b> ${data.email}</p>
                    <p><b>Источник:</b> Форма подписки на новости сайта</p>
                `,
            });

            // автоответ подписчику
            if (canSendAutoReply(data.email)) {
                await sendMail({
                    to: data.email,
                    subject: "Вы подписались на рассылку Metan KZ",
                    html: `
                        <h2>Спасибо за подписку!</h2>
                        <p>Теперь вы будете получать новости и обновления от <b>Metan KZ</b>.</p>
                    `,
                });
            }
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("FORM SUBMIT ERROR:", error);
        return NextResponse.json(
            { success: false },
            { status: 500 }
        );
    }
}
