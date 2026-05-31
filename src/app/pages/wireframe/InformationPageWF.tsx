import "../../../styles/wireframe.css";
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
      <Link to="/wireframe/navbar" className={`wf-topbar-link ${loc.pathname === "/wireframe/navbar" ? "active" : ""}`}>Subbab Navigasi</Link>
      <div style={{ marginLeft: "auto" }}>
        <Link to="/" className="wf-topbar-link">→ Lihat Visual Design</Link>
      </div>
    </div>
  );
}

export function InformationPageWF() {
  const { category = "berita" } = useParams();

  const categories = [
    { id: "artikel", label: "Artikel Hukum" },
    { id: "berita", label: "Berita Terkini" },
    { id: "keputusan", label: "Kebijakan & Peraturan" },
    { id: "pengumuman", label: "Pengumuman Resmi" },
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

      <div className="wf-section" style={{ paddingBottom: 40 }}>

        {/* HEADER & FILTER */}
        <div className="wf-section-label-box">Section 1 — Header & Filter</div>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 40, alignItems: "flex-start" }}>

          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div className="wf-block" style={{ width: 64, height: 64, borderRadius: 16, fontSize: 24, flexShrink: 0 }}>

            </div>
            <div>
              <div className="wf-h1" style={{ margin: 0, padding: 0, fontSize: "1.8rem" }}>{currentCategory.label}</div>
              <div style={{ width: 80, height: 4, background: "#888", marginTop: 8, borderRadius: 2 }} />
            </div>
          </div>

          <div className="wf-card" style={{ flexDirection: "row", alignItems: "center", gap: 12, padding: "16px 20px", marginTop: 0 }}>
            <div className="wf-label" style={{ margin: 0 }}>Filter Tanggal:</div>
            <div className="wf-block" style={{ height: 36, padding: "0 12px", width: 140, fontSize: 11, justifyContent: "flex-start" }}>dd/mm/yyyy</div>
            <span style={{ fontSize: 11, color: "#888" }}>s/d</span>
            <div className="wf-block" style={{ height: 36, padding: "0 12px", width: 140, fontSize: 11, justifyContent: "flex-start" }}> dd/mm/yyyy</div>
          </div>
        </div>

        {/* CONTENT LIST */}
        <div className="wf-section-label-box">Section 2 — Daftar {currentCategory.label}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {[1].map(i => (
            <div key={i} className="wf-card" style={{ padding: "32px", alignItems: "flex-start", flexDirection: "column", gap: 0 }}>

              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16, width: "100%" }}>
                <div className="wf-badge" style={{ textTransform: "uppercase" }}>KATEGORI</div>
                <div style={{ fontSize: 12, color: "#888", display: "flex", gap: 6, alignItems: "center" }}>
                  {i + 10} Mei 2026
                </div>
                {i % 2 === 0 && (
                  <div style={{ fontSize: 12, color: "#888", display: "flex", gap: 6, alignItems: "center", marginLeft: "auto" }}>
                    Nama Penulis
                  </div>
                )}
              </div>

              <div className="wf-h3" style={{ fontSize: "1.5rem", marginBottom: 16 }}>Judul {currentCategory.label} </div>

              <div className="wf-block" style={{ height: 48, fontSize: 11, marginBottom: 24, justifyContent: "flex-start", padding: "12px", width: "100%", boxSizing: "border-box" }}>
                Ringkasan isi {currentCategory.label.toLowerCase()} yang memberikan gambaran singkat tentang topik yang dibahas. Ini adalah cuplikan teks untuk membantu pengguna memahami konten sebelum membaca selengkapnya...
              </div>

              <div className="wf-btn-sm" style={{ fontWeight: "bold" }}>Baca Selengkapnya →</div>

            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="wf-section-label-box" style={{ marginTop: 40 }}>Section 3 — Navigasi Halaman</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
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
