import "../../../styles/wireframe.css";
import { Link, useLocation } from "react-router";

function WFTopBar() {
  const loc = useLocation();
  return (
    <div className="wf-topbar">
      <span className="wf-topbar-label">📐 Wireframe Mode</span>
      <Link to="/wireframe" className={`wf-topbar-link ${loc.pathname === "/wireframe" ? "active" : ""}`}>Beranda</Link>
      <Link to="/wireframe/perkara" className={`wf-topbar-link ${loc.pathname === "/wireframe/perkara" ? "active" : ""}`}>Perkara</Link>
      <Link to="/wireframe/faq" className={`wf-topbar-link ${loc.pathname === "/wireframe/faq" ? "active" : ""}`}>Bantuan</Link>
      <Link to="/wireframe/informasi/berita" className={`wf-topbar-link ${loc.pathname.includes("informasi") ? "active" : ""}`}>Informasi</Link>
      <Link to="/wireframe/navbar" className={`wf-topbar-link ${loc.pathname === "/wireframe/navbar" ? "active" : ""}`}>Subbab Navigasi</Link>
      <div style={{ marginLeft: "auto" }}>
        <Link to="/" className="wf-topbar-link">→ Lihat Visual Design</Link>
      </div>
    </div>
  );
}

export function NavbarMenuWF() {
  return (
    <div className="wf-root" style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <WFTopBar />
      
      <div style={{ padding: "40px 32px", textAlign: "left", background: "#fff", borderBottom: "1px solid #ddd" }}>
        <h2 style={{ fontFamily: "monospace", color: "#333", fontSize: "1.5rem", margin: "0 0 8px 0" }}>Wireframe: Subbab Menu Navigasi</h2>
        <p style={{ fontFamily: "monospace", color: "#888", fontSize: "14px", margin: 0 }}>
          Simulasi Dropdown Menu (Mega Menu) pada Navbar untuk berbagai kategori.
        </p>
      </div>

      <div className="wf-section" style={{ padding: "40px 32px", display: "flex", flexDirection: "column", gap: "60px" }}>
        
        {/* ─── STATE 1: INFORMASI OPEN ─── */}
        <div>
          <div className="wf-section-label-box" style={{ marginBottom: "24px" }}>State 1: Dropdown "Informasi" Terbuka</div>
          
          <div className="wf-navbar" style={{ position: "relative", overflow: "visible", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", zIndex: 20 }}>
            <div className="wf-navbar-logo">[ Logo MA ]</div>
            <div className="wf-navbar-links" style={{ display: "flex", gap: "24px" }}>
              <div className="wf-navbar-link">Beranda</div>
              <div className="wf-navbar-link">Perkara</div>
              
              {/* Dropdown 1: Informasi */}
              <div style={{ position: "relative" }}>
                <div className="wf-navbar-link" style={{ background: "#9E9E9E", color: "#fff", padding: "8px 16px", borderRadius: "4px" }}>Informasi ▾</div>
                
                {/* Dropdown Menu Wireframe */}
                <div className="wf-card" style={{ 
                  position: "absolute", 
                  top: "100%", 
                  left: 0, 
                  marginTop: "8px", 
                  padding: "16px",
                  minWidth: "220px",
                  zIndex: 30,
                  gap: "8px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)"
                }}>
                  {[
                    { label: "Profil MA" },
                    { label: "Artikel Hukum" },
                    { label: "Berita Terkini" },
                    { label: "Kebijakan & Peraturan" },
                    { label: "Pengumuman Resmi" }
                  ].map(item => (
                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", borderBottom: "1px solid #E0E0E0" }}>
                      <div className="wf-block" style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "4px" }}></div>
                      <span style={{ fontFamily: "monospace", fontSize: "14px", color: "#333", fontWeight: "bold" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="wf-navbar-link">Bantuan</div>
              <div className="wf-navbar-link">Layanan Digital ▾</div>
            </div>
            <div className="wf-navbar-cta">🔍 Cari</div>
          </div>
          {/* Spacer so the absolute element doesn't overlap the next section */}
          <div style={{ height: "300px" }}></div>
        </div>

        {/* ─── STATE 2: LAYANAN DIGITAL OPEN ─── */}
        <div>
          <div className="wf-section-label-box" style={{ marginBottom: "24px" }}>State 2: Dropdown "Layanan Digital" Terbuka</div>
          
          <div className="wf-navbar" style={{ position: "relative", overflow: "visible", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", zIndex: 10 }}>
            <div className="wf-navbar-logo">[ Logo MA ]</div>
            <div className="wf-navbar-links" style={{ display: "flex", gap: "24px" }}>
              <div className="wf-navbar-link">Beranda</div>
              <div className="wf-navbar-link">Perkara</div>
              <div className="wf-navbar-link">Informasi ▾</div>
              <div className="wf-navbar-link">Bantuan</div>

              {/* Dropdown 2: Layanan Digital */}
              <div style={{ position: "relative" }}>
                <div className="wf-navbar-link" style={{ background: "#9E9E9E", color: "#fff", padding: "8px 16px", borderRadius: "4px" }}>Layanan Digital ▾</div>
                
                {/* Dropdown Menu Wireframe */}
                <div className="wf-card" style={{ 
                  position: "absolute", 
                  top: "100%", 
                  right: 0, 
                  marginTop: "8px", 
                  padding: "16px",
                  minWidth: "320px",
                  zIndex: 30,
                  gap: "12px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)"
                }}>
                  {[
                    { name: "Direktori Putusan", desc: "Akses jutaan putusan di seluruh Indonesia" },
                    { name: "e-Court", desc: "Pendaftaran perkara secara online" },
                    { name: "Cek Status Perkara", desc: "Lacak perkembangan perkara Anda" },
                    { name: "SIPP", desc: "Sistem Informasi Penelusuran Perkara" },
                    { name: "e-Berpadu", desc: "Layanan terintegrasi untuk advokat" }
                  ].map(s => (
                    <div key={s.name} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px", borderBottom: "1px solid #E0E0E0" }}>
                      <div className="wf-block" style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "6px" }}></div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
                        <span style={{ fontFamily: "monospace", fontSize: "14px", fontWeight: "bold", color: "#333" }}>{s.name}</span>
                        <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#888" }}>{s.desc}</span>
                      </div>
                      <span style={{ fontSize: "12px", color: "#888", fontWeight: "bold" }}>↗</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="wf-navbar-cta">🔍 Cari</div>
          </div>
          <div style={{ height: "400px" }}></div>
        </div>

      </div>
    </div>
  );
}
