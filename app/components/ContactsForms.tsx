"use client"

import { motion, Variants } from "motion/react";
import { useTranslations } from "next-intl";
import { RegisterOptions, useForm } from "react-hook-form";
import { extraContactsFormData, extraContactsFormFields } from "../data/extraContactFields";
import Image from "next/image";
import Texts from "./Texts";

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fieldVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ContactsForms = () => {
    const t = useTranslations();
    const contactsFormFields = extraContactsFormFields();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<extraContactsFormData>({
        mode: "onChange",
        defaultValues: {
            preferredContactMethod: "phone",
        },
    });

    const onSubmit = (data: extraContactsFormData) => {
        console.log("✅ Form submitted:", data);
        reset();
    };

    const validationRulesFor = <K extends keyof extraContactsFormData>(name: K): RegisterOptions<extraContactsFormData, K> => {
        const field = contactsFormFields.find(f => f.name === name);
        if (!field) return {};

        const rules: RegisterOptions<extraContactsFormData, K> = {};

        if (field.validation?.required) rules.required = t(field.validation.required);
        if (field.validation?.pattern)
            rules.pattern = {
                value: field.validation.pattern.value,
                message: t(field.validation.pattern.message),
            };
        if (field.validation?.minLength)
            rules.minLength = {
                value: field.validation.minLength.value,
                message: t(field.validation.minLength.message),
            };

        return rules;
    };

    return (
        <motion.section
            className="py-[120px] bg-light"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <div className="container"> {/* flex flex-col items-center gap-[60px] */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col items-center gap-6 text-center"
                >
                    <Texts
                        title={t("ContactsSection.titleContactPage")}
                        description={t("ContactsSection.descriptionContactPage")}
                    />

                </motion.div>

                <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-10 md:gap-20 lg:gap-0"> {/* lg:gap-[135px]  xl:gap-[220px] */}

                    <div className="w-full">

                        <Image
                            src={"/images/woman_image.jpg"}
                            alt="Woman image"
                            width={495}
                            height={586}
                            className="w-full h-fit lg:w-auto lg:h-[570px] xl:h-[586px] object-cover" /* lg:h-auto xl:h-[586px] */
                        />

                    </div>

                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-6 w-full lg:max-w-[600px]"
                        variants={fieldVariants}
                        initial="hidden"
                        animate="show"
                    >

                        {/* Name + Interest */}
                        <motion.div className="flex flex-col gap-3 md:flex-row md:gap-4" variants={fieldVariants}>

                            {/* NAME */}
                            <div className="flex flex-col w-full">

                                <label htmlFor="name" className="mb-2 text-gray-600 text-sm leading-[150%]">
                                    {t("ContactsSection.fields.name.label")}<span>*</span>
                                </label>

                                <input
                                    id="name"
                                    type="text"
                                    {...register("name", validationRulesFor("name"))}
                                    placeholder={t("ContactsSection.fields.name.placeholder")}
                                    className={`bg-athens border ${errors.name ? "border-red-500" : "border-[#d7dadd]"} rounded pl-[15px] h-[52px] outline-none focus:outline-primary focus:outline-2`}
                                />

                                {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}

                            </div>

                            {/* INTEREST */}
                            <div className="flex flex-col w-full">

                                <label htmlFor="interest" className="mb-2 text-gray-600 text-sm leading-[150%]">
                                    {t("ContactsSection.fields.interest.label")}
                                </label>

                                <select
                                    id="interest"
                                    {...register("interest", validationRulesFor("interest"))}
                                    className={`h-[52px] bg-athens border ${errors.interest ? "border-red-500" : "border-[#d7dadd]"
                                        } rounded pl-[10px] text-sm outline-none focus:outline-primary focus:outline-2`}
                                >

                                    <option value="">{t("ContactsSection.fields.interest.placeholder")}</option>

                                    {contactsFormFields.find(f => f.name === "interest")?.options?.map(opt => (
                                        <option key={opt.value} value={opt.value}>{t(`ContactsSection.options.interest.${opt.value}`)}</option>
                                    ))}

                                </select>

                                {errors.interest && <span className="text-red-500 text-xs mt-1">{errors.interest.message}</span>}

                            </div>

                        </motion.div>

                        {/* Phone + Location */}

                        <motion.div className="flex flex-col gap-3 md:flex-row md:gap-4" variants={fieldVariants}>

                            {/* PHONE */}
                            <div className="flex flex-col w-full">

                                <label htmlFor="phone" className="mb-2 text-gray-600 text-sm leading-[150%]">
                                    {t("ContactsSection.fields.phone.label")}<span>*</span>
                                </label>

                                <input
                                    id="phone"
                                    type="tel"
                                    {...register("phone", validationRulesFor("phone"))}
                                    placeholder={t("ContactsSection.fields.phone.placeholder")}
                                    className={`bg-athens border ${errors.phone ? "border-red-500" : "border-[#d7dadd]"} rounded pl-[15px] h-[52px] outline-none focus:outline-primary focus:outline-2`}
                                />

                                {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}

                            </div>

                            {/* LOCATION */}
                            <div className="flex flex-col w-full">

                                <label htmlFor="location" className="mb-2 text-gray-600 text-sm leading-[150%]">
                                    {t("ContactsSection.fields.location.label")}<span>*</span>
                                </label>

                                <select
                                    id="location"
                                    {...register("location", validationRulesFor("location"))}
                                    className={`h-[52px] bg-athens border ${errors.location ? "border-red-500" : "border-[#d7dadd]"
                                        } rounded pl-[10px] text-sm outline-none focus:outline-primary focus:outline-2`}
                                >

                                    <option value="">{t("ContactsSection.fields.location.placeholder")}</option>

                                    {contactsFormFields.find(f => f.name === "location")?.options?.map(opt => (
                                        <option key={opt.value} value={opt.value}>{t(`ContactsSection.options.location.${opt.value}`)}</option>
                                    ))}

                                </select>

                                {errors.location && <span className="text-red-500 text-xs mt-1">{errors.location.message}</span>}

                            </div>

                        </motion.div>

                        {/* Email + Contact Method */}
                        <motion.div className="flex flex-col gap-3 md:flex-row md:gap-4 items-center" variants={fieldVariants}>

                            {/* EMAIL (NOT REQUIRED) */}
                            <div className="flex flex-col w-full">

                                <label htmlFor="email" className="mb-2 text-gray-600 text-sm leading-[150%]">
                                    {t("ContactsSection.fields.email.label")}
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    {...register("email", validationRulesFor("email"))}
                                    placeholder={t("ContactsSection.fields.email.placeholder")}
                                    className={`bg-athens border ${errors.email ? "border-red-500" : "border-[#d7dadd]"} rounded pl-[15px] h-[52px] outline-none focus:outline-primary focus:outline-2`}
                                />

                                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}

                            </div>

                            {/* CONTACT METHOD */}
                            <div className="flex flex-col w-full gap-2">

                                <label htmlFor="preferredContactMethod" className="text-gray-600 text-sm leading-[150%]">
                                    {t("ContactsSection.fields.preferredContactMethod.label")}
                                </label>

                                <div className="flex items-center gap-2 sm:gap-6 lg:gap-2 xl:gap-6 flex-wrap">

                                    {contactsFormFields
                                        .find(f => f.name === "preferredContactMethod")
                                        ?.options?.map(opt => (
                                            <label
                                                key={opt.value}
                                                htmlFor={`preferredContactMethod-${opt.value}`}
                                                className="flex items-center gap-2 cursor-pointer"
                                            >

                                                <input
                                                    id={`preferredContactMethod-${opt.value}`}
                                                    type="radio"
                                                    value={opt.value}
                                                    {...register("preferredContactMethod", validationRulesFor("preferredContactMethod"))}
                                                    className="accent-primary w-4 h-4"
                                                />

                                                <span className="text-gray text-sm">{t(`ContactsSection.options.preferredContactMethod.${opt.value}`)}</span>

                                            </label>
                                        ))}

                                </div>

                                {errors.preferredContactMethod && (
                                    <span className="text-red-500 text-xs mt-1">
                                        {errors.preferredContactMethod.message}
                                    </span>
                                )}

                            </div>

                        </motion.div>

                        {/* MESSAGE */}
                        <motion.div className="flex flex-col" variants={fieldVariants}>

                            <label htmlFor="message" className="mb-2 text-gray-600 text-sm leading-[150%]">
                                {t("ContactsSection.fields.message.label")}<span>*</span>
                            </label>

                            <textarea
                                id="message"
                                {...register("message", validationRulesFor("message"))}
                                placeholder={t("ContactsSection.fields.message.placeholder")}
                                className={`bg-athens border ${errors.message ? "border-red-500" : "border-[#d7dadd]"
                                    } rounded pt-[10px] pl-[15px] w-full h-[128px] outline-none focus:outline-primary focus:outline-2 text-sm leading-[150%] resize-none`}
                            />

                            {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}

                        </motion.div>

                        {/* Consent + Submit */}
                        <div className="flex justify-between flex-wrap sm:flex-nowrap gap-[22px] sm:gap-0 mt-0 lg:mt-4">

                            {/* <motion.label
                                htmlFor="consent"
                                className="flex flex-col gap-2 cursor-pointer focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-1"
                                variants={fieldVariants}
                            >

                                <input
                                    id="consent"
                                    type="checkbox"
                                    {...register("consent", { required: t("ContactsSection.errors.consent.required") })}
                                    className="peer absolute opacity-0"
                                />

                                <span className="relative inline-block pl-[27px] text-gray text-sm leading-[150%]
                                    before:content-[''] before:absolute before:-left-[1px] before:top-[1px] before:inline-block 
                                    before:border before:border-primary before:rounded-[3px] before:w-4 before:h-4 
                                    peer-checked:before:bg-primary after:content-[''] after:absolute after:-left-[1px] after:top-[1px]
                                    after:w-4 after:h-4 after:bg-[url('/icons/check.svg')] after:bg-center after:bg-[length:10px_8px]
                                    after:bg-no-repeat after:opacity-0 peer-checked:after:opacity-100 transition-default">
                                    {t("ContactsSection.consentText", { site: "MetanKz" })}
                                </span>

                                {errors.consent && (
                                    <span className="block text-xs text-red-500 mt-1">{errors.consent.message}</span>
                                )}

                            </motion.label> */}

                            <motion.label className="focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-1"
                                variants={fieldVariants}
                            >

                                <input type="checkbox"
                                    {...register("consent", { required: t("ContactsSection.errors.consent.required") })}
                                    className="peer absolute opacity-0" />

                                <span className="relative inline-block pl-[27px] text-gray text-sm leading-[150%] before:content-[''] before:absolute before:-left-[1px] before:top-[1px] before:inline-block before:border before:border-primary before:rounded-[3px] before:w-4 before:h-4 before:transition-default peer-checked:before:bg-primary after:content-[''] after:absolute after:-left-[1px] after:top-[1px] after:w-4 after:h-4 after:bg-[url('/icons/check.svg')] after:bg-center after:bg-[length:10px_8px] after:bg-no-repeat after:opacity-0 after:transition-default peer-checked:after:opacity-100 w-[287px]">{t("ContactsSection.consentText", { site: "MetanKz" })}</span>

                                {errors.consent && (
                                    <span className="block text-xs text-red-500 mt-1 ml-[27px]">
                                        {(errors.consent?.message as string) || ""}
                                    </span>
                                )}

                            </motion.label>

                            <motion.div variants={fieldVariants}>

                                <button
                                    type="submit"
                                    className="py-[12px] px-[31px] bg-primary rounded text-light text-sm leading-5 tracking-wider font-bold uppercase hover:bg-active transition-default"
                                >
                                    {t("ContactsSection.button")}
                                </button>

                            </motion.div>

                        </div>

                    </motion.form>

                </div>

            </div>

        </motion.section>
    );
};

export default ContactsForms;