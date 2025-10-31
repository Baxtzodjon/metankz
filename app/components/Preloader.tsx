"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const Preloader = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Проверяем: был ли уже показан прелоадер
        const hasShown = sessionStorage.getItem("preloaderShown");

        if (!hasShown) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
                sessionStorage.setItem("preloaderShown", "true");
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[1001] flex items-center justify-center bg-ebony">

            <Image src={"/icons/createx_white_logo.svg"} alt={"Preloader"} width={400} height={400} className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto animate-pulse" />

        </div>
    );
};

export default Preloader;