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

                    {/* <Image src={"/images/decisions_image.jpg"} alt="Decisions Image" width={495} height={550} aria-hidden="true" className="max-w-full w-[300px] h-[527px] sm:w-[380px] sm:h-[441px] lg:w-[380px] lg:h-[441px] xl:w-[495px] xl:h-[550px] object-cover relative z-[5] -mb-[60px]" /> */}

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

                                {/* <div>

                                <div className="overflow-hidden mb-[25px] rounded-full w-[72px] h-[72px]">

                                    <Image src={slide.image} alt={`Author ${slide.authorKey}`} width={72} height={72} className="block w-full h-full object-cover" />

                                </div>

                                <p className="text-gray text-base leading-[160%] font-normal mb-[25px]">{t(slide.textKey)}</p>

                                <span className="block mb-1 pr-[110px] text-ebony text-base leading-[160%] font-bold">{t(slide.authorKey)}</span>

                                <span className="block pr-[110px] text-storm text-sm leading-[150%] font-normal">{t(slide.positionKey)}</span>

                            </div> */}

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