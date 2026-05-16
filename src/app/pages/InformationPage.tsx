import {
  Newspaper,
  Megaphone,
  ClipboardList,
  Bell,
  Calendar,
  User,
  ArrowRight,
} from "lucide-react";
import { useLocation } from "react-router";

interface InfoItem {
  id: number;
  title: string;
  date: string;
  author?: string;
  excerpt: string;
  category: string;
}

const dummyData: Record<
  string,
  { title: string; icon: any; items: InfoItem[] }
> = {
  artikel: {
    title: "Artikel Hukum",
    icon: Newspaper,
    items: [
      {
        id: 1,
        title:
          "Transformasi Digital di Mahkamah Agung: Menuju Peradilan Modern",
        date: "10 Mei 2026",
        author: "Dr. H. Andi Samsan Nganro, S.H., M.H.",
        excerpt:
          "Artikel ini membahas langkah-langkah strategis Mahkamah Agung dalam mengimplementasikan teknologi informasi untuk meningkatkan efisiensi dan transparansi peradilan...",
        category: "Teknologi",
      },
      {
        id: 2,
        title:
          "Memahami Restorative Justice dalam Sistem Peradilan Pidana Indonesia",
        date: "05 Mei 2026",
        author: "Humas MA",
        excerpt:
          "Keadilan restoratif menjadi salah satu fokus dalam pembaruan hukum nasional. Bagaimana MA menyikapi tren global ini dalam praktik peradilan sehari-hari?",
        category: "Hukum Pidana",
      },
    ],
  },
  berita: {
    title: "Berita Terkini",
    icon: Megaphone,
    items: [
      {
        id: 1,
        title: "Ketua Mahkamah Agung Melantik 5 Ketua Pengadilan Tinggi Baru",
        date: "15 Mei 2026",
        excerpt:
          "Pelantikan ini merupakan bagian dari mutasi dan promosi rutin di lingkungan Mahkamah Agung untuk menjaga kualitas kepemimpinan di tingkat banding...",
        category: "Kegiatan MA",
      },
      {
        id: 2,
        title:
          "MA Raih Penghargaan Opini WTP ke-12 Kalinya Secara Berturut-turut",
        date: "12 Mei 2026",
        excerpt:
          "Badan Pemeriksa Keuangan (BPK) memberikan opini Wajar Tanpa Pengecualian atas Laporan Keuangan Mahkamah Agung Tahun Anggaran 2025.",
        category: "Prestasi",
      },
    ],
  },
  keputusan: {
    title: "Kebijakan & Peraturan",
    icon: ClipboardList,
    items: [
      {
        id: 1,
        title:
          "PERMA Nomor 1 Tahun 2026 tentang Administrasi Perkara di Mahkamah Agung",
        date: "01 Mei 2026",
        excerpt:
          "Peraturan ini mengatur tata cara pengajuan berkas kasasi dan peninjauan kembali secara elektronik guna mempercepat proses penanganan perkara.",
        category: "PERMA",
      },
      {
        id: 2,
        title: "SEMA Nomor 3 Tahun 2025 tentang Pedoman Penjatuhan Pidana",
        date: "20 Desember 2025",
        excerpt:
          "Surat Edaran ini memberikan panduan bagi para hakim dalam menjatuhkan pidana agar tercipta konsistensi dan rasa keadilan di masyarakat.",
        category: "SEMA",
      },
    ],
  },
  pengumuman: {
    title: "Pengumuman Resmi",
    icon: Bell,
    items: [
      {
        id: 1,
        title:
          "Seleksi Terbuka Pengisian Jabatan Pimpinan Tinggi Madya dan Pratama",
        date: "14 Mei 2026",
        excerpt:
          "Mahkamah Agung mengundang putra-putri terbaik bangsa untuk mengikuti seleksi terbuka dalam rangka mengisi beberapa jabatan strategis...",
        category: "Rekrutmen",
      },
      {
        id: 2,
        title:
          "Jadwal Libur Nasional dan Cuti Bersama Hari Raya Idul Fitri 1447 H",
        date: "08 Mei 2026",
        excerpt:
          "Berdasarkan Keputusan Bersama Menteri, berikut adalah penyesuaian jadwal operasional dan layanan di lingkungan Mahkamah Agung selama masa libur lebaran.",
        category: "Umum",
      },
    ],
  },
};

export function InformationPage() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const type = pathParts[pathParts.length - 1]; // get 'artikel', 'berita', etc.

  const content = dummyData[type] || {
    title: "Informasi",
    icon: Newspaper,
    items: [],
  };

  const Icon = content.icon;

  return (
    <div className="min-h-screen bg-[var(--ma-bg)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex items-center gap-4">
          <div className="bg-[var(--ma-gold)] p-4 rounded-2xl shadow-lg">
            <Icon size={32} className="text-[var(--ma-green)]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[var(--ma-title)]">
              {content.title}
            </h1>
            <div className="h-1 w-20 bg-[var(--ma-gold)] mt-2 rounded-full"></div>
          </div>
        </div>

        {/* Content List */}
        <div className="grid grid-cols-1 gap-8">
          {content.items.length > 0 ? (
            content.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row"
              >
                <div className="p-8 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[var(--ma-gold-soft)] text-[var(--ma-gold-dark)] text-xs font-bold rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                    {item.author && (
                      <div className="flex items-center gap-1.5 text-gray-400 text-sm ml-auto">
                        <User size={14} />
                        {item.author}
                      </div>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--ma-title)] mb-4 hover:text-[var(--ma-gold)] transition-colors cursor-pointer">
                    {item.title}
                  </h2>
                  <p className="text-[var(--ma-text)] leading-relaxed mb-6">
                    {item.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-[var(--ma-gold)] font-bold hover:text-[var(--ma-gold-dark)] transition-colors group">
                    Baca Selengkapnya
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-lg">
                Belum ada konten untuk kategori ini.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
