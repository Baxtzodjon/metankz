"use client"

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const PortfolioSection = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const portfolioItems = [
        {
            id: 1,
            title: 'Red Finger Building',
            description: 'Business Centers',
            image: '/images/portfolio_first.jpg',
        },
        {
            id: 2,
            title: 'Red Finger Building',
            description: 'Business Centers',
            image: '/images/portfolio_first.jpg',
        },
        {
            id: 3,
            title: 'Red Finger Building',
            description: 'Business Centers',
            image: '/images/portfolio_first.jpg',
        },
        {
            id: 4,
            title: 'Red Finger Building',
            description: 'Business Centers',
            image: '/images/portfolio_first.jpg',
        },
        {
            id: 5,
            title: 'Red Finger Building',
            description: 'Business Centers',
            image: '/images/portfolio_first.jpg',
        },
    ];

    const onSwiperInit = (swiper: SwiperClass) => {
        swiperRef.current = swiper;
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);

        swiper.on('slideChange', () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        });
    };

    return (
        <section className="bg-light py-10 sm:py-[120px]">

            <div className="container">

                <div className="flex items-end justify-between flex-wrap sm:flex-nowrap mb-12">

                    <h2 className="max-w-none lg:max-w-[710px] text-ebony text-[28px] sm:text-[40px] lg:text-[46px] leading-10 sm:leading-[55px] lg:leading-[130%] font-bold mb-[15px] pb-0 lg:pb-3 lg:m-0">Browse our selected projects and learn more about our work</h2>

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

                </div>

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
                            {portfolioItems.map((item) => (

                                <SwiperSlide key={item.id}>

                                    <a href="#" className="group flex flex-col overflow-hidden rounded shadow-soft-multi_sec bg-light transition-default">

                                        <Image
                                            className="max-w-full w-full"
                                            src={item.image}
                                            alt="Portfolio cover"
                                            width={390}
                                            height={245}
                                        />

                                        <div className="flex items-center flex-col pt-[16px] pb-[23px] px-[10px]">

                                            <h3 className="text-ebony text-lg xl:text-xl leading-[150%] font-bold mb-[5px]">{item.title}</h3>

                                            <span className="text-storm text-sm leading-[150%]">{item.description}</span>

                                            <div className="mt-6 mb-0 md:mb-[-72px] border border-current rounded pt-[13px] pb-[13px] px-[31px] font-bold text-sm tracking-wider uppercase text-primary group-hover:mb-0 transition-default will-change-[margin]">View Project</div>

                                        </div>

                                    </a>

                                </SwiperSlide>

                            ))}
                        </Swiper>

                    </div>

                </div>

                <div className="flex items-center justify-start sm:justify-center flex-wrap sm:flex-nowrap gap-[10px] md:gap-10 mt-20">

                    <h4 className="max-w-none sm:max-w-[50%] md:max-w-none text-ebony text-[28px] font-bold">Explore all our works</h4>

                    <a href="#" className="py-[15px] px-[39px] bg-primary rounded text-light text-base leading-[20px] tracking-wider font-bold uppercase hover:bg-active transition-default cursor-pointer">View portfolio</a>

                </div>

            </div>

        </section>
    );
};

export default PortfolioSection;