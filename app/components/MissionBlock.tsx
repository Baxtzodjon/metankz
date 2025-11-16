"use client"

import Image from "next/image";
import Texts from "./Texts";
import KnowForm from "./KnowForm";
import { motion } from "motion/react";
import { missionTexts } from "../data/missionTexts";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface MisssonBlcProps {
    className?: string;
}

const MissionBlock: React.FC<MisssonBlcProps> = ({ className }) => {
    const t = useTranslations("MissionBlock");
    const pathname = usePathname();

    /* const hidePaths = ['/about', '/ru/about', '/uz/about', '/en/about', '/kz/about']; */

    const segments = pathname.split("/").filter(Boolean);

    const lastSegment = segments[segments.length - 1];
    const isAboutPage = lastSegment === "about";

    const isSlugPage = segments.length > 1 && !isAboutPage;

    const hideKnowForm = isSlugPage || isAboutPage;

    return (
        <section className={`pt-10 sm:pt-[60px] md:pt-[120px] ${className || ""}`}>

            <div className="container">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex items-center justify-center flex-col gap-6"
                >
                    {!isSlugPage && (
                        <Texts title={t("title")} description={t("description")} />
                    )}

                    {isSlugPage && (
                        <>
                            <h2 className="text-light text-[28px] sm:text-[46px] leading-10 sm:leading-[130%] font-bold text-center">Our benefits</h2>


                            <p className="text-storm text-base sm:text-lg leading-[150%] font-normal text-center mb-[25px] sm:mb-[60px]">{t("description")}</p>
                        </>
                    )}

                </motion.div>

                {!isSlugPage && (
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
                        className="flex items-center justify-center lg:items-start lg:justify-start flex-wrap gap-[25px] lg:grid grid-cols-1 lg:grid-cols-3 xl:gap-[188px] mb-[27px] relative"
                    >
                        {missionTexts.map(({ image, titleKey, descriptionKey }, idx) => (
                            <motion.li
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                className="flex items-center flex-col gap-6 relative text-center after:content-[''] after:absolute after:top-0 after:right-[-94px] after:w-px after:h-full after:bg-no-repeat after:bg-center after:bg-cover after:bg-[url('https://live.verstaem.online/createx/img/divider.svg')] last:after:hidden after:hidden xl:after:block"
                            >

                                <Image src={image} alt={t(`values.${titleKey}`)} width={48} height={48} />

                                <div className="flex flex-col gap-2">

                                    <h3 className="text-ebony text-xl leading-[150%] font-bold text-center">{t(`values.${titleKey}`)}</h3>

                                    <p className="w-[285px] text-storm text-base leading-[160%] font-normal text-center">{t(`values.${descriptionKey}`)}</p>

                                </div>

                            </motion.li>
                        ))}

                    </motion.ul>
                )}

                {isSlugPage && (
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
                        className="flex items-center justify-center lg:items-start lg:justify-start flex-wrap gap-[25px] lg:grid grid-cols-1 lg:grid-cols-3 xl:gap-[188px] mb-[27px] relative"
                    >
                        {missionTexts.map(({ image, titleKey }, idx) => ( /* descriptionKey */
                            <motion.li
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                className="flex items-center flex-col gap-6 relative text-center after:content-[''] after:absolute after:top-0 after:right-[-94px] after:w-px after:h-full after:bg-no-repeat after:bg-center after:bg-cover after:bg-[url('https://live.verstaem.online/createx/img/divider.svg')] last:after:hidden after:hidden xl:after:block"
                            >

                                <Image src={image} alt={t(`values.${titleKey}`)} width={48} height={48} />

                                <div className="flex flex-col gap-2">

                                    <h3 className="text-light text-xl leading-[150%] font-bold text-center">Fixed Terms & Cost</h3>

                                    <p className="w-[285px] text-storm text-base leading-[160%] font-normal text-center">Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>

                                </div>

                            </motion.li>
                        ))}

                    </motion.ul>
                )}

                {isSlugPage && (
                    <div className="relative top-5 lg:top-[75px] flex items-center justify-center flex-col gap-2">

                        <Link href={"/"} className="xl:w-[390px] xl:h-[52px] py-[15px] px-[39px] bg-primary rounded text-light text-base leading-[20px] tracking-wider font-bold uppercase text-center hover:bg-active transition-default cursor-pointer">Discuss a project</Link>

                    </div>
                )}

                {!hideKnowForm && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    >

                        <KnowForm />

                    </motion.div>
                )}

            </div>

        </section>
    );
};

export default MissionBlock;