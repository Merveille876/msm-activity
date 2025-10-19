"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-primary text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-8 text-center space-y-6">
        <p className="text-lg">
          © 2025 Sandra Merveille Maboufang. Tous droits réservés.
        </p>

        {/* Liens sociaux avec icônes */}
        <div className="flex justify-center gap-8 text-base font-medium">
          <a
            href="https://github.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 hover:underline hover:text-accent transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 hover:underline hover:text-accent transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="mailto:maboufangs@gmail.com"
            className="flex items-center gap-2 px-3 py-2 hover:underline hover:text-accent transition"
          >
            <FaEnvelope /> Email
          </a>
        </div>

        <p className="text-sm text-gray-200">
          📍 Yaoundé, Cameroun · 📞 +237 677 315 024 · ✉️ maboufangs@gmail.com
        </p>
      </div>
    </footer>
  );
}
