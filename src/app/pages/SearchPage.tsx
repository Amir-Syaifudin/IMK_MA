import { Search, Filter, X, FileText, Calendar, MapPin, Info } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';

interface SearchResult {
  id: string;
  nomorPerkara: string;
  jenisPerkara: string;
  tahun: string;
  tanggal: string;
  status: string;
  pengadilan: string;
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
  },
  {
    id: '2',
    nomorPerkara: '456/Pid.B/2025/PN Sby',
    jenisPerkara: 'Pidana',
    tahun: '2025',
    tanggal: '20 Februari 2025',
    status: 'Dalam proses',
    pengadilan: 'PN Surabaya',
  },
  {
    id: '3',
    nomorPerkara: '789/TUN/2024/PTUN Bdg',
    jenisPerkara: 'Tata Usaha Negara',
    tahun: '2024',
    tanggal: '10 Desember 2024',
    status: 'Telah diputus',
    pengadilan: 'PTUN Bandung',
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

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('q') || '');
  const [caseType, setCaseType] = useState('');
  const [year, setYear] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searched, setSearched] = useState(false);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setKeyword(query);
      handleSearch();
    }
  }, [searchParams]);

  const handleSearch = () => {
    setSearched(true);
    if (keyword.trim()) {
      setResults(mockResults);
    } else {
      setResults([]);
    }
  };

  const handleReset = () => {
    setKeyword('');
    setCaseType('');
    setYear('');
    setResults([]);
    setSearched(false);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

  return (
    <div className="min-h-screen bg-[#F2F2F2] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2">
            Pencarian Putusan & Perkara
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

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              {/* Year Filter */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Tahun
                </label>
                <div className="relative">
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-[#C9A84C] appearance-none bg-white text-[#1A1A1A]"
                  >
                    <option value="">Semua Tahun</option>
                    {years.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8A8A] pointer-events-none" size={20} />
                </div>
              </div>
            </div>

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
                    Ditemukan {results.length} hasil untuk "{keyword}"
                  </p>
                </div>

                <div className="space-y-4">
                  {results.map((result) => (
                    <div
                      key={result.id}
                      className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#C9A84C] hover:shadow-md transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <FileText className="text-[#C9A84C]" size={20} />
                            <h3 className="font-semibold text-[#1A1A1A]">
                              {result.nomorPerkara}
                            </h3>
                          </div>
                          <div className="space-y-2 text-sm text-[#4A4A4A]">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-[#1A1A1A]">Jenis Perkara:</span>
                              <span className="bg-[#E8F2ED] text-[#1E3A2F] px-3 py-1 rounded-full border border-[#2E5A45]/20">
                                {result.jenisPerkara}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar size={16} className="text-[#C9A84C]" />
                              <span>{result.tanggal}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} className="text-[#C9A84C]" />
                              <span>{result.pengadilan}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-[#1A1A1A]">Status:</span>
                              <span className={`px-3 py-1 rounded-full border ${
                                result.status === 'Telah diputus'
                                  ? 'bg-[#E8F2ED] text-[#1E3A2F] border-[#2E5A45]/20'
                                  : 'bg-[#F9F3E3] text-[#A8852A] border-[#C9A84C]/20'
                              }`}>
                                {result.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className="bg-[#C9A84C] text-[#1E3A2F] px-6 py-2 rounded-lg hover:bg-[#A8852A] transition-colors whitespace-nowrap font-medium">
                          Lihat Detail
                        </button>
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
                  Tidak ditemukan hasil untuk "{keyword}". Coba ubah kata kunci atau filter pencarian Anda.
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
