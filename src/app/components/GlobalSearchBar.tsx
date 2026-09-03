import { MagnifyingGlass } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { searchUnified, categoryIcon } from "../lib/unifiedSearch";

export function GlobalSearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const results = useMemo(() => searchUnified(query), [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    if (results.length > 0) {
      navigate(results[0].path);
    } else {
      navigate(`/perkara?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-[var(--ma-gold)]/20 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] p-4 sm:p-6">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <MagnifyingGlass
              size={22}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--ma-text-muted)]"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari putusan, jadwal sidang, atau berita..."
              className="w-full rounded-xl border-2 border-gray-200 bg-white py-3.5 pl-12 pr-28 text-[var(--ma-title)] placeholder:text-[var(--ma-text-muted)] focus:border-[var(--ma-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--ma-gold)]/40"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-[var(--ma-gold)] px-4 py-2 text-sm font-bold text-[var(--ma-green-dark)] transition-colors hover:bg-[var(--ma-gold-dark)]"
            >
              Cari
            </button>
          </div>
        </form>

        {query.trim() && (
          <div className="mt-4 border-t border-gray-100 pt-4">
            {results.length === 0 ? (
              <p className="text-sm text-[var(--ma-text-muted)]">
                Tidak ditemukan hasil untuk "{query}".
              </p>
            ) : (
              <div className="flex flex-col gap-2">
                {results.map((hit) => {
                  const Icon = categoryIcon[hit.category];
                  return (
                    <Link
                      key={hit.id}
                      to={hit.path}
                      className="flex items-center gap-3 rounded-xl border border-gray-100 bg-[#FAFAFA] px-4 py-3 transition-colors hover:border-[var(--ma-gold)]/50 hover:bg-[var(--ma-gold-soft)]"
                    >
                      <Icon size={18} className="shrink-0 text-[var(--ma-gold-dark)]" />
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-semibold text-[var(--ma-title)]">
                          {hit.title}
                        </div>
                        <div className="text-xs text-[var(--ma-text-muted)]">
                          {hit.subtitle}
                        </div>
                      </div>
                      <span className="shrink-0 text-[10px] font-bold uppercase tracking-wide text-[var(--ma-gold-dark)]">
                        {hit.category}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
