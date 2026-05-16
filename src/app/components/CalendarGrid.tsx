import React from "react";

const dates = Array.from({ length: 30 }, (_, i) => i + 1);

export default function CalendarGrid() {
  return (
    <div className="grid grid-cols-7 gap-2 text-center">
      {["Min", "Sel", "Rab", "Kam", "Jum", "Sab", "Ming"].map((d) => (
        <div key={d} className="font-medium text-[#004225]">
          {d}
        </div>
      ))}
      {dates.map((date) => (
        <div key={date} className="relative py-2 border rounded">
          <span className="block text-sm">{date}</span>
          {/* gold dot for dates with sessions, example: dates 5,12,19 */}
          {(date === 5 || date === 12 || date === 19) && (
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--ma-gold)] rounded-full" />
          )}
          {/* highlight today (e.g., 15) */}
          {date === 15 && (
            <div className="absolute inset-0 bg-[#004225] opacity-25 rounded" />
          )}
        </div>
      ))}
    </div>
  );
}
