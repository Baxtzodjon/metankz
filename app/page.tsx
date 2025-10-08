import React from "react";
import HeroSlider from "./components/HeroSlider";
import VideoBlock from "./components/VideoBlock";
import MissionBlock from "./components/MissionBlock";
import ServiceBlock from "./components/ServiceBlock";
import PortfolioSection from "./components/PortfolioSection";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>

      <HeroSlider />

      <VideoBlock />

      <MissionBlock />

      <ServiceBlock />

      <PortfolioSection />

      <Partners />

      <Testimonials />

    </main>
  );
}
