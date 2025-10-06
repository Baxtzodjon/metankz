"use client"

import Image from "next/image";

const partnersLogo = [
    {
        id: 1,
        image: '/icons/partners_logo.png',
    },
    {
        id: 2,
        image: '/icons/partners_logo.png',
    },
    {
        id: 3,
        image: '/icons/partners_logo.png',
    },
    {
        id: 4,
        image: '/icons/partners_logo.png',
    },
    {
        id: 5,
        image: '/icons/partners_logo.png',
    },
    {
        id: 6,
        image: '/icons/partners_logo.png',
    },
];

const Partners = () => {
    return (
        <section className="py-20 bg-athens">

            <div className="container">

                <h2 className="text-ebony text-[28px] sm:text-[46px] leading-10 sm:leading-[130%] font-bold text-center mb-[60px]">Supported by 12+ partners</h2>

                <ul className="grid grid-cols-6 gap-y-10 gap-x-[30px] lg:gap-x-10">

                    {partnersLogo.map((item) => (

                        <li key={item.id} className="flex justify-center col-span-3 xl:col-span-1">

                            <a href="#">

                                <Image src={item.image} alt="Logo" width={120} height={64} className="max-w-full grayscale hover:grayscale-0 scale-100 hover:scale-105 transition-default" loading="lazy" />

                            </a>

                        </li>

                    ))}

                </ul>

            </div>

        </section>
    );
};

export default Partners;