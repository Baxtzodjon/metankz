import {
    FiCheckCircle,
    FiDollarSign,
    FiHeadphones,
} from "react-icons/fi";

export interface OurBenefitsItem {
    icon: React.ComponentType<{ size?: number; color?: string }>;
    titleKey: string;
    descriptionKey: string;
}

export const ourBenefitsTexts: OurBenefitsItem[] = [
    {
        icon: FiCheckCircle,
        titleKey: "OurBenefits.stable_supply_title",
        descriptionKey: "OurBenefits.stable_supply_desc"
    },
    {
        icon: FiDollarSign,
        titleKey: "OurBenefits.best_price_title",
        descriptionKey: "OurBenefits.best_price_desc"
    },
    {
        icon: FiHeadphones,
        titleKey: "OurBenefits.support_title",
        descriptionKey: "OurBenefits.support_desc"
    },
];
