import { Home, Search, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 bg-[var(--ma-bg)]">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[var(--ma-gold)] mb-4">404</h1>
          <h2 className="text-3xl font-bold text-[var(--ma-title)] mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-lg text-[var(--ma-text)] mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah
            dipindahkan.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 bg-[var(--ma-gold)] text-[var(--ma-green)] px-6 py-3 rounded-lg hover:bg-[var(--ma-gold-dark)] transition-colors font-medium"
          >
            <Home size={20} />
            Kembali ke Beranda
          </button>
          <button
            onClick={() => navigate("/perkara")}
            className="flex items-center justify-center gap-2 bg-white text-[var(--ma-green)] border-2 border-[var(--ma-green-medium)] px-6 py-3 rounded-lg hover:bg-[var(--ma-green-soft)] transition-colors font-medium"
          >
            <Search size={20} />
            Cari Putusan
          </button>
          <button
            onClick={() => navigate("/faq")}
            className="flex items-center justify-center gap-2 bg-white text-[var(--ma-green)] border-2 border-[var(--ma-green-medium)] px-6 py-3 rounded-lg hover:bg-[var(--ma-green-soft)] transition-colors font-medium"
          >
            <HelpCircle size={20} />
            Bantuan & FAQ
          </button>
        </div>

        {/* Helpful Tips */}
        <div className="mt-12 bg-white rounded-xl p-6 border-2 border-gray-100">
          <h3 className="font-semibold text-[var(--ma-title)] mb-4">
            Saran untuk Anda:
          </h3>
          <ul className="text-left text-[var(--ma-text)] space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[var(--ma-gold)] mt-1">•</span>
              <span>Pastikan alamat URL yang Anda masukkan sudah benar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--ma-gold)] mt-1">•</span>
              <span>
                Gunakan menu navigasi di atas untuk menemukan halaman yang Anda
                butuhkan
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--ma-gold)] mt-1">•</span>
              <span>
                Coba gunakan fitur pencarian untuk menemukan informasi yang Anda
                cari
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--ma-gold)] mt-1">•</span>
              <span>
                Jika masalah berlanjut, silakan hubungi kami melalui halaman
                kontak
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
