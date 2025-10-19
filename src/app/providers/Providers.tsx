"use client";

import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import i18n from "../i18n"; // ton instance i18n

type Theme = "light" | "dark";
type Lang = "fr" | "en";

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  lang: Lang;
  toggleLang: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const Providers = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) setTheme(savedTheme);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");

    const savedLang = localStorage.getItem("lang") as Lang | null;
    if (savedLang) {
      setLang(savedLang);
      i18n.changeLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleLang = () => {
    const newLang = lang === "fr" ? "en" : "fr";
    setLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, toggleLang }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used within Providers");
  return ctx;
};
