"use client"

import { useTranslations } from "next-intl";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { toast } from "sonner";

export interface SocialLink {
  platform: "whatsapp" | "telegram" | "instagram";
  url: string;
}

interface Props {
  links: SocialLink[];
}

const iconMap = {
  whatsapp: FaWhatsapp,
  telegram: FaTelegramPlane,
  instagram: FaInstagram,
};

const TeamSocialLinks = ({ links }: Props) => {
  const t = useTranslations("UnavailableSocials");

  const handleClick = () => {
    toast.info(t("unavailableTitle"), {
      description:
        t("unavailableDescription"),
    });
  };

  return (
    <div className="absolute bottom-0 left-0 bg-primary/70 w-full h-[60px] rounded-b flex items-center justify-center gap-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" onClick={handleClick}>

      {links.map((link, index) => {
        const Icon = iconMap[link.platform];

        return (
          <Icon key={index} className="text-light text-xl opacity-80 hover:scale-110 transition-transform duration-300" />
        );

      })}

    </div>
  );
};

export default TeamSocialLinks;
