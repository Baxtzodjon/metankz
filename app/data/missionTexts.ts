export interface MissionItem {
    image: string;
    titleKey: string;
    descriptionKey: string;
}

export const missionTexts: MissionItem[] = [
    {
        image: '/icons/icon_like.svg',
        titleKey: 'quality',
        descriptionKey: 'qualityDesc',
    },
    {
        image: '/icons/icon_hand.svg',
        titleKey: 'safety',
        descriptionKey: 'safetyDesc',
    },
    {
        image: '/icons/icon_slippers.svg',
        titleKey: 'comfort',
        descriptionKey: 'comfortDesc',
    },
];
