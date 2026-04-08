import Link from "next/link";

import { events } from "../eventsData";

function getEventById(id: string | number) {
  return events.find((e) => e.id === Number(id));
}

interface Params {
  id: string;
}

export default function EventDetail({ params }: { params: Params }) {
  const event = getEventById(params.id);
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
      <p><b>直前の前提作品：</b>{event.prevWork || "-"}</p>
      <p><b>直後の続編作品：</b>{event.nextWork || "-"}</p>
      <p style={{ marginTop: "2rem" }}>
        <Link href="/main/history">← 一覧に戻る</Link>
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  return events.map((e) => ({ id: String(e.id) }));
}
