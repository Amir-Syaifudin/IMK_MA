import { ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 bg-[var(--ma-bg)]">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-[var(--ma-title)] mb-4">
          {title}
        </h1>
        <div className="h-1 w-24 bg-[var(--ma-gold)] mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-[var(--ma-text)] mb-8">{description}</p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 bg-[var(--ma-gold)] text-[var(--ma-green)] px-6 py-3 rounded-lg hover:bg-[var(--ma-gold-dark)] transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}
