"use client"

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import Texts from "./Texts";
import { socialLinks } from "../data/socialLinks";
import { locations } from "../data/locations";
import { contactPageInfo } from "../data/contactPageInfo";

const Offices = () => {
    const t = useTranslations("Footer");
    const tContactPage = useTranslations();

    return (
        <section className="pt-20 pb-[95px] bg-athens">

            <div className="container flex items-center justify-center flex-col gap-[60px] md:gap-[120px]">

                <div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex items-center justify-center flex-col gap-6"
                    >

                        <Texts title={tContactPage("Contact.our_offices_title")} description={tContactPage("Contact.our_offices_description")} />

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
                        className="flex items-center justify-center flex-wrap gap-[60px] lg:gap-[120px] lg:grid grid-cols-1 lg:grid-cols-3 xl:gap-[188px] relative"
                    >
                        {locations.map((location, idx) => {
                            /* const location = locations[idx]; */

                            return (
                                <motion.li
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    className="relative text-center after:content-[''] after:absolute after:top-0 after:right-[-94px] after:w-px after:h-full after:bg-no-repeat after:bg-center after:bg-cover after:bg-[url('https://live.verstaem.online/createx/img/divider.svg')] last:after:hidden after:hidden xl:after:block"
                                >

                                    <div className="flex flex-col gap-5">

                                        <div className="flex flex-col gap-6" key={idx}>

                                            <h2 className="text-ebony text-xl sm:text-[28px] leading-[150%] font-bold text-center sm:text-left">{tContactPage(location.titleKey)}</h2>

                                            <div className="flex items-start flex-col gap-1">

                                                <address className="max-w-[250px] text-ebony text-base font-normal text-center sm:text-left not-italic"> {tContactPage(location.addressKey)}</address> {/* sm: md:max-w-none */}

                                                <a target="_blank" href={location.mapLink} className="text-primary text-base font-normal underline transition-default hover:text-ebony mx-auto sm:mx-0">{tContactPage("Contact.see_on_map")}</a>

                                            </div>

                                        </div>

                                        <div className="flex items-center sm:items-start justify-center sm:justify-start flex-col gap-1">

                                            {contactPageInfo.map(({ type, labelKey, valueKey, href }) => {
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

                                                        <span className="text-storm text-base font-normal">{tContactPage(labelKey)}</span>

                                                        <a href={localizedHref} className="text-ebony text-base font-normal transition-default hover:text-primary">{tContactPage(valueKey)}</a>

                                                    </span>
                                                )
                                            })}

                                        </div>

                                    </div>

                                </motion.li>
                            );
                        })}

                    </motion.ul>

                </div>

                <motion.div
                    className="flex items-center flex-col gap-5 lg:gap-10"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >

                    <Texts title={tContactPage("Contact.find_us_at")} />

                    <div className="flex items-center gap-6">

                        {socialLinks.map(({ href, icon: Icon, label }) => (
                            <a key={href} href={href} target="_blank" aria-label={label}>

                                <Icon className="w-6 h-6 text-storm transition-default hover:text-primary" />

                            </a>
                        ))}

                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default Offices;