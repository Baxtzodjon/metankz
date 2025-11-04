"use client"

import Image from "next/image";
import Texts from "./Texts";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const partnersLogo = [
    { id: 1, image: '/icons/partners_logo.png' },
    { id: 2, image: '/icons/partners_logo.png' },
    { id: 3, image: '/icons/partners_logo.png' },
    { id: 4, image: '/icons/partners_logo.png' },
    { id: 5, image: '/icons/partners_logo.png' },
    { id: 6, image: '/icons/partners_logo.png' },
    { id: 7, image: '/icons/partners_logo.png' },
    { id: 8, image: '/icons/partners_logo.png' },
    { id: 9, image: '/icons/partners_logo.png' },
    { id: 10, image: '/icons/partners_logo.png' },
    { id: 11, image: '/icons/partners_logo.png' },
    { id: 12, image: '/icons/partners_logo.png' },
];

// container variant for staggered animation
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// item variant for each logo
const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        },
    },
};

const Partners = () => {
    const t = useTranslations();
    const pathname = usePathname();

    const isAboutPage = pathname?.match(/^\/((uz|ru|en|kz)\/)?about$/);
    const logosToShow = isAboutPage ? partnersLogo : partnersLogo.slice(0, 6);

    return (
        <section className="py-20 bg-athens">

            <div className="container">

                {/* <h2 className="text-ebony text-[28px] sm:text-[46px] leading-10 sm:leading-[130%] font-bold text-center mb-[60px]">Supported by 12+ partners</h2> */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex items-center justify-center flex-col gap-6"
                >
                    {isAboutPage ? (
                        <Texts
                            title="Our partners"
                            description="We are supported by 12+ industry bodies and media partners"
                        />
                    ) : (
                        <Texts title={t("Partners.title")} className="mb-[60px]" />
                    )}

                </motion.div>

                <motion.ul
                    className="grid grid-cols-6 gap-y-10 gap-x-[30px] lg:gap-x-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >

                    {logosToShow.map((item) => (

                        <motion.li
                            key={item.id}
                            variants={itemVariants} className="flex justify-center col-span-3 xl:col-span-1">

                            <a href="#">

                                <Image src={item.image} alt="Logo" width={120} height={64} className="max-w-full grayscale hover:grayscale-0 scale-100 hover:scale-105 transition-default" loading="lazy" />

                            </a>

                        </motion.li>

                    ))}

                </motion.ul>

            </div>

        </section>
    );
};

export default Partners;