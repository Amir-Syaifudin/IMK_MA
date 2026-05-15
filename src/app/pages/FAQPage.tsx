import { Search, ChevronDown, BookOpen } from 'lucide-react';
import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';

interface FAQ {
  question: string;
  answer: string;
}

interface Category {
  name: string;
  faqs: FAQ[];
}

const categories: Category[] = [
  {
    name: 'Tentang Mahkamah Agung',
    faqs: [
      {
        question: 'Apa fungsi utama Mahkamah Agung?',
        answer: 'Mahkamah Agung adalah lembaga tinggi negara yang memegang kekuasaan kehakiman. Fungsi utamanya adalah mengadili perkara kasasi, menguji peraturan perundang-undangan di bawah undang-undang, dan memberikan pertimbangan hukum kepada lembaga negara lainnya.',
      },
      {
        question: 'Bagaimana struktur peradilan di Indonesia?',
        answer: 'Struktur peradilan di Indonesia terdiri dari 4 lingkungan peradilan: Peradilan Umum (perkara pidana dan perdata), Peradilan Agama (perkara keluarga Islam), Peradilan Militer (perkara militer), dan Peradilan Tata Usaha Negara (sengketa administrasi pemerintahan).',
      },
    ],
  },
  {
    name: 'Cara Mencari Putusan',
    faqs: [
      {
        question: 'Bagaimana cara mencari putusan pengadilan?',
        answer: 'Anda dapat mencari putusan melalui menu "Perkara" di halaman utama. Masukkan kata kunci seperti nomor perkara, nama pihak, atau pilih filter jenis perkara dan tahun. Sistem akan menampilkan hasil yang sesuai dengan pencarian Anda.',
      },
      {
        question: 'Apakah semua putusan tersedia secara online?',
        answer: 'Saat ini sebagian besar putusan dari tahun 2010 ke atas telah tersedia secara online. Untuk putusan yang lebih lama, Anda dapat menghubungi pengadilan terkait atau mengajukan permohonan resmi.',
      },
      {
        question: 'Bagaimana cara mengunduh salinan putusan?',
        answer: 'Setelah menemukan putusan yang Anda cari, klik tombol "Lihat Detail" kemudian pilih opsi "Unduh PDF". Salinan putusan yang diunduh dari sistem ini bukan merupakan salinan resmi berkekuatan hukum.',
      },
    ],
  },
  {
    name: 'Prosedur Sidang & Perkara',
    faqs: [
      {
        question: 'Apa itu kasasi?',
        answer: 'Kasasi adalah upaya hukum yang dapat dilakukan terhadap putusan pengadilan tingkat banding atau tingkat pertama yang memutus pada tingkat terakhir. Kasasi diajukan kepada Mahkamah Agung dengan alasan-alasan tertentu yang diatur dalam undang-undang.',
      },
      {
        question: 'Apa perbedaan antara banding dan kasasi?',
        answer: 'Banding adalah upaya hukum terhadap putusan pengadilan tingkat pertama yang diajukan ke Pengadilan Tinggi. Sedangkan kasasi adalah upaya hukum terhadap putusan tingkat banding atau putusan terakhir yang diajukan ke Mahkamah Agung. Kasasi hanya memeriksa penerapan hukum, bukan fakta.',
      },
      {
        question: 'Bagaimana cara mengecek status perkara saya?',
        answer: 'Anda dapat mengecek status perkara melalui menu "Cek Status Perkara" di halaman utama. Masukkan nomor perkara atau informasi yang diminta. Sistem akan menampilkan informasi tahapan perkara, jadwal sidang, dan status terkini.',
      },
    ],
  },
  {
    name: 'Layanan Kepaniteraan',
    faqs: [
      {
        question: 'Apa itu layanan kepaniteraan?',
        answer: 'Layanan kepaniteraan adalah layanan administrasi peradilan yang meliputi penerimaan perkara, pendaftaran, penyimpanan berkas, hingga penerbitan salinan putusan. Kepaniteraan adalah bagian penting yang mendukung kelancaran proses peradilan.',
      },
      {
        question: 'Bagaimana cara mendaftarkan perkara baru?',
        answer: 'Untuk mendaftarkan perkara baru, Anda perlu datang ke kepaniteraan pengadilan yang berwenang dengan membawa dokumen persyaratan lengkap. Beberapa pengadilan juga sudah menyediakan layanan pendaftaran online (e-Court).',
      },
    ],
  },
  {
    name: 'Kontak & Lokasi',
    faqs: [
      {
        question: 'Bagaimana cara menghubungi Mahkamah Agung?',
        answer: 'Anda dapat menghubungi Mahkamah Agung melalui telepon di (021) 384 3348, email info@mahkamahagung.go.id, atau datang langsung ke kantor di Jl. Medan Merdeka Utara No. 9-13, Jakarta Pusat 10110.',
      },
      {
        question: 'Apakah ada layanan pengaduan?',
        answer: 'Ya, Mahkamah Agung menyediakan layanan pengaduan masyarakat yang dapat diakses melalui website resmi atau datang langsung ke kantor. Pengaduan dapat berupa keluhan terhadap layanan peradilan atau dugaan pelanggaran kode etik hakim.',
      },
    ],
  },
];

const glossary = [
  { term: 'Kasasi', definition: 'Upaya hukum terhadap putusan pengadilan yang sudah berkekuatan hukum tetap, diajukan ke Mahkamah Agung.' },
  { term: 'Banding', definition: 'Upaya hukum terhadap putusan pengadilan tingkat pertama, diajukan ke Pengadilan Tinggi.' },
  { term: 'Peninjauan Kembali (PK)', definition: 'Upaya hukum luar biasa terhadap putusan yang telah berkekuatan hukum tetap karena adanya bukti baru (novum).' },
  { term: 'Putusan Verstek', definition: 'Putusan yang dijatuhkan tanpa hadirnya pihak tergugat meskipun telah dipanggil secara sah.' },
  { term: 'Eksekusi', definition: 'Pelaksanaan putusan pengadilan yang telah berkekuatan hukum tetap secara paksa.' },
  { term: 'Praperadilan', definition: 'Lembaga yang memeriksa sah tidaknya penangkapan, penahanan, penghentian penyidikan, atau penghentian penuntutan.' },
  { term: 'Gugatan', definition: 'Tuntutan hak dalam perkara perdata yang diajukan oleh penggugat kepada tergugat melalui pengadilan.' },
  { term: 'Tuntutan', definition: 'Permintaan jaksa penuntut umum kepada hakim dalam perkara pidana untuk menjatuhkan hukuman tertentu.' },
];

export function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = categories[activeCategory].faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F2F2F2] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2">
            FAQ & Panduan Pengguna
          </h1>
          <div className="h-1 w-24 bg-[#C9A84C] mb-4 rounded-full"></div>
          <p className="text-[#4A4A4A]">
            Temukan jawaban atas pertanyaan umum dan pelajari istilah hukum dengan mudah
          </p>
        </div>

        {/* Search FAQ */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border-2 border-gray-100">
          <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
            Cari Pertanyaan
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A8A]" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ketik pertanyaan Anda..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-[#C9A84C] text-[#1A1A1A] placeholder:text-[#8A8A8A]"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border-2 border-gray-100">
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCategory(index);
                  setSearchQuery('');
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === index
                    ? 'bg-[#C9A84C] text-[#1E3A2F]'
                    : 'bg-[#F9F3E3] text-[#1E3A2F] hover:bg-[#E8C96A]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <Accordion.Root type="single" collapsible className="space-y-3">
            {filteredFAQs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#C9A84C] transition-colors"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-4 hover:bg-[#F9F3E3] transition-colors group">
                    <span className="font-medium text-[#1A1A1A] text-left">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className="text-[#C9A84C] transition-transform group-data-[state=open]:rotate-180"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                  <div className="p-4 pt-0 text-[#4A4A4A] leading-relaxed">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-[#F9F3E3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={40} className="text-[#A8852A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                Tidak ditemukan pertanyaan
              </h3>
              <p className="text-[#4A4A4A]">
                Coba ubah kata kunci pencarian Anda
              </p>
            </div>
          )}
        </div>

        {/* Glossary Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#F9F3E3] p-3 rounded-full">
              <BookOpen className="text-[#A8852A]" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                Glosarium Istilah Hukum
              </h2>
              <p className="text-sm text-[#4A4A4A]">
                Penjelasan singkat istilah hukum dalam bahasa sehari-hari
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {glossary.map((item, index) => (
              <div
                key={index}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-[#C9A84C] hover:bg-[#F9F3E3] transition-all"
              >
                <h3 className="font-semibold text-[#C9A84C] mb-2">
                  {item.term}
                </h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
