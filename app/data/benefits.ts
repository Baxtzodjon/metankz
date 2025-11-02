import { FaRegThumbsUp } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";
import { LiaToolsSolid } from "react-icons/lia";
import { IoCarOutline } from "react-icons/io5";

export interface BenefitsItem {
    icon: React.ElementType;
    number: string;
    titleKey: string;
}

export const benefits: BenefitsItem[] = [
    {
        icon: FaRegThumbsUp,
        number: "65%",
        titleKey: "Клиентов по рекомендации",
    },
    {
        icon: IoCarOutline,
        number: "15 000+",
        titleKey: "Заправлено автомобилей",
    },
    {
        icon: LuLeaf,
        number: "1 200 т",
        titleKey: "Экономия CO₂",
    },
    {
        icon: LiaToolsSolid,
        number: "24/7",
        titleKey: "Техническая поддержка",
    },
];
