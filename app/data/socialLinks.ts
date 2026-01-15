import {
    FaWhatsapp,
    FaTelegramPlane,
    FaFacebookF,
    FaInstagram,
    FaTiktok,
} from "react-icons/fa";
import { IconType } from "react-icons";

export interface SocialLink {
    href: string;
    icon: IconType;
    label: string;
}

export const socialLinks: SocialLink[] = [
    {
        href: "https://wa.me/998970000110",
        icon: FaWhatsapp,
        label: "WhatsApp",
    },
    {
        href: "https://t.me/metanuzgroup",
        icon: FaTelegramPlane,
        label: "Telegram",
    },
    {
        href: "https://www.facebook.com/anvar.turdiev.54",
        icon: FaFacebookF,
        label: "Facebook",
    },
    {
        href: "https://www.instagram.com/metanuz?igsh=ZXowdW9iMWQ2eWQ2",
        icon: FaInstagram,
        label: "Instagram",
    },
    {
        href: "https://www.tiktok.com/@metankz",
        icon: FaTiktok,
        label: "TikTok",
    },
];
