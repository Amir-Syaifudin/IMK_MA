import { Search, Filter, X, FileText, Calendar, MapPin, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router';

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

const mockResults: SearchResult[] = [
  {
    id: '1',
    nomorPerkara: '123/Pdt.G/2025/PN Jkt.Sel',
    jenisPerkara: 'Perdata',
    tahun: '2025',
    tanggal: '15 Januari 2025',
    status: 'Telah diputus',
    pengadilan: 'PN Jakarta Selatan',
    cuplikan: 'Menimbang bahwa gugatan Penggugat telah memenuhi syarat formil dan materiil. Majelis Hakim memutuskan mengabulkan gugatan Penggugat untuk sebagian dan menghukum Tergugat untuk membayar ganti rugi...',
  },
  {
    id: '2',
    nomorPerkara: '456/Pid.B/2025/PN Sby',
    jenisPerkara: 'Pidana',
    tahun: '2025',
    tanggal: '20 Februari 2025',
    status: 'Dalam proses',
    pengadilan: 'PN Surabaya',
    cuplikan: 'Terdakwa didakwa dengan Pasal 362 KUHP tentang pencurian. Jaksa Penuntut Umum menghadirkan 3 orang saksi dan barang bukti berupa rekaman CCTV. Sidang berikutnya dijadwalkan untuk pemeriksaan saksi...',
  },
  {
    id: '3',
    nomorPerkara: '789/TUN/2024/PTUN Bdg',
    jenisPerkara: 'Tata Usaha Negara',
    tahun: '2024',
    tanggal: '10 Desember 2024',
    status: 'Telah diputus',
    pengadilan: 'PTUN Bandung',
    cuplikan: 'Menimbang bahwa objek sengketa adalah Surat Keputusan Bupati tentang pemberhentian Penggugat. Majelis Hakim menyatakan batal demi hukum keputusan Tergugat dan memerintahkan pencabutan...',
  },
  {
    id: '4',
    nomorPerkara: '321/Pdt.G/2024/PA Jkt.Tim',
    jenisPerkara: 'Agama',
    tahun: '2024',
    tanggal: '05 November 2024',
    status: 'Telah diputus',
    pengadilan: 'PA Jakarta Timur',
    cuplikan: 'Majelis Hakim memutuskan menjatuhkan talak satu ba\'in shughraa Tergugat terhadap Penggugat. Hak asuh anak diberikan kepada Penggugat dengan kewajiban Tergugat memberikan nafkah anak...',
  },
  {
    id: '5',
    nomorPerkara: '654/Pid.Sus/2025/PN Mdn',
    jenisPerkara: 'Pidana',
    tahun: '2025',
    tanggal: '02 Maret 2025',
    status: 'Dalam proses',
    pengadilan: 'PN Medan',
    cuplikan: 'Terdakwa didakwa melanggar Undang-Undang Nomor 35 Tahun 2009 tentang Narkotika. Barang bukti berupa 2,5 gram sabu-sabu diamankan dari kediaman terdakwa. Pemeriksaan ahli BNN telah dilakukan...',
  },
];

const caseTypes = [
  { value: '', label: 'Semua Jenis' },
  { value: 'perdata', label: 'Perdata', tooltip: 'Sengketa antar individu atau badan hukum' },
  { value: 'pidana', label: 'Pidana', tooltip: 'Tindak pidana/kejahatan' },
  { value: 'tun', label: 'Tata Usaha Negara', tooltip: 'Sengketa keputusan pemerintah' },
  { value: 'agama', label: 'Agama', tooltip: 'Perkara perkawinan, waris, dll (Islam)' },
  { value: 'militer', label: 'Militer', tooltip: 'Perkara anggota TNI' },
];

const MONTHS = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

const DAYS = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function formatDate(date: Date): string {
  const d = date.getDate().toString().padStart(2, '0');
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
}

interface CalendarPickerProps {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder: string;
}

function CalendarPicker({ label, value, onChange, placeholder }: CalendarPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewYear, setViewYear] = useState(value?.getFullYear() ?? new Date().getFullYear());
  const [viewMonth, setViewMonth] = useState(value?.getMonth() ?? new Date().getMonth());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const selectDate = (day: number) => {
    const newDate = new Date(viewYear, viewMonth, day);
    onChange(newDate);
    setIsOpen(false);
  };

  const isSelected = (day: number) => {
    if (!value) return false;
    return value.getDate() === day && value.getMonth() === viewMonth && value.getFullYear() === viewYear;
  };

  const isToday = (day: number) => {
    const today = new Date();
    return today.getDate() === day && today.getMonth() === viewMonth && today.getFullYear() === viewYear;
  };

  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-[#C9A84C] bg-white text-left hover:border-[#C9A84C] transition-colors"
      >
        <Calendar size={20} className="text-[#C9A84C] flex-shrink-0" />
        <span className={value ? 'text-[#1A1A1A]' : 'text-[#8A8A8A]'}>
          {value ? formatDate(value) : placeholder}
        </span>
        {value && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChange(null);
            }}
            className="ml-auto text-[#8A8A8A] hover:text-red-500 transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl p-4 w-[320px] animate-fadeIn">
          {/* Month/Year Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={prevMonth}
              className="p-1.5 rounded-lg hover:bg-[#F9F3E3] transition-colors"
            >
              <ChevronLeft size={18} className="text-[#1E3A2F]" />
            </button>
            <span className="font-semibold text-[#1A1A1A]">
              {MONTHS[viewMonth]} {viewYear}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              className="p-1.5 rounded-lg hover:bg-[#F9F3E3] transition-colors"
            >
              <ChevronRight size={18} className="text-[#1E3A2F]" />
            </button>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {DAYS.map((day) => (
              <div key={day} className="text-center text-xs font-medium text-[#8A8A8A] py-1">
                {day}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => selectDate(day)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-all flex items-center justify-center ${
                  isSelected(day)
                    ? 'bg-[#C9A84C] text-[#1E3A2F] shadow-md'
                    : isToday(day)
                    ? 'bg-[#E8F2ED] text-[#1E3A2F] border border-[#2E5A45]/30'
                    : 'text-[#1A1A1A] hover:bg-[#F9F3E3]'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Today button */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <button
              type="button"
              onClick={() => {
                const today = new Date();
                setViewYear(today.getFullYear());
                setViewMonth(today.getMonth());
                onChange(today);
                setIsOpen(false);
              }}
              className="w-full text-center text-sm text-[#C9A84C] hover:text-[#A8852A] font-medium transition-colors py-1"
            >
              Hari Ini
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('q') || '');
  const [caseType, setCaseType] = useState('');
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setKeyword(query);
      handleSearch();
    }
  }, [searchParams]);

  const handleSearch = () => {
    setSearched(true);
    if (keyword.trim() || dateFrom || dateTo || caseType) {
      setResults(mockResults);
    } else {
      setResults([]);
    }
  };

  const handleReset = () => {
    setKeyword('');
    setCaseType('');
    setDateFrom(null);
    setDateTo(null);
    setResults([]);
    setSearched(false);
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2">
            Informasi Perkara & Putusan
          </h1>
          <div className="h-1 w-24 bg-[#C9A84C] mb-4 rounded-full"></div>
          <p className="text-[#4A4A4A]">
            Cari putusan dan informasi perkara dari pengadilan di seluruh Indonesia
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border-2 border-gray-100">
          <div className="space-y-6">
            {/* Keyword Search */}
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                Kata Kunci
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A8A]" size={20} />
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Masukkan nomor perkara, nama pihak, atau kata kunci..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-[#C9A84C] text-[#1A1A1A] placeholder:text-[#8A8A8A]"
                />
              </div>
            </div>

            {/* Filters Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Case Type Filter */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Jenis Perkara
                </label>
                <div className="relative">
                  <select
                    value={caseType}
                    onChange={(e) => setCaseType(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-[#C9A84C] appearance-none bg-white text-[#1A1A1A]"
                  >
                    {caseTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8A8A] pointer-events-none" size={20} />
                </div>
                {caseType && (
                  <div className="mt-2 p-3 bg-[#E8F2ED] rounded-lg flex items-start gap-2 border border-[#2E5A45]/20">
                    <Info size={16} className="text-[#2E5A45] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[#1E3A2F]">
                      {caseTypes.find(t => t.value === caseType)?.tooltip}
                    </p>
                  </div>
                )}
              </div>

              {/* Date From */}
              <CalendarPicker
                label="Tanggal Dari"
                value={dateFrom}
                onChange={setDateFrom}
                placeholder="Pilih tanggal awal"
              />

              {/* Date To */}
              <CalendarPicker
                label="Tanggal Sampai"
                value={dateTo}
                onChange={setDateTo}
                placeholder="Pilih tanggal akhir"
              />
            </div>

            {/* Active date filter indicator */}
            {(dateFrom || dateTo) && (
              <div className="flex items-center gap-2 p-3 bg-[#F9F3E3] rounded-lg border border-[#C9A84C]/30">
                <Calendar size={16} className="text-[#A8852A] flex-shrink-0" />
                <span className="text-sm text-[#1E3A2F]">
                  Filter tanggal aktif: {dateFrom ? formatDate(dateFrom) : '...'} — {dateTo ? formatDate(dateTo) : '...'}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setDateFrom(null);
                    setDateTo(null);
                  }}
                  className="ml-auto text-[#A8852A] hover:text-red-500 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleSearch}
                className="flex-1 bg-[#C9A84C] text-[#1E3A2F] py-3 px-6 rounded-lg hover:bg-[#A8852A] transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Search size={20} />
                Cari Sekarang
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-3 border-2 border-[#2E5A45] text-[#1E3A2F] rounded-lg hover:bg-[#E8F2ED] transition-colors font-medium flex items-center gap-2"
              >
                <X size={20} />
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Search Results */}
        {searched && (
          <div className="bg-white rounded-xl shadow-sm p-6 border-2 border-gray-100">
            {results.length > 0 ? (
              <>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-[#1A1A1A]">
                    Hasil Pencarian
                  </h2>
                  <p className="text-sm text-[#4A4A4A] mt-1">
                    Ditemukan {results.length} hasil
                    {keyword && <> untuk "{keyword}"</>}
                    {(dateFrom || dateTo) && (
                      <> — periode {dateFrom ? formatDate(dateFrom) : '...'} s/d {dateTo ? formatDate(dateTo) : '...'}</>
                    )}
                  </p>
                </div>

                <div className="space-y-4">
                  {results.map((result) => (
                    <div
                      key={result.id}
                      className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#C9A84C] hover:shadow-md transition-all"
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <FileText className="text-[#C9A84C]" size={20} />
                              <h3 className="font-semibold text-[#1A1A1A]">
                                {result.nomorPerkara}
                              </h3>
                            </div>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#4A4A4A]">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-[#1A1A1A]">Jenis:</span>
                                <span className="bg-[#E8F2ED] text-[#1E3A2F] px-3 py-0.5 rounded-full border border-[#2E5A45]/20 text-xs font-medium">
                                  {result.jenisPerkara}
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Calendar size={14} className="text-[#C9A84C]" />
                                <span>{result.tanggal}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <MapPin size={14} className="text-[#C9A84C]" />
                                <span>{result.pengadilan}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-[#1A1A1A]">Status:</span>
                                <span className={`px-3 py-0.5 rounded-full border text-xs font-medium ${
                                  result.status === 'Telah diputus'
                                    ? 'bg-[#E8F2ED] text-[#1E3A2F] border-[#2E5A45]/20'
                                    : 'bg-[#F9F3E3] text-[#A8852A] border-[#C9A84C]/20'
                                }`}>
                                  {result.status}
                                </span>
                              </div>
                            </div>
                          </div>
                          <button className="bg-[#C9A84C] text-[#1E3A2F] px-6 py-2 rounded-lg hover:bg-[#A8852A] transition-colors whitespace-nowrap font-medium self-start">
                            Lihat Detail
                          </button>
                        </div>

                        {/* Cuplikan Putusan */}
                        <div className="bg-[#FAFAFA] rounded-lg p-4 border border-gray-100">
                          <p className="text-sm text-[#4A4A4A] leading-relaxed italic">
                            "{result.cuplikan}"
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="bg-[#F9F3E3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={40} className="text-[#A8852A]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                  Tidak ditemukan hasil
                </h3>
                <p className="text-[#4A4A4A] mb-6">
                  Tidak ditemukan hasil untuk "{keyword}". Coba ubah kata kunci, filter, atau rentang tanggal.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-[#C9A84C] text-[#1E3A2F] px-6 py-2 rounded-lg hover:bg-[#A8852A] transition-colors font-medium"
                >
                  Reset Pencarian
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
