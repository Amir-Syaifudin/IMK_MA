import { Search, FileSearch, ClipboardList, Phone, Gavel, Calendar, FileText, Bell, ExternalLink, BookOpen, Scale, LayoutGrid, Users } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ServiceCard } from '../components/ServiceCard';
import { NewsCard } from '../components/NewsCard';

export function Homepage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/perkara?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* 1. Portal & Search Section with Gold Background Theme */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Gold-Toned Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/src/imports/ma-bg.jpg')",
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Gold Tone Overlay (Replacing the Green one) */}
          <div className="absolute inset-0 bg-[#3D2B1F]/80 mix-blend-multiply"></div> {/* Dark brown/gold base */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#C9A84C]/40 via-[#3D2B1F]/60 to-[#F2F2F2]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              Portal Mahkamah Agung
            </h1>
            <p className="text-[#C9A84C] text-xl md:text-3xl font-black tracking-[0.25em] uppercase mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              "Pengadilan Bermartabat, Negara Berdaulat"
            </p>
            <p className="text-lg md:text-2xl text-white max-w-4xl mx-auto leading-relaxed font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              Lembaga tinggi negara yang memegang kekuasaan kehakiman sebagai kekuasaan yang merdeka untuk menyelenggarakan peradilan guna menegakkan hukum dan keadilan.
            </p>
          </div>

          {/* Main Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <button
              onClick={() => navigate('/perkara')}
              className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-[#C9A84C]/20 transition-all flex flex-col items-center gap-5 group border-2 border-transparent hover:border-[#C9A84C] transform hover:-translate-y-2"
            >
              <div className="bg-[#C9A84C] p-5 rounded-2xl group-hover:bg-[#A8852A] transition-all shadow-lg">
                <FileSearch size={44} className="text-[#1E3A2F]" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2 text-[#1A1A1A]">Cari Putusan</h3>
                <p className="text-sm text-[#4A4A4A] font-medium">Temukan putusan pengadilan dengan mudah</p>
              </div>
            </button>

            <button
              onClick={() => navigate('/perkara?tab=status')}
              className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-[#C9A84C]/20 transition-all flex flex-col items-center gap-5 group border-2 border-transparent hover:border-[#C9A84C] transform hover:-translate-y-2"
            >
              <div className="bg-[#C9A84C] p-5 rounded-2xl group-hover:bg-[#A8852A] transition-all shadow-lg">
                <ClipboardList size={44} className="text-[#1E3A2F]" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2 text-[#1A1A1A]">Cek Status Perkara</h3>
                <p className="text-sm text-[#4A4A4A] font-medium">Lacak perkembangan perkara Anda</p>
              </div>
            </button>

            <button
              onClick={() => navigate('/kontak')}
              className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-[#C9A84C]/20 transition-all flex flex-col items-center gap-5 group border-2 border-transparent hover:border-[#C9A84C] transform hover:-translate-y-2"
            >
              <div className="bg-[#C9A84C] p-5 rounded-2xl group-hover:bg-[#A8852A] transition-all shadow-lg">
                <Phone size={44} className="text-[#1E3A2F]" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2 text-[#1A1A1A]">Hubungi Pengadilan</h3>
                <p className="text-sm text-[#4A4A4A] font-medium">Kontak dan informasi pengadilan</p>
              </div>
            </button>
          </div>

          {/* Global Search Bar (Integrated) */}
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="bg-[#C9A84C]/10 backdrop-blur-md rounded-2xl p-2 border border-[#C9A84C]/30 shadow-2xl">
              <div className="bg-white rounded-xl p-2 flex flex-col md:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A8A]" size={24} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari putusan, berita, atau informasi lainnya..."
                    className="w-full pl-14 pr-4 py-5 border-none rounded-lg focus:outline-none text-lg text-[#1A1A1A] placeholder:text-[#8A8A8A]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#C9A84C] text-[#1E3A2F] px-12 py-5 rounded-xl hover:bg-[#A8852A] transition-all font-bold text-lg shadow-lg tracking-widest uppercase"
                >
                  Cari
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. Layanan Utama Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Layanan Utama</h2>
          <div className="h-1.5 w-24 bg-[#C9A84C] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={FileSearch}
            title="Direktori Putusan"
            description="Akses jutaan putusan pengadilan di seluruh Indonesia"
            link="/perkara"
          />
          <ServiceCard
            icon={Calendar}
            title="Cari Perkara per Tanggal"
            description="Temukan perkara berdasarkan rentang tanggal tertentu"
            link="/perkara"
          />
          <ServiceCard
            icon={FileText}
            title="Kepaniteraan"
            description="Layanan administrasi dan kepaniteraan"
            link="/kepaniteraan"
          />
          <ServiceCard
            icon={Bell}
            title="Pengumuman"
            description="Informasi dan pengumuman penting"
            link="/pengumuman"
          />
        </div>
      </section>

      {/* 3. Layanan Digital Section */}
      <section className="bg-white py-24 border-y border-gray-100 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Layanan Digital MA</h2>
            <div className="h-1.5 w-24 bg-[#C9A84C] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={BookOpen}
              title="Direktori Putusan"
              description="Akses jutaan putusan di seluruh Indonesia"
              link="https://putusan3.mahkamahagung.go.id"
            />
            <ServiceCard
              icon={Scale}
              title="e-Court"
              description="Pendaftaran perkara secara online"
              link="https://ecourt.mahkamahagung.go.id"
            />
            <ServiceCard
              icon={FileSearch}
              title="Cek Status Perkara"
              description="Lacak perkembangan perkara Anda"
              link="https://sipp.pn-jakartapusat.go.id"
            />
            <ServiceCard
              icon={LayoutGrid}
              title="SIPP"
              description="Sistem Informasi Penelusuran Perkara"
              link="https://sipp.mahkamahagung.go.id"
            />
          </div>
        </div>
      </section>

      {/* 4. Latest News (Beranda) Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Berita Terbaru</h2>
            <div className="h-1.5 w-16 bg-[#C9A84C] rounded-full mx-auto md:mx-0"></div>
          </div>
          <button className="text-[#C9A84C] hover:text-[#A8852A] font-bold transition-all flex items-center gap-3 text-xl group">
            Lihat Semua Berita <ExternalLink size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <NewsCard
            image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
            title="Mahkamah Agung Luncurkan Sistem Digital untuk Transparansi Peradilan"
            date="15 Mei 2026"
            excerpt="Dalam rangka meningkatkan transparansi dan akuntabilitas, MA meluncurkan platform digital baru yang memudahkan akses masyarakat terhadap informasi peradilan."
          />
          <NewsCard
            image="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80"
            title="Sosialisasi PERMA Baru tentang Administrasi Perkara"
            date="12 Mei 2026"
            excerpt="Mahkamah Agung mengadakan sosialisasi PERMA terbaru untuk meningkatkan efisiensi administrasi perkara di seluruh pengadilan."
          />
          <NewsCard
            image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
            title="Rapat Koordinasi Pengadilan Tinggi se-Indonesia"
            date="10 Mei 2026"
            excerpt="Ketua MA memimpin rapat koordinasi dengan seluruh Ketua Pengadilan Tinggi untuk evaluasi kinerja dan perencanaan strategis."
          />
        </div>
      </section>
    </div>
  );
}
