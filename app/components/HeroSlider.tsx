"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';

const slides = [
    {
        title: 'CREATEX CONSTRUCTION',
        content: 'Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. ',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
    },
    {
        title: 'CREATEX CONSTRUCTION',
        content: 'Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. ',
        image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1600&q=80',
    },
    {
        title: 'CREATEX CONSTRUCTION',
        content: 'Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. ',
        image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1600&q=80',
    },
    {
        title: 'CREATEX CONSTRUCTION',
        content: 'Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. ',
        image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1600&q=80',
    },
];


const HeroSlider: React.FC = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
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
                {slides.map((slides, index) => (

                    <SwiperSlide key={index}>

                        <div
                            className="bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('${slides.image}')` }}
                        >

                            <div className="container py-[100px] sm:py-[200px] md:pt-[200px] md:pb-[320px] lg:pt-[220px] lg:pb-[354px]">

                                <div className="flex flex-col gap-[61px]">

                                    <div className="flex flex-col gap-6">

                                        <h2 className="max-w-[577px] text-white text-[35px] leading-[45px] sm:text-6xl sm:leading-[75px] md:text-7xl md:leading-[130%] font-bold uppercase">Create<span className="text-[#ff5a30]">x</span> construction</h2>

                                        <p className="max-w-[595px] text-white text-base sm:text-[20px] sm:leading-[150%] font-normal">{slides.content}</p>

                                    </div>

                                    <div className="flex items-center flex-wrap gap-6">

                                        <button className="px-[39px] py-[15px] border border-white text-white text-base font-bold uppercase hover:bg-primary hover:border-primary rounded transition-default cursor-pointer">Learn More About Us</button>

                                        <button className="px-[39px] py-[15px] bg-primary text-white text-base font-bold uppercase hover:bg-[#fc3300] rounded transition-default cursor-pointer">Submit Request</button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </SwiperSlide>
                ))}

                <div className="hidden xl:block xl:absolute inset-y-1/2 left-8 z-10 -translate-y-1/2">

                    <button className="slider-btn-prev flex items-center justify-center w-12 h-12 bg-white/50 hover:bg-white rounded-full cursor-pointer">

                        <Image src="/icons/prev_arrow.svg" alt="Previous" width={24} height={24} />

                    </button>

                </div>

                <div className="hidden xl:block xl:absolute inset-y-1/2 right-8 z-10 -translate-y-1/2">

                    <button className="slider-btn-next flex items-center justify-center w-12 h-12 bg-white/50 hover:bg-white rounded-full cursor-pointer">

                        <Image src="/icons/next_arrow.svg" alt="Next" width={24} height={24} />

                    </button>

                </div>

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

        </section>
    );
};

export default HeroSlider;