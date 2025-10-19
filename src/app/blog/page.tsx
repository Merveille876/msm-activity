"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const articles = [
  {
    slug: "cahier-des-charges-efficace",
    title: "Comment concevoir un cahier des charges efficace",
    image: "/images/blog-cahier.png",
    date: "25 Septembre 2025",
  },
  {
    slug: "nestjs-api-robuste",
    title: "Introduction à NestJS pour développer des API robustes",
    image: "/images/blog-nestjs.png",
    date: "10 Septembre 2025",
  },
  {
    slug: "nextjs-vercel-deploiement",
    title: "Déployer une application Next.js sur Vercel",
    image: "/images/blog-nextjs.png",
    date: "5 Septembre 2025",
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 sm:px-12">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-primary text-center">
        {"📝 Blog"}
      </h1>

      <div className="grid gap-10 sm:grid-cols-2">
        {articles.map((article, idx) => (
          <motion.div
            key={article.slug}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-transform bg-light dark:bg-gray-800"
          >
            <Link href={`/blog/${article.slug}`} className="block">
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover rounded-t-3xl"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary mb-1">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {article.date}
                </p>
                <span className="mt-4 inline-block px-5 py-2 bg-accent text-white rounded-full shadow text-sm font-medium transition transform hover:scale-105">
                  Lire l&apos;article
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
