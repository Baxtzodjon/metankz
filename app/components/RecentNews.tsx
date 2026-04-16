"use client"

import Image from "next/image";
import Texts from "./Texts";
import BtnText from "./BtnText";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { articles as allArticles } from "@/app/data/newsData";
import Link from "next/link";

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
    const t = useTranslations();

    // ⬇️ ТОЛЬКО данные, верстка не менялась
    const articles = allArticles.slice(0, 3).map((item, index) => ({
        id: item.id,
        title: t(item.titleKey),
        descriptionKey: t(item.descriptionKey),
        date: item.date,
        dateLabel: t(item.dateLabel),
        image: item.image,
        category: t(item.category),
        query: item.query,
        paragraphVisible: index === 0,
    }));

    return (
        <section className="pt-20 pb-[120px] bg-light">

            <div className="container">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >

                    <Texts title={t("RecentNews.title")} className="mb-[60px]" />

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

                                <div
                                    className={`relative w-full ${index === 0 ? "h-[360px]" : "h-[156px]"
                                        }`}
                                >

                                    <Image
                                        src={article.image}
                                        alt={`article ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes={index === 0 ? "705px" : "495px"}
                                    />

                                </div>

                                <div className={index === 0 ? "py-5 px-6" : "py-3 px-6"}>

                                    <h3 className={index === 0 ? "mb-[13px]" : "mb-[9px]"}>

                                        <Link
                                            href={`/news/${article.id}`}
                                            className="text-ebony text-xl leading-[150%] font-bold hover:text-primary transition-default"
                                        >

                                            {/* до lg и xl+ — полный заголовок */}
                                            <span className="block lg:hidden">
                                                {article.title}
                                            </span>

                                            {/* только от lg до xl — укороченный */}
                                            <span className="hidden lg:block">
                                                {index === 0
                                                    ? article.title
                                                    : article.title.substring(0, 30) + "..."}
                                            </span>
                                            
                                        </Link>

                                    </h3>

                                    <div className="mb-[17px] text-storm text-sm leading-[150%] font-normal">

                                        <Link
                                            href={`/news?category=${article.query}`}
                                            className="relative mr-[21px] hover:text-primary transition-default after:content-[''] after:absolute after:-right-[13px] after:top-[2px] after:w-[1px] after:h-[11px] after:bg-current after:transition-default group-hover:after:bg-primary"
                                        >
                                            {article.category}
                                        </Link>

                                        <time className="relative" dateTime={article.date}>
                                            {article.dateLabel}
                                        </time>

                                    </div>

                                    {article.paragraphVisible && (
                                        <p className="m-0 text-gray text-base leading-[160%] font-normal">
                                            {/* Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus.
                                            Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis
                                            convallis enim, nibh convallis... */}
                                            {article.descriptionKey.substring(0, 125)}...
                                        </p>
                                    )}

                                </div>

                            </article>

                        </motion.li>
                    ))}

                </ul>

                <BtnText title={t("RecentNews.btnTitle")} link="/news" linkTitle={t("RecentNews.btnLink")} />

            </div>

        </section>
    );
};

export default RecentNews;