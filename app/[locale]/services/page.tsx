import { createMetadata } from "@/app/lib/seo";
import ServicesClient from "./ServicesClient";

interface PageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { locale } = await params;

    return createMetadata({
        locale,
        namespace: "ServicesSEO",
        path: "/services",
        image: "/og/services.png",
    });
}

const Services = () => {
    return <ServicesClient />;
};

export default Services;