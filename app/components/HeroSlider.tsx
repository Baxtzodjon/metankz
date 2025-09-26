"use client"

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';

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
    useEffect(() => {
        const swiperEl = (document.querySelector('.swiper') as any)?.swiper;

        const updateCustomPagination = () => {
            const realIndex = swiperEl?.realIndex ?? 0;
            const paginationItems = document.querySelectorAll('.custom-pagination > div');

            paginationItems.forEach((item, index) => {
                const h3 = item.querySelector('h3');
                const lineWrapper = item.querySelector('div');
                const progressBar = item.querySelector('.progress-bar') as HTMLElement;

                if (!h3 || !lineWrapper || !progressBar) return;

                if (index === realIndex) {
                    h3.classList.replace('opacity-60', 'opacity-100');
                    lineWrapper.classList.replace('opacity-30', 'opacity-100');

                    progressBar.classList.remove('animate-fill');
                    void progressBar.offsetWidth;
                    progressBar.classList.add('animate-fill');
                } else {
                    h3.classList.replace('opacity-100', 'opacity-60');
                    lineWrapper.classList.replace('opacity-100', 'opacity-30');
                    progressBar.classList.remove('animate-fill');
                    progressBar.style.width = '0%';
                }
            });
        };

        const paginationItems = document.querySelectorAll('.custom-pagination > div');
        paginationItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                if (swiperEl?.realIndex === index) return;
                swiperEl?.slideToLoop(index);
            });
        });

        swiperEl?.on('slideChange', updateCustomPagination);
        swiperEl?.on('init', updateCustomPagination);
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
                className="relative w-full h-[988px]"
            >
                {slides.map((slides, index) => (

                    <SwiperSlide key={index}>

                        <div
                            className="bg-cover bg-center h-[988px]"
                            style={{ backgroundImage: `url('${slides.image}')` }}
                        >

                            <div className="container pt-[220px] pb-[354px]">

                                <div className="flex flex-col gap-[61px]">

                                    <div className="flex flex-col gap-6">

                                        <h2 className="max-w-[577px] text-white text-7xl leading-[130%] font-bold uppercase">Create<span className="text-[#ff5a30]">x</span> construction</h2>

                                        <p className="max-w-[595px] text-white text-[20px] font-normal">{slides.content}</p>

                                    </div>

                                    <div className="flex items-center gap-6">

                                        <button className="px-[39px] py-[15px] border border-white text-white text-base font-bold uppercase hover:bg-primary hover:border-primary rounded transition-default cursor-pointer">Learn More About Us</button>

                                        <button className="px-[39px] py-[15px] bg-primary text-white text-base font-bold uppercase hover:bg-[#fc3300] rounded transition-default cursor-pointer">Submit Request</button>

                                    </div>

                                </div>

                                <div className="pt-[179px] z-30"> {/* absolute bottom-[120px] left-[145px] */}

                                    <div className="custom-pagination flex gap-1 z-30">

                                        {[1, 2, 3, 4].map((n, i) => (
                                            <div key={i} className="cursor-pointer" data-slide={i}>

                                                <h3 className="text-white text-[28px] font-bold opacity-60 transition-opacity duration-300">

                                                    {String(n).padStart(2, '0')}

                                                </h3>

                                                <div className="relative w-[178px] h-[2px] bg-white/30 overflow-hidden opacity-30 transition-opacity duration-300">

                                                    <div className="progress-bar absolute top-0 left-0 h-full w-0"></div>

                                                </div>

                                            </div>
                                        ))}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </SwiperSlide>
                ))}

                <div className="absolute inset-y-1/2 left-4 z-10 -translate-y-1/2">

                    <button className="slider-btn-prev flex items-center justify-center w-12 h-12 bg-white/50 hover:bg-white rounded-full cursor-pointer"><Image src="/icons/prev_arrow.svg" alt="Previous" width={24} height={24} /></button>

                </div>

                <div className="absolute inset-y-1/2 right-4 z-10 -translate-y-1/2">

                    <button className="slider-btn-next flex items-center justify-center w-12 h-12 bg-white/50 hover:bg-white rounded-full cursor-pointer">

                        <Image src="/icons/next_arrow.svg" alt="Next" width={24} height={24} />

                    </button>

                </div>

            </Swiper>

        </section>
    );
};

export default HeroSlider;