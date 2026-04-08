import Link from "next/link";
import { events } from "../../history/eventsData";

function getStoryById(id: string | number) {
  return events.find((e) => e.id === Number(id) && e.isStory);
}

interface Params {
  id: string;
}

export default function StoryDetail({ params }: { params: Params }) {
  const story = getStoryById(params.id);
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
      <p><b>直前の前提作品：</b>{story.prevWork || "-"}</p>
      <p><b>直後の続編作品：</b>{story.nextWork || "-"}</p>
      <p style={{ marginTop: "2rem" }}>
        <Link href="/main/story">← 一覧に戻る</Link>
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  return events.filter(e => e.isStory).map((e) => ({ id: String(e.id) }));
}
