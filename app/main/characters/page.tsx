
import Link from "next/link";
import { characters } from "./charactersData";

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
