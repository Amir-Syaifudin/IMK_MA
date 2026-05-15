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
      navigate(`/pencarian?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4 text-center">Layanan Digital MA</h2>
          <div className="h-1 w-24 bg-[#C9A84C] mx-auto mb-8 rounded-full"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </section>
      <section className="bg-[#F9F3E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1E3A2F]">
              Portal Mahkamah Agung
            </h1>
            <p className="text-xl text-[#2E5A45] max-w-2xl mx-auto">
              Akses informasi peradilan, putusan, dan layanan hukum dengan mudah dan transparan
            </p>
          </div>

          {/* Main Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <button
              onClick={() => navigate('/pencarian')}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all flex flex-col items-center gap-4 group border-2 border-transparent hover:border-[#C9A84C]"
            >
              <div className="bg-[#C9A84C] p-4 rounded-full group-hover:bg-[#A8852A] transition-colors">
                <FileSearch size={40} className="text-[#1E3A2F]" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2 text-[#1A1A1A]">Cari Putusan</h3>
                <p className="text-sm text-[#4A4A4A]">Temukan putusan pengadilan dengan mudah</p>
              </div>
            </button>

            <button
              onClick={() => navigate('/pencarian?tab=status')}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all flex flex-col items-center gap-4 group border-2 border-transparent hover:border-[#C9A84C]"
            >
              <div className="bg-[#C9A84C] p-4 rounded-full group-hover:bg-[#A8852A] transition-colors">
                <ClipboardList size={40} className="text-[#1E3A2F]" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2 text-[#1A1A1A]">Cek Status Perkara</h3>
                <p className="text-sm text-[#4A4A4A]">Lacak perkembangan perkara Anda</p>
              </div>
            </button>

            <button
              onClick={() => navigate('/kontak')}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all flex flex-col items-center gap-4 group border-2 border-transparent hover:border-[#C9A84C]"
            >
              <div className="bg-[#C9A84C] p-4 rounded-full group-hover:bg-[#A8852A] transition-colors">
                <Phone size={40} className="text-[#1E3A2F]" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2 text-[#1A1A1A]">Hubungi Pengadilan</h3>
                <p className="text-sm text-[#4A4A4A]">Kontak dan informasi pengadilan</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Global Search Bar */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-lg p-6 border-2 border-[#E8C96A]">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A8A]" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari putusan, berita, atau informasi lainnya..."
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-[#C9A84C] text-[#1A1A1A] placeholder:text-[#8A8A8A]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#C9A84C] text-[#1E3A2F] px-8 py-4 rounded-lg hover:bg-[#A8852A] transition-colors font-medium"
            >
              Cari
            </button>
          </div>
        </form>
      </section>

      {/* Main Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2 text-center">
          Layanan Utama
        </h2>
        <div className="h-1 w-24 bg-[#C9A84C] mx-auto mb-8 rounded-full"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={FileSearch}
            title="Direktori Putusan"
            description="Akses jutaan putusan pengadilan di seluruh Indonesia"
            link="/pencarian"
          />
          <ServiceCard
            icon={Calendar}
            title="Jadwal Sidang"
            description="Informasi jadwal persidangan terkini"
            link="/jadwal"
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

      {/* Latest News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white rounded-2xl mb-16 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2">
              Berita Terbaru
            </h2>
            <div className="h-1 w-16 bg-[#C9A84C] rounded-full"></div>
          </div>
          <button className="text-[#C9A84C] hover:text-[#A8852A] font-medium transition-colors">
            Lihat Semua →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
