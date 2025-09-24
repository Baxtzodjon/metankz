import {
    FaWhatsapp,
    FaFacebookMessenger,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

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
        href: "https://facebookmessenger.com",
        icon: FaFacebookMessenger,
        label: "Facebook Messenger",
    },
    {
        href: "https://facebook.com",
        icon: FaFacebookF,
        label: "Facebook",
    },
    {
        href: "https://twitter.com",
        icon: FaTwitter,
        label: "Twitter",
    },
    {
        href: "https://youtube.com",
        icon: FaYoutube,
        label: "YouTube",
    },
];
