"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroPhoto from "@/assets/images/sandra-portrait.jpg";

export default function AboutPage() {
  const skills = [
    { title: "Langages", desc: "PHP, JavaScript, SQL, C#", icon: "💻" },
    { title: "Frameworks", desc: "Ionic, Flutter, Angular, NestJS", icon: "⚡" },
    { title: "Méthodes", desc: "UML, Merise, Agile/Scrum", icon: "🧭" },
    { title: "Frontend", desc: "HTML5, CSS3, Tailwind, Bootstrap", icon: "🎨" },
    { title: "Bases de données", desc: "SQL Server, Firebase, MySQL", icon: "🗄️" },
    { title: "Soft Skills", desc: "Communication, autonomie, travail en équipe", icon: "🤝" },
  ];

  const experiences = [
    {
      role: "Développeuse Logiciel – EYIMO AUTO SERVICES",
      date: "Mai 2024 – Présent",
      bullets: [
        "Maintenance et amélioration des logiciels internes.",
        "Développement du site web de l’entreprise.",
        "Application de gestion de location de véhicules.",
      ],
    },
    {
      role: "Stagiaire Développeuse – SIMRO UNIVERS TECHNOLOGIES",
      date: "Juin 2023 – Sept. 2023",
      bullets: [
        "Rédaction du cahier des charges pour un projet e-commerce.",
        "Analyse fonctionnelle d’une application d’archivage.",
        "Conception et mise en ligne du site web de l’entreprise.",
      ],
    },
  ];

  const projects = [
    "Backend Developer : système d’alerte communautaire (C#, REST API)",
    "Frontend Developer : application mobile de livraison (Ionic + Angular)",
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6 md:py-24">
      {/* HERO */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-20">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary mb-4">
            Sandra Merveille Maboufang
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            📍 Yaoundé, Cameroun · 📞 +237 677 315 024 · ✉️{" "}
            <a
              href="mailto:maboufangs@gmail.com"
              className="text-accent font-semibold hover:underline"
            >
              maboufangs@gmail.com
            </a>
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="px-6 py-2 bg-accent text-white rounded-full shadow hover:scale-105 transition"
            >
              Contactez-moi
            </a>
            <a
              href="/sandra_cv_pro_vf.pdf"
              target="_blank"
              className="px-6 py-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition"
            >
              CV (FR)
            </a>
            <a
              href="/CV_Sandra_Merveille_EN.pdf"
              target="_blank"
              className="px-6 py-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition"
            >
              CV (EN)
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20">
            <Image
              src={HeroPhoto}
              alt="Sandra Merveille"
              width={320}
              height={320}
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* PROFIL */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-16 p-6 bg-light dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-xl transition-all"
      >
        <h2 className="text-2xl font-bold text-primary mb-4">🎯 Profil Professionnel</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Ingénieure en Génie Logiciel et Data Scientist, passionnée par la création
          d’expériences numériques innovantes et performantes.
        </p>
      </motion.div>

      {/* COMPÉTENCES */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-primary text-center mb-6">🛠️ Compétences</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-light dark:bg-gray-800 p-5 rounded-2xl shadow-md hover:shadow-xl transition transform"
            >
              <div className="text-4xl mb-2">{s.icon}</div>
              <h3 className="font-semibold text-primary mb-1">{s.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* EXPÉRIENCES */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-primary text-center mb-6">💼 Expériences</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-light dark:bg-gray-800 p-5 rounded-2xl shadow-md hover:shadow-xl transition transform"
            >
              <h3 className="font-semibold text-primary mb-1">{exp.role}</h3>
              <p className="text-sm text-gray-500 mb-2">{exp.date}</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* PROJETS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-primary text-center mb-6">🚀 Projets</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-light dark:bg-gray-800 p-5 rounded-2xl shadow-md hover:shadow-xl text-gray-700 dark:text-gray-300 transition transform"
            >
              {p}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
