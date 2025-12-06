import React from 'react';
import BGMainBlock from '@/app/components/BgMainBlock';
import Testimonials from '@/app/components/Testimonials';
import Partners from '@/app/components/Partners';
import WorkSection from '@/app/containers/WorkSection';
import { getTranslations } from 'next-intl/server';
import CategoriesWork from '@/app/containers/CategoriesWork';

interface WorkPageProps {
    searchParams?: Promise<{ page?: string; category?: string }>;
}

export default async function Work({ searchParams }: WorkPageProps) {
    const t = await getTranslations();
    const params = await searchParams;
    /* const page = Number(params?.page) || 1; */
    const category = params?.category || "all";

    return (
        <main>

            <BGMainBlock title={t("Work.bannerTitle")} description={t("Work.bannerDescription")} image="/images/work_bg.png" />

            <CategoriesWork activeCategory={category} />

            <WorkSection category={category} />

            <Testimonials />

            <Partners className='pt-[180px]' />

        </main>
    );
};