export interface LocationItem {
    titleKey: string;
    addressKey: string;
    mapLink: string;
}

export const locations: LocationItem[] = [
    {
        titleKey: "Contact.locations.samarkand_title",
        addressKey: "Contact.locations.samarkand_address",
        mapLink: "https://maps.app.goo.gl/svrbdXjDuudeRpSd6"
    },
    {
        titleKey: "Contact.locations.dossor_title",
        addressKey: "Contact.locations.dossor_address",
        mapLink: "https://goo.gl/maps/8zQrYkaWyRyySHfc9"
    },
    {
        titleKey: "Contact.locations.almaty_title",
        addressKey: "Contact.locations.almaty_address",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Raiymbek+Avenue+212,+Almaty,+Kazakhstan"
    }
];
