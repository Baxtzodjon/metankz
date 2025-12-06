"use client"
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { IoIosHome } from "react-icons/io";
import { FaBoxes, FaCogs, FaFilter, FaProjectDiagram, FaGasPump, FaShieldAlt, FaDesktop } from 'react-icons/fa';
import Link from "next/link";

export const WorkCat = [
    { id: "all", link: "Work.categories.all", query: "all", icon: IoIosHome },
    { id: "storage", link: "Work.categories.storage", query: "storage", icon: FaBoxes },
    { id: "compressor", link: "Work.categories.compressor", query: "compressor", icon: FaCogs },
    { id: "filtration", link: "Work.categories.filtration", query: "filtration", icon: FaFilter },
    { id: "distribution", link: "Work.categories.distribution", query: "distribution", icon: FaProjectDiagram },
    { id: "dispensing", link: "Work.categories.dispensing", query: "dispensing", icon: FaGasPump },
    { id: "safety", link: "Work.categories.safety", query: "safety", icon: FaShieldAlt },
    { id: "control", link: "Work.categories.control", query: "control", icon: FaDesktop },
];

const CategoriesWork = ({ activeCategory }: { activeCategory: string }) => {
    const t = useTranslations(); /* ServiceBlock */

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.2,
                    },
                },
            }}
            className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 sm:mt-[120px]"> {/* mb-20 */}

            {WorkCat.map((cat, index) => {
                const Icon = cat.icon;
                 const isActive = activeCategory === cat.query;

                return (
                    <Link href={`/work?category=${cat.query}`} key={index}>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.95, y: 20 },
                                visible: { opacity: 1, scale: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className={`group flex items-center justify-center max-w-full w-full h-[154px] rounded-[4px] border border-[#e5e8ed] bg-light shadow-soft-multi overflow-hidden transition-colors duration-300 ${isActive ? "bg-primary shadow-soft-multi-active" : "hover:bg-primary hover:shadow-soft-multi-active"}`}
                        >
                            <div className="flex items-center justify-center flex-col gap-4">

                                <Icon className={`w-12 h-12 transition-colors duration-300 ${isActive ? "text-light" : "text-primary group-hover:text-light"}`} />

                                <h3 className={`text-[#9A9CA5] lg:text-lg xl:text-xl leading-[150%] font-bold transition-colors duration-300 ${isActive ? "text-light" : "text-[#9A9CA5] group-hover:text-light"}`}>
                                    All Projects{/* {t(`values.${cat.link}`)} */}
                                </h3>

                            </div>

                        </motion.div>

                    </Link>
                )
            })}

        </motion.section>
    );
};

export default CategoriesWork;