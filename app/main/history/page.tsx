import Link from "next/link";

import { events } from "./eventsData";

export default function HistoryList() {
  // 日付順ソート
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  return (
    <div style={{ padding: "2rem" }}>
      <h2>イベント（歴史）一覧</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc" }}>日付</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>タイトル</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>説明</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((ev) => (
            <tr key={ev.id}>
              <td>{ev.date}</td>
              <td>
                <Link href={`/main/history/${ev.id}`}>{ev.title}</Link>
              </td>
              <td>{ev.description}</td>
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
