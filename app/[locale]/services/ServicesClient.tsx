"use client"

import BGMainBlock from '@/app/components/BgMainBlock';
import TimelineBlock from '@/app/components/TimelineBlock';
import { useTranslations } from 'next-intl';

const ServicesClient = () => {
    const t = useTranslations();

    return (
        <main>

            <BGMainBlock title={t("Header.nav.services")} description={t("Services.bannerDescription")} image="/images/services_bg.png" />

            <TimelineBlock />

        </main>
    )
};

export default ServicesClient;
