"use client"

import { usePathname, useRouter } from '@/i18n/navigation'
import { useLocale } from "next-intl"

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale: string) => {
        if (newLocale !== locale) {
            router.replace(pathname, { locale: newLocale });
            router.refresh();
        }
    };

    return (
        <select value={locale} onChange={e => switchLocale(e.target.value)} className='bg-[#F4F5F6] max-w-full w-[60px] h-8 border border-[#d7dadd] rounded outline-none focus:border focus:border-primary'>

            <option value="ru">RU</option>
            <option value="uz">UZ</option>
            <option value="en">EN</option>
            <option value="kz">KZ</option>

        </select>
    )
}