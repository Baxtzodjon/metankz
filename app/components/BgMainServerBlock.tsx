"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from 'motion/react';
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

interface BgTextssProps {
    title: string;
    description: string;
    image: string;
}

const containerVariants: Variants = {
    hidden: { y: 50, opacity: 1 }, // opacity = 1 сразу, чтобы не исчезало
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const BGMainServerBlock: React.FC<BgTextssProps> = ({ title, description, image }) => {
    const pathname = usePathname();
    const t = useTranslations("Header");

    const locales = ["ru", "uz", "en", "kz"];

    const cleanPath = (() => {
        if (!pathname) return "/";
        const parts = pathname.split("/").filter(Boolean);
        if (locales.includes(parts[0])) parts.shift();
        return "/" + parts.join("/");
    })();

    return (
        <motion.section
            className="relative top-0 left-0 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <Image
                src={image}
                alt={`${title} Image`}
                width={1920}
                height={600}
                className="w-full h-[420px] object-cover"
                priority
            />

            <div className="container absolute top-20 left-0 xl:left-[145px] flex flex-col gap-10">
                <motion.div
                    className="flex items-center gap-2"
                    initial={{ y: -20, opacity: 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                >
                    <Link
                        href={"/"}
                        className="text-gray text-sm font-normal leading-[150%] hover:text-[#9A9CA5] transition-default"
                    >
                        {t("nav.home")}
                    </Link>

                    <Link
                        href={cleanPath}
                        className="text-[#9A9CA5] text-sm font-normal leading-[150%] capitalize flex items-center gap-2"
                    >
                        <small>/</small> {cleanPath.replace("/", "") || t("nav.home")}
                    </Link>
                </motion.div>

                <div className="flex flex-col gap-6">
                    <motion.h2
                        className="text-ebony text-[35px] leading-[45px] sm:text-6xl sm:leading-[75px] md:text-7xl md:leading-[130%] font-bold capitalize"
                        initial={{ x: -50, opacity: 1 }} // opacity 1 сразу
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        className="max-w-[600px] text-storm text-base sm:text-[20px] sm:leading-[150%] font-normal"
                        initial={{ y: 20, opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {description}
                    </motion.p>
                </div>
            </div>
        </motion.section>
    );
};

export default BGMainServerBlock;
