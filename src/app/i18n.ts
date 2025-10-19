// app/providers/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
      // ajoute d'autres clés si nécessaire
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue",
      about: "À propos",
      services: "Services",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
      // ajoute d'autres clés si nécessaire
    },
  },
};

// Initialisation seulement si pas encore fait
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "fr", // langue par défaut
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
