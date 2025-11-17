"use client"

import Image from "next/image";
import Texts from "./Texts";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "motion/react";

type AccordionItem = {
    id: number;
    titleKey: string;
    contentKey: string;
};

const accordionData: AccordionItem[] = [
    {
        id: 1,
        titleKey: "Interior design of apartments",
        contentKey:
            "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
    },
    {
        id: 2,
        titleKey: "Interior design of private houses",
        contentKey:
            "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
    },
];

const Suggest = () => {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-10 sm:pt-[100px] sm:pb-[120px] lg:pt-[120px] lg:pb-[180px] overflow-hidden">

            <div className="container flex items-start justify-between gap-10 flex-col lg:flex-row">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full lg:max-w-[570px] overflow-hidden"
                >

                    <Image src={"/images/portfolio_first.jpg"} alt={"Portfolio Image"} width={705} height={440} className="w-full h-[420px] object-cover rounded" />

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col gap-[60px] overflow-hidden">

                    <Texts title="We offer" className="text-start" />

                    <div className="flex flex-col gap-6">

                        {accordionData.map((item) => {
                            const isOpen = openId === item.id;

                            return (
                                <motion.div key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="flex flex-col gap-3">

                                    <button
                                        onClick={() => toggleAccordion(item.id)}
                                        className="flex items-center gap-5 text-left focus:outline-none"
                                    >
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >

                                            {openId === item.id ? (
                                                <FaMinus className="text-primary text-2xl transition-all" />
                                            ) : (
                                                <FaPlus className="text-primary text-2xl transition-all" />
                                            )}

                                        </motion.div>

                                        <h2 className="text-ebony text-xl sm:text-[28px] leading-[150%] font-bold">{item.titleKey}</h2>

                                    </button>

                                    {/* <AnimatePresence initial={false}>

                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className={`overflow-hidden transition-default ${openId === item.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                        >

                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-storm text-base leading-relaxed font-normal w-full lg:max-w-[575px] mt-2">
                                                {item.contentKey}
                                            </motion.p>

                                        </motion.div>

                                    </AnimatePresence> */}

                                    <motion.div
                                        animate={{
                                            height: openId === item.id ? "auto" : 0,
                                            opacity: openId === item.id ? 1 : 0
                                        }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                        className="overflow-hidden w-full"
                                    >
                                        
                                        <motion.p
                                            animate={{
                                                opacity: openId === item.id ? 1 : 0,
                                                y: openId === item.id ? 0 : 10
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="text-storm text-base leading-relaxed font-normal w-full lg:max-w-[575px] mt-2"
                                        >
                                            {item.contentKey}
                                        </motion.p>

                                    </motion.div>

                                </motion.div>
                            );
                        })}

                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default Suggest;