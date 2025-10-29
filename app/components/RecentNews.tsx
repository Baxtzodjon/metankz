"use client"

import Image from "next/image";
import Texts from "./Texts";
import BtnText from "./BtnText";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const articles = [
    {
        title: "How to Build Climate Change-Resilient Infrastructure",
        date: "2020-06-24",
        dateLabel: "June 24, 2020",
        image: "/images/recent_article_fir.jpg",
        category: "Industry News",
        paragraphVisible: true,
    },
    {
        title: "How Construction Can Help Itself",
        date: "2020-06-12",
        dateLabel: "June 12, 2020",
        image: "/images/recent_article_sec.jpg",
        category: "Innovation",
        paragraphVisible: false,
    },
    {
        title: "Types of Flooring Materials",
        date: "2019-12-01",
        dateLabel: "December 1, 2019",
        image: "/images/recent_article_thr.jpg",
        category: "Company News",
        paragraphVisible: false,
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.2,
            ease: "easeOut" as const,
        },
    }),
};

const RecentNews = () => {
    const t = useTranslations("RecentNews");

    return (
        <section className="pt-20 pb-[120px] bg-light">

            <div className="container">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    
                    <Texts title={t("title")} className="mb-[60px]" />

                </motion.div>

                <ul className="p-0 m-0 grid grid-cols-12 grid-rows-none lg:grid-rows-[255px_255px] gap-[30px] mb-20">

                    {articles.map((article, index) => (
                        <motion.li
                            key={index}
                            className={
                                index === 0
                                    ? "col-span-12 lg:col-span-7 row-auto lg:row-span-2"
                                    : "col-span-12 lg:col-span-5"
                            }
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <article className="overflow-hidden rounded h-full shadow-soft-multi_sec bg-light">

                                <Image
                                    src={article.image}
                                    alt={`article ${index + 1}`}
                                    width={index === 0 ? 705 : 495}
                                    height={index === 0 ? 360 : 156}
                                    className={`max-w-full w-full object-cover lg:object-fill`}
                                />

                                <div className={index === 0 ? "py-5 px-6" : "py-3 px-6"}>

                                    <h3 className={index === 0 ? "mb-[13px]" : "mb-[9px]"}>

                                        <a
                                            href="#"
                                            className="text-ebony text-xl leading-[150%] font-bold hover:text-primary transition-default"
                                        >
                                            {article.title}
                                        </a>

                                    </h3>

                                    <div className="mb-[17px] text-storm text-sm leading-[150%] font-normal">

                                        <a
                                            href="#"
                                            className="relative mr-[21px] hover:text-primary transition-default after:content-[''] after:absolute after:-right-[13px] after:top-[2px] after:w-[1px] after:h-[11px] after:bg-current after:transition-default group-hover:after:bg-primary"
                                        >
                                            {article.category}
                                        </a>

                                        <time className="relative" dateTime={article.date}>
                                            {article.dateLabel}
                                        </time>

                                    </div>

                                    {article.paragraphVisible && (
                                        <p className="m-0 text-gray text-base leading-[160%] font-normal">
                                            Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus.
                                            Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis
                                            convallis enim, nibh convallis...
                                        </p>
                                    )}

                                </div>

                            </article>

                        </motion.li>
                    ))}

                </ul>

                <BtnText title={t("btnTitle")} link={t("btnLink")} />

            </div>

        </section>
    );
};

export default RecentNews;