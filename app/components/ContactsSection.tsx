"use client"

import { motion, Variants } from "motion/react";
import { useTranslations } from "next-intl";
import { RegisterOptions, useForm } from "react-hook-form";
import { ContactsFormData, contactsFormFields } from "../data/contactsFormFIelds";

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

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactsFormData>({ mode: "onChange" });

    const onSubmit = (data: ContactsFormData) => {
        console.log("✅ Form submitted:", data);
        reset();
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

                                <span className="mb-2 text-gray-600 text-sm leading-[150%]">{t(field.labelKey)}</span>

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

                    <motion.label className="mb-[22px] focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-1"
                        variants={fieldVariants}
                    >

                        <input type="checkbox"
                            {...register("consent", { required: t("ContactsSection.errors.consent.required") })}
                            className="peer absolute opacity-0" />

                        <span className="relative inline-block pl-[27px] text-gray text-sm leading-[150%] before:content-[''] before:absolute before:-left-[1px] before:top-[1px] before:inline-block before:border before:border-primary before:rounded-[3px] before:w-4 before:h-4 before:transition-default peer-checked:before:bg-primary after:content-[''] after:absolute after:-left-[1px] after:top-[1px] after:w-4 after:h-4 after:bg-[url('/icons/check.svg')] after:bg-center after:bg-[length:10px_8px] after:bg-no-repeat after:opacity-0 after:transition-default peer-checked:after:opacity-100">{t("ContactsSection.consentText", { site: "MetanKz" })}</span>

                        {errors.consent && (
                            <span className="block text-xs text-red-500 mt-1 ml-[27px]">
                                {(errors.consent?.message as string) || ""}
                            </span>
                        )}

                    </motion.label>

                    <motion.div className="w-full text-center" variants={fieldVariants}>

                        <button className="py-[12px] px-[31px] bg-primary rounded text-light text-sm leading-5 tracking-wider font-bold uppercase hover:bg-active transition-default" type="submit">{t("ContactsSection.button")}</button>

                    </motion.div>

                </motion.form>

            </div>

        </motion.section>
    );
};

export default ContactsSection;