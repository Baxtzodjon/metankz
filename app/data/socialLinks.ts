import {
    FaWhatsapp,
    FaTelegramPlane,
    FaFacebookF,
    FaInstagram,
    FaTiktok,
} from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { IconType } from "react-icons";

export interface SocialLink {
    href: string;
    icon: IconType;
    label: string;
}

export const socialLinks: SocialLink[] = [
    {
        href: "https://whatsapp.com",
        icon: FaWhatsapp,
        label: "WhatsApp",
    },
    {
        href: "https://t.me/metanuzgroup",
        icon: FaTelegramPlane,
        label: "Telegram",
    },
    {
        href: "https://facebook.com",
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
