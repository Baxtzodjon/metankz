"use client"

import { useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import BtnText from './BtnText';
import { motion } from 'motion/react';
import { workItems } from '../data/workItems';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

/* ================= TYPES ================= */

type PortfolioMode = "default" | "related" | "similar";

interface PortfolioSectionProps {
    mode?: PortfolioMode;
    serviceSlug?: string;
    currentWorkSlug?: string;
    currentCategory?: string;
}

/* ================= DATA ================= */

const serviceToQueries: Record<string, string[]> = {
    stations: ["storage", "distribution", "compressor"],
    equipment: ["filtration", "safety", "control"],
    installation: ["compressor", "distribution", "storage"],
    delivery: ["dispensing", "storage"],
};

/* ================= COMPONENT ================= */

const PortfolioSection = ({
    mode = "default",
    serviceSlug,
    currentWorkSlug,
    currentCategory,
}: PortfolioSectionProps) => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const t = useTranslations();

    const onSwiperInit = (swiper: SwiperClass) => {
        swiperRef.current = swiper;

        const updateState = () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            setIsLocked(swiper.isLocked);
        };

        updateState();

        swiper.on("slideChange", updateState);
        swiper.on("lock", updateState);
        swiper.on("unlock", updateState);
    };

    /* ================= ITEMS LOGIC ================= */

    const items = useMemo(() => {
        if (mode === "related" && serviceSlug) {
            const queries = serviceToQueries[serviceSlug] ?? [];

            return workItems
                .filter(item => queries.includes(item.query))
                .slice(0, 3);
        }

        // 🔹 WORK/[slug] → Similar projects
        if (mode === "similar" && currentCategory && currentWorkSlug) {
            const similar = workItems.filter(
                item =>
                    item.query === currentCategory &&
                    item.slug !== currentWorkSlug
            );

            // ❌ если похожих нет — ничего не показываем
            if (similar.length === 0) return [];

            return similar.slice(0, 3);
        }

        // 🔹 DEFAULT (home, work list)
        return workItems.slice(0, 6);
    }, [mode, serviceSlug, currentCategory, currentWorkSlug]);

    if (!items.length) return null;

    /* ================= RENDER ================= */
    /* const items = workItems.slice(0, 6); */

    return (
        <section className="bg-light py-10 sm:py-[120px]">

            <div className="container">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="flex items-end justify-between flex-wrap sm:flex-nowrap mb-12">

                    <h2 className="max-w-none lg:max-w-[710px] text-ebony text-[28px] sm:text-[40px] lg:text-[46px] leading-10 sm:leading-[55px] lg:leading-[130%] font-bold mb-[15px] pb-0 lg:pb-3 lg:m-0">
                        {mode === "related"
                            ? t("PortfolioSection.relatedTitle")
                            : mode === "similar"
                            ? t("PortfolioSection.similarTitle")
                            : t("PortfolioSection.title")}
                    </h2>

                    {!isLocked && (
                        <div className="relative flex items-center gap-3 z-[15] select-none translate-x-0 sm:translate-x-3">

                            <button className={`portfolio-section__prev flex items-center justify-center rounded-full w-12 h-12 text-gray text-lg transition-default 
                            ${isBeginning ? 'opacity-40 pointer-events-none' : 'hover:text-light hover:bg-primary cursor-pointer'}`} aria-label="Previous slide">

                                <FaArrowLeftLong />

                            </button>

                            <button className={`portfolio-section__next flex items-center justify-center rounded-full w-12 h-12 text-gray text-lg transition-default 
                            ${isEnd ? 'opacity-40 pointer-events-none' : 'hover:text-light hover:bg-primary cursor-pointer'}`} aria-label="Next slide">

                                <FaArrowRightLong />

                            </button>

                        </div>
                    )}

                </motion.div>

                <div className="relative w-full overflow-hidden z-[1]">

                    <div className="m-[-100px] p-[100px] touch-pan-y">

                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '.portfolio-section__next',
                                prevEl: '.portfolio-section__prev',
                            }}
                            spaceBetween={30}
                            slidesPerView={3}
                            onSwiper={onSwiperInit}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    simulateTouch: true,
                                },
                                576: {
                                    slidesPerView: 2,
                                    simulateTouch: true,
                                },
                                768: {
                                    slidesPerView: 3,
                                    simulateTouch: false,
                                },
                            }}
                        >
                            {items.map((item) => (

                                <SwiperSlide key={item.id}>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, ease: 'easeOut', delay: item.id * 0.1 }}
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

                                                <h3 className="text-ebony text-lg xl:text-xl leading-[150%] font-bold mb-[5px] text-center">{t(item.titleKey)}</h3>

                                                <span className="text-storm text-sm leading-[150%] text-center">{t(item.descriptionKey)}</span>

                                                <div className="mt-6 mb-0 md:mb-[-72px] border border-current rounded pt-[13px] pb-[13px] px-[31px] font-bold text-sm tracking-wider uppercase text-primary group-hover:mb-0 transition-default will-change-[margin] hover:bg-primary hover:text-white transition-default">{t("PortfolioSection.viewProject")}</div>

                                            </motion.div>

                                        </Link>

                                    </motion.div>

                                </SwiperSlide>

                            ))}
                        </Swiper>

                    </div>

                </div>

                <BtnText title={t("PortfolioSection.btnTitle")} link="/work" linkTitle={t("PortfolioSection.btnLink")} className="mt-20" />

            </div>

        </section>
    );
};

export default PortfolioSection;