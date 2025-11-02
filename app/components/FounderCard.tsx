"use client"

import Image from "next/image";
import { PiSignatureThin } from "react-icons/pi";
import { motion } from 'motion/react';

const FounderCard = () => {
    return (
        <section className="container relative mt-[240px]">

            <div>

                <Image src={"/images/portfolio_first.jpg"} alt="Portfolio First image" width={525} height={580} className="max-w-full" />

            </div>

            <div className="w-[735px] h-[520px] bg-light flex justify-center flex-col gap-[51px] shadow-soft-multi absolute bottom-[100px] right-0 pl-[77px]">

                <div className="flex gap-[30px]">

                    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 8.92534C18 8.63119 18.1295 8.35196 18.3541 8.16195L28 0V19C28 19.5523 27.5523 20 27 20H19C18.4477 20 18 19.5523 18 19V8.92534Z" fill="#FF5A30" />
                        <path d="M0 8.92534C0 8.63119 0.129507 8.35196 0.354058 8.16195L10 0V19C10 19.5523 9.55228 20 9 20H1C0.447715 20 0 19.5523 0 19V8.92534Z" fill="#FF5A30" />
                    </svg>

                    <motion.p className="max-w-[495px] text-ebony text-base sm:text-[20px] sm:leading-[150%] font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in. Sed aliquet in egestas hac at proin sed quam. Etiam aliquet sagittis non, massa cum pulvinar. Et in leo, tempus purus vestibulum ut blandit et mi. Odio massa purus vel praesent arcu enim elit felis viverra.
                        <br /><br />
                        Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra quis metus amet eleifend amet. Vet suspendisse faucibus tempor ipsum integer.
                    </motion.p>

                </div>

                <div className="flex items-center gap-[180px] pl-[60px]">

                    <div className="flex flex-col gap-1">

                        <h6 className="text-ebony text-base leading-[160%] font-bold">Courtney Alexander</h6>

                        <small className="text-storm text-sm font-normal">CEO - Createx Construction Bureau</small>

                    </div>

                    <PiSignatureThin className="text-primary text-8xl" />

                </div>

            </div>

        </section>
    );
};

export default FounderCard;