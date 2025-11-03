import React from "react";
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

export default function Home() {
  /* const t = useTranslations('homepage'); */

  return (
    <main>

      {/* <p>{t('title')}</p> */}

      <Preloader />

      <HeroSlider />

      <VideoBlock />

      <MissionBlock className="bg-light" />

      <ServiceBlock />

      <PortfolioSection />

      <Partners />

      <Testimonials />

      <Facts />

      <RecentNews />

    </main>
  );
}
