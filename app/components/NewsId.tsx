"use client"

import Image from "next/image";
import { motion, Variants } from 'motion/react';
import Link from "next/link";
import { articles } from "@/app/data/newsData";
import { useTranslations } from "next-intl";
import { socialLinks } from "../data/socialLinks";

interface NewsIdProps {
    id: string;
}

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const NewsId = ({ id }: NewsIdProps) => {
    const t = useTranslations();
    const article = articles.find((a) => a.id === Number(id));

    if (!article) return null;

    return (
        <section className="pb-20">

            <div className="w-full h-[600px] bg-athens">

                <motion.div className="container flex flex-col gap-10 pt-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                /* whileInView="show"
                viewport={{ once: true }} */
                >

                    <motion.div className="flex items-center gap-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                    >

                        <Link href={"/"} className="text-gray text-sm font-normal leading-[150%] hover:text-[#9A9CA5] transition-default">{t("Header.nav.home")}</Link>

                        <Link href={"/news"} className="text-gray text-sm font-normal leading-[150%] capitalize flex items-center gap-2"><small>/</small> {t("Header.nav.news")}</Link>

                        <Link href={`/news/${article.id}`} className="text-[#9A9CA5] text-sm font-normal leading-[150%] capitalize flex items-center gap-2"><small>/</small> {t(article.titleKey)}</Link>

                    </motion.div>

                    <div className="flex flex-col gap-12">

                        <motion.h2 className="text-ebony text-[35px] leading-[45px] sm:text-5xl sm:leading-[120%] md:text-[64px] font-bold capitalize"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        > {t(article.titleKey)}</motion.h2>

                        <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-0">

                            <div className="flex items-center gap-1">

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >

                                    <Link href={`/news/${article.id}`} className="relative mr-[21px] capitalize text-primary text-base font-bold transition-default after:content-[''] after:absolute after:-right-[13px] after:top-1 after:w-[1px] after:h-[11px] after:bg-current after:transition-default group-hover:after:bg-primary">{t(article.category)}</Link>

                                </motion.div>

                                <motion.time className="flex items-center gap-2 text-storm text-base sm:leading-[160%] font-normal" dateTime={article.date}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                ><Image src={"/icons/clock_news.svg"} alt="Clock Id Page" width={20} height={20} />{t(article.dateLabel)}</motion.time>

                            </div>

                            <div className="flex items-center gap-3">

                                {socialLinks.map(({ href, icon: Icon, label }) => (
                                    <a key={href} href={href} target="_blank" aria-label={label}>

                                        <Icon className="w-6 h-6 text-storm transition-default hover:text-primary" />

                                    </a>
                                ))}

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

            {/* w-full h-[1380px] sm:h-[900px] md:h-[880px] xl:h-[1080px] */}

            <div className="container flex items-center justify-center flex-col gap-20 -mt-20">

                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >

                    <Image src={article.image} alt={article.titleKey} width={1230} height={500} className="w-[1230px] lg:w-full h-[500px] rounded object-cover" />

                </motion.div>

                <motion.div className="flex flex-col gap-[60px]"
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >

                    <p className="max-w-[810px] text-ebony text-xl leading-[150%] font-bold">{t(article.descriptionKey)}</p>

                    <div className="flex items-center gap-3">

                        <span className="text-ebony text-base leading-[160%] font-bold">Share:</span>

                        {socialLinks.map(({ href, icon: Icon, label }) => (
                            <a key={href} href={href} target="_blank" aria-label={label}>

                                <Icon className="w-6 h-6 text-storm transition-default hover:text-primary" />

                            </a>
                        ))}

                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default NewsId;