export const workDetailsLabels = {
    object: "Work.detailsLabels.object",
    location: "Work.detailsLabels.location",
    client: "Work.detailsLabels.client",
    purpose: "Work.detailsLabels.purpose",
    specs: "Work.detailsLabels.specs",
    status: "Work.detailsLabels.status",
    year: "Work.detailsLabels.year"
} as const;

export type WorkDetailsValue = typeof workDetailsLabels;