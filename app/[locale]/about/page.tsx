"use client"

import React from 'react';
import BGMainBlock from '@/app/components/BgMainBlock';
import BenefitsSection from '@/app/components/BenefitsSection';
import FounderCard from '@/app/components/FounderCard';
import MissionBlock from '@/app/components/MissionBlock';

const About = () => {
    return (
        <main>

            <BGMainBlock title="ABOUT US" description="Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service." image="/images/about_us_bg.png" />

            <BenefitsSection />

            <FounderCard />

            <div className="flex flex-col">

                <MissionBlock className="bg-athens" />

                {/* <History /> */}

            </div>

        </main>
    );
};

export default About;