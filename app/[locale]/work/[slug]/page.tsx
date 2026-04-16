import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
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

            <Carousel slug={slug} />

            <Decisions hasSimilarProjects={hasSimilarProjects} />

            <PortfolioSection mode="similar" currentCategory={currentWork.query} currentWorkSlug={currentWork.slug} />

        </main>
    );
};
