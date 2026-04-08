// アイテム・遺物 仮データ
export interface Item {
  id: number;
  name: string;
  yomi: string;
  creator?: string;
  description: string;
  effect?: string;
}

export const items: Item[] = [
  {
    id: 1,
    name: "律の剣",
    yomi: "りつのけん",
    creator: "律 一郎",
    description: "律家に伝わる伝説の剣。",
    effect: "持つ者に勇気を与える。",
  },
  {
    id: 2,
    name: "和泉の鏡",
    yomi: "いずみのかがみ",
    creator: "和泉 美咲",
    description: "和泉家に伝わる不思議な鏡。",
    effect: "真実を映し出す。",
  },
];
