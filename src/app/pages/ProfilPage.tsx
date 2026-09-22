import {
  Scales,
  Buildings,
  Target,
  Flag,
  Users,
  Gavel,
  BookOpen,
  Briefcase,
} from "@phosphor-icons/react";

import ketuaMa from "../../imports/pimpinan/ketua-ma.webp";
import sekretarisMa from "../../imports/pimpinan/sekretaris-ma.webp";
import paniteraMa from "../../imports/pimpinan/panitera-ma.webp";

const pimpinan = [
  {
    photo: ketuaMa,
    name: "Prof. Dr. H. Sunarto, S.H., M.H.",
    title: "Ketua Mahkamah Agung RI",
  },
  {
    photo: sekretarisMa,
    name: "Sugiyanto, S.H., M.H.",
    title: "Sekretaris Mahkamah Agung RI",
  },
  {
    photo: paniteraMa,
    name: "Dr. Sudharmawatiningsih, S.H., M.Hum.",
    title: "Panitera Mahkamah Agung RI",
  },
];

const kewenangan = [
  {
    icon: Gavel,
    title: "Kasasi",
    description:
      "Memeriksa dan memutus permohonan kasasi terhadap putusan pengadilan tingkat banding atau tingkat terakhir dari semua lingkungan peradilan.",
  },
  {
    icon: BookOpen,
    title: "Judicial Review",
    description:
      "Menguji peraturan perundang-undangan di bawah undang-undang terhadap undang-undang (hak uji materiil).",
  },
  {
    icon: Scales,
    title: "Peninjauan Kembali",
    description:
      "Memeriksa permohonan peninjauan kembali (PK) atas putusan pengadilan yang telah berkekuatan hukum tetap.",
  },
  {
    icon: Briefcase,
    title: "Pengawasan",
    description:
      "Melakukan pengawasan tertinggi terhadap penyelenggaraan peradilan di seluruh lingkungan peradilan di Indonesia.",
  },
];

const lingkunganPeradilan = [
  { name: "Peradilan Umum", desc: "Perkara pidana dan perdata masyarakat sipil" },
  { name: "Peradilan Agama", desc: "Perkara keluarga dan waris bagi warga negara beragama Islam" },
  { name: "Peradilan Militer", desc: "Perkara pidana yang melibatkan anggota militer" },
  { name: "Peradilan Tata Usaha Negara", desc: "Sengketa administrasi antara warga dan pejabat pemerintahan" },
];

const misi = [
  "Menjaga kemandirian badan peradilan dari campur tangan pihak luar.",
  "Memberikan pelayanan hukum yang berkeadilan kepada pencari keadilan.",
  "Meningkatkan kualitas kepemimpinan badan peradilan.",
  "Meningkatkan kredibilitas dan transparansi badan peradilan.",
];

export function ProfilPage() {
  return (
    <div className="min-h-screen bg-[var(--ma-bg)] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-[var(--ma-title)]">
            Profil Mahkamah Agung Republik Indonesia
          </h1>
          <div className="mb-4 h-1 w-24 rounded-full bg-[var(--ma-gold)]"></div>
          <p className="text-[var(--ma-text)]">
            Kedudukan, kewenangan, visi, dan misi lembaga tinggi negara pemegang
            kekuasaan kehakiman di Indonesia.
          </p>
        </div>

        {/* Kedudukan */}
        <div className="mb-8 rounded-xl border-2 border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-full bg-[var(--ma-gold-soft)] p-3">
              <Buildings className="text-[var(--ma-gold-dark)]" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-[var(--ma-title)]">
              Kedudukan
            </h2>
          </div>
          <p className="leading-relaxed text-[var(--ma-text)]">
            Mahkamah Agung (MA) adalah lembaga tinggi negara yang memegang
            kekuasaan kehakiman bersama-sama dengan Mahkamah Konstitusi,
            sebagaimana diatur dalam Pasal 24 Undang-Undang Dasar Negara
            Republik Indonesia Tahun 1945. MA merupakan pengadilan negara
            tertinggi dari empat lingkungan peradilan di bawahnya, yang
            menjalankan kekuasaan kehakiman secara merdeka untuk
            menyelenggarakan peradilan guna menegakkan hukum dan keadilan.
          </p>
        </div>

        {/* Pimpinan */}
        <div className="mb-8 rounded-xl border-2 border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-full bg-[var(--ma-gold-soft)] p-3">
              <Users className="text-[var(--ma-gold-dark)]" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--ma-title)]">
                Pimpinan
              </h2>
              <p className="text-sm text-[var(--ma-text)]">
                Jajaran pimpinan Mahkamah Agung Republik Indonesia
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {pimpinan.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg border-2 border-gray-200 text-center transition-all hover:border-[var(--ma-gold)]"
              >
                <img
                  src={item.photo}
                  alt={item.name}
                  className="aspect-square w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-[var(--ma-title)]">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[var(--ma-text)]">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border-2 border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-[var(--ma-gold-soft)] p-3">
                <Target className="text-[var(--ma-gold-dark)]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[var(--ma-title)]">Visi</h2>
            </div>
            <p className="leading-relaxed text-[var(--ma-text)]">
              "Terwujudnya Badan Peradilan Indonesia yang Agung."
            </p>
          </div>

          <div className="rounded-xl border-2 border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-[var(--ma-gold-soft)] p-3">
                <Flag className="text-[var(--ma-gold-dark)]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[var(--ma-title)]">Misi</h2>
            </div>
            <ul className="space-y-2">
              {misi.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-2 leading-relaxed text-[var(--ma-text)]"
                >
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--ma-gold)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kewenangan */}
        <div className="mb-8 rounded-xl border-2 border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-full bg-[var(--ma-gold-soft)] p-3">
              <Scales className="text-[var(--ma-gold-dark)]" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--ma-title)]">
                Tugas & Kewenangan
              </h2>
              <p className="text-sm text-[var(--ma-text)]">
                Empat fungsi utama Mahkamah Agung dalam sistem peradilan
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kewenangan.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-lg border-2 border-gray-200 p-4 transition-all hover:border-[var(--ma-gold)] hover:bg-[var(--ma-gold-soft)]"
                >
                  <Icon className="mb-3 text-[var(--ma-gold-dark)]" size={28} />
                  <h3 className="mb-1 font-semibold text-[var(--ma-title)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--ma-text)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lingkungan Peradilan */}
        <div className="rounded-xl border-2 border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-full bg-[var(--ma-gold-soft)] p-3">
              <Users className="text-[var(--ma-gold-dark)]" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--ma-title)]">
                Empat Lingkungan Peradilan
              </h2>
              <p className="text-sm text-[var(--ma-text)]">
                Badan peradilan yang berada di bawah pembinaan Mahkamah Agung
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {lingkunganPeradilan.map((item, i) => (
              <div
                key={i}
                className="rounded-lg border-2 border-gray-200 p-4 transition-all hover:border-[var(--ma-gold)] hover:bg-[var(--ma-gold-soft)]"
              >
                <h3 className="mb-1 font-semibold text-[var(--ma-title)]">
                  {item.name}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--ma-text)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
