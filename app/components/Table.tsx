"use client"

import Texts from "./Texts";
import { PRICING_COLUMNS, PRICING_ROWS } from "../data/pricingData";
import { FaCheck } from "react-icons/fa6";

const Table = () => {
    return (
        <section className="w-full bg-athens py-10 sm:pt-20 sm:pb-10">

            <div className="container">

                <Texts title="Pricing" description="We offer you three categories of construction." />

                <div className="overflow-x-auto -mx-4 sm:-mx-0">

                    <table className="w-full min-w-[600px] h-[743px] bg-light table-fixed md:table-auto border-collapse border border-solid border-[#E5E8ED] rounded text-left shadow-soft-multi">

                        <thead>

                            <tr>

                                <th className="text-ebony text-lg leading-[150%] font-bold text-left pt-7 sm:pt-11 pl-4 md:pl-6">Items</th>

                                {PRICING_COLUMNS.map(col => (

                                    <th key={col.key} className="pt-8 pb-6">

                                        <div className="flex flex-col items-center">

                                            <span className="text-ebony text-lg sm:text-2xl font-bold leading-tight sm:leading-[150%]">{col.title}</span>

                                            <span className="text-storm text-sm sm:text-lg font-bold leading-tight sm:leading-[150%]">{col.price}</span>

                                        </div>

                                    </th>
                                ))}

                            </tr>

                        </thead>

                        <tbody className="[&>tr:nth-child(odd)]:bg-athens">

                            {PRICING_ROWS.map((row, rowIndex) => (
                                <tr key={rowIndex}>

                                    <td className="text-gray text-base font-normal leading-[160%] pl-4 md:pl-6">{row.label}</td>

                                    {row.values.map((value, colIndex) => (
                                        <td key={colIndex} className="text-center">
                                            {value === true && (
                                                <FaCheck className="text-primary text-2xl mx-auto" />
                                            )}
                                            {typeof value === "string" && (
                                                <span className="text-gray">{value}</span>
                                            )}
                                        </td>
                                    ))}

                                </tr>
                            ))}

                        </tbody>

                        <tfoot>

                            <tr>

                                <td></td>

                                {PRICING_COLUMNS.map(col => (

                                    <td key={col.key} className="pt-8 pb-8 text-center">

                                        <button className="border border-current rounded w-full md:w-auto py-3 px-6 font-bold text-sm tracking-wider uppercase text-primary transition-colors hover:bg-primary hover:text-white">send request</button>

                                    </td>

                                ))}

                            </tr>

                        </tfoot>

                    </table>

                </div>

            </div>

        </section>
    );
};

export default Table;