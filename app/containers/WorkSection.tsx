"use client"

import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { workItems as allArticles } from "../data/workItems";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function WorkSection({ category }: { category: string }) {
    const t = useTranslations();

    const filtered =
        category === "all"
            ? allArticles
            : allArticles.filter((item) => item.query === category);

    return (
        <section className="bg-light py-10 sm:py-[120px]">

            <div className="container">

                {/* GRID вместо flex */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">

                    {filtered.map((item, index) => (

                        <motion.div
                            key={item.id + category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                        >

                            <Link
                                href={`/work/${item.slug}`}
                                className="group flex flex-col overflow-hidden rounded shadow-soft-multi_sec bg-light border-2 border-primary transition-default"
                            >
                                <Swiper slidesPerView={1} spaceBetween={5} className="w-full h-[345px]">

                                    {item.images.map((src, idx) => (
                                        <SwiperSlide key={idx}>

                                            <Image
                                                src={src}
                                                alt={item.titleKey}
                                                width={390}
                                                height={345}
                                                className="w-full h-[345px] object-contain rounded"
                                            />

                                        </SwiperSlide>
                                    ))}

                                </Swiper>

                                <motion.div
                                    className="flex items-center flex-col pt-[16px] pb-[23px] px-[10px]"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
                                >
                                    <h3 className="text-primary text-xl xl:text-2xl leading-[150%] font-bold text-center">
                                        {t(item.category)}
                                    </h3>

                                    <h3 className="text-ebony text-lg xl:text-xl leading-[150%] font-bold mb-[5px] text-center">
                                        {t(item.titleKey)}
                                    </h3>

                                    <span className="text-storm text-sm leading-[150%] text-center">
                                        {t(item.descriptionKey)}
                                    </span>

                                    <div className="mt-6 mb-0 md:mb-[-72px] border border-current rounded pt-[13px] pb-[13px] px-[31px] font-bold text-sm tracking-wider uppercase text-primary group-hover:mb-0 transition-default will-change-[margin] hover:bg-primary hover:text-white">
                                        {t("PortfolioSection.viewProject")}
                                    </div>

                                </motion.div>

                            </Link>

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
};