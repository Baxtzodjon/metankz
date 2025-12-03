"use client"

import React from 'react';
import BGMainBlock from '@/app/components/BgMainBlock';
import Testimonials from '@/app/components/Testimonials';
import Partners from '@/app/components/Partners';
import WorkSection from '@/app/components/WorkSection';

const Work = () => {
    return (
        <main>

            <BGMainBlock title={"OUR WORK"} description={"Our portfolio represents 20 years of construction experience backed by a passion for perfect client service, quality and innovations in consctuction industry."} image="/images/work_bg.png" />

            <WorkSection />

            <Testimonials />

            <Partners className='pt-[180px]' />

        </main>
    );
};

export default Work;