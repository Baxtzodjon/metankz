"use client"

import Image from "next/image";
import Texts from "./Texts";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

type AccordionItem = {
    id: number;
    titleKey: string;
    contentKey: string;
};

const accordionData: AccordionItem[] = [
    {
        id: 1,
        titleKey: "Interior design of apartments",
        contentKey:
            "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
    },
    {
        id: 2,
        titleKey: "Interior design of private houses",
        contentKey:
            "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.",
    },
];

const Suggest = () => {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-10 sm:pt-[100px] sm:pb-[120px] lg:pt-[120px] lg:pb-[180px]">

            <div className="container flex items-start justify-between gap-10 flex-col lg:flex-row">

                <Image src={"/images/portfolio_first.jpg"} alt={"Portfolio Image"} width={705} height={440} className="w-full lg:max-w-[570px] h-[420px] object-cover rounded" />

                <div className="flex flex-col gap-[60px]">

                    <Texts title="We offer" className="text-start" />

                    <div className="flex flex-col gap-6">

                        {accordionData.map((item) => (
                            <div key={item.id} className="flex flex-col gap-3">

                                <button
                                    onClick={() => toggleAccordion(item.id)}
                                    className="flex items-center gap-5 text-left focus:outline-none"
                                >
                                    {openId === item.id ? (
                                        <FaMinus className="text-primary text-2xl transition-all" />
                                    ) : (
                                        <FaPlus className="text-primary text-2xl transition-all" />
                                    )}

                                    <h2 className="text-ebony text-[28px] leading-[150%] font-bold">{item.titleKey}</h2>

                                </button>

                                <div
                                    className={`overflow-hidden transition-default ${openId === item.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >

                                    <p className="text-storm text-base leading-relaxed font-normal w-full lg:max-w-[575px] mt-2">
                                        {item.contentKey}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Suggest;