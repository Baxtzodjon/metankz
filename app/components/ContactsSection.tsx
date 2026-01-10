"use client"

import { motion, Variants } from "motion/react";
import { useTranslations } from "next-intl";
import { RegisterOptions, useForm } from "react-hook-form";
import { ContactsFormData, getContactsFormFields } from "../data/contactsFormFIelds";
import { toast } from "sonner";
import { useState } from "react";

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fieldVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ContactsSection = () => {
    const t = useTranslations();
    const [isLoading, setIsLoading] = useState(false);
    const contactsFormFields = getContactsFormFields("section");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactsFormData>({ mode: "onChange" });

    const onSubmit = async (data: ContactsFormData) => {
        if (isLoading) return;

        setIsLoading(true);
        const toastId = toast.loading(t("StatusForm.sending"));

        try {
            const res = await fetch("/api/forms/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formType: "contactForm",
                    data,
                    honeypot: "",
                }),
            });

            const result = await res.json();

            if (!res.ok || !result.success) throw new Error("Failed to send");

            toast.success(t("StatusForm.success"), { id: toastId });
            reset();
        } catch (error) {
            console.error("❌ Email error:", error);
            toast.error(t("StatusForm.error"), { id: toastId });
        } finally {
            setIsLoading(false);
        }

        /* console.log("✅ Form submitted:", data); */
    };

    return (
        <motion.section className="pt-[80px] pb-[77px] bg-[url('/images/contacts_bg.jpg')] bg-center bg-cover bg-no-repeat bg-ebony"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >

            <h2 className="absolute w-[1px] h-[1px] -m-[1px] p-0 overflow-hidden border-none [clip:rect(0_0_0_0)]">Contacts</h2>

            <div className="container flex justify-end">

                <motion.form className="bg-light flex flex-col items-start border border-solid border-[#e5e8ed] rounded p-[15px] sm:py-12 sm:px-10 max-w-[495px] contacts_shadow"
                    onSubmit={handleSubmit(onSubmit)}
                    variants={fieldVariants}
                    initial="hidden"
                    animate="show"
                >

                    <motion.h3 className="mb-6 w-full text-[28px] leading-[150%] font-bold text-center text-ebony">{t("ContactsSection.title")}</motion.h3>

                    {contactsFormFields.map((field, idx) => {
                        const validationRules: RegisterOptions<ContactsFormData, keyof ContactsFormData> = {};

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
                            <motion.label
                                key={idx}
                                className="flex flex-col items-start w-full mb-5"
                                variants={fieldVariants}
                            >

                                <span className="mb-2 text-gray-600 text-sm leading-[150%]">

                                    {t(field.labelKey)}

                                    {field.name !== "email" && (
                                        <span>*</span>
                                    )}

                                </span>

                                {field.type === 'textarea' ? (
                                    <textarea
                                        {...register(field.name, validationRules)}
                                        placeholder={t(field.placeholderKey)}
                                        className={`bg-athens border ${errors[field.name] ? "border-error" : "border-[#d7dadd]"
                                            } rounded pt-[10px] pl-[15px] w-full h-[66px] outline-none focus:outline-2 focus:outline-primary focus:outline-offset-2 text-sm leading-[150%] font-normal resize-none`}
                                    />
                                ) : (
                                    <input
                                        type={field.type}
                                        {...register(field.name, validationRules)}
                                        placeholder={t(field.placeholderKey)}
                                        autoComplete={field.name}
                                        className={`bg-athens border ${errors[field.name] ? "border-error" : "border-[#d7dadd]"
                                            } rounded pl-[15px] w-full h-11 outline-none focus:outline-2 focus:outline-primary focus:outline-offset-2 text-sm leading-[150%] font-normal`}
                                    />
                                )}

                                {errors[field.name] && (
                                    <span className="text-error text-xs mt-1">
                                        {(errors[field.name]?.message as string) || ""}
                                    </span>
                                )}

                            </motion.label>
                        )
                    })}

                    <motion.label className="mb-[22px] focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-1"
                        variants={fieldVariants}
                    >

                        <input type="checkbox"
                            {...register("consent", { required: t("ContactsSection.errors.consent.required") })}
                            className="peer absolute opacity-0" />

                        <span className="relative inline-block pl-[27px] text-gray text-sm leading-[150%] before:content-[''] before:absolute before:-left-[1px] before:top-[1px] before:inline-block before:border before:border-primary before:rounded-[3px] before:w-4 before:h-4 before:transition-default peer-checked:before:bg-primary after:content-[''] after:absolute after:-left-[1px] after:top-[1px] after:w-4 after:h-4 after:bg-[url('/icons/check.svg')] after:bg-center after:bg-[length:10px_8px] after:bg-no-repeat after:opacity-0 after:transition-default peer-checked:after:opacity-100">{t("ContactsSection.consentText", { site: "MetanKz" })}</span>

                        {errors.consent && (
                            <span className="block text-xs text-error mt-1 ml-[27px]">
                                {(errors.consent?.message as string) || ""}
                            </span>
                        )}

                    </motion.label>

                    <motion.div className="w-full text-center" variants={fieldVariants}>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`py-[12px] px-[31px] rounded text-light text-sm leading-5 tracking-wider font-bold uppercase transition-default
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
                                    
                                    {t("StatusForm.sending")}

                                </span>
                            ) : (
                                t("ContactsSection.button")
                            )}
                        </button>

                    </motion.div>

                </motion.form>

            </div>

        </motion.section>
    );
};

export default ContactsSection;