"use client"

import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const ScrollToTopBtn = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 950) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        const duration = 1000 * 3;
        const start = window.scrollY;
        const startTime = performance.now();

        const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeInOutQuad = progress < 0.5
                ? 2 * progress * progress
                : -1 + (4 - 2 * progress) * progress;

            window.scrollTo(0, start * (1 - easeInOutQuad));

            if (elapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    return (
        <button onClick={scrollToTop} className={`fixed right-5 bottom-5 z-[1000] flex items-end xl:scroll-btn xl:bottom-20 transition-default ${visible ? "opacity-100 visible" : "opacity-0 invisible"}`}>

            <span className="mr-4 text-light text-sm leading-[150%] uppercase" style={{ textShadow: '3px 3px 11px #969696' }}>Go to top</span>

            <span className="flex items-center justify-center rounded w-10 h-10 bg-primary hover:bg-active transition-default">

                <MdKeyboardArrowLeft className="text-light text-[32px] rotate-[90deg]" />

            </span>

        </button>
    );
};

export default ScrollToTopBtn;