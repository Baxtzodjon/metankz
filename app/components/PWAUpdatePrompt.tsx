"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function PWAUpdatePrompt() {
    const [show, setShow] = useState(false);
    const t = useTranslations("Pwa");

    useEffect(() => {
        if (!("serviceWorker" in navigator)) return;

        navigator.serviceWorker.ready.then((registration) => {
            if (registration.waiting) {
                setShow(true);
            }

            registration.addEventListener("updatefound", () => {
                const newWorker = registration.installing;

                if (!newWorker) return;

                newWorker.addEventListener("statechange", () => {
                    if (newWorker.state === "installed") {
                        if (navigator.serviceWorker.controller) {
                            setShow(true);
                        }
                    }
                });
            });
        });
    }, []);

    const handleUpdate = () => {
        navigator.serviceWorker.getRegistration().then((registration) => {
            if (registration?.waiting) {
                registration.waiting.postMessage({ type: "SKIP_WAITING" });
            }
        });

        window.location.reload();
    };

    if (!show) return null;

    return (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-ebony text-light px-4 py-3 rounded-xl shadow-lg z-50">

            <div className="flex items-center gap-4">

                <span>🚀 {t("updateAvailable")}</span>

                <button
                    onClick={handleUpdate}
                    className="bg-primary px-3 py-1 rounded-lg hover:bg-active transition-default"
                >
                    {t("updateButton")}
                </button>

            </div>

        </div>
    );
}