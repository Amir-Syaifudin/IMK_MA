import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  return (
    <Link
      to={link}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-[#C9A84C] group"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="bg-[#F9F3E3] p-4 rounded-full group-hover:bg-[#C9A84C] transition-colors">
          <Icon size={32} className="text-[#A8852A] group-hover:text-[#1E3A2F] transition-colors" />
        </div>
        <div>
          <h3 className="font-semibold text-[#1A1A1A] mb-2">{title}</h3>
          <p className="text-sm text-[#4A4A4A]">{description}</p>
        </div>
      </div>
    </Link>
  );
}
