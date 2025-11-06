"use client"

import Image from "next/image";
import Texts from "./Texts";
import { motion } from "motion/react";

const Map = () => {
    return (
        <section className="w-full bg-[#F4F5F6] py-10 sm:pt-20 sm:pb-[120px]">

            <div className="container flex items-center justify-center flex-col gap-[25px] sm:gap-[60px]">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >

                    <Texts title="We work worldwide" />

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-full max-w-[1195px]"
                >

                    <Image src={"/images/map_image.svg"} alt="Map image" width={1195} height={563} priority className="w-full h-auto pointer-events-none" />

                </motion.div>

            </div>

        </section>
    );
};

export default Map;