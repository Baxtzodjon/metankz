export interface ContactInfoItem {
    type: "address" | "phone" | "email";
    labelKey: string;
    value: string;
    href?: string;
}

export const contactInfo: ContactInfoItem[] = [
    {
        type: "address",
        labelKey: "addressLabel",
        value: "addressValue",
    },
    {
        type: "phone",
        labelKey: "phoneLabel",
        value: "+998 55 702-30-13",
        href: "tel:+998557023013",
    },
    {
        type: "email",
        labelKey: "emailLabel",
        value: "hello@createx.com",
        href: "mailto:hello@metankz.com",
    },
];
