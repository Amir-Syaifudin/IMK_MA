import React from "react";

function JadwalFilterBar() {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select className="border border-[var(--ma-gold-light)] rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[var(--ma-gold)]">
        <option>Jenis Perkara</option>
        <option>Perdata</option>
        <option>Pidana</option>
        <option>TUN</option>
        <option>Agama</option>
        <option>Militer</option>
      </select>
      <select className="border border-[var(--ma-gold-light)] rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[var(--ma-gold)]">
        <option>Pengadilan/Kamar</option>
        <option>MA</option>
        <option>PT</option>
        <option>PN</option>
      </select>
      <input
        type="month"
        className="border border-[var(--ma-gold-light)] rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[var(--ma-gold)]"
      />
      <button className="bg-[var(--ma-gold)] text-[var(--ma-green)] px-6 py-2 rounded hover:bg-[var(--ma-gold-dark)] transition-colors font-medium">
        Cari
      </button>
    </div>
  );
}

export default JadwalFilterBar;
