"use client"

const ContactsSection = () => {
    return (
        <section className="pt-[80px] pb-[77px] bg-[url('/images/contacts_bg.jpg')] bg-center bg-cover bg-no-repeat bg-ebony">

            <h2 className="absolute w-[1px] h-[1px] -m-[1px] p-0 overflow-hidden border-none [clip:rect(0_0_0_0)]">Contacts</h2>

            <div className="container flex justify-end">

                <form className="bg-light flex flex-col items-start border border-solid border-[#e5e8ed] rounded py-12 px-10 max-w-[495px] contacts_shadow">

                    <h3 className="contacts-form__title">A quick way to discuss details</h3>

                    <label className="form-field form-field--gray contacts-form__field">

                        <span className="form-field__caption">Name*</span>

                        <input type="text" name="name" placeholder="Your name" className="form-field__input" />

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

                    </label>

                    <label className="custom-checkbox contacts-form__checkbox">

                        <input type="checkbox" className="custom-checkbox__input" />

                        <span className="custom-checkbox__text">I agree to receive communications from Createx Construction Bureau.</span>

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