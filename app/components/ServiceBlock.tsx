"use client"

import Image from "next/image";
import Texts from "./Texts";
import BtnText from "./BtnText";
import { motion } from "motion/react";
import { services } from "../data/services";
import { useTranslations } from "next-intl";

const ServiceBlock = () => {
    const t = useTranslations("ServiceBlock");

    return (
        <section className="services-section">

            <div className="container flex items-center justify-center flex-col gap-15">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex items-center justify-center flex-col gap-6">

                    <Texts title={t("title")} description={t("description")} />

                </motion.div>

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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-20">

                    {services.map((service, index) => (

                        <motion.li
                            key={index}
                            variants={{
                                hidden: { opacity: 0, scale: 0.95, y: 20 },
                                visible: { opacity: 1, scale: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative group block max-w-full w-[285px] h-[285px] rounded-[4px] border border-[#e5e8ed] bg-white shadow-soft-multi overflow-hidden"
                        >
                            {/* Затемнение (имитация ::after) */}
                            <div className="absolute inset-0 z-[5] bg-[rgba(30,33,44,0.6)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"></div>

                            {/* Фоновое изображение (имитация ::before) */}
                            <div
                                className="absolute inset-0 z-[3] bg-cover bg-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
                                style={{ backgroundImage: `url(${service.bgImage})` }}
                            ></div>

                            <a href="#" className="block relative z-10 px-[10px] pt-[87px] pb-[90px]">

                                <div className="relative z-10 flex flex-col items-center">
                                    <Image
                                        src={service.icon}
                                        alt={`${service.titleKey} Icon`}
                                        width={52}
                                        height={52}
                                        className="mb-[23px] w-[52px] h-[52px] transition-colors duration-300 ease-in-out"
                                        aria-hidden="true"
                                    />

                                    <h3 className="text-ebony lg:text-lg xl:text-xl leading-[150%] font-bold group-hover:text-light transition-colors duration-300">
                                        {t(`values.${service.titleKey}`)}
                                    </h3>

                                </div>

                            </a>

                        </motion.li>

                    ))}

                </motion.ul>

                {/* <div className="flex items-center justify-start sm:justify-center flex-wrap sm:flex-nowrap gap-[10px] md:gap-10">

                    <h4 className="max-w-none sm:max-w-[50%] md:max-w-none text-ebony text-[28px] font-bold">Learn more about our services</h4>

                    <a href="#" className="py-[15px] px-[39px] bg-primary rounded text-light text-base leading-[20px] tracking-wider font-bold uppercase hover:bg-active transition-default cursor-pointer">View services</a>

                </div> */}

                <BtnText title={t("translBtns.btnTitle")} link={t("translBtns.btnLink")} />

            </div>

        </section>
    );
};

export default ServiceBlock;