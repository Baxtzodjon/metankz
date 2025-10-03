"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Texts from './Texts';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

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

const PortfolioSection = () => {
    return (
        <section className="bg-light pt-[120px]">

            <div className="container">

                <div className="flex items-end justify-between mb-12">

                    <h2 className="max-w-[710px] text-ebony text-[28px] sm:text-[46px] leading-10 sm:leading-[130%] font-bold">Browse our selected projects and learn more about our work</h2>

                    <div className="relative flex items-center gap-3 z-[15] select-none translate-x-3">

                        <button className="flex items-center justify-center rounded-full w-12 h-12 text-gray text-lg hover:text-light hover:bg-primary transition-default cursor-pointer" tabIndex={-1} aria-label="Previous slide" aria-controls="swiper-wrapper-e49ed6eef28d24fc" aria-disabled="true" disabled>

                            <FaArrowLeftLong />

                        </button>

                        <button className="flex items-center justify-center rounded-full w-12 h-12 text-gray text-lg hover:text-light hover:bg-primary transition-default cursor-pointer" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-e49ed6eef28d24fc" aria-disabled="false">

                            <FaArrowRightLong />

                        </button>

                    </div>

                </div>

                <div className="relative overflow-hidden list-none z-1 m-[-100px] p-[100px] touch-pan-y">

                    <div className="relative w-full h-full z-1 flex transition-transform duration-300 transform hover:scale-105">

                        {/* <div className="swiper-wrapper" id="swiper-wrapper-e49ed6eef28d24fc" aria-live="polite" style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}>

                        <div className="swiper-slide slider-visible swiper-slide-active" role="group" aria-label="1 / 5" style={{ width: '326.667px', marginRight: '30px' }}>

                            <a href="#" className="portfolio-item">

                                <img className="portfolio-item__image" src="img/portfolio-1.jpg" alt="Portfolio cover" />

                                <div className="portfolio-item__content">

                                    <h3 className="portfolio-item__title">Red Finger Building</h3>

                                    <span className="portfolio-item__descr">Business Centers</span>

                                    <div className="portfolio-item__btn">View Project</div>

                                </div>

                            </a>

                        </div>

                        <div className="swiper-slide slider-visible swiper-slide-next" role="group" aria-label="2 / 5" style={{ width: '326.667px', marginRight: '30px' }}>

                            <a href="#" className="portfolio-item">

                                <img className="portfolio-item__image" src="img/portfolio-1.jpg" alt="Portfolio cover" />

                                <div className="portfolio-item__content">

                                    <h3 className="portfolio-item__title">Red Finger Building</h3>

                                    <span className="portfolio-item__descr">Business Centers</span>

                                    <div className="portfolio-item__btn">View Project</div>

                                </div>

                            </a>

                        </div>

                        <div className="swiper-slide slider-visible" role="group" aria-label="3 / 5" style={{ width: '326.667px', marginRight: '30px' }}>

                            <a href="#" className="portfolio-item">

                                <img className="portfolio-item__image" src="img/portfolio-1.jpg" alt="Portfolio cover" />

                                <div className="portfolio-item__content">

                                    <h3 className="portfolio-item__title">Red Finger Building</h3>

                                    <span className="portfolio-item__descr">Business Centers</span>

                                    <div className="portfolio-item__btn">View Project</div>

                                </div>

                            </a>

                        </div>

                        <div className="swiper-slide" role="group" aria-label="4 / 5" style={{ width: '326.667px', marginRight: '30p' }}>

                            <a href="#" className="portfolio-item">

                                <img className="portfolio-item__image" src="img/portfolio-1.jpg" alt="Portfolio cover" />

                                <div className="portfolio-item__content">

                                    <h3 className="portfolio-item__title">Red Finger Building</h3>

                                    <span className="portfolio-item__descr">Business Centers</span>

                                    <div className="portfolio-item__btn">View Project</div>

                                </div>

                            </a>

                        </div>

                        <div className="swiper-slide" role="group" aria-label="5 / 5" style={{ width: '326.667px', marginRight: '30px' }}>
                            <a href="#" className="portfolio-item">

                                <img className="portfolio-item__image" src="img/portfolio-1.jpg" alt="Portfolio cover" />

                                <div className="portfolio-item__content">

                                    <h3 className="portfolio-item__title">Red Finger Building</h3>

                                    <span className="portfolio-item__descr">Business Centers</span>

                                    <div className="portfolio-item__btn">View Project</div>

                                </div>

                            </a>

                        </div>

                    </div>

                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span> */}

                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '.portfolio-section__next',
                                prevEl: '.portfolio-section__prev',
                            }}
                            spaceBetween={30}
                            slidesPerView={3}
                            className=""
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {portfolioItems.map((item) => (

                                <SwiperSlide key={item.id}>

                                    <a href="#" className="flex flex-col overflow-hidden rounded shadow-soft-multi_sec bg-light transition-default">

                                        <Image
                                            className="max-w-full"
                                            src={item.image}
                                            alt="Portfolio cover"
                                            width={390}
                                            height={245}
                                        />

                                        <div className="flex items-center flex-col pt-[16px] pb-[23px] px-[10px]">

                                            <h3 className="text-ebony lg:text-lg xl:text-xl leading-[150%] font-bold mb-[5px]">{item.title}</h3>

                                            <span className="text-storm text-sm leading-[150%]">{item.description}</span>

                                            <div className="mt-6 mb-[-68px] border border-current rounded-[4px] pt-[13px] pb-[13px] px-[31px] font-bold text-[14px] tracking-[0.5px] uppercase text-primary transition-default will-change-[margin] hover:mb-0">View Project</div>

                                        </div>

                                    </a>

                                </SwiperSlide>

                            ))}
                        </Swiper>

                    </div>

                </div>

                <div className="flex items-center justify-start sm:justify-center flex-wrap sm:flex-nowrap gap-[10px] md:gap-10">

                    <h4 className="max-w-none sm:max-w-[50%] md:max-w-none text-[#1E212C] text-[28px] font-bold">Explore all our works</h4>

                    <a href="#" className="py-[15px] px-[39px] bg-[#FF5A30] rounded text-light text-base leading-[20px] tracking-wider font-bold uppercase hover:bg-[#fc3300] transition duration-300 ease-in-out cursor-pointer">View portfolio</a>

                </div>

            </div>

        </section>
    );
};

export default PortfolioSection;