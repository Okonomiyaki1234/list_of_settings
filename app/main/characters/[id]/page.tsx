import Link from "next/link";


import { supabase } from "@/app/supabaseClient";

async function getCharacterById(id: string | number) {
  const { data, error } = await supabase
    .from("characters")
    .select("*")
    .eq("id", id)
    .single();
  if (error) return null;
  return data;
}

interface Params {
  id: string;
}

export default async function CharacterDetail({ params }: { params: Params }) {
  const character = await getCharacterById(params.id);
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
      <p><b>関係者：</b>{Array.isArray(character.relations) ? character.relations.map((r: any) => `${r.name}（${r.relation}）`).join(", ") : "-"}</p>
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
  const { data, error } = await supabase.from("characters").select("id");
  if (error || !data) return [];
  return data.map((c: any) => ({ id: String(c.id) }));
}
