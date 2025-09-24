export interface HeaderLink {
    href: string;
    icon?: string;
    altText?: string;
    label: string;
    telEmail?: string;
}

export const navLinks: HeaderLink[] = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contacts" },
];

export const navContacts: HeaderLink[] = [
    { href: "tel:4055550128", label: "Call us", telEmail: "(405) 555-0128", icon: "/icons/iphone_icon.svg", altText: "Phone Logo" },
    { href: "mailto:hello@createx.com?subject=Platform question&body=Hello, I have a question...", label: "Talk to us", telEmail: "hello@createx.com", icon: "/icons/chat_icon.svg", altText: "Mail Icon" },
];