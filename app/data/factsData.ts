export interface FactItem {
    percent?: number;
    full?: number;
    value: number | string;
    textKey: string;
    progressStroke: string;
    targetValue: number;
}

export const factsData: FactItem[] = [
    {
        percent: 57,
        value: '57%',
        textKey: 'Facts.clients',
        targetValue: 57,
        progressStroke: '#f89828'
    },
    {
        full: 50,
        value: 35,
        textKey: 'Facts.experience',
        targetValue: 35,
        progressStroke: '#f52f6e'
    },
    {
        full: 10000,
        value: 9452,
        textKey: 'Facts.hours',
        targetValue: 9452,
        progressStroke: '#5a87fc'
    },
    {
        percent: 100,
        value: '100%',
        textKey: 'Facts.projects',
        targetValue: 100,
        progressStroke: '#03cea4'
    },
];