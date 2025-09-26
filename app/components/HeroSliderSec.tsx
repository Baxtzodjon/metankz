"use client"

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

// 👇 Твой массив слайдов (замени на реальные)
const slides = [
    { image: "/images/slide1.jpg", content: "Slide 1 content" },
    { image: "/images/slide2.jpg", content: "Slide 2 content" },
    { image: "/images/slide3.jpg", content: "Slide 3 content" },
    { image: "/images/slide4.jpg", content: "Slide 4 content" },
];

const HeroSliderSec: React.FC = () => {
    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

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
            {/* ==== SWIPER ==== */}
            <Swiper
                loop
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                speed={1500}
                navigation={{
                    nextEl: ".slider-btn-next",
                    prevEl: ".slider-btn-prev",
                }}
                modules={[Navigation, Autoplay]}
                className="relative w-full h-[988px]"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setActiveIndex(swiper.realIndex);
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="bg-cover bg-center h-[988px]"
                            style={{ backgroundImage: `url('${slide.image}')` }}
                        >
                            <div className="container pt-[220px] pb-[354px]">
                                <div className="flex flex-col gap-[61px]">
                                    <div className="flex flex-col gap-6">
                                        <h2 className="max-w-[577px] text-white text-7xl leading-[130%] font-bold uppercase">
                                            Create<span className="text-[#ff5a30]">x</span> construction
                                        </h2>
                                        <p className="max-w-[595px] text-white text-[20px] font-normal">
                                            {slide.content}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <button className="px-[39px] py-[15px] border border-white text-white text-base font-bold uppercase hover:bg-primary hover:border-primary rounded transition-default cursor-pointer">
                                            Learn More About Us
                                        </button>
                                        <button className="px-[39px] py-[15px] bg-primary text-white text-base font-bold uppercase hover:bg-[#fc3300] rounded transition-default cursor-pointer">
                                            Submit Request
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* ==== НАВИГАЦИОННЫЕ КНОПКИ ==== */}
                <div className="absolute inset-y-1/2 left-4 z-10 -translate-y-1/2">
                    <button className="slider-btn-prev flex items-center justify-center w-12 h-12 bg-white/50 hover:bg-white rounded-full cursor-pointer">
                        <Image src="/icons/prev_arrow.svg" alt="Previous" width={24} height={24} />
                    </button>
                </div>
                <div className="absolute inset-y-1/2 right-4 z-10 -translate-y-1/2">
                    <button className="slider-btn-next flex items-center justify-center w-12 h-12 bg-white/50 hover:bg-white rounded-full cursor-pointer">
                        <Image src="/icons/next_arrow.svg" alt="Next" width={24} height={24} />
                    </button>
                </div>
            </Swiper>

            {/* ==== КАСТОМНАЯ ПАГИНАЦИЯ СНАРУЖИ ==== */}
            <div className="z-30 absolute left-[145px] bottom-[120px] md:block hidden">
                <div className="custom-pagination flex gap-1">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className="cursor-pointer"
                            onClick={() => handlePaginationClick(i)}
                        >
                            <h3
                                className={`text-white text-[28px] font-bold transition-opacity duration-300 ${i === activeIndex ? "opacity-100" : "opacity-60"
                                    }`}
                            >
                                {String(i + 1).padStart(2, "0")}
                            </h3>
                            <div
                                className={`relative w-[178px] h-[2px] bg-white/30 overflow-hidden transition-opacity duration-300 ${i === activeIndex ? "opacity-100" : "opacity-30"
                                    }`}
                            >
                                <div
                                    className={`progress-bar absolute top-0 left-0 h-full bg-white transition-all duration-[5000ms] ease-linear ${i === activeIndex ? "w-full" : "w-0"
                                        }`}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ==== МОБИЛЬНАЯ ПАГИНАЦИЯ ==== */}
            <div className="block md:hidden mt-6 px-4">
                <div className="custom-pagination flex justify-center gap-4">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className="cursor-pointer"
                            onClick={() => handlePaginationClick(i)}
                        >
                            <h3
                                className={`text-white text-lg font-bold transition-opacity duration-300 ${i === activeIndex ? "opacity-100" : "opacity-60"
                                    }`}
                            >
                                {String(i + 1).padStart(2, "0")}
                            </h3>
                            <div
                                className={`relative w-[80px] h-[2px] bg-white/30 overflow-hidden transition-opacity duration-300 ${i === activeIndex ? "opacity-100" : "opacity-30"
                                    }`}
                            >
                                <div
                                    className={`progress-bar absolute top-0 left-0 h-full bg-white transition-all duration-[5000ms] ease-linear ${i === activeIndex ? "w-full" : "w-0"
                                        }`}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSliderSec;
