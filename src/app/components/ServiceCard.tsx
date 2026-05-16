import { LucideIcon } from "lucide-react";
import { Link } from "react-router";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  link,
}: ServiceCardProps) {
  return (
    <Link
      to={link}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-[var(--ma-gold)] group"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="bg-[var(--ma-gold-soft)] p-4 rounded-full group-hover:bg-[var(--ma-gold)] transition-colors">
          <Icon
            size={32}
            className="text-[var(--ma-gold-dark)] group-hover:text-[var(--ma-green)] transition-colors"
          />
        </div>
        <div>
          <h3 className="font-semibold text-[var(--ma-title)] mb-2">{title}</h3>
          <p className="text-sm text-[var(--ma-text)]">{description}</p>
        </div>
      </div>
    </Link>
  );
}
