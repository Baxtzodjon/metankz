"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useTranslations } from "next-intl";
import { Slide, slides } from '../data/slides';
import Link from 'next/link';
import Modal from './Modal';

const HeroSlider: React.FC = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const t = useTranslations("HeroSlider");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handlePaginationClick = (index: number) => {
        if (!swiperRef.current) return;
        swiperRef.current.slideToLoop(index);
    };

    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper) return;

        const handleSlideChange = () => {
            setActiveIndex(swiper.realIndex);
        };

        swiper.on("slideChange", handleSlideChange);
        swiper.on("init", handleSlideChange);

        return () => {
            swiper.off("slideChange", handleSlideChange);
            swiper.off("init", handleSlideChange);
        };
    }, []);

    return (
        <section className="relative overflow-hidden">

            <Swiper
                loop
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                speed={1500}
                navigation={{
                    nextEl: '.slider-btn-next',
                    prevEl: '.slider-btn-prev',
                }}
                modules={[Navigation, Autoplay]}
                className="relative w-full"
                onSwiper={(swiper: SwiperClass) => {
                    swiperRef.current = swiper;
                    setActiveIndex(swiper.realIndex);
                }}
            >
                {slides.map((slide: Slide, index: number) => (

                    <SwiperSlide key={index}>

                        <motion.div
                            className="bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('${slide.image}')` }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >

                            <div className="container h-[555px] sm:h-[130vh] py-[100px] sm:py-[200px] md:pt-[200px] md:pb-[320px] lg:pt-[220px] lg:pb-[354px]">

                                <motion.div className="flex flex-col gap-[61px]"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >

                                    <div className="flex flex-col gap-6">

                                        <motion.h2 className="max-w-[577px] text-white text-[35px] leading-[45px] sm:text-6xl sm:leading-[75px] md:text-7xl md:leading-[130%] font-bold capitalize"
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                        >{t(slide.titleKey)}</motion.h2>

                                        <motion.p className="max-w-[595px] text-white text-base sm:text-[20px] sm:leading-[150%] font-normal"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.6 }}
                                        >{t(slide.contentKey)}</motion.p>

                                    </div>

                                    <motion.div className="flex items-center flex-wrap gap-6"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8, delay: 0.8 }}
                                    >

                                        <Link href={"/about"} className="px-[39px] py-[15px] border border-white text-white text-base font-bold uppercase hover:bg-primary hover:border-primary rounded transition-default cursor-pointer">{t('buttons.learnMore')}</Link>

                                        <button className="px-[39px] py-[15px] bg-primary text-white text-base font-bold uppercase hover:bg-[#fc3300] rounded transition-default cursor-pointer" onClick={openModal}>{t('buttons.submitRequest')}</button>

                                    </motion.div>

                                </motion.div>

                            </div>

                        </motion.div>

                    </SwiperSlide>
                ))}

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="hidden xl:block xl:absolute inset-y-1/2 left-8 z-10 -translate-y-1/2">

                    <button className="slider-btn-prev flex items-center justify-center w-12 h-12 bg-white/50 hover:bg-white rounded-full cursor-pointer">

                        <Image src="/icons/prev_arrow.svg" alt="Previous" width={24} height={24} />

                    </button>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="hidden xl:block xl:absolute inset-y-1/2 right-8 z-10 -translate-y-1/2">

                    <button className="slider-btn-next flex items-center justify-center w-12 h-12 bg-white/50 hover:bg-white rounded-full cursor-pointer">

                        <Image src="/icons/next_arrow.svg" alt="Next" width={24} height={24} />

                    </button>

                </motion.div>

            </Swiper>

            <div className="sm:block hidden z-30 absolute left-[15px] xl:left-[145px] sm:bottom-10 md:bottom-[100px] lg:bottom-[120px]">

                <div className="custom-pagination flex gap-1">

                    {slides.map((_, i) => (

                        <div key={i} className="cursor-pointer" onClick={() => handlePaginationClick(i)}>

                            <h3 className={`text-white text-[28px] font-bold transition-opacity duration-300 ${i === activeIndex ? "opacity-100" : "opacity-60"}`}>{String(i + 1).padStart(2, "0")}</h3>

                            <div className={`relative w-[150px] md:w-[178px] h-[3px] md:h-[2px] bg-white/30 overflow-hidden transition-opacity duration-300 ${i === activeIndex ? "opacity-100" : "opacity-30"}`}>

                                <div className={`progress-bar absolute top-0 left-0 h-full bg-white transition-all duration-[5000ms] ease-linear ${i === activeIndex ? "w-full" : "w-0"}`}></div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} />

        </section>
    );
};

export default HeroSlider;