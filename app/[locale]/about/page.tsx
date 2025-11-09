"use client"

import React from 'react';
import BGMainBlock from '@/app/components/BgMainBlock';
import BenefitsSection from '@/app/components/BenefitsSection';
import FounderCard from '@/app/components/FounderCard';
import MissionBlock from '@/app/components/MissionBlock';
import History from '@/app/components/History';
import Partners from '@/app/components/Partners';
import TeamBlock from '@/app/components/TeamBlock';
import Map from '@/app/components/Map';
import { useTranslations } from 'next-intl';

const About = () => {
    const t = useTranslations();

    return (
        <main>

            <BGMainBlock title={t("Header.nav.about")} description={t("About.bannerDescription")} image="/images/about_us_bg.png" />

            <BenefitsSection />

            <FounderCard />

            <div className="flex flex-col">

                <MissionBlock className="bg-athens" />

                <History />

            </div>

            <Partners className="bg-light" />

            <TeamBlock />

            <Map />

        </main>
    );
};

export default About;