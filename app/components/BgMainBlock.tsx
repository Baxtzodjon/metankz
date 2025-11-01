"use client"

import React from "react"
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from 'motion/react';
import { usePathname } from "next/navigation";

interface BgTextssProps {
    title: string;
    description: string;
    image: string;
    /* className?: string; */
}

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const BGMainBlock: React.FC<BgTextssProps> = ({ title, description, image }) => {
    const pathname = usePathname();

    // Список твоих локалей
    const locales = ["en", "ru", "uz", "kz"];

    // Убираем локаль из URL
    const cleanPath = (() => {
        if (!pathname) return "/";
        const parts = pathname.split("/").filter(Boolean); // ["en", "about"]
        // Если первый сегмент — локаль, удаляем его
        if (locales.includes(parts[0])) {
            parts.shift();
        }
        return "/" + parts.join("/"); // "/about"
    })();

    return (
        <motion.section className="relative top-0 left-0 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >

            <Image src={image} alt={"Background About Us"} width={1920} height={600} className="w-full h-[420px] object-cover" priority /> {/* h-[555px] sm:h-[130vh] py-[100px] sm:py-[200px] md:pt-[200px] md:pb-[320px] lg:pt-[220px] lg:pb-[354px] */}

            <div className="container absolute top-20 lg:left-0 xl:left-[145px] flex flex-col gap-10">

                <motion.div className="flex items-center gap-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                >

                    <Link href={"/"} className="text-gray text-sm font-normal leading-[150%] hover:text-[#9A9CA5] transition-default">Homepage</Link>

                    <Link href={cleanPath} className="text-[#9A9CA5] text-sm font-normal leading-[150%] capitalize flex items-center gap-2"><small>/</small> {cleanPath.replace("/", "") || "home"}</Link>

                </motion.div>

                <div className="flex flex-col gap-6">

                    <motion.h2 className="text-ebony text-[35px] leading-[45px] sm:text-6xl sm:leading-[75px] md:text-7xl md:leading-[130%] font-bold capitalize"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >{title}</motion.h2>

                    <motion.p className="max-w-[600px] text-storm text-base sm:text-[20px] sm:leading-[150%] font-normal"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >{description}</motion.p>

                </div>

            </div>

        </motion.section>
    );
};

export default BGMainBlock;