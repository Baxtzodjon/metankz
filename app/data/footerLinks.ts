export interface FooterLink {
    titleKey: string;
    links: {
        href: string;
        labelKey: string;
    }[];
}

export const footerLinks: FooterLink[] = [
    {
        titleKey: "Whoweare.title",
        links: [
            { href: "/about", labelKey: "Whoweare.AboutUs" },
            { href: "/available-positions", labelKey: "Whoweare.AvailablePositions" },
            { href: "/contact", labelKey: "Whoweare.Contacts" },
        ],
    },
    {
        titleKey: "OurExperience.title",
        links: [
            { href: "/services", labelKey: "OurExperience.Services" },
            { href: "/work", labelKey: "OurExperience.Work" },
            { href: "/news", labelKey: "OurExperience.News" },
        ],
    },
];