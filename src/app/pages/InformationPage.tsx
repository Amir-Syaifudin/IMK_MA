import {
  Newspaper,
  Megaphone,
  ClipboardText,
  Bell,
  CalendarBlank,
  User,
  ArrowRight,
} from "@phosphor-icons/react";
import { useLocation } from "react-router";
import { useState, useMemo } from "react";

interface InfoItem {
  id: number;
  title: string;
  date: string; // ISO format YYYY-MM-DD
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
        title: "Transformasi Digital di Mahkamah Agung: Menuju Peradilan Modern",
        date: "2026-05-10",
        author: "Dr. H. Andi Samsan Nganro, S.H., M.H.",
        excerpt:
          "Artikel ini membahas langkah-langkah strategis Mahkamah Agung dalam mengimplementasikan teknologi informasi untuk meningkatkan efisiensi dan transparansi peradilan...",
        category: "Teknologi",
      },
      {
        id: 2,
        title: "Memahami Restorative Justice dalam Sistem Peradilan Pidana Indonesia",
        date: "2026-05-05",
        author: "Humas MA",
        excerpt:
          "Keadilan restoratif menjadi salah satu fokus dalam pembaruan hukum nasional. Bagaimana MA menyikapi tren global ini dalam praktik peradilan sehari-hari?",
        category: "Hukum Pidana",
      },
      {
        id: 3,
        title: "Perlindungan Hak Kekayaan Intelektual di Era Ekonomi Digital",
        date: "2026-04-20",
        author: "Prof. Dr. Takdir Rahmadi, S.H., LL.M.",
        excerpt:
          "Tantangan hukum dalam melindungi hak cipta dan paten semakin kompleks seiring pesatnya perkembangan platform e-commerce dan konten digital.",
        category: "Hukum Perdata",
      },
      {
        id: 4,
        title: "Etika Profesi Hakim: Menjaga Integritas dan Kepercayaan Publik",
        date: "2026-04-12",
        author: "Komisi Yudisial",
        excerpt:
          "Integritas adalah mahkota hakim. Artikel ini mengulas kembali kode etik dan pedoman perilaku hakim dalam menjalankan tugas konstitusionalnya.",
        category: "Etika Hukum",
      },
      {
        id: 5,
        title: "Analisis Putusan MK terkait Ambang Batas Pencalonan Kepala Daerah",
        date: "2026-03-28",
        author: "Pakar Hukum Tata Negara",
        excerpt:
          "Implikasi yuridis dan politis dari putusan terbaru Mahkamah Konstitusi terhadap konstelasi Pilkada serentak di seluruh Indonesia.",
        category: "Hukum Tata Negara",
      },
      {
        id: 6,
        title: "Keadilan bagi Disabilitas dalam Aksesibilitas Layanan Peradilan",
        date: "2026-03-15",
        author: "Tim Reformasi MA",
        excerpt:
          "Bagaimana MA memastikan setiap warga negara, termasuk penyandang disabilitas, mendapatkan hak yang sama dalam mengakses keadilan.",
        category: "Hak Asasi",
      },
      {
        id: 7,
        title: "Mengenal Mediasi sebagai Solusi Sengketa Perdata yang Efektif",
        date: "2026-02-20",
        author: "Hakim Mediator",
        excerpt:
          "Mediasi bukan hanya formalitas, melainkan jalur win-win solution yang dapat menghemat waktu dan biaya bagi para pihak berperkara.",
        category: "Hukum Perdata",
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
        date: "2026-05-15",
        excerpt:
          "Pelantikan ini merupakan bagian dari mutasi dan promosi rutin di lingkungan Mahkamah Agung untuk menjaga kualitas kepemimpinan di tingkat banding...",
        category: "Kegiatan MA",
      },
      {
        id: 2,
        title: "MA Raih Penghargaan Opini WTP ke-12 Kalinya Secara Berturut-turut",
        date: "2026-05-12",
        excerpt:
          "Badan Pemeriksa Keuangan (BPK) memberikan opini Wajar Tanpa Pengecualian atas Laporan Keuangan Mahkamah Agung Tahun Anggaran 2025.",
        category: "Prestasi",
      },
      {
        id: 3,
        title: "Kunjungan Delegasi Mahkamah Agung Singapura ke Mahkamah Agung RI",
        date: "2026-05-08",
        excerpt:
          "Pertemuan ini membahas penguatan kerja sama di bidang pertukaran hakim dan pengembangan sistem manajemen perkara elektronik (e-Court).",
        category: "Kerjasama Internasional",
      },
      {
        id: 4,
        title: "Workshop Nasional: Optimalisasi Peran Hakim dalam Perkara Lingkungan",
        date: "2026-05-02",
        excerpt:
          "Mahkamah Agung menyelenggarakan workshop intensif bagi para hakim pengadilan tingkat pertama untuk memperdalam pemahaman tentang hukum lingkungan.",
        category: "Pendidikan",
      },
      {
        id: 5,
        title: "Peresmian Gedung Kantor Pengadilan Agama Jakarta Barat yang Baru",
        date: "2026-04-25",
        excerpt:
          "Fasilitas baru ini diharapkan dapat meningkatkan kenyamanan dan kualitas pelayanan bagi masyarakat pencari keadilan di wilayah Jakarta Barat.",
        category: "Infrastruktur",
      },
      {
        id: 6,
        title: "Sosialisasi Aplikasi SIPP Versi Terbaru di Lingkungan Peradilan Umum",
        date: "2026-04-18",
        excerpt:
          "Aplikasi Sistem Informasi Penelusuran Perkara (SIPP) kini hadir dengan fitur-fitur baru yang lebih user-friendly and transparan.",
        category: "Teknologi",
      },
      {
        id: 7,
        title: "MA Selenggarakan Seminar Internasional tentang Hukum Ekonomi Syariah",
        date: "2026-04-05",
        excerpt:
          "Seminar ini menghadirkan pakar dari berbagai negara untuk mendiskusikan perkembangan terkini dalam penyelesaian sengketa ekonomi syariah.",
        category: "Seminar",
      },
      {
        id: 8,
        title: "Pemberian Bantuan Sosial Mahkamah Agung Peduli Korban Bencana",
        date: "2026-03-20",
        excerpt:
          "Sebagai wujud kepedulian sosial, Mahkamah Agung menyalurkan bantuan kepada masyarakat yang terdampak bencana alam di wilayah Jawa Tengah.",
        category: "Sosial",
      },
    ],
  },
  keputusan: {
    title: "Kebijakan & Peraturan",
    icon: ClipboardText,
    items: [
      {
        id: 1,
        title: "PERMA Nomor 1 Tahun 2026 tentang Administrasi Perkara di Mahkamah Agung",
        date: "2026-05-01",
        excerpt:
          "Peraturan ini mengatur tata cara pengajuan berkas kasasi dan peninjauan kembali secara elektronik guna mempercepat proses penanganan perkara.",
        category: "PERMA",
      },
      {
        id: 2,
        title: "SEMA Nomor 3 Tahun 2025 tentang Pedoman Penjatuhan Pidana",
        date: "2025-12-20",
        excerpt:
          "Surat Edaran ini memberikan panduan bagi para hakim dalam menjatuhkan pidana agar tercipta konsistensi dan rasa keadilan di masyarakat.",
        category: "SEMA",
      },
      {
        id: 3,
        title: "SK KMA Nomor 143/KMA/SK/VIII/2025 tentang Pola Promosi dan Mutasi Hakim",
        date: "2025-08-15",
        excerpt:
          "Surat Keputusan ini merinci kriteria dan mekanisme promosi serta mutasi hakim guna mewujudkan sistem karir yang meritokratis.",
        category: "SK KMA",
      },
      {
        id: 4,
        title: "PERMA Nomor 4 Tahun 2024 tentang Diversi pada Tingkat Kasasi",
        date: "2024-11-10",
        excerpt:
          "Aturan baru mengenai penerapan diversi untuk perkara anak yang sedang dalam proses pemeriksaan tingkat kasasi.",
        category: "PERMA",
      },
      {
        id: 5,
        title: "Pedoman Teknis Layanan Bantuan Hukum bagi Masyarakat Tidak Mampu",
        date: "2024-05-22",
        excerpt:
          "Panduan bagi pengadilan dalam mengelola anggaran Posbakum agar lebih tepat sasaran dan akuntabel.",
        category: "Pedoman",
      },
      {
        id: 6,
        title: "Instruksi KMA tentang Peningkatan Pengawasan Internal Pengadilan",
        date: "2024-02-14",
        excerpt:
          "Arahan tegas bagi seluruh pimpinan pengadilan untuk memperketat pengawasan guna mencegah praktik pungli dan korupsi.",
        category: "Instruksi",
      },
      {
        id: 7,
        title: "Standar Pelayanan Minimal (SPM) pada Pengadilan Tingkat Pertama",
        date: "2023-11-05",
        excerpt:
          "Dokumen ini menetapkan target waktu dan kualitas layanan yang harus dipenuhi oleh setiap pengadilan kepada masyarakat.",
        category: "Standar",
      },
    ],
  },
  pengumuman: {
    title: "Pengumuman Resmi",
    icon: Bell,
    items: [
      {
        id: 1,
        title: "Seleksi Terbuka Pengisian Jabatan Pimpinan Tinggi Madya dan Pratama",
        date: "2026-05-14",
        excerpt:
          "Mahkamah Agung mengundang putra-putri terbaik bangsa untuk mengikuti seleksi terbuka dalam rangka mengisi beberapa jabatan strategis...",
        category: "Rekrutmen",
      },
      {
        id: 2,
        title: "Jadwal Libur Nasional dan Cuti Bersama Hari Raya Idul Fitri 1447 H",
        date: "2026-03-08",
        excerpt:
          "Berdasarkan Keputusan Bersama Menteri, berikut adalah penyesuaian jadwal operasional dan layanan di lingkungan Mahkamah Agung selama masa libur lebaran.",
        category: "Umum",
      },
      {
        id: 3,
        title: "Daftar Peserta yang Lolos Seleksi Administrasi Cakim Tahun 2026",
        date: "2026-05-10",
        excerpt:
          "Sebanyak 1.500 peserta dinyatakan lolos tahap administrasi dan berhak mengikuti ujian Seleksi Kompetensi Dasar (SKD).",
        category: "Rekrutmen",
      },
      {
        id: 4,
        title: "Pemberitahuan Gangguan Teknis Layanan e-Court Sementara",
        date: "2026-05-01",
        excerpt:
          "Sehubungan dengan pemeliharaan server rutin, layanan e-Court tidak dapat diakses pada hari Sabtu mulai pukul 22.00 WIB.",
        category: "Pemberitahuan",
      },
      {
        id: 5,
        title: "Hasil Evaluasi Kinerja Pengadilan Semester I Tahun 2026",
        date: "2026-04-30",
        excerpt:
          "Laporan lengkap mengenai performa penyelesaian perkara di empat lingkungan peradilan di bawah Mahkamah Agung.",
        category: "Evaluasi",
      },
      {
        id: 6,
        title: "Undangan Upacara Peringatan Hari Lahir Pancasila Tahun 2026",
        date: "2026-05-28",
        excerpt:
          "Seluruh aparatur di lingkungan Mahkamah Agung diwajibkan mengikuti upacara bendera yang akan dilaksanakan secara hybrid.",
        category: "Acara",
      },
      {
        id: 7,
        title: "Pengumuman Pemenang Lomba Karya Tulis Ilmiah Hukum MA",
        date: "2026-04-15",
        excerpt:
          "Selamat kepada para pemenang yang telah memberikan kontribusi pemikiran cemerlang bagi pengembangan hukum di Indonesia.",
        category: "Lomba",
      },
    ],
  },
};

const formatIndoDate = (dateStr: string) => {
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

export function InformationPage() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const type = pathParts[pathParts.length - 1]; // get 'artikel', 'berita', etc.

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

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
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
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
                      <CalendarBlank size={14} />
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
                Tidak ditemukan konten yang sesuai dengan kriteria filter Anda.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
