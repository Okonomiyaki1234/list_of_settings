import Link from "next/link";

import { characters } from "../charactersData";

function getCharacterById(id: string | number) {
  return characters.find((c) => c.id === Number(id));
}

interface Params {
  id: string;
}

export default function CharacterDetail({ params }: { params: Params }) {
  const character = getCharacterById(params.id);
  if (!character) {
    return <div>キャラクターが見つかりません。</div>;
  }
  return (
    <div style={{ padding: "2rem" }}>
      <h2>{character.surname} {character.name}（{character.sou}）</h2>
      <p><b>愛称：</b>{character.nickname || "-"}</p>
      <p><b>居住：</b>{character.residence}</p>
      <p><b>所属：</b>{character.belongs?.join(", ") || "-"}</p>
      <p><b>登場作品：</b>{character.works?.join(", ") || "-"}</p>
      <p><b>自己紹介：</b>{character.introduction}</p>
      <p><b>誕生日：</b>{character.birthday}</p>
      <p><b>命日：</b>{character.deathday}</p>
      <p><b>性別：</b>{character.gender}</p>
      <p><b>関係者：</b>{character.relations?.map(r => `${r.name}（${r.relation}）`).join(", ") || "-"}</p>
      <p><b>関連項目：</b>{character.related?.join(", ") || "-"}</p>
      <p><b>説明：</b>{character.description}</p>
      <p><b>画像：</b>{character.image ? <img src={character.image} alt="" width={80} /> : "-"}</p>
      <p><b>メモ：</b>{character.memo}</p>
      <p style={{ marginTop: "2rem" }}>
        <Link href="/main/characters">← 一覧に戻る</Link>
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  return characters.map((c) => ({ id: String(c.id) }));
}
