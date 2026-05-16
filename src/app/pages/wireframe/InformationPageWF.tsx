import "../../../styles/wireframe.css";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router";

function WFTopBar() {
  const loc = useLocation();
  return (
    <div className="wf-topbar">
      <span className="wf-topbar-label">📐 Wireframe Mode</span>
      <Link to="/wireframe" className={`wf-topbar-link ${loc.pathname === "/wireframe" ? "active" : ""}`}>Beranda</Link>
      <Link to="/wireframe/perkara" className={`wf-topbar-link ${loc.pathname === "/wireframe/perkara" ? "active" : ""}`}>Perkara</Link>
      <Link to="/wireframe/faq" className={`wf-topbar-link ${loc.pathname === "/wireframe/faq" ? "active" : ""}`}>FAQ</Link>
      <Link to="/wireframe/informasi/berita" className={`wf-topbar-link ${loc.pathname.includes("informasi") ? "active" : ""}`}>Informasi</Link>
      <div style={{ marginLeft: "auto" }}>
        <Link to="/" className="wf-topbar-link">→ Lihat Visual Design</Link>
      </div>
    </div>
  );
}

export function InformationPageWF() {
  const { category = "berita" } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const categories = [
    { id: "artikel", label: "Artikel" },
    { id: "berita", label: "Berita" },
    { id: "keputusan", label: "Kebijakan" },
    { id: "pengumuman", label: "Pengumuman" },
  ];

  const currentCategory = categories.find(c => c.id === category) || categories[1];

  return (
    <div className="wf-root">
      <WFTopBar />

      {/* ─── NAVBAR ─── */}
      <div className="wf-navbar">
        <div className="wf-navbar-logo">[ Logo MA ]</div>
        <div className="wf-navbar-links">
          {["Beranda", "Perkara", "Informasi ▾", "FAQ", "Layanan Digital ▾"].map(l => (
            <div key={l} className="wf-navbar-link" style={l === "Informasi ▾" ? { background: "#9E9E9E", color: "#fff" } : {}}>{l}</div>
          ))}
        </div>
        <div className="wf-navbar-cta">🔍 Cari</div>
      </div>

      {/* ─── BREADCRUMB ─── */}
      <div style={{ background: "#E0E0E0", borderBottom: "1px solid #CCCCCC", padding: "8px 32px" }}>
        <span style={{ fontSize: 11, color: "#888" }}>Beranda › Informasi › {currentCategory.label}</span>
      </div>

      {/* ─── PAGE HEADER ─── */}
      <div style={{ background: "#C0C0C0", borderBottom: "2px solid #AAAAAA", padding: "40px 32px" }}>
        <div className="wf-section-label-box">Section 1 — Header Informasi</div>
        <div className="wf-h1">{currentCategory.label} Terbaru</div>
        <div className="wf-block" style={{ height: 24, maxWidth: 600, marginTop: 12, fontSize: 10 }}>
          Pusat informasi resmi {currentCategory.label.toLowerCase()} Mahkamah Agung Republik Indonesia.
        </div>
      </div>

      <div className="wf-section">
        {/* TABS / CATEGORY SWITCHER */}
        <div className="wf-tabs" style={{ marginBottom: 28 }}>
          {categories.map(cat => (
            <Link 
              key={cat.id} 
              to={`/wireframe/informasi/${cat.id}`}
              className={`wf-tab ${category === cat.id ? "wf-tab-active" : ""}`}
              style={{ textDecoration: "none" }}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="wf-section-label-box">Section 2 — Filter & Pencarian</div>
        <div className="wf-card" style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 32, alignItems: "flex-end" }}>
          <div style={{ flex: 2, minWidth: 200 }}>
            <div className="wf-label">Cari {currentCategory.label}</div>
            <div className="wf-block" style={{ height: 40, justifyContent: "flex-start", paddingLeft: 12 }}>
              <span style={{ color: "#888", fontSize: 11 }}>🔍 Masukkan kata kunci...</span>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 140 }}>
            <div className="wf-label">Dari Tanggal</div>
            <div className="wf-block" style={{ height: 40, justifyContent: "flex-start", paddingLeft: 12, fontSize: 10 }}>📅 dd/mm/yyyy</div>
          </div>
          <div style={{ flex: 1, minWidth: 140 }}>
            <div className="wf-label">Sampai Tanggal</div>
            <div className="wf-block" style={{ height: 40, justifyContent: "flex-start", paddingLeft: 12, fontSize: 10 }}>📅 dd/mm/yyyy</div>
          </div>
          <div className="wf-btn">Terapkan Filter</div>
        </div>

        {/* CONTENT LIST */}
        <div className="wf-section-label-box">Section 3 — Daftar {currentCategory.label}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="wf-card" style={{ flexDirection: "row", gap: 20, padding: "20px" }}>
              <div className="wf-block-img" style={{ width: 240, height: 160, flexShrink: 0 }}>[ Image / Thumbnail ]</div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div className="wf-badge">{currentCategory.label}</div>
                  <span style={{ fontSize: 11, color: "#888" }}>📅 {i + 10} Mei 2026</span>
                </div>
                <div className="wf-h3" style={{ fontSize: "1.2rem" }}>Judul {currentCategory.label} ke-{i} yang Sangat Penting dan Informatif</div>
                <div className="wf-block" style={{ height: 48, fontSize: 10 }}>
                  Ringkasan isi {currentCategory.label.toLowerCase()} yang memberikan gambaran singkat tentang topik yang dibahas. Ini adalah cuplikan teks untuk membantu pengguna memahami konten sebelum membaca selengkapnya.
                </div>
                <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div className="wf-btn-sm">Baca Selengkapnya →</div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <div className="wf-card-icon" style={{ width: 24, height: 24 }} />
                    <div className="wf-card-icon" style={{ width: 24, height: 24 }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 40 }}>
          <div className="wf-btn-sm">«</div>
          <div className="wf-btn-sm" style={{ background: "#888", color: "#fff" }}>1</div>
          <div className="wf-btn-sm">2</div>
          <div className="wf-btn-sm">3</div>
          <div className="wf-btn-sm">»</div>
        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <div className="wf-footer-full">
        <div className="wf-footer">
          <div><div className="wf-label">Tentang MA</div><div className="wf-block" style={{ height: 60, fontSize: 9 }}>Logo + Deskripsi</div></div>
          <div><div className="wf-label">Tautan Cepat</div>{["Beranda", "Perkara", "FAQ"].map(l => <div key={l} className="wf-block" style={{ height: 22, marginBottom: 4, fontSize: 10, justifyContent: "flex-start", paddingLeft: 8 }}>{l}</div>)}</div>
          <div><div className="wf-label">Layanan Digital</div>{["Direktori Putusan", "e-Court", "SIPP"].map(l => <div key={l} className="wf-block" style={{ height: 22, marginBottom: 4, fontSize: 10, justifyContent: "flex-start", paddingLeft: 8 }}>{l} ↗</div>)}</div>
          <div><div className="wf-label">Kontak</div><div className="wf-block" style={{ height: 60, fontSize: 9 }}>Alamat, Telepon, Email</div></div>
        </div>
        <div className="wf-footer-copy">© 2026 Mahkamah Agung Republik Indonesia</div>
      </div>
    </div>
  );
}
