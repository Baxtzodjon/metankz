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

// 🧠 SEO: динамический title + description
export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const t = await getTranslations(); // получаем переводы на сервере

    const service = timelineData.find((item) => item.link === `/services/${slug}`);

    if (!service) return notFound();

    const title = t(service.titleKey);
    const description = t(service.descriptionKey);

    return {
        title: `${title} | Metan KZ`,
        description,
        openGraph: {
            title: `${title} | Metan KZ`,
            description,
            images: [service.image],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | Metan KZ`,
            description,
            images: [service.image],
        },
    };
}

export function generateStaticParams() {
    const locales = ["ru", "uz", "en", "kz"];

    // Для каждого языка генерируем все slug-и
    return locales.flatMap((locale) =>
        timelineData.map((item) => ({
            slug: item.link.replace("/services/", ""), // например: "stations"
            locale,
        }))
    );
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;
    const t = await getTranslations();

    // Убираем "/services/" из ссылок и получаем сам slug
    const service = timelineData.find((item) => item.link === `/services/${slug}`);

    // Если slug не найден — 404
    if (!service) return notFound();

    return (
        <main>

            <BGMainBlock title={t(service.titleKey)} description={t(service.descriptionKey)} image="/images/services_slug_bg.png" />

            <Suggest slug={slug} />

            <HowWeDoIt />

            <MissionBlock className="bg-ebony !pt-20 mb-[34px] h-full lg:h-[565px]" />

            <PortfolioSection mode="related" serviceSlug={slug} />

            <Table />

            <Partners className="bg-athens" />

        </main>
    );
};
