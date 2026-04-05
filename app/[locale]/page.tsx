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

export default function Home() {
  /* const t = useTranslations('homepage'); */

  return (
    <main>
      
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
