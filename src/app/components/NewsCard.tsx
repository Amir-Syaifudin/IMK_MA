import { Calendar } from "lucide-react";

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  excerpt: string;
}

export function NewsCard({ image, title, date, excerpt }: NewsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 hover:border-[var(--ma-gold)]">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-[var(--ma-text-muted)] mb-3">
          <Calendar size={16} className="text-[var(--ma-gold)]" />
          <span>{date}</span>
        </div>
        <h3 className="font-semibold text-[var(--ma-title)] mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-[var(--ma-text)] line-clamp-3">{excerpt}</p>
        <button className="mt-4 text-[var(--ma-gold)] hover:text-[var(--ma-gold-dark)] font-medium text-sm transition-colors">
          Baca Selengkapnya →
        </button>
      </div>
    </div>
  );
}
