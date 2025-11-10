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
        nameKey: "Абзоитов Бекзод",
        roleKey: "Генеральный Директор",
        socials: [
            { platform: "whatsapp", url: "https://wa.me/15551234567" },
            { platform: "telegram", url: "https://t.me/courtneyalex" },
            { platform: "instagram", url: "https://instagram.com/courtneyalex" },
        ],
    },
    {
        image: "/images/portfolio_first.jpg",
        nameKey: "Турдиев Анвар",
        roleKey: "Менеджер Продажи",
        socials: [
            { platform: "whatsapp", url: "https://wa.me/15551234567" },
            { platform: "telegram", url: "https://t.me/courtneyalex" },
            { platform: "instagram", url: "https://instagram.com/courtneyalex" },
        ],
    },
    {
        image: "/images/portfolio_first.jpg",
        nameKey: "Расулов Шерзод",
        roleKey: "Помощник Менеджера",
        socials: [
            { platform: "whatsapp", url: "https://wa.me/15551234567" },
            { platform: "telegram", url: "https://t.me/courtneyalex" },
            { platform: "instagram", url: "https://instagram.com/courtneyalex" },
        ],
    },
    {
        image: "/images/portfolio_first.jpg",
        nameKey: "Исомиддин",
        roleKey: "Главный Инженер",
        socials: [
            { platform: "whatsapp", url: "https://wa.me/15551234567" },
            { platform: "telegram", url: "https://t.me/courtneyalex" },
            { platform: "instagram", url: "https://instagram.com/courtneyalex" },
        ],
    },
    {
        image: "/images/portfolio_first.jpg",
        nameKey: "Yahyoev Azamat",
        roleKey: "Шофер",
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
