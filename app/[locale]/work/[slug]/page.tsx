import { notFound } from "next/navigation";
import { timelineData } from "@/app/data/timelineData";
import { getTranslations } from "next-intl/server";
import Suggest from "@/app/components/Suggest";
import BGMainBlock from "@/app/components/BgMainBlock";
import HowWeDoIt from "@/app/components/HowWeDoIt";
import MissionBlock from "@/app/components/MissionBlock";
import PortfolioSection from "@/app/components/PortfolioSection";
import Table from "@/app/components/Table";
import Partners from "@/app/components/Partners";

interface PageParams {
    slug: string;
    locale?: string;
}

interface PageProps {
    params: Promise<PageParams>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const t = await getTranslations();

    const work = timelineData.find((item) => item.link === `/work/${slug}`);

    if (!work) return notFound();

    const title = t(work.titleKey);
    const description = t(work.descriptionKey);

    return {
        title: `${title} | MetanKZ`,
        description,
        openGraph: {
            title: `${title} | MetanKZ`,
            description,
            images: [work.image],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | MetanKZ`,
            description,
            images: [work.image],
        },
    };
}

export function generateStaticParams() {
    const locales = ["ru", "uz", "en", "kz"];

    return locales.flatMap((locale) =>
        timelineData.map((item) => ({
            slug: item.link.replace("/work/", ""),
            locale,
        }))
    );
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    /* const t = await getTranslations(); */

    const work = timelineData.find((item) => item.link === `/work/${slug}`);
    
    if (!work) return notFound();

    return (
        <main>

            <BGMainBlock title={"Hello"} description={"Hello my name is Baxtzod"} image="/images/services_slug_bg.png" />

            <Suggest slug={slug} />

            <HowWeDoIt />

            <MissionBlock className="bg-ebony !pt-20 mb-[34px] h-full lg:h-[565px]" />

            <PortfolioSection />

            <Table />

            <Partners className="bg-athens" />

        </main>
    );
};
