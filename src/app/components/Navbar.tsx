import {
  List,
  X,
  ArrowSquareOut,
  CaretDown,
  BookOpen,
  Scales,
  FileMagnifyingGlass,
  SquaresFour,
  Users,
  Newspaper,
  Megaphone,
  ClipboardText,
  Bell,
  Buildings,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

const digitalServices = [
  {
    name: "Direktori Putusan",
    desc: "Akses jutaan putusan di seluruh Indonesia",
    href: "https://putusan3.mahkamahagung.go.id",
    icon: BookOpen,
  },
  {
    name: "e-Court",
    desc: "Pendaftaran perkara secara online",
    href: "https://ecourt.mahkamahagung.go.id",
    icon: Scales,
  },
  {
    name: "Cek Status Perkara",
    desc: "Lacak perkembangan perkara Anda",
    href: "https://sipp.pn-jakartapusat.go.id",
    icon: FileMagnifyingGlass,
  },
  {
    name: "SIPP",
    desc: "Sistem Informasi Penelusuran Perkara",
    href: "https://sipp.mahkamahagung.go.id",
    icon: SquaresFour,
  },
  {
    name: "e-Berpadu",
    desc: "Layanan terintegrasi untuk advokat",
    href: "https://eberpadu.mahkamahagung.go.id",
    icon: Users,
  },
];

const informasiItems = [
  { name: "Profil MA", path: "/profil", icon: Buildings },
  { name: "Artikel", path: "/id/artikel", icon: Newspaper },
  { name: "Berita", path: "/id/berita", icon: Megaphone },
  { name: "Kebijakan", path: "/id/keputusan", icon: ClipboardText },
  { name: "Pengumuman", path: "/id/pengumuman", icon: Bell },
];

const tentangItems = [
  { name: "Profil & Sejarah", path: "/profil" },
  { name: "Struktur Organisasi", path: "/struktur" },
  { name: "Pimpinan MA", path: "/pimpinan" },
  { name: "Hakim Agung", path: "/hakim" },
  { name: "Visi & Misi", path: "/visi-misi" },
];

const navStyle = {
  linkBase: {
    fontFamily: "'DM Sans', sans-serif" as const,
    fontSize: "12px",
    fontWeight: "500" as const,
    letterSpacing: "0.07em",
    textTransform: "uppercase" as const,
    textDecoration: "none",
    padding: "0 15px",
    height: "72px",
    display: "flex",
    alignItems: "center" as const,
    borderBottom: "3px solid transparent",
    marginBottom: "-3px",
    transition: "all 0.15s",
  },
  dropdownMenu: {
    position: "absolute" as const,
    top: "100%",
    background: "var(--ma-green-medium)",
    border: "1px solid rgba(201,168,76,0.2)",
    borderTop: "2px solid var(--ma-gold)" as const,
    minWidth: "220px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
    zIndex: 50,
  },
  dropdownItem: {
    display: "flex",
    alignItems: "center" as const,
    gap: "10px",
    padding: "11px 18px",
    textDecoration: "none",
    fontFamily: "'DM Sans', sans-serif" as const,
    fontSize: "12px",
    color: "rgba(255,255,255,0.7)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    borderLeft: "3px solid transparent",
    transition: "all 0.15s",
  },
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [layananOpen, setLayananOpen] = useState(false);
  const [informasiOpen, setInformasiOpen] = useState(false);
  const [tentangOpen, setTentangOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const hoverOn = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.background = "rgba(201,168,76,0.1)";
    e.currentTarget.style.borderLeftColor = "var(--ma-gold)";
    (e.currentTarget.style as any).color = "#fff";
  };
  const hoverOff = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.borderLeftColor = "transparent";
    (e.currentTarget.style as any).color = "rgba(255,255,255,0.7)";
  };

  return (
    <>

      {/* Main nav */}
      <nav
        style={{
          background: "var(--ma-green)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          borderBottom: "3px solid var(--ma-gold)",
          boxShadow: "0 2px 24px rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "72px",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "var(--ma-gold-soft)",
                border: "2px solid var(--ma-gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              <img
                src="/src/imports/image.png"
                alt="MA Logo"
                style={{ width: "36px", height: "36px", objectFit: "contain" }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "13.5px",
                  fontWeight: "700",
                  color: "var(--ma-gold-light)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Mahkamah Agung
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: "1px",
                }}
              >
                Republik Indonesia
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div
            className="hidden lg:flex"
            style={{ alignItems: "center", height: "72px" }}
          >
            {[
              { label: "Beranda", path: "/" },
              { label: "Perkara", path: "/perkara" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  ...navStyle.linkBase,
                  color: isActive(link.path)
                    ? "var(--ma-gold-light)"
                    : "rgba(255,255,255,0.78)",
                  borderBottomColor: isActive(link.path)
                    ? "var(--ma-gold)"
                    : "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}


            {/* Informasi */}
            <div
              style={{
                position: "relative",
                height: "72px",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={() => setInformasiOpen(true)}
              onMouseLeave={() => setInformasiOpen(false)}
            >
              <button
                style={{
                  ...navStyle.linkBase,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.78)",
                  gap: "4px",
                }}
              >
                Informasi{" "}
                <CaretDown
                  size={11}
                  style={{
                    transform: informasiOpen ? "rotate(180deg)" : "",
                    transition: "transform 0.2s",
                  }}
                />
              </button>
              {informasiOpen && (
                <div style={{ ...navStyle.dropdownMenu, left: 0 }}>
                  {informasiItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        style={navStyle.dropdownItem}
                        onMouseEnter={hoverOn}
                        onMouseLeave={hoverOff}
                      >
                        <Icon
                          size={13}
                          style={{ color: "var(--ma-gold)", flexShrink: 0 }}
                        />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              to="/faq"
              style={{
                ...navStyle.linkBase,
                color: isActive("/faq")
                  ? "var(--ma-gold-light)"
                  : "rgba(255,255,255,0.78)",
                borderBottomColor: isActive("/faq")
                  ? "var(--ma-gold)"
                  : "transparent",
              }}
            >
              FAQ
            </Link>

            {/* Layanan Digital */}
            <div
              style={{
                position: "relative",
                height: "72px",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={() => setLayananOpen(true)}
              onMouseLeave={() => setLayananOpen(false)}
            >
              <button
                style={{
                  ...navStyle.linkBase,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.78)",
                  gap: "4px",
                }}
              >
                Layanan Digital{" "}
                <CaretDown
                  size={11}
                  style={{
                    transform: layananOpen ? "rotate(180deg)" : "",
                    transition: "transform 0.2s",
                  }}
                />
              </button>
              {layananOpen && (
                <div
                  style={{
                    ...navStyle.dropdownMenu,
                    right: 0,
                    minWidth: "280px",
                  }}
                >
                  {digitalServices.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px 18px",
                          textDecoration: "none",
                          borderBottom: "1px solid rgba(255,255,255,0.06)",
                          borderLeft: "3px solid transparent",
                          transition: "all 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(201,168,76,0.1)";
                          e.currentTarget.style.borderLeftColor =
                            "var(--ma-gold)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.borderLeftColor = "transparent";
                        }}
                      >
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            background: "rgba(201,168,76,0.08)",
                            border: "1px solid rgba(201,168,76,0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Icon
                            size={15}
                            style={{ color: "var(--ma-gold-light)" }}
                          />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontSize: "12px",
                              fontWeight: "500",
                              color: "rgba(255,255,255,0.85)",
                            }}
                          >
                            {s.name}
                          </div>
                          <div
                            style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontSize: "10px",
                              color: "rgba(255,255,255,0.35)",
                              marginTop: "1px",
                            }}
                          >
                            {s.desc}
                          </div>
                        </div>
                        <ArrowSquareOut
                          size={11}
                          style={{
                            color: "rgba(255,255,255,0.25)",
                            flexShrink: 0,
                          }}
                        />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Search CTA */}
            <button
              style={{
                background: "var(--ma-gold)",
                color: "var(--ma-green-dark)",
                border: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "0 18px",
                height: "40px",
                marginLeft: "10px",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--ma-gold-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--ma-gold)")
              }
            >
              <MagnifyingGlass size={13} /> Cari
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              padding: "8px",
            }}
            className="flex lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              borderTop: "1px solid rgba(201,168,76,0.2)",
              maxHeight: "calc(100vh - 72px)",
              overflowY: "auto",
            }}
          >
            {[
              { label: "Beranda", path: "/" },
              { label: "Perkara", path: "/perkara" },
              { label: "FAQ", path: "/faq" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 24px",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: isActive(link.path)
                    ? "var(--ma-gold-light)"
                    : "rgba(255,255,255,0.8)",
                  borderLeft: `3px solid ${isActive(link.path) ? "var(--ma-gold)" : "transparent"}`,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div
              style={{
                padding: "10px 24px 5px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "9px",
                fontWeight: "700",
                color: "var(--ma-gold)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                marginTop: "4px",
              }}
            >
              Layanan Digital
            </div>
            {digitalServices.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 24px 12px 28px",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.65)",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {s.name}{" "}
                <ArrowSquareOut size={12} style={{ color: "var(--ma-gold)" }} />
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
