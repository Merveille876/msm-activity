"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      icon: "🧭",
      title: "Analyse, Conception & Implémentation",
      desc: "Étude des besoins, conception d’architectures logicielles robustes et développement d’applications performantes (frontend & backend).",
    },
    {
      icon: "💻",
      title: "Développement Web",
      desc: "Création de sites vitrines et d’applications web modernes en Next.js, Nest.js et PHP.",
    },
    {
      icon: "📱",
      title: "Développement Mobile",
      desc: "Conception d’applications hybrides (Ionic, Flutter) compatibles Android et iOS.",
    },
    {
      icon: "📊",
      title: "Analyse de Données",
      desc: "Collecte, nettoyage, interprétation et visualisation des données pour la prise de décision stratégique.",
    },
    {
      icon: "🧩",
      title: "Maintenance & Amélioration",
      desc: "Suivi, correction et optimisation continue des logiciels et systèmes existants.",
    },
    {
      icon: "🎓",
      title: "Formation & Accompagnement",
      desc: "Formations sur mesure en développement web/mobile et accompagnement des équipes projets.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6 md:py-24">
      {/* Section titre */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Mes Services & Domaines d’Expertise
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">
          Téléphone : <span className="font-semibold">+237 677 315 024</span> · Email :{" "}
          <a
            href="mailto:maboufangs@gmail.com"
            className="text-blue-700 dark:text-blue-400 hover:underline"
          >
            maboufangs@gmail.com
          </a>
        </p>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-1">
          Développement Web & Mobile · Analyse de données · Conception logicielle · Formation
        </p>
      </div>

      {/* Section services - cartes uniformes */}
      <div className="flex flex-wrap justify-between gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-light dark:bg-gray-800 rounded-2xl p-6 flex flex-col shadow-md hover:shadow-xl transition-all duration-300"
            style={{
              width: "260px",
              minHeight: "320px",
            }}
          >
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary text-white text-xl shadow-md">
                {s.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-primary">{s.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed flex-grow">
                {s.desc}
              </p>
            </div>
            <Link
              href={`/contact?service=${encodeURIComponent(s.title)}`}
              className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-full bg-accent text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition transform"
            >
              💬 Demander un devis
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Section contact */}
      <div className="mt-20 text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg md:text-xl">
          Vous avez un projet spécifique ? Discutons-en ensemble !
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 rounded-full bg-primary text-white font-semibold shadow-lg hover:scale-105 transition transform"
        >
          Contactez-moi
        </Link>
      </div>
    </section>
  );
}
