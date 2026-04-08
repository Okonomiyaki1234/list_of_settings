import Link from "next/link";


import { supabase } from "@/app/supabaseClient";

async function getEventById(id: string | number) {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();
  if (error) return null;
  return data;
}

interface Params {
  id: string;
}

export default async function EventDetail({ params }: { params: Params }) {
  const event = await getEventById(params.id);
  if (!event) {
    return <div>イベントが見つかりません。</div>;
  }
  return (
    <div style={{ padding: "2rem" }}>
      <h2>{event.title}</h2>
      <p><b>期間：</b>{event.period?.start || "-"} ～ {event.period?.end || "-"}</p>
      <p><b>説明：</b>{event.description}</p>
      <p><b>登場キャラクター：</b>{event.characters?.join(", ") || "-"}</p>
      <p><b>場所：</b>{event.places?.join(", ") || "-"}</p>
      <p><b>直前の前提作品：</b>{event.prev_work || "-"}</p>
      <p><b>直後の続編作品：</b>{event.next_work || "-"}</p>
      <p style={{ marginTop: "2rem" }}>
        <Link href="/main/history">← 一覧に戻る</Link>
      </p>
    </div>
  );
}


export async function generateStaticParams() {
  const { data, error } = await supabase.from("events").select("id");
  if (error || !data) return [];
  return data.map((e: any) => ({ id: String(e.id) }));
}
