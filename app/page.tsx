import React from "react";
import HeroSlider from "./components/HeroSlider";
import VideoBlock from "./components/VideoBlock";
import MissionBlock from "./components/MissionBlock";
import ServiceBlock from "./components/ServiceBlock";

export default function Home() {
  return (
    <main>

      <HeroSlider />

      <VideoBlock />

      <MissionBlock />

      <ServiceBlock />

    </main>
  );
}
