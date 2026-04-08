
import Link from "next/link";
import { supabase } from "../../supabaseClient";

export default async function ItemsList() {
  const { data: items, error } = await supabase
    .from("items")
    .select("id, name, yomi");
  if (error) {
    return <div>データ取得エラー: {error.message}</div>;
  }
  if (!items) {
    return <div>アイテムが見つかりません。</div>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>アイテム・遺物一覧</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc" }}>名前</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>読み仮名</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: any) => (
            <tr key={item.id}>
              <td>
                <Link href={`/main/items/${item.id}`}>{item.name}</Link>
              </td>
              <td>{item.yomi}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: "2rem" }}>
        <Link href="/">← ハブページへ戻る</Link>
      </p>
    </div>
  );
}
