"use client";

import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded bg-accent text-light hover:opacity-80 transition"
    >
      {i18n.language === "fr" ? "EN" : "FR"}
    </button>
  );
}
