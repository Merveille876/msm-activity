// src/app/components/ShareButton.tsx
"use client";

interface ShareButtonProps {
  title: string;
}

export default function ShareButton({ title }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        url: window.location.href,
      });
    } else {
      alert("Partage non supporté sur ce navigateur.");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="px-6 py-3 bg-accent text-primary rounded-xl shadow hover:scale-105 transition-all text-center"
    >
      Partager
    </button>
  );
}
