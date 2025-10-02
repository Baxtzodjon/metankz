"use client"

const formFields = [
    { label: 'Name', type: 'text', placeholder: 'Your name' },
    { label: 'Phone', type: 'tel', placeholder: 'Your phone' },
    { label: 'Message', type: 'text', placeholder: 'Your message' },
];

const KnowForm = () => {
    return (
        <form action="#" className="relative top-[235px] sm:top-[330px] lg:top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-between flex-col gap-8 bg-light shadow-soft-multi_sec w-full px-[15px] py-[10px] sm:py-12 sm:px-[60px]">

            <h2 className="text-ebony text-[28px] leading-[150%] font-bold text-center">Want to know more? Ask us a question:</h2>

            {/* <div className="flex items-end flex-wrap gap-6">

                {formFields.map((field, index) => {
                    const inputWidthClass = index === 2 ? 'w-full xl:w-[414px]' : 'w-full lg:w-[260px]';

                    return (
                        <label className="flex flex-col" key={index}>

                            <span className="text-gray text-sm leading-[150%] font-normal mb-2">{field.label}</span>

                            <input
                                className={`${inputWidthClass} h-[44px] bg-[#F4F5F6] border border-solid border-[#d7dadd] rounded pl-[15px] outline-none focus:outline-2 focus:outline-solid focus:outline-primary focus:outline-offset-2 text-sm leading-[150%] font-normal`}
                                type={field.type}
                                placeholder={field.placeholder}
                            />

                        </label>
                    );
                })}

                <button className="w-[49%] py-[11px] lg:px-[29px] bg-primary rounded text-light text-sm font-bold uppercase hover:bg-active transition-default cursor-pointer" type="submit">Send</button>

            </div> */}

            <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-6">
                
                {formFields.map((field, index) => {
                    let wrapperClass = 'w-full';

                    if (index === 0 || index === 1) {
                        wrapperClass = 'w-full sm:w-fit md:w-[48%] lg:w-[260px]';
                    } else if (index === 2) {
                        wrapperClass = 'w-full sm:w-fit md:w-[48%] lg:w-[260px] xl:w-[414px]';
                    }

                    return (
                        <label key={index} className={`flex flex-col ${wrapperClass}`}>
                            <span className="text-gray text-sm leading-[150%] font-normal mb-2">
                                {field.label}
                            </span>
                            <input
                                type={field.type}
                                placeholder={field.placeholder}
                                className="w-full h-[44px] bg-[#F4F5F6] border border-[#d7dadd] rounded pl-[15px] outline-none focus:outline-2 focus:outline-primary focus:outline-offset-2 text-sm leading-[150%] font-normal"
                            />
                        </label>
                    );
                })}
                
                <button
                    type="submit"
                    className="w-full h-[44px] sm:w-[205px] md:w-[48%] lg:w-[104px] bg-primary rounded text-light text-sm font-bold uppercase hover:bg-active transition-default m-0 sm:mt-7 cursor-pointer" /* lg:py-[11px] lg:px-[29px] */
                >
                    Send
                </button>

            </div>

        </form>
    );
};

export default KnowForm;