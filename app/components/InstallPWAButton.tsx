"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { MdInstallMobile } from "react-icons/md";

export default function InstallPWAButton() {
    const t = useTranslations("Pwa");

    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [visible, setVisible] = useState(false);
    const [isIOS, setIsIOS] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);

    useEffect(() => {
        const handler = (e: any) => {
            console.log("🔥 beforeinstallprompt fired");
            e.preventDefault();
            setDeferredPrompt(e);
        };

        window.addEventListener("beforeinstallprompt", handler);

        // 👉 определяем iOS + standalone
        const ua = window.navigator.userAgent.toLowerCase();
        const ios = /iphone|ipad|ipod/.test(ua);
        setIsIOS(ios);

        const standalone =
            window.matchMedia("(display-mode: standalone)").matches ||
            (window.navigator as any).standalone;

        setIsStandalone(standalone);

        const toggleVisibility = () => {
            if (window.scrollY > 950) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("beforeinstallprompt", handler);
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, []);

    const installApp = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const result = await deferredPrompt.userChoice;

        console.log(result);

        setDeferredPrompt(null);
        /* setVisible(false); */
    };

    // ❌ ничего не показываем если не надо
    if (/* !deferredPrompt || */ !visible) return null; /* (
        <button className="fixed bottom-5 right-5 text-sm opacity-70">
            Install (use browser menu)
        </button>
    ) */

    // 📱 iOS (Safari) — показываем инструкцию
    if (isIOS && !isStandalone && !deferredPrompt) {
        return (
            <div className="fixed bottom-20 right-5 z-[1000] max-w-[260px] rounded-lg bg-dark text-light p-4 text-sm shadow-lg">

                <div className="mb-2 font-semibold">
                    {t("install_text")}
                </div>

                <div className="leading-relaxed">
                    1. {t("install_ios_step1")}<br />
                    2. {t("install_ios_step2")}
                </div>

            </div>
        );
    }

    // 🤖 Android / Chrome — кнопка установки
    if (deferredPrompt) {
        return (
            <button
                onClick={installApp}
                /* disabled={!deferredPrompt} */
                className={`fixed right-5 xl:right-20 bottom-20 z-[1000] flex items-end transition-default ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >

                <span className="mr-4 text-light text-sm leading-[150%] uppercase xl:hidden" style={{ textShadow: '3px 3px 11px #969696' }}>{t("install_text")}</span>

                <span className="rounded px-2 py-2 xl:px-3 xl:py-2 bg-primary hover:bg-active transition-default">

                    <MdInstallMobile className="text-light text-[24px]" />

                </span>

            </button>
        );
    }

    return null;
}
