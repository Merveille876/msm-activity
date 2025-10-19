import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "./providers/Providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlobalHeader from "./components/GlobalHeader";

export const metadata: Metadata = {
  title: "MSM Activity",
  description: "Site de profil d’ingénieur en génie logiciel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased font-sans flex flex-col min-h-screen transition-colors duration-300">
        <Providers>
          <GlobalHeader /> {/* CLIENT */}
          <Navbar />       {/* CLIENT */}
          <main className="flex-grow bg-light dark:bg-[#0a0a0a] text-primary dark:text-gray-100 transition-colors duration-300">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
