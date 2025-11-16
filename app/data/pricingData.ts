interface PlanColumn {
    key: string; // "basic" | "standard" | "business"
    title: string;
    price: string;
}

interface TableRow {
    label: string;
    values: (boolean | string | null)[];
}

export const PRICING_COLUMNS: PlanColumn[] = [
    { key: "basic", title: "BASIC", price: "$20 per m2" },
    { key: "standard", title: "STANDARD", price: "$30 per m2" },
    { key: "business", title: "BUSINESS", price: "$40 per m2" },
];

export const PRICING_ROWS: TableRow[] = [
    {
        label: "Installation plan",
        values: [true, true, true],
    },
    {
        label: "Planning solutions (2-3 options)",
        values: [true, true, true],
    },
    {
        label: "Lighting plan",
        values: [true, true, true],
    },
    {
        label: "Flooring plan",
        values: [true, true, true],
    },
    {
        label: "Heating floor laying scheme",
        values: [true, true, true],
    },
    {
        label: "Air conditioner zones layout",
        values: [true, true, true],
    },
    {
        label: "3D visualization of all rooms",
        values: ["simplified", true, true],
    },
    {
        label: "Visualization of each room (3-4 angles)",
        values: [null, null, true],
    },
    {
        label: "Terms",
        values: ["10 days", "20 days", "30 days"],
    },
];