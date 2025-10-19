"use client";

import Link from "next/link";
import { useState } from "react";
import { useAppContext } from "@/app/providers/Providers";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, lang, toggleLang } = useAppContext();

  const menuItems = [
    { href: "/about", label: { fr: "À propos", en: "About" } },
    { href: "/services", label: { fr: "Services", en: "Services" } },
    { href: "/portfolio", label: { fr: "Portfolio", en: "Portfolio" } },
    { href: "/blog", label: { fr: "Blog", en: "Blog" } },
    { href: "/contact", label: { fr: "Contact", en: "Contact" } },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 md:px-12">
        {/* Logo + menu desktop */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent"
          >
            MSM Activity
          </Link>

          <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="hover:text-blue-500 transition"
              >
                {item.label[lang]}
              </Link>
            ))}
          </nav>
        </div>

        {/* Boutons à droite */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="px-3 py-1 border rounded hover:bg-blue-500 hover:text-white transition"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 border rounded hover:bg-blue-500 hover:text-white transition"
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-2xl p-2 text-gray-700 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <ul className="flex flex-col p-4 gap-2">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
              >
                {item.label[lang]}
              </Link>
            ))}

            <div className="flex justify-between mt-2 gap-2">
              <button
                onClick={toggleLang}
                className="px-3 py-2 rounded hover:bg-blue-500 hover:text-white transition w-1/2"
              >
                {lang.toUpperCase()}
              </button>
              <button
                onClick={toggleTheme}
                className="px-3 py-2 rounded hover:bg-blue-500 hover:text-white transition w-1/2"
              >
                {theme === "light" ? "🌞" : "🌙"}
              </button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
