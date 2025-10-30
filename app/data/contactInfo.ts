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
        value: "(405) 555-0128",
        href: "tel:4055550128",
    },
    {
        type: "email",
        labelKey: "emailLabel",
        value: "hello@createx.com",
        href: "mailto:hello@metankz.com",
    },
];
