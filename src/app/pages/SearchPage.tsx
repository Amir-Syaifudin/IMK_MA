import {
  Search,
  Filter,
  X,
  FileText,
  Calendar,
  MapPin,
  Info,
  ChevronLeft,
  ChevronRight,
  Scale,
  BookOpen,
  Gavel,
  Bell,
  Megaphone,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router";

// ── Types ────────────────────────────────────────────────────────────────────

type JenisPerkara = "Perdata" | "Pidana" | "TUN" | "Agama" | "Militer";
type EventType = "sidang" | "putusan" | "pengumuman" | "libur" | "agenda";

interface CalendarEvent {
  id: string;
  tanggal: string;
  type: EventType;
  title: string;
  jam?: string;
  nomorPerkara?: string;
  jenis?: JenisPerkara;
  hakim?: string;
  lokasi?: string;
}

interface SearchResult {
  id: string;
  nomorPerkara: string;
  jenisPerkara: string;
  tahun: string;
  tanggal: string;
  status: string;
  pengadilan: string;
  cuplikan: string;
}

// ── Mock data kalender ───────────────────────────────────────────────────────

const mockEvents: CalendarEvent[] = [
  {
    id: "e16",
    tanggal: "01/05/2026",
    type: "libur",
    title: "Hari Buruh Internasional — Pengadilan Libur",
  },
  {
    id: "e18",
    tanggal: "02/05/2026",
    type: "agenda",
    jam: "13:30",
    title: "Rapat Koordinasi Kepaniteraan",
    lokasi: "Ruang Rapat Kepaniteraan",
  },
  {
    id: "e1",
    tanggal: "05/05/2026",
    type: "sidang",
    jam: "09:00",
    nomorPerkara: "123/Pdt.G/2025/PN Jkt.Sel",
    jenis: "Perdata",
    title: "Sidang Kasasi — Wanprestasi Kontrak",
    hakim: "Drs. Budi Santoso, S.H., M.H.",
    lokasi: "Ruang Sidang I",
  },
  {
    id: "e2",
    tanggal: "05/05/2026",
    type: "sidang",
    jam: "13:00",
    nomorPerkara: "456/Pid.B/2025/PN Sby",
    jenis: "Pidana",
    title: "Sidang Kasasi — Korupsi Pengadaan Barang",
    hakim: "Siti Nurhaliza, S.H., M.H.",
    lokasi: "Ruang Sidang II",
  },
  {
    id: "e19",
    tanggal: "06/05/2026",
    type: "sidang",
    jam: "10:00",
    nomorPerkara: "555 K/Ag/2026",
    jenis: "Agama",
    title: "Sidang Kasasi — Sengketa Harta Bersama",
    hakim: "Dr. Hj. Ratna Dewi, S.H.",
    lokasi: "Ruang Sidang Agama",
  },
  {
    id: "e8",
    tanggal: "07/05/2026",
    type: "putusan",
    jam: "10:00",
    nomorPerkara: "200 K/Pdt/2026",
    jenis: "Perdata",
    title: "Pengucapan Putusan — Sengketa Warisan",
    hakim: "Majelis Hakim Kamar Perdata",
    lokasi: "Ruang Pleno",
  },
  {
    id: "e11",
    tanggal: "08/05/2026",
    type: "agenda",
    jam: "08:00",
    title: "Rapat Pimpinan MA — Evaluasi Kinerja Triwulan I",
    lokasi: "Gedung MA Lt. 14",
  },
  {
    id: "e20",
    tanggal: "09/05/2026",
    type: "pengumuman",
    title: "Jadwal Pemeliharaan Sistem SIPP Akhir Pekan",
  },
  {
    id: "e3",
    tanggal: "12/05/2026",
    type: "sidang",
    jam: "09:00",
    nomorPerkara: "789/TUN/2024/PTUN Bdg",
    jenis: "TUN",
    title: "Sidang Kasasi — Sengketa Pajak",
    hakim: "Ahmad Fauzi, S.H., LL.M.",
    lokasi: "Ruang Sidang III",
  },
  {
    id: "e4",
    tanggal: "12/05/2026",
    type: "sidang",
    jam: "13:00",
    nomorPerkara: "321/Pdt.G/2024/PA Jkt.Tim",
    jenis: "Agama",
    title: "Sidang Kasasi — Pembagian Warisan",
    hakim: "Dr. Hj. Ratna Dewi, S.H.",
    lokasi: "Ruang Sidang Agama",
  },
  {
    id: "e21",
    tanggal: "13/05/2026",
    type: "sidang",
    jam: "09:00",
    nomorPerkara: "654/Pid.Sus/2025/PN Mdn",
    jenis: "Pidana",
    title: "Sidang Kasasi — Tindak Pidana Pencucian Uang",
    hakim: "Siti Nurhaliza, S.H., M.H.",
    lokasi: "Ruang Sidang II",
  },
  {
    id: "e9",
    tanggal: "14/05/2026",
    type: "putusan",
    jam: "10:00",
    nomorPerkara: "300 K/Pid/2026",
    jenis: "Pidana",
    title: "Pengucapan Putusan — Kasus Narkotika",
    hakim: "Majelis Hakim Kamar Pidana",
    lokasi: "Ruang Pleno",
  },
  {
    id: "e12",
    tanggal: "15/05/2026",
    type: "pengumuman",
    title: "Batas Akhir Pendaftaran Perkara Kasasi Periode Mei 2026",
  },
  {
    id: "e22",
    tanggal: "16/05/2026",
    type: "putusan",
    jam: "14:00",
    nomorPerkara: "777 K/TUN/2026",
    jenis: "TUN",
    title: "Pengucapan Putusan — Sengketa Izin Tambang",
    hakim: "Majelis Hakim Kamar TUN",
    lokasi: "Ruang Pleno",
  },
  {
    id: "e5",
    tanggal: "19/05/2026",
    type: "sidang",
    jam: "10:00",
    nomorPerkara: "654 K/Pid.Mil/2026",
    jenis: "Militer",
    title: "Sidang Kasasi — Pelanggaran Disiplin Militer",
    hakim: "Kol. Inf. Hendra Wijaya, S.H.",
    lokasi: "Ruang Sidang Militer",
  },
  {
    id: "e6",
    tanggal: "19/05/2026",
    type: "sidang",
    jam: "13:30",
    nomorPerkara: "987 K/Pdt/2026",
    jenis: "Perdata",
    title: "Sidang Kasasi — Sengketa Kepemilikan Tanah",
    hakim: "Drs. Budi Santoso, S.H., M.H.",
    lokasi: "Ruang Sidang I",
  },
  {
    id: "e13",
    tanggal: "20/05/2026",
    type: "agenda",
    jam: "09:00",
    title: "Seminar Nasional — Reformasi Peradilan di Era Digital",
    lokasi: "Aula Gedung MA",
  },
  {
    id: "e10",
    tanggal: "21/05/2026",
    type: "putusan",
    jam: "09:00",
    nomorPerkara: "400 K/TUN/2026",
    jenis: "TUN",
    title: "Pengucapan Putusan — Sengketa Kepegawaian",
    hakim: "Majelis Hakim Kamar TUN",
    lokasi: "Ruang Pleno",
  },
  {
    id: "e14",
    tanggal: "22/05/2026",
    type: "pengumuman",
    title: "Pengumuman Seleksi Calon Hakim Agung Gelombang II 2026",
  },
  {
    id: "e23",
    tanggal: "23/05/2026",
    type: "agenda",
    jam: "08:30",
    title: "Senam Pagi Bersama dan Kerja Bakti",
    lokasi: "Halaman Utama Gedung MA",
  },
  {
    id: "e7",
    tanggal: "26/05/2026",
    type: "sidang",
    jam: "09:00",
    nomorPerkara: "111 K/Pid/2026",
    jenis: "Pidana",
    title: "Sidang Kasasi — Penipuan Investasi",
    hakim: "Siti Nurhaliza, S.H., M.H.",
    lokasi: "Ruang Sidang II",
  },
  {
    id: "e24",
    tanggal: "27/05/2026",
    type: "sidang",
    jam: "10:30",
    nomorPerkara: "888 K/Pdt/2026",
    jenis: "Perdata",
    title: "Sidang Kasasi — Gugatan Hak Cipta",
    hakim: "Drs. Budi Santoso, S.H., M.H.",
    lokasi: "Ruang Sidang I",
  },
  {
    id: "e15",
    tanggal: "28/05/2026",
    type: "agenda",
    jam: "10:00",
    title: "Pelantikan Hakim Agung Baru",
    lokasi: "Ruang Sidang Pleno MA",
  },
  {
    id: "e17",
    tanggal: "29/05/2026",
    type: "libur",
    title: "Kenaikan Isa Almasih — Pengadilan Libur",
  },
  {
    id: "e25",
    tanggal: "30/05/2026",
    type: "pengumuman",
    title: "Laporan Kinerja Bulanan Dirilis",
  },
];

// ── Mock data pencarian ──────────────────────────────────────────────────────

const mockResults: SearchResult[] = [
  {
    id: "1",
    nomorPerkara: "123/Pdt.G/2025/PN Jkt.Sel",
    jenisPerkara: "Perdata",
    tahun: "2025",
    tanggal: "15 Januari 2025",
    status: "Telah diputus",
    pengadilan: "PN Jakarta Selatan",
    cuplikan:
      "Menimbang bahwa gugatan Penggugat telah memenuhi syarat formil dan materiil. Majelis Hakim memutuskan mengabulkan gugatan Penggugat untuk sebagian dan menghukum Tergugat untuk membayar ganti rugi...",
  },
  {
    id: "2",
    nomorPerkara: "456/Pid.B/2025/PN Sby",
    jenisPerkara: "Pidana",
    tahun: "2025",
    tanggal: "20 Februari 2025",
    status: "Dalam proses",
    pengadilan: "PN Surabaya",
    cuplikan:
      "Terdakwa didakwa dengan Pasal 362 KUHP tentang pencurian. Jaksa Penuntut Umum menghadirkan 3 orang saksi dan barang bukti berupa rekaman CCTV. Sidang berikutnya dijadwalkan...",
  },
  {
    id: "3",
    nomorPerkara: "789/TUN/2024/PTUN Bdg",
    jenisPerkara: "Tata Usaha Negara",
    tahun: "2024",
    tanggal: "10 Desember 2024",
    status: "Telah diputus",
    pengadilan: "PTUN Bandung",
    cuplikan:
      "Menimbang bahwa objek sengketa adalah Surat Keputusan Bupati tentang pemberhentian Penggugat. Majelis Hakim menyatakan batal demi hukum keputusan Tergugat...",
  },
  {
    id: "4",
    nomorPerkara: "321/Pdt.G/2024/PA Jkt.Tim",
    jenisPerkara: "Agama",
    tahun: "2024",
    tanggal: "05 November 2024",
    status: "Telah diputus",
    pengadilan: "PA Jakarta Timur",
    cuplikan:
      "Majelis Hakim memutuskan menjatuhkan talak satu ba'in shughraa Tergugat terhadap Penggugat. Hak asuh anak diberikan kepada Penggugat...",
  },
  {
    id: "5",
    nomorPerkara: "654/Pid.Sus/2025/PN Mdn",
    jenisPerkara: "Pidana",
    tahun: "2025",
    tanggal: "02 Maret 2025",
    status: "Dalam proses",
    pengadilan: "PN Medan",
    cuplikan:
      "Terdakwa didakwa melanggar Undang-Undang Nomor 35 Tahun 2009 tentang Narkotika. Barang bukti berupa 2,5 gram sabu-sabu diamankan dari kediaman terdakwa...",
  },
];

// ── Constants ────────────────────────────────────────────────────────────────

const MONTHS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
const DAYS = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

const caseTypes = [
  { value: "", label: "Semua Jenis" },
  {
    value: "perdata",
    label: "Perdata",
    tooltip: "Sengketa antar individu atau badan hukum",
  },
  { value: "pidana", label: "Pidana", tooltip: "Tindak pidana/kejahatan" },
  {
    value: "tun",
    label: "Tata Usaha Negara",
    tooltip: "Sengketa keputusan pemerintah",
  },
  {
    value: "agama",
    label: "Agama",
    tooltip: "Perkara perkawinan, waris, dll (Islam)",
  },
  { value: "militer", label: "Militer", tooltip: "Perkara anggota TNI" },
];

const eventDotColor: Record<EventType, string> = {
  sidang: "var(--ma-gold)",
  putusan: "var(--ma-green)",
  pengumuman: "#E8862A",
  agenda: "#6366F1",
  libur: "#EF4444",
};

const perkaraBadge: Record<JenisPerkara, { bg: string; text: string }> = {
  Perdata: { bg: "#DBEAFE", text: "#1E40AF" },
  Pidana: { bg: "#FFE4E6", text: "#9F1239" },
  TUN: { bg: "#EDE9FE", text: "#5B21B6" },
  Agama: { bg: "#DCFCE7", text: "#14532D" },
  Militer: { bg: "#F3F4F6", text: "#374151" },
};

const eventIcon: Record<EventType, React.ElementType> = {
  sidang: Scale,
  putusan: Gavel,
  pengumuman: Bell,
  agenda: Megaphone,
  libur: Calendar,
};

const typeLabel: Record<EventType, string> = {
  sidang: "Sidang",
  putusan: "Putusan",
  pengumuman: "Pengumuman",
  agenda: "Agenda",
  libur: "Libur",
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}
function formatDate(date: Date) {
  return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;
}
function makeKey(day: number, month: number, year: number) {
  return `${String(day).padStart(2, "0")}/${String(month + 1).padStart(2, "0")}/${year}`;
}

// ── CalendarPicker (filter pencarian) ───────────────────────────────────────

interface CalendarPickerProps {
  label: string;
  value: Date | null;
  onChange: (d: Date | null) => void;
  placeholder: string;
}

function CalendarPicker({
  label,
  value,
  onChange,
  placeholder,
}: CalendarPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewYear, setViewYear] = useState(
    value?.getFullYear() ?? new Date().getFullYear(),
  );
  const [viewMonth, setViewMonth] = useState(
    value?.getMonth() ?? new Date().getMonth(),
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
  const prevMonth = () =>
    viewMonth === 0
      ? (setViewMonth(11), setViewYear(viewYear - 1))
      : setViewMonth(viewMonth - 1);
  const nextMonth = () =>
    viewMonth === 11
      ? (setViewMonth(0), setViewYear(viewYear + 1))
      : setViewMonth(viewMonth + 1);
  const isSelected = (d: number) =>
    !!value &&
    value.getDate() === d &&
    value.getMonth() === viewMonth &&
    value.getFullYear() === viewYear;
  const isToday = (d: number) => {
    const t = new Date();
    return (
      t.getDate() === d &&
      t.getMonth() === viewMonth &&
      t.getFullYear() === viewYear
    );
  };

  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-[var(--ma-title)] mb-2">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--ma-gold)] focus:border-[var(--ma-gold)] bg-white text-left hover:border-[var(--ma-gold)] transition-colors"
      >
        <Calendar size={20} className="text-[var(--ma-gold)] flex-shrink-0" />
        <span
          className={
            value ? "text-[var(--ma-title)]" : "text-[var(--ma-text-muted)]"
          }
        >
          {value ? formatDate(value) : placeholder}
        </span>
        {value && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChange(null);
            }}
            className="ml-auto text-[var(--ma-text-muted)] hover:text-red-500"
          >
            <X size={16} />
          </button>
        )}
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl p-4 w-[300px]">
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={prevMonth}
              className="p-1.5 rounded-lg hover:bg-[var(--ma-gold-soft)]"
            >
              <ChevronLeft size={16} className="text-[var(--ma-green)]" />
            </button>
            <span className="font-semibold text-sm text-[var(--ma-title)]">
              {MONTHS[viewMonth]} {viewYear}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              className="p-1.5 rounded-lg hover:bg-[var(--ma-gold-soft)]"
            >
              <ChevronRight size={16} className="text-[var(--ma-green)]" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-1">
            {DAYS.map((d) => (
              <div
                key={d}
                className="text-center text-xs text-[var(--ma-text-muted)] py-1"
              >
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`e${i}`} />
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => {
                  onChange(new Date(viewYear, viewMonth, day));
                  setIsOpen(false);
                }}
                className={`w-8 h-8 rounded-lg text-xs font-medium transition-all flex items-center justify-center
                  ${isSelected(day) ? "bg-[var(--ma-gold)] text-[var(--ma-green)] shadow-md" : isToday(day) ? "bg-[var(--ma-green-soft)] text-[var(--ma-green)] border border-[var(--ma-green-medium)]/30" : "text-[var(--ma-title)] hover:bg-[var(--ma-gold-soft)]"}`}
              >
                {day}
              </button>
            ))}
          </div>
          <div className="mt-3 pt-2 border-t border-gray-100">
            <button
              type="button"
              onClick={() => {
                const t = new Date();
                setViewYear(t.getFullYear());
                setViewMonth(t.getMonth());
                onChange(t);
                setIsOpen(false);
              }}
              className="w-full text-center text-xs text-[var(--ma-gold)] hover:text-[var(--ma-gold-dark)] font-medium py-1"
            >
              Hari Ini
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── EventCard ────────────────────────────────────────────────────────────────

function EventCard({
  event,
  onSearchCase,
}: {
  event: CalendarEvent;
  onSearchCase?: (nomor: string) => void;
}) {
  const Icon = eventIcon[event.type];
  const dot = eventDotColor[event.type];
  const badge = event.jenis ? perkaraBadge[event.jenis] : null;

  return (
    <div className="bg-white rounded-xl border-2 border-gray-100 p-4 hover:border-[var(--ma-gold)] hover:shadow-md transition-all">
      <div className="flex items-start gap-3">
        <div
          className="mt-0.5 p-2 rounded-lg flex-shrink-0"
          style={{ background: dot + "18" }}
        >
          <Icon size={16} style={{ color: dot }} />
        </div>
        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
              style={{ background: dot }}
            >
              {typeLabel[event.type]}
            </span>
            {event.jam && (
              <span className="text-xs font-medium text-[var(--ma-green)]">
                {event.jam} WIB
              </span>
            )}
            {badge && (
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{ background: badge.bg, color: badge.text }}
              >
                {event.jenis}
              </span>
            )}
          </div>
          <p className="text-sm font-semibold text-[var(--ma-title)] leading-snug">
            {event.title}
          </p>
          {event.nomorPerkara && (
            <p className="text-xs text-[var(--ma-text-muted)]">
              No. Perkara: {event.nomorPerkara}
            </p>
          )}
          {event.hakim && (
            <p className="text-xs text-[var(--ma-text-muted)]">
              Hakim: {event.hakim}
            </p>
          )}
          {event.lokasi && (
            <p className="text-xs text-[var(--ma-text-muted)] flex items-center gap-1">
              <MapPin size={10} />
              {event.lokasi}
            </p>
          )}
        </div>
        {(event.type === "sidang" || event.type === "putusan") &&
          event.nomorPerkara && (
            <button
              onClick={() => onSearchCase?.(event.nomorPerkara!)}
              className="flex-shrink-0 text-xs font-medium text-[var(--ma-gold)] hover:text-[var(--ma-gold-dark)] underline transition-colors"
            >
              Cari Info Perkara
            </button>
          )}
      </div>
    </div>
  );
}

// ── FullCalendar ─────────────────────────────────────────────────────────────

function FullCalendar({
  activeCase,
  onSearchCase,
}: {
  activeCase?: string;
  onSearchCase?: (n: string) => void;
}) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<EventType | "">("");

  useEffect(() => {
    if (activeCase) {
      const caseEvent = mockEvents.find((e) => e.nomorPerkara === activeCase);
      if (caseEvent) {
        const [d, m, y] = caseEvent.tanggal.split("/");
        setViewMonth(parseInt(m, 10) - 1);
        setViewYear(parseInt(y, 10));
        setSelectedDate(null);
      }
    }
  }, [activeCase]);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const prevMonth = () =>
    viewMonth === 0
      ? (setViewMonth(11), setViewYear(viewYear - 1))
      : setViewMonth(viewMonth - 1);
  const nextMonth = () =>
    viewMonth === 11
      ? (setViewMonth(0), setViewYear(viewYear + 1))
      : setViewMonth(viewMonth + 1);

  const eventsByDate = mockEvents
    .filter((ev) => (activeCase ? ev.nomorPerkara === activeCase : true))
    .reduce<Record<string, CalendarEvent[]>>((acc, ev) => {
      acc[ev.tanggal] = acc[ev.tanggal] ? [...acc[ev.tanggal], ev] : [ev];
      return acc;
    }, {});

  const monthSuffix = `/${String(viewMonth + 1).padStart(2, "0")}/${viewYear}`;

  const filteredEvents = mockEvents
    .filter((ev) => {
      const matchDate = selectedDate
        ? ev.tanggal === selectedDate
        : ev.tanggal.endsWith(monthSuffix);
      const matchType = filterType ? ev.type === filterType : true;
      const matchCase = activeCase ? ev.nomorPerkara === activeCase : true;
      return matchDate && matchType && matchCase;
    })
    .sort((a, b) => {
      if (a.tanggal !== b.tanggal) return a.tanggal.localeCompare(b.tanggal);
      return (a.jam || "99:99").localeCompare(b.jam || "99:99");
    });

  const typeFilterOptions: { value: EventType | ""; label: string }[] = [
    { value: "", label: "Semua" },
    { value: "sidang", label: "Sidang" },
    { value: "putusan", label: "Putusan" },
    { value: "pengumuman", label: "Pengumuman" },
    { value: "agenda", label: "Agenda" },
    { value: "libur", label: "Libur" },
  ];

  return (
    <div className="space-y-6">
      {/* 1. Kalender (Full Width) */}
      <div className="bg-white rounded-xl border-2 border-gray-100 p-5 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={prevMonth}
            className="p-2 rounded-lg hover:bg-[var(--ma-gold-soft)] transition-colors"
          >
            <ChevronLeft size={20} className="text-[var(--ma-green)]" />
          </button>
          <div className="text-center">
            <h3 className="text-xl font-bold text-[var(--ma-title)]">
              {MONTHS[viewMonth]}
            </h3>
            <p className="text-sm font-medium text-[var(--ma-text-muted)]">
              {viewYear}
            </p>
          </div>
          <button
            onClick={nextMonth}
            className="p-2 rounded-lg hover:bg-[var(--ma-gold-soft)] transition-colors"
          >
            <ChevronRight size={20} className="text-[var(--ma-green)]" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-2">
          {DAYS.map((d) => (
            <div
              key={d}
              className="text-center text-sm font-semibold text-[var(--ma-text-muted)] py-2 bg-gray-50 rounded-lg"
            >
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 md:gap-2">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div
              key={`e${i}`}
              className="min-h-[48px] md:min-h-[60px] bg-transparent"
            />
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
            const key = makeKey(day, viewMonth, viewYear);
            const events = eventsByDate[key] || [];
            const isSelected = selectedDate === key;
            const isTodayDate =
              today.getDate() === day &&
              today.getMonth() === viewMonth &&
              today.getFullYear() === viewYear;
            const dots = [
              ...new Set(events.map((ev) => eventDotColor[ev.type])),
            ].slice(0, 4);

            return (
              <button
                key={day}
                onClick={() => setSelectedDate(isSelected ? null : key)}
                className={`relative w-full min-h-[48px] md:min-h-[60px] rounded-lg text-sm md:text-base font-medium transition-all flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 p-1 border-2
                  ${
                    isSelected
                      ? "bg-[var(--ma-gold-soft)] text-[var(--ma-green)] border-[var(--ma-gold)] shadow-sm"
                      : isTodayDate
                        ? "bg-[var(--ma-green-soft)] text-[var(--ma-green)] border-[var(--ma-green-medium)]/40"
                        : events.length
                          ? "text-[var(--ma-title)] border-gray-100 hover:border-[var(--ma-gold)] hover:bg-gray-50"
                          : "text-[var(--ma-text-muted)] border-transparent hover:bg-gray-50"
                  }`}
              >
                <span className={isSelected || isTodayDate ? "font-bold" : ""}>
                  {day}
                </span>
                {dots.length > 0 && (
                  <div className="flex gap-1 flex-wrap justify-center">
                    {dots.map((c, i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {selectedDate && (
          <div className="mt-6 pt-4 border-t border-gray-100 text-center">
            <button
              onClick={() => setSelectedDate(null)}
              className="text-sm font-medium text-[var(--ma-gold)] hover:text-[var(--ma-gold-dark)] transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              <X size={16} /> Hapus pilihan tanggal (Tampilkan semua)
            </button>
          </div>
        )}
      </div>

      {/* 2. Filter & Legend */}
      <div className="bg-white rounded-xl border-2 border-gray-100 p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <span className="text-sm font-semibold text-[var(--ma-title)] mr-2">
            Keterangan:
          </span>
          {(Object.entries(eventDotColor) as [EventType, string][]).map(
            ([type, color]) => (
              <div
                key={type}
                className="flex items-center gap-2 text-xs md:text-sm text-[var(--ma-text)]"
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: color }}
                />
                {typeLabel[type]}
              </div>
            ),
          )}
        </div>

        <div className="flex flex-wrap gap-2 justify-center md:justify-end border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6">
          {typeFilterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilterType(opt.value)}
              className={`text-xs md:text-sm px-4 py-2 rounded-full font-medium transition-all border-2
                ${filterType === opt.value ? "bg-[var(--ma-green)] text-[var(--ma-gold)] border-[var(--ma-green)] shadow-sm" : "bg-white text-[var(--ma-text)] border-gray-200 hover:border-[var(--ma-gold)]"}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Daftar Agenda (Full Width) */}
      <div className="bg-white rounded-xl border-2 border-gray-100 p-5 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-gray-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[var(--ma-gold-soft)] rounded-lg">
              <Calendar size={20} className="text-[var(--ma-gold)]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--ma-title)]">
                {selectedDate
                  ? `Agenda pada ${selectedDate}`
                  : `Semua Agenda di ${MONTHS[viewMonth]} ${viewYear}`}
              </h3>
              <p className="text-sm text-[var(--ma-text-muted)]">
                Menampilkan {filteredEvents.length} kegiatan
              </p>
            </div>
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="py-12 text-center">
            <div className="bg-[var(--ma-gold-soft)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar size={32} className="text-[var(--ma-gold-dark)]" />
            </div>
            <p className="text-lg font-medium text-[var(--ma-text)] mb-1">
              Tidak ada agenda
            </p>
            <p className="text-sm text-[var(--ma-text-muted)]">
              Coba pilih bulan, tanggal, atau filter keterangan lain
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredEvents.map((ev) => (
              <EventCard key={ev.id} event={ev} onSearchCase={onSearchCase} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get("q") || "");
  const [caseType, setCaseType] = useState("");
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searched, setSearched] = useState(false);

  const [activeCase, setActiveCase] = useState<string>("");
  const calendarRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      setKeyword(q);
      handleSearch();
    }
  }, [searchParams]);

  const handleSearch = () => {
    setActiveCase("");
    setSearched(true);
    setResults(
      keyword.trim() || dateFrom || dateTo || caseType ? mockResults : [],
    );
  };

  const handleReset = () => {
    setKeyword("");
    setCaseType("");
    setDateFrom(null);
    setDateTo(null);
    setResults([]);
    setSearched(false);
    setActiveCase("");
  };

  const jumpToCalendar = (nomorPerkara: string) => {
    setActiveCase(nomorPerkara);
    calendarRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearchCase = (nomorPerkara: string) => {
    setKeyword(nomorPerkara);
    setActiveCase("");
    setSearched(true);
    setResults(mockResults.filter((r) => r.nomorPerkara === nomorPerkara));
    searchRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[var(--ma-bg)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* ── Page Header / Menu Petunjuk ── */}
        <div className="bg-gradient-to-br from-[var(--ma-green-dark)] via-[var(--ma-green)] to-[var(--ma-green-medium)] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_8px_30px_rgba(30,58,47,0.3)] border border-[var(--ma-gold)]/20">
          <Scale className="absolute -right-10 -bottom-10 text-[var(--ma-gold)]/5 w-64 h-64 transform -rotate-12 pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <h1 className="ma-display text-3xl md:text-4xl font-bold text-[var(--ma-gold)] mb-4 drop-shadow-md">
              Informasi Perkara & Jadwal Sidang
            </h1>
            <p className="ma-serif text-white/85 text-base md:text-lg mb-8 leading-relaxed">
              Layanan terpadu Mahkamah Agung untuk mencari detail putusan
              perkara serta memantau jadwal sidang dan agenda kelembagaan secara
              transparan.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  searchRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-[var(--ma-gold)] text-[var(--ma-green)] rounded-lg font-bold hover:bg-[var(--ma-gold-dark)] transition-colors flex items-center gap-2 shadow-sm"
              >
                <Search size={18} /> Pencarian Perkara
              </button>
              <button
                onClick={() =>
                  calendarRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-bold hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                <Calendar size={18} /> Kalender Agenda
              </button>
            </div>
          </div>
          <div className="hidden md:flex relative z-10 opacity-20">
            <Scale size={160} />
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--ma-gold)] opacity-5 rounded-full blur-3xl -mr-10 -mt-10" />
        </div>

        {/* ── Cari Putusan & Perkara ── */}
        <section ref={searchRef}>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[var(--ma-title)] mb-2">
              Pencarian Perkara
            </h2>
            <div className="h-1 w-24 bg-[var(--ma-gold)] mb-4 rounded-full" />
            <p className="text-[var(--ma-text)]">
              Cari putusan & informasi perkara dari pengadilan di seluruh
              Indonesia
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-gray-100">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[var(--ma-title)] mb-2">
                  Kata Kunci
                </label>
                <div className="relative">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--ma-text-muted)]"
                    size={20}
                  />
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    placeholder="Nomor perkara, nama pihak, atau kata kunci..."
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--ma-gold)] focus:border-[var(--ma-gold)] text-[var(--ma-title)] placeholder:text-[var(--ma-text-muted)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--ma-title)] mb-2">
                    Jenis Perkara
                  </label>
                  <div className="relative">
                    <select
                      value={caseType}
                      onChange={(e) => setCaseType(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--ma-gold)] focus:border-[var(--ma-gold)] appearance-none bg-white text-[var(--ma-title)]"
                    >
                      {caseTypes.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                    <Filter
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--ma-text-muted)] pointer-events-none"
                      size={18}
                    />
                  </div>
                  {caseType && (
                    <div className="mt-2 p-3 bg-[var(--ma-green-soft)] rounded-lg flex items-start gap-2 border border-[var(--ma-green-medium)]/20">
                      <Info
                        size={15}
                        className="text-[var(--ma-green-medium)] mt-0.5 flex-shrink-0"
                      />
                      <p className="text-xs text-[var(--ma-green)]">
                        {caseTypes.find((t) => t.value === caseType)?.tooltip}
                      </p>
                    </div>
                  )}
                </div>
                <CalendarPicker
                  label="Tanggal Dari"
                  value={dateFrom}
                  onChange={setDateFrom}
                  placeholder="Pilih tanggal awal"
                />
                <CalendarPicker
                  label="Tanggal Sampai"
                  value={dateTo}
                  onChange={setDateTo}
                  placeholder="Pilih tanggal akhir"
                />
              </div>

              {(dateFrom || dateTo) && (
                <div className="flex items-center gap-2 p-3 bg-[var(--ma-gold-soft)] rounded-lg border border-[var(--ma-gold)]/30">
                  <Calendar
                    size={15}
                    className="text-[var(--ma-gold-dark)] flex-shrink-0"
                  />
                  <span className="text-sm text-[var(--ma-green)]">
                    Filter tanggal: {dateFrom ? formatDate(dateFrom) : "..."} —{" "}
                    {dateTo ? formatDate(dateTo) : "..."}
                  </span>
                  <button
                    onClick={() => {
                      setDateFrom(null);
                      setDateTo(null);
                    }}
                    className="ml-auto text-[var(--ma-gold-dark)] hover:text-red-500"
                  >
                    <X size={15} />
                  </button>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={handleSearch}
                  className="flex-1 bg-[var(--ma-gold)] text-[var(--ma-green)] py-3 px-6 rounded-lg hover:bg-[var(--ma-gold-dark)] transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Search size={18} /> Cari Sekarang
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border-2 border-[var(--ma-green-medium)] text-[var(--ma-green)] rounded-lg hover:bg-[var(--ma-green-soft)] transition-colors font-medium flex items-center gap-2"
                >
                  <X size={18} /> Reset
                </button>
              </div>
            </div>
          </div>

          {searched && (
            <div className="mt-6 bg-white rounded-xl shadow-sm p-6 border-2 border-gray-100">
              {results.length > 0 ? (
                <>
                  <div className="mb-5">
                    <h2 className="text-lg font-semibold text-[var(--ma-title)]">
                      Hasil Pencarian
                    </h2>
                    <p className="text-sm text-[var(--ma-text)] mt-1">
                      {results.length} hasil{keyword && <> untuk "{keyword}"</>}
                      {(dateFrom || dateTo) && (
                        <>
                          {" "}
                          — {dateFrom ? formatDate(dateFrom) : "..."} s/d{" "}
                          {dateTo ? formatDate(dateTo) : "..."}
                        </>
                      )}
                    </p>
                  </div>
                  <div className="space-y-4">
                    {results.map((r) => (
                      <div
                        key={r.id}
                        className="bg-white border-2 border-gray-100 rounded-xl p-5 hover:border-[var(--ma-gold)]/60 hover:shadow-[0_8px_30px_rgba(201,168,76,0.15)] transform hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <FileText
                                  className="text-[var(--ma-gold)]"
                                  size={18}
                                />
                                <h3 className="font-semibold text-[var(--ma-title)]">
                                  {r.nomorPerkara}
                                </h3>
                              </div>
                              <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-[var(--ma-text)]">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-medium text-[var(--ma-title)]">
                                    Jenis:
                                  </span>
                                  <span className="bg-[var(--ma-green-soft)] text-[var(--ma-green)] px-2.5 py-0.5 rounded-full border border-[var(--ma-green-medium)]/20 text-xs font-medium">
                                    {r.jenisPerkara}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <Calendar
                                    size={13}
                                    className="text-[var(--ma-gold)]"
                                  />
                                  {r.tanggal}
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <MapPin
                                    size={13}
                                    className="text-[var(--ma-gold)]"
                                  />
                                  {r.pengadilan}
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <span className="font-medium text-[var(--ma-title)]">
                                    Status:
                                  </span>
                                  <span
                                    className={`px-2.5 py-0.5 rounded-full border text-xs font-medium ${r.status === "Telah diputus" ? "bg-[var(--ma-green-soft)] text-[var(--ma-green)] border-[var(--ma-green-medium)]/20" : "bg-[var(--ma-gold-soft)] text-[var(--ma-gold-dark)] border-[var(--ma-gold)]/20"}`}
                                  >
                                    {r.status}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => jumpToCalendar(r.nomorPerkara)}
                              className="bg-[var(--ma-gold)] text-[var(--ma-green)] px-5 py-2 rounded-lg hover:bg-[var(--ma-gold-dark)] transition-colors text-sm font-medium self-start whitespace-nowrap"
                            >
                              Lihat Jadwal di Kalender
                            </button>
                          </div>
                          <div className="bg-[#FAFAFA] rounded-lg p-4 border border-gray-100">
                            <p className="text-sm text-[var(--ma-text)] leading-relaxed italic">
                              "{r.cuplikan}"
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="bg-[var(--ma-gold-soft)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Search size={32} className="text-[var(--ma-gold-dark)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--ma-title)] mb-1">
                    Tidak ditemukan hasil
                  </h3>
                  <p className="text-sm text-[var(--ma-text)] mb-5">
                    Coba ubah kata kunci, filter, atau rentang tanggal.
                  </p>
                  <button
                    onClick={handleReset}
                    className="bg-[var(--ma-gold)] text-[var(--ma-green)] px-5 py-2 rounded-lg hover:bg-[var(--ma-gold-dark)] transition-colors text-sm font-medium"
                  >
                    Reset Pencarian
                  </button>
                </div>
              )}
            </div>
          )}
        </section>

        {/* ── Kalender Lengkap ── */}
        <section ref={calendarRef}>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[var(--ma-title)] mb-2">
              Kalender Mahkamah Agung
            </h2>
            <div className="h-1 w-20 bg-[var(--ma-gold)] mb-4 rounded-full" />
            <p className="text-[var(--ma-text)]">
              Jadwal sidang, pengucapan putusan, agenda kelembagaan, dan hari
              libur dalam satu tampilan
            </p>
          </div>
          <FullCalendar
            activeCase={activeCase}
            onSearchCase={handleSearchCase}
          />
        </section>
      </div>
    </div>
  );
}
