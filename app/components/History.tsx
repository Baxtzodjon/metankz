"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import Texts from "./Texts";
import { timeline } from "../data/historyInfo";
import { useTranslations } from "next-intl";

const History = () => {
    const t = useTranslations();
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperClass | null>(null);

    const handleSlideChange = (swiper: SwiperClass) => {
        setActiveIndex(swiper.realIndex);
    };

    const handleTimelineClick = (index: number) => {
        swiperRef.current?.slideToLoop(index);
    };

    return (
        <motion.section
            className="bg-athens overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
        >

            <div className="container flex flex-col lg:flex-row justify-between py-10 sm:pt-[180px] sm:pb-[100px]">

                <motion.div
                    className="hidden lg:flex flex-col gap-[60px]"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >

                    <motion.h2
                        className="text-ebony text-[38px] xl:text-[46px] leading-10 sm:leading-[130%] font-bold"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {t("History.title")}
                    </motion.h2>

                    <div className="relative py-1">

                        <div className="absolute top-0 left-0 h-full w-[2px] bg-[#9A9CA5] opacity-50"></div>

                        <motion.div
                            className="absolute left-0 w-[2px] bg-primary origin-top"
                            initial={{ height: 0 }}
                            animate={{ height: `${((activeIndex + 1) / timeline.length) * 100}%` }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        />

                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.id}
                                onClick={() => handleTimelineClick(index)}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="w-full flex items-center justify-end mb-5 cursor-pointer group"
                            >
                                <div className="relative w-full">

                                    <motion.span
                                        layout
                                        className={`absolute top-4 w-2 h-2 rounded-full left-[-3px] transition-all duration-500
                                        ${activeIndex === index
                                                ? "bg-primary scale-125"
                                                : "bg-[#9A9CA5] group-hover:bg-primary"
                                            }
                                        `}
                                    />

                                    <motion.h3
                                        layout
                                        className={`text-[28px] leading-[150%] font-bold transition-all duration-500 pl-5 xl:pl-8
                                        ${activeIndex === index
                                                ? "text-primary translate-x-2"
                                                : "text-[#9A9CA5] group-hover:text-primary"
                                            }
                                        `}
                                    >
                                        {t(item.titleKey)}
                                    </motion.h3>

                                </div>

                            </motion.div>
                        ))}

                    </div>

                </motion.div>

                <div className="flex flex-col gap-6 sm:gap-12 w-full lg:w-auto">

                    <Texts title="Our history" className="block lg:hidden" />

                    <motion.div
                        className="relative flex items-center justify-end gap-3 z-[15] select-none translate-x-0 sm:translate-x-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >

                        <button className="custom-prev flex items-center justify-center rounded-full w-12 h-12 text-gray text-lg transition-default hover:text-light hover:bg-primary" aria-label="Previous slide">

                            <FaArrowLeftLong />

                        </button>

                        <button className="custom-next flex items-center justify-center rounded-full w-12 h-12 text-gray text-lg transition-default hover:text-light hover:bg-primary" aria-label="Next slide">

                            <FaArrowRightLong />

                        </button>

                    </motion.div>

                    <motion.div
                        className="w-full lg:max-w-[750px] xl:max-w-[810px] mx-auto overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={handleSlideChange}
                            navigation={{
                                prevEl: ".custom-prev",
                                nextEl: ".custom-next",
                            }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            loop={true}
                            speed={1000}
                            slidesPerView={1}
                            spaceBetween={20}
                            allowTouchMove={true}
                            breakpoints={{
                                640: { spaceBetween: 30 },
                                1024: {
                                    spaceBetween: 40,
                                    allowTouchMove: false
                                },
                            }}
                            className="w-full !overflow-hidden"
                        >
                            {timeline.map((item) => (

                                <SwiperSlide key={item.id}>

                                    <motion.div
                                        className="flex flex-col items-end gap-4 sm:gap-6 md:gap-8 lg:gap-9"
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                    >
                                        <Image
                                            className="w-full aspect-[16/9] object-cover h-auto rounded"
                                            src={item.image}
                                            alt="History image"
                                            width={810}
                                            height={450}
                                        />

                                        <motion.p
                                            className="w-full text-gray text-base leading-relaxed font-normal"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                        >
                                            {t(item.textKey)}
                                        </motion.p>

                                    </motion.div>

                                </SwiperSlide>

                            ))}
                        </Swiper>

                    </motion.div>

                </div>

            </div>

        </motion.section>
    );
};

export default History;
