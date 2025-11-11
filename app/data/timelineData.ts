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
        image: "/images/portfolio_first.jpg",
        link: "/services/stations",
    },
    {
        titleKey: "Timeline.equipment.title",
        descriptionKey: "Timeline.equipment.description",
        image: "/images/portfolio_first.jpg",
        link: "/services/equipment",
    },
    {
        titleKey: "Timeline.installation.title",
        descriptionKey: "Timeline.installation.description",
        image: "/images/portfolio_first.jpg",
        link: "/services/installation",
    },
    {
        titleKey: "Timeline.delivery.title",
        descriptionKey: "Timeline.delivery.description",
        image: "/images/portfolio_first.jpg",
        link: "/services/delivery",
    },
];