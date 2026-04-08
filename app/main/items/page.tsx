import Link from "next/link";
import { items } from "./itemsData";

export default function ItemsList() {
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
          {items.map((item) => (
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
