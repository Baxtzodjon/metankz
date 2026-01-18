// app/sitemap.ts
import type { MetadataRoute } from "next";
import { articles } from "@/app/data/newsData";
import { timelineData } from "@/app/data/timelineData";
import { workItems } from "@/app/data/workItems";

const BASE_URL = "https://metankz.com";
const locales = ["ru", "en", "kz", "uz"];

function createAlternates(path: string) {
    return {
        languages: Object.fromEntries(
            locales.map((locale) => [
                locale,
                `${BASE_URL}/${locale}${path}`,
            ])
        ),
    };
}

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages = [
        "",
        "/about",
        "/services",
        "/work",
        "/news",
        "/contact",
    ];

    const staticRoutes = staticPages.flatMap((path) =>
        locales.map((locale) => ({
            url: `${BASE_URL}/${locale}${path}`,
            lastModified: new Date(),
            alternates: createAlternates(path),
        }))
    );

    const newsRoutes = articles.flatMap((news) =>
        locales.map((locale) => ({
            url: `${BASE_URL}/${locale}/news/${news.id}`,
            lastModified: new Date(),
            alternates: createAlternates(`/news/${news.id}`),
        }))
    );

    const servicesRoutes = timelineData.flatMap((service) => {
        const slug = service.link.replace("/services/", "");

        return locales.map((locale) => ({
            url: `${BASE_URL}/${locale}/services/${slug}`,
            lastModified: new Date(),
            alternates: createAlternates(`/services/${slug}`),
        }));
    });

    const workRoutes = workItems.flatMap((work) =>
        locales.map((locale) => ({
            url: `${BASE_URL}/${locale}/work/${work.slug}`,
            lastModified: new Date(),
            alternates: createAlternates(`/work/${work.slug}`),
        }))
    );

    return [
        ...staticRoutes,
        ...newsRoutes,
        ...servicesRoutes,
        ...workRoutes,
    ];
}
