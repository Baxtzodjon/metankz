"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const isPWA = () => {
    if (typeof window === "undefined") return false;

    return (
        window.matchMedia("(display-mode: standalone)").matches ||
        // iOS Safari
        (window.navigator as any).standalone === true
    );
};

const Preloader = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Если приложение открыто как PWA —
        // вообще не показываем прелоадер
        if (isPWA()) {
            return;
        }

        // Проверяем: был ли уже показан прелоадер
        const hasShown = sessionStorage.getItem("preloaderShown");

        if (!hasShown) {
            setVisible(true);

            const timer = setTimeout(() => {
                setVisible(false);
                sessionStorage.setItem("preloaderShown", "true");
            }, 2000); // 4000

            return () => clearTimeout(timer);
        }
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[1001] flex items-center justify-center bg-ebony">

            <Image src={"/icons/logo.png"} alt={"Preloader"} width={400} height={400} className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto animate-pulse" />

        </div>
    );
};

export default Preloader;