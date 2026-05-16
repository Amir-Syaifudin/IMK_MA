import "../../../styles/wireframe.css";
import { useState } from "react";
import { Link, useLocation } from "react-router";

function WFTopBar() {
  const loc = useLocation();
  return (
    <div className="wf-topbar">
      <span className="wf-topbar-label"> Wireframe Mode</span>
      <Link to="/wireframe" className={`wf-topbar-link ${loc.pathname === "/wireframe" ? "active" : ""}`}>Beranda</Link>
      <Link to="/wireframe/perkara" className={`wf-topbar-link ${loc.pathname === "/wireframe/perkara" ? "active" : ""}`}>Perkara</Link>
      <Link to="/wireframe/faq" className={`wf-topbar-link ${loc.pathname === "/wireframe/faq" ? "active" : ""}`}>FAQ</Link>
      <Link to="/wireframe/informasi/berita" className={`wf-topbar-link ${loc.pathname.includes("informasi") ? "active" : ""}`}>Informasi</Link>
      <div style={{ marginLeft: "auto" }}>
        <Link to="/faq" className="wf-topbar-link"> Lihat Visual Design</Link>
      </div>
    </div>
  );
}

const categories = ["Semua", "Perkara & Putusan", "e-Court", "Kepaniteraan", "Pengunjung", "Umum"];

const faqs = [
  { q: "Bagaimana cara mencari putusan pengadilan?", cat: "Perkara & Putusan" },
  { q: "Apa itu nomor perkara dan bagaimana format penulisannya?", cat: "Perkara & Putusan" },
  { q: "Apa perbedaan antara kasasi, banding, dan PK?", cat: "Perkara & Putusan" },
  { q: "Bagaimana cara mendaftarkan perkara melalui e-Court?", cat: "e-Court" },
  { q: "Dokumen apa saja yang dibutuhkan untuk pendaftaran online?", cat: "e-Court" },
  { q: "Bagaimana cara melihat jadwal sidang saya?", cat: "Kepaniteraan" },
  { q: "Siapa yang boleh mengakses direktori putusan?", cat: "Umum" },
  { q: "Bagaimana cara menghubungi pengadilan yang menangani perkara saya?", cat: "Pengunjung" },
];

const glossary: Record<string, string[]> = {
  A: ["Advokat — Pengacara profesional yang berlisensi", "Arbitrase — Penyelesaian sengketa di luar pengadilan"],
  B: ["Banding — Upaya hukum ke pengadilan yang lebih tinggi", "Bukti — Alat pembuktian dalam persidangan"],
  G: ["Gugatan — Tuntutan perdata yang diajukan ke pengadilan"],
  K: ["Kasasi — Upaya hukum ke Mahkamah Agung", "Kepaniteraan — Unit administrasi pengadilan"],
  P: ["Perkara — Kasus yang sedang diproses pengadilan", "PK — Peninjauan Kembali, upaya hukum luar biasa", "Putusan — Keputusan akhir hakim dalam suatu perkara"],
  Y: ["Yurisprudensi — Putusan hakim terdahulu sebagai referensi"],
};

export function FAQPageWF() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered = activeTab === "Semua" ? faqs : faqs.filter(f => f.cat === activeTab);

  return (
    <div className="wf-root">
      <WFTopBar />

      {/* ─── NAVBAR ─── */}
      <div className="wf-navbar">
        <div className="wf-navbar-logo">[ Logo MA ]</div>
        <div className="wf-navbar-links">
          {["Beranda", "Perkara", "Informasi ", "FAQ", "Layanan Digital "].map(l => (
            <div key={l} className="wf-navbar-link" style={l === "FAQ" ? { background: "#9E9E9E", color: "#fff" } : {}}>{l}</div>
          ))}
        </div>
        <div className="wf-navbar-cta"> Cari</div>
      </div>

      {/* ─── BREADCRUMB ─── */}
      <div style={{ background: "#E0E0E0", borderBottom: "1px solid #CCCCCC", padding: "8px 32px" }}>
        <span style={{ fontSize: 11, color: "#888" }}>Beranda  FAQ & Panduan Pengguna</span>
      </div>

      {/* ─── HERO FAQ ─── */}
      <div style={{ background: "#C4C4C4", borderBottom: "2px solid #AAAAAA", padding: "48px 32px", textAlign: "center" }}>
        <div className="wf-section-label-box" style={{ margin: "0 auto 12px" }}>Section 1 — Hero FAQ</div>
        <div className="wf-h1">FAQ & Panduan Pengguna</div>
        <div className="wf-block" style={{ height: 28, maxWidth: 420, margin: "12px auto 28px", fontSize: 10 }}>
          Temukan jawaban atas pertanyaan yang sering diajukan
        </div>
        {/* Search */}
        <div className="wf-search-bar" style={{ margin: "0 auto" }}>
          <div style={{ width: 18, height: 18, background: "#B0B0B0", borderRadius: 4 }} />
          <div className="wf-search-input" />
          <div className="wf-btn">Cari</div>
        </div>
      </div>

      <div className="wf-section">

        {/* STATS BAR */}
        <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
          {[["12", "Kategori Topik"], ["84", "Pertanyaan Tersedia"], ["5 menit", "Rata-rata waktu respons"]].map(([num, label]) => (
            <div key={label} className="wf-card" style={{ flex: 1, flexDirection: "row", alignItems: "center", gap: 12, padding: "14px 16px" }}>
              <div className="wf-h2" style={{ fontSize: "1.5rem", margin: 0 }}>{num}</div>
              <div style={{ fontSize: 11, color: "#777" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* KATEGORI TABS */}
        <div className="wf-section-label-box">Section 2 — Kategori & Filter</div>
        <div className="wf-tabs" style={{ marginBottom: 24 }}>
          {categories.map(cat => (
            <div
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`wf-tab ${activeTab === cat ? "wf-tab-active" : ""}`}
              style={{ cursor: "pointer" }}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* FAQ ACCORDION */}
        <div className="wf-section-label-box">Section 3 — Daftar FAQ ({filtered.length} item)</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
          {filtered.map((faq, i) => (
            <div key={i}>
              <div
                className="wf-accordion-item"
                style={{ cursor: "pointer" }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <div className="wf-badge">{faq.cat}</div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#444" }}>{faq.q}</span>
                </div>
                <span style={{ fontSize: 16, color: "#888", marginLeft: 12 }}>{openFaq === i ? "" : ""}</span>
              </div>
              {openFaq === i && (
                <div style={{ background: "#CFCFCF", border: "1px solid #BBBBBB", borderTop: "none", borderRadius: "0 0 8px 8px", padding: "16px 20px" }}>
                  <div className="wf-label">Jawaban:</div>
                  <div className="wf-block" style={{ height: 60, fontSize: 9 }}>Teks jawaban lengkap akan ditampilkan di sini. Bisa berisi langkah-langkah, tautan, atau penjelasan prosedur.</div>
                  <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                    <div className="wf-btn-sm"> Membantu</div>
                    <div className="wf-btn-sm"> Tidak Membantu</div>
                    <div className="wf-btn-sm" style={{ marginLeft: "auto" }}>Laporkan </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* HUBUNGI KAMI BANNER */}
        <div className="wf-section-label-box">Section 4 — Masih Butuh Bantuan?</div>
        <div className="wf-card" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "24px 32px", background: "#C4C4C4", marginBottom: 40 }}>
          <div>
            <div className="wf-h3" style={{ fontSize: "1.1rem" }}>Tidak menemukan jawaban yang Anda cari?</div>
            <div className="wf-block" style={{ height: 24, maxWidth: 400, marginTop: 8, fontSize: 10 }}>Hubungi tim kepaniteraan kami secara langsung</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <div className="wf-btn">Hubungi Kami</div>
            <div className="wf-btn-outline">Lihat Kontak Pengadilan</div>
          </div>
        </div>

        {/* GLOSARIUM HUKUM */}
        <div className="wf-section-label-box">Section 5 — Glosarium Hukum A–Z</div>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div className="wf-h2">Glosarium Hukum</div>
          <div className="wf-divider" />
          <div className="wf-caption" style={{ marginTop: 8 }}>Kamus istilah hukum yang digunakan dalam sistem peradilan Indonesia</div>
        </div>

        {/* Alphabet Filter */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24, justifyContent: "center" }}>
          {Object.keys(glossary).map(letter => (
            <div key={letter} className="wf-tab wf-tab-active" style={{ width: 36, height: 36, justifyContent: "center", display: "flex", alignItems: "center", padding: 0, cursor: "pointer" }}>
              {letter}
            </div>
          ))}
          {["C","D","E","F","H","I","J","L","M","N","O","Q","R","S","T","U","V","W","X","Z"].map(l => (
            <div key={l} className="wf-tab" style={{ width: 36, height: 36, justifyContent: "center", display: "flex", alignItems: "center", padding: 0, opacity: 0.5, cursor: "not-allowed" }}>{l}</div>
          ))}
        </div>

        {/* Glossary Entries */}
        <div className="wf-grid-2">
          {Object.entries(glossary).map(([letter, terms]) => (
            <div key={letter} className="wf-card" style={{ padding: "16px 20px" }}>
              <div className="wf-h2" style={{ fontSize: "1.5rem", color: "#888", marginBottom: 12 }}>{letter}</div>
              {terms.map(term => {
                const [t, d] = term.split(" — ");
                return (
                  <div key={t} style={{ marginBottom: 8 }}>
                    <span style={{ fontWeight: 700, fontSize: 12, color: "#555" }}>{t}</span>
                    {d && <span style={{ fontSize: 11, color: "#888" }}> — {d}</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <div className="wf-footer-full">
        <div className="wf-footer">
          <div><div className="wf-label">Tentang MA</div><div className="wf-block" style={{ height: 60, fontSize: 9 }}>Logo + Deskripsi</div></div>
          <div><div className="wf-label">Tautan Cepat</div>{["Beranda", "Perkara", "FAQ"].map(l => <div key={l} className="wf-block" style={{ height: 22, marginBottom: 4, fontSize: 10, justifyContent: "flex-start", paddingLeft: 8 }}>{l}</div>)}</div>
          <div><div className="wf-label">Layanan Digital</div>{["Direktori Putusan", "e-Court", "SIPP"].map(l => <div key={l} className="wf-block" style={{ height: 22, marginBottom: 4, fontSize: 10, justifyContent: "flex-start", paddingLeft: 8 }}>{l} </div>)}</div>
          <div><div className="wf-label">Kontak</div><div className="wf-block" style={{ height: 60, fontSize: 9 }}>Alamat, Telepon, Email</div></div>
        </div>
        <div className="wf-footer-copy">© 2026 Mahkamah Agung Republik Indonesia</div>
      </div>
    </div>
  );
}
