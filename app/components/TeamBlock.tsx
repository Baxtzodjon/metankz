"use client"

import Image from "next/image";
import Texts from "./Texts";
import { motion } from "motion/react";
import { teamMembers } from "../data/teamMembers";
import TeamSocialLinks from "../containers/TeamSocialLinks";
import { useTranslations } from "next-intl";

const TeamBlock = () => {
    const t = useTranslations("Team");

    return (
        <section className="relative overflow-hidden bg-light before:content-[''] before:absolute before:-left-[9px] before:-bottom-[195px] before:w-[570px] before:h-[1065px] before:bg-[url('/images/facts_bg.png')] before:bg-center before:bg-no-repeat before:bg-cover py-10 sm:pt-[100px] sm:pb-[120px]">

            <div className="container flex items-center justify-center flex-col">

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

                    {teamMembers.map((teamMember, index) => (

                        <motion.li
                            key={index}
                            variants={{
                                hidden: { opacity: 0, scale: 0.95, y: 20 },
                                visible: { opacity: 1, scale: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative group block max-w-full w-[285px] h-[416px] rounded bg-light overflow-hidden"
                        >
                            <div className="relative z-10 flex items-center flex-col gap-4">

                                <div className="relative w-full h-[340px] rounded overflow-hidden">
                                    <Image
                                        src={teamMember.image}
                                        alt={`${teamMember.nameKey} Image`}
                                        width={285}
                                        height={340}
                                        className="w-full h-full object-cover transition-colors duration-300 ease-in-out"
                                        aria-hidden="true"
                                    />

                                    {/* <div className="absolute bottom-0 left-0 bg-primary/70 w-full h-[60px] rounded-b flex items-center justify-center gap-3 translate-y-full group-hover:translate-y-0
                                    transition-transform duration-500 ease-out">

                                        <a href={"#"} target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-light text-xl" /></a>

                                        <a href={"#"} target="_blank" rel="noopener noreferrer"><FaTelegramPlane className="text-light text-xl" /></a>

                                        <a href={"#"} target="_blank" rel="noopener noreferrer"><FaInstagram className="text-light text-xl" /></a>

                                    </div> */}

                                    <TeamSocialLinks links={teamMember.socials} />

                                </div>

                                <div className="flex items-center justify-center flex-col gap-1">

                                    <h3 className="text-ebony lg:text-lg xl:text-xl leading-[150%] font-bold group-hover:text-primary transition-colors duration-300">
                                        {teamMember.nameKey}
                                    </h3>

                                    <p className="text-storm text-base leading-[160%] font-normal">{teamMember.roleKey}</p>

                                </div>

                            </div>

                        </motion.li>

                    ))}

                </motion.ul>

            </div>

        </section>
    );
};

export default TeamBlock;