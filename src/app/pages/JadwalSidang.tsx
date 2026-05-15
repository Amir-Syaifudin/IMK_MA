import React from 'react';
import JadwalFilterBar from '../components/JadwalFilterBar';
import CalendarGrid from '../components/CalendarGrid';
import JadwalListItem from '../components/JadwalListItem';

export function JadwalSidang() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Filter Bar */}
      <JadwalFilterBar />

      {/* Calendar */}
      <CalendarGrid />

      {/* List of hearings */}
      <div className="space-y-4">
        <JadwalListItem
          time="09:00 – 11:00"
          caseNumber="Nomor Perkara: 123 K/Pdt/2025"
          jenis="Perdata"
          pokok="Gugatan Wanita vs. Perusahaan X"
          hakim="Majelis Hakim: Drs. Budi Santoso"
        />
        <JadwalListItem
          time="13:00 – 15:00"
          caseNumber="Nomor Perkara: 456 Pdt/2024"
          jenis="Pidana"
          pokok="Kasus Korupsi Pejabat Y"
          hakim="Majelis Hakim: Siti Nurhaliza"
        />
        <JadwalListItem
          time="16:00 – 18:00"
          caseNumber="Nomor Perkara: 789 TUN/2023"
          jenis="TUN"
          pokok="Sengketa Pajak Z"
          hakim="Majelis Hakim: Ahmad Fauzi"
        />
      </div>
    </div>
  );
}
