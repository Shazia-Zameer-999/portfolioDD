// src/i18n.js
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

        backend: {
            loadPath: '/locales/{{lng}}/translation.json', // ✅ Explicitly tell it where to look
        },

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;