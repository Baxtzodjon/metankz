import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
/* import Suggest from "@/app/components/Suggest"; */
/* import BGMainBlock from "@/app/components/BgMainBlock"; */
/* import HowWeDoIt from "@/app/components/HowWeDoIt";
import MissionBlock from "@/app/components/MissionBlock";
import PortfolioSection from "@/app/components/PortfolioSection";
import Table from "@/app/components/Table";
import Partners from "@/app/components/Partners"; */
import { workItems } from "@/app/data/workItems";
import Carousel from "@/app/components/Carousel";
import Decisions from "@/app/components/Decisions";
import PortfolioSection from "@/app/components/PortfolioSection";

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

    const work = workItems.find((item) => item.slug === slug);

    if (!work) return notFound();

    const title = t(work.titleKey);
    const description = t(work.descriptionKey);

    return {
        title: `${title} | Metan KZ`,
        description,
        openGraph: {
            title: `${title} | Metan KZ`,
            description,
            images: [work.images[0]],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | Metan KZ`,
            description,
            images: [work.images[0]],
        },
    };
}

export function generateStaticParams() {
    const locales = ["ru", "uz", "en", "kz"];

    return locales.flatMap((locale) =>
        workItems.map((item) => ({
            slug: item.slug,
            locale,
        }))
    );
}

export default async function WorkPage({ params }: PageProps) {
    const { slug } = await params;
    /* const t = await getTranslations(); */

    const currentWork = workItems.find((item) => item.slug === slug); // work

    if (!currentWork) return notFound();

    // 🔹 считаем similar projects
    const hasSimilarProjects = workItems.some(
        item =>
            item.query === currentWork.query &&
            item.slug !== currentWork.slug
    );

    return (
        <main>

            {/* <BGMainBlock title={"Hello"} description={"Hello my name is Baxtzod"} image="/images/services_slug_bg.png" /> */}

            <Carousel slug={slug} />

            <Decisions hasSimilarProjects={hasSimilarProjects} />

            <PortfolioSection mode="similar" currentCategory={currentWork.query} currentWorkSlug={currentWork.slug} />

            {/* <Suggest slug={slug} />

            <HowWeDoIt />

            <MissionBlock className="bg-ebony !pt-20 mb-[34px] h-full lg:h-[565px]" />

            <PortfolioSection />

            <Table />

            <Partners className="bg-athens" /> */}

        </main>
    );
};
