"use client"

import BGMainBlock from '@/app/components/BgMainBlock';
import { useTranslations } from 'next-intl';
import Offices from '@/app/components/Offices';
import ContactsForms from '@/app/components/ContactsForms';

const ContactClient = () => {
    const t = useTranslations();

    return (
        <main>

            <BGMainBlock title={t("Header.nav.contact")} description={t("Contact.bannerDescription")} image="/images/contact_bg.png" />

            <ContactsForms />

            <Offices />

        </main>
    )
};

export default ContactClient;