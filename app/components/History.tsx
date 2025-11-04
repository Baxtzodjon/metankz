"use client"

import Texts from "./Texts";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const timeline = [
    {
        id: Math.random(),
        title: "Present",
    },
    {
        id: Math.random(),
        title: "March 2019",
    },
    {
        id: Math.random(),
        title: "November 2018",
    },
    {
        id: Math.random(),
        title: "July 2015",
    },
    {
        id: Math.random(),
        title: "August 2010",
    },
    {
        id: Math.random(),
        title: "February 2007",
    },
    {
        id: Math.random(),
        title: "May 2004",
    },
    {
        id: Math.random(),
        title: "October 2001",
    },
    {
        id: Math.random(),
        title: "June 2000"
    },
];

const History = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <section className="bg-athens">

            <div className="container flex justify-between pt-[180px] pb-[100px]">

                <div className="hidden lg:flex flex-col gap-[60px]">

                    <h2 className="text-ebony text-[38px] xl:text-[46px] leading-10 sm:leading-[130%] font-bold">Our history</h2>

                    {/* <h2 className="text-ebony text-[28px] lg:text-[38px] xl:text-[46px] leading-10 sm:leading-[130%] font-bold">Our history</h2> */}

                    {/* ТАЙМЛАЙН */}
                    <div className="relative py-1"> {/* px-4 */} {/* max-w-3xl */}

                        <div className="absolute top-0 left-0 h-full w-[2px] bg-[#9A9CA5] opacity-50"></div> {/* -translate-x-1/2 */}

                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="w-full flex items-center justify-end mb-5"
                            >
                                <div className="relative w-full"> {/* max-w-[45%] */}

                                    <span className="absolute top-4 w-2 h-2 bg-[#9A9CA5] rounded-full left-[-3px]"></span>

                                    <h2 className="text-[#9A9CA5] text-[28px] leading-[150%] font-bold transition-default hover:text-primary cursor-pointer pl-8">{item.title}</h2>

                                </div>
                            </motion.div>
                        ))}

                    </div>

                </div>

                <div className="flex flex-col gap-6 sm:gap-12">

                    <Texts title="Our history" className="block lg:hidden" />

                    <div className="relative flex items-center justify-end gap-3 z-[15] select-none translate-x-0 sm:translate-x-3">

                        <button className={`portfolio-section__prev flex items-center justify-center rounded-full w-12 h-12 text-gray text-lg transition-default 
                        ${isBeginning ? 'opacity-40 pointer-events-none' : 'hover:text-light hover:bg-primary cursor-pointer'}`} aria-label="Previous slide">

                            <FaArrowLeftLong />

                        </button>

                        <button className={`portfolio-section__next flex items-center justify-center rounded-full w-12 h-12 text-gray text-lg transition-default 
                        ${isEnd ? 'opacity-40 pointer-events-none' : 'hover:text-light hover:bg-primary cursor-pointer'}`} aria-label="Next slide">

                            <FaArrowRightLong />

                        </button>

                    </div>

                    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-9">

                        <Image src={"/images/portfolio_first.jpg"} alt="History image" width={810} height={450} className="w-full lg:max-w-[750px] xl:max-w-[810px] aspect-[16/9] object-cover h-auto rounded" />

                        <p className="w-full lg:max-w-[750px] xl:max-w-[810px] text-gray text-base leading-relaxed font-normal">Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus. Eu nec vitae,</p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default History;