"use client"

import Link from "next/link";
import Texts from "../components/Texts";

const NewsCat = [
    { id: "1", link: "All News" },
    { id: "2", link: "Company News" },
    { id: "3", link: "Innovation" },
    { id: "4", link: "Industry News" },
    { id: "5", link: "Expert Tips" },
    { id: "6", link: "Marketing" },
];

const CategoriesNews = () => {
    return (
        <div className="pt-[120px] pb-[60px]">

            <div className="container flex items-center justify-center flex-col gap-10">

                <Texts title="Categories" />

                <div className="flex items-center justify-center flex-wrap">

                    {NewsCat.map((categories) => (
                        <Link key={categories.id} href={"/"} className="max-w-full w-[205px] h-[46px] text-[#9A9CA5] text-base font-bold leading-[160%] transition-default hover:text-primary hover:border-2 hover:border-solid hover:border-primary rounded flex items-center justify-center">{categories.link}</Link>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default CategoriesNews;