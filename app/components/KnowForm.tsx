"use client"

import { motion } from "motion/react";
import { RegisterOptions, useForm } from "react-hook-form";
import { formFields, FormData } from "../data/formFields";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { useState } from "react";

const KnowForm = () => {
    const t = useTranslations();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({ mode: "onChange" });

    const onSubmit = async (data: FormData) => {
        if (isLoading) return;

        setIsLoading(true);
        const toastId = toast.loading(t("StatusForm.sending"));

        try {
            const res = await fetch("/api/forms/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    formType: "knowForm", // важная часть для route.ts
                    data,
                    honeypot: "",         // поле для ботов (оставляем пустым)
                }), /* data */
            });

            const result = await res.json();

            if (!res.ok || !result.success) throw new Error("Failed to send");

            toast.success(t("StatusForm.success"), { id: toastId });
            reset();
            /* alert("✅ Email sent"); */
        } catch (error) {
            console.error("❌ Email error:", error);
            /* alert("❌ Ошибка при отправке"); */
            toast.error(t("StatusForm.error"), { id: toastId });
        } finally {
            setIsLoading(false);
        }

        /* try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Send failed");

            reset();
            alert("✅ Данные успешно отправлены");
        } catch (error) {
            console.error(error);
            alert("❌ Ошибка при отправке");
        } */

        /* fetch('/api/send-email', {
            method: 'POST',
            cache: 'no-cache',
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            }); */

        /* console.log("✅ Form data:", data);
        reset(); */
    };

    return (
        <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.2,
                    },
                },
            }}
            className="relative top-[235px] sm:top-[330px] lg:top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-between flex-col gap-8 bg-light shadow-soft-multi_sec w-full px-[15px] py-[10px] sm:py-12 sm:px-[60px]">

            <motion.h2 className="text-ebony text-[28px] leading-[150%] font-bold text-center"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >{t("KnowForm.title")}</motion.h2>

            {/* <div className="flex items-end flex-wrap gap-6">

                {formFields.map((field, index) => {
                    const inputWidthClass = index === 2 ? 'w-full xl:w-[414px]' : 'w-full lg:w-[260px]';

                    return (
                        <label className="flex flex-col" key={index}>

                            <span className="text-gray text-sm leading-[150%] font-normal mb-2">{field.label}</span>

                            <input
                                className={`${inputWidthClass} h-[44px] bg-[#F4F5F6] border border-solid border-[#d7dadd] rounded pl-[15px] outline-none focus:outline-2 focus:outline-solid focus:outline-primary focus:outline-offset-2 text-sm leading-[150%] font-normal`}
                                type={field.type}
                                placeholder={field.placeholder}
                            />

                        </label>
                    );
                })}

                <button className="w-[49%] py-[11px] lg:px-[29px] bg-primary rounded text-light text-sm font-bold uppercase hover:bg-active transition-default cursor-pointer" type="submit">Send</button>

            </div> */}

            <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-6">

                {formFields.map((field, index) => {
                    let wrapperClass = 'w-full';

                    if (index === 0 || index === 1) {
                        wrapperClass = 'w-full sm:w-fit md:w-[48%] lg:w-[260px]';
                    } else if (index === 2) {
                        wrapperClass = 'w-full sm:w-fit md:w-[48%] lg:w-[260px] xl:w-[414px]';
                    }

                    const validationRules: RegisterOptions<FormData, keyof FormData> = {};
                    if (field.validation?.required)
                        validationRules.required = t(field.validation.required);
                    if (field.validation?.pattern)
                        validationRules.pattern = {
                            value: field.validation.pattern.value,
                            message: t(field.validation.pattern.message),
                        };
                    if (field.validation?.minLength)
                        validationRules.minLength = {
                            value: field.validation.minLength.value,
                            message: t(field.validation.minLength.message),
                        };

                    return (
                        <motion.label key={index} className={`flex flex-col ${wrapperClass}`}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <span className="text-gray text-sm leading-[150%] font-normal mb-2">
                                {t(field.labelKey)}
                            </span>
                            <input
                                type={field.type}
                                placeholder={t(field.placeholderKey)}
                                autoComplete={field.name}
                                {...register(field.name, validationRules)}
                                className={`w-full h-[44px] bg-[#F4F5F6] border border-[#d7dadd] rounded pl-[15px] outline-none focus:outline-2 focus:outline-primary focus:outline-offset-2 text-sm leading-[150%] font-normal ${errors[field.name]
                                    ? "border-error"
                                    : "border-[#d7dadd] focus:outline-primary"
                                    }`}
                            />

                            {errors[field.name] && (
                                <span className="text-error text-xs mt-1">
                                    {(errors[field.name]?.message as string) ?? ""}
                                </span>
                            )}
                        </motion.label>
                    );
                })}

                <motion.button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full h-[44px] sm:w-[205px] md:w-[48%] lg:w-[104px] rounded text-light text-sm font-bold uppercase transition-default m-0 sm:mt-7
                        ${isLoading ? "bg-storm cursor-not-allowed" : "bg-primary hover:bg-active"}
                        `} /* lg:py-[11px] lg:px-[29px] */
                    variants={{
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
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

                            {t("StatusForm.sending")}

                        </span>
                    ) : (
                        t("KnowForm.button")
                    )}
                </motion.button>

            </div>

        </motion.form>
    );
};

export default KnowForm;