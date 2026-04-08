import Link from "next/link";

import { supabase } from "@/app/supabaseClient";

async function getItemById(id: string | number) {
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .eq("id", id)
    .single();
  if (error) return null;
  return data;
}

interface Params {
  id: string;
}

export default async function ItemDetail({ params }: { params: Params }) {
  const item = await getItemById(params.id);
  if (!item) {
    return <div>アイテムが見つかりません。</div>;
  }
  return (
    <div style={{ padding: "2rem" }}>
      <h2>{item.name}（{item.yomi}）</h2>
      <p><b>製作者：</b>{item.creator || "-"}</p>
      <p><b>説明：</b>{item.description}</p>
      <p><b>効果：</b>{item.effect || "-"}</p>
      <p style={{ marginTop: "2rem" }}>
        <Link href="/main/items">← 一覧に戻る</Link>
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  const { data, error } = await supabase.from("items").select("id");
  if (error || !data) return [];
  return data.map((i: any) => ({ id: String(i.id) }));
}
