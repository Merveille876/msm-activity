"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroPhoto from "@/assets/images/sandra-portrait.jpg";

export default function Home() {
  const skills = [
    { title: "Langages", desc: "PHP, Java, JavaScript, SQL, C#", icon: "💻" },
    { title: "Frameworks", desc: "Ionic, Flutter, Angular, NestJS, NextJS", icon: "⚡" },
    { title: "Méthodes", desc: "UML, Merise, Agile/Scrum", icon: "🧭" },
    { title: "Frontend", desc: "HTML5, CSS3, Tailwind, Bootstrap", icon: "🎨" },
    { title: "Bases de données", desc: "SQL Server, Firebase, MySQL", icon: "🗄️" },
    { title: "Soft Skills", desc: "Communication, autonomie, travail en équipe", icon: "🤝" },
  ];

  const experiences = [
    {
      role: "Analyste de Données – EYIMO SERVICES AUTO",
      date: "Juin 2024 – Présent",
      bullets: [
        "Maintenance et optimisation des logiciels internes.",
        "Conception du site web de l’entreprise.",
        "Analyse et développement d’une application de gestion de location de voiture.",
      ],
    },
    {
      role: "Développeuse Full-Stack – Projet Académique",
      date: "Juin 2025 – Sept. 2025",
      bullets: [
        "Développement Backend d’un système d’alerte communautaire (NestJS).",
        "Développement Frontend d’une application mobile de livraison (Ionic/Angular).",
      ],
    },
    {
      role: "Stagiaire Développeuse – SIMRO UNIVERS TECHNOLOGIES",
      date: "Juin 2023 – Sept. 2023",
      bullets: [
        "Rédaction de cahier des charges pour un projet e-commerce.",
        "Analyse fonctionnelle d’une application d’archives.",
        "Participation à la conception et mise en ligne du site web d’entreprise.",
      ],
    },
  ];

  const projects = [
    "Système d’alerte communautaire – API REST + Firebase + ESP32 (projet d’équipe).",
    "Application mobile de livraison – Ionic + NestJS + SQL Server.",
    "Site web EYIMO Auto Services – Next.js + TailwindCSS.",
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
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 mb-4">
            Sandra Maboufang
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
            Ingénieure en Génie Logiciel
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            📍 Yaoundé, Cameroun · 📞 +237 677 315 024 · ✉️{" "}
            <a
              href="mailto:maboufangs@gmail.com"
              className="text-primary font-semibold hover:underline"
            >
              maboufangs@gmail.com
            </a>
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="/contact"
              className="px-6 py-2 bg-primary text-white rounded-lg shadow hover:scale-105 transition"
            >
              Contactez-moi
            </a>
            <a
              href="/sandra_cv_pro_vf.pdf"
              target="_blank"
              className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
            >
              Télécharger CV
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
              alt="Sandra Maboufang"
              width={320}
              height={320}
              className="object-cover"
              priority
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
        className="max-w-3xl mx-auto mb-16 p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-primary mb-4">🎯 Profil Professionnel</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Professionnelle hautement qualifiée avec plus de deux ans d’expérience dans
          l’industrie informatique, passionnée par la conception et le développement
          d’applications logicielles innovantes. Experte en PHP, Java, Ionic, Flutter,
          Nest.js et Next.js, je maîtrise les principes de conception logicielle et les
          méthodes agiles.
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
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg transition transform"
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
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg transition transform"
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
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg text-gray-700 dark:text-gray-300 transition transform"
            >
              {p}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
