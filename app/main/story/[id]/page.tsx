import Link from "next/link";

import { supabase } from "@/app/supabaseClient";

async function getStoryById(id: string | number) {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .eq("is_story", true)
    .single();
  if (error) return null;
  return data;
}

interface Params {
  id: string;
}

export default async function StoryDetail({ params }: { params: Params }) {
  const story = await getStoryById(params.id);
  if (!story) {
    return <div>ストーリーが見つかりません。</div>;
  }
  return (
    <div style={{ padding: "2rem" }}>
      <h2>{story.title}（{story.yomi || "-"}）</h2>
      <p><b>期間：</b>{story.period?.start || "-"} ～ {story.period?.end || "-"}</p>
      <p><b>説明：</b>{story.description}</p>
      <p><b>登場キャラクター：</b>{story.characters?.join(", ") || "-"}</p>
      <p><b>場所：</b>{story.places?.join(", ") || "-"}</p>
      <p><b>直前の前提作品：</b>{story.prev_work || "-"}</p>
      <p><b>直後の続編作品：</b>{story.next_work || "-"}</p>
      <p style={{ marginTop: "2rem" }}>
        <Link href="/main/story">← 一覧に戻る</Link>
      </p>
    </div>
  );
}


export async function generateStaticParams() {
  const { data, error } = await supabase.from("events").select("id").eq("is_story", true);
  if (error || !data) return [];
  return data.map((e: any) => ({ id: String(e.id) }));
}
