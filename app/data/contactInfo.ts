export interface ContactInfoItem {
    type: "address" | "phone" | "email";
    label: string;
    value: string;
    href?: string;
}

export const contactInfo: ContactInfoItem[] = [
    {
        type: "address",
        label: "Address:",
        value: "8502 Preston Rd. Inglewood, New York",
    },
    {
        type: "phone",
        label: "Call:",
        value: "(405) 555-0128",
        href: "tel:4055550128",
    },
    {
        type: "email",
        label: "Email:",
        value: "hello@createx.com",
        href: "mailto:hello@createx.com?subject=Platform question&body=Hello, I have a question...",
    },
];
