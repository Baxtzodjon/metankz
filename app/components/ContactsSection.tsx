"use client"

const formFields = [
    {
        label: 'Name*',
        name: 'name',
        type: 'text',
        placeholder: 'Your name',
        required: true,
    },
    {
        label: 'Phone*',
        name: 'phone',
        type: 'tel',
        placeholder: 'Your phone number',
        required: true,
    },
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        placeholder: 'Your working email',
        required: false,
    },
    {
        label: 'Message*',
        name: 'message',
        type: 'textarea',
        placeholder: 'Your message',
        required: true,
    },
];

const ContactsSection = () => {
    return (
        <section className="pt-[80px] pb-[77px] bg-[url('/images/contacts_bg.jpg')] bg-center bg-cover bg-no-repeat bg-ebony">

            <h2 className="absolute w-[1px] h-[1px] -m-[1px] p-0 overflow-hidden border-none [clip:rect(0_0_0_0)]">Contacts</h2>

            <div className="container flex justify-end">

                <form className="bg-light flex flex-col items-start border border-solid border-[#e5e8ed] rounded p-[15px] sm:py-12 sm:px-10 max-w-[495px] contacts_shadow">

                    <h3 className="mb-6 w-full text-[28px] leading-[150%] font-bold text-center text-ebony">A quick way to discuss details</h3>

                    {formFields.map((field, idx) => (

                        <label key={idx} className="flex flex-col items-start w-full mb-5">

                            <span className="mb-2 text-gray-600 text-sm leading-[150%]">{field.label}</span>

                            {field.type === 'textarea' ? (
                                <textarea
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    className="bg-athens border border-[#d7dadd] rounded pt-[10px] pl-[15px] w-full h-[66px] outline-none focus:outline-2 focus:outline-primary focus:outline-offset-2 text-sm leading-[150%] font-normal resize-none"
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    className="bg-athens border border-[#d7dadd] rounded pl-[15px] w-full h-11 outline-none focus:outline-2 focus:outline-primary focus:outline-offset-2 text-sm leading-[150%] font-normal"
                                />
                            )}

                        </label>
                    ))}

                    <label className="mb-[22px] focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-1">

                        <input type="checkbox" className="peer absolute opacity-0" />

                        <span className="relative inline-block pl-[27px] text-gray text-sm leading-[150%] before:content-[''] before:absolute before:-left-[1px] before:top-[1px] before:inline-block before:border before:border-primary before:rounded-[3px] before:w-4 before:h-4 before:transition-default peer-checked:before:bg-primary after:content-[''] after:absolute after:-left-[1px] after:top-[1px] after:w-4 after:h-4 after:bg-[url('/icons/check.svg')] after:bg-center after:bg-[length:10px_8px] after:bg-no-repeat after:opacity-0 after:transition-default peer-checked:after:opacity-100">I agree to receive communications from Createx Construction Bureau.</span>

                    </label>

                    <div className="w-full text-center">

                        <button className="py-[12px] px-[31px] bg-primary rounded text-light text-sm leading-5 tracking-wider font-bold uppercase hover:bg-active transition-default" type="submit">Send Request</button>

                    </div>

                </form>

            </div>

        </section>
    );
};

export default ContactsSection;