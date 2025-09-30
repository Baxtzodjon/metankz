"use client"

import React from "react"

interface TextsProps {
    title: string;
    description: string;
}

const Texts: React.FC<TextsProps> = ({ title, description }) => {
    return (
        <>

            <h2 className="text-ebony text-[28px] sm:text-[46px] leading-10 sm:leading-[130%] font-bold text-center">{title}</h2>

            <p className="text-storm text-base sm:text-lg leading-[150%] font-normal text-center mb-[25px] sm:mb-[60px]">{description}</p>

        </>
    );
};

export default Texts;