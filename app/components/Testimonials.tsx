"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Texts from "./Texts";
import { motion } from "motion/react";
import { slidesTestimonials } from "../data/testimonials";
import { useTranslations } from "next-intl";

const Testimonials = () => {
    const t = useTranslations("Testimonials");

    return (
        <section className="py-10 md:pt-[97px] md:pb-0 bg-athens">

            <div className="container flex justify-between relative">

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-none sm:max-w-[450px] lg:max-w-[612px]">

                    {/* <h2 className="text-ebony text-[28px] sm:text-[46px] leading-10 sm:leading-[130%] font-bold mb-[60px]">What our clients are saying</h2> */}

                    <Texts title={t("title")} className="text-start mb-[60px]" />

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        navigation={{
                            prevEl: ".custom-swiper-prev",
                            nextEl: ".custom-swiper-next"
                        }}
                        allowTouchMove={true}
                        breakpoints={{
                            1024: {
                                allowTouchMove: false,
                            }
                        }}
                    >

                        {slidesTestimonials.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <motion.div
                                 initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}>

                                    <div>

                                        <div className="overflow-hidden mb-[25px] rounded-full w-[72px] h-[72px]">

                                            <Image src={slide.image} alt={`Author ${slide.authorKey}`} width={72} height={72} className="block w-full h-full object-cover" />

                                        </div>

                                        {/* <p className="testimonials-item__descr" dangerouslySetInnerHTML={{ __html: slide.text }}>Ipsum aute sunt aliquip aute et&nbsp;occaecat. Anim minim do&nbsp;cillum eiusmod enim. Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco.</p> */}

                                        <p className="text-gray text-base leading-[160%] font-normal mb-[25px]">{t(slide.textKey)}</p>

                                        <span className="block mb-1 pr-[110px] text-ebony text-base leading-[160%] font-bold">{t(slide.authorKey)}</span>

                                        <span className="block pr-[110px] text-storm text-sm leading-[150%] font-normal">{t(slide.positionKey)}</span>

                                    </div>

                                </motion.div>

                            </SwiperSlide>
                        ))}

                        <div className="flex items-center absolute z-[15] select-none right-0 bottom-0">

                            <button className="custom-swiper-prev border-none p-0 bg-none flex items-center justify-center rounded-full w-12 h-12 text-gray transition-default hover:text-light hover:bg-primary cursor-pointer" aria-label="Previous slide">

                                <FaArrowLeftLong />

                            </button>

                            <button className="custom-swiper-next border-none p-0 bg-none flex items-center justify-center rounded-full w-12 h-12 text-gray transition-default hover:text-light hover:bg-primary cursor-pointer" aria-label="Next slide">

                                <FaArrowRightLong />

                            </button>

                        </div>

                    </Swiper>

                </motion.div>

                <motion.div
                    className="hidden md:block"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >

                    <Image src={"/images/portfolio_first.jpg"} alt="Testimonials Image" width={495} height={550} aria-hidden="true" className="max-w-full w-[300px] h-[527px] lg:w-[380px] lg:h-[441px] xl:w-[495px] xl:h-[550px] object-cover relative z-[5] -mb-[60px]" />

                </motion.div>

            </div>

        </section>
    );
};

export default Testimonials;