import { SocialLink } from "../containers/TeamSocialLinks";

export interface TeamMember {
    image: string;
    nameKey: string;
    roleKey: string;
    socials: SocialLink[];
}

export const teamMembers: TeamMember[] = [
    {
        image: "/images/portfolio_first.jpg",
        nameKey: "Courtney Alexander",
        roleKey: "CEO, Co-Founder",
        socials: [
            { platform: "whatsapp", url: "https://wa.me/15551234567" },
            { platform: "telegram", url: "https://t.me/courtneyalex" },
            { platform: "instagram", url: "https://instagram.com/courtneyalex" },
        ],
    },
    {
        image: "/images/portfolio_first.jpg",
        nameKey: "Calvin Fox",
        roleKey: "CTO, Co-Founder",
        socials: [
            { platform: "whatsapp", url: "https://wa.me/15551234567" },
            { platform: "telegram", url: "https://t.me/courtneyalex" },
            { platform: "instagram", url: "https://instagram.com/courtneyalex" },
        ],
    },
    {
        image: "/images/portfolio_first.jpg",
        nameKey: "Johnny Lane",
        roleKey: "Commercial Manager",
        socials: [
            { platform: "whatsapp", url: "https://wa.me/15551234567" },
            { platform: "telegram", url: "https://t.me/courtneyalex" },
            { platform: "instagram", url: "https://instagram.com/courtneyalex" },
        ],
    },
    {
        image: "/images/portfolio_first.jpg",
        nameKey: "Diane Mccoy",
        roleKey: "Director of Human Resources",
        socials: [
            { platform: "whatsapp", url: "https://wa.me/15551234567" },
            { platform: "telegram", url: "https://t.me/courtneyalex" },
            { platform: "instagram", url: "https://instagram.com/courtneyalex" },
        ],
    },
    {
        image: "/images/portfolio_first.jpg",
        nameKey: "Judith Warren",
        roleKey: "Lead Accountant",
        socials: [
            { platform: "whatsapp", url: "https://wa.me/15551234567" },
            { platform: "telegram", url: "https://t.me/courtneyalex" },
            { platform: "instagram", url: "https://instagram.com/courtneyalex" },
        ],
    },
    {
        image: "/images/portfolio_first.jpg",
        nameKey: "Floyd Simmmons",
        roleKey: "Finacial Director",
        socials: [
            { platform: "whatsapp", url: "https://wa.me/15551234567" },
            { platform: "telegram", url: "https://t.me/courtneyalex" },
            { platform: "instagram", url: "https://instagram.com/courtneyalex" },
        ],
    },
    {
        image: "/images/portfolio_first.jpg",
        nameKey: "Serenity Edwards",
        roleKey: "Director of Marketing",
        socials: [
            { platform: "whatsapp", url: "https://wa.me/15551234567" },
            { platform: "telegram", url: "https://t.me/courtneyalex" },
            { platform: "instagram", url: "https://instagram.com/courtneyalex" },
        ],
    },
    {
        image: "/images/portfolio_first.jpg",
        nameKey: "Shawn Edwards",
        roleKey: "Tech Lead",
        socials: [
            { platform: "whatsapp", url: "https://wa.me/15551234568" },
            { platform: "telegram", url: "https://t.me/courtneyalex" },
            { platform: "instagram", url: "https://instagram.com/courtneyalex" },
        ],
    },
];
