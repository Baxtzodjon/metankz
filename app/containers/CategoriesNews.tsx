"use client"
import Link from "next/link";
import Texts from "../components/Texts";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

/* const NewsCat = [
    { id: "1", link: "All News" },
    { id: "2", link: "Company News" },
    { id: "3", link: "Innovation" },
    { id: "4", link: "Industry News" },
    { id: "5", link: "Expert Tips" },
    { id: "6", link: "Marketing" },
]; */

const NewsCat = [
    { id: "all", link: "News.categories.allNews", query: "all" },
    { id: "methane", link: "News.categories.methane", query: "methane" },
    { id: "gas", link: "News.categories.gas", query: "gas" },
    { id: "oil", link: "News.categories.oil", query: "oil" },
    { id: "fuel", link: "News.categories.fuel", query: "fuel" },
    { id: "petrol", link: "News.categories.petrol", query: "petrol" },
];

const CategoriesNews = ({ activeCategory }: { activeCategory: string }) => {
    const t = useTranslations();

    return (
        <motion.div
            className="pt-[120px] pb-[60px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >

            <div className="container flex items-center justify-center flex-col gap-10">

                {/* <Link key={categories.id} href={"/"} className="max-w-full w-[205px] h-[46px] text-[#9A9CA5] text-base font-bold leading-[160%] transition-default hover:text-primary hover:border-2 hover:border-solid hover:border-primary rounded flex items-center justify-center">{categories.link}</Link> borders потом при клике чтобы понять становиться и active и как обычный hover effect свой останеться */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    <Texts title={t("News.categoryText")} />
                </motion.div>

                <motion.div
                    className="flex items-center justify-center flex-wrap"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                delayChildren: 0.2,
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >

                    {NewsCat.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={{
                                hidden: { opacity: 0, y: 15 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >

                            <motion.div
                                whileTap={{ scale: 0.96 }}
                                whileHover={{ scale: 1.04 }}
                                transition={{ type: "spring", stiffness: 250, damping: 12 }}
                            >

                                <Link
                                    href={`/news?category=${item.query}`}
                                    className={`w-[205px] h-[46px] flex items-center justify-center rounded font-bold
                                        ${activeCategory === item.query
                                            ? "text-primary border-2 border-primary"
                                            : "text-[#9A9CA5] hover:text-primary hover:border-primary hover:border-2"
                                        }`}
                                >
                                    {t(item.link)}
                                </Link>

                            </motion.div>

                        </motion.div>
                    ))}

                </motion.div>

            </div>

        </motion.div>
    );
};

export default CategoriesNews;