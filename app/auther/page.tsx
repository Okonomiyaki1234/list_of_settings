"use client";
import React, { useState } from "react";
import { supabase } from "@/app/supabaseClient";

function AddCharacter() {
  const [form, setForm] = useState({ surname: "", name: "" });
  const [msg, setMsg] = useState("");
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from("characters").insert([form]);
    setMsg(error ? `エラー: ${error.message}` : "追加しました");
  }
  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>キャラクター追加フォーム</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="苗字" value={form.surname} onChange={e => setForm(f => ({ ...f, surname: e.target.value }))} style={{ marginRight: 8 }} required />
        <input type="text" placeholder="名前" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={{ marginRight: 8 }} required />
        <button type="submit">追加</button>
      </form>
      {msg && <div>{msg}</div>}
    </div>
  );
}

function EditCharacter() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from("characters").update({ name }).eq("id", id);
    setMsg(error ? `エラー: ${error.message}` : "編集しました");
  }
  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>キャラクター編集フォーム</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="キャラクターID" value={id} onChange={e => setId(e.target.value)} style={{ marginRight: 8 }} required />
        <input type="text" placeholder="新しい名前" value={name} onChange={e => setName(e.target.value)} style={{ marginRight: 8 }} required />
        <button type="submit">編集</button>
      </form>
      {msg && <div>{msg}</div>}
    </div>
  );
}
function AddItem() {
  const [form, setForm] = useState({ name: "", yomi: "" });
  const [msg, setMsg] = useState("");
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from("items").insert([form]);
    setMsg(error ? `エラー: ${error.message}` : "追加しました");
  }
  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>アイテム追加フォーム</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="名前" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={{ marginRight: 8 }} required />
        <input type="text" placeholder="読み仮名" value={form.yomi} onChange={e => setForm(f => ({ ...f, yomi: e.target.value }))} style={{ marginRight: 8 }} required />
        <button type="submit">追加</button>
      </form>
      {msg && <div>{msg}</div>}
    </div>
  );
}

function EditItem() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from("items").update({ name }).eq("id", id);
    setMsg(error ? `エラー: ${error.message}` : "編集しました");
  }
  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>アイテム編集フォーム</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="アイテムID" value={id} onChange={e => setId(e.target.value)} style={{ marginRight: 8 }} required />
        <input type="text" placeholder="新しい名前" value={name} onChange={e => setName(e.target.value)} style={{ marginRight: 8 }} required />
        <button type="submit">編集</button>
      </form>
      {msg && <div>{msg}</div>}
    </div>
  );
}

function AddEvent() {
  const [form, setForm] = useState({ title: "", date: "" });
  const [msg, setMsg] = useState("");
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from("events").insert([form]);
    setMsg(error ? `エラー: ${error.message}` : "追加しました");
  }
  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>イベント追加フォーム</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="タイトル" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} style={{ marginRight: 8 }} required />
        <input type="date" placeholder="日付" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} style={{ marginRight: 8 }} required />
        <button type="submit">追加</button>
      </form>
      {msg && <div>{msg}</div>}
    </div>
  );
}

function EditEvent() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from("events").update({ title }).eq("id", id);
    setMsg(error ? `エラー: ${error.message}` : "編集しました");
  }
  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>イベント編集フォーム</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="イベントID" value={id} onChange={e => setId(e.target.value)} style={{ marginRight: 8 }} required />
        <input type="text" placeholder="新しいタイトル" value={title} onChange={e => setTitle(e.target.value)} style={{ marginRight: 8 }} required />
        <button type="submit">編集</button>
      </form>
      {msg && <div>{msg}</div>}
    </div>
  );
}

export default function AutherPage() {
  const [mode, setMode] = useState<
    | "none"
    | "addCharacter"
    | "editCharacter"
    | "addItem"
    | "editItem"
    | "addEvent"
    | "editEvent"
  >("none");

  return (
    <div style={{ padding: "2rem" }}>
      <h2>管理画面（auther）</h2>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setMode("addCharacter")} style={{ marginRight: 8 }}>キャラクター追加</button>
        <button onClick={() => setMode("editCharacter")} style={{ marginRight: 8 }}>キャラクター編集</button>
        <button onClick={() => setMode("addItem")} style={{ marginRight: 8 }}>アイテム追加</button>
        <button onClick={() => setMode("editItem")} style={{ marginRight: 8 }}>アイテム編集</button>
        <button onClick={() => setMode("addEvent")} style={{ marginRight: 8 }}>イベント追加</button>
        <button onClick={() => setMode("editEvent")}>イベント編集</button>
      </div>
      {mode === "addCharacter" && <AddCharacter />}
      {mode === "editCharacter" && <EditCharacter />}
      {mode === "addItem" && <AddItem />}
      {mode === "editItem" && <EditItem />}
      {mode === "addEvent" && <AddEvent />}
      {mode === "editEvent" && <EditEvent />}
      {mode === "none" && <p>上のボタンで操作を選択してください。</p>}
    </div>
  );
}
