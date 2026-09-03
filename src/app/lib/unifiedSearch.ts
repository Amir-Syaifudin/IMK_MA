import { Scales, Megaphone, CalendarBlank } from "@phosphor-icons/react";
import { mockResults, mockEvents } from "../pages/SearchPage";
import { dummyData } from "../pages/InformationPage";

export interface SearchHit {
  id: string;
  category: "Perkara" | "Berita" | "Agenda";
  title: string;
  subtitle: string;
  path: string;
}

export const categoryIcon: Record<SearchHit["category"], React.ElementType> = {
  Perkara: Scales,
  Berita: Megaphone,
  Agenda: CalendarBlank,
};

function tokenMatch(haystack: string, tokens: string[]) {
  const h = haystack.toLowerCase();
  return tokens.some((t) => h.includes(t));
}

export function searchUnified(query: string): SearchHit[] {
  const raw = query.trim().toLowerCase();
  if (!raw) return [];
  const tokens = raw.split(/\s+/).filter(Boolean);
  const hits: SearchHit[] = [];

  const perkaraMatches = mockResults.filter((r) =>
    tokenMatch(r.nomorPerkara, tokens),
  );
  perkaraMatches.slice(0, 3).forEach((r) =>
    hits.push({
      id: `perkara-${r.id}`,
      category: "Perkara",
      title: r.nomorPerkara,
      subtitle: `${r.jenisPerkara} · ${r.tanggal}`,
      path: `/perkara?q=${encodeURIComponent(r.nomorPerkara)}`,
    }),
  );

  const beritaAll: any[] = dummyData.berita?.items || [];
  const beritaMatches = beritaAll.filter((b) =>
    tokenMatch(b.title, tokens),
  );
  beritaMatches.slice(0, 3).forEach((b) =>
    hits.push({
      id: `berita-${b.id}`,
      category: "Berita",
      title: b.title,
      subtitle: b.category,
      path: `/id/berita?q=${encodeURIComponent(b.title)}`,
    }),
  );

  const agendaMatches = mockEvents.filter((e) =>
    tokenMatch(e.title, tokens),
  );
  agendaMatches.slice(0, 3).forEach((e) =>
    hits.push({
      id: `agenda-${e.id}`,
      category: "Agenda",
      title: e.title,
      subtitle: `${e.tanggal}${e.jam ? " · " + e.jam : ""}`,
      path: "/perkara",
    }),
  );

  return hits;
}
