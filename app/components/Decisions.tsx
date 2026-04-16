"use client";

import Image from "next/image";
import Texts from "./Texts";
import { motion } from "motion/react";
import { decisions } from "../data/decisions";
import { useTranslations } from "next-intl";

interface DecisionsProps {
    hasSimilarProjects?: boolean;
}

const Decisions = ({ hasSimilarProjects = true }: DecisionsProps) => {
    const t = useTranslations();

    return (
        <section className={`py-10 md:pt-[97px] md:pb-0 bg-athens ${hasSimilarProjects ? "mb-[60px]" : "mb-[120px]"}`}>

            <div className="container flex justify-between flex-col lg:flex-row gap-10 lg:gap-0">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >

                    <Image src={"/images/decisions_image.jpg"} alt="Decisions Image" width={495} height={550} aria-hidden="true" className="max-w-full w-full xl:w-[495px] h-[550px] object-cover lg:relative lg:z-[5] lg:-mb-[60px]" />

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full sm:max-w-full lg:max-w-[612px] flex flex-col gap-[60px]">

                    <Texts title={t("DecisionsBlock.title")} className="text-start" />

                    <div className="flex flex-col gap-5 mb-0 md:mb-[60px] lg:mb-0">
                        
                        {decisions.map((decision) => (

                            <motion.div
                                className="flex items-center gap-4"
                                key={decision.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}>

                                <Image src={"/icons/check_icon.svg"} alt="Check Icon" width={20} height={20} />

                                <span className="text-gray text-base leading-[160%] font-normal">{t(decision.textKey)}</span>

                            </motion.div>

                        ))}

                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default Decisions;