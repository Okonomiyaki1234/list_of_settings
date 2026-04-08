

import Link from "next/link";
import { supabase } from "../../supabaseClient";

export default async function CharactersList() {
  const { data: characters, error } = await supabase
    .from("characters")
    .select("id, surname, name, sou, image");
  if (error) {
    return <div>データ取得エラー: {error.message}</div>;
  }
  if (!characters) {
    return <div>キャラクターが見つかりません。</div>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>キャラクター一覧</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc" }}>苗字</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>名前</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>相</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>画像</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((ch: any) => (
            <tr key={ch.id}>
              <td>{ch.surname}</td>
              <td>
                <Link href={`/main/characters/${ch.id}`}>{ch.name}</Link>
              </td>
              <td>{ch.sou}</td>
              <td>{ch.image ? <img src={ch.image} alt="" width={40} /> : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
