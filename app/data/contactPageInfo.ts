export interface ContactPageInfoItem {
    type: "schedule" | "phone" | "email";
    labelKey: string;
    valueKey: string;
    href?: string;
}

export const contactPageInfo: ContactPageInfoItem[] = [
    {
        type: "phone",
        labelKey: "Contact.contact.phone_label",
        valueKey: "Contact.contact.phone_value",
        href: "tel:+998557023013",
    },
    {
        type: "email",
        labelKey: "Contact.contact.email_label",
        valueKey: "Contact.contact.email_value",
        href: "mailto:hello@metankz.com",
    },
    {
        type: "schedule",
        labelKey: "Contact.contact.schedule_label",
        valueKey: "Contact.contact.schedule_24_7",
    },
];
