export interface HeaderLink {
    href: string;
    labelKey: string; 
    icon?: string;
    altText?: string;
    telEmail?: string;
}

export const navLinks: HeaderLink[] = [
    { href: "/", labelKey: "home" },
    { href: "/about", labelKey: "about" },
    { href: "/services", labelKey: "services" },
    { href: "/work", labelKey: "work" },
    { href: "/news", labelKey: "news" },
    { href: "/contact", labelKey: "contact" },
];

export const navContacts: HeaderLink[] = [
    { href: "tel:4055550128", labelKey: "call", telEmail: "(405) 555-0128", icon: "/icons/iphone_icon.svg", altText: "Phone Logo" },
    { href: "mailto:hello@metankz.com", labelKey: "talk", telEmail: "hello@createx.com", icon: "/icons/chat_icon.svg", altText: "Mail Icon" },
];
