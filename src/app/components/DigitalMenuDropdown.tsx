import { Link } from "react-router";
import { ExternalLink } from "lucide-react";

interface ServiceItem {
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    name: "Direktori Putusan",
    description: "Akses jutaan putusan di seluruh Indonesia",
    href: "https://putusan.mahkamahagung.go.id",
    icon: <ExternalLink size={16} />,
  },
  {
    name: "e‑Court (Pendaftaran Perkara Online)",
    description: "Daftar perkara secara digital",
    href: "https://ecourt.mahkamahagung.go.id",
    icon: <ExternalLink size={16} />,
  },
  {
    name: "Cek Status Perkara",
    description: "Lacak perkembangan perkara Anda",
    href: "https://status.mahkamahagung.go.id",
    icon: <ExternalLink size={16} />,
  },
  {
    name: "SIPP (Sistem Informasi Penelusuran Perkara)",
    description: "Penelusuran detail perkara",
    href: "https://sipp.mahkamahagung.go.id",
    icon: <ExternalLink size={16} />,
  },
  {
    name: "e‑Berpadu",
    description: "Layanan terintegrasi untuk advokat",
    href: "https://eberpadu.mahkamahagung.go.id",
    icon: <ExternalLink size={16} />,
  },
];

export function DigitalMenuDropdown() {
  return (
    <div className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      <ul className="py-2">
        {services.map((s) => (
          <li
            key={s.name}
            className="px-4 py-2 hover:bg-gray-100 flex items-center"
          >
            <span className="mr-2 text-gray-600">{s.icon}</span>
            <div className="flex-1">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-medium text-gray-800"
              >
                {s.name}
              </a>
              <p className="text-xs text-gray-500">{s.description}</p>
            </div>
            <ExternalLink size={14} className="text-gray-400" />
          </li>
        ))}
      </ul>
    </div>
  );
}
