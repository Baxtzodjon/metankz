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
        nameKey: "members.bekzod_abzoitov",
        roleKey: "roles.ceo",
        socials: [
            { platform: "whatsapp", url: "https://www.whatsapp.com/" },
            { platform: "telegram", url: "https://telegram.org/" },
            { platform: "instagram", url: "https://www.instagram.com/" },
        ],
    },
    {
        image: "/images/team_member_snd.png",
        nameKey: "members.anvar_turdiev",
        roleKey: "roles.sales_manager",
        socials: [
            { platform: "whatsapp", url: "https://www.whatsapp.com/" },
            { platform: "telegram", url: "https://telegram.org/" },
            { platform: "instagram", url: "https://www.instagram.com/" },
        ],
    },
    {
        image: "/images/team_member_thr.png",
        nameKey: "members.sherzod_rasulov",
        roleKey: "roles.assistant_manager",
        socials: [
            { platform: "whatsapp", url: "https://www.whatsapp.com/" },
            { platform: "telegram", url: "https://telegram.org/" },
            { platform: "instagram", url: "https://www.instagram.com/" },
        ],
    },
    {
        image: "/images/team_member_frt.jpg",
        nameKey: "members.vohobov_isomiddin",
        roleKey: "roles.chief_engineer",
        socials: [
            { platform: "whatsapp", url: "https://www.whatsapp.com/" },
            { platform: "telegram", url: "https://telegram.org/" },
            { platform: "instagram", url: "https://www.instagram.com/" },
        ],
    },
    {
        image: "/images/team_member_fif.png",
        nameKey: "members.azamat_yahyoev",
        roleKey: "roles.driver",
        socials: [
            { platform: "whatsapp", url: "https://www.whatsapp.com/" },
            { platform: "telegram", url: "https://telegram.org/" },
            { platform: "instagram", url: "https://www.instagram.com/" },
        ],
    },
    {
        image: "/images/team_member_sth.png",
        nameKey: "members.ulugbek_sharipov",
        roleKey: "roles.technician",
        socials: [
            { platform: "whatsapp", url: "https://www.whatsapp.com/" },
            { platform: "telegram", url: "https://telegram.org/" },
            { platform: "instagram", url: "https://www.instagram.com/" },
        ],
    },
    {
        image: "/images/team_member_svt.png",
        nameKey: "members.azizbek_karimov",
        roleKey: "roles.station_operator",
        socials: [
            { platform: "whatsapp", url: "https://www.whatsapp.com/" },
            { platform: "telegram", url: "https://telegram.org/" },
            { platform: "instagram", url: "https://www.instagram.com/" },
        ],
    },
    {
        image: "/images/team_member_eih.png",
        nameKey: "members.bekzod_tursunov",
        roleKey: "roles.lead_engineer",
        socials: [
            { platform: "whatsapp", url: "https://www.whatsapp.com/" },
            { platform: "telegram", url: "https://telegram.org/" },
            { platform: "instagram", url: "https://www.instagram.com/" },
        ],
    },
];
