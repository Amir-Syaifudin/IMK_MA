import { Menu, X, ExternalLink, ChevronDown, BookOpen, Scale, FileSearch, LayoutGrid, Users, Newspaper, Megaphone, ClipboardList, Bell, Building2 } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';

const digitalServices = [
  {
    name: 'Direktori Putusan',
    desc: 'Akses jutaan putusan di seluruh Indonesia',
    href: 'https://putusan3.mahkamahagung.go.id',
    icon: BookOpen,
  },
  {
    name: 'e-Court',
    desc: 'Pendaftaran perkara secara online',
    href: 'https://ecourt.mahkamahagung.go.id',
    icon: Scale,
  },
  {
    name: 'Cek Status Perkara',
    desc: 'Lacak perkembangan perkara Anda',
    href: 'https://sipp.pn-jakartapusat.go.id',
    icon: FileSearch,
  },
  {
    name: 'SIPP',
    desc: 'Sistem Informasi Penelusuran Perkara',
    href: 'https://sipp.mahkamahagung.go.id',
    icon: LayoutGrid,
  },
  {
    name: 'e-Berpadu',
    desc: 'Layanan terintegrasi untuk advokat',
    href: 'https://eberpadu.mahkamahagung.go.id',
    icon: Users,
  },
];

const informasiItems = [
  { name: 'Profil MA', path: '/profil', icon: Building2 },
  { name: 'Artikel', path: '/id/artikel', icon: Newspaper },
  { name: 'Berita', path: '/id/berita', icon: Megaphone },
  { name: 'Kebijakan', path: '/id/keputusan', icon: ClipboardList },
  { name: 'Pengumuman', path: '/id/pengumuman', icon: Bell },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [layananOpen, setLayananOpen] = useState(false);
  const [informasiOpen, setInformasiOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Perkara', path: '/perkara' },
  ];

  const otherLinks = [
    { name: 'FAQ & Panduan', path: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#1E3A2F] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <img src="/src/imports/image.png" alt="Logo Mahkamah Agung" className="h-14 w-auto" />
            <div className="hidden md:block">
              <div className="font-semibold text-[#C9A84C]">MAHKAMAH AGUNG</div>
              <div className="text-sm text-[#E8C96A]">Republik Indonesia</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors text-sm ${isActive(link.path)
                  ? 'text-[#C9A84C] font-medium'
                  : 'text-white hover:text-[#E8C96A]'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Informasi Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setInformasiOpen(true)}
              onMouseLeave={() => setInformasiOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm transition-colors ${informasiOpen || informasiItems.some(item => isActive(item.path))
                    ? 'text-[#C9A84C] font-medium'
                    : 'text-white hover:text-[#E8C96A]'
                  }`}
                aria-haspopup="true"
                aria-expanded={informasiOpen}
              >
                Informasi
                <ChevronDown
                  size={14}
                  className={`transition-transform ${informasiOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {informasiOpen && (
                <div className="absolute left-0 top-full mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                  <div className="px-4 py-2 bg-[#1E3A2F] text-[#C9A84C] text-xs font-semibold uppercase tracking-wider">
                    Pusat Informasi
                  </div>
                  {informasiItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-[#F9F3E3] transition-colors group"
                      >
                        <div className="p-1.5 bg-[#C9A84C]/10 rounded-lg group-hover:bg-[#C9A84C]/20 transition-colors">
                          <Icon size={16} className="text-[#C9A84C]" />
                        </div>
                        <span className="text-sm font-medium text-[#1E3A2F] group-hover:text-[#A8852A]">
                          {item.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {otherLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors text-sm ${isActive(link.path)
                  ? 'text-[#C9A84C] font-medium'
                  : 'text-white hover:text-[#E8C96A]'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Layanan Digital Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLayananOpen(true)}
              onMouseLeave={() => setLayananOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm text-white hover:text-[#E8C96A] transition-colors"
                aria-haspopup="true"
                aria-expanded={layananOpen}
              >
                Layanan Digital
                <ChevronDown
                  size={14}
                  className={`transition-transform ${layananOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {layananOpen && (
                <div className="absolute right-0 top-full mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
                  <div className="px-4 py-2 bg-[#1E3A2F] text-[#C9A84C] text-xs font-semibold uppercase tracking-wider">
                    Layanan Publik
                  </div>
                  {digitalServices.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 px-4 py-3 hover:bg-[#F9F3E3] transition-colors group"
                      >
                        <div className="mt-0.5 p-1.5 bg-[#C9A84C]/10 rounded-lg group-hover:bg-[#C9A84C]/20 transition-colors">
                          <Icon size={16} className="text-[#C9A84C]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-[#1E3A2F] group-hover:text-[#A8852A]">
                            {s.name}
                          </div>
                          <div className="text-xs text-gray-500 truncate">{s.desc}</div>
                        </div>
                        <ExternalLink size={12} className="mt-1 text-gray-300 group-hover:text-[#C9A84C] flex-shrink-0" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#C9A84C]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#2E5A45] max-h-[calc(100vh-80px)] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 transition-colors ${isActive(link.path)
                  ? 'text-[#C9A84C] font-medium bg-[#2E5A45]'
                  : 'text-white hover:bg-[#2E5A45]'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile: Informasi section */}
            <div className="mt-2 border-t border-[#2E5A45] pt-3">
              <div className="px-4 pb-2 text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">
                Informasi
              </div>
              {informasiItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 py-2.5 px-6 transition-colors ${isActive(item.path) ? 'text-[#C9A84C]' : 'text-white/80 hover:text-[#C9A84C]'
                    }`}
                >
                  <item.icon size={16} />
                  <span className="text-sm">{item.name}</span>
                </Link>
              ))}
            </div>

            {otherLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 transition-colors ${isActive(link.path)
                  ? 'text-[#C9A84C] font-medium bg-[#2E5A45]'
                  : 'text-white hover:bg-[#2E5A45]'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile: Layanan Digital section */}
            <div className="mt-2 border-t border-[#2E5A45] pt-3">
              <div className="px-4 pb-2 text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">
                Layanan Digital
              </div>
              {digitalServices.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2.5 px-4 text-white/80 hover:text-[#C9A84C] hover:bg-[#2E5A45] transition-colors"
                >
                  <span className="text-sm">{s.name}</span>
                  <ExternalLink size={12} />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
