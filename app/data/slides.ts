export interface Slide {
    titleKey: string;
    contentKey: string;
    image: string;
}

export const slides: Slide[] = [
    {
        titleKey: 'slide1.title',
        contentKey: 'slide1.content',
        image: '/images/slide_first.jpeg',
    },
    {
        titleKey: 'slide2.title',
        contentKey: 'slide2.content',
        image: '/images/slide_second.jpg',
    },
    {
        titleKey: 'slide3.title',
        contentKey: 'slide3.content',
        image: '/images/slide_third.jpg',
    },
    {
        titleKey: 'slide4.title',
        contentKey: 'slide4.content',
        image: '/images/slide_fourth.jpeg',
    },
];