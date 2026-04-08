// キャラクター仮データ（DB未接続）
export interface Character {
  id: number;
  surname: string;
  name: string;
  nickname?: string | null;
  residence?: string;
  belongs?: string[];
  sou: string;
  works?: string[];
  introduction?: string;
  birthday?: string;
  deathday?: string;
  gender?: string;
  relations?: { name: string; relation: string }[];
  related?: string[];
  description?: string;
  image?: string | null;
  memo?: string;
}

export const characters: Character[] = [
  {
    id: 1,
    surname: "律",
    name: "一郎",
    nickname: "いっちー",
    residence: "東京",
    belongs: ["律家"],
    sou: "陽",
    works: ["律伝"],
    introduction: "明るく前向きな性格。",
    birthday: "2000-01-01",
    deathday: "-",
    gender: "男",
    relations: [{ name: "和泉 美咲", relation: "友人" }],
    related: ["律家"],
    description: "主人公。家族思い。",
    image: null,
    memo: "メモ欄：今後DB化予定。"
  },
  {
    id: 2,
    surname: "和泉",
    name: "美咲",
    nickname: null,
    residence: "大阪",
    belongs: ["和泉家"],
    sou: "陰",
    works: ["律伝"],
    introduction: "冷静沈着。",
    birthday: "2000-02-02",
    deathday: "-",
    gender: "女",
    relations: [{ name: "律 一郎", relation: "友人" }],
    related: ["和泉家"],
    description: "ヒロイン。",
    image: null,
    memo: "メモ欄：詳細未定。"
  },
];
