"use client";

import { usePathname } from 'next/navigation';
import ContactsSection from '../components/ContactsSection';

export default function ConditionalContacts() {
    const pathname = usePathname();

    const hidePaths = ['/contact', '/ru/contact', '/uz/contact', '/en/contact', '/kz/contact'];

    if (hidePaths.includes(pathname)) {
        return null;
    }

    return <ContactsSection />;
}
