"use client"

import React from 'react';
import BGMainBlock from '@/app/components/BgMainBlock';
import { useTranslations } from 'next-intl';

const Services = () => {
    const t = useTranslations();

    return (
        <main>

            <BGMainBlock title={t("Header.nav.services")} description={t("Services.bannerDescription")} image="/images/services_bg.png" />

        </main>
    );
};

export default Services;