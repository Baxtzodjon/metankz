"use client"

import React, { useEffect, useRef, useState } from "react";
import Texts from "./Texts";
import { motion } from "motion/react";

// Тип для одного факта
interface FactItem {
    percent?: number;
    full?: number;
    value: number | string;
    text: string;
    progressStroke: string;
    targetValue: number;
}

const factsData: FactItem[] = [
    {
        percent: 57,
        value: '57%',
        text: 'Totally satisfied clients',
        targetValue: 57,
        progressStroke: '#f89828'
    },
    {
        full: 50,
        value: 35,
        text: 'Years of experience',
        targetValue: 35,
        progressStroke: '#f52f6e'
    },
    {
        full: 10000,
        value: 9452,
        text: 'Working hours spent',
        targetValue: 9452,
        progressStroke: '#5a87fc'
    },
    {
        percent: 100,
        value: '100%',
        text: 'Succeeded projects',
        targetValue: 100,
        progressStroke: '#03cea4'
    },
];

const strokeDasharray = 942.478;

const AnimatedCircle: React.FC<{ fact: FactItem }> = ({ fact }) => {
    const [progress, setProgress] = useState(strokeDasharray);
    const [number, setNumber] = useState(0);
    const requestRef = useRef<number | null>(null);
    const startRef = useRef<number | null>(null);

    const duration = 10000;

    const maxFull = fact.full ?? 100;
    const finalOffset = strokeDasharray * (1 - fact.targetValue / maxFull);

    useEffect(() => {
        const animate = (timestamp: number) => {
            if (!startRef.current) startRef.current = timestamp;
            const elapsed = timestamp - startRef.current;

            const progressRatio = Math.min(elapsed / duration, 1);

            const currentOffset = strokeDasharray - (strokeDasharray - finalOffset) * progressRatio;
            const currentNumber = Math.floor(fact.targetValue * progressRatio);

            setProgress(currentOffset);
            setNumber(currentNumber);

            if (progressRatio < 1) {
                requestRef.current = requestAnimationFrame(animate);
            } else {
                setProgress(finalOffset);
                setNumber(fact.targetValue);
            }
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [fact.targetValue, finalOffset]);

    return (
        <div
            className="relative mb-5 w-[148px] h-[148px]"
            data-percent={fact.percent}
            data-percentage={fact.full ? "true" : undefined}
            data-full={fact.full}
            data-value={fact.value}
        >
            <svg
                className="rotate-[-90deg] origin-center w-full h-full"
                viewBox="-10 -10 320 320"
            >
                <circle
                    className="opacity-30"
                    r="150"
                    cx="150"
                    cy="150"
                    fill="none"
                    stroke={fact.progressStroke}
                    strokeWidth="15"
                />

                <circle
                    r="150"
                    cx="150"
                    cy="150"
                    fill="none"
                    stroke={fact.progressStroke}
                    strokeWidth="15"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={progress}
                />
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-ebony text-[32px] leading-[150%] font-bold">
                {typeof fact.value === "string" && fact.value.includes("%")
                    ? `${number}%`
                    : number}
            </div>

        </div>
    );
};

const Facts: React.FC = () => {
    return (
        <section className="relative overflow-hidden py-10 sm:pt-[180px] sm:pb-[100px] bg-light before:content-[''] before:absolute before:-left-[9px] before:-top-[195px] before:w-[570px] before:h-[1065px] before:bg-[url('/images/facts_bg.png')] before:bg-center before:bg-no-repeat before:bg-cover">

            <div className="container">

                {/* <h2 className="text-ebony text-[28px] sm:text-[46px] leading-10 sm:leading-[130%] font-bold text-center mb-[62px]">Some facts and figures</h2> */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex items-center justify-center flex-col gap-6"
                >

                    <Texts title="Some facts and figures" className="mb-[62px]" />

                </motion.div>

                <ul className="p-0 block sm:grid sm:grid-cols-2 md:grid-cols-4 mx-auto max-w-[736px] gap-12">

                    {factsData.map((fact, index) => (
                        <motion.li
                            key={index}
                            className="mb-[30px]"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >

                            <div className="flex items-center flex-col">

                                <motion.div
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >

                                    <AnimatedCircle fact={fact} />

                                </motion.div>

                                <span className="block text-ebony text-sm leading-[150%] font-normal text-center">{fact.text}</span>

                            </div>

                        </motion.li>
                    ))}

                </ul>

            </div>

        </section>
    );
};

export default Facts;