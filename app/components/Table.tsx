/* "use client"

import Texts from "./Texts";
import { FaCheck } from "react-icons/fa6";

const Table = () => {
    return (
        <section className="w-full bg-[#F4F5F6] py-10 sm:pt-20 sm:pb-[120px]">

            <div className="container">

                <Texts title="Pricing" description="We offer you three categories of construction." />

                <table className="w-full h-[743px] bg-light table-fixed md:table-auto table border-collapse border border-solid border-[#E5E8ED] rounded text-left shadow-soft-multi">

                    <thead>

                        <tr>

                            <th className="text-ebony text-lg leading-[150%] font-bold pl-6">Items</th>

                            <th className="pt-8 pb-6">

                                <div className="flex flex-col items-start">

                                    <span className="text-ebony text-lg sm:text-2xl leading-tight sm:leading-[150%] font-bold">BASIC</span>

                                    <span className="text-storm text-sm sm:text-lg leading-tight sm:leading-[150%] font-bold">$20 per m2</span>

                                </div>

                            </th>

                            <th className="pt-8 pb-6">

                                <div className="flex flex-col items-start">

                                    <span className="text-ebony text-lg sm:text-2xl leading-tight sm:leading-[150%] font-bold">STANDARD</span>

                                    <span className="text-storm text-sm sm:text-lg leading-tight sm:leading-[150%] font-bold">$30 per m2</span>

                                </div>

                            </th>

                            <th className="pt-8 pb-6">

                                <div className="flex flex-col items-start">

                                    <span className="text-ebony text-lg sm:text-2xl leading-tight sm:leading-[150%] font-bold">BUSINESS</span>

                                    <span className="text-storm text-sm sm:text-lg leading-tight sm:leading-[150%] font-bold">$40 per m2</span>

                                </div>

                            </th>

                        </tr>

                    </thead>

                    <tbody className="[&>tr:nth-child(odd)]:bg-[#F4F5F6]">

                        <tr>

                            <td className="text-gray text-base font-normal leading-[160%] pl-6">Installation plan</td>
                            <td><FaCheck className="text-primary text-2xl" /></td>
                            <td><FaCheck className="text-primary text-2xl" /></td>
                            <td><FaCheck className="text-primary text-2xl" /></td>

                        </tr>

                        <tr>

                            <td className="text-gray text-base font-normal leading-[160%] pl-6">Planning solutions (2-3 options)</td>
                            <td><FaCheck className="text-primary text-2xl" /></td>
                            <td><FaCheck className="text-primary text-2xl" /></td>
                            <td><FaCheck className="text-primary text-2xl" /></td>

                        </tr>

                        <tr>

                            <td className="text-gray text-base font-normal leading-[160%] pl-6">Lighting plan</td>
                            <td><FaCheck className="text-primary text-2xl" /></td>
                            <td><FaCheck className="text-primary text-2xl" /></td>
                            <td><FaCheck className="text-primary text-2xl" /></td>

                        </tr>

                        <tr>

                            <td className="text-gray text-base font-normal leading-[160%] pl-6">Flooring plan</td>
                            <td><FaCheck className="text-primary text-2xl" /></td>
                            <td><FaCheck className="text-primary text-2xl" /></td>
                            <td><FaCheck className="text-primary text-2xl" /></td>

                        </tr>

                        <tr>

                            <td className="text-gray text-base font-normal leading-[160%] pl-6">Heating floor laying scheme</td>
                            <td><FaCheck className="text-primary text-2xl" /></td>
                            <td><FaCheck className="text-primary text-2xl" /></td>
                            <td><FaCheck className="text-primary text-2xl" /></td>

                        </tr>

                        <tr>

                            <td className="text-gray text-base font-normal leading-[160%] pl-6">Air conditioner zones layout</td>
                            <td><FaCheck className="text-primary text-2xl" /></td>
                            <td><FaCheck className="text-primary text-2xl" /></td>
                            <td><FaCheck className="text-primary text-2xl" /></td>

                        </tr>

                        <tr>

                            <td className="text-gray text-base font-normal leading-[160%] pl-6">3D visualization of all rooms</td>
                            <td className="text-gray text-base font-normal leading-[160%]">simplified</td>
                            <td><FaCheck className="text-primary text-2xl" /></td>
                            <td><FaCheck className="text-primary text-2xl" /></td>

                        </tr>

                        <tr>

                            <td className="text-gray text-base font-normal leading-[160%] pl-6">Visualization of each room (3-4 angles)</td>
                            <td></td>
                            <td></td>
                            <td><FaCheck className="text-primary text-2xl" /></td>

                        </tr>

                        <tr>

                            <td className="text-gray text-base font-normal leading-[160%] pl-6">Terms</td>
                            <td className="text-gray text-base font-normal leading-[160%]">10 days</td>
                            <td className="text-gray text-base font-normal leading-[160%]">20 days</td>
                            <td className="text-gray text-base font-normal leading-[160%]">30 days</td>

                        </tr>

                    </tbody>

                    <tfoot>

                        <tr>

                            <td></td>

                            <td className="pt-8 pb-8">
                                <button className="border border-current rounded md:pt-[13px] md:pb-[13px] md:px-[31px] md:w-auto w-full h-full p-1 font-bold text-sm tracking-wider uppercase text-primary transition-default hover:bg-primary hover:text-white transition-default">send request</button>
                            </td>

                            <td className="pt-8 pb-8">
                                <button className="border border-current rounded md:pt-[13px] md:pb-[13px] md:px-[31px] md:w-auto w-full h-full p-1 font-bold text-sm tracking-wider uppercase text-primary transition-default hover:bg-primary hover:text-white transition-default">send request</button>
                            </td>

                            <td className="pt-8 pb-8">
                                <button className="border border-current rounded md:pt-[13px] md:pb-[13px] md:px-[31px] md:w-auto w-full h-full p-1 font-bold text-sm tracking-wider uppercase text-primary transition-default hover:bg-primary hover:text-white transition-default">send request</button>
                            </td>
                            
                        </tr>

                    </tfoot>

                </table>

            </div>

        </section>
    );
};

export default Table; */

"use client"

import Texts from "./Texts";
import { FaCheck } from "react-icons/fa6";

const Table = () => {
    return (
        <section className="w-full bg-[#F4F5F6] py-10 sm:pt-20 sm:pb-[120px]">
            <div className="container">
                <Texts title="Pricing" description="We offer you three categories of construction." />

                {/* Контейнер для горизонтального скролла на мобильных */}
                <div className="overflow-x-auto -mx-4 sm:-mx-0">
                    <table className="w-full min-w-[600px] h-[743px] bg-light table-fixed md:table-auto border-collapse border border-solid border-[#E5E8ED] rounded text-left shadow-soft-multi">
                        <thead>
                            <tr>
                                <th className="text-ebony text-lg leading-[150%] font-bold pl-4 md:pl-6 text-left">Items</th>

                                <th className="pt-6 pb-4">
                                    <div className="flex flex-col items-center">
                                        <span className="text-ebony text-lg sm:text-2xl font-bold leading-tight sm:leading-[150%]">BASIC</span>
                                        <span className="text-storm text-sm sm:text-lg font-semibold leading-tight sm:leading-[150%]">$20 per m2</span>
                                    </div>
                                </th>

                                <th className="pt-6 pb-4">
                                    <div className="flex flex-col items-center">
                                        <span className="text-ebony text-lg sm:text-2xl font-bold leading-tight sm:leading-[150%]">STANDARD</span>
                                        <span className="text-storm text-sm sm:text-lg font-semibold leading-tight sm:leading-[150%]">$30 per m2</span>
                                    </div>
                                </th>

                                <th className="pt-6 pb-4">
                                    <div className="flex flex-col items-center">
                                        <span className="text-ebony text-lg sm:text-2xl font-bold leading-tight sm:leading-[150%]">BUSINESS</span>
                                        <span className="text-storm text-sm sm:text-lg font-semibold leading-tight sm:leading-[150%]">$40 per m2</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody className="[&>tr:nth-child(odd)]:bg-[#F4F5F6]">
                            {[
                                "Installation plan",
                                "Planning solutions (2-3 options)",
                                "Lighting plan",
                                "Flooring plan",
                                "Heating floor laying scheme",
                                "Air conditioner zones layout",
                            ].map((item, idx) => (
                                <tr key={idx}>
                                    <td className="text-gray text-base font-normal leading-[160%] pl-4 md:pl-6">{item}</td>
                                    <td className="text-center"><FaCheck className="text-primary text-2xl mx-auto" /></td>
                                    <td className="text-center"><FaCheck className="text-primary text-2xl mx-auto" /></td>
                                    <td className="text-center"><FaCheck className="text-primary text-2xl mx-auto" /></td>
                                </tr>
                            ))}

                            <tr>
                                <td className="text-gray text-base font-normal leading-[160%] pl-4 md:pl-6">3D visualization of all rooms</td>
                                <td className="text-center text-gray">simplified</td>
                                <td className="text-center"><FaCheck className="text-primary text-2xl mx-auto" /></td>
                                <td className="text-center"><FaCheck className="text-primary text-2xl mx-auto" /></td>
                            </tr>

                            <tr>
                                <td className="text-gray text-base font-normal leading-[160%] pl-4 md:pl-6">Visualization of each room (3-4 angles)</td>
                                <td></td>
                                <td></td>
                                <td className="text-center"><FaCheck className="text-primary text-2xl mx-auto" /></td>
                            </tr>

                            <tr>
                                <td className="text-gray text-base font-normal leading-[160%] pl-4 md:pl-6">Terms</td>
                                <td className="text-center text-gray">10 days</td>
                                <td className="text-center text-gray">20 days</td>
                                <td className="text-center text-gray">30 days</td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td></td>
                                {["BASIC", "STANDARD", "BUSINESS"].map((_, idx) => (
                                    <td key={idx} className="pt-6 pb-6 text-center">
                                        <button className="border border-current rounded w-full md:w-auto py-3 px-6 font-bold text-sm tracking-wider uppercase text-primary transition-colors hover:bg-primary hover:text-white">
                                            send request
                                        </button>
                                    </td>
                                ))}
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section >
    );
};

export default Table;
