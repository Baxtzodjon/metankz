"use client"
import Link from "next/link";
import Texts from "../components/Texts";
import { useTranslations } from "next-intl";

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
        <div className="pt-[120px] pb-[60px]">

            <div className="container flex items-center justify-center flex-col gap-10">

                {/* <Link key={categories.id} href={"/"} className="max-w-full w-[205px] h-[46px] text-[#9A9CA5] text-base font-bold leading-[160%] transition-default hover:text-primary hover:border-2 hover:border-solid hover:border-primary rounded flex items-center justify-center">{categories.link}</Link> borders потом при клике чтобы понять становиться и active и как обычный hover effect свой останеться */}

                <Texts title={t("News.categoryText")} />

                <div className="flex items-center justify-center flex-wrap">

                    {NewsCat.map((item) => (
                        <Link
                            key={item.id}
                            href={`/news?category=${item.query}`}
                            className={`w-[205px] h-[46px] flex items-center justify-center rounded font-bold
                                ${activeCategory === item.query
                                    ? "text-primary border-2 border-primary"
                                    : "text-[#9A9CA5] hover:text-primary hover:border-primary hover:border-2"
                                }`}
                        >
                            {t(item.link)}
                        </Link>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default CategoriesNews;