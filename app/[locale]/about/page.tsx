"use client"

import React from 'react';
import BGMainBlock from '@/app/components/BgMainBlock';
import BenefitsSection from '@/app/components/BenefitsSection';

const About = () => {
    return (
        <main>

            <BGMainBlock title="ABOUT US" description="Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service." image="/images/about_us_bg.png"/>

            <BenefitsSection />

            {/* <FounderCard /> */}

        </main>
    );
};

export default About;