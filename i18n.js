// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend) // This tells i18next where to find your translation files
    .use(LanguageDetector) // This automatically detects the user's browser language
    .use(initReactI18next) // This passes the i18n instance to react-i18next
    .init({
        fallbackLng: 'en', // If a translation is missing, use English as a fallback
        debug: true, // Helps with debugging during development
        interpolation: {
            escapeValue: false, // React already protects from XSS
        },
    });

export default i18n;