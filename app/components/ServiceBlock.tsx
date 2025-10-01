"use client"

import Texts from "./Texts";

const ServiceBlock = () => {
    return (
        <section className="services-section">

            <div className="container flex items-center justify-center flex-col gap-15">

                <div className="flex items-center justify-center flex-col gap-6">

                    <Texts title="Our services" description="Createx Construction Bureau is&nbsp;a&nbsp;construction giant with a&nbsp;full range of&nbsp;construction services." />

                </div>

                {/* <ul className="flex items-center justify-center gap-7.5">

                    <li className="">

                        <a href="#" className="">

                            <div
                                className="w-[285px] h-[285px] bg-white rounded-sm border border-solid border-[#E5E8ED] flex items-center justify-center flex-col gap-6 shadow-soft-multi text-[#1E212C] hover:text-white hover:bg-[rgba(30,33,44,0.6)]">

                                <img src="/icons/icon_construction.svg" alt="Icon Construction" aria-hidden="true" />

                                    <h3 className="text-[20px] font-bold">Construction</h3>

                            </div>

                        </a>

                    </li>

                    <li className="">

                        <a href="#" className="">

                            <div className="w-[285px] h-[285px] bg-white rounded-sm border border-solid border-[#E5E8ED] flex items-center justify-center flex-col gap-6 shadow-soft-multi text-[#1E212C] hover:text-white hover:bg-[rgba(30,33,44,0.6)]">

                                <img src="/icons/icon_plan.svg" alt="Icon Plan" aria-hidden="true" />

                                    <h3 className="text-[20px] font-bold">Project Development</h3>

                            </div>

                        </a>

                    </li>

                    <li className="">

                        <a href="#" className="">

                            <div className="w-[285px] h-[285px] bg-white rounded-sm border border-solid border-[#E5E8ED] flex items-center justify-center flex-col gap-6 shadow-soft-multi text-[#1E212C] hover:text-white hover:bg-[rgba(30,33,44,0.6)]">

                                <img src="/icons/icon_painting.svg" alt="Icon Painting" aria-hidden="true" />

                                    <h3 className="text-[20px] font-bold">Interior Design</h3>

                            </div>

                        </a>

                    </li>

                    <li className="">

                        <a href="#" className="">

                            <div className="w-[285px] h-[285px] bg-white rounded-sm border border-solid border-[#E5E8ED] flex items-center justify-center flex-col gap-6 shadow-soft-multi text-[#1E212C] hover:text-white hover:bg-[rgba(30,33,44,0.6)]">

                                <img src="/icons/icon_painting.svg" alt="Icon Painting" aria-hidden="true" />

                                    <h3 className="text-[20px] font-bold">Repairs</h3>

                            </div>

                        </a>

                    </li>

                </ul> */}

                <div className="flex items-center justify-center gap-10">

                    <h4 className="text-[#1E212C] text-[28px] font-bold">Learn more about our services</h4>

                    <a href="#" className="py-[15px] px-[39px] bg-[#FF5A30] rounded-sm text-white text-sm font-bold uppercase hover:bg-[#fc3300] transition duration-300 ease-in-out cursor-pointer">View services</a>

                </div>

            </div>

        </section>
    );
};

export default ServiceBlock;