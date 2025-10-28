import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: { escapeValue: false },
    backend: {
      loadPath:
        typeof window !== 'undefined'
          ? '/locales/{{lng}}/translation.json'
          : `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/locales/{{lng}}/translation.json`,
    },
  });

export default i18n;