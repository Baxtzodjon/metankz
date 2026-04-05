import { SocialLink } from "../containers/TeamSocialLinks";

export interface TeamMember {
    image: string;
    nameKey: string;
    roleKey: string;
    socials: SocialLink[];
}

export const teamMembers: TeamMember[] = [
    {
        image: "/images/team_member_fst.png",
        nameKey: "Абзоитов Бекзод",
        roleKey: "Генеральный Директор",
        socials: [
            { platform: "whatsapp", url: "https://www.whatsapp.com/" },
            { platform: "telegram", url: "https://telegram.org/" },
            { platform: "instagram", url: "https://www.instagram.com/" },
        ],
    },
    {
        image: "/images/team_member_snd.png",
        nameKey: "Турдиев Анвар",
        roleKey: "Менеджер Продажи",
        socials: [
            { platform: "whatsapp", url: "https://www.whatsapp.com/" },
            { platform: "telegram", url: "https://telegram.org/" },
            { platform: "instagram", url: "https://www.instagram.com/" },
        ],
    },
    {
        image: "/images/team_member_thr.png",
        nameKey: "Расулов Шерзод",
        roleKey: "Помощник Менеджера",
        socials: [
            { platform: "whatsapp", url: "https://www.whatsapp.com/" },
            { platform: "telegram", url: "https://telegram.org/" },
            { platform: "instagram", url: "https://www.instagram.com/" },
        ],
    },
    {
        image: "/images/team_member_frt.jpg",
        nameKey: "Исомиддин Вохобов",
        roleKey: "Главный Инженер",
        socials: [
            { platform: "whatsapp", url: "https://www.whatsapp.com/" },
            { platform: "telegram", url: "https://telegram.org/" },
            { platform: "instagram", url: "https://www.instagram.com/" },
        ],
    },
    {
        image: "/images/team_member_fif.png",
        nameKey: "Yahyoev Azamat",
        roleKey: "Шофер",
        socials: [
            { platform: "whatsapp", url: "https://www.whatsapp.com/" },
            { platform: "telegram", url: "https://telegram.org/" },
            { platform: "instagram", url: "https://www.instagram.com/" },
        ],
    },
    {
        image: "/images/team_member_sth.png",
        nameKey: "Sharipov Ulug'bek",
        roleKey: "Техник",
        socials: [
            { platform: "whatsapp", url: "https://www.whatsapp.com/" },
            { platform: "telegram", url: "https://telegram.org/" },
            { platform: "instagram", url: "https://www.instagram.com/" },
        ],
    },
    {
        image: "/images/team_member_svt.png",
        nameKey: "Karimov Azizbek",
        roleKey: "Оператор Станции",
        socials: [
            { platform: "whatsapp", url: "https://www.whatsapp.com/" },
            { platform: "telegram", url: "https://telegram.org/" },
            { platform: "instagram", url: "https://www.instagram.com/" },
        ],
    },
    {
        image: "/images/team_member_eih.png",
        nameKey: "Bekzod Tursunov",
        roleKey: "Ведущий Инженер",
        socials: [
            { platform: "whatsapp", url: "https://www.whatsapp.com/" },
            { platform: "telegram", url: "https://telegram.org/" },
            { platform: "instagram", url: "https://www.instagram.com/" },
        ],
    },
];
