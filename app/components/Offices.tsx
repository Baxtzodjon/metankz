"use client"

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import Texts from "./Texts";
import { missionTexts } from "../data/missionTexts";
import Image from "next/image";
import { contactInfo } from "../data/contactInfo";

const Offices = () => {
    const t = useTranslations("Footer");

    return (
        <section className="pt-20 pb-[95px] bg-athens">

            <div className="container">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex items-center justify-center flex-col gap-6"
                >

                    <Texts title="Our offices" description="Give us a call, send us a note or visit our office. We can’t wait to hear from you!" />

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
                    {missionTexts.map(({ image, titleKey }, idx) => (
                        <motion.li
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="flex items-center flex-col gap-6 relative text-center after:content-[''] after:absolute after:top-0 after:right-[-94px] after:w-px after:h-full after:bg-no-repeat after:bg-center after:bg-cover after:bg-[url('https://live.verstaem.online/createx/img/divider.svg')] last:after:hidden after:hidden xl:after:block"
                        >

                            <h2 className="text-ebony text-xl sm:text-[28px] leading-[150%] font-bold">New York, USA</h2>

                            {/* <div className="flex flex-col gap-2">

                                <h3 className="text-ebony text-xl leading-[150%] font-bold text-center">Baxtzod</h3>

                                <p className="w-[285px] text-storm text-base leading-[160%] font-normal text-center">Hello</p>

                            </div> */}

                            {contactInfo.map(({ type, labelKey, value, href }) => {
                                const isEmail = type === "email";
                                const localizedHref = isEmail
                                    ? (() => {
                                        const email = href?.split("?")[0].replace("mailto:", "");
                                        const subject = encodeURIComponent(t("headOffice.emailSubject"));
                                        const body = encodeURIComponent(t("headOffice.emailBody"));
                                        return `mailto:${email}?subject=${subject}&body=${body}`;
                                    })()
                                    : href;

                                return (
                                    <span key={type} className="flex gap-1">
                                        <span className="text-blue-500 text-base font-normal">{t(`headOffice.${labelKey}`)}</span>

                                        {type === "address" ? (
                                            <address className="sm:max-w-[120px] md:max-w-none text-red-500 text-base font-normal not-italic opacity-60">
                                                {t(`headOffice.${value}`)}
                                            </address>
                                        ) : (
                                            <a
                                                href={localizedHref}
                                                className="text-red-500 text-base font-normal opacity-60 transition-default hover:text-white hover:opacity-100"
                                            >
                                                {value}
                                            </a>
                                        )}
                                    </span>
                                )
                            })}

                        </motion.li>
                    ))}

                </motion.ul>

            </div>

        </section>
    );
};

export default Offices;