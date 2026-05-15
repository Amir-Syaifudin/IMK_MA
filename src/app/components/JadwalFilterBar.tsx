import React from 'react';

function JadwalFilterBar() {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select className="border border-[#E8C96A] rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]">
        <option>Jenis Perkara</option>
        <option>Perdata</option>
        <option>Pidana</option>
        <option>TUN</option>
        <option>Agama</option>
        <option>Militer</option>
      </select>
      <select className="border border-[#E8C96A] rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]">
        <option>Pengadilan/Kamar</option>
        <option>MA</option>
        <option>PT</option>
        <option>PN</option>
      </select>
      <input type="month" className="border border-[#E8C96A] rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]" />
      <button className="bg-[#C9A84C] text-[#1E3A2F] px-6 py-2 rounded hover:bg-[#A8852A] transition-colors font-medium">
        Cari
      </button>
    </div>
  );
}

export default JadwalFilterBar;
