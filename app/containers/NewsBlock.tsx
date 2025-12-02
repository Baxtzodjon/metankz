"use client"
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import Pagination from "./Pagination";
import { articles as allArticles } from "@/app/data/newsData";
import { useTranslations } from "next-intl";

/* const articles = [
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
        paragraphVisible: true,
    },
]; */

/* interface NewsBlockProps {
    page: number;
    category: string;
} */

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

export default function NewsBlock({
    page,
    category,
}: {
    page: number;
    category: string;
}) {
    const t = useTranslations();
    const ITEMS_PER_PAGE = 6;

    // 1) FILTER by category
    const filtered =
        category === "all"
            ? allArticles
            : allArticles.filter((item) => item.query === category);

    // 2) PAGINATION
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const paginated = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const nextPage =
        startIndex + ITEMS_PER_PAGE < filtered.length ? page + 1 : null;

    const prevPage = page > 1 ? page - 1 : null;

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

    /* const data = await getNews({ page, category });
    
    const articles = data.results || [];
    const nextPage = data.nextPage;
    const prevPage = data.previousPage; */

    return (
        <section className="pb-[180px] bg-light">

            <div className="container">

                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-[60px] p-0 m-0">

                    {paginated.map((item, index) => (
                        <motion.li
                            key={index}
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
                                    src={item.image}
                                    alt={t(item.titleKey)}
                                    width={700}
                                    height={360}
                                    className="w-full h-[306px] object-cover"
                                />

                                <div className="py-5 px-6">

                                    {/* <h3 className="mb-[13px]">

                                        <Link
                                            href={`/news/${item.id}`}
                                            className="text-ebony text-xl leading-[150%] font-bold hover:text-primary transition-default"
                                        >
                                            {item.title}
                                        </Link>

                                    </h3> */}

                                    {/* <div className="mb-[17px] text-storm text-sm leading-[150%] font-normal">

                                        <a
                                            href="#"
                                            className="relative mr-[21px] hover:text-primary transition-default after:content-[''] after:absolute after:-right-[13px] after:top-[2px] after:w-[1px] after:h-[11px] after:bg-current after:transition-default group-hover:after:bg-primary"
                                        >
                                            {articles}
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
                                    )} */}

                                    <h3 className="mb-[13px]">

                                        <Link
                                            href={`/news/${item.id}`}
                                            className="text-ebony text-xl font-bold hover:text-primary"
                                        >
                                            {t(item.titleKey)}
                                        </Link>

                                    </h3>

                                    <div className="mb-[17px] text-storm text-sm leading-[150%] font-normal">

                                        <Link
                                            href={`/news/${item.id}`}
                                            className="relative mr-[21px] capitalize hover:text-primary transition-default after:content-[''] after:absolute after:-right-[13px] after:top-[2px] after:w-[1px] after:h-[11px] after:bg-current after:transition-default group-hover:after:bg-primary"
                                        >
                                            {t(item.category)}
                                        </Link>

                                        <time className="relative" dateTime={item.date}>
                                            {t(item.dateLabel)}
                                        </time>

                                    </div>

                                    <p className="text-gray text-base leading-[160%]">

                                        {t(item.descriptionKey).substring(0, 125)}...

                                    </p>
                                    
                                </div>

                            </article>

                        </motion.li>
                    ))}

                </ul>

                <Pagination
                    currentPage={page}
                    nextPage={nextPage ?? undefined}
                    prevPage={prevPage ?? undefined}
                    totalPages={totalPages}
                    category={category}
                />

            </div>

        </section>
    );
};

/* "use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Pagination from "./Pagination";
import Link from "next/link";

interface NewsBlockProps {
    page: number;
    category: string;
}

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

export default function NewsBlock({ page, category }: NewsBlockProps) {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(
            `https://newsdata.io/api/1/latest?apikey=pub_0ed884d37e4d442fbfe35304acb36381&language=en`
        )
            .then((res) => {
                if (!res.ok) throw new Error("API error: " + res.status);
                return res.json();
            })
            .then((json) => setData(json))
            .catch((err) => {
                console.error("Fetch error:", err);
                setError(err.message);
            });
    }, []);

    if (error) return <div className="text-center p-10">Error: {error}</div>;
    if (!data) return <div className="text-center p-10">Loading...</div>;

    const articles = data.results || [];
    const nextPage = data.nextPage;
    const prevPage = data.previousPage;

    return (
        <section className="pb-[180px] bg-light">
            <div className="container">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-[60px] p-0 m-0">
                    {articles.map((item: any, index: number) => (
                        <motion.li
                            key={item.article_id || item.title + index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <article className="overflow-hidden rounded h-full shadow-soft-multi_sec bg-white">
                                <img
                                    src={item.image_url || "/images/default_news.jpg"}
                                    alt={item.title}
                                    className="w-full h-[306px] object-cover"
                                />

                                <div className="py-5 px-6">
                                    <h3 className="mb-[13px]">
                                        <Link
                                            href={`/news/${item.article_id || "#"}`}
                                            className="text-ebony text-xl font-bold hover:text-primary"
                                        >
                                            {item.title}
                                        </Link>
                                    </h3>

                                    <div className="mb-[17px] text-sm text-storm">
                                        {item.source_name} | {item.pubDate}
                                    </div>

                                    <p className="text-gray-700 text-base leading-[160%]">
                                        {item.description || "No description available."}
                                    </p>
                                </div>
                            </article>
                        </motion.li>
                    ))}
                </ul>

                <Pagination
                    currentPage={page}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    category={category}
                />
            </div>
        </section>
    );
} */
