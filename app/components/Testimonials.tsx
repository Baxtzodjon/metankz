"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const slidesTestimonials = [
    {
        id: 0,
        author: "Shawn Edwards",
        position: "CEO, Company Alpha",
        text: "Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco."
    },
    {
        id: 1,
        author: "Jessica Miller",
        position: "Marketing Manager, Beta Corp",
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 2,
        author: "David Lee",
        position: "Product Owner, Gamma LLC",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
        id: 3,
        author: "Emily Johnson",
        position: "CTO, Delta Inc",
        text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
];

const Testimonials = () => {
    return (
        <section className="pt-[97px] bg-athens">

            <div className="container flex justify-between relative">

                <div className="max-w-[612px]">

                    <h2 className="text-ebony text-[28px] sm:text-[46px] leading-10 sm:leading-[130%] font-bold mb-[60px]">What our clients are saying</h2>

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
                                <div>

                                    <div>

                                        <div className="overflow-hidden mb-[25px] rounded-full w-[72px] h-[72px]">

                                            <Image src={"/images/portfolio_first.jpg"} alt={`Author ${slide.author}`} width={72} height={72} className="block w-full h-full object-cover" />

                                        </div>

                                        {/* <p className="testimonials-item__descr" dangerouslySetInnerHTML={{ __html: slide.text }}>Ipsum aute sunt aliquip aute et&nbsp;occaecat. Anim minim do&nbsp;cillum eiusmod enim. Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco.</p> */}

                                        <p className="text-gray text-base leading-[160%] font-normal mb-[25px]">{slide.text}</p>

                                        <span className="block mb-1 pr-[110px] text-ebony text-base leading-[160%] font-bold">{slide.author}</span>

                                        <span className="block pr-[110px] text-storm text-sm leading-[150%] font-normal">{slide.position}</span>

                                    </div>

                                </div>

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

                </div>
                
                <Image src={"/images/portfolio_first.jpg"} alt="Testimonials Image" width={495} height={550} aria-hidden="true" className="max-w-full w-[380px] xl:w-[495px] xl:h-[550px] object-cover relative z-[5] -mb-[60px]" />

            </div>

        </section>
    );
};

export default Testimonials;