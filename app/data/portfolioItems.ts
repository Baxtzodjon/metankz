export interface PortfolioItem {
    id: number;
    titleKey: string;
    descriptionKey: string;
    image: string;
}

export const portfolioItems: PortfolioItem[] = [
    {
        id: 1,
        titleKey: 'stationAstana',
        descriptionKey: 'stationAstanaDesc',
        image: '/images/portfolio_first.jpg',
    },
    {
        id: 2,
        titleKey: 'fleetAlmaty',
        descriptionKey: 'fleetAlmatyDesc',
        image: '/images/portfolio_first.jpg',
    },
    {
        id: 3,
        titleKey: 'maintenanceShymkent',
        descriptionKey: 'maintenanceShymkentDesc',
        image: '/images/portfolio_first.jpg',
    },
    {
        id: 4,
        titleKey: 'ecoTransport',
        descriptionKey: 'ecoTransportDesc',
        image: '/images/portfolio_first.jpg',
    },
    {
        id: 5,
        titleKey: 'clientFleet',
        descriptionKey: 'clientFleetDesc',
        image: '/images/portfolio_first.jpg',
    },
];