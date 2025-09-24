export interface FooterLink {
    title: string;
    links: {
        href: string;
        label: string;
    }[];
}

export const footerLinks: FooterLink[] = [
    {
        title: "Who we are",
        links: [
            { href: "/about", label: "About Us" },
            { href: "/available-positions", label: "Available Positions" },
            { href: "/contacts", label: "Contacts" },
        ],
    },
    {
        title: "Our Experience",
        links: [
            { href: "/services", label: "Services" },
            { href: "/work", label: "Work" },
            { href: "/news", label: "News" },
        ],
    },
];