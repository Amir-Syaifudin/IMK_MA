import {
  FileMagnifyingGlass,
  ClipboardText,
  Phone,
  Flag,
  CalendarBlank,
  FileText,
  Bell,
  ArrowSquareOut,
  BookOpen,
  Scales,
  SquaresFour,
  Users,
} from "@phosphor-icons/react";
import { Link } from "react-router";

import { ServiceCard } from "../components/ServiceCard";
import { NewsCard } from "../components/NewsCard";
import { dummyData, formatIndoDate } from "./InformationPage";

export function Homepage() {
  const heroButtons = [
    {
      icon: FileMagnifyingGlass,
      title: "Cari Putusan",
      description: "Temukan putusan pengadilan dengan mudah",
      to: "/perkara",
    },
    {
      icon: ClipboardText,
      title: "Cek Status Perkara",
      description: "Lacak perkembangan perkara Anda",
      to: "/perkara?tab=status",
    },
    {
      icon: Phone,
      title: "Hubungi Pengadilan",
      description: "Kontak dan informasi pengadilan",
      to: "/kontak",
    },
    {
      icon: Flag,
      title: "Adukan Pelanggaran",
      description: "Sampaikan pengaduan Anda ke Mahkamah Agung",
      to: "/pengaduan",
    },
  ];

  const layananGabungan = [
    {
      icon: BookOpen,
      title: "Direktori Putusan",
      description: "Akses jutaan putusan di seluruh Indonesia",
      link: "https://putusan3.mahkamahagung.go.id",
    },
    {
      icon: Scales,
      title: "e-Court",
      description: "Pendaftaran perkara secara online",
      link: "https://ecourt.mahkamahagung.go.id",
    },
    {
      icon: FileMagnifyingGlass,
      title: "Cek Status Perkara",
      description: "Lacak perkembangan perkara Anda",
      link: "https://sipp.pn-jakartapusat.go.id",
    },
    {
      icon: SquaresFour,
      title: "SIPP",
      description: "Sistem Informasi Penelusuran Perkara",
      link: "https://sipp.mahkamahagung.go.id",
    },
    {
      icon: CalendarBlank,
      title: "Jadwal Sidang",
      description: "Pantau jadwal sidang dan agenda pengadilan",
      link: "/perkara",
    },
    {
      icon: FileText,
      title: "Kepaniteraan",
      description: "Layanan administrasi dan kepaniteraan",
      link: "/kepaniteraan",
    },
    {
      icon: Bell,
      title: "Pengumuman",
      description: "Informasi dan pengumuman penting",
      link: "/pengumuman",
    },
    {
      icon: Users,
      title: "e-Berpadu",
      description: "Layanan terintegrasi untuk advokat",
      link: "https://eberpadu.mahkamahagung.go.id",
    },
  ];

  const beritaTerbaru = dummyData.berita.items
    .slice(0, 3)
    .map((item) => ({
      image: item.image || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      title: item.title,
      date: formatIndoDate(item.date),
      excerpt: item.excerpt,
    }));

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--ma-bg)]">
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/src/imports/ma-bg.jpg')",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Layer 1: dark green base */}
          <div className="absolute inset-0 bg-[var(--ma-green-dark)]/85" />
          {/* Layer 2: gold shimmer top, fade to black bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ma-gold)]/15 via-transparent to-black/80" />
          {/* Layer 3: vignette edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,30,10,0.5)_100%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-1 items-center justify-center">
          <div className="w-full max-w-7xl px-6 py-6 lg:px-8">
            {/* Heading */}
            <div className="mx-auto mb-8 flex max-w-5xl flex-col items-center text-center md:mb-20">
              <h1 className="ma-display mb-4 text-center text-3xl font-extrabold leading-tight tracking-tight text-white md:mb-6 md:text-6xl">
                Mahkamah Agung
                <br /> Republik Indonesia
              </h1>

              <p className="mb-3 text-center text-sm font-black uppercase tracking-[0.1em] text-[var(--ma-gold)] md:text-xl md:tracking-[0.2em]">
                "Menuju Badan Peradilan yang Agung dan Modern"
              </p>

              <p className="ma-serif hidden max-w-3xl text-center text-sm leading-relaxed text-white/85 sm:block md:text-base">
                Lembaga tinggi negara yang memegang kekuasaan kehakiman
                sebagai kekuasaan yang merdeka untuk menyelenggarakan
                peradilan guna menegakkan hukum dan keadilan.
              </p>
            </div>

            {/* Hero Buttons */}
            <div className="mx-auto mb-6 grid w-full max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
              {heroButtons.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    to={item.to}
                    className="group flex h-full flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-3 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--ma-gold)]/60 hover:bg-white/15 hover:shadow-[0_8px_32px_rgba(201,168,76,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ma-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ma-green-dark)] md:p-5"
                  >
                    <div className="mb-2 rounded-xl border border-white/10 bg-white/10 p-3 shadow-lg transition-all duration-300 group-hover:bg-[var(--ma-gold)] md:mb-3 md:p-4">
                      <Icon
                        size={28}
                        className="text-[var(--ma-gold)] transition-colors group-hover:text-[var(--ma-green-dark)]"
                      />
                    </div>

                    <h3 className="ma-display mb-1 text-center text-sm font-bold text-white md:text-base">
                      {item.title}
                    </h3>

                    <p className="hidden max-w-xs text-center text-xs font-medium leading-relaxed text-white/80 md:block">
                      {item.description}
                    </p>
                  </Link>
                );
              })}
            </div>


          </div>
        </div>
      </section>

      {/* LAYANAN DIGITAL & UTAMA */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-8">
        <SectionHeader title="Layanan & Inovasi Digital" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {layananGabungan.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* BERITA */}
      <section className="mx-auto mb-8 max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-4xl font-bold text-[var(--ma-title)]">
              Berita Terbaru
            </h2>

            <div className="mx-auto h-1.5 w-16 rounded-full bg-[var(--ma-gold)] md:mx-0" />
          </div>

          <Link
            to="/id/berita"
            className="group flex items-center gap-3 text-xl font-bold text-[var(--ma-gold)] transition-all hover:text-[var(--ma-gold-dark)]"
          >
            Lihat Semua Berita

            <ArrowSquareOut
              size={24}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {beritaTerbaru.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-16 flex flex-col items-center text-center">
      <h2 className="mb-4 text-4xl font-bold text-[var(--ma-title)]">
        {title}
      </h2>

      <div className="h-1.5 w-24 rounded-full bg-[var(--ma-gold)]" />
    </div>
  );
}