"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { motion } from "motion/react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Texts from "./Texts";
import { WorkDetails, workItems } from "../data/workItems";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Carousel = ({ slug }: { slug: string }) => {
    const t = useTranslations();
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [magnifier, setMagnifier] = useState({ x: 0, y: 0, visible: false, src: "" });
    const [modalSrc, setModalSrc] = useState<string | null>(null);
    const zoom = 5;

    const item = workItems.find((w) => w.slug === slug);
    if (!item) return null;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, src: string) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setMagnifier({ x, y, visible: true, src });
    };

    const handleMouseLeave = () => setMagnifier(prev => ({ ...prev, visible: false }));

    return (
        <section className="pt-20 pb-[120px] relative overflow-hidden bg-light before:content-[''] before:absolute before:-right-[350px] sm:before:-right-[200px] xl:before:-right-[100px] before:w-[570px] before:h-[822px] before:bg-[url('/images/work_slug_bg.png')] before:bg-center before:bg-no-repeat before:bg-cover">

            <div className="container flex flex-col gap-[60px]">

                <motion.div className="container flex flex-col gap-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >

                    <motion.div className="flex items-center gap-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                    >

                        <Link href={"/"} className="text-gray text-sm font-normal leading-[150%] hover:text-[#9A9CA5] transition-default">{t("Header.nav.home")}</Link>

                        <Link href={"/work"} className="text-gray text-sm font-normal leading-[150%] capitalize flex items-center gap-2"><small>/</small> {t("Header.nav.work")}</Link>

                        <Link href={`/work/${item.slug}`} className="text-[#9A9CA5] text-sm font-normal leading-[150%] capitalize flex items-center gap-2"><small>/</small> {t(item.titleKey)}</Link>

                    </motion.div>

                    <div className="flex flex-col gap-12">

                        <div className="flex flex-col gap-6">

                            <motion.h2 className="text-ebony text-[35px] leading-[45px] sm:text-5xl sm:leading-[120%] md:text-[64px] font-bold capitalize"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >{t(item.titleKey)}</motion.h2>

                            <motion.div
                                className="flex flex-col gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >

                                <p className="text-storm text-base sm:text-lg leading-[150%] font-normal">{t(item.descriptionKey)}</p>

                                <Link href={`/work/${item.slug}`} className="text-primary text-base font-bold capitalize">{t(item.category)}</Link>

                            </motion.div>

                        </div>

                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }} // начинаем с прозрачности и смещения вниз
                    animate={{ opacity: 1, y: 0 }}  // конечное состояние: полностью видим и на месте
                    transition={{ duration: 0.8, ease: "easeOut" }} // плавная анимация
                    className="flex flex-col gap-5 relative"
                >

                    {/* Главный слайдер */}
                    <Swiper
                        modules={[Navigation, Thumbs]}
                        navigation={{
                            nextEl: '.slider-btn-next',
                            prevEl: '.slider-btn-prev',
                        }}
                        thumbs={{ swiper: thumbsSwiper }}
                        className="relative w-full h-[500px] select-none border-2 border-primary rounded overflow-hidden group"
                    >
                        {item.images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="relative w-full h-full cursor-zoom-in overflow-hidden"
                                    onMouseMove={(e) => handleMouseMove(e, src)}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => setModalSrc(src)}
                                >

                                    <Image
                                        src={src}
                                        alt={`Portfolio image ${index + 1}`}
                                        width={1230}
                                        height={500}
                                        className="w-full h-full object-contain rounded select-none transition-transform duration-500"
                                    />

                                    {magnifier.visible && magnifier.src === src && (
                                        <div
                                            className="absolute pointer-events-none w-40 h-40 rounded-full border border-primary shadow-lg hidden lg:block"
                                            style={{
                                                top: `${magnifier.y}%`,
                                                left: `${magnifier.x}%`,
                                                transform: "translate(-50%, -50%)",
                                                backgroundImage: `url(${src})`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: `${100 * zoom}% ${100 * zoom}%`,
                                                backgroundPosition: `${magnifier.x}% ${magnifier.y}%`,
                                            }}
                                        />
                                    )}

                                </div>
                            </SwiperSlide>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="hidden xl:block xl:absolute inset-y-1/2 left-8 z-10 -translate-y-1/2">

                            <button className="slider-btn-prev flex items-center justify-center w-12 h-12 bg-primary hover:bg-active rounded-full cursor-pointer">

                                <FaArrowLeftLong className="text-light" />

                            </button>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                            className="hidden xl:block xl:absolute inset-y-1/2 right-8 z-10 -translate-y-1/2">

                            <button className="slider-btn-next flex items-center justify-center w-12 h-12 bg-primary hover:bg-active rounded-full cursor-pointer">

                                <FaArrowRightLong className="text-light" />

                            </button>

                        </motion.div>

                    </Swiper>

                    {/* Миниатюры */}
                    <motion.div
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        className="w-full"
                    >

                        <Swiper
                            onSwiper={setThumbsSwiper}
                            modules={[Thumbs]}
                            slidesPerView="auto"  // чтобы миниатюры занимали ровно столько места, сколько нужно 
                            watchSlidesProgress
                            className="w-full select-none"
                        >
                            {item.images.map((src, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="thumb-slide flex-shrink-0 cursor-pointer select-none"
                                    style={{ width: 120 }} // фиксированная ширина миниатюры
                                >

                                    <motion.div
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                x: -50,
                                            },
                                            visible: {
                                                opacity: 1,
                                                x: 0,
                                                transition: {
                                                    duration: 0.6,
                                                },
                                            },
                                        }}
                                    >

                                        <Image
                                            src={src}
                                            alt={`Thumbnail ${index + 1}`}
                                            width={100}
                                            height={100}
                                            className="w-[100px] h-[100px] object-contain border-2 border-primary rounded select-none"
                                        />

                                    </motion.div>

                                </SwiperSlide>
                            ))}
                            
                        </Swiper>

                    </motion.div>

                </motion.div>

                {modalSrc && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center cursor-zoom-out"
                        onClick={() => setModalSrc(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        <div className="relative max-w-[90%] max-h-[90%]">
                            <Image
                                src={modalSrc}
                                alt="Zoomed"
                                width={1230}
                                height={500}
                                className="w-full h-full object-contain rounded select-none"
                            />

                        </div>

                    </motion.div>
                )}

                <div className="flex items-center justify-between flex-col xl:flex-row gap-10">

                    <motion.div
                        className="flex flex-col gap-10 max-w-full xl:max-w-[600px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >

                        <Texts title={t("Work.projectEquipmentText")} className="text-start" />

                        <p className="text-gray text-lg font-normal">{t(item.projectEquipment)}</p>

                    </motion.div>

                    <motion.div
                        className="w-full xl:w-auto h-full bg-light rounded shadow-soft-multi py-10 px-5 sm:px-10 xl:px-10 flex flex-col gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >

                        {Object.entries(item.details).map(([key, value]) => {
                            const typedKey = key as keyof WorkDetails; // ✅ фикс

                            return (
                                <div key={key} className="flex items-center flex-col sm:flex-row gap-4 sm:gap-8">

                                    {/* label */}

                                    <div className="w-auto sm:w-[160px] xl:w-[120px]">

                                        <h3 className="text-ebony text-xl xl:text-base font-bold">
                                            {t(item.detailsValue[typedKey])}
                                        </h3>

                                    </div>

                                    {/* value */}
                                    <p className="text-storm text-lg xl:text-base leading-relaxed font-normal text-center sm:text-left">
                                        {t(value)}
                                    </p>

                                </div>
                            );
                        })}

                    </motion.div>

                </div>

            </div>

        </section>
    );
};

export default Carousel;