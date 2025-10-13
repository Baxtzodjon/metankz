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

                <form className="bg-light flex flex-col items-start border border-solid border-[#e5e8ed] rounded py-12 px-10 max-w-[495px] contacts_shadow">

                    <h3 className="mb-6 w-full text-[28px] leading-[150%] font-bold text-center text-ebony">A quick way to discuss details</h3>

                    {/* <label className="flex flex-col items-start w-full mb-[21px]">

                        <span className="mb-[7px] text-gray text-sm leading-[150%]">Name*</span>

                        <input type="text" name="name" placeholder="Your name" className="bg-athens border border-[#d7dadd] rounded pl-[15px] w-full h-[44px] outline-none focus:outline-2 focus:outline-primary focus:outline-offset-2 text-sm leading-[150%] font-normal" />

                    </label>

                    <label className="form-field form-field--gray contacts-form__field">

                        <span className="form-field__caption">Phone*</span>

                        <input type="tel" name="phone" placeholder="Your phone number" className="form-field__input" />

                    </label>

                    <label className="form-field form-field--gray contacts-form__field">

                        <span className="form-field__caption">Email</span>

                        <input type="email" name="email" placeholder="Your working email" className="form-field__input" />

                    </label>

                    <label className="form-field form-field--gray contacts-form__field">

                        <span className="form-field__caption">Message*</span>

                        <textarea name="message" placeholder="Your message" className="form-field__input form-field__input--big"></textarea>

                    </label> */}

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

                    {/* <label className="mb-[22px]">

                        <input type="checkbox" className="absolute opacity-0" />

                        <span className="relative inline-block pl-[27px] text-gray text-sm leading-[150%] before:content-[''] before:absolute before:-left-[1px] before:top-[1px] before:inline-block before:border before:border-primary before:rounded-[3px] before:w-4 before:h-4 before:transition-default after:content-[''] after:absolute after:-left-[1px] after:top-[1px] after:w-4 after:h-4 after:bg-['/icons/check.svg'] after:bg-center after:bg-[length:10px_8px] after:bg-no-repeat after:opacity-0 after:transition-default">I agree to receive communications from Createx Construction Bureau.</span>

                    </label> */}

                    <label className="relative flex items-start cursor-pointer select-none text-sm text-gray-700 leading-[150%]">

                        <input
                            type="checkbox"
                            className="peer hidden"
                        />

                        <span
                            className="
                                pl-[27px] relative

                                before:content-[''] before:absolute before:left-0 before:top-[2px]
                                before:w-4 before:h-4 before:border before:rounded-[3px]
                                before:border-gray-400 before:bg-white

                                peer-checked:before:bg-red-500 peer-checked:before:border-red-500

                                after:content-[''] after:absolute after:left-0 after:top-[2px]
                                after:w-4 after:h-4 after:bg-[url('/icons/check.svg')]
                                after:bg-no-repeat after:bg-center after:bg-[length:10px_8px]
                                after:opacity-0 peer-checked:after:opacity-100
                            "
                        >
                            I agree to receive communications from Createx Construction Bureau.
                        </span>
                        
                    </label>


                    <div className="centered">

                        <button className="contacts-form__btn btn btn--fill" type="submit">Send Request</button>

                    </div>

                </form>

            </div>

        </section>
    );
};

export default ContactsSection;