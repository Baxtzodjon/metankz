"use client"

import Image from "next/image";
import Texts from "./Texts";
import { motion } from "motion/react";

interface HowDoItItem {
    id: number;
    titleKey: string;
    contentKey: string;
};

const infoLineData: HowDoItItem[] = [
    {
        id: 1,
        titleKey: "Work Estimate",
        contentKey: "Culpa nostrud commodo ea consequat aliquip reprehenderit.",
    },
    {
        id: 2,
        titleKey: "Contract",
        contentKey: "Laoreet ultrices curabitur luctus quisque consequat. Leo lorem velit imperdiet auctor et tempor.",
    },
    {
        id: 3,
        titleKey: "Mobilization",
        contentKey: "Odio massa scelerisque purus arcu sed velit eleifend cursus leo.",
    },
    {
        id: 4,
        titleKey: "Construction Work",
        contentKey: "Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.",
    },
];

const HowWeDoIt = () => {
    return (
        <section className="pb-10 sm:pb-[120px] overflow-hidden">

            <div className="container flex flex-col gap-6 lg:gap-[60px]">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >

                    <Texts title="That’s how we do it" className="text-start" />

                </motion.div>

                <div className="flex flex-wrap xl:flex-nowrap gap-[30px]">

                    {infoLineData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40, scale: 0.97 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                            className="flex flex-col group cursor-pointer overflow-hidden">

                            <div className="flex items-center gap-[23px]">

                                {/* <div className="flex items-center justify-center hover:w-[84px] hover:h-[84px] rounded-full hover:bg-primary hover:opacity-30">

                                    <Texts title={String(item.id).padStart(2, "0")} className="text-[#D7DADD] text-start z-10 hover:text-primary transition-default" />

                                </div> */}

                                {/* <div className="relative items-center justify-center p-3 rounded-full transition-default hover:scale-110 hover:bg-primary/5 group">

                                    <div className="relative flex items-center justify-center p-2 rounded-full transition-default hover:scale-110 hover:bg-primary/10 group">

                                        <Texts title={String(item.id).padStart(2, "0")} className="text-[#D7DADD] text-start z-10 transition-default group-hover:text-primary" />

                                    </div>
                                    
                                </div> */}

                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 + 0.1 }}
                                    className="relative flex items-center justify-center p-3 rounded-full"
                                >

                                    {/* Внешний круг */}
                                    <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>

                                    {/* Внутренний круг */}
                                    <div className="relative flex items-center justify-center p-2 rounded-full transition-all duration-300 group-hover:bg-primary/20">

                                        {/* Текст */}
                                        <Texts
                                            title={String(item.id).padStart(2, "0")}
                                            className="!text-[#D7DADD] z-10 transition-colors duration-300 group-hover:!text-primary"
                                        />

                                    </div>

                                </motion.div>

                                {/* показываем линию только если элемент не последний */}
                                {index !== infoLineData.length - 1 && (
                                    <motion.div
                                        initial={{ width: 0, opacity: 0 }}
                                        whileInView={{ width: 209, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 + 0.2 }}
                                        className="hidden xl:block overflow-hidden"
                                    >
                                        <Image src={"/icons/line.svg"} alt={item.titleKey} width={209} height={0} />

                                    </motion.div>
                                )}

                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 + 0.2 }}
                                className="flex flex-col gap-2">

                                <h3 className="text-ebony lg:text-lg xl:text-xl leading-[150%] font-bold group-hover:text-primary transition-colors duration-300">
                                    {item.titleKey}
                                </h3>

                                <p className="text-storm text-base leading-relaxed font-normal w-full lg:max-w-[285px]">
                                    {item.contentKey}
                                </p>

                            </motion.div>

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default HowWeDoIt;