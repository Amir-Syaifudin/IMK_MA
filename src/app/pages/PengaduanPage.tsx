import {
  Scales,
  ShieldWarning,
  PaperPlaneTilt,
  CheckCircle,
  ArrowSquareOut,
} from "@phosphor-icons/react";
import { useState, type FormEvent } from "react";

const kategoriPengaduan = [
  {
    icon: Scales,
    title: "Pengaduan Layanan Peradilan",
    description:
      "Keluhan terkait pelayanan administrasi perkara, kelambatan proses, atau pelayanan petugas pengadilan yang tidak sesuai standar.",
  },
  {
    icon: ShieldWarning,
    title: "Pengaduan Kode Etik Hakim",
    description:
      "Dugaan pelanggaran kode etik dan pedoman perilaku hakim, termasuk indikasi penyalahgunaan wewenang dalam proses peradilan.",
  },
];

const jenisOptions = [
  "Layanan Peradilan",
  "Kode Etik Hakim",
  "Lainnya",
];

export function PengaduanPage() {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [anonim, setAnonim] = useState(false);
  const [jenisPengaduan, setJenisPengaduan] = useState("");
  const [instansiTerkait, setInstansiTerkait] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!jenisPengaduan || !deskripsi.trim()) {
      setError("Jenis pengaduan dan deskripsi wajib diisi.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  function handleAjukanLagi() {
    setSubmitted(false);
    setNamaLengkap("");
    setAnonim(false);
    setJenisPengaduan("");
    setInstansiTerkait("");
    setDeskripsi("");
  }

  return (
    <div className="min-h-screen bg-[var(--ma-bg)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[var(--ma-title)] mb-2">
            Kanal Pengaduan
          </h1>
          <div className="h-1 w-24 bg-[var(--ma-gold)] mb-4 rounded-full"></div>
          <p className="text-[var(--ma-text)] max-w-3xl">
            Mahkamah Agung berkomitmen menjaga akuntabilitas dan transparansi
            peradilan. Sampaikan pengaduan terkait layanan peradilan atau
            dugaan pelanggaran kode etik hakim melalui kanal resmi di bawah
            ini.
          </p>
        </div>

        {/* Kategori Pengaduan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {kategoriPengaduan.map((kategori) => {
            const Icon = kategori.icon;
            return (
              <div
                key={kategori.title}
                className="bg-white rounded-xl shadow-sm p-6 border-2 border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[var(--ma-gold-soft)] p-3 rounded-full">
                    <Icon className="text-[var(--ma-gold-dark)]" size={22} />
                  </div>
                  <h3 className="font-semibold text-[var(--ma-title)]">
                    {kategori.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--ma-text)] leading-relaxed">
                  {kategori.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Form / Konfirmasi */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-gray-100 mb-8">
          {!submitted ? (
            <>
              <h2 className="text-xl font-bold text-[var(--ma-title)] mb-1">
                Ajukan Pengaduan
              </h2>
              <p className="text-sm text-[var(--ma-text-muted)] mb-6">
                Form ini adalah prototipe demo &mdash; pengaduan tidak
                dikirim ke server manapun. Untuk pengaduan resmi, gunakan
                Sistem Informasi Pengawasan (SIWAS) di tautan bawah halaman.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--ma-title)] mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={namaLengkap}
                    onChange={(e) => setNamaLengkap(e.target.value)}
                    disabled={anonim}
                    placeholder="Nama Anda"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--ma-gold)] focus:border-[var(--ma-gold)] text-[var(--ma-title)] placeholder:text-[var(--ma-text-muted)] disabled:bg-gray-50 disabled:text-[var(--ma-text-muted)]"
                  />
                  <label className="flex items-center gap-2 mt-2 text-sm text-[var(--ma-text)]">
                    <input
                      type="checkbox"
                      checked={anonim}
                      onChange={(e) => setAnonim(e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    Kirim sebagai anonim
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--ma-title)] mb-2">
                    Jenis Pengaduan <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={jenisPengaduan}
                    onChange={(e) => setJenisPengaduan(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--ma-gold)] focus:border-[var(--ma-gold)] text-[var(--ma-title)] bg-white"
                  >
                    <option value="">Pilih jenis pengaduan...</option>
                    {jenisOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--ma-title)] mb-2">
                    Pengadilan / Instansi Terkait
                  </label>
                  <input
                    type="text"
                    value={instansiTerkait}
                    onChange={(e) => setInstansiTerkait(e.target.value)}
                    placeholder="Contoh: Pengadilan Negeri Jakarta Pusat"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--ma-gold)] focus:border-[var(--ma-gold)] text-[var(--ma-title)] placeholder:text-[var(--ma-text-muted)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--ma-title)] mb-2">
                    Deskripsi Pengaduan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    rows={5}
                    placeholder="Jelaskan kronologi dan detail pengaduan Anda..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--ma-gold)] focus:border-[var(--ma-gold)] text-[var(--ma-title)] placeholder:text-[var(--ma-text-muted)] resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-[var(--ma-gold)] text-[var(--ma-green)] hover:bg-[var(--ma-gold-light)] transition-colors"
                >
                  <PaperPlaneTilt size={18} />
                  Kirim Pengaduan
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <div className="bg-[var(--ma-green-soft)] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={40} className="text-[var(--ma-green)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--ma-title)] mb-2">
                Pengaduan Tercatat (Mode Demo)
              </h3>
              <p className="text-[var(--ma-text)] max-w-lg mx-auto mb-6">
                Ini adalah prototipe &mdash; pengaduan Anda tidak benar-benar
                terkirim ke server. Untuk pengaduan resmi ke Mahkamah Agung,
                silakan gunakan Sistem Informasi Pengawasan (SIWAS) di tautan
                bawah halaman ini.
              </p>
              <button
                onClick={handleAjukanLagi}
                className="px-6 py-3 rounded-lg font-medium bg-[var(--ma-gold-soft)] text-[var(--ma-green)] hover:bg-[var(--ma-gold-light)] transition-colors"
              >
                Ajukan Pengaduan Lain
              </button>
            </div>
          )}
        </div>

        {/* Kanal Resmi */}
        <div className="bg-[var(--ma-green)] rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold mb-1">
              Untuk pengaduan resmi
            </h3>
            <p className="text-white/70 text-sm max-w-xl">
              Sampaikan pengaduan resmi melalui Sistem Informasi Pengawasan
              (SIWAS) Mahkamah Agung, atau hubungi (021) 384 3348.
            </p>
          </div>
          <a
            href="https://siwas.mahkamahagung.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium bg-[var(--ma-gold)] text-[var(--ma-green)] hover:bg-[var(--ma-gold-light)] transition-colors whitespace-nowrap"
          >
            Buka SIWAS
            <ArrowSquareOut size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
