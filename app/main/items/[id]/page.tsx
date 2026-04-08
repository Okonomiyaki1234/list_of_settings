import Link from "next/link";
import { items } from "../itemsData";

function getItemById(id: string | number) {
  return items.find((i) => i.id === Number(id));
}

interface Params {
  id: string;
}

export default function ItemDetail({ params }: { params: Params }) {
  const item = getItemById(params.id);
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
  return items.map((i) => ({ id: String(i.id) }));
}
