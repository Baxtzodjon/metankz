// lib/seo.ts
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function createMetadata({
    locale,
    namespace,
    path,
    image,
}: {
    locale: string;
    namespace: string;
    path: string;
    image: string;
}): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace });

    const title = t("title");
    const description = t("description");

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://metankz.com/${locale}${path}`,
            images: [image],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}
