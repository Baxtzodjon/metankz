"use client"

import React from 'react';
import BGMainBlock from '@/app/components/BgMainBlock';
import { useTranslations } from 'next-intl';
import Offices from '@/app/components/Offices';

const Contact = () => {
    const t = useTranslations();
    
    return (
        <main>

            <BGMainBlock title={t("Header.nav.contact")} description={t("Contact.bannerDescription")} image="/images/contact_bg.png"/>

            <Offices />

            {/* короче смотри создай мне next js проект app router где должен быть какой-то api от news news должен быть только либо на русском либо на англиском потому что у меня сайт сделано на i18n потом внимательно слушал меня потом news должен быть только о метан потому что мой сайт на metankz и потом типо короче news about metan, benzin, gas и еще должен быть categories где есть all news, company news, innovation, industry news, expert tips, marketing и тогдали потом должен быть динамичные страницы который открываеться при клике по id либо slug и там отображения информаций который я нажал и ты же уже понял о чем хочу я сказать и еще pagination тоже должен быть */}

        </main>
    );
};

export default Contact;