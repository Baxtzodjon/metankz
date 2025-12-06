export interface Testimonial {
    id: number;
    authorKey: string;
    positionKey: string;
    textKey: string;
    image: string;
}

export const slidesTestimonials: Testimonial[] = [
    {
        id: 0,
        authorKey: "items.1.author",
        positionKey: "items.1.position",
        textKey: "items.1.text",
        image: "/images/erjan_suleymenov.jpeg",
    },
    {
        id: 1,
        authorKey: "items.2.author",
        positionKey: "items.2.position",
        textKey: "items.2.text",
        image: "/images/ainur_qadirova.jpg",
    },
    {
        id: 2,
        authorKey: "items.3.author",
        positionKey: "items.3.position",
        textKey: "items.3.text",
        image: "/images/sergey_petrov.jpg",
    },
    {
        id: 3,
        authorKey: "items.4.author",
        positionKey: "items.4.position",
        textKey: "items.4.text",
        image: "/images/dana_urazbayeva.jpeg",
    },
];