// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import ArticleContentClient from "./ArticleContentClient";

interface Params {
  slug: string;
}

interface PageProps {
  params: Params;
}

// 🔹 Remplacez par vos articles réels
const articles = [
  {
    slug: "cahier-des-charges-efficace",
    title: "Comment concevoir un cahier des charges efficace",
    image: "/images/blog-cahier.png",
    content: (
      <>
        <p className="mb-4 leading-relaxed">
          Le cahier des charges est un document essentiel pour tout projet logiciel.
        </p>
        <ul className="list-disc list-inside mb-4 ml-5 space-y-2">
          <li>Identifier les besoins précis du client.</li>
          <li>Décrire les fonctionnalités de manière claire et complète.</li>
          <li>Définir les contraintes techniques et délais.</li>
        </ul>
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
          NestJS est un framework Node.js basé sur TypeScript pour créer des API modulaires et maintenables.
        </p>
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
        Déployer sur Vercel est simple. Connectez votre repo et configurez vos variables d'environnement.
      </p>
    ),
    date: "5 Septembre 2025",
    tags: ["Next.js", "Frontend", "Vercel"],
  },
];

export default function ArticlePage({ params }: PageProps) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  return (
    <section className="max-w-3xl mx-auto py-20 px-6 sm:px-12">
      <ArticleContentClient article={article} />
    </section>
  );
}
