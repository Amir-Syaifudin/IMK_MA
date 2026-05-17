import "../../../styles/wireframe.css";
import { Link, useLocation } from "react-router";

function WFTopBar() {
  const loc = useLocation();
  return (
    <div className="wf-topbar">
      <span className="wf-topbar-label"> Wireframe Mode</span>
      <Link to="/wireframe" className={`wf-topbar-link ${loc.pathname === "/wireframe" ? "active" : ""}`}>Beranda</Link>
      <Link to="/wireframe/perkara" className={`wf-topbar-link ${loc.pathname === "/wireframe/perkara" ? "active" : ""}`}>Perkara</Link>
      <Link to="/wireframe/faq" className={`wf-topbar-link ${loc.pathname === "/wireframe/faq" ? "active" : ""}`}>FAQ</Link>
      <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
        <Link to="/" className="wf-topbar-link"> Lihat Visual Design</Link>
      </div>
    </div>
  );
}

export function HomepageWF() {
  return (
    <div className="wf-root">
      <WFTopBar />

      {/* ─── NAVBAR ─── */}
      <div className="wf-navbar">
        <div className="wf-navbar-logo">[ Logo MA ]</div>
        <div className="wf-navbar-links">
          {["Beranda", "Perkara", "Informasi ", "FAQ", "Layanan Digital "].map(l => (
            <div key={l} className="wf-navbar-link">{l}</div>
          ))}
        </div>
        <div className="wf-navbar-cta"> Cari</div>
      </div>

      {/* ─── HERO ─── */}
      <div className="wf-hero">
        <span className="wf-hero-bg-label">bg: foto gedung MA + overlay gelap</span>
        <div className="wf-hero-inner">
          <span className="wf-label">H1 — Judul Utama</span>
          <div className="wf-h1" style={{ color: "#555" }}>Portal Mahkamah Agung</div>

          <div className="wf-block" style={{ height: 24, maxWidth: 400, margin: "12px auto" }}>
            TAGLINE — "Pengadilan Bermartabat, Negara Berdaulat"
          </div>

          <div className="wf-block" style={{ height: 48, maxWidth: 560, margin: "12px auto 28px" }}>
            Deskripsi singkat lembaga (2–3 kalimat)
          </div>



          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
            {["Cari Putusan", "Cek Status Perkara", "Hubungi Pengadilan"].map(btn => (
              <div key={btn} className="wf-card" style={{ width: 180, padding: "16px", alignItems: "center", textAlign: "center", gap: 8 }}>
                <div className="wf-card-icon" style={{ margin: "0 auto" }} />
                <div className="wf-h3">{btn}</div>
                <div className="wf-block" style={{ height: 28, fontSize: 9 }}>deskripsi singkat</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── LAYANAN DIGITAL ─── */}
      <div className="wf-section">
        <div className="wf-section-label-box">Section 2 — Layanan & Inovasi Digital</div>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div className="wf-h2">Layanan & Inovasi Digital</div>
          <div className="wf-divider" />
          <div className="wf-caption" style={{ marginTop: 8 }}>8 layanan utama MA dalam satu grid</div>
        </div>
        <div className="wf-grid-4">
          {[
            "Direktori Putusan", "e-Court", "Cek Status Perkara", "SIPP",
            "Jadwal Sidang", "Kepaniteraan", "Pengumuman", "e-Berpadu"
          ].map(s => (
            <div key={s} className="wf-card">
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div className="wf-card-icon" style={{ width: 40, height: 40, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div className="wf-h3" style={{ fontSize: 12 }}>{s}</div>
                  <div className="wf-block" style={{ height: 28, marginTop: 6, fontSize: 9 }}>deskripsi</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── BERITA ─── */}
      <div style={{ background: "#E8E8E8", borderTop: "1px solid #D0D0D0", borderBottom: "1px solid #D0D0D0" }}>
        <div className="wf-section">
          <div className="wf-section-label-box">Section 3 — Berita Terbaru</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
            <div>
              <div className="wf-h2">Berita Terbaru</div>
              <div className="wf-divider" style={{ margin: "8px 0 0" }} />
            </div>
            <div className="wf-btn-outline">Lihat Semua </div>
          </div>
          <div className="wf-grid-3">
            {["Berita 1", "Berita 2", "Berita 3"].map(n => (
              <div key={n} className="wf-card" style={{ padding: 0, overflow: "hidden" }}>
                <div className="wf-block-img" style={{ height: 160 }}>[ Foto Berita ]</div>
                <div style={{ padding: "16px" }}>
                  <div className="wf-badge" style={{ marginBottom: 8 }}>15 Mei 2026</div>
                  <div className="wf-h3" style={{ marginBottom: 6 }}>{n} — Judul berita singkat yang relevan</div>
                  <div className="wf-block" style={{ height: 40, marginBottom: 12, fontSize: 9 }}>Ringkasan/excerpt berita...</div>
                  <div className="wf-btn-sm">Baca </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <div className="wf-footer-full">
        <div style={{ borderTop: "4px solid #9E9E9E", background: "#A8A8A8", height: 4 }} />
        <div className="wf-footer">
          <div>
            <div className="wf-label">Tentang MA</div>
            <div className="wf-block" style={{ height: 80, marginBottom: 12, fontSize: 9 }}>Logo + Deskripsi lembaga</div>
            <div style={{ display: "flex", gap: 8 }}>
              {["FB", "IG", "YT", "X"].map(s => (
                <div key={s} className="wf-card-icon" style={{ width: 32, height: 32 }} />
              ))}
            </div>
          </div>
          <div>
            <div className="wf-label">Tautan Cepat</div>
            {["Beranda", "Perkara", "FAQ", "Kontak"].map(l => (
              <div key={l} className="wf-block" style={{ height: 24, marginBottom: 4, justifyContent: "flex-start", paddingLeft: 8, fontSize: 10 }}>{l}</div>
            ))}
          </div>
          <div>
            <div className="wf-label">Layanan Digital</div>
            {["Direktori Putusan", "e-Court", "SIPP", "Cek Perkara", "e-Berpadu"].map(l => (
              <div key={l} className="wf-block" style={{ height: 24, marginBottom: 4, justifyContent: "flex-start", paddingLeft: 8, fontSize: 10 }}>{l} </div>
            ))}
          </div>
          <div>
            <div className="wf-label">Kontak & Portal Internal</div>
            <div className="wf-block" style={{ height: 72, marginBottom: 12, fontSize: 9 }}> Alamat +  Telepon +  Email</div>
            <div className="wf-label">Portal Pegawai</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {["Sistem Manajemen Kasus", "Dashboard Kinerja", "Repositori Dok."].map(p => (
                <div key={p} className="wf-badge">{p}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="wf-footer-copy">© 2026 Mahkamah Agung Republik Indonesia. Hak Cipta Dilindungi. | Kebijakan Privasi | Syarat & Ketentuan</div>
      </div>
    </div>
  );
}
