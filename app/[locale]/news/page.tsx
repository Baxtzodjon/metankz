import BGMainBlock from '@/app/components/BgMainBlock';
import CategoriesNews from '@/app/containers/CategoriesNews';
import NewsBlock from '@/app/containers/NewsBlock';
import { getTranslations } from 'next-intl/server';
import { createMetadata } from '@/app/lib/seo';

interface PageProps {
  params: Promise<{ locale: string }>;
}

interface NewsPageProps {
    searchParams?: Promise<{ page?: string; category?: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { locale } = await params;

    return createMetadata({
        locale,
        namespace: "NewsSEO",
        path: "/news",
        image: "/og/news.png",
    });
}

export default async function News({ searchParams }: NewsPageProps) {
    const t = await getTranslations();

    const params = await searchParams;
    const page = Number(params?.page) || 1;
    const category = params?.category || "all";

    return (
        <main>

            <BGMainBlock title={t("Header.nav.news")} description={t("News.bannerDescription")} image="/images/news_bg.png" />

            <CategoriesNews activeCategory={category} />

            <NewsBlock page={page} category={category} />

        </main>
    );
};