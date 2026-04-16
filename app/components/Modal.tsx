"use client"

import { motion, AnimatePresence, Variants } from "motion/react";
import { useTranslations } from "next-intl";
import { RegisterOptions, useForm } from "react-hook-form";
import { ContactsFormData, getContactsFormFields } from "../data/contactsFormFIelds";
import { toast } from "sonner";

const fieldVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
    const t = useTranslations();
    const contactsFormFields = getContactsFormFields("modal");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactsFormData>({ mode: "onChange" });

    const onSubmit = async (data: ContactsFormData) => {
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
            onClose();
        } catch (error) {
            console.error("❌ Email error:", error);
            toast.error(t("StatusForm.error"), { id: toastId });
        }
    };

    return (
        <AnimatePresence>

            {isOpen && (

                <motion.div
                    className="fixed inset-0 z-[1000] bg-black/70 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <div className="container flex items-center justify-center">

                        <motion.div
                            className="relative w-[486px] h-auto bg-light border border-solid border-[#E5E8ED] rounded shadow-soft-multi p-6 sm:p-10"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >

                            <button className="absolute top-0 sm:top-3 right-3 sm:right-6 text-storm text-4xl hover:text-primary transition" onClick={onClose}>&times;</button>

                            <motion.form
                                className="flex flex-col items-start w-full"
                                variants={fieldVariants}
                                initial="hidden"
                                animate="show"
                                onSubmit={handleSubmit(onSubmit)}
                            >

                                <motion.h3 className="mb-6 w-full text-[28px] leading-[150%] font-bold text-center text-ebony">{t("ContactsSection.modalTitle")}</motion.h3>

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

                                                {field.name !== "message" && (
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

                                <motion.div className="w-full text-center" variants={fieldVariants}>

                                    <button className="py-[12px] px-[31px] bg-primary rounded text-light text-sm leading-5 tracking-wider font-bold uppercase hover:bg-active transition-default mt-5"
                                        type="submit" disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
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

                        </motion.div>

                    </div>

                </motion.div>
            )}

        </AnimatePresence>
    );
};

export default Modal;