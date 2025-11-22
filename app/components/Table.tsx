"use client"

import Texts from "./Texts";
import { PRICING_COLUMNS, PRICING_ROWS } from "../data/pricingData";
import { FaCheck } from "react-icons/fa6";
import { motion } from "motion/react";
import { useState } from "react";
import Modal from "./Modal";
import { useTranslations } from "next-intl";

const Table = () => {
    const t = useTranslations();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className="relative overflow-hidden w-full py-10 sm:pt-20 sm:pb-10 bg-athens before:content-[''] before:absolute before:-left-[9px] before:-top-[195px] before:w-[570px] before:h-[1065px] before:bg-[url('/images/facts_bg.png')] before:bg-center before:bg-no-repeat before:bg-cover before:z-0">

            <div className="container relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex items-center justify-center flex-col gap-6"
                >

                    <Texts title={t("Pricing.title")} description={t("Pricing.description")} />

                </motion.div>

                <div className="overflow-x-auto -mx-[15px] sm:-mx-0">

                    <motion.table
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full min-w-[600px] h-[743px] bg-light table-fixed md:table-auto border-collapse border border-solid border-[#E5E8ED] rounded text-left shadow-soft-multi">

                        <thead>

                            <tr>

                                <motion.th
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="text-ebony text-lg leading-[150%] font-bold text-left pt-7 sm:pt-11 pl-4 md:pl-6">{t("Pricing.items_header")}</motion.th>

                                {PRICING_COLUMNS.map((col, index) => (

                                    <motion.th
                                        key={col.key}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                                        className="pt-8 pb-6"
                                    >

                                        <div className="flex flex-col items-center">

                                            <span className="text-ebony text-lg sm:text-2xl font-bold leading-tight sm:leading-[150%] uppercase">{t(col.titleKey)}</span>

                                            <span className="text-storm text-sm sm:text-lg font-bold leading-tight sm:leading-[150%]">{t(col.priceKey)}</span>

                                        </div>

                                    </motion.th>
                                ))}

                            </tr>

                        </thead>

                        <tbody className="[&>tr:nth-child(odd)]:bg-athens">

                            {PRICING_ROWS.map((row, rowIndex) => (
                                <motion.tr
                                    key={rowIndex}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, ease: "easeOut", delay: rowIndex * 0.08 }}
                                >

                                    <td className="text-gray text-base font-normal leading-[160%] pl-4 md:pl-6">{t(row.labelKey)}</td>

                                    {row.values.map((value, colIndex) => (
                                        <td key={colIndex} className="text-center">
                                            {value === true && (
                                                <FaCheck className="text-primary text-2xl mx-auto" />
                                            )}
                                            {typeof value === "string" && (
                                                <span className="text-gray">{t(value)}</span>
                                            )}
                                        </td>
                                    ))}

                                </motion.tr>
                            ))}

                        </tbody>

                        <tfoot>

                            <tr>

                                <td></td>

                                {PRICING_COLUMNS.map((col, index) => (

                                    <motion.td
                                        key={col.key}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                                        className="pt-8 pb-8 text-center">
                                        <button className="border border-current rounded w-full md:w-auto py-3 px-6 font-bold text-sm tracking-wider uppercase text-primary transition-colors hover:bg-primary hover:text-white" onClick={openModal}>{t("Pricing.send_request")}</button>

                                    </motion.td>

                                ))}

                            </tr>

                        </tfoot>

                    </motion.table>

                </div>

            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} />

        </section>
    );
};

export default Table;