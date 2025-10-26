// /data/facts.ts
interface FactItem {
    percent?: number;
    full?: number;
    value: number | string;
    textKey: string;      // ключ перевода
    progressStroke: string;
    targetValue: number;
}

export const factsData: FactItem[] = [
    {
        percent: 57,
        value: '57%',
        textKey: 'facts.totalClients',
        targetValue: 57,
        progressStroke: '#f89828',
    },
    {
        full: 50,
        value: 35,
        textKey: 'facts.yearsExperience',
        targetValue: 35,
        progressStroke: '#f52f6e',
    },
    // … и т.д.
];
