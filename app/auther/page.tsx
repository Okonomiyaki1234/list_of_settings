"use client";
import { useState } from "react";

function AddCharacter() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>キャラクター追加フォーム</h3>
      {/* Supabase連携時に実装。今はダミー */}
      <form>
        <input type="text" placeholder="名前" style={{ marginRight: 8 }} />
        <input type="text" placeholder="苗字" style={{ marginRight: 8 }} />
        <button type="submit">追加</button>
      </form>
    </div>
  );
}

function EditCharacter() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>キャラクター編集フォーム</h3>
      {/* Supabase連携時に実装。今はダミー */}
      <form>
        <input type="text" placeholder="キャラクターID" style={{ marginRight: 8 }} />
        <input type="text" placeholder="新しい名前" style={{ marginRight: 8 }} />
        <button type="submit">編集</button>
      </form>
    </div>
  );
}

export default function AutherPage() {
  const [mode, setMode] = useState<"add" | "edit" | "none">("none");

  return (
    <div style={{ padding: "2rem" }}>
      <h2>管理画面（auther）</h2>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setMode("add")} style={{ marginRight: 8 }}>追加</button>
        <button onClick={() => setMode("edit")}>編集</button>
      </div>
      {mode === "add" && <AddCharacter />}
      {mode === "edit" && <EditCharacter />}
      {mode === "none" && <p>上のボタンで操作を選択してください。</p>}
    </div>
  );
}
