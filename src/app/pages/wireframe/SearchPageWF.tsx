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
        <Link to="/perkara" className="wf-topbar-link"> Lihat Visual Design</Link>
      </div>
    </div>
  );
}

const DAYS = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
const DATES = [
  [null, null, null, 1, 2, 3, 4],
  [5, 6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30, 31, null],
];
// dates with mock agenda
const HAS_AGENDA = new Set([3, 7, 10, 12, 15, 17, 20, 22, 28]);

export function SearchPageWF() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  return (
    <div className="wf-root">
      <WFTopBar />

      {/* ─── NAVBAR ─── */}
      <div className="wf-navbar">
        <div className="wf-navbar-logo">[ Logo MA ]</div>
        <div className="wf-navbar-links">
          {["Beranda", "Perkara", "Informasi ", "FAQ", "Layanan Digital "].map(l => (
            <div key={l} className="wf-navbar-link" style={l === "Perkara" ? { background: "#9E9E9E", color: "#fff" } : {}}>{l}</div>
          ))}
        </div>
        <div className="wf-navbar-cta"> Cari</div>
      </div>

      {/* ─── BREADCRUMB ─── */}
      <div style={{ background: "#E0E0E0", borderBottom: "1px solid #CCCCCC", padding: "8px 32px" }}>
        <span style={{ fontSize: 11, color: "#888" }}>Beranda  Perkara & Jadwal Sidang</span>
      </div>

      {/* ─── BANNER HERO ─── */}
      <div style={{ background: "#C0C0C0", borderBottom: "2px solid #AAAAAA", padding: "40px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
        <div>
          <div className="wf-section-label-box">Section 1 — Page Header / Petunjuk</div>
          <div className="wf-h1" style={{ fontSize: "1.8rem" }}>Informasi Perkara & Jadwal Sidang</div>
          <div className="wf-block" style={{ height: 40, maxWidth: 520, marginTop: 12, fontSize: 10 }}>
            Deskripsi fungsi halaman (1–2 kalimat penjelasan)
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <div className="wf-btn">Cari Perkara</div>
            <div className="wf-btn-outline">Lihat Kalender</div>
          </div>
        </div>
        <div className="wf-block" style={{ width: 200, height: 120, flexShrink: 0 }}>
          [ Ilustrasi / Watermark Ikon Timbangan ]
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="wf-section">

        {/* SEARCH FILTER BAR */}
        <div className="wf-section-label-box">Section 2 — Filter Pencarian Perkara</div>
        <div className="wf-card" style={{ flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 28, alignItems: "flex-end" }}>
          <div style={{ flex: 2, minWidth: 200 }}>
            <div className="wf-label">Kata Kunci / Nomor Perkara</div>
            <div className="wf-block" style={{ height: 40, justifyContent: "flex-start", paddingLeft: 12, fontSize: 10 }}> Masukkan nomor atau kata kunci...</div>
          </div>
          <div style={{ flex: 1, minWidth: 140 }}>
            <div className="wf-label">Jenis Perkara</div>
            <div className="wf-block" style={{ height: 40, justifyContent: "flex-start", paddingLeft: 12, fontSize: 10 }}>Pilih jenis </div>
          </div>
          <div style={{ flex: 1, minWidth: 140 }}>
            <div className="wf-label">Tanggal Dari</div>
            <div className="wf-block" style={{ height: 40, justifyContent: "flex-start", paddingLeft: 12, fontSize: 10 }}> dd/mm/yyyy</div>
          </div>
          <div style={{ flex: 1, minWidth: 140 }}>
            <div className="wf-label">Tanggal Sampai</div>
            <div className="wf-block" style={{ height: 40, justifyContent: "flex-start", paddingLeft: 12, fontSize: 10 }}> dd/mm/yyyy</div>
          </div>
          <div className="wf-btn">Cari Perkara</div>
          <div className="wf-btn-outline" style={{ fontSize: 10 }}>Reset</div>
        </div>

        {/* CALENDAR + AGENDA FILTER */}
        <div className="wf-section-label-box">Section 3 — Kalender & Agenda</div>
        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 20, marginBottom: 28 }}>

          {/* Calendar */}
          <div className="wf-calendar">
            <div className="wf-calendar-header">
              <div className="wf-btn-sm"></div>
              <div className="wf-h3" style={{ fontSize: 13 }}>Mei 2026</div>
              <div className="wf-btn-sm"></div>
            </div>
            <div className="wf-calendar-grid" style={{ marginBottom: 8 }}>
              {DAYS.map(d => (
                <div key={d} style={{ textAlign: "center", fontSize: 9, fontWeight: 700, color: "#888", padding: "4px 0" }}>{d}</div>
              ))}
            </div>
            <div className="wf-calendar-grid">
              {DATES.flat().map((d, i) => {
                if (!d) return <div key={i} />;
                const hasAgenda = HAS_AGENDA.has(d);
                const isSelected = selectedDate === d;
                return (
                  <div
                    key={i}
                    onClick={() => setSelectedDate(isSelected ? null : d)}
                    style={{
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                      padding: "5px 0", cursor: "pointer", borderRadius: 6,
                      background: isSelected ? "#888" : d === 16 ? "#A0A0A0" : "transparent",
                      color: isSelected || d === 16 ? "#fff" : "#555",
                    }}
                  >
                    <span style={{ fontSize: 11, fontWeight: 600 }}>{d}</span>
                    {hasAgenda && <span style={{ width: 4, height: 4, borderRadius: "50%", background: isSelected ? "#fff" : "#888", marginTop: 1 }} />}
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: 12, display: "flex", gap: 8, fontSize: 9, color: "#888" }}>
              <span> = Ada agenda</span>
              <span style={{ background: "#A0A0A0", color: "#fff", padding: "1px 5px", borderRadius: 3 }}>Hari ini</span>
              <span style={{ background: "#888", color: "#fff", padding: "1px 5px", borderRadius: 3 }}>Dipilih</span>
            </div>
          </div>

          {/* Agenda Panel */}
          <div>
            {/* Filter Pills */}
            <div className="wf-section-label-box">Filter Kategori Agenda</div>
            <div className="wf-tabs" style={{ marginBottom: 16 }}>
              {["Semua", "Sidang", "Putusan", "Pengumuman", "Agenda", "Libur"].map((t, i) => (
                <div key={t} className={`wf-tab ${i === 0 ? "wf-tab-active" : ""}`}>{t}</div>
              ))}
            </div>

            {/* Agenda List */}
            <div className="wf-section-label-box">
              {selectedDate ? `Daftar Agenda — ${selectedDate} Mei 2026` : "Semua Agenda — Mei 2026"}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              {(selectedDate ? [selectedDate] : [3, 7, 10, 15, 20, 22]).map(d => (
                <div key={d} className="wf-card" style={{ padding: "14px 16px", gap: 8 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <div className="wf-badge">Sidang</div>
                    <span style={{ fontSize: 10, color: "#777" }}>{d} Mei 2026 · 09.00</span>
                  </div>
                  <div className="wf-h3" style={{ fontSize: 11 }}>No. 123/Pdt.G/2026/MA</div>
                  <div className="wf-block" style={{ height: 24, fontSize: 9 }}>Pokok perkara singkat...</div>
                  <div className="wf-btn-sm" style={{ alignSelf: "flex-start" }}>Detail</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEARCH RESULTS */}
        <div className="wf-section-label-box">Section 4 — Hasil Pencarian Perkara</div>
        <div className="wf-card" style={{ padding: "12px 16px", marginBottom: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div className="wf-h3">Hasil Pencarian</div>
            <span style={{ fontSize: 10, color: "#888" }}>N hasil ditemukan</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div className="wf-btn-sm">Semua</div>
            <div className="wf-btn-sm">Perdata</div>
            <div className="wf-btn-sm">Pidana</div>
            <div className="wf-btn-sm">TUN</div>
          </div>
        </div>
        {[1, 2, 3].map(i => (
          <div key={i} className="wf-card" style={{ flexDirection: "row", gap: 16, marginBottom: 10, padding: "16px 20px" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "center" }}>
                <div className="wf-block" style={{ width: 20, height: 20, flexShrink: 0, borderRadius: 4 }} />
                <div className="wf-h3">No. {i}23/Pid.B/2026/MA</div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <div className="wf-badge">Pidana</div>
                <span style={{ fontSize: 10, color: "#888" }}> 15 Mei 2026</span>
                <span style={{ fontSize: 10, color: "#888" }}> PN Jakarta Pusat</span>
                <div className="wf-badge">Sedang disidangkan</div>
              </div>
              <div className="wf-block" style={{ height: 28, marginTop: 8, fontSize: 9 }}>Ringkasan / cuplikan putusan...</div>
            </div>
            <div className="wf-btn" style={{ alignSelf: "center", whiteSpace: "nowrap" }}>Lihat Jadwal di Kalender</div>
          </div>
        ))}
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
