"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

const timeline = [
    {
        id: 1,
        title: "Present",
        image: "/images/portfolio_first.jpg",
        text: "Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi.",
    },
    {
        id: 2,
        title: "March 2019",
        image: "/images/portfolio_first.jpg",
        text: "Maecenas sed quis diam posuere malesuada magnis. Eu nec vitae, malesuada vitae egestas integer et morbi.",
    },
    {
        id: 3,
        title: "November 2018",
        image: "/images/portfolio_first.jpg",
        text: "Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Integer et morbi malesuada vitae egestas.",
    },
    {
        id: 4,
        title: "July 2015",
        image: "/images/portfolio_first.jpg",
        text: "Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis.",
    },
];

const HistoryTraining = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperClass | null>(null);

    const handleSlideChange = (swiper: SwiperClass) => {
        setActiveIndex(swiper.realIndex);
    };

    const handleTimelineClick = (index: number) => {
        swiperRef.current?.slideToLoop(index);
    };

    return (
        <section className="bg-athens w-full overflow-hidden">
            <div className="container mx-auto flex justify-between pt-[160px] pb-[100px]">
                {/* Left side — Timeline */}
                <div className="hidden lg:flex flex-col gap-[60px]">
                    <h2 className="text-ebony text-[38px] xl:text-[46px] leading-[130%] font-bold">
                        Our history
                    </h2>

                    <div className="relative py-1">
                        {/* vertical line */}
                        <div className="absolute top-0 left-0 h-full w-[2px] bg-[#9A9CA5] opacity-50" />

                        {timeline.map((item, index) => (
                            <div
                                key={item.id}
                                onClick={() => handleTimelineClick(index)}
                                className="w-full flex items-center justify-end mb-5 cursor-pointer group"
                            >
                                <div className="relative w-full">
                                    <span className="absolute top-4 w-2 h-2 bg-[#9A9CA5] rounded-full left-[-3px]" />
                                    <h2
                                        className={`text-[24px] leading-[150%] font-bold pl-8 transition-colors duration-200 ${activeIndex === index
                                                ? "text-primary"
                                                : "text-[#9A9CA5] group-hover:text-primary"
                                            }`}
                                    >
                                        {item.title}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side — Swiper + Buttons + Text */}
                <div className="flex flex-col gap-6 sm:gap-10 items-end">
                    {/* Mobile title */}
                    <h2 className="text-ebony text-[28px] sm:text-[36px] font-bold leading-[130%] block lg:hidden text-center sm:text-left w-full">
                        Our history
                    </h2>

                    {/* Buttons */}
                    <div className="flex items-center justify-end gap-4 w-full">
                        <button
                            className="portfolio-prev flex items-center justify-center rounded-full w-12 h-12 text-gray text-lg border border-gray-300 transition-all hover:text-light hover:bg-primary"
                        >
                            <FaArrowLeftLong />
                        </button>
                        <button
                            className="portfolio-next flex items-center justify-center rounded-full w-12 h-12 text-gray text-lg border border-gray-300 transition-all hover:text-light hover:bg-primary"
                        >
                            <FaArrowRightLong />
                        </button>
                    </div>

                    {/* Swiper */}
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={handleSlideChange}
                        navigation={{
                            prevEl: ".portfolio-prev",
                            nextEl: ".portfolio-next",
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        speed={1000}
                        slidesPerView={1}
                        className="max-w-[850px] !overflow-hidden"
                    >
                        {timeline.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="w-full flex flex-col items-end gap-5">
                                    <div className="relative w-full max-w-[95%] sm:max-w-[700px] lg:max-w-[750px] xl:max-w-[810px] aspect-[16/9]">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover rounded-lg"
                                            priority
                                        />
                                    </div>

                                    <p className="w-full max-w-[95%] sm:max-w-[700px] lg:max-w-[750px] xl:max-w-[810px] text-gray text-base sm:text-lg leading-relaxed font-normal text-center lg:text-left">
                                        {item.text}
                                    </p>
                                    
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default HistoryTraining;
