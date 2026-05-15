import { Calendar } from 'lucide-react';

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  excerpt: string;
}

export function NewsCard({ image, title, date, excerpt }: NewsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 hover:border-[#C9A84C]">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-[#8A8A8A] mb-3">
          <Calendar size={16} className="text-[#C9A84C]" />
          <span>{date}</span>
        </div>
        <h3 className="font-semibold text-[#1A1A1A] mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-[#4A4A4A] line-clamp-3">
          {excerpt}
        </p>
        <button className="mt-4 text-[#C9A84C] hover:text-[#A8852A] font-medium text-sm transition-colors">
          Baca Selengkapnya →
        </button>
      </div>
    </div>
  );
}
