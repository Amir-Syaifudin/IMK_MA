import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[#1E3A2F] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#C9A84C]">Mahkamah Agung RI</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Lembaga tinggi negara yang memegang kekuasaan kehakiman sebagai
              kekuasaan yang merdeka untuk menyelenggarakan peradilan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#C9A84C]">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><Link to="/perkara" className="text-white/80 hover:text-[#C9A84C] transition-colors">Perkara</Link></li>
              <li><Link to="/faq" className="text-white/80 hover:text-[#C9A84C] transition-colors">FAQ &amp; Panduan</Link></li>
              <li><Link to="/tentang" className="text-white/80 hover:text-[#C9A84C] transition-colors">Tentang MA</Link></li>
              <li><Link to="/kontak" className="text-white/80 hover:text-[#C9A84C] transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Layanan Digital */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#C9A84C]">Layanan Digital</h3>
            <ul className="space-y-2">
              <li><a href="https://putusan3.mahkamahagung.go.id" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/80 hover:text-[#C9A84C] transition-colors"><ExternalLink size={12} className="mr-2"/>Direktori Putusan</a></li>
              <li><a href="https://ecourt.mahkamahagung.go.id" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/80 hover:text-[#C9A84C] transition-colors"><ExternalLink size={12} className="mr-2"/>e-Court</a></li>
              <li><a href="https://sipp.pn-jakartapusat.go.id" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/80 hover:text-[#C9A84C] transition-colors"><ExternalLink size={12} className="mr-2"/>Cek Status Perkara</a></li>
              <li><a href="https://sipp.mahkamahagung.go.id" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/80 hover:text-[#C9A84C] transition-colors"><ExternalLink size={12} className="mr-2"/>SIPP</a></li>
              <li><a href="https://eberpadu.mahkamahagung.go.id" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/80 hover:text-[#C9A84C] transition-colors"><ExternalLink size={12} className="mr-2"/>e-Berpadu</a></li>
            </ul>
          </div>

          {/* Portal Internal */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#C9A84C]">Portal Internal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-[#C9A84C] transition-colors">Sistem Manajemen Kasus</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#C9A84C] transition-colors">Dashboard Kinerja</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#C9A84C] transition-colors">Repositori Dokumen</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#C9A84C]">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><MapPin size={18} className="mt-1 flex-shrink-0 text-[#E8C96A]"/><span className="text-white/80 text-sm">Jl. Medan Merdeka Utara No. 9-13, Jakarta Pusat 10110</span></li>
              <li className="flex items-center gap-2"><Phone size={18} className="flex-shrink-0 text-[#E8C96A]"/><span className="text-white/80 text-sm">(021) 384 3348</span></li>
              <li className="flex items-center gap-2"><Mail size={18} className="flex-shrink-0 text-[#E8C96A]"/><span className="text-white/80 text-sm">info@mahkamahagung.go.id</span></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#C9A84C]">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-[#C9A84C] p-2 rounded-lg transition-colors"><Facebook size={20} /></a>
              <a href="#" className="bg-white/10 hover:bg-[#C9A84C] p-2 rounded-lg transition-colors"><Twitter size={20} /></a>
              <a href="#" className="bg-white/10 hover:bg-[#C9A84C] p-2 rounded-lg transition-colors"><Instagram size={20} /></a>
              <a href="#" className="bg-white/10 hover:bg-[#C9A84C] p-2 rounded-lg transition-colors"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="bg-[#162B22] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mt-8 pt-8 pb-8 text-center text-white/70 text-sm">
          <p>&copy; 2026 Mahkamah Agung Republik Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
