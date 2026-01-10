import { createMetadata } from '@/app/lib/seo';
import AboutClient from './AboutClient';

interface PageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { locale } = await params;

    return createMetadata({
        locale,
        namespace: "AboutSEO",
        path: "/about",
        image: "/og/about.png",
    });
}

const About = () => {
    return <AboutClient />;
};

export default About;