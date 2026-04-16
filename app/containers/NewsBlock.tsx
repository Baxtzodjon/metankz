"use client"
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import Pagination from "./Pagination";
import { articles as allArticles } from "@/app/data/newsData";
import { useTranslations } from "next-intl";

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

    return (
        <section className="pb-10 sm:pb-[120px] lg:pb-[180px] bg-light">

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
                                            href={`/news?category=${item.query}`}
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
