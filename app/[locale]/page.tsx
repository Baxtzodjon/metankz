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

      {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error earum necessitatibus alias ullam dolor harum quos. Enim voluptatum dolorum aut magnam quam adipisci doloribus, molestiae impedit quae eligendi beatae ad.</p> */}

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
