interface PlanColumn {
    key: string; // "basic" | "standard" | "business"
    titleKey: string;
    priceKey: string;
}

interface TableRow {
    labelKey: string;
    values: (boolean | string | null)[];
}

export const PRICING_COLUMNS: PlanColumn[] = [
    { key: "basic", titleKey: "Pricing.basic_title", priceKey: "Pricing.basic_price" },
    { key: "standard", titleKey: "Pricing.standard_title", priceKey: "Pricing.standard_price" },
    { key: "business", titleKey: "Pricing.business_title", priceKey: "Pricing.business_price" },
];

export const PRICING_ROWS: TableRow[] = [
    {
        labelKey: "Pricing.row_design",
        values: [true, true, true],
    },
    {
        labelKey: "Pricing.row_equipment",
        values: [true, true, true],
    },
    {
        labelKey: "Pricing.row_storage",
        values: [true, true, true],
    },
    {
        labelKey: "Pricing.row_pipelines",
        values: [true, true, true],
    },
    {
        labelKey: "Pricing.row_installation",
        values: [true, true, true],
    },
    {
        labelKey: "Pricing.row_safety",
        values: [true, true, true],
    },
    {
        labelKey: "Pricing.row_visualization",
        values: ["Pricing.value_limited", true, true],
    },
    {
        labelKey: "Pricing.row_monitoring",
        values: [null, null, true],
    },
    {
        labelKey: "Pricing.row_terms",
        values: ["Pricing.days_15", "Pricing.days_25", "Pricing.days_35"],
    },
];