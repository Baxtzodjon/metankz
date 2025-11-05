"use client"

import Image from "next/image";
import { PiSignatureThin } from "react-icons/pi";
import { motion } from 'motion/react';

const FounderCard = () => {
    return (
        <section className="relative overflow-hidden bg-light before:content-[''] before:absolute before:-right-[200px] before:w-[570px] before:h-[1065px] before:bg-[url('/images/facts_bg.png')] before:bg-center before:bg-no-repeat before:bg-cover">

            <motion.div
                className="container relative mt-0 sm:mt-10 lg:mt-[120px] mb-[120px] flex flex-col gap-5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
            >

                <motion.div
                    initial={{ opacity: 0, x: -80, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >

                    <Image src={"/images/portfolio_first.jpg"} alt="Portfolio First image" width={525} height={580} className="w-full lg:w-[525px] h-auto sm:h-[580px] object-cover rounded lg:rounded-none" />

                </motion.div>

                <motion.div
                    className="w-full lg:w-[560px] xl:w-[735px] bg-light flex lg:items-start justify-center flex-col gap-[51px] shadow-soft-multi lg:absolute bottom-[100px] py-10 lg:py-[50px] lg:right-[15px] xl:right-0 px-3 lg:pl-3 xl:pl-[77px] rounded lg:rounded-none"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >

                    <div className="flex gap-2 lg:gap-2 xl:gap-[30px]">

                        <motion.svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[56px] hidden lg:block"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <path d="M18 8.92534C18 8.63119 18.1295 8.35196 18.3541 8.16195L28 0V19C28 19.5523 27.5523 20 27 20H19C18.4477 20 18 19.5523 18 19V8.92534Z" fill="#FF5A30" />
                            <path d="M0 8.92534C0 8.63119 0.129507 8.35196 0.354058 8.16195L10 0V19C10 19.5523 9.55228 20 9 20H1C0.447715 20 0 19.5523 0 19V8.92534Z" fill="#FF5A30" />
                        </motion.svg>

                        <motion.p className="max-w-full lg:max-w-[495px] text-ebony text-base sm:text-[20px] sm:leading-[150%] font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in. Sed aliquet in egestas hac at proin sed quam. Etiam aliquet sagittis non, massa cum pulvinar. Et in leo, tempus purus vestibulum ut blandit et mi. Odio massa purus vel praesent arcu enim elit felis viverra.
                            <br /><br />
                            Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra quis metus amet eleifend amet. Vet suspendisse faucibus tempor ipsum integer.
                        </motion.p>

                    </div>

                    <motion.div
                        className="flex items-center justify-between gap-0 lg:gap-[180px] pl-0 lg:pl-[60px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.7 }}
                        viewport={{ once: true }}
                    >

                        <div className="flex flex-col gap-1">

                            <motion.h6
                                className="text-ebony text-base leading-[160%] font-bold"
                                whileHover={{ color: "#FF5A30", scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >Courtney Alexander</motion.h6>

                            <small className="text-storm text-sm font-normal">CEO - Createx Construction Bureau</small>

                        </div>

                        <motion.div
                            initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            viewport={{ once: true }}
                        >
                            
                            <PiSignatureThin className="text-primary text-8xl" />

                        </motion.div>

                    </motion.div>

                </motion.div>

            </motion.div>

        </section>
    );
};

export default FounderCard;