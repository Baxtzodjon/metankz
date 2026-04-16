"use client"

import React from "react"
import { motion } from "motion/react";
import Link from "next/link";

interface ButtonsProps {
    title: string;
    linkTitle: string;
    link: string;
    className?: string;
}

const BtnText: React.FC<ButtonsProps> = ({ title, linkTitle, link, className }) => {
    return (
        <>

            <div className={`flex items-center justify-start sm:justify-center flex-wrap sm:flex-nowrap gap-[10px] md:gap-10 ${className || ""}`}>

                <motion.h4
                    className="max-w-none sm:max-w-[50%] md:max-w-none text-ebony text-[28px] font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >{title}</motion.h4>

                {link && linkTitle && (
                    <motion.button
                        className="py-[15px] px-[39px] bg-primary rounded text-light text-base leading-[20px] tracking-wider font-bold uppercase hover:bg-active transition-default cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                        viewport={{ once: true }}
                    >

                        <Link href={link}>{linkTitle}</Link>

                    </motion.button>
                )}

            </div>

        </>
    );
};

export default BtnText;