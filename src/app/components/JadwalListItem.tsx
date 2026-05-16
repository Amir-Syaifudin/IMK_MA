import React from "react";

interface Props {
  time: string;
  caseNumber: string;
  jenis: "Perdata" | "Pidana" | "TUN" | "Agama" | "Militer";
  pokok: string;
  hakim: string;
}

const badgeColors: Record<Props["jenis"], string> = {
  Perdata: "#A3D5FF", // pastel blue
  Pidana: "#FFB3BA", // pastel pink
  TUN: "#CDB4DB", // pastel purple
  Agama: "#B5EAD7", // pastel green
  Militer: "#D3D3D3", // pastel gray
};

export default function JadwalListItem({
  time,
  caseNumber,
  jenis,
  pokok,
  hakim,
}: Props) {
  return (
    <div className="flex items-center justify-between p-4 border rounded hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-600 w-24">{time}</div>
        <div className="text-sm text-gray-600 w-48">{caseNumber}</div>
        <span
          className="px-2 py-1 rounded text-xs font-medium"
          style={{ backgroundColor: badgeColors[jenis], color: "#000" }}
        >
          {jenis}
        </span>
        <div className="text-sm text-gray-800 max-w-xs truncate">{pokok}</div>
        <div className="text-sm text-gray-500">{hakim}</div>
      </div>
      <button className="text-[var(--ma-gold)] hover:underline font-medium">
        Detail
      </button>
    </div>
  );
}
