"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 px-4 bg-light dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xs sm:max-w-sm"
      >
        {/* Titre */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
          📩 Contactez-moi
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-8 text-base sm:text-lg">
          Une question, un projet ou une collaboration ? Remplissez le formulaire et je vous répondrai rapidement.
        </p>

        {/* Formulaire */}
        <motion.form
          action="https://formspree.io/f/xwprzlqo"
          method="POST"
          className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 space-y-4 hover:shadow-2xl transition-all duration-300"
          whileHover={{ y: -2, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Votre nom"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 dark:text-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Votre email"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 dark:text-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition placeholder-gray-400"
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Votre message"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 dark:text-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition resize-none placeholder-gray-400"
          />

          <button
            type="submit"
            className="w-full mt-2 px-8 py-3 bg-accent text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition transform"
          >
            Envoyer
          </button>
        </motion.form>

        {/* Contact direct */}
        <div className="mt-6 flex flex-col gap-3 items-center text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            📧 ou écrivez-moi directement :{" "}
            <a
              href="mailto:maboufangs@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              maboufangs@gmail.com
            </a>
          </p>

          <a
            href="https://wa.me/message/MDRGP6QSDIZYC1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 bg-accent text-white font-semibold rounded-full shadow-md hover:bg-blue-500 hover:scale-105 transition transform"
          >
            <FaWhatsapp className="mr-2" /> Envoyez un message WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
