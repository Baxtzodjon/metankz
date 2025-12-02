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
    { href: "tel:+998557023013", labelKey: "call", telEmail: "+998 55 702-30-13", icon: "/icons/iphone_icon.svg", altText: "Phone Logo" },
    { href: "mailto:hello@metankz.com", labelKey: "talk", telEmail: "hello@createx.com", icon: "/icons/chat_icon.svg", altText: "Mail Icon" },
];
