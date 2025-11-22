export interface SuggestItem {
    id: number;
    titleKey: string;
    contentKey: string;
}

export interface SuggestData {
    [key: string]: SuggestItem[];
}

export const suggestData: SuggestData = {
    stations: [
        {
            id: 1,
            titleKey: "Suggest.stations.1_title",
            contentKey: "Suggest.stations.1_desc"
        },
        {
            id: 2,
            titleKey: "Suggest.stations.2_title",
            contentKey: "Suggest.stations.2_desc"
        },
        {
            id: 3,
            titleKey: "Suggest.stations.3_title",
            contentKey: "Suggest.stations.3_desc"
        }
    ],

    equipment: [
        {
            id: 1,
            titleKey: "Suggest.equipment.1_title",
            contentKey: "Suggest.equipment.1_desc"
        },
        {
            id: 2,
            titleKey: "Suggest.equipment.2_title",
            contentKey: "Suggest.equipment.2_desc"
        },
        {
            id: 3,
            titleKey: "Suggest.equipment.3_title",
            contentKey: "Suggest.equipment.3_desc"
        }
    ],

    installation: [
        {
            id: 1,
            titleKey: "Suggest.installation.1_title",
            contentKey: "Suggest.installation.1_desc"
        },
        {
            id: 2,
            titleKey: "Suggest.installation.2_title",
            contentKey: "Suggest.installation.2_desc"
        },
        {
            id: 3,
            titleKey: "Suggest.installation.3_title",
            contentKey: "Suggest.installation.3_desc"
        }
    ],

    delivery: [
        {
            id: 1,
            titleKey: "Suggest.delivery.1_title",
            contentKey: "Suggest.delivery.1_desc"
        },
        {
            id: 2,
            titleKey: "Suggest.delivery.2_title",
            contentKey: "Suggest.delivery.2_desc"
        },
        {
            id: 3,
            titleKey: "Suggest.delivery.3_title",
            contentKey: "Suggest.delivery.3_desc"
        }
    ]
};