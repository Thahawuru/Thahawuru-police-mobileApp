// i18n.js
import 'intl-pluralrules';  // Add this line at the top
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import translation files
import enTranslations from './locales/en/translation.json';
import siTranslations from './locales/si/translation.json';

// Function to initialize i18n
const initI18n = async () => {
  const savedLanguage = await AsyncStorage.getItem('language') || 'en';

  i18n
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      debug: true,
      lng: savedLanguage,
      resources: {
        en: {
          translation: enTranslations,
        },
        si: {
          translation: siTranslations,
        },
      },
      react: {
        useSuspense: false, // Set to false if you're using a Suspense fallback
      },
    });
};

initI18n();

export default i18n;
