export function validateKnowForm(data: any) {
    if (!data?.name || typeof data.name !== "string") return false;
    if (!data?.phone || typeof data.phone !== "string") return false;

    return true;
}

export function validateContactForm(data: any) {
    if (!data?.name || typeof data.name !== "string") return false;
    if (!data?.phone || typeof data.phone !== "string") return false;

    if (data.email && typeof data.email !== "string") return false;
    if (data.message && typeof data.message !== "string") return false;

    return true;
}

export function validateContactPageForm(data: any) {
    if (!data?.name || typeof data.name !== "string") return false;
    if (!data?.phone || typeof data.phone !== "string") return false;
    if (!data?.message || typeof data.message !== "string") return false;

    if (!data?.location || typeof data.location !== "string") return false;

    if (
        !data?.preferredContactMethod ||
        !["phone", "email", "whatsapp"].includes(data.preferredContactMethod)
    ) {
        return false;
    }

    if (data.email && typeof data.email !== "string") return false;
    if (data.interest && typeof data.interest !== "string") return false;

    return true;
}
