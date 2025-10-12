"use client"

import React from "react"

interface TextsProps {
    title: string;
    link?: string;
    className?: string;
}

const BtnText: React.FC<TextsProps> = ({ title, link, className }) => {
    return (
        <>

            <div className={`flex items-center justify-start sm:justify-center flex-wrap sm:flex-nowrap gap-[10px] md:gap-10 ${className || ""}`}>

                <h4 className="max-w-none sm:max-w-[50%] md:max-w-none text-ebony text-[28px] font-bold">{title}</h4>

                <a href="#" className="py-[15px] px-[39px] bg-primary rounded text-light text-base leading-[20px] tracking-wider font-bold uppercase hover:bg-active transition-default cursor-pointer">{link}</a>

            </div>

        </>
    );
};

export default BtnText;