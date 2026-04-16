"use client"

import Image from "next/image";
import Texts from "./Texts";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { suggestData } from "@/app/data/suggestData";

interface SuggestProps {
    slug: keyof typeof suggestData;
}

const Suggest = ({ slug }: SuggestProps) => {
    const t = useTranslations();

    const category = suggestData[slug];

    if (!category) {
        return null;
    }

    const { image, items } = category;

    const [openId, setOpenId] = useState<number | null>(
        items[0]?.id ?? null
    );

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

                    <Image src={image} alt={String(slug)} width={705} height={440} priority className="w-full h-[420px] object-cover rounded" />

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col gap-[60px] overflow-hidden">

                    <Texts title={t("Suggest.title")} className="text-start" />

                    <div className="flex flex-col gap-6">

                        {items.map((item) => {
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

                                            {isOpen ? (
                                                <FaMinus className="text-primary text-2xl transition-all" />
                                            ) : (
                                                <FaPlus className="text-primary text-2xl transition-all" />
                                            )}

                                        </motion.div>

                                        <h2 className="text-ebony text-xl sm:text-[28px] leading-[150%] font-bold">{t(item.titleKey)}</h2>

                                    </button>

                                    <motion.div
                                        animate={{
                                            height: isOpen ? "auto" : 0,
                                            opacity: isOpen ? 1 : 0
                                        }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                        className="overflow-hidden w-full"
                                    >

                                        <motion.p
                                            animate={{
                                                opacity: isOpen ? 1 : 0,
                                                y: isOpen ? 0 : 10
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="text-storm text-base leading-relaxed font-normal w-full lg:max-w-[575px] mt-2"
                                        >
                                            {t(item.contentKey)}
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