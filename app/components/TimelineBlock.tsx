"use client"

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { timelineData } from "../data/timelineData";


const TimelineBlock = () => {
    const t = useTranslations();

    return (
        <section className="relative overflow-hidden bg-light before:content-[''] before:absolute before:-left-[109px] before:-bottom-[195px] before:w-[570px] before:h-[637px] before:bg-[url('/images/facts_bg.png')] before:bg-center before:bg-no-repeat before:bg-cover py-10 sm:pt-[100px] sm:pb-[120px] lg:pt-[120px] lg:pb-[180px]">

            <div className="container flex flex-col gap-[120px]">

                {timelineData.map((item, index) => (

                    <div key={index} className={`flex flex-col md:flex-row items-center justify-between gap-10 z-10 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>

                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-full md:w-auto"
                        >

                            <Image src={item.image} alt={t(item.titleKey)} width={570} height={420} className="w-full md:max-w-[570px] h-[420px] object-cover" />

                        </motion.div>

                        <motion.div className="flex items-start flex-col gap-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >

                            <div className="flex flex-col gap-6">

                                <h2 className="text-ebony text-[28px] sm:text-[32px] leading-[150%] font-bold">{t(item.titleKey)}</h2>

                                <p className="w-full md:max-w-[575px] text-storm text-base leading-relaxed font-normal">
                                    {t(item.descriptionKey)}
                                </p>

                            </div>

                            <Link href={item.link} className="w-full md:w-auto border border-current rounded pt-[13px] pb-[13px] px-[31px] font-bold text-sm tracking-wider uppercase text-primary text-center md:text-start hover:bg-primary hover:text-white transition-default">{t("Common.learnMore")}</Link>

                        </motion.div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default TimelineBlock;