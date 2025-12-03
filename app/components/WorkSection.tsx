"use client"

import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { workItems } from "../data/workItems";

const WorkSection = () => {
    const t = useTranslations("PortfolioSection");

    return (
        <section className="bg-light py-10 sm:py-[120px]">

            <div className="container flex items-center justify-center flex-col gap-[60px]">

                {/* GRID вместо flex */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">

                    {workItems.map((item) => (

                        <motion.a
                            key={item.id}
                            href="#"
                            className="group flex flex-col overflow-hidden rounded shadow-soft-multi_sec bg-light transition-default"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: item.id * 0.1 }}
                        >

                            <Image
                                className="w-full h-[345px] object-cover"
                                src={item.images[0]}
                                alt={item.titleKey}
                                width={390}
                                height={345}
                            />

                            <motion.div
                                className="flex items-center flex-col pt-[16px] pb-[23px] px-[10px]"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
                            >

                                <h3 className="text-ebony text-lg xl:text-xl leading-[150%] font-bold mb-[5px] text-center">
                                    {item.titleKey}
                                </h3>

                                <span className="text-storm text-sm leading-[150%] text-center">
                                    {item.descriptionKey}
                                </span>

                                <div className="mt-6 mb-0 md:mb-[-72px] border border-current rounded pt-[13px] pb-[13px] px-[31px] font-bold text-sm tracking-wider uppercase text-primary group-hover:mb-0 transition-default will-change-[margin] hover:bg-primary hover:text-white">
                                    {t("viewProject")}
                                </div>

                            </motion.div>

                        </motion.a>
                    ))}

                </div>

                <button
                    className="flex items-center gap-4 text-gray text-base font-bold hover:text-primary transition"
                >
                    {/* <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></span> */}

                    <Image
                        className="reverse-spin"
                        src={"/icons/spinner_work_block.svg"}
                        alt={"Spinner"}
                        width={24}
                        height={24}
                    />
                    
                    Load More
                </button>

            </div>

        </section>
    );
};

export default WorkSection;
