// イベント仮データ（DB未接続）
export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  period?: { start: string; end: string };
  prevWork?: string | null;
  nextWork?: string | null;
  characters?: string[];
  places?: string[];
}

export const events: Event[] = [
  {
    id: 1,
    title: "律家の創設",
    date: "1980-04-01",
    description: "律家が設立された記念日。",
    period: { start: "1980-04-01", end: "1980-04-01" },
    prevWork: null,
    nextWork: null,
    characters: ["律 一郎"],
    places: ["東京"],
  },
  {
    id: 2,
    title: "和泉家との出会い",
    date: "1995-07-15",
    description: "律家と和泉家が初めて出会った日。",
    period: { start: "1995-07-15", end: "1995-07-15" },
    prevWork: null,
    nextWork: null,
    characters: ["和泉 美咲", "律 一郎"],
    places: ["大阪"],
  },
  {
    id: 3,
    title: "律 一郎 誕生",
    date: "2000-01-01",
    description: "主人公・律一郎が誕生。",
    period: { start: "2000-01-01", end: "2000-01-01" },
    prevWork: null,
    nextWork: null,
    characters: ["律 一郎"],
    places: ["東京"],
  },
];
