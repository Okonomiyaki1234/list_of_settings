import Link from "next/link";

import { supabase } from "../../supabaseClient";

export default async function StoryList() {
  const { data: stories, error } = await supabase
    .from("events")
    .select("id, title, yomi")
    .eq("is_story", true);
  if (error) {
    return <div>データ取得エラー: {error.message}</div>;
  }
  if (!stories) {
    return <div>ストーリーが見つかりません。</div>;
  }
  return (
    <div style={{ padding: "2rem" }}>
      <h2>ストーリー一覧</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc" }}>タイトル</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>読み仮名</th>
          </tr>
        </thead>
        <tbody>
          {stories.map((story: any) => (
            <tr key={story.id}>
              <td>
                <Link href={`/main/story/${story.id}`}>{story.title}</Link>
              </td>
              <td>{story.yomi || "-"}</td>
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
