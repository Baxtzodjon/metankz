"use client"

import Image from "next/image";
import Texts from "./Texts";
import KnowForm from "./KnowForm";
import { motion } from "motion/react";

const missionTexts = [
    {
        image: '/icons/icon_like.svg',
        title: 'Quality',
        description: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.',
    },
    {
        image: '/icons/icon_hand.svg',
        title: 'Safety',
        description: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.',
    },
    {
        image: '/icons/icon_slippers.svg',
        title: 'Comfort',
        description: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.',
    },
];

const MissionBlock = () => {
    return (
        <section className="bg-light pt-[120px]">

            <div className="container">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex items-center justify-center flex-col gap-6"
                >

                    <Texts title="Our core values" description="Our mission is to set the highest standards for construction sphere." />

                </motion.div>

                <motion.ul
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
                    className="flex items-center justify-center lg:items-start lg:justify-start flex-wrap gap-[25px] lg:grid grid-cols-1 lg:grid-cols-3 xl:gap-[188px] mb-[27px] relative"
                >

                    {missionTexts.map((texts, idx) => (
                        <motion.li
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="flex items-center flex-col gap-6 relative text-center after:content-[''] after:absolute after:top-0 after:right-[-94px] after:w-px after:h-full after:bg-no-repeat after:bg-center after:bg-cover after:bg-[url('https://live.verstaem.online/createx/img/divider.svg')] last:after:hidden after:hidden xl:after:block"
                        >

                            <Image src={texts.image} alt={texts.title} width={48} height={48} />

                            <div className="flex flex-col gap-2">

                                <h3 className="text-ebony text-xl leading-[150%] font-bold text-center">{texts.title}</h3>

                                <p className="w-[285px] text-storm text-base leading-[160%] font-normal text-center">{texts.description}</p>

                            </div>

                        </motion.li>
                    ))}

                </motion.ul>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >

                    <KnowForm />

                </motion.div>

            </div>

        </section>
    );
};

export default MissionBlock;