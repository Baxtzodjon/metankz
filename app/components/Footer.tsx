"use client"

import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { socialLinks } from "../data/socialLinks";
import { footerLinks } from "../data/footerLinks";
import { contactInfo } from "../data/contactInfo";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { RegisterOptions } from "react-hook-form";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { useState } from "react";

const Footer = () => {
    const t = useTranslations("Footer");
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ mode: "onChange" });

    const onSubmit = async (data: RegisterOptions) => {
        if (isLoading) return;

        setIsLoading(true);
        const toastId = toast.loading(t("StatusNewsletter.sending"));

        try {
            const res = await fetch("/api/forms/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    formType: "subscribeForm",
                    data,
                    honeypot: "",
                }),
            });

            const result = await res.json();

            // ⚡ Новая проверка для KV
            if (!res.ok) throw new Error("Failed to send");

            if (result.message === "ALREADY_SUBSCRIBED") {
                toast.error(t("StatusNewsletter.alreadySubscribed"), { id: toastId });
                return; // ✅ останавливаем выполнение, письмо не шлём
            }

            if (!result.success) throw new Error("Failed to send");

            toast.success(t("StatusNewsletter.success"), { id: toastId });
            reset();
        } catch (error) {
            console.error("❌ Email error:", error);
            toast.error(t("StatusNewsletter.error"), { id: toastId });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.footer
            className="w-full h-full bg-ebony"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >

            <div className="container py-20 flex flex-col gap-[49px]">

                <div className="flex items-start lg:items-center justify-between flex-col md:flex-row md:gap-[30px]">

                    <div className="flex flex-col gap-6 mb-8">

                        <motion.div
                            className="flex items-center flex-wrap gap-7 sm:gap-10 lg:gap-[60px]"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >

                            <Link href="/"><Image src="/icons/logo.png" alt="Logo" width={72} height={24} /></Link>

                            <div className="flex items-center gap-4">

                                {socialLinks.map(({ href, icon: Icon, label }) => (
                                    <a key={href} href={href} target="_blank" aria-label={label}>

                                        <Icon className="w-6 h-6 text-white opacity-60 transition-default hover:text-white hover:opacity-100" />

                                    </a>
                                ))}

                            </div>

                        </motion.div>

                        <motion.p
                            className="w-full max-w-[493px] text-white/60 text-sm font-normal"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >{t("description")}</motion.p>

                    </div>

                    <motion.form
                        className="flex flex-col gap-6"
                        onSubmit={handleSubmit(onSubmit)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >

                        <h4 className="text-white text-2xl font-bold">{t("stayInTouch")}</h4>

                        <div className="flex flex-col gap-4">

                            <div className="flex items-center gap-0">

                                <div className="flex flex-col">

                                    <input
                                        type={"email"}
                                        {...register("email", { required: t("form.emailRequired"), pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t("form.emailInvalid") } })} placeholder={t("form.placeholder")} autoComplete="email" className={`max-w-full w-full sm:w-[364px] md:w-full lg:w-[364px] h-11 bg-[#FFFFFF1F] border ${errors["email"] ? "border-error" : "border-[#FFFFFF33]"
                                            } rounded-l pl-4 outline-none focus:outline-2 focus:outline-solid focus:outline-primary focus:outline-offset-2 text-light text-sm font-normal`} />

                                    {errors["email"] && (
                                        <span className="text-error text-xs mt-1">
                                            {(errors["email"]?.message as string) || ""}
                                        </span>
                                    )}

                                </div>

                                <div className="flex flex-col">

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`px-[19px] py-[11px] rounded-tr-[4px] rounded-br-[4px] text-white text-sm font-bold uppercase transition-default
                                            ${isLoading ? "bg-storm cursor-not-allowed" : "bg-primary hover:bg-active"}
                                            `}
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg
                                                    className="h-4 w-4 animate-spin"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <defs>
                                                        <linearGradient id="spinner-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                                                            <stop offset="100%" stopColor="white" />
                                                        </linearGradient>
                                                    </defs>

                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="url(#spinner-gradient)"
                                                        strokeWidth="4"
                                                        strokeLinecap="round"
                                                    />
                                                </svg>

                                                {t("StatusNewsletter.sendingShort")}

                                            </span>
                                        ) : (
                                            t("form.subscribe")
                                        )}
                                    </button>

                                    {errors["email"] && (
                                        <span className="text-error text-xs mt-1 overflow-hidden pointer-events-none opacity-0">
                                            {/* {(errors["email"]?.message as string) || ""} */}
                                            {/* Enter a valid email address */}
                                            Email is required
                                        </span>
                                    )}

                                </div>

                            </div>

                            <p className="max-w-[480px] text-white text-xs font-normal leading-[150%] opacity-60">{t("form.note")}</p>

                        </div>

                    </motion.form>

                </div>

                <motion.div
                    className="flex items-start lg:items-center gap-10 md:gap-8 lg:gap-[125px] flex-col sm:flex-row"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >

                    <div className="flex flex-col gap-[13px]">

                        <h6 className="text-white text-base font-bold uppercase">{t("headOffice.title")}</h6>

                        <div className="flex flex-col gap-1">

                            {contactInfo.map(({ type, labelKey, value, href }) => {
                                const isEmail = type === "email";
                                const localizedHref = isEmail
                                    ? (() => {
                                        const email = href?.split("?")[0].replace("mailto:", "");
                                        const subject = encodeURIComponent(t("headOffice.emailSubject"));
                                        const body = encodeURIComponent(t("headOffice.emailBody"));
                                        return `mailto:${email}?subject=${subject}&body=${body}`;
                                    })()
                                    : href;

                                return (
                                    <span key={type} className="flex gap-1">
                                        <span className="text-white text-base font-normal">{t(`headOffice.${labelKey}`)}</span>

                                        {type === "address" ? (
                                            <address className="sm:max-w-[120px] md:max-w-none text-white text-base font-normal not-italic opacity-60">
                                                {t(`headOffice.${value}`)}
                                            </address>
                                        ) : (
                                            <a
                                                href={localizedHref}
                                                className="text-white text-base font-normal opacity-60 transition-default hover:text-white hover:opacity-100"
                                            >
                                                {value}
                                            </a>
                                        )}
                                    </span>
                                )
                            })}

                        </div>

                    </div>

                    <div className="flex gap-8 lg:gap-[125px]">

                        {footerLinks.map(({ titleKey, links }) => (
                            <div key={titleKey} className="flex flex-col gap-[13px]">

                                <h6 className="text-white text-base font-bold uppercase">{t(`links.${titleKey}`)}</h6>

                                <div className="flex flex-col gap-1">

                                    {links.map(({ href, labelKey }) => (

                                        <Link key={href} href={href} className="text-white text-base font-normal opacity-60 transition-default hover:text-white hover:opacity-100">
                                            {t(`links.${labelKey}`)}
                                        </Link>

                                    ))}

                                </div>

                            </div>
                        ))}

                    </div>

                </motion.div>

                <motion.small
                    className="text-white text-xs font-normal flex gap-1 mt-[11px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >©&nbsp;{t("copyright")}
                    <FaRegHeart className="w-4 h-4 text-primary" /><span>{t("byAuthor")}</span>
                </motion.small>

            </div>

        </motion.footer>
    );
};

export default Footer;