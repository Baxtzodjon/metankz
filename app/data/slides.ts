export interface Slide {
    titleKey: string;
    contentKey: string;
    image: string;
}

export const slides: Slide[] = [
    {
        titleKey: 'slide1.title',
        contentKey: 'slide1.content',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
    },
    {
        titleKey: 'slide2.title',
        contentKey: 'slide2.content',
        image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1600&q=80',
    },
    {
        titleKey: 'slide3.title',
        contentKey: 'slide3.content',
        image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1600&q=80',
    },
    {
        titleKey: 'slide4.title',
        contentKey: 'slide4.content',
        image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1600&q=80',
    },
];