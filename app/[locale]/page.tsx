import { createMetadata } from "@/app/lib/seo";
import HeroSlider from "../components/HeroSlider";
import VideoBlock from "../components/VideoBlock";
import MissionBlock from "../components/MissionBlock";
import ServiceBlock from "../components/ServiceBlock";
import PortfolioSection from "../components/PortfolioSection";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import Facts from "../components/Facts";
import RecentNews from "../components/RecentNews";
import Preloader from "../components/Preloader";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  return createMetadata({
    locale,
    namespace: "HomeSEO",
    path: "/",
    image: "/og/home.png",
  });
}
/* git commit --allow-empty -m "redeploy project" - git push */

export default function Home() {
  /* const t = useTranslations('homepage'); */

  return (
    <main>

      {/* <p>{t('title')}</p> */}

      {/* Открыть терминал в Vs Code */}
      {/* 🔧 ШАГ 2. Обнови Next.js  npm i next@latest */}
      {/* 🔧 ШАГ 3. Обнови React и React DOM npm i react@latest react-dom@latest */}
      {/* 🔧 ШАГ 4. Установи все пакеты заново (на всякий случай) npm install */}
      {/* 🔧 ШАГ 5. Проверка локальной сборки npm run build  */}
      {/* 🔧 ШАГ 6. Перезапусти проект локально npm run dev */}
      {/* 🔧 ШАГ 7. Задеплой на Vercel Просто пушни изменения в GitHub, и Vercel автоматически соберёт новую безопасную версию. */}
      {/* git add .
      git commit -m "Update Next.js and React to fix vulnerability"
      git push */}

      <Preloader />

      <HeroSlider />

      <VideoBlock />

      <MissionBlock className="bg-light" />

      <ServiceBlock />

      <PortfolioSection />

      <Partners className="bg-athens" />

      <Testimonials />

      <Facts />

      <RecentNews />

    </main>
  );
}
