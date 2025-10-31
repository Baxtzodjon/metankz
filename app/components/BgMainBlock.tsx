"use client"

import React from "react"
import Image from "next/image";

/* interface BgTextssProps {
    title: string;
    link: string;
    className?: string;
} */

const BGMainBlock = () => { /* React.FC<BgTextssProps> { title, link, className } */
    return (
        <section className="relative top-0 left-0">

            <Image src={"/images/about_us_bg.png"} alt={"Background About Us"} width={1920} height={600} />

            <div className="container absolute top-20 lg:left-0 xl:left-[145px]">

                <div className="flex flex-col gap-6">

                    <h2 className="text-ebony text-[28px] sm:text-[46px] lg:text-7xl leading-10 sm:leading-[130%] font-bold">ABOUT US</h2>

                    <p className="max-w-[470px]">Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service.</p>

                </div>

            </div>

        </section>
    );
};

export default BGMainBlock;