// src/app/blog/[slug]/ArticleContentClient.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ShareButton from "@/app/components/ShareButton";

interface Article {
  title: string;
  image?: string;
  content: React.ReactNode;
  date: string;
  tags: string[];
}

export default function ArticleContentClient({ article }: { article: Article }) {
  return (
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
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
          {article.date}
        </p>

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
  );
}
