import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopBtn from "../components/ScrollToTopBtn";
import ConditionalContacts from "../containers/ConditionalContacts";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

export const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Metan KZ — Экологичные метановые заправки в Казахстане",
  description: "Metan KZ — сеть современных автозаправочных станций, специализирующихся на экологичном метане. Чистое топливо для вашего транспорта по всей территории Казахстана.",
  keywords: ["Metan KZ", "метан заправка Казахстан", "экологичное топливо", "газовые заправки", "метан АЗС", "автозаправка Алматы", "альтернативное топливо"],
  authors: [{ name: "Metan KZ Web Team", url: "https://metankz.com" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Metan KZ — Экологичное топливо для умного движения",
    description: "Современные метановые заправки в Казахстане. Эффективно. Чисто. Безопасно.",
    url: "https://metankz.com",
    siteName: "Metan KZ",
    images: [
      {
        url: "https://metankz.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metan KZ Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metan KZ — Метановые заправки в Казахстане",
    description: "Экологичное и выгодное топливо для вашего авто. Metan KZ — заправляйся умно!",
    images: ["https://metankz.com/twitter-card.jpg"],
    creator: "@metankz",
  },
  metadataBase: new URL("https://metankz.com"),
};

export function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'uz' }, { locale: 'en' }, { locale: 'kz' },];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  let messages;

  try {
    messages = await getMessages({ locale });
  } catch (error) {
    console.error("Ошибка при загрузке сообщений:", error);
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${ubuntu.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />

          {children}

          <ConditionalContacts />

          <ScrollToTopBtn />

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
