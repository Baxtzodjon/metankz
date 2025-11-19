"use client"

import { motion, AnimatePresence, Variants } from "motion/react";
import { useTranslations } from "next-intl";
import { RegisterOptions, useForm } from "react-hook-form";
import { ContactsFormData, getContactsFormFields } from "../data/contactsFormFIelds";

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

    const onSubmit = (data: ContactsFormData) => {
        console.log("✅ Form submitted:", data);
        reset();
        onClose();
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
                            > {/* items-start border border-solid border-[#e5e8ed] rounded p-[15px] sm:py-12 sm:px-10 max-w-[495px] contacts_shadow */}

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

                                                {/* {field.name === "email" ? " *" : ""} */}

                                                {field.name !== "message" && (
                                                    <span>*</span>
                                                )}

                                            </span>

                                            {field.type === 'textarea' ? (
                                                <textarea
                                                    {...register(field.name, validationRules)}
                                                    placeholder={t(field.placeholderKey)}
                                                    className={`bg-athens border ${errors[field.name] ? "border-red-500" : "border-[#d7dadd]"
                                                        } rounded pt-[10px] pl-[15px] w-full h-[66px] outline-none focus:outline-2 focus:outline-primary focus:outline-offset-2 text-sm leading-[150%] font-normal resize-none`}
                                                />
                                            ) : (
                                                <input
                                                    type={field.type}
                                                    {...register(field.name, validationRules)}
                                                    placeholder={t(field.placeholderKey)}
                                                    autoComplete={field.name}
                                                    className={`bg-athens border ${errors[field.name] ? "border-red-500" : "border-[#d7dadd]"
                                                        } rounded pl-[15px] w-full h-11 outline-none focus:outline-2 focus:outline-primary focus:outline-offset-2 text-sm leading-[150%] font-normal`}
                                                />
                                            )}

                                            {errors[field.name] && (
                                                <span className="text-red-500 text-xs mt-1">
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
                                        {isSubmitting ? <svg
                                            className="animate-spin h-5 w-5 text-light mx-auto"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            ></path>
                                        </svg>
                                            : t("ContactsSection.button")} {/* t("ContactsSection.sending") */}
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