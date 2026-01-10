import { createMetadata } from "@/app/lib/seo";
import ContactClient from "./ContactClient";

interface PageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { locale } = await params;

    return createMetadata({
        locale,
        namespace: "ContactSEO",
        path: "/contact",
        image: "/og/contact.png",
    });
}

const Contact = () => {
    return <ContactClient />;
};

export default Contact;