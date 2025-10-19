"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Projet MSM Activity",
    image: "/images/portfolio-1.png",
    description: "Application web de gestion d'alertes et de profil.",
  },
  {
    title: "Portfolio Ingénieur",
    image: "/images/portfolio-2.png",
    description: "Site vitrine pour présenter un profil professionnel.",
  },
];

export default function PortfolioPage() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 sm:px-12">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-primary text-center">
        🚀 Portfolio
      </h1>

      <div className="grid gap-10 sm:grid-cols-2">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-light dark:bg-gray-800 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-transform"
          >
            <div className="relative w-full h-48 md:h-56">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover rounded-t-3xl"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-primary mb-2">{p.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {p.description}
              </p>
              <button className="mt-4 px-5 py-2 bg-accent text-white rounded-full shadow hover:scale-105 transition transform text-sm font-medium">
                Voir le projet
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
