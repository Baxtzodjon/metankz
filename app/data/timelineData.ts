export interface TimelineItems {
    titleKey: string;
    descriptionKey: string;
    image: string;
    link: string;
}

export const timelineData: TimelineItems[] = [
    {
        titleKey: "Timeline.stations.title",
        descriptionKey: "Timeline.stations.description",
        image: "/images/methane_stations_image.jpg",
        link: "/services/stations",
    },
    {
        titleKey: "Timeline.equipment.title",
        descriptionKey: "Timeline.equipment.description",
        image: "/images/gas_equipment_image.jpg",
        link: "/services/equipment",
    },
    {
        titleKey: "Timeline.installation.title",
        descriptionKey: "Timeline.installation.description",
        image: "/images/installation_and_service_image.jpg",
        link: "/services/installation",
    },
    {
        titleKey: "Timeline.delivery.title",
        descriptionKey: "Timeline.delivery.description",
        image: "/images/methane_delivery_image.jpg",
        link: "/services/delivery",
    },
];