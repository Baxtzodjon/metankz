"use client"

import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { workItems as allArticles } from "../data/workItems";
import Link from "next/link";

export default function WorkSection({ category }: { category: string }) {
    const t = useTranslations();
    /* const ITEMS_PER_PAGE = 12; */

    // 1) FILTER by category
    const filtered =
        category === "all"
            ? allArticles
            : allArticles.filter((item) => item.query === category);

    // 2) PAGINATION
    /* const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const paginated = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const nextPage =
        startIndex + ITEMS_PER_PAGE < filtered.length ? page + 1 : null;

    const prevPage = page > 1 ? page - 1 : null;

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE); */

    return (
        <section className="bg-light py-10 sm:py-[120px]">

            <div className="container">

                {/* GRID вместо flex */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">

                    {filtered.map((item, index) => ( /* workItems */

                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                        >

                            <Link
                                href={`/work/${item.slug}`}
                                className="group flex flex-col overflow-hidden rounded shadow-soft-multi_sec bg-light border-2 border-primary transition-default"
                            >

                                <Image
                                    className="w-full h-[345px] object-contain"
                                    src={item.images[0]}
                                    alt={item.titleKey}
                                    width={390}
                                    height={345}
                                />

                                <motion.div
                                    className="flex items-center flex-col pt-[16px] pb-[23px] px-[10px]"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3}}
                                >

                                    <h3 className="text-ebony text-lg xl:text-xl leading-[150%] font-bold mb-[5px] text-center">
                                        {item.titleKey}
                                    </h3>

                                    <span className="text-storm text-sm leading-[150%] text-center">
                                        {item.descriptionKey}
                                    </span>

                                    <div className="mt-6 mb-0 md:mb-[-72px] border border-current rounded pt-[13px] pb-[13px] px-[31px] font-bold text-sm tracking-wider uppercase text-primary group-hover:mb-0 transition-default will-change-[margin] hover:bg-primary hover:text-white">
                                        {t("PortfolioSection.viewProject")}
                                    </div>

                                </motion.div>

                            </Link>

                        </motion.div>
                    ))}

                </div>

                {/* <button
                    className="flex items-center gap-4 text-gray text-base font-bold hover:text-primary transition"
                >
                    <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>

                    <Image
                        className="reverse-spin"
                        src={"/icons/spinner_work_block.svg"}
                        alt={"Spinner"}
                        width={24}
                        height={24}
                    />

                    Load More
                </button> */} {/* не надо */}

            </div>

        </section>
    );
};