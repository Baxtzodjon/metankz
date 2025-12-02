import { notFound } from "next/navigation";
import { articles } from "@/app/data/newsData";
import { getTranslations } from "next-intl/server";
import NewsId from "@/app/components/NewsId";

interface PageParams {
    id: string;
    locale?: string;
}

interface PageProps {
    params: Promise<PageParams>;
}

export async function generateMetadata({ params }: PageProps) {
    const { id } = await params;
    const t = await getTranslations();

    const article = articles.find((item) => item.id === Number(id));

    if (!article) return notFound();

    const title = t(article.titleKey);
    const description = t(article.descriptionKey);

    return {
        title: `${title} | MetanKZ`,
        description,
        openGraph: {
            title: `${title} | MetanKZ`,
            description,
            images: [article.image],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | MetanKZ`,
            description,
            images: [article.image],
        },
    };
}

export function generateStaticParams() {
    const locales = ["ru", "uz", "en", "kz"];

    // Для каждого языка генерируем все slug-и
    return locales.flatMap((locale) =>
        articles.map((item) => ({
            id: String(item.id),
            locale,
        }))
    );
}

export default async function NewsPage({ params }: PageProps) {
    const { id } = await params;

    const news = articles.find((item) => item.id === Number(id));

    if (!news) return notFound();

    return (
        <>

            {/* <div className="container py-20 max-w-[800px] mx-auto">
                <h1 className="text-3xl font-bold mb-5">{article.title}</h1>

                <div className="text-gray mb-5">
                    {article.source_name} | {article.pubDate}
                </div>

                <Image
                    src={article.image_url || "/images/default_news.jpg"}
                    alt={article.title}
                    width={900}
                    height={500}
                    className="w-full rounded mb-10"
                />

                <div className="text-lg leading-[170%] whitespace-pre-line">
                    {article.content || article.description}
                </div>
            </div> */}

            <NewsId id={id} />

        </>
    );
}