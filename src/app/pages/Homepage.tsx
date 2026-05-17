import {
  MagnifyingGlass,
  FileMagnifyingGlass,
  ClipboardText,
  Phone,
  CalendarBlank,
  FileText,
  Bell,
  ArrowSquareOut,
  BookOpen,
  Scales,
  SquaresFour,
  Users,
} from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { ServiceCard } from "../components/ServiceCard";
import { NewsCard } from "../components/NewsCard";

export function Homepage() {
  const navigate = useNavigate();

  const heroButtons = [
    {
      icon: FileMagnifyingGlass,
      title: "Cari Putusan",
      description: "Temukan putusan pengadilan dengan mudah",
      action: () => navigate("/perkara"),
    },
    {
      icon: ClipboardText,
      title: "Cek Status Perkara",
      description: "Lacak perkembangan perkara Anda",
      action: () => navigate("/perkara?tab=status"),
    },
    {
      icon: Phone,
      title: "Hubungi Pengadilan",
      description: "Kontak dan informasi pengadilan",
      action: () => navigate("/kontak"),
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

  const beritaTerbaru = [
    {
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      title:
        "Mahkamah Agung Luncurkan Sistem Digital untuk Transparansi Peradilan",
      date: "15 Mei 2026",
      excerpt:
        "Dalam rangka meningkatkan transparansi dan akuntabilitas, MA meluncurkan platform digital baru yang memudahkan akses masyarakat terhadap informasi peradilan.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80",
      title: "Sosialisasi PERMA Baru tentang Administrasi Perkara",
      date: "12 Mei 2026",
      excerpt:
        "Mahkamah Agung mengadakan sosialisasi PERMA terbaru untuk meningkatkan efisiensi administrasi perkara di seluruh pengadilan.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      title: "Rapat Koordinasi Pengadilan Tinggi se-Indonesia",
      date: "10 Mei 2026",
      excerpt:
        "Ketua MA memimpin rapat koordinasi dengan seluruh Ketua Pengadilan Tinggi untuk evaluasi kinerja dan perencanaan strategis.",
    },
  ];

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
          {/* Layer 2: gold shimmer top, fade to page bg bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ma-gold)]/15 via-transparent to-[var(--ma-bg)]" />
          {/* Layer 3: vignette edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,30,10,0.5)_100%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-1 items-center justify-center">
          <div className="w-full max-w-7xl px-6 py-6 lg:px-8">
            {/* Heading */}
            <div className="mx-auto mb-20 flex max-w-5xl flex-col items-center text-center">
              <h1 className="ma-display mb-6 text-center text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                Portal Mahkamah Agung
              </h1>

              <p className="mb-3 text-center text-base font-black uppercase tracking-[0.2em] text-[var(--ma-gold)] md:text-xl">
                "Menuju Badan Peradilan yang Agung dan Modern"
              </p>

              <p className="ma-serif max-w-3xl text-center text-sm leading-relaxed text-white/85 md:text-base">
                Lembaga tinggi negara yang memegang kekuasaan kehakiman
                sebagai kekuasaan yang merdeka untuk menyelenggarakan
                peradilan guna menegakkan hukum dan keadilan.
              </p>
            </div>

            {/* Hero Buttons */}
            <div className="mx-auto mb-6 grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
              {heroButtons.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.title}
                    onClick={item.action}
                    className="group flex h-full flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--ma-gold)]/60 hover:bg-white/15 hover:shadow-[0_8px_32px_rgba(201,168,76,0.3)]"
                  >
                    <div className="mb-3 rounded-xl border border-white/10 bg-white/10 p-4 shadow-lg transition-all duration-300 group-hover:bg-[var(--ma-gold)]">
                      <Icon
                        size={32}
                        className="text-[var(--ma-gold)] transition-colors group-hover:text-[var(--ma-green-dark)]"
                      />
                    </div>

                    <h3 className="ma-display mb-1 text-center text-base font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="max-w-xs text-center text-xs font-medium leading-relaxed text-white/80">
                      {item.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="mx-auto flex w-full max-w-5xl justify-center">
              <div className="group relative w-full">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[var(--ma-gold)] to-[var(--ma-gold-light)] opacity-25 blur transition duration-1000 group-hover:opacity-50" />

                <form
                  onSubmit={handleSearch}
                  className="relative rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-xl"
                >
                  <div className="flex flex-col gap-2 rounded-xl bg-white/95 p-2 md:flex-row md:items-center">
                    <div className="relative flex-1">
                      <Search
                        size={24}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--ma-text-muted)]"
                      />

                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari putusan, berita, atau informasi lainnya..."
                        className="w-full rounded-lg border-none bg-transparent py-5 pl-14 pr-4 text-lg text-[var(--ma-title)] placeholder:text-[var(--ma-text-muted)] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="min-w-[180px] rounded-xl bg-[var(--ma-gold)] px-10 py-5 text-lg font-bold uppercase tracking-widest text-[var(--ma-green-dark)] shadow-lg transition-all duration-300 hover:bg-[var(--ma-gold-light)] hover:shadow-[0_0_20px_rgba(201,168,76,0.6)]"
                    >
                      Cari
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN DIGITAL & UTAMA */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
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

          <button className="group flex items-center gap-3 text-xl font-bold text-[var(--ma-gold)] transition-all hover:text-[var(--ma-gold-dark)]">
            Lihat Semua Berita

            <ArrowSquareOut
              size={24}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
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