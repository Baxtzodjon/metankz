import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";

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
  return (
    <div className="absolute bottom-0 left-0 bg-primary/70 w-full h-[60px] rounded-b flex items-center justify-center gap-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">

      {links.map((link, index) => {
        const Icon = iconMap[link.platform];

        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >

            <Icon className="text-light text-xl" />

          </a>
        );

      })}

    </div>
  );
};

export default TeamSocialLinks;
