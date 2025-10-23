"use client";

import Link from "next/link";
import { useAppContext } from "@/app/providers/Providers";
import {
  FaHome,
  FaCogs,
  FaProjectDiagram,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const { theme, toggleTheme, lang, toggleLang } = useAppContext();
  const navHeight = 64;

  const menuItems = [
    { href: "/about", label: { fr: "À propos", en: "About" }, icon: FaHome, color: "bg-blue-500" },
    { href: "/services", label: { fr: "Services", en: "Services" }, icon: FaCogs, color: "bg-green-500" },
    { href: "/contact", label: { fr: "Contact", en: "Contact" }, icon: FaEnvelope, color: "bg-yellow-500" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-light dark:bg-[#121212] shadow-md">
        <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold bg-gradient-accent bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            MSM Activity
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-6">
            {menuItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="flex flex-col items-center gap-1 p-3 rounded-lg hover:scale-110 transition transform"
                >
                  <div className={`p-3 rounded-full ${item.color} text-white shadow-lg`}>
                    <Icon className="text-xl" />
                  </div>
                  <span className="text-sm font-medium text-primary">{item.label[lang]}</span>
                </Link>
              );
            })}

            {/* Langue */}
            <button
              onClick={toggleLang}
              className="px-3 py-2 rounded-lg hover:bg-accent hover:text-white transition-all duration-200"
            >
              {lang.toUpperCase()}
            </button>

            {/* Thème */}
            <button
              onClick={toggleTheme}
              className="px-3 py-2 rounded-lg hover:bg-accent hover:text-white transition-all duration-200"
            >
              {theme === "light" ? "🌞" : "🌙"}
            </button>
          </div>
        </div>
      </header>

      {/* Compense la navbar fixe */}
      <div style={{ height: navHeight }} />
    </>
  );
}
