"use client";

import { useState } from "react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("fr");

  const toggleLang = () => {
    const newLang = lang === "fr" ? "en" : "fr";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    window.location.reload(); // recharge la page avec la nouvelle langue
  };

  return (
    <button
      onClick={toggleLang}
      className="p-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition"
      title="Changer de langue"
    >
      {lang === "fr" ? "🇫🇷 FR" : "🇬🇧 EN"}
    </button>
  );
}
