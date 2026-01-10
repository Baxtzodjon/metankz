import { FaGasPump, FaTools, FaWrench, FaTruck } from "react-icons/fa";
import { IconType } from "react-icons";

export interface ServicesItem {
    icon: IconType;
    titleKey: string;
    bgImage: string;
    link: string;
}

export const services: ServicesItem[] = [
    {
        icon: FaGasPump, // "/icons/icon_construction.svg"
        titleKey: "Timeline.stations.title", // stations
        bgImage: '/images/methane_stations.png',
        link: "/services/stations",
    },
    {
        icon: FaTools, // "/icons/icon_plan.svg"
        titleKey: "Timeline.equipment.title", // conversion
        bgImage: '/images/gas_equipment.png',
        link: "/services/equipment",
    },
    {
        icon: FaWrench, // "/icons/icon_painting.svg"
        titleKey: "Timeline.installation.title", // service
        bgImage: '/images/installation_and_service.png',
        link: "/services/installation",
    },
    {
        icon: FaTruck, // "/icons/icon_painting.svg"
        titleKey: "Timeline.delivery.title", // energy
        bgImage: '/images/methane_delivery.png',
        link: "/services/delivery",
    },
];