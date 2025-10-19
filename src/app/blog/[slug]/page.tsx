"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ShareButton from "@/app/components/ShareButton"; // bouton client
import { motion } from "framer-motion";

const articles = [
  {
    slug: "cahier-des-charges-efficace",
    title: "Comment concevoir un cahier des charges efficace",
    image: "/images/blog-cahier.png",
    content: (
      <>
        <p className="mb-4 leading-relaxed">
          Le cahier des charges est un document essentiel pour tout projet logiciel. Il définit le périmètre, les fonctionnalités et les contraintes techniques.
        </p>
        <ul className="list-disc list-inside mb-4 ml-5 space-y-2">
          <li>Identifier les besoins précis du client.</li>
          <li>Décrire les fonctionnalités de manière claire et complète.</li>
          <li>Définir les contraintes techniques et délais.</li>
          <li>Valider le document avec toutes les parties prenantes.</li>
        </ul>
        <blockquote className="border-l-4 border-accent pl-4 italic my-6 text-gray-600 dark:text-gray-300">
          &quot;Un bon cahier des charges est la moitié du succès du projet.&quot;
        </blockquote>
      </>
    ),
    date: "25 Septembre 2025",
    tags: ["Génie Logiciel", "Cahier des charges", "Agile"],
  },
  {
    slug: "nestjs-api-robuste",
    title: "Introduction à NestJS pour développer des API robustes",
    image: "/images/blog-nestjs.png",
    content: (
      <>
        <p className="mb-4 leading-relaxed">
          NestJS est un framework Node.js basé sur TypeScript permettant de créer des API modulaires et maintenables.
        </p>
        <ul className="list-disc list-inside mb-4 ml-5 space-y-2">
          <li>Création de modules et controllers.</li>
          <li>Gestion de la logique métier avec les services.</li>
          <li>Intégration avec une base de données via TypeORM ou Prisma.</li>
        </ul>
      </>
    ),
    date: "10 Septembre 2025",
    tags: ["NestJS", "Backend", "API"],
  },
  {
    slug: "nextjs-vercel-deploiement",
    title: "Déployer une application Next.js sur Vercel",
    image: "/images/blog-nextjs.png",
    content: (
      <p className="mb-4 leading-relaxed">
        Déployer sur Vercel est rapide et simple. Il suffit de connecter votre repository GitHub, GitLab ou Bitbucket, et de configurer les variables d&apos;environnement.
      </p>
    ),
    date: "5 Septembre 2025",
    tags: ["Next.js", "Frontend", "Vercel"],
  },
  {
    slug: "scrum-vs-kanban",
    title: "Scrum vs Kanban : quelle méthode agile choisir ?",
    image: "/images/blog-agile.png",
    content: (
      <p className="mb-4 leading-relaxed">
        Scrum et Kanban sont deux méthodes agiles populaires. Scrum se base sur des sprints et des rôles définis, tandis que Kanban se concentre sur le flux continu.
      </p>
    ),
    date: "1 Septembre 2025",
    tags: ["Agile", "Scrum", "Kanban"],
  },
];

interface Params {
  slug: string;
}

export default function ArticlePage({ params }: { params: Params }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  return (
    <section className="max-w-3xl mx-auto py-20 px-6 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden"
      >
        {article.image && (
          <div className="relative w-full h-64 sm:h-80">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3 leading-snug">
            {article.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{article.date}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            {article.tags.map((tag, j) => (
              <span
                key={j}
                className="text-xs px-3 py-1 rounded-full bg-gradient-accent text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
            {article.content}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4">
            <Link
              href="/blog"
              className="px-6 py-3 bg-gradient-primary text-white rounded-full shadow hover:scale-105 transition-all text-center"
            >
              ← Retour au Blog
            </Link>

            <ShareButton title={article.title} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
