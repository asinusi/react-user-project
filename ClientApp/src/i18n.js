import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationEN from './locale/en/lang.json';
import translationFR from './locale/fr/lang.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    react: {
      wait: true
    },
    resources: resources,
    lng: 'en',
    debug: false,

    keySeparator: ".",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;