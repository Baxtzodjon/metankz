"use client"
import Link from "next/link";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const NotFound = () => {
    const t = useTranslations();

    return (
        <motion.div className="container pt-20 pb-[100px] sm:pb-[140px] flex flex-col gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >

            <motion.div className="flex items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            >

                <Link href={"/"} className="text-gray text-sm font-normal leading-[150%] hover:text-[#9A9CA5] transition-default">{t("Header.nav.home")}</Link>

                <span className="text-[#9A9CA5] text-sm font-normal leading-[150%] capitalize flex items-center gap-2 cursor-pointer"><small>/</small>{t("NotFound.error")}</span>

            </motion.div>

            <div className="flex items-center justify-center gap-20 flex-col">

                <motion.div
                    className="flex items-center justify-center flex-col gap-10"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                >

                    <motion.h1
                        className="text-ebony text-5xl sm:text-[80px] md:text-[110px] font-medium text-center"
                        variants={{
                            hidden: { opacity: 0, y: -30, scale: 0.95 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: { duration: 0.8, ease: "easeOut" }
                            }
                        }}
                    >{t("NotFound.title")}</motion.h1>

                    <motion.p
                        className="text-ebony text-base sm:text-lg leading-[150%] font-normal text-center"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.7, ease: "easeOut" }
                            }
                        }}
                    >{t("NotFound.description")}</motion.p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                >

                    <button className="py-[15px] px-[39px] bg-primary rounded text-light text-base leading-[20px] tracking-wider font-bold uppercase hover:bg-active transition-default cursor-pointer"><Link href={"/"}>{t("NotFound.button")}</Link></button>

                </motion.div>

            </div>

        </motion.div>
    )
}

export default NotFound;