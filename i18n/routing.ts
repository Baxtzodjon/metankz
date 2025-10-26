import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ['ru', 'uz', 'en', 'kz'],
  defaultLocale: 'ru',
  localePrefix: 'as-needed'
})
