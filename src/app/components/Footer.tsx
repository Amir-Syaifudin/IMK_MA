import {
  Envelope,
  Phone,
  MapPin,
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  YoutubeLogo,
  ArrowSquareOut,
} from "@phosphor-icons/react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[var(--ma-green)] text-white mt-auto border-t-[4px] border-[var(--ma-gold)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* About & Social Media */}
          <div className="lg:col-span-4 pr-4">
            <h3 className="ma-display font-bold text-2xl mb-4 text-[var(--ma-gold)]">
              Mahkamah Agung RI
            </h3>
            <p className="ma-serif text-white/80 text-sm leading-relaxed mb-6">
              Lembaga tinggi negara yang memegang kekuasaan kehakiman sebagai
              kekuasaan yang merdeka untuk menyelenggarakan peradilan guna
              menegakkan hukum dan keadilan.
            </p>
            {/* Social Media moved here */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="bg-white/5 hover:bg-[var(--ma-gold)] p-2.5 rounded-lg transition-all duration-300 hover:text-[var(--ma-green-dark)]"
              >
                <FacebookLogo size={18} />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-[var(--ma-gold)] p-2.5 rounded-lg transition-all duration-300 hover:text-[var(--ma-green-dark)]"
              >
                <TwitterLogo size={18} />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-[var(--ma-gold)] p-2.5 rounded-lg transition-all duration-300 hover:text-[var(--ma-green-dark)]"
              >
                <InstagramLogo size={18} />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-[var(--ma-gold)] p-2.5 rounded-lg transition-all duration-300 hover:text-[var(--ma-green-dark)]"
              >
                <YoutubeLogo size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="ma-display font-semibold text-lg mb-5 text-[var(--ma-gold)]">
              Tautan Cepat
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/perkara"
                  className="text-white/80 text-sm hover:text-[var(--ma-gold)] transition-colors"
                >
                  Perkara
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white/80 text-sm hover:text-[var(--ma-gold)] transition-colors"
                >
                  FAQ &amp; Panduan
                </Link>
              </li>
              <li>
                <Link
                  to="/tentang"
                  className="text-white/80 text-sm hover:text-[var(--ma-gold)] transition-colors"
                >
                  Tentang MA
                </Link>
              </li>
              <li>
                <Link
                  to="/kontak"
                  className="text-white/80 text-sm hover:text-[var(--ma-gold)] transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Layanan Digital */}
          <div className="lg:col-span-3">
            <h3 className="ma-display font-semibold text-lg mb-5 text-[var(--ma-gold)]">
              Layanan Digital
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://putusan3.mahkamahagung.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-white/80 hover:text-[var(--ma-gold)] transition-colors"
                >
                  <ArrowSquareOut
                    size={14}
                    className="mr-2.5 text-[var(--ma-gold)]/60"
                  />{" "}
                  Direktori Putusan
                </a>
              </li>
              <li>
                <a
                  href="https://ecourt.mahkamahagung.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-white/80 hover:text-[var(--ma-gold)] transition-colors"
                >
                  <ArrowSquareOut
                    size={14}
                    className="mr-2.5 text-[var(--ma-gold)]/60"
                  />{" "}
                  e-Court
                </a>
              </li>
              <li>
                <a
                  href="https://sipp.pn-jakartapusat.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-white/80 hover:text-[var(--ma-gold)] transition-colors"
                >
                  <ArrowSquareOut
                    size={14}
                    className="mr-2.5 text-[var(--ma-gold)]/60"
                  />{" "}
                  Cek Status Perkara
                </a>
              </li>
              <li>
                <a
                  href="https://sipp.mahkamahagung.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-white/80 hover:text-[var(--ma-gold)] transition-colors"
                >
                  <ArrowSquareOut
                    size={14}
                    className="mr-2.5 text-[var(--ma-gold)]/60"
                  />{" "}
                  SIPP
                </a>
              </li>
              <li>
                <a
                  href="https://eberpadu.mahkamahagung.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-white/80 hover:text-[var(--ma-gold)] transition-colors"
                >
                  <ArrowSquareOut
                    size={14}
                    className="mr-2.5 text-[var(--ma-gold)]/60"
                  />{" "}
                  e-Berpadu
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Portal Internal */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h3 className="ma-display font-semibold text-lg mb-5 text-[var(--ma-gold)]">
                Kontak Kami
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="mt-0.5 flex-shrink-0 text-[var(--ma-gold)]"
                  />
                  <span className="text-white/80 text-sm leading-relaxed">
                    Jl. Medan Merdeka Utara No. 9-13
                    <br />
                    Jakarta Pusat 10110
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone
                    size={18}
                    className="flex-shrink-0 text-[var(--ma-gold)]"
                  />
                  <span className="text-white/80 text-sm">(021) 384 3348</span>
                </li>
                <li className="flex items-center gap-3">
                  <Envelope
                    size={18}
                    className="flex-shrink-0 text-[var(--ma-gold)]"
                  />
                  <span className="text-white/80 text-sm">
                    info@mahkamahagung.go.id
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} Mahkamah Agung Republik Indonesia.
            Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-[var(--ma-gold)] transition-colors"
            >
              Kebijakan Privasi
            </a>
            <a
              href="#"
              className="hover:text-[var(--ma-gold)] transition-colors"
            >
              Syarat &amp; Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
