"use client"

import { motion } from "motion/react";
import { benefits } from "../data/benefits";
import { useLocale, useTranslations } from "next-intl";

const BenefitsSection = () => {
    const t = useTranslations();
    const locale = useLocale();

    const tonSymbol = locale === "ru" || locale === "kz" ? "т" : "t";

    return (
        <section className="container flex items-center justify-center flex-col gap-15">

            <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-[30px] mb-20">

                {benefits.map((benefit, index) => {

                    const Icon = benefit.icon;

                    return (
                        <motion.li
                            key={index}
                            variants={{
                                hidden: { opacity: 0, scale: 0.95, y: 20 },
                                visible: { opacity: 1, scale: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="max-w-full w-[285px] h-[285px] overflow-hidden"
                        >

                            <div className="px-[10px] pt-[87px] pb-[90px]">

                                <div className="flex flex-col items-center">
                                    {/* <Image
                                        src={service.icon}
                                        alt={`${service.titleKey} Icon`}
                                        width={52}
                                        height={52}
                                        className="mb-[23px] w-[52px] h-[52px] transition-colors duration-300 ease-in-out"
                                        aria-hidden="true"
                                    /> */}

                                    <Icon className="text-[#9A9CA5] w-12 h-12 mb-6" />

                                    <div className="flex items-center justify-center flex-col gap-2">

                                        <h2 className="text-primary text-[28px] sm:text-[46px] leading-10 sm:leading-[130%] font-bold text-center">
                                            {benefit.titleKey === "Benefits.co2"
                                                ? `${benefit.number.replace("т", tonSymbol)}`
                                                : benefit.number}
                                        </h2>

                                        <p className="text-ebony text-base sm:text-lg leading-[150%] font-normal text-center mb-[25px] sm:mb-[60px]">{t(benefit.titleKey)}</p>

                                        {/* <h2 className={`text-ebony text-[28px] sm:text-[46px] leading-10 sm:leading-[130%] font-bold text-center ${className || ""}`}>{title}</h2>

                                            {description && (
                                                <p className="text-storm text-base sm:text-lg leading-[150%] font-normal text-center mb-[25px] sm:mb-[60px]">{description}</p>
                                            )} */}

                                    </div>

                                </div>

                            </div>

                        </motion.li>
                    )
                })}

            </motion.ul>

        </section>
    );
};

export default BenefitsSection;