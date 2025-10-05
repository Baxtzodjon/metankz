"use client"

import Image from "next/image";
import Texts from "./Texts";

const services = [
    {
        icon: "/icons/icon_construction.svg",
        title: "Construction",
        bgImage: 'https://live.verstaem.online/createx/img/services-1.jpg',
    },
    {
        icon: "/icons/icon_plan.svg",
        title: "Project Development",
        bgImage: 'https://live.verstaem.online/createx/img/services-1.jpg',
    },
    {
        icon: "/icons/icon_painting.svg",
        title: "Interior Design",
        bgImage: 'https://live.verstaem.online/createx/img/services-1.jpg',
    },
    {
        icon: "/icons/icon_painting.svg",
        title: "Repairs",
        bgImage: 'https://live.verstaem.online/createx/img/services-1.jpg',
    },
];

const ServiceBlock = () => {
    return (
        <section className="services-section">

            <div className="container flex items-center justify-center flex-col gap-15">

                <div className="flex items-center justify-center flex-col gap-6">

                    <Texts title="Our services" description="Createx Construction Bureau is&nbsp;a&nbsp;construction giant with a&nbsp;full range of&nbsp;construction services." />

                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-20">

                    {services.map((service, index) => (

                        <li
                            className="relative group block max-w-full w-[285px] h-[285px] rounded-[4px] border border-[#e5e8ed] bg-white shadow-soft-multi overflow-hidden"
                            key={index}
                        >
                            {/* Затемнение (имитация ::after) */}
                            <div className="absolute inset-0 z-[5] bg-[rgba(30,33,44,0.6)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"></div>

                            {/* Фоновое изображение (имитация ::before) */}
                            <div
                                className="absolute inset-0 z-[3] bg-cover bg-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
                                style={{ backgroundImage: `url(${service.bgImage})` }}
                            ></div>

                            <a href="#" className="block relative z-10 px-[10px] pt-[87px] pb-[90px]">
                                
                                <div className="relative z-10 flex flex-col items-center">
                                    <Image
                                        src={service.icon}
                                        alt={`${service.title} Icon`}
                                        width={52}
                                        height={52}
                                        className="mb-[23px] w-[52px] h-[52px] transition-colors duration-300 ease-in-out"
                                        aria-hidden="true"
                                    />

                                    <h3 className="text-ebony lg:text-lg xl:text-xl leading-[150%] font-bold group-hover:text-light transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                </div>

                            </a>

                        </li>

                    ))}

                </ul>

                <div className="flex items-center justify-start sm:justify-center flex-wrap sm:flex-nowrap gap-[10px] md:gap-10">

                    <h4 className="max-w-none sm:max-w-[50%] md:max-w-none text-ebony text-[28px] font-bold">Learn more about our services</h4>

                    <a href="#" className="py-[15px] px-[39px] bg-primary rounded text-light text-base leading-[20px] tracking-wider font-bold uppercase hover:bg-active transition-default cursor-pointer">View services</a>

                </div>

            </div>

        </section>
    );
};

export default ServiceBlock;