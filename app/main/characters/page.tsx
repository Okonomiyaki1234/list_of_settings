import Link from "next/link";

// 仮データ（DB未接続）
const characters = [
  {
    id: 1,
    surname: "律",
    name: "一郎",
    sou: "陽",
    image: null,
  },
  {
    id: 2,
    surname: "和泉",
    name: "美咲",
    sou: "陰",
    image: null,
  },
];

export default function CharactersList() {
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
          {characters.map((ch) => (
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
