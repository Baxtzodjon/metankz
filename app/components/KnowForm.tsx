"use client"

import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { RegisterOptions } from "react-hook-form";

type FormData = {
    name: string;
    phone: string;
    message: string;
};

type FieldConfig = {
    name: keyof FormData;
    label: string;
    type: string;
    placeholder: string;
    validation?: RegisterOptions<FormData, keyof FormData>;
};

const formFields: FieldConfig[] = [
    {
        name: "name",
        label: 'Name',
        type: 'text',
        placeholder: 'Your name',
        validation: {
            required: "Name is required",
            pattern: {
                value: /^[A-Za-zА-Яа-я\s]+$/,
                message: "Name can only contain letters",
            },
        },

    },
    {
        name: "phone",
        label: 'Phone',
        type: 'tel',
        placeholder: 'Your phone',
        validation: {
            required: "Phone is required",
            pattern: {
                value: /^[\d\s()+-]{7,20}$/,
                message: "Invalid phone number format",
            },
        },
    },
    {
        name: "message",
        label: 'Message',
        type: 'text',
        placeholder: 'Your message',
        validation: {
            minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
            },
        },
    },
];

const KnowForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({ mode: "onChange" });

    const onSubmit = (data: FormData) => {
        console.log("✅ Form data:", data);
        reset();
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
            >Want to know more? Ask us a question:</motion.h2>

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

                    return (
                        <motion.label key={index} className={`flex flex-col ${wrapperClass}`}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <span className="text-gray text-sm leading-[150%] font-normal mb-2">
                                {field.label}
                            </span>
                            <input
                                type={field.type}
                                placeholder={field.placeholder}
                                {...register(field.name, field.validation)}
                                className={`w-full h-[44px] bg-[#F4F5F6] border border-[#d7dadd] rounded pl-[15px] outline-none focus:outline-2 focus:outline-primary focus:outline-offset-2 text-sm leading-[150%] font-normal ${errors[field.name]
                                        ? "border-red-500"
                                        : "border-[#d7dadd] focus:outline-primary"
                                    }`}
                            />

                            {errors[field.name] && (
                                <span className="text-red-500 text-xs mt-1">
                                    {(errors[field.name]?.message as string) ?? ""}
                                </span>
                            )}
                        </motion.label>
                    );
                })}

                <motion.button
                    type="submit"
                    className="w-full h-[44px] sm:w-[205px] md:w-[48%] lg:w-[104px] bg-primary rounded text-light text-sm font-bold uppercase hover:bg-active transition-default m-0 sm:mt-7 cursor-pointer" /* lg:py-[11px] lg:px-[29px] */
                    variants={{
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    Send
                </motion.button>

            </div>

        </motion.form>
    );
};

export default KnowForm;